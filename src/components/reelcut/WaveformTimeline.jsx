import React, { useMemo } from "react";

export function WaveformTimeline() {
  const bars = useMemo(() => {
    const hits = [
      [14, 23],
      [47, 54],
      [78, 88],
    ];
    const result = [];

    for (let i = 0; i < 120; i++) {
      const pct = (i / 120) * 100;
      const h =
        18 +
        Math.abs(Math.sin(i * 0.37) * Math.cos(i * 0.11)) * 70 +
        ((i * 7) % 11);
      const isHit = hits.some(([start, end]) => pct >= start && pct <= end);
      result.push({
        height: `${Math.min(h, 100)}%`,
        isHit,
      });
    }

    return result;
  }, []);

  return (
    <>
      <div className="label">
        <span>Source · 16:9 · 01:12:40</span>
        <span>3 moments found</span>
      </div>
      <div className="timeline">
        <div className="bars" id="bars">
          {bars.map((bar, idx) => (
            <b
              key={idx}
              style={{ height: bar.height }}
              className={bar.isHit ? "hit" : undefined}
            />
          ))}
        </div>
        <div className="seg" style={{ left: "14%", width: "9%" }} />
        <div className="seg" style={{ left: "47%", width: "7%" }} />
        <div className="seg" style={{ left: "78%", width: "10%" }} />
        <div className="playhead" />
      </div>
    </>
  );
}
