import React from "react";
import { QUALIFICATIONS, summarize } from "./qualifications.js";

const INK = "#26323d";
const PAPER = "#f7f6f1";
const RULE = "#d8d3c4";
const RED = "#b23a2f";

export default function TopPage() {
  return (
    <div
      style={{
        minHeight: "100%",
        background: PAPER,
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(38,50,61,0.05) 0px, rgba(38,50,61,0.05) 1px, transparent 1px, transparent 28px)",
        fontFamily: "'Hiragino Mincho ProN', 'Yu Mincho', serif",
        color: INK,
        padding: "32px 16px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "#6b6355",
            fontFamily: "'Hiragino Sans', sans-serif",
            marginBottom: 4,
          }}
        >
          資格試験　過去問演習
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            borderBottom: `2px solid ${INK}`,
            paddingBottom: 10,
            marginBottom: 24,
          }}
        >
          種目を選択してください
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {QUALIFICATIONS.map((q) => {
            const info = summarize(q);
            const available = info.available;
            const inner = (
              <div
                style={{
                  border: `1px solid ${RULE}`,
                  borderRadius: 4,
                  padding: "18px 20px",
                  background: available ? "#fff" : "#f1efe8",
                  opacity: available ? 1 : 0.6,
                  cursor: available ? "pointer" : "default",
                  transition: "border-color 0.15s",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 700 }}>{q.title}</div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#6b6355",
                    fontFamily: "'Hiragino Sans', sans-serif",
                    marginTop: 4,
                  }}
                >
                  {available
                    ? `${q.exam}の過去問（${info.yearText}）`
                    : "準備中"}
                  {available && (
                    <div style={{ marginTop: 2, color: "#8a8272" }}>
                      {info.subjectText}　全{info.count}問
                    </div>
                  )}
                </div>
              </div>
            );

            return available ? (
              <a
                key={q.key}
                href={`#${q.key}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {inner}
              </a>
            ) : (
              <div key={q.key}>{inner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
