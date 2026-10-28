import React from "react";
import { StatusBadge } from "../common/StatusBadge";
import { Button } from "../common/Button";
import { TheCutIllustration } from "./TheCutIllustration";

export function ReelcutHero() {
  return (
    <section className="rc-hero">
      <div className="wrap">
        <StatusBadge status="launch" label="Launching soon" />
        <h1 style={{ marginTop: "18px" }}>Reelcut</h1>
        <p className="tag">Your long video already has the shorts in it.</p>
        <p className="lede">
          Drop in a podcast, a talk or a stream. Reelcut finds the moments people
          will stop scrolling for, frames them for vertical screens and hands
          them back ready to post.
        </p>
        <div className="row">
          <Button href="#waitlist">Join the waitlist</Button>
        </div>

        <TheCutIllustration />
      </div>
    </section>
  );
}
