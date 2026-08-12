#!/usr/bin/env node
// 過去問データの整合性チェック。
// 使い方: node scripts/validate-questions.mjs
//
// このセッション中に手作業で何度も繰り返した確認を自動化したもの。
// 新しい年度・科目・資格種別を追加したら、コミット前に必ず実行すること。

import { readFileSync, readdirSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "src", "data");

const dataFiles = readdirSync(dataDir).filter((f) => f.endsWith(".js"));

let totalIssues = 0;
const allIds = new Map(); // id -> file (to catch duplicates across files)

function unescape(s) {
  return s.replace(/\\n/g, "\n").replace(/\\"/g, '"');
}

for (const file of dataFiles) {
  const filePath = path.join(dataDir, file);
  const content = readFileSync(filePath, "utf-8");

  // id, question, choices を抽出(image / answer / note は正規表現では扱わない)
  const entryRe =
    /id:\s*"([^"]+)",\s*\n\s*question:\s*\n?\s*"((?:[^"\\]|\\.)*)"\s*,[\s\S]*?choices:\s*\[([\s\S]*?)\n\s*\],/g;

  let match;
  let fileIssues = 0;
  const seenInFile = new Set();

  while ((match = entryRe.exec(content)) !== null) {
    const [, id, questionRaw, choicesRaw] = match;
    const question = unescape(questionRaw);
    const choices = [...choicesRaw.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) =>
      unescape(m[1])
    );

    // 1. ID重複チェック(ファイル内・ファイル間)
    if (seenInFile.has(id)) {
      console.log(`[${file}] ID重複(ファイル内): ${id}`);
      fileIssues++;
    }
    seenInFile.add(id);
    if (allIds.has(id)) {
      console.log(`[${file}] ID重複(${allIds.get(id)}と衝突): ${id}`);
      fileIssues++;
    } else {
      allIds.set(id, file);
    }

    // 2. 「空欄」問題なのに、括弧なしの空白区切りブランクが残っていないか
    if (question.includes("空欄")) {
      const bareBlank = /[ \u3000]([ア-ン])[ \u3000]/.exec(question);
      if (bareBlank) {
        console.log(
          `[${file}] ${id}: 「空欄」問題なのに括弧なしの空白区切りブランクが残っている (例: "${bareBlank[0]}")`
        );
        fileIssues++;
      }
    }

    // 3. 数字マーカー (N) が choices[N-1] を正しく参照しているか
    //    (paired (N)...(/N) タグは除外。単独の (N) のみチェック対象)
    const pairedRanges = [];
    const pairedRe = /\((\d)\)((?:(?!\(\/\d\)).)*?)\(\/\1\)/g;
    let pm;
    while ((pm = pairedRe.exec(question)) !== null) {
      pairedRanges.push([pm.index, pm.index + pm[0].length]);
    }
    const inPaired = (idx) =>
      pairedRanges.some(([s, e]) => idx >= s && idx < e);

    const numMarkerRe = /\((\d)\)/g;
    let nm;
    while ((nm = numMarkerRe.exec(question)) !== null) {
      if (inPaired(nm.index)) continue;
      const num = parseInt(nm[1], 10);
      if (num - 1 >= choices.length) {
        console.log(
          `[${file}] ${id}: マーカー(${num})が選択肢の範囲外を参照 (choices.length=${choices.length})`
        );
        fileIssues++;
      }
    }

    // 4. ペアタグ (a)...(/a) や (1)...(/1) の開閉が対応しているか
    const openTags = [...question.matchAll(/\(([a-z0-9])\)/g)].length;
    const closeTags = [...question.matchAll(/\(\/([a-z0-9])\)/g)].length;
    if (closeTags > 0 && openTags < closeTags) {
      console.log(
        `[${file}] ${id}: ペアタグの開き(${openTags})と閉じ(${closeTags})の数が不一致の可能性`
      );
      fileIssues++;
    }

    // 5. 選択肢が2個未満(データ抜け)
    if (choices.length < 2) {
      console.log(
        `[${file}] ${id}: 選択肢が${choices.length}個しかない`
      );
      fileIssues++;
    }
  }

  if (fileIssues === 0) {
    console.log(`[${file}] 問題なし`);
  }
  totalIssues += fileIssues;
}

console.log(`\n合計 ${totalIssues} 件の問題が見つかりました。`);
process.exit(totalIssues > 0 ? 1 : 0);
