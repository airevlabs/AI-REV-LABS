import React from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from './AnimationWrapper';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description: "We analyze your current processes to identify bottlenecks and high-impact automation opportunities."
    },
    {
      number: "02",
      title: "Strategy Design",
      description: "We map out a custom automation ecosystem tailored to your specific revenue goals."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We build, test, and deploy your new systems while you focus on your business."
    },
    {
      number: "04",
      title: "Launch & Optimize",
      description: "We go live, monitor performance, and continuously tweak for maximum efficiency."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper type="fade">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900">Your Path to Automation</h2>
            <p className="mt-4 text-xl text-gray-600">Simple, transparent, and results-driven.</p>
          </div>
        </AnimationWrapper>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <AnimationWrapper key={index} delay={index * 200} type="slide">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mb-6 mx-auto md:mx-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">{step.title}</h3>
                    <p className="text-gray-600 text-center md:text-left leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Small Black Connecting Arrow (Desktop only, centered exactly in the gap between cards) */}
                  {index < 3 && (
                    <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-[28px] z-20 pointer-events-none">
                      <svg className="w-6 h-6 text-black animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  )}
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>

        <AnimationWrapper type="fade" delay={800}>
          <div className="text-center mt-16 pt-8 border-t border-gray-100">
            <p className="text-xl text-gray-600">
              Have more questions?{' '}
              <Link to="/faq" className="font-bold text-black hover:underline inline-flex items-center group">
                Click here to read our FAQs
                <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </p>
          </div>
        </AnimationWrapper>

      </div>
    </section>
  );
};