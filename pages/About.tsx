import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-dot-pattern border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimationWrapper type="fade">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 bg-black rounded-full mr-2.5 animate-pulse"></span>
                Founded in 2025
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Our Story. Our Vision. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Your Growth.
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
                Driven by a genuine motivation to help small-and-medium businesses save valuable time, establish an active online presence, and grow revenue effortlessly.
              </p>
            </AnimationWrapper>
          </div>
        </div>

        {/* Soft floating background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-45 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Narrative Section: Genesis & Passion */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column: The Spark */}
            <AnimationWrapper type="slide" delay={100}>
              <div>
                <span className="text-sm font-bold tracking-wider text-gray-400 uppercase">The Genesis</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 mb-6">Why We Started</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                  AI Rev Labs was founded in 2025 out of a simple but powerful realization. We noticed that an overwhelming number of small-and-medium-sized businesses still lacked a proper, optimized website or modern online presence.
                </p>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Hardworking business owners were spending precious hours every single day completing tedious, manual administrative tasks. Meanwhile, valuable leads and customer inquiries were constantly slipping through the cracks—simply because there wasn't enough time to catch and respond to them.
                </p>
              </div>
            </AnimationWrapper>

            {/* Right Column: The Solution */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-gray-50/50 p-8 sm:p-10 rounded-3xl border border-gray-100">
                <span className="text-sm font-bold tracking-wider text-gray-400 uppercase">A Genuine Mission</span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                  With a genuine motivation to help small-and-medium businesses reclaim their time and increase their bottom line, we set out to build the AI Rev Labs SaaS platform.
                </p>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  We decided to merge our extensive expertise of more than 20 years in web building and IT services with a robust platform that provides various web and automation services. We don't believe in overcomplicating things; we believe in providing a simple, comprehensive SaaS platform that works reliably so you can focus on what you do best.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50/30 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Pillars of Excellence</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">What Drives Us</h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
                We bridge high-end capability with business-first reliability, ensuring you are supported at every step of the journey.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <AnimationWrapper type="slide" delay={100}>
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white shadow-md">
                    <Icons.BarChart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">20+ Years IT & Web Experience</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Our foundation rests on two decades of delivering professional digital presences and robust IT networks. We ensure the services hosted on our platform are secure, clean, and run without interruption.
                  </p>
                </div>
              </div>
            </AnimationWrapper>

            {/* Reach */}
            <AnimationWrapper type="slide" delay={200}>
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white shadow-md">
                    <Icons.Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Based in Kalamazoo, Serving Everywhere</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We are proudly based right in Kalamazoo, Michigan. However, our services span far beyond. We provide a powerful SaaS platform with modern web and automation services for ambitious service businesses all across the country.
                  </p>
                </div>
              </div>
            </AnimationWrapper>

            {/* Approachable */}
            <AnimationWrapper type="slide" delay={300}>
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white shadow-md">
                    <Icons.Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Approachable Automation</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We know that modern technology can feel overwhelming. That is why we handle the setup and deliver simple systems that work for you.
                  </p>
                </div>
              </div>
            </AnimationWrapper>

            {/* Outcome-focused */}
            <AnimationWrapper type="slide" delay={400}>
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white shadow-md">
                    <Icons.Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Time & Revenue Driven</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We focus entirely on outcome-driven performance. Every tool in our SaaS platform, from missed-call text-back to automatic schedulers, is designed to save you manual hours and capture immediate revenue opportunities.
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimationWrapper type="fade">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Let's Streamline Your Revenue Engine</h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Ready to claim your time and make sure you never miss another customer inquiry? Contact us today!
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Get Started
              <Icons.ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimationWrapper>
        </div>

        <div className="absolute inset-0 opacity-10 bg-dot-pattern mix-blend-overlay"></div>
      </section>
    </div>
  );
};
