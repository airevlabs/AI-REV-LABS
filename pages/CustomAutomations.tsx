import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const CustomAutomations: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 font-sans overflow-x-hidden flex items-center">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-dot-pattern overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimationWrapper type="fade">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 bg-black rounded-full mr-2.5 animate-pulse"></span>
                Custom Systems Consultation
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Connect Your Business. <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Without Boundaries.
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed font-semibold">
                Have custom automation plans, specialized workflow databases, or complex multi-software bottlenecks not explicitly discussed on our site? We provide custom systems architecture consultations. Let's design a custom solution together.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Book Automation Consultation
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>
    </div>
  );
};
