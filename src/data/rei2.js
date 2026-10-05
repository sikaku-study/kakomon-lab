// 冷凍機械責任者試験(第2種) 過去問データ
// ID命名規則: rei2-r{年度}-{科目}-{問番号}
//   科目キー: hourei(法令) / hoan(保安管理技術) / gaku(学識)
//   例: rei2-r06-hourei-01
//
// 年度ごとに R6_SUBJECTS のような配列を作り、REI2_YEARS に登録する。
// subjects を持たない年度は年度選択画面で「準備中」と表示される。

export const REI2_YEARS = [
  { key: "R6", label: "令和6年度" },
];
