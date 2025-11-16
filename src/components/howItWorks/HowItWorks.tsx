import React from "react";
import type { HowItWorksStep } from "../../types";
import { howItWorksSteps } from "../../data/appData";

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        {howItWorksSteps.map((step: HowItWorksStep) => (
          <div key={step.step} className="step">
            <div className="step-number">{step.step}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
