import { useState } from "react";
import { MIZU4_YEARS } from "./data/mizu4.js";

const YEARS = MIZU4_YEARS;

const INK = "#26323d";
const INK_TINT = "#eef1f3";
const PAPER = "#f7f6f1";
const RULE = "#d8d3c4";
const RED = "#b23a2f";

// Choices like "ア:f イ:c ウ:e エ:a オ:b カ:d" read as dense text.
// Lay them out with natural wrapping so nothing splits mid-pair and it
// balances at any container width.
function ChoiceText({ text }) {
  const parts = text.split(/[\s　]+/).filter(Boolean);
  const isSlotStyle = parts.length >= 2 && parts.every((p) => p.includes(":"));

  if (!isSlotStyle) {
    // Runs of middle dots (・・・・・） are used as leader lines between a
    // label and its value (e.g. "環境基本法・・・・・環境の日"). Rendered
    // at full weight they read as bulkier than the actual words on either
    // side, so mute them instead of leaving them full-strength ink.
    const dotSegments = text.split(/(・{2,})/g);
    return (
      <span style={{ paddingTop: 1, lineHeight: 1.6 }}>
        {dotSegments.map((seg, i) =>
          /^・{2,}$/.test(seg) ? (
            <span key={i} style={{ color: "#c9c3b4", letterSpacing: -1 }}>
              {seg}
            </span>
          ) : (
            <span key={i}>{seg}</span>
          )
        )}
      </span>
    );
  }

  return (
    <span
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: 20,
        rowGap: 7,
        paddingTop: 1,
      }}
    >
      {parts.map((p, idx) => {
        const [label, value] = p.split(":");
        return (
          <span
            key={idx}
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 6,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "'Hiragino Mincho ProN', serif",
                fontSize: 13,
                color: "#5b5748",
              }}
            >
              {label}
            </span>
            <span style={{ color: "#a89f8c" }}>―</span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>{value}</span>
          </span>
        );
      })}
    </span>
  );
}

function QuestionText({ text, choices }) {
  // Fill-in-blank markers like (ア)(イ)(ウ) or (a)(b)(c) are just highlighted
  // in red, since there is no underlined phrase to pair them with.
  //
  // Numeric underline-reference markers like (1)(2)(3) are used in
  // "下線を付した箇所のうち、誤っているものはどれか" style questions. When a
  // marker (N) is immediately followed by text that exactly matches
  // choices[N-1], that phrase is the underlined segment from the original
  // exam, so we render it with an actual underline plus a small red (N)
  // label, matching the paper exam's layout. If no matching choice text is
  // found right after the marker, we fall back to the old red-highlight-only
  // rendering for that marker.
  // Some "下線部分(a〜j)の組合せ" questions have choices that are letter
  // combinations (e.g. "a，b，e") rather than the underlined phrase text
  // itself, so the choice-matching detection above can't find the phrase.
  // For these, the question text can explicitly wrap the underlined phrase
  // as (a)phrase(/a); we render that as an underline with the label at the
  // end, matching the paper exam's layout.
  const regex =
    /\(([a-z0-9])\)((?:(?!\(\/[a-z0-9]\)).)*?)\(\/\1\)|\(([ア-ヶ])\)|\(([1-9])\)|\(([a-z])\)/g;
  const parts = [];
  let cursor = 0;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const markerStart = m.index;
    const markerEnd = regex.lastIndex;
    if (markerStart > cursor) {
      parts.push({ type: "text", content: text.slice(cursor, markerStart) });
    }
    if (m[1]) {
      // Paired (a)...(/a) explicit underline
      parts.push({ type: "underline", content: m[2], label: `(${m[1]})` });
      cursor = markerEnd;
      regex.lastIndex = cursor;
      continue;
    }
    if (m[4]) {
      const num = parseInt(m[4], 10);
      const choiceText = choices && choices[num - 1];
      if (
        choiceText &&
        text.slice(markerEnd, markerEnd + choiceText.length) === choiceText
      ) {
        parts.push({ type: "underline", content: choiceText, label: `(${num})` });
        cursor = markerEnd + choiceText.length;
        regex.lastIndex = cursor;
        continue;
      }
      parts.push({ type: "marker", content: `(${num})`, kind: "num" });
      cursor = markerEnd;
      regex.lastIndex = cursor;
      continue;
    }
    // (ア)(イ)... and (a)(b)... markers with no matching choice text are
    // fill-in-the-blank slots (空欄), not underline references. Render
    // these as a boxed chip so the blank's extent reads unambiguously
    // against the surrounding sentence.
    parts.push({ type: "marker", content: m[0], kind: m[3] ? "kana" : "alpha" });
    cursor = markerEnd;
    regex.lastIndex = cursor;
  }
  if (cursor < text.length) {
    parts.push({ type: "text", content: text.slice(cursor) });
  }

  return (
    <>
      {parts.map((p, i) => {
        if (p.type === "underline") {
          return (
            <span key={i}>
              <span
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  textDecorationThickness: 1.5,
                }}
              >
                {p.content}
              </span>
              <sup
                style={{
                  color: RED,
                  fontWeight: 700,
                  fontSize: 11,
                  marginLeft: 1,
                }}
              >
                {p.label}
              </sup>
            </span>
          );
        }
        if (p.type === "marker" && p.kind !== "num") {
          return (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "baseline",
                border: `1.3px solid ${RED}`,
                borderRadius: 4,
                padding: "0 5px",
                margin: "0 2px",
                color: RED,
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              {p.content}
            </span>
          );
        }
        if (p.type === "marker") {
          return (
            <span
              key={i}
              style={{
                color: RED,
                fontWeight: 700,
                padding: "0 2px",
              }}
            >
              {p.content}
            </span>
          );
        }
        return <span key={i}>{p.content}</span>;
      })}
    </>
  );
}

