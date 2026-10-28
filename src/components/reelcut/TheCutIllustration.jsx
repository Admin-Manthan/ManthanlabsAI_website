import React from "react";
import { WaveformTimeline } from "./WaveformTimeline";
import { ShortsPreview } from "./ShortsPreview";

export function TheCutIllustration() {
  return (
    <div
      className="cut"
      aria-label="Illustration: a long timeline with three highlighted moments, each becoming a vertical short"
    >
      <WaveformTimeline />
      <ShortsPreview />
    </div>
  );
}
