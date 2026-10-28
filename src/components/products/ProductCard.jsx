import React from "react";
import { StatusBadge } from "../common/StatusBadge";

export function ProductCard({ product }) {
  const { title, status, statusLabel, description, uses, link, linkLabel } =
    product;

  let cardClass = "product";
  if (status === "exp") cardClass += " exp";
  if (status === "launch") cardClass += " launch";

  return (
    <article className={cardClass}>
      <StatusBadge status={status} label={statusLabel} />
      <h3>{title}</h3>
      <p>{description}</p>
      {uses && uses.length > 0 && (
        <ul className="uses">
          {uses.map((use, idx) => (
            <li key={idx}>{use}</li>
          ))}
        </ul>
      )}
      {link && (
        <a className="more" href={link}>
          {linkLabel || "Learn more"}
        </a>
      )}
    </article>
  );
}
