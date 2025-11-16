import React from "react";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    contactForm?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Affordable, Professional Mobile Apps for Local Businesses
        </h1>
        <p className="hero-subtitle">
          Transform your business with custom mobile apps built on proven
          templates. Fast delivery, professional quality, and budget-friendly
          pricing.
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          Get Your App Today
        </button>
      </div>
    </section>
  );
};

export default Hero;
