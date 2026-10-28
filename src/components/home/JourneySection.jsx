import React from "react";
import { journeyStops } from "../../data/contentData";

export function JourneySection() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">How we got here</p>
        <h2 style={{ fontSize: "var(--step-3)", maxWidth: "20ch" }}>
          We started by building AI for other people.
        </h2>
        <div className="journey">
          {journeyStops.map((stop) => (
            <div key={stop.id} className={stop.className}>
              <span className="dot" />
              <p className="when">{stop.when}</p>
              <h3>{stop.title}</h3>
              <p>{stop.description}</p>
              <a href={stop.link}>{stop.linkLabel}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
