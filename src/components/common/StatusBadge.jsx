import React from "react";

export function StatusBadge({ status, label, className = "" }) {
  return (
    <span className={`status ${status} ${className}`.trim()}>
      <i aria-hidden="true" />
      {label}
    </span>
  );
}
