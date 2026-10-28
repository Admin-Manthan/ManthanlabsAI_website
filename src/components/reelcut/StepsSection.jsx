import React from "react";
import { reelcutSteps } from "../../data/contentData";

export function StepsSection() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">How it works</p>
        <h2
          style={{
            fontSize: "var(--step-3)",
            marginBottom: "40px",
            maxWidth: "18ch",
          }}
        >
          Three clicks from upload to posting.
        </h2>
        <div className="steps">
          {reelcutSteps.map((step, idx) => (
            <div key={idx} className="step">
              <span className="n">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
