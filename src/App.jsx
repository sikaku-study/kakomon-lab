import React, { useEffect, useState } from "react";
import TopPage from "./TopPage.jsx";
import KakomonQuiz from "./KakomonQuiz.jsx";
import { QUALIFICATIONS, isQualificationAvailable } from "./qualifications.js";

// シンプルなハッシュルーティング。ライブラリなしで #mizu4 のような
// URLハッシュに応じてページを切り替える。
// 種目の一覧は src/qualifications.js にあり、種目を足してもここは変更不要。
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

  const qual = QUALIFICATIONS.find(
    (q) => q.key === routeKey && isQualificationAvailable(q)
  );
  return qual ? (
    <KakomonQuiz key={qual.key} title={qual.title} years={qual.years} />
  ) : (
    <TopPage />
  );
}
