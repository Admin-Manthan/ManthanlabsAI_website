import React from "react";
import { StatusBadge } from "../common/StatusBadge";
import { Button } from "../common/Button";

export function LaunchStrip() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="launch">
          <div>
            <StatusBadge status="launch" label="Launching soon" />
            <h2 style={{ marginTop: "14px" }}>Reelcut</h2>
            <p>
              Turn a long video into ready-to-post shorts in a few clicks. It
              finds the moments worth clipping, keeps the speaker in frame, and
              exports at 9:16.
            </p>
            <Button href="#reelcut">Get early access</Button>
          </div>
          <div className="mini" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
