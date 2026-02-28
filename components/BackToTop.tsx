import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const BackToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black text-white shadow-2xl transition-all duration-300 transform border border-white/20 hover:scale-110 active:scale-95 group ${
        showButton 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <Icons.ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
      
      {/* Subtle Tooltip-like Pulse */}
      <span className="absolute inset-0 rounded-full bg-white/10 animate-ping pointer-events-none opacity-0 group-hover:opacity-20"></span>
    </button>
  );
};