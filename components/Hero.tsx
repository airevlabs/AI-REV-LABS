import React, { useEffect, useState, useMemo } from 'react';
import { Icons } from './Icons';
import { HeroCanvas } from './HeroCanvas';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Typewriter State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const titles = useMemo(() => [
    "Website", 
    "Bookings", 
    "Reminders", 
    "Reviews", 
    "Revenue"
  ], []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter Effect
  useEffect(() => {
    const i = loopNum % titles.length;
    const fullText = titles[i];
    
    let speed = isDeleting ? 75 : 150;

    if (!isDeleting && text === fullText) {
      speed = 2000; // Pause at end of word
    } else if (isDeleting && text === '') {
      speed = 500; // Pause before typing next word
    }

    const timer = setTimeout(() => {
       if (!isDeleting && text === fullText) {
          setIsDeleting(true);
       } else if (isDeleting && text === '') {
          setIsDeleting(false);
          setLoopNum(prev => prev + 1);
       } else {
          setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
       }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, titles]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const animationLimit = 400;
  const progress = Math.min(scrollY / animationLimit, 1);
  const opacity = 1 - progress; 
  const shift = scrollY * 2.5; 

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* 3D Animation Background */}
      <HeroCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 text-sm font-medium mb-8 animate-pulse shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Specialized in helping service-based businesses
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            <div 
              className="relative inline-block"
              style={{ 
                transform: `translateX(${shift}px)`, 
                opacity: opacity,
                willChange: 'transform, opacity'
              }}
            >
              Automate Your
            </div>
            
            <div 
              style={{ 
                transform: `translateX(-${shift}px)`, 
                opacity: opacity,
                willChange: 'transform, opacity'
              }}
            >
              <div className="relative inline-flex justify-center items-center mt-2 md:mt-4 h-[1.4em]">
                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                    {text}
                 </span>
                 <span className="inline-block w-[3px] md:w-[5px] h-[0.9em] bg-black ml-1 md:ml-2 align-middle animate-blink mb-3"></span>
              </div>
            </div>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed bg-white/40 backdrop-blur-sm p-4 rounded-xl">
            Stop losing leads to manual processes. Save time, capture more opportunities, and close more deals with intelligent automation systems that work 24/7.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
            >
              Start Automating
              <Icons.ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-black border-2 border-gray-200 rounded-full font-semibold text-lg hover:border-black transition-all flex items-center justify-center relative z-20"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Animated Graphic Representation */}
        <div className="mt-20 relative max-w-3xl mx-auto hidden md:block">
           <div className="relative rounded-2xl bg-white/60 backdrop-blur-md shadow-2xl p-8 border border-white/40">
              <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-visible">
                <rect 
                    x="2" 
                    y="2" 
                    width="calc(100% - 4px)" 
                    height="calc(100% - 4px)" 
                    rx="14" 
                    fill="none" 
                    stroke="black" 
                    strokeWidth="2"
                    pathLength="1"
                    className="animate-draw-border origin-center opacity-20"
                    style={{ transform: 'scaleY(-1)' }}
                />
              </svg>

              <div className="grid grid-cols-3 gap-4 text-center relative z-10">
                 <div className="flex flex-col items-center space-y-4 animate-reveal-item-1 opacity-10">
                    <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-sm">
                        <Icons.Workflow className="w-8 h-8 text-gray-700" />
                    </div>
                    <p className="font-semibold text-lg">Automation</p>
                 </div>

                 <div className="flex flex-col items-center space-y-4 animate-reveal-item-2 opacity-10">
                    <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-sm">
                        <Icons.Cpu className="w-8 h-8 text-gray-700" />
                    </div>
                    <p className="font-semibold text-lg">AI Processing</p>
                 </div>

                 <div className="flex flex-col items-center space-y-4 animate-reveal-item-3 opacity-10">
                    <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-sm">
                        <Icons.TrendingUp className="w-8 h-8 text-gray-700" />
                    </div>
                    <p className="font-semibold text-lg">Revenue Growth</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      <style>{`
        .animate-blink {
           animation: blink 1s step-end infinite;
        }

        @keyframes blink {
           0%, 100% { opacity: 1; }
           50% { opacity: 0; }
        }

        .animate-draw-border {
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
            animation: draw-border 8s linear infinite;
        }

        .animate-reveal-item-1 { animation: reveal-item-1 8s linear infinite; }
        .animate-reveal-item-2 { animation: reveal-item-2 8s linear infinite; }
        .animate-reveal-item-3 { animation: reveal-item-3 8s linear infinite; }

        @keyframes draw-border {
            0% { stroke-dashoffset: 1; }
            75% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 0; }
        }

        @keyframes reveal-item-1 {
            0% { opacity: 0.1; filter: blur(2px); transform: scale(0.95); }
            5% { opacity: 1; filter: blur(0); transform: scale(1); }
            20% { opacity: 0.1; filter: blur(2px); transform: scale(0.95); }
            60% { opacity: 0.1; filter: blur(2px); transform: scale(0.95); }
            65% { opacity: 1; filter: blur(0); transform: scale(1); }
            100% { opacity: 1; filter: blur(0); transform: scale(1); }
        }

        @keyframes reveal-item-2 {
            0% { opacity: 0.1; filter: blur(2px); transform: scale(0.95); }
            10% { opacity: 0.1; filter: blur(2px); transform: scale(0.95); }
            15% { opacity: 1; filter: blur(0); transform: scale(1); }
            30% { opacity: 0.1; filter: blur(2px); transform: scale(0.95); }
            45% { opacity: 0.1; filter: blur(2px); transform: scale(0.95); }
            50% { opacity: 1; filter: blur(0); transform: scale(1); }
            100% { opacity: 1; filter: blur(0); transform: scale(1); }
        }

        @keyframes reveal-item-3 {
            0% { opacity: 0.1; filter: blur(2px); transform: scale(0.95); }
            20% { opacity: 0.1; filter: blur(2px); transform: scale(0.95); }
            25% { opacity: 1; filter: blur(0); transform: scale(1); }
            100% { opacity: 1; filter: blur(0); transform: scale(1); }
        }
      `}</style>
    </section>
  );
};