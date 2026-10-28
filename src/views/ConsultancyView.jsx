import React from "react";
import { ConsultancyReel } from "../components/consultancy/ConsultancyReel";
import { CriteriaList } from "../components/consultancy/CriteriaList";
import { ProjectProposalForm } from "../components/consultancy/ProjectProposalForm";

export function ConsultancyView({ isVisible = true }) {
  return (
    <div className="view" data-view="consultancy" hidden={!isVisible}>
      <section className="page-head">
        <div className="wrap">
          <p className="kicker">Consultancy</p>
          <h1>Where we started.</h1>
          <p className="lede">
            Before the lab, we built software and AI for clients, most of it on
            large language models. We still take on a few projects, when the
            problem is one we want to solve.
          </p>
        </div>
      </section>

      <ConsultancyReel />

      <section className="section">
        <div className="wrap demo">
          <CriteriaList />
          <ProjectProposalForm />
        </div>
      </section>
    </div>
  );
}
