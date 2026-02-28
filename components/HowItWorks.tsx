import React from 'react';
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
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper type="fade">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900">Your Path to Automation</h2>
            <p className="mt-4 text-xl text-gray-600">Simple, transparent, and results-driven.</p>
          </div>
        </AnimationWrapper>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <AnimationWrapper key={index} delay={index * 200} type="slide">
                <div className="bg-white p-6 relative group">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mb-6 mx-auto md:mx-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">{step.title}</h3>
                  <p className="text-gray-600 text-center md:text-left leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};