import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const ReputationManagement: React.FC = () => {
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
                Core Capability
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Automated Reputation & <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Review Generation
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Build unquestionable trust on autopilot. Automatically collect 5-star Google and Facebook reviews, respond with AI, and stream real-time social proof directly onto your website.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Scale Your Social Proof
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  Explore Features
                </button>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Comparison Section */}
      <section id="details-section" className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">A Smarter Approach</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Unmanaged Reputation vs. Automated Trust</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Modern buyers read reviews before every single purchase. Stop leaving your brand’s public rating to chance.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mt-12">
            {/* Traditional Card */}
            <AnimationWrapper type="slide" delay={100} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 text-gray-500">
                    <Icons.X className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Unmanaged Reviews & Feedback</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Hoping customers go search for your business page to leave a review results in low ratings and empty profiles.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Forgetting to ask clients for reviews because your team is busy',
                      'Only unhappy customers write reviews, skewing your rating downwards',
                      'Leaving positive feedback trapped on third-party sites instead of showcasing it',
                      'Failing to respond quickly to new reviews, signaling poor customer service',
                      'Zero defense against accidental or unfair 1-star reviews',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Missing search engine ranking juice, stale review dates, and lost trust.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Engine Card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Automated
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Rev Labs Reputation Engine</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    An active system that systematically generates, tracks, answers, and publishes reviews automatically.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Review invites trigger automatically post-booking or post-purchase',
                      'Engine optimized to maximize positive 5-star public ratings',
                      'Unhappy customer feedback is intercepted early to mitigate negative reviews',
                      'Real-time streaming widgets displaying reviews on your website',
                      'AI responds to new reviews instantly, maintaining high search rankings',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: A consistent flow of fresh 5-star ratings, high conversions, and maximum trust.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Platform Features</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Built to Dominate Local Search</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to systematically scale, manage, and display customer satisfaction without the manual effort.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automated Invites */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Automated Invites</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Trigger custom review invites over SMS text message and Email the exact moment a service is completed, an appointment is checked out, or a product is delivered.
                </p>
              </div>
            </AnimationWrapper>

            {/* Centralized Reviews Inbox */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Centralized Reviews Feed</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Monitor every incoming review across major hubs like Google Business Profile and Facebook from a single interface. Stay alert and never let valuable feedback slip through.
                </p>
              </div>
            </AnimationWrapper>

            {/* AI Review Auto-Responder */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Smart Auto-Responder</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Save hours on review replies. Leverage built-in AI tools to auto-draft intelligent, context-aware responses to positive and critical feedback instantly, ensuring a highly engaged online profile.
                </p>
              </div>
            </AnimationWrapper>

            {/* Live Streaming Reviews Widget */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Live Reviews Website Widget</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Embed gorgeous, high-converting review badges or slider widgets directly onto your website. Stream your latest 5-star reviews automatically to build instant social proof for every new visitor.
                </p>
              </div>
            </AnimationWrapper>

            {/* Custom Review Links */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Review Link Builders</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Generate direct-to-review shortcut URLs. Drop these personalized links inside text messages, client onboarding portals, or custom email signatures so clients can leave feedback with a single click.
                </p>
              </div>
            </AnimationWrapper>

            {/* Mitigation & Trust System */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Negative Review Mitigation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Protect your online brand score. Our specialized feedback loops are optimized to maximize the rate of 4 and 5-star reviews while giving you the chance to address issues first to mitigate negative public postings.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Review Nurturing Loop Detail */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Brand Shield</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Maximize Stars, <br className="hidden sm:inline" />
                  Mitigate Critical Feedback
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Leaving review collection entirely to chance can be dangerous. Typically, only extremely happy or extremely upset customers take the initiative to leave feedback voluntarily.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our system is built specifically to address this discrepancy. By systematically asking every single customer for feedback, we increase your overall review volume—pushing your true customer satisfaction scores to the forefront.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed font-semibold">
                  What about negative experiences?
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Before a customer goes public with a negative review, our system introduces a pathway optimized to capture and resolve critical feedback privately, protecting your reputation score while keeping your 5-star record clean.
                </p>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {/* Point 1 */}
              <AnimationWrapper type="slide" delay={100}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Icons.Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Automated 5-Star Acceleration</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Warrant a highly optimized prompt experience designed to make review submission seamless and simple for satisfied clients, boosting your overall count.
                    </p>
                  </div>
                </div>
              </AnimationWrapper>

              {/* Point 2 */}
              <AnimationWrapper type="slide" delay={200}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Icons.X className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Proactive Issue Capture</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Capture critical feedback early. Get instant notifications about unhappy customers so your operations team can resolve their complaints immediately before they vent on search engines.
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimationWrapper type="fade">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Take Control of Your Reputation?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Automate your review requests, engage clients instantly with AI, and stream five-star proof directly onto your site.
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Get Started Today
              <Icons.ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimationWrapper>
        </div>

        <div className="absolute inset-0 opacity-10 bg-dot-pattern mix-blend-overlay"></div>
      </section>
    </div>
  );
};
