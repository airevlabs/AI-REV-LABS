import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const LeadReactivation: React.FC = () => {
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
                Wake Up Dead Leads with <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Database Reactivation
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Extract hidden revenue from the database you already own. Re-engage cold contacts, past inquiries, and dormant leads with zero additional advertising spend.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Reactivate Your Database
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  Explore Strategy
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
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Maximize Your ROI</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Dormant Spreadsheets vs. Active Revenue</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Acquiring a new customer is up to 5x more expensive than retaining or re-engaging an existing lead. Turn your stagnant database into active cash flow.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Stagnant Contacts Database</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Leaving cold contacts sitting on spreadsheets or in old email tools collecting dust results in lost opportunities.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Warm inquiries that cold-shouldered and were never followed up',
                      'Former customers who haven’t purchased in 6+ months but still love your brand',
                      'Wasting thousands of dollars buying new ads while ignoring thousands of old contacts',
                      'No system to immediately flag or text an old lead when they show interest again',
                      'Relying entirely on bulk email blasts that get sent directly to the spam folder',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Wasted marketing budget, stagnant sales cycles, and missed organic revenue.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Engine Card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Active Sync
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Rev Labs Reactivation Engine</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A personalized, automated system that initiates conversation and captures active buyers from your existing lists.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Launch highly customized SMS & Email re-engagement flows instantly',
                      'Get direct alerts in real-time the second an old contact raises their hand',
                      'Qualify, capture, and track responses inside your visual sales pipeline',
                      'Pair with our Booking Calendar for hands-free conversational scheduling',
                      'Generate immediate cash injections without spending a dollar on paid ads',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: Immediate high-margin ROI, rapid database cleanups, and booked meetings.
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
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Revive Cold Opportunities</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Systematically reach, filter, and convert your existing database contacts back into active customer conversations.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Multi-Channel Broadcasts */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SMS & Email Campaigns</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Send thousands of personal-feeling text messages and structured email templates simultaneously to reactivate cold leads, offering an immediate reason for them to reply.
                </p>
              </div>
            </AnimationWrapper>

            {/* Smart Contact Filtering */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">High-Intent Filter Tags</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Segment lists dynamically. Separate unconverted prospects from past customers, allowing you to launch tailored re-engagement offers that speak directly to their previous interactions.
                </p>
              </div>
            </AnimationWrapper>

            {/* Synergistic Booking */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conversational AI Sync</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pair database reactivation with our **Booking Calendar** or **AI Receptionist** services to let our conversational agents auto-interpret responses and book appointments hands-free.
                </p>
              </div>
            </AnimationWrapper>

            {/* Instant Sales Routing */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Team Alerts</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For standalone setups, the second a contact responds to your reactivation campaign, the engine instantly routes their reply and contact profile directly to your team over SMS or push notification.
                </p>
              </div>
            </AnimationWrapper>

            {/* The 5-Min Lead Rule */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">5-Minute Response Rule</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Leads go cold fast. Our automated flows trigger custom, prompt follow-ups the millisecond a lead clicks a link or responds, striking while their interest is at its absolute highest.
                </p>
              </div>
            </AnimationWrapper>

            {/* Pipeline Reactivation */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">CRM Pipeline Sync</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Any contact who raises their hand is instantly pulled out of the cold database list and placed into a visual pipeline stage, creating clear tracking for your active sales deals.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Synergies Explanation */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Product Ecosystem</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Unlock Exponential Power <br className="hidden sm:inline" />
                  With Service Synergies
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  A database reactivation campaign is incredibly effective at identifying "hand-raisers"—contacts who want to buy right now. But what happens after they reply?
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed font-semibold text-black">
                  Hands-Free Booking Automation:
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  When you pair Reactivation with our **Smart Booking Calendar** and **AI Chatbot** services, the system doesn't just alert your team. Our intelligent agent automatically handles the conversation in real-time, qualifying the lead, answering initial questions, and booking them directly onto your calendar while you sleep.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  If deployed standalone, the system seamlessly triggers immediate push notifications directly to your sales reps' phones, allowing them to jump in instantly to lock in the deal manually.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Automated SMS Conversational Hand-off</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Reactivated prospects who respond to campaigns are guided through structured, conversational pathways directly leading to call-booking confirmation.
                    </p>
                  </div>
                </div>
              </AnimationWrapper>

              {/* Point 2 */}
              <AnimationWrapper type="slide" delay={200}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Icons.Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Zero-Ad-Spend ROI Accelerator</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Every dollar made from a reactivation campaign goes straight to your bottom line, as you aren't paying expensive Google or Facebook click-fees to generate the conversation.
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Wake Up Your Cold Database?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Stop leaving money on the table. Turn your unconverted inquiries and past customers into scheduled sales appointments today.
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
