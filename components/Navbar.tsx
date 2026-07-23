import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Icons } from './Icons';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleGetStarted = () => {
    setIsOpen(false);
    navigate('/get-started');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => { if(location.pathname !== '/') navigate('/'); else scrollToSection('hero'); }}>
             {/* Unified Logo Container: Responsive Sizing */}
             <div className="bg-black text-white flex items-center px-3 py-2 md:px-5 md:py-2.5 rounded-lg shadow-md transition-transform group-hover:scale-105">
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center overflow-hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow group-hover:animate-spin w-full h-full">
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.5.45l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.04.27.25.45.5.45h4c.25 0 .46-.18.5-.45l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                    </svg>
                </div>
                <span className="font-sans font-bold text-base md:text-xl tracking-tight uppercase leading-none ml-2 md:ml-3">AI Rev Labs</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-black font-medium transition-colors relative group">
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-black font-medium transition-colors relative group">
              How it Works
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </button>
             <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-black font-medium transition-colors relative group">
              Pricing
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link to="/faq" className="text-gray-700 hover:text-black font-medium transition-colors relative group">
              FAQs
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
             <button onClick={handleGetStarted} className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none p-1">
              {isOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
           <button onClick={() => scrollToSection('services')} className="block w-full py-3 text-center text-gray-800 hover:bg-gray-50 font-medium">Services</button>
           <button onClick={() => scrollToSection('how-it-works')} className="block w-full py-3 text-center text-gray-800 hover:bg-gray-50 font-medium">How it Works</button>
           <button onClick={() => scrollToSection('pricing')} className="block w-full py-3 text-center text-gray-800 hover:bg-gray-50 font-medium">Pricing</button>
           <Link to="/faq" onClick={() => setIsOpen(false)} className="block w-full py-3 text-center text-gray-800 hover:bg-gray-50 font-medium">FAQs</Link>
           <button onClick={handleGetStarted} className="block w-full py-3 text-center text-black font-bold bg-gray-50 mt-2">Get Started</button>
        </div>
      </div>
    </nav>
  );
};