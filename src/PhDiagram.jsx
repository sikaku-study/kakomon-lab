import React from "react";

// 理論冷凍サイクルの p-h 線図を、比エンタルピーの値から描く部品。
// 問題データの diagram: { h1, h2, h3, h4, hA, hB } を渡す(単位 kJ/kg)。
//   1 圧縮機入口 / 2 圧縮機出口 / 3 凝縮器出口 / 4 蒸発器入口
//   A: 蒸発圧力での飽和液線上の点 / B: 蒸発圧力での飽和蒸気線上の点
// 縦軸は圧力だが目盛りは持たず、横軸の比エンタルピーを正しい比率で描く。

const INK = "#26323d";
const BLUE = "#1f5f8b";
const GRAY = "#8a93a0";

// 点列を通るなめらかな曲線(各点の接線は前後の点から決め、区間長に合わせて制御点を置く)
function smoothPath(pts) {
  const dir = (i) => {
    const a = pts[Math.max(i - 1, 0)];
    const b = pts[Math.min(i + 1, pts.length - 1)];
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const n = Math.hypot(dx, dy) || 1;
    return [dx / n, dy / n];
  };
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const len = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / 3;
    const d1 = dir(i);
    const d2 = dir(i + 1);
    d += ` C${p1[0] + d1[0] * len},${p1[1] + d1[1] * len} ${p2[0] - d2[0] * len},${p2[1] - d2[1] * len} ${p2[0]},${p2[1]}`;
  }
  return d;
}

