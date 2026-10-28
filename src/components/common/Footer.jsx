import React from "react";
import { StatusBadge } from "./StatusBadge";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© 2026 Apex Labs</span>
        <div className="legend" aria-label="Status markers">
          <StatusBadge status="exp" label="Experiment" />
          <StatusBadge status="dev" label="In development" />
          <StatusBadge status="launch" label="Launching" />
        </div>
      </div>
    </footer>
  );
}
