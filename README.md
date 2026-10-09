# 公害防止管理者試験 過去問演習

## 開発サーバーの起動
```
npm install
npm run dev
```

## ビルド
```
npm run build
```

## Vercel へのデプロイ
このリポジトリを Vercel にインポートするだけで、Vite プロジェクトとして自動認識されます。
Framework Preset: Vite / Build Command: `npm run build` / Output Directory: `dist`

## 年度・種目の追加方法

トップページの表示（年度の範囲・科目・問題数）とルーティングは、データから自動で作られます。

### 年度を追加する
1. `src/data/` の該当ファイル（例: `rei2.js`）に `R8_SUBJECTS` のような科目配列を作る
2. 同じファイルの `*_YEARS` に `{ key: "R8", label: "令和8年度", subjects: R8_SUBJECTS }` を追加する
   - `key` は `R7` / `H30` の形式（年度の並べ替えと「連続しているか」の判定に使う）
   - 科目は一部だけでもよい（例: 保安管理技術だけ）。年度選択画面には、入っている科目と問題数が表示される
3. 図が必要な問題は `public/images/` に置き、`image: "/images/ファイル名.png"` を指定する
4. `npm run validate` で確認する

### 種目を追加する
1. `src/data/` に新しいデータファイルを作る（`*_YEARS` を export）
2. `src/qualifications.js` の `QUALIFICATIONS` に1件追加する（`key` が URL の `#key` になる）
   - `App.jsx` と `TopPage.jsx` は変更不要。`years` が空の種目は「準備中」と表示される

### 問題データの書式
- `answer` は 0 始まり（複数正解は `[i, j]`）
- `explanation` に解説を書くと、回答後に「解説」として表示される（`note` は誤問の注記用）

### 画像のチェック
`npm run validate` は、`image` で指定したファイルが `public/` に存在するか、`answer` が選択肢の範囲内か、年度・科目のキーが重複していないかも確認する。
