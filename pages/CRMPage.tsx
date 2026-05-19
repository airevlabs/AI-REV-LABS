import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const CRMPage: React.FC = () => {
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
                Unified CRM & Lead <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Management Engine
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                The central nervous system for your customer data. Keep every contact, conversation, deal, and follow-up organized in one single workspace.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Unify Your Sales Data
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  Explore Capabilities
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
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Data Chaos vs. Unified Control</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Stop losing deals to scattered spreadsheets, forgotten emails, and disjointed software. Unify your pipeline.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Fragmented Customer Data</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Juggling different apps to track messages, check booking statuses, and manage contact info leads to lost revenue.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Customer details scattered across notes, spreadsheets, and emails',
                      'No record of past conversations when a customer calls back',
                      'Forgetting to follow up with hot prospects because of zero reminders',
                      'Unable to easily see which marketing channel drove the sales conversion',
                      'Manual, tedious tasks required to keep team databases updated',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Slower response times, dropped leads, and invisible pipeline value.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Engine Card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Unified
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Unified AI Rev Labs CRM</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A centralized operations dashboard that structures every point of contact and interaction history automatically.
                  </p>
                  <ul className="space-y-4">
                    {[
                      '360-degree timeline containing calls, texts, DMs, and emails',
                      'Dynamic pipeline opportunity boards with drag-and-drop value tracking',
                      'Dynamic Smart Lists that auto-segment contacts in real-time',
                      'Integrated task assignments and internal notification workflows',
                      'One centralized omni-channel conversation dashboard',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: Instant prospect histories, organized team tasks, and scalable growth.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Core CRM Features Grid */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Platform Features</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Engineered for Operational Excellence</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to capture, nurture, track, and close relationships is built natively into our central system.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 360 Profiles */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">360° Contact Profiles</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Access absolute visibility for every client. The unified contact view stores names, phones, email paths, specific tagging, custom form data, tasks, notes, and a chronological history of every interaction.
                </p>
              </div>
            </AnimationWrapper>

            {/* Omni-Channel Inbox */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Omni-Channel Inbox</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Manage all client communication in one place. Send and receive SMS text messages, emails, Facebook Messenger threads, Instagram DMs, and Web Chat widgets from a single consolidated feed.
                </p>
              </div>
            </AnimationWrapper>

            {/* Visual Pipelines */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Sales Pipelines</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Map out your exact sales stages and track opportunities with intuitive drag-and-drop boards. View overall pipeline values, conversion percentages, and close ratios in real-time to focus on what drives revenue.
                </p>
              </div>
            </AnimationWrapper>

            {/* Smart Lists */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dynamic Smart Lists</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Filter your database dynamically. Create saved filters based on lead sources, specific tags, geographic cities, or opportunity stages. Contacts auto-populate or exit these lists in real-time as they match criteria.
                </p>
              </div>
            </AnimationWrapper>

            {/* Custom Fields */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Fields & Tags</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Structure your data to match your business. Create custom input fields for forms, surveys, or contact cards. Inject custom operational tags to easily organize, search, and target specific contact sub-segments.
                </p>
              </div>
            </AnimationWrapper>

            {/* Analytics */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reporting & Dashboards</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Make decisions backed by real data. Monitor total closed value, average sales cycles, specific agent performance charts, and booking ratios, allowing you to optimize operational efficiency.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Integration Versatility (Native + External Sites) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Seamless Connections</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Natively Connected, <br className="hidden sm:inline" />
                  Externally Compatible
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Our CRM operates as the core hub for the entire AI Rev Labs ecosystem. It is wired natively into our **Smart Website Builds** and **Booking Calendars** to capture and update contact info instantly.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed font-semibold">
                  Already have an existing website?
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  No problem! You don't have to rebuild. We can easily connect our CRM engine to your current site (WordPress, Shopify, Webflow, Squarespace, or custom builds) via secure forms, custom widgets, and floatable web chat widgets.
                </p>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {/* Native Integration */}
              <AnimationWrapper type="slide" delay={100}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Icons.Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Native Ecosystem Sync</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Every form submission, lead qualifier quiz, or booking event on your AI Rev Labs website maps directly to contact fields in your CRM instantly—no Zapier middleware required.
                    </p>
                  </div>
                </div>
              </AnimationWrapper>

              {/* External Site Compatibility */}
              <AnimationWrapper type="slide" delay={200}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Icons.Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Existing Website Integration</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Easily embed customizable lead capture forms, questionnaires, scheduling calendars, or floating chat bubbles into your existing platform. Keep your current design while supercharging your backend operations.
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Automations & Targeted Email/SMS Broadcast Campaigns */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Nurture & Re-engage</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Automated Messaging & Campaign Broadcasts</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                A CRM shouldn't just store contacts; it should actively converse with them to create opportunities.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Targeted Bulk Actions */}
            <AnimationWrapper type="slide" delay={100} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                    <Icons.Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Email & SMS Campaign Broadcasts</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Send high-impact promotional offers, company newsletters, or critical updates in just a few clicks. Target dynamic list filters to communicate directly with highly specific groups.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Broadcast SMS/Email updates directly to customized Smart Lists',
                      'Perfect for monthly newsletters, flash sales, or review requests',
                      'Track delivery rates, email opens, and link click percentages',
                      'Fully personalized tags (e.g. first name, company name) inject automatically',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Targeted Database Communication
                </div>
              </div>
            </AnimationWrapper>

            {/* Workflow Automations */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                    <Icons.Workflow className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Nurture Workflows</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Wire up automated sequences triggered by contact actions. Let the system follow up, qualify leads, and update internal statuses behind the scenes while you sleep.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Trigger instant SMS replies the second a lead fills out a web form',
                      'Move opportunities down the sales pipeline automatically based on action triggers',
                      'Set internal notifications and task assignments for your team',
                      'Create multi-step, logic-based email and text drip sequences',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  24/7 Operations Automation
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Centralize Your Operations?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Connect your customer data, sales pipelines, and conversations into a single, high-performance engine.
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
