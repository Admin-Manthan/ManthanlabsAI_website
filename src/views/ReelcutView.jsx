import React from "react";
import { ReelcutHero } from "../components/reelcut/ReelcutHero";
import { StepsSection } from "../components/reelcut/StepsSection";
import { AudienceSection } from "../components/reelcut/AudienceSection";
import { WaitlistForm } from "../components/reelcut/WaitlistForm";

export function ReelcutView({ isVisible = true }) {
  return (
    <div className="view" data-view="reelcut" hidden={!isVisible}>
      <ReelcutHero />
      <StepsSection />
      <AudienceSection />
      <WaitlistForm />
    </div>
  );
}
