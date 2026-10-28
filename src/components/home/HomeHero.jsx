import React from "react";
import { ParticleCanvas } from "./ParticleCanvas";
import { Button } from "../common/Button";

export function HomeHero({ isActive = true }) {
  return (
    <section className="hero">
      <ParticleCanvas isActive={isActive} />
      <div className="wrap">
        <h1>We run experiments in AI until they become products.</h1>
        <p className="lede">
          Apex Labs builds models, simulates complex systems, and turns the
          experiments that work into tools people use.
        </p>
        <div className="row">
          <Button href="#reelcut">See what launches next</Button>
          <Button href="#products" variant="line-mute">
            Browse products
          </Button>
        </div>
      </div>
      <p className="caption">Live: 900 particles in a shifting flow field</p>
    </section>
  );
}