export default function PhDiagram({ h1, h2, h3, h4, hA, hB }) {
  const W = 560;
  const H = 350;
  const X0 = 64; // 縦軸
  const X1 = 536; // 横軸右端
  const YB = 292; // 横軸
  const PE = 250; // 蒸発圧力
  const PC = 96; // 凝縮圧力
  const TOP = 46; // 飽和曲線の頂点

  const hMin = hA - 55;
  const hMax = h2 + 30;
  const sx = (h) => X0 + 10 + ((h - hMin) / (hMax - hMin)) * (X1 - X0 - 24);

  const xA = sx(hA);
  const xB = sx(hB);
  const x1 = sx(h1);
  const x2 = sx(h2);
  const x3 = sx(h3);
  const x4 = sx(h4);
  const yAt = (t) => YB - t * (YB - TOP); // t: 0(横軸)〜1(頂点)
  // 飽和曲線: 左(飽和液線)は A から右上へ大きく広がり、頂点は右寄り、
  // 右(飽和蒸気線)は B からほぼ垂直に立ち上がる形にする。
  const xLc = Math.max(x3 + 14, x3 + 0.1 * (x2 - x3)); // 凝縮圧力での飽和液線(3より右)
  const xVc = x1 + 0.18 * (x2 - x1); // 凝縮圧力での飽和蒸気線(2より左)
  const xTop = xVc - 0.13 * (xVc - xLc);
  const dome = smoothPath([
    [xA - 10, YB],
    [xA, PE],
    [xA + 0.5 * (xLc - xA), yAt(0.46)],
    [xLc, PC],
    [xLc + 0.38 * (xTop - xLc), yAt(0.94)],
    [xTop, TOP],
    [xVc + 3, yAt(0.86)],
    [xVc, PC],
    [xB + 0.89 * (xVc - xB), yAt(0.5)],
    [xB + 0.46 * (xVc - xB), yAt(0.31)],
    [xB, PE],
    [xB - 12, YB],
  ]);

  // 横軸の値ラベル。近いものは2段に分けて重ならないようにする
  const ticks = [
    { x: xA, v: hA },
    { x: x4, v: h4 },
    { x: xB, v: hB },
    { x: x1, v: h1 },
    { x: x2, v: h2 },
  ];
  if (h3 !== h4) ticks.push({ x: x3, v: h3 });
  ticks.sort((a, b) => a.x - b.x);
  let lastX = [-999, -999];
  ticks.forEach((t) => {
    const row = t.x - lastX[0] >= 32 ? 0 : t.x - lastX[1] >= 32 ? 1 : 1;
    t.row = row;
    lastX[row] = t.x;
  });

  const label = {
    fontSize: 12,
    fill: "#5b6570",
    textAnchor: "middle",
    paintOrder: "stroke",
    stroke: "#fff",
    strokeWidth: 3,
  };
  const circle = (x, y, n) => (
    <g key={n}>
      <circle cx={x} cy={y} r={10} fill="#fff" stroke={INK} strokeWidth={1.5} />
      <text
        x={x}
        y={y + 4.5}
        fontSize={13}
        fontWeight={700}
        fill={INK}
        textAnchor="middle"
      >
        {n}
      </text>
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="理論冷凍サイクルのp-h線図"
      style={{ width: "100%", maxWidth: 560, height: "auto" }}
    >
      {/* 軸 */}
      <line x1={X0} y1={YB} x2={X1 + 10} y2={YB} stroke={INK} strokeWidth={1.5} />
      <line x1={X0} y1={YB} x2={X0} y2={20} stroke={INK} strokeWidth={1.5} />
      <path d={`M${X0 - 4},28 L${X0},18 L${X0 + 4},28`} fill="none" stroke={INK} strokeWidth={1.5} />
      <path d={`M${X1 + 2},${YB - 4} L${X1 + 12},${YB} L${X1 + 2},${YB + 4}`} fill="none" stroke={INK} strokeWidth={1.5} />
      <text x={X0 + 10} y={26} fontSize={13} fill={INK}>p</text>
      <text x={X1 + 8} y={YB + 22} fontSize={13} fill={INK} textAnchor="end">
        h [kJ/kg]
      </text>

      {/* 飽和曲線 */}
      <path d={dome} fill="none" stroke={GRAY} strokeWidth={1.6} strokeDasharray="5 4" />

      {/* 補助線(点から横軸へ) */}
      {[xA, x4, xB, x1, x2].concat(h3 !== h4 ? [x3] : []).map((x, i) => (
        <line key={i} x1={x} y1={x === x2 ? PC : PE} x2={x} y2={YB} stroke={GRAY} strokeWidth={1} strokeDasharray="3 3" />
      ))}
      <line x1={xA} y1={PE} x2={x4} y2={PE} stroke={GRAY} strokeWidth={1} strokeDasharray="3 3" />

      {/* サイクル */}
      <polygon
        points={`${x1},${PE} ${x2},${PC} ${x3},${PC} ${x4},${PE}`}
        fill="rgba(31,95,139,0.08)"
        stroke={BLUE}
        strokeWidth={2.4}
        strokeLinejoin="round"
      />

      {/* 工程名 */}
      <text x={(x3 + x2) / 2} y={PC - 10} {...label}>凝縮器</text>
      <text x={(x4 + xB) / 2 - 10} y={PE + 20} {...label}>蒸発器</text>
      <text x={(x1 + x2) / 2 + 26} y={(PE + PC) / 2} {...label}>圧縮</text>
      <text x={x3 - 20} y={(PE + PC) / 2} {...label}>膨張</text>

      {/* 点A・B */}
      <circle cx={xA} cy={PE} r={3.5} fill={INK} />
      <circle cx={xB} cy={PE} r={3.5} fill={INK} />
      <text x={xA - 10} y={PE - 8} fontSize={13} fontWeight={700} fill={INK} textAnchor="middle">A</text>
      <text x={xB - 7} y={PE - 8} fontSize={13} fontWeight={700} fill={INK} textAnchor="middle">B</text>

      {circle(x1, PE, 1)}
      {circle(x2, PC, 2)}
      {circle(x3, PC, 3)}
      {circle(x4, PE, 4)}

      {/* 横軸の値 */}
      {ticks.map((t, i) => (
        <text key={i} x={t.x} y={YB + 17 + t.row * 15} fontSize={12.5} fill={INK} textAnchor="middle">
          {t.v}
        </text>
      ))}
    </svg>
  );
}
