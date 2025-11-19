import type { HowItWorksStep, TemplateApp } from "../types";


export const templateApps: TemplateApp[] = [
  {
    id: 'restaurants',
    title: 'For Restaurants',
    description: 'Turn your menu into a beautiful app, accept bookings, and engage your customers.',
    price: 'Starting at $300',
    screenshots: [
      '/assets/images/restaurant-1.jpg',
      '/assets/images/restaurant-2.jpg',
      '/assets/images/restaurant-3.jpg',
      '/assets/images/restaurant-4.jpg',
      '/assets/images/restaurant-5.jpg',
      '/assets/images/restaurant-6.jpg',
      '/assets/images/restaurant-7.jpg',
    ],
    video: '/assets/videos/restaurant-video.mp4'
  },
  {
    id: 'Barbers-salons',
    title: 'For Service Businesses',
    description: 'Showcase your services, accept appointments, and manage your business on the go.',
    price: 'Starting at $300',
    screenshots: [
      '/assets/images/barber-1.jpg',
      '/assets/images/barber-2.jpg',
      '/assets/images/barber-3.jpg',
      '/assets/images/barber-4.jpg'
    ],
    video: '/assets/videos/barber-video.mp4'
  },
  {
    id: 'gyms-trainers',
    title: 'For Gyms & Trainers',
    description: 'Schedule classes, track member progress, and build your fitness community.',
    price: 'Starting at $300',
    screenshots: [
      '/assets/images/gym-1.jpg',
      '/assets/images/gym-2.jpg',
      '/assets/images/gym-3.jpg',
      '/assets/images/gym-4.jpg'
    ],
    video: '/assets/videos/gym-video.mp4'
  }
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: 'You Message Me',
    description: 'Reach out through our contact form or direct message to start the conversation.'
  },
  {
    step: 2,
    title: 'We Discuss',
    description: 'We\'ll have a detailed discussion about your requirements and customize the template for your needs.'
  },
  {
    step: 3,
    title: 'I Build',
    description: 'I\'ll develop your mobile app using our proven templates, with regular updates on progress.'
  },
  {
    step: 4,
    title: 'You Launch!',
    description: 'Your app goes live on app stores, ready to serve your customers and grow your business.'
  }
];