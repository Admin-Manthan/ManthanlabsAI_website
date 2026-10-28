import React from "react";
import { consultancyReel } from "../../data/contentData";

export function ConsultancyReel() {
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="group-title" style={{ marginBottom: "28px" }}>
          What we built for clients
        </h2>
        <div className="reel">
          {consultancyReel.map((item, idx) => (
            <div key={idx}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <p className="prose" style={{ marginTop: "32px" }}>
          What clients came back for:{" "}
          <strong>we scope a problem faster than most teams can describe it</strong>,
          and <strong>we deliver working software quickly</strong>.
        </p>
      </div>
    </section>
  );
}
