import React from "react";
import { HomeHero } from "../components/home/HomeHero";
import { KindsSection } from "../components/home/KindsSection";
import { JourneySection } from "../components/home/JourneySection";
import { LaunchStrip } from "../components/home/LaunchStrip";

export function HomeView({ isVisible = true }) {
  return (
    <div className="view" data-view="home" hidden={!isVisible}>
      <HomeHero isActive={isVisible} />
      <KindsSection />
      <JourneySection />
      <LaunchStrip />
    </div>
  );
}
