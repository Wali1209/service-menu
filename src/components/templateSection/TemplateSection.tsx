import React from "react";

import type { TemplateApp } from "../../types";
import Carousel from "../common/Carousel";

interface TemplateSectionProps {
  app: TemplateApp;
  reverse?: boolean;
}

const TemplateSection: React.FC<TemplateSectionProps> = ({
  app,
  reverse = false,
}) => {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    contactForm?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`template-section ${reverse ? "reverse" : ""}`}>
      <div className="template-content">
        <h2 className="template-title">{app.title}</h2>
        <p className="template-description">{app.description}</p>

        <div className="media-container">
          <div className="screenshots">
            <h3>App Screenshots</h3>
            <Carousel images={app.screenshots} />
          </div>

          <div className="video-demo">
            <h3>Live Demo</h3>
            <video
              controls
              className="demo-video"
              poster={`/assets/videos/${app.id}-video-poster.jpg`}
            >
              <source src={app.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-note">
              Watch how customers use the app in real scenarios
            </p>
          </div>
        </div>

        <div className="pricing">
          <button className="price-button" onClick={scrollToContact}>
            Get an App Like This | {app.price}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplateSection;
