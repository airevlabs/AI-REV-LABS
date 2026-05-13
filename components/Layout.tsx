import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';
import { AnalyticsTracker } from './AnalyticsTracker';

export const Layout: React.FC = () => {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <AnalyticsTracker />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};
