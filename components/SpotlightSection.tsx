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
                <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide border-b border-gray-800 snap-x">
                  {spotlights.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`pb-4 text-xs md:text-sm font-bold tracking-widest uppercase transition-all whitespace-nowrap relative snap-start ${
                        activeTab === index 
                          ? 'text-white' 
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {item.title}
                      {activeTab === index && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300"></span>
                      )}
                    </button>
                  ))}
                  {/* Padding for scroll end */}
                  <div className="flex-shrink-0 w-8 md:hidden"></div>
                </div>
                {/* Gradient Fade for scroll indication on mobile */}
                <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-black to-transparent pointer-events-none md:hidden opacity-70"></div>
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
                   <div className="text-center space-y-4 md:space-y-6 w-full max-w-[240px] md:max-w-[280px]">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-white/20 flex items-center justify-center mx-auto animate-pulse">
                         <Icons.Phone className="w-6 h-6 md:w-10 md:h-10 text-white" />
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 w-full">
                         <div className="h-2 w-3/4 bg-white/30 rounded mb-3"></div>
                         <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                      </div>
                   </div>
                 )}
                 {activeTab === 1 && (
                   <div className="w-full max-w-[280px] md:max-w-[320px] bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700">
                      <div className="h-4 md:h-5 bg-gray-100 border-b flex items-center px-3 space-x-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                        <div className="h-16 md:h-24 bg-gray-100 rounded-lg"></div>
                        <div className="grid grid-cols-2 gap-3">
                           <div className="h-10 md:h-16 bg-gray-50 rounded-lg"></div>
                           <div className="h-10 md:h-16 bg-gray-50 rounded-lg"></div>
                        </div>
                      </div>
                   </div>
                 )}
                 {activeTab === 2 && (
                    <div className="w-full max-w-[280px] bg-white rounded-xl shadow-2xl p-4 md:p-6 space-y-4 md:space-y-6 transform hover:scale-105 transition-transform duration-300">
                       {/* Review Score */}
                       <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                          <div className="flex items-center space-x-2">
                             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">G</div>
                             <span className="font-bold text-gray-800 text-sm md:text-base">Google</span>
                          </div>
                          <div className="flex text-yellow-400 space-x-0.5">
                             {[1,2,3,4,5].map(i => <Icons.Star key={i} className="w-3 h-3 md:w-4 md:h-4" />)}
                          </div>
                       </div>
                       
                       {/* Review Bubble */}
                       <div className="space-y-3">
                          <div className="bg-gray-50 rounded-lg p-3 relative">
                             <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <div className="h-2 w-16 bg-gray-200 rounded"></div>
                             </div>
                             <div className="space-y-1.5">
                                <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                                <div className="h-1.5 w-3/4 bg-gray-200 rounded"></div>
                             </div>
                             <div className="absolute -right-2 -top-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
                                <Icons.Check className="w-3 h-3 text-white" />
                             </div>
                          </div>
                          
                          {/* Notification */}
                          <div className="flex items-center space-x-3 bg-blue-50 p-2 rounded-lg text-blue-800 text-xs font-medium">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                              <span>New 5-Star Review Received</span>
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
      `}</style>
    </section>
  );
};