import React, { useState } from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Icons } from './Icons';

export const SpotlightSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const spotlights = [
    {
      title: "AI Phone Receptionist",
      subtitle: "Never Miss a Call Again",
      description: "Our AI Voice Agents sound indistinguishable from humans and can handle multiple calls simultaneously. They book appointments directly into your calendar, answer FAQs, and qualify leads before they ever reach your team.",
      features: ["24/7 Availability", "Natural Language Processing", "Direct CRM Integration", "Instant Appointment Booking"],
      imageBg: "bg-gray-900" 
    },
    {
      title: "Smart Websites",
      subtitle: "More Than Just a Brochure",
      description: "We build websites designed for one purpose: conversion. Every site comes pre-loaded with automation tools, meaning your site actively works to capture visitors and turn them into paying customers.",
      features: ["Speed Optimized", "Mobile First Design", "Integrated Chat Widgets", "Automated Lead Funnels"],
      imageBg: "bg-gray-800"
    },
    {
      title: "Reputation Management",
      subtitle: "Turn Reviews into Revenue",
      description: "Automate the collection of 5-star reviews and instantly mitigate negative feedback. Build trust on autopilot and rank higher on local search.",
      features: ["Automated Review Requests", "Negative Feedback Interception", "Review Monitoring Dashboard", "Google & Facebook Sync"],
      imageBg: "bg-blue-900"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* Left Side: Content */}
          <AnimationWrapper type="slide" className="w-full max-w-full overflow-hidden">
            <div className="w-full">
              <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-500 uppercase tracking-widest">Flagship Solutions</h2>
              
              {/* Tabs Container with Scroll Indicators */}
              <div className="relative mb-10 w-full group">
                <div className="flex lg:flex-col space-x-6 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-l lg:border-gray-800 snap-x">
                  {spotlights.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`pb-4 lg:pb-3 lg:pt-3 lg:px-6 text-xs md:text-sm font-bold tracking-widest uppercase transition-all whitespace-nowrap relative snap-start text-left lg:border-l-2 lg:-ml-[1px] ${
                        activeTab === index 
                          ? 'text-white border-white bg-white/5' 
                          : 'text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/[0.02]'
                      }`}
                    >
                      {item.title}
                      {activeTab === index && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white lg:hidden transition-all duration-300"></span>
                      )}
                    </button>
                  ))}
                  {/* Padding for scroll end */}
                  <div className="flex-shrink-0 w-8 md:hidden"></div>
                </div>
                {/* Gradient Fade for scroll indication on mobile */}
                <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-black to-transparent pointer-events-none lg:hidden opacity-70"></div>
              </div>

              <div className="min-h-[auto] md:min-h-[320px] transition-all duration-500 ease-out">
                <h3 className="text-2xl md:text-4xl font-bold mb-5 leading-tight break-words">
                  {spotlights[activeTab].subtitle}
                </h3>
                <p className="text-sm md:text-lg text-gray-400 mb-8 leading-relaxed max-w-full md:max-w-xl">
                  {spotlights[activeTab].description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {spotlights[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm md:text-base">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Icons.Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimationWrapper>

          {/* Right Side: Visual */}
          <AnimationWrapper type="scale" delay={200} className="w-full mt-10 lg:mt-0">
            <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square w-full max-w-full md:max-w-[500px] mx-auto ${spotlights[activeTab].imageBg} shadow-2xl transition-colors duration-500 border border-white/5`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-6">
                  {activeTab === 0 && (
                    <div className="w-full max-w-[280px] md:max-w-[320px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 space-y-4 shadow-2xl relative overflow-hidden text-left transform hover:scale-[1.02] transition-transform duration-300">
                       {/* Header */}
                       <div className="flex items-center justify-between border-b border-white/5 pb-3">
                          <div className="flex items-center space-x-2">
                             <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                             </span>
                             <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase">Live Call Handling</span>
                          </div>
                          <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">Agent #01</span>
                       </div>
                       
                       {/* Caller Card */}
                       <div className="flex items-center space-x-3 bg-white/5 rounded-xl p-3 border border-white/5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                             <Icons.Users className="w-4 h-4 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                             <h4 className="text-xs font-bold text-white truncate">Sarah Jenkins</h4>
                             <p className="text-[10px] text-gray-400 truncate">Prospect • Inbound Lead</p>
                          </div>
                       </div>

                       {/* Waveform Visualizer Area */}
                       <div className="relative py-2 flex flex-col items-center justify-center rounded-xl bg-black/30 border border-white/5 p-4 overflow-hidden">
                          <div className="absolute top-2 right-2 flex items-center space-x-1 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                             <Icons.Cpu className="w-2.5 h-2.5 text-indigo-400 animate-pulse" />
                             <span className="text-[8px] text-indigo-300 font-semibold tracking-wider uppercase">AI Core</span>
                          </div>
                          
                          {/* Pulsing Core Sphere */}
                          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 relative z-10 my-2">
                             <Icons.Phone className="w-5 h-5 text-white animate-bounce" />
                             <div className="absolute -inset-1 rounded-full border border-indigo-400/20 animate-ping opacity-30"></div>
                             <div className="absolute -inset-3 rounded-full border border-blue-400/10 animate-ping delay-300 opacity-20"></div>
                          </div>

                          {/* Sound wave bars */}
                          <div className="flex items-end justify-center space-x-1.5 h-12 w-full mt-3">
                             <div className="w-1 rounded-full bg-indigo-500 animate-wave-1"></div>
                             <div className="w-1 rounded-full bg-blue-500 animate-wave-2"></div>
                             <div className="w-1 rounded-full bg-teal-500 animate-wave-3"></div>
                             <div className="w-1 rounded-full bg-purple-500 animate-wave-4"></div>
                             <div className="w-1 rounded-full bg-pink-500 animate-wave-2"></div>
                             <div className="w-1 rounded-full bg-indigo-400 animate-wave-1"></div>
                             <div className="w-1 rounded-full bg-blue-400 animate-wave-3"></div>
                             <div className="w-1 rounded-full bg-teal-400 animate-wave-4"></div>
                             <div className="w-1 rounded-full bg-purple-500 animate-wave-2"></div>
                             <div className="w-1 rounded-full bg-indigo-500 animate-wave-1"></div>
                          </div>
                       </div>

                       {/* Live Action Tracker */}
                       <div className="space-y-2">
                          <div className="bg-white/5 border border-white/5 rounded-lg p-2.5">
                             <p className="text-[10px] text-gray-300 italic leading-relaxed">"Perfect, I'd like to book an inspection on Monday morning."</p>
                          </div>
                          
                          {/* Calendar Synced Event */}
                          <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-lg text-emerald-300 text-[10px] animate-pulse">
                             <div className="flex items-center space-x-2">
                                <Icons.Calendar className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="font-semibold">Mon 9:00 AM — Synced</span>
                             </div>
                             <span className="text-[8px] font-bold bg-emerald-500/20 border border-emerald-500/30 px-1.5 py-0.5 rounded text-emerald-300 uppercase">Booked!</span>
                          </div>
                       </div>
                    </div>
                  )}
                  {activeTab === 1 && (
                    <div className="w-[92%] md:w-[88%] max-w-[440px] bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-left transform -rotate-1 hover:rotate-0 transition-transform duration-500 relative">
                       {/* Browser Header */}
                       <div className="bg-slate-900 border-b border-white/5 px-3 py-2.5 flex items-center space-x-2">
                          <div className="flex space-x-1.5 flex-shrink-0">
                             <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                          </div>
                          {/* URL Bar */}
                          <div className="bg-black/40 border border-white/5 rounded px-2.5 py-0.5 text-[8px] text-gray-500 truncate w-full max-w-[180px] font-mono">
                             https://airevlabs.com/client
                          </div>
                       </div>
                       
                       {/* Browser Content */}
                       <div className="p-4 md:p-6 space-y-4 md:space-y-6 bg-gradient-to-b from-slate-950 to-slate-900/60 min-h-[260px] md:min-h-[280px] relative">
                          
                          {/* Mini Hero Banner */}
                          <div className="space-y-1.5">
                             <span className="text-[7px] md:text-[8px] text-indigo-400 uppercase tracking-widest font-extrabold">Auto-Optimized Site</span>
                             <h4 className="text-xs md:text-base font-bold text-white leading-tight">High-Conversion Web Experience</h4>
                             <div className="h-1.5 w-1/3 bg-white/10 rounded"></div>
                          </div>

                          {/* Dynamic Page Components Grid */}
                          <div className="grid grid-cols-2 gap-3 max-w-[80%]">
                             {/* Component 1: CRM Lead Capture Form */}
                             <div className="bg-white/[0.03] border border-white/5 p-2.5 rounded-lg space-y-1.5">
                                <div className="flex items-center justify-between">
                                   <span className="text-[7px] text-gray-500 uppercase font-bold">Lead Funnel</span>
                                   <Icons.Cpu className="w-2.5 h-2.5 text-indigo-400" />
                                </div>
                                <div className="h-1 bg-white/20 rounded"></div>
                                <div className="h-1 bg-white/10 rounded w-5/6"></div>
                                <div className="h-3.5 bg-indigo-600 rounded text-[6px] md:text-[7px] text-white flex items-center justify-center font-bold shadow-sm shadow-indigo-500/20">
                                   Submit Form
                                </div>
                             </div>

                             {/* Component 2: Page Speed Performance Indicator */}
                             <div className="bg-white/[0.03] border border-white/5 p-2.5 rounded-lg flex flex-col justify-between items-center text-center">
                                <span className="text-[7px] text-gray-500 uppercase font-bold tracking-wider">PageSpeed</span>
                                {/* Speed Ring */}
                                <div className="relative w-8 h-8 flex items-center justify-center my-1">
                                   <svg className="w-full h-full transform -rotate-90">
                                      <circle cx="16" cy="16" r="13" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" fill="transparent" />
                                      <circle cx="16" cy="16" r="13" stroke="#10b981" strokeWidth="2.5" fill="transparent" 
                                              strokeDasharray="82" strokeDashoffset="5" className="animate-speed-draw" />
                                   </svg>
                                   <span className="absolute text-[8px] md:text-[9px] font-bold text-emerald-400">99</span>
                                </div>
                                <span className="text-[6px] text-emerald-400 font-semibold uppercase">Ultra Fast</span>
                             </div>
                          </div>

                          {/* Floating Integrated Live Chat Widget Overlay */}
                          <div className="absolute right-4 bottom-4 w-[160px] md:w-[200px] bg-slate-900 border border-indigo-500/30 rounded-xl shadow-2xl p-2.5 flex items-start space-x-2 animate-bounce-slow transform translate-y-1 hover:translate-y-0 transition-transform duration-300">
                             <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-600 flex items-center justify-center shadow flex-shrink-0 relative">
                                <Icons.Cpu className="w-3.5 h-3.5 text-white" />
                                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-slate-900 animate-pulse"></div>
                             </div>
                             <div className="min-w-0 flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                   <span className="text-[8px] font-bold text-white">AI Assistant</span>
                                   <span className="text-[6px] text-emerald-400 font-medium">Online</span>
                                </div>
                                <div className="bg-slate-950 border border-white/5 rounded px-2 py-1">
                                   <p className="text-[7px] text-gray-300 leading-snug italic">"Need to schedule a booking? I can help!"</p>
                                </div>
                             </div>
                          </div>

                       </div>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="w-full max-w-[280px] md:max-w-[320px] bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 space-y-4 shadow-2xl relative overflow-hidden text-left transform hover:scale-[1.02] transition-transform duration-300">
                       {/* Header */}
                       <div className="flex items-center justify-between border-b border-white/5 pb-3">
                          <div className="flex items-center space-x-2">
                             <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-xs shadow-md">G</div>
                             <span className="text-xs font-bold text-white">Google Reviews</span>
                          </div>
                          {/* Rating & Glowing Stars */}
                          <div className="flex items-center space-x-1">
                             <span className="text-[10px] font-bold text-amber-400">5.0</span>
                             <div className="flex text-amber-400 space-x-0.5">
                                {[1,2,3,4,5].map(i => <Icons.Star key={i} className="w-2.5 h-2.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)] animate-pulse" />)}
                             </div>
                          </div>
                       </div>
                       
                       {/* SMS Review Request Sent Simulation */}
                       <div className="bg-white/5 border border-white/5 rounded-xl p-3 space-y-2 relative overflow-hidden">
                          <div className="flex items-center justify-between">
                             <span className="text-[8px] text-indigo-400 font-extrabold uppercase tracking-wider">SMS Autopilot</span>
                             <span className="text-[8px] text-gray-500">Sent 2m ago</span>
                          </div>
                          <div className="flex items-center space-x-2.5">
                             <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">LD</div>
                             <div className="flex-1 min-w-0">
                                <div className="h-1 bg-white/20 rounded w-16 mb-1"></div>
                                <div className="h-1 bg-white/10 rounded w-24"></div>
                             </div>
                             <span className="text-[7px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.5 rounded uppercase">Review Request Sent</span>
                          </div>
                       </div>

                       {/* Interactive 5-Star Review Notification Pop-up */}
                       <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3.5 space-y-2 relative overflow-hidden animate-bounce-slow">
                          {/* Green checkmark floating badge */}
                          <div className="absolute -right-1 -top-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center shadow-lg animate-pulse">
                             <Icons.Check className="w-3.5 h-3.5 text-white" />
                          </div>

                          <div className="flex items-center space-x-2">
                             <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[9px] font-extrabold text-emerald-400">5★</div>
                             <span className="text-[10px] font-bold text-white">Liam Davis (Verified)</span>
                          </div>
                          
                          <p className="text-[9px] text-emerald-200/90 italic leading-relaxed bg-black/20 p-2 rounded-lg">
                             "Phenomenal service! The automated booking was super easy. Definitely 5 stars!"
                          </p>
                       </div>

                       {/* Autopilot SEO Rank Boost Stat Card */}
                       <div className="flex items-center justify-between bg-white/[0.03] border border-white/5 px-3 py-2 rounded-lg text-xs">
                          <span className="text-[9px] text-gray-400 font-medium">Local SEO Boost</span>
                          <div className="flex items-center space-x-1 text-emerald-400 font-bold text-[10px]">
                             <Icons.TrendingUp className="w-3.5 h-3.5" />
                             <span>Rank +18%</span>
                          </div>
                       </div>

                    </div>
                 )}
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes wave-height-1 {
          0%, 100% { height: 10px; }
          50% { height: 36px; }
        }
        @keyframes wave-height-2 {
          0%, 100% { height: 6px; }
          50% { height: 44px; }
        }
        @keyframes wave-height-3 {
          0%, 100% { height: 14px; }
          50% { height: 28px; }
        }
        @keyframes wave-height-4 {
          0%, 100% { height: 8px; }
          50% { height: 48px; }
        }
        .animate-wave-1 {
          animation: wave-height-1 1.2s ease-in-out infinite;
        }
        .animate-wave-2 {
          animation: wave-height-2 0.8s ease-in-out infinite;
        }
        .animate-wave-3 {
          animation: wave-height-3 1.5s ease-in-out infinite;
        }
        .animate-wave-4 {
          animation: wave-height-4 1.0s ease-in-out infinite;
        }
        @keyframes draw-speed-ring {
          from { stroke-dashoffset: 69; }
          to { stroke-dashoffset: 4; }
        }
        .animate-speed-draw {
          animation: draw-speed-ring 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};