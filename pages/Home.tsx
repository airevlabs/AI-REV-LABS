import React from 'react';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { ServicesSection } from '../components/ServicesSection';
import { SpotlightSection } from '../components/SpotlightSection';
import { HowItWorks } from '../components/HowItWorks';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <SpotlightSection />
      <HowItWorks />
    </>
  );
};
