import React, { useEffect, useState } from "react";
import TopPage from "./TopPage.jsx";
import KakomonQuiz from "./KakomonQuiz.jsx";

// シンプルなハッシュルーティング。ライブラリなしで #mizu4 のような
// URLハッシュに応じてページを切り替える。種目が増えたら
// ROUTES にキーを追加していく。
const ROUTES = {
  mizu4: KakomonQuiz,
  // taiki4: TaikiQuiz, // 今後追加
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
