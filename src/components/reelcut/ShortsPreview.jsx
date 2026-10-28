import React from "react";

const SHORTS_DATA = [
  { timestamp: "00:10:21" },
  { timestamp: "00:34:08" },
  { timestamp: "00:56:47" },
];

export function ShortsPreview() {
  return (
    <>
      <div className="shorts">
        {SHORTS_DATA.map((short, idx) => (
          <div key={idx} className="short">
            <span className="t">{short.timestamp}</span>
            <span className="face" />
            <div className="cap">
              <span />
              <span />
            </div>
          </div>
        ))}
      </div>
      <div className="label" style={{ justifyContent: "center", marginTop: "12px" }}>
        <span>Output · 9:16 · speaker tracked</span>
      </div>
    </>
  );
}