// Supports both a single correct index (answer: 2) and multiple correct
// indices for erratum questions where the official answer was corrected
// to accept more than one choice (answer: [1, 3]).
function correctIndices(q) {
  return Array.isArray(q.answer) ? q.answer : [q.answer];
}
function isAnswerCorrect(q, selected) {
  return correctIndices(q).includes(selected);
}
function formatAnswerLabel(q) {
  return correctIndices(q)
    .map((i) => i + 1)
    .join("・");
}

function makeInitialAnswers(subjects, subjectIdx) {
  return subjects[subjectIdx].questions.map(() => ({
    selected: null,
    answered: false,
  }));
}

function QuizScreen({ yearLabel, subjects, onBackToYears }) {
  const [subjectIdx, setSubjectIdx] = useState(0);
  const [index, setIndex] = useState(0);
  const [answersBySubject, setAnswersBySubject] = useState(
    subjects.map((_, i) => makeInitialAnswers(subjects, i))
  );

  const subject = subjects[subjectIdx];
  const questions = subject.questions;
  const answers = answersBySubject[subjectIdx];
  const q = questions[index];
  const current = answers[index];
  const isCorrect = isAnswerCorrect(q, current.selected);

  const isLastQuestionOfSubject = index === questions.length - 1;
  const isLastSubject = subjectIdx === subjects.length - 1;
  const subjectComplete = answers.every((a) => a.answered);

  const updateCurrent = (patch) => {
    setAnswersBySubject((prev) => {
      const next = prev.map((arr) => arr);
      const subjArr = [...next[subjectIdx]];
      subjArr[index] = { ...subjArr[index], ...patch };
      next[subjectIdx] = subjArr;
      return next;
    });
  };

  const choose = (i) => {
    updateCurrent({ selected: i, answered: false });
  };

  const submit = () => {
    if (current.selected === null || current.answered) return;
    updateCurrent({ answered: true });
  };

  const switchSubject = (newIdx) => {
    if (newIdx < 0 || newIdx >= subjects.length || newIdx === subjectIdx) return;
    setSubjectIdx(newIdx);
    setIndex(0);
  };

  const goNext = () => {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
    } else if (!isLastSubject) {
      switchSubject(subjectIdx + 1);
    }
  };

  const goPrev = () => {
    if (index === 0) return;
    const target = index - 1;
    setAnswersBySubject((prev) => {
      const next = prev.map((arr) => arr);
      const subjArr = [...next[subjectIdx]];
      subjArr[target] = { selected: null, answered: false };
      next[subjectIdx] = subjArr;
      return next;
    });
    setIndex(target);
  };

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
        {/* title */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "#6b6355",
              fontFamily: "'Hiragino Sans', sans-serif",
            }}
          >
            公害防止管理者　水質4種　{yearLabel}
          </div>
          <button
            onClick={onBackToYears}
            style={{
              fontFamily: "'Hiragino Sans', sans-serif",
              fontSize: 12,
              color: "#6b6355",
              background: "transparent",
              border: "none",
              textDecoration: "underline",
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← 年度選択に戻る
          </button>
        </div>

        {/* subject tabs */}
        <div
          style={{
            display: "flex",
            borderBottom: `2px solid ${INK}`,
            marginBottom: 24,
          }}
        >
          {subjects.map((s, i) => {
            const active = i === subjectIdx;
            return (
              <button
                key={s.key}
                onClick={() => switchSubject(i)}
                style={{
                  fontFamily: "'Hiragino Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                  color: active ? INK : "#8a8270",
                  background: active ? "#fff" : "transparent",
                  border: "none",
                  borderTop: `1px solid ${active ? RULE : "transparent"}`,
                  borderLeft: `1px solid ${active ? RULE : "transparent"}`,
                  borderRight: `1px solid ${active ? RULE : "transparent"}`,
                  borderBottom: active ? `2px solid #fff` : "2px solid transparent",
                  marginBottom: "-2px",
                  padding: "10px 16px",
                  cursor: "pointer",
                }}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* progress: per-question ○× list on the left, 問X/Y on the right */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "'Hiragino Sans', sans-serif",
            fontSize: 13,
            color: "#6b6355",
            marginBottom: 14,
            gap: 12,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 8px" }}>
            {answers.map((a, i) => {
              const isCurrentQ = i === index;
              let mark = "－";
              let markColor = "#c9c3b4";
              if (a.answered) {
                const correct = a.selected === questions[i].answer;
                mark = correct ? "○" : "×";
                markColor = RED;
              }
              return (
                <span
                  key={i}
                  title={`問${i + 1}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    fontSize: 13,
                    fontWeight: 700,
                    color: markColor,
                    borderRadius: "50%",
                    outline: isCurrentQ ? `1px solid ${INK}` : "none",
                  }}
                >
                  {mark}
                </span>
              );
            })}
          </div>
          <div style={{ flexShrink: 0 }}>
            問 {index + 1} / {questions.length}
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 15, lineHeight: 1.9, whiteSpace: "pre-wrap" }}>
            <QuestionText text={q.question} choices={q.choices} />
          </div>
          {q.image && (
            <div
              style={{
                marginTop: 14,
                padding: 12,
                background: "#fff",
                border: `1.5px solid ${RULE}`,
                borderRadius: 3,
                textAlign: "center",
              }}
            >
              <img
                src={q.image}
                alt={`${q.id} 図`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}
        </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {q.choices.map((c, i) => {
                const isSelected = current.selected === i;
                const isAnswerChoice =
                  current.answered && correctIndices(q).includes(i);
                const isWrongPick =
                  current.answered && isSelected && !correctIndices(q).includes(i);

                let borderColor = RULE;
                let borderWidth = "1.5px";
                let bg = "#fff";

                if (isSelected && !current.answered) {
                  borderColor = INK;
                  borderWidth = "3px";
                  bg = INK_TINT;
                }
                if (isAnswerChoice) {
                  borderColor = RED;
                  borderWidth = "2px";
                  bg = "#fdf1ef";
                }
                if (isWrongPick) {
                  borderColor = INK;
                  borderWidth = "3px";
                  bg = INK_TINT;
                }

                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      textAlign: "left",
                      padding: "12px 14px",
                      background: bg,
                      border: `${borderWidth} solid ${borderColor}`,
                      borderRadius: 3,
                      cursor: "pointer",
                      fontFamily: "'Hiragino Sans', sans-serif",
                      fontSize: 14,
                      color: INK,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        fontFamily: "'Hiragino Mincho ProN', serif",
                        fontWeight: 700,
                        minWidth: 26,
                        textAlign: "center",
                        border: `${isSelected && !current.answered ? "2px" : "1px"} solid ${
                          isSelected && !current.answered ? INK : "#a89f8c"
                        }`,
                        borderRadius: 2,
                        padding: "1px 0",
                      }}
                    >
                      {i + 1}
                    </span>
                    <ChoiceText text={c} />
                    {isAnswerChoice && (
                      <span style={{ marginLeft: "auto", color: RED, fontSize: 20, fontWeight: 700 }}>
                        ○
                      </span>
                    )}
                    {isWrongPick && (
                      <span style={{ marginLeft: "auto", color: RED, fontSize: 18, fontWeight: 700 }}>
                        ×
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: 20, minHeight: 22 }}>
              <div
                style={{
                  fontFamily: "'Hiragino Sans', sans-serif",
                  fontSize: 14,
                  color: RED,
                  fontWeight: 700,
                }}
              >
                {current.answered
                  ? isCorrect
                    ? "○ 正解"
                    : `× 不正解（正解：${formatAnswerLabel(q)}）`
                  : ""}
              </div>
              {current.answered && q.note && (
                <div
                  style={{
                    marginTop: 8,
                    fontFamily: "'Hiragino Sans', sans-serif",
                    fontSize: 12.5,
                    lineHeight: 1.7,
                    color: "#6b6355",
                    fontWeight: 400,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {q.note}
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: 12,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                onClick={goPrev}
                disabled={index === 0}
                style={{
                  fontFamily: "'Hiragino Sans', sans-serif",
                  background: "transparent",
                  color: index === 0 ? "#c9c3b4" : INK,
                  border: `1.5px solid ${index === 0 ? "#e3ddcf" : INK}`,
                  borderRadius: 3,
                  padding: "10px 22px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: index === 0 ? "default" : "pointer",
                }}
              >
                ← 前の問題へ
              </button>

              {!current.answered ? (
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={goNext}
                    disabled={isLastQuestionOfSubject && isLastSubject}
                    style={{
                      fontFamily: "'Hiragino Sans', sans-serif",
                      background: "transparent",
                      color:
                        isLastQuestionOfSubject && isLastSubject
                          ? "#c9c3b4"
                          : INK,
                      border: `1.5px solid ${
                        isLastQuestionOfSubject && isLastSubject
                          ? "#e3ddcf"
                          : INK
                      }`,
                      borderRadius: 3,
                      padding: "10px 20px",
                      fontSize: 14,
                      fontWeight: 700,
                      cursor:
                        isLastQuestionOfSubject && isLastSubject
                          ? "default"
                          : "pointer",
                    }}
                  >
                    未回答でスキップ
                  </button>
                  <button
                    onClick={submit}
                    disabled={current.selected === null}
                    style={{
                      fontFamily: "'Hiragino Sans', sans-serif",
                      background: current.selected === null ? "#c9c3b4" : INK,
                      color: PAPER,
                      border: "none",
                      borderRadius: 3,
                      padding: "10px 28px",
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: current.selected === null ? "default" : "pointer",
                    }}
                  >
                    解答する
                  </button>
                </div>
              ) : (
                <button
                  onClick={goNext}
                  disabled={isLastQuestionOfSubject && isLastSubject}
                  style={{
                    fontFamily: "'Hiragino Sans', sans-serif",
                    background:
                      isLastQuestionOfSubject && isLastSubject ? "#c9c3b4" : INK,
                    color: PAPER,
                    border: "none",
                    borderRadius: 3,
                    padding: "10px 28px",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor:
                      isLastQuestionOfSubject && isLastSubject
                        ? "default"
                        : "pointer",
                  }}
                >
                  {!isLastQuestionOfSubject
                    ? "次の問題へ"
                    : isLastSubject
                    ? "全科目 終了"
                    : `次の科目へ（${subjects[subjectIdx + 1].label}）`}
                </button>
              )}
            </div>

            {isLastQuestionOfSubject && current.answered && subjectComplete && (
              <div
                style={{
                  marginTop: 14,
                  fontFamily: "'Hiragino Sans', sans-serif",
                  fontSize: 13,
                  color: "#6b6355",
                  textAlign: "right",
                }}
              >
                {subject.label}：全{questions.length}問 解答済み
              </div>
            )}
      </div>
    </div>
  );
}

function YearSelect({ onSelectYear }) {
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 4,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "#6b6355",
              fontFamily: "'Hiragino Sans', sans-serif",
            }}
          >
            公害防止管理者　水質4種
          </div>
          <a
            href="#"
            style={{
              fontFamily: "'Hiragino Sans', sans-serif",
              fontSize: 12,
              color: "#6b6355",
              textDecoration: "underline",
            }}
          >
            ← 種目選択に戻る
          </a>
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
          年度を選択
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {YEARS.map((y) => {
            const available = !!y.subjects;
            return (
              <button
                key={y.key}
                onClick={() => available && onSelectYear(y)}
                disabled={!available}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "left",
                  padding: "14px 16px",
                  background: "#fff",
                  border: `1.5px solid ${available ? RULE : "#e3ddcf"}`,
                  borderRadius: 3,
                  cursor: available ? "pointer" : "default",
                  fontFamily: "'Hiragino Sans', sans-serif",
                  fontSize: 15,
                  color: available ? INK : "#c9c3b4",
                }}
              >
                <span style={{ fontWeight: 700 }}>{y.label}</span>
                <span style={{ fontSize: 12, color: available ? "#6b6355" : "#c9c3b4" }}>
                  {available ? "公害総論・水質概論・汚水処理特論" : "準備中"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function KakomonQuiz() {
  const [selectedYear, setSelectedYear] = useState(null);

  if (!selectedYear) {
    return <YearSelect onSelectYear={setSelectedYear} />;
  }

  return (
    <QuizScreen
      key={selectedYear.key}
      yearLabel={selectedYear.label}
      subjects={selectedYear.subjects}
      onBackToYears={() => setSelectedYear(null)}
    />
  );
}