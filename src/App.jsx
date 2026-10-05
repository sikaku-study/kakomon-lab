import React, { useEffect, useState } from "react";
import TopPage from "./TopPage.jsx";
import KakomonQuiz from "./KakomonQuiz.jsx";
import { MIZU4_YEARS } from "./data/mizu4.js";
import { REI2_YEARS } from "./data/rei2.js";

// シンプルなハッシュルーティング。ライブラリなしで #mizu4 のような
// URLハッシュに応じてページを切り替える。種目が増えたら
// ROUTES にキーを追加していく。
// 種目ごとに KakomonQuiz へタイトル・年度データ・科目要約を渡す。
const mizu4Page = () => (
  <KakomonQuiz
    title="公害防止管理者　水質4種"
    years={MIZU4_YEARS}
    subjectSummary="公害総論・水質概論・汚水処理特論"
  />
);

const rei2Page = () => (
  <KakomonQuiz
    title="冷凍機械責任者　第2種"
    years={REI2_YEARS}
    subjectSummary="法令・保安管理技術・学識"
  />
);

const ROUTES = {
  mizu4: mizu4Page,
  rei2: rei2Page,
  // taiki4: ..., // 今後追加
};

function getRouteKey() {
  return window.location.hash.replace(/^#/, "");
}

export default function App() {
  const [routeKey, setRouteKey] = useState(getRouteKey());

  useEffect(() => {
    const onHashChange = () => setRouteKey(getRouteKey());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const Page = ROUTES[routeKey];
  return Page ? <Page /> : <TopPage />;
}
