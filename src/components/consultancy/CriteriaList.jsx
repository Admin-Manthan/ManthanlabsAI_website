import React from "react";
import { consultancyCriteria } from "../../data/contentData";

export function CriteriaList() {
  return (
    <div>
      <h2 className="group-title" style={{ marginBottom: "20px" }}>
        We say yes when
      </h2>
      <ul className="criteria">
        {consultancyCriteria.map((item, idx) => (
          <li key={idx}>
            <strong>{item.title}</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
