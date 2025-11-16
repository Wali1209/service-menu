import React from "react";

import { templateApps } from "./data/appData";
import "./App.css";
import TemplateSection from "./components/templateSection/TemplateSection";
import HowItWorks from "./components/howItWorks/HowItWorks";
import ContactForm from "./components/contactForm/ContactForm";
import Hero from "./components/hero/Hero";

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />

      {templateApps.map((app, index) => (
        <TemplateSection key={app.id} app={app} reverse={index % 2 !== 0} />
      ))}

      <HowItWorks />
      <ContactForm />
    </div>
  );
};

export default App;
