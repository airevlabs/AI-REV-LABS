import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { SpotlightSection } from './components/SpotlightSection';
import { HowItWorks } from './components/HowItWorks';
import { MetricsSection } from './components/MetricsSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <SpotlightSection />
        <HowItWorks />
        <MetricsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;