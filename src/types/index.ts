export interface TemplateApp {
  id: string;
  title: string;
  description: string;
  price: string;
  screenshots: string[];
  video: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}