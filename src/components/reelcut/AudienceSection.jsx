import React from "react";
import { builtForList } from "../../data/contentData";

export function AudienceSection() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Built for</p>
        <div className="for">
          {builtForList.map((item, idx) => (
            <div key={idx}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
