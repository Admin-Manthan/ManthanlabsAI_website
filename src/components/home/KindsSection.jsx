import React from "react";
import { kindsOfWork } from "../../data/contentData";

function KindIcon({ type }) {
  if (type === "models") {
    return (
      <svg width="56" height="40" viewBox="0 0 56 40" aria-hidden="true">
        <g fill="none" stroke="#8494A6" strokeWidth="1">
          <circle cx="6" cy="8" r="3" />
          <circle cx="6" cy="32" r="3" />
          <circle cx="28" cy="6" r="3" />
          <circle cx="28" cy="20" r="3" />
          <circle cx="28" cy="34" r="3" />
          <circle cx="50" cy="20" r="3" stroke="#3ED6F0" />
          <path d="M9 8 L25 6 M9 8 L25 20 M9 8 L25 34 M9 32 L25 6 M9 32 L25 20 M9 32 L25 34 M31 6 L47 20 M31 20 L47 20 M31 34 L47 20" />
        </g>
      </svg>
    );
  }

  if (type === "simulations") {
    return (
      <svg width="56" height="40" viewBox="0 0 56 40" aria-hidden="true">
        <g fill="none" strokeWidth="1">
          <path
            d="M2 30 C 12 4, 22 4, 28 20 S 44 36, 54 10"
            stroke="#8494A6"
          />
          <path
            d="M2 22 C 14 10, 22 30, 32 16 S 46 6, 54 26"
            stroke="#3ED6F0"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg width="56" height="40" viewBox="0 0 56 40" aria-hidden="true">
      <g fill="none" strokeWidth="1">
        <rect
          x="2"
          y="8"
          width="30"
          height="24"
          stroke="#8494A6"
          strokeDasharray="3 3"
        />
        <rect x="38" y="4" width="16" height="32" stroke="#3ED6F0" />
        <path d="M33 20 L37 20" stroke="#3ED6F0" />
      </g>
    </svg>
  );
}

export function KindsSection() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">What we work on</p>
        <h2
          style={{
            fontSize: "var(--step-3)",
            marginBottom: "40px",
            maxWidth: "18ch",
          }}
        >
          Three kinds of experiment, one bench.
        </h2>
        <div className="kinds">
          {kindsOfWork.map((kind) => (
            <div key={kind.id} className="kind">
              <KindIcon type={kind.type} />
              <h3>{kind.title}</h3>
              <p>{kind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
