// 種目(資格)の一覧と、そこから導く表示用の情報をまとめた場所。
//
// 新しい年度を足すとき:  src/data/*.js の *_YEARS に年度を追加するだけ。
//   トップページの「年度の範囲」「科目」「問題数」は、ここで自動的に作られる。
// 新しい種目を足すとき:  下の QUALIFICATIONS に1件追加するだけ。
//   ルーティング(#key)もトップページへの表示も、この配列から作られる。
//   years が空(または subjects を持つ年度がない)の種目は「準備中」と表示される。
import { MIZU4_YEARS } from "./data/mizu4.js";
import { REI2_YEARS } from "./data/rei2.js";

export const QUALIFICATIONS = [
  {
    key: "mizu4", // URLハッシュ(#mizu4)に使う識別子
    title: "公害防止管理者　水質4種", // 一覧・各画面の見出し
    exam: "水質関係第4種", // 一覧の説明文「〇〇の過去問」に使う名前
    years: MIZU4_YEARS,
  },
  {
    key: "rei2",
    title: "冷凍機械責任者　第2種",
    exam: "第2種冷凍機械責任者試験",
    years: REI2_YEARS,
  },
  {
    key: "taiki4",
    title: "公害防止管理者　大気4種",
    exam: "大気関係第4種",
    years: [],
  },
];

// 年度キー("R7", "H30" など)を西暦に直す。並べ替えと「連続しているか」の判定に使う。
const ERA_BASE = { R: 2018, H: 1988, S: 1925 };
function yearValue(key) {
  const m = /^([RHS])(\d+)$/.exec(key);
  return m ? ERA_BASE[m[1]] + Number(m[2]) : null;
}

export function isYearAvailable(year) {
  return Array.isArray(year.subjects) && year.subjects.length > 0;
}

export function isQualificationAvailable(q) {
  return q.years.some(isYearAvailable);
}

export function countQuestions(year) {
  return (year.subjects || []).reduce((n, s) => n + s.questions.length, 0);
}

// トップページ用の要約。年度は収録済みのものだけを対象にする。
//   yearText: 連続していれば「最古〜最新」、飛びがあれば全年度を列挙
//   subjectText: 収録済みの年度に出てくる科目名(重複なし)
//   count: 収録済みの全問題数
export function summarize(q) {
  const years = q.years.filter(isYearAvailable);
  if (years.length === 0) return { available: false };

  const sorted = [...years].sort(
    (a, b) => (yearValue(a.key) ?? 0) - (yearValue(b.key) ?? 0)
  );
  const values = sorted.map((y) => yearValue(y.key));
  const contiguous =
    values.every((v) => v !== null) &&
    values.every((v, i) => i === 0 || v === values[i - 1] + 1);

  let yearText;
  if (sorted.length === 1) yearText = sorted[0].label;
  else if (contiguous) yearText = `${sorted[0].label}〜${sorted[sorted.length - 1].label}`;
  else yearText = sorted.map((y) => y.label).join("・");

  const labels = [];
  let count = 0;
  for (const y of years) {
    for (const s of y.subjects) {
      if (!labels.includes(s.label)) labels.push(s.label);
      count += s.questions.length;
    }
  }
  return { available: true, yearText, subjectText: labels.join("・"), count };
}
