import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const SmartWebsites: React.FC = () => {
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
                Smart Website <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Builds & Funnels
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Custom, conversion-focused websites, landing pages, and marketing funnels engineered to capture leads, qualify prospects, and grow your revenue 24/7.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Start Automating Your Site
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

        {/* Floating tech background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Comparison Section: Traditional vs Smart */}
      <section id="details-section" className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">A Smarter Approach</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Static Card vs. Automated Engine</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Traditional sites sit idle and cost money. AI Rev Labs Smart Websites are active business engines that generate returns.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Traditional Websites</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A digital brochure that acts as a standard placeholder. It looks nice but requires manual work to follow up, schedule, and sync with your internal software.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Passive visitors leave without engaging',
                      'Requires disjointed tools (Calendly, Zapier, separate CRMs)',
                      'Forms only email you, with no automatic text responses',
                      'Slow, clunky hosting with extra maintenance overhead',
                      'Unstructured data invisible to AI Search Engines',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Missing out on hot leads and wasting time.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Engine Card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Active
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Rev Labs Smart Engine</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A conversion machine directly wired into your operations. It handles your schedule, captures and tracks every contact, qualifies visitors, and triggers instant SMS follow-ups.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'CRM integration captures and tracks all contact details',
                      'Multi-use Booking Calendar built directly into pages',
                      'Flexible contact forms, lead intake surveys, & quizzes',
                      'Chat widgets convert web traffic into immediate text chats',
                      'Automated pipelines sync deals and trigger responses',
                      'Tailored for Traditional SEO and AI Search (AISO) engines',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: Captured leads, automated schedules, and scalable growth.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Core Intelligence Integrations */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Seamless Intelligence</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Built-in Smart Integrations</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                No messy plugins or duct-tape connections. We embed native GHL integrations directly into your website's source.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CRM & Contact Capture */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Unified CRM & Contact Capture</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every form submit, calendar booking, and invoice interaction automatically syncs names, emails, phones, and histories into a unified CRM. Track activity timelines and client notes instantly without manual entries.
                </p>
              </div>
            </AnimationWrapper>

            {/* Booking Calendar Engine */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Booking Engine</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A built-in calendar scheduling solution for **one-on-one meetings, online video calls, service appointments, events, and rental bookings**. Includes calendar syncing, round-robin options, booking payments, and automated SMS/email reminders.
                </p>
              </div>
            </AnimationWrapper>

            {/* Web Chat Widget */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Web Chat Capture</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Convert passive site traffic into instant SMS text conversations with a friendly floating chat bubble. When visitors send a message, it immediately routes to your unified inbox as an SMS, keeping leads warm.
                </p>
              </div>
            </AnimationWrapper>

            {/* Forms, Surveys & Quizzes */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Forms, Surveys & Quizzes</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Embed custom contact forms, lead intake surveys, and multi-step qualification quizzes. Set custom conditional logic so that fields react dynamically, enabling you to pre-qualify and filter leads automatically.
                </p>
              </div>
            </AnimationWrapper>

            {/* Workflow Automations */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Workflows & Triggers</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Trigger sequences instantly when actions occur. Auto-send text messages, assign tasks to agents, drop voicemail files, request reviews, and update pipeline statuses behind the scenes, keeping operations moving 24/7.
                </p>
              </div>
            </AnimationWrapper>

            {/* Analytics Dashboards */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">In-Depth Traffic Analytics</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A built-in reporting dashboard tracking visitor traffic, click counts, conversion rates, form submissions, calendar booking ratios, and sales pipeline progress, allowing you to see the exact ROI of your campaigns.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Premium Add-ons Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Premium Enhancements</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Advanced Add-on Capabilities</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Need more firepower? We offer seamless premium extensions to take your smart website build to the next level.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Chatbot Premium Add-on */}
            <AnimationWrapper type="slide" delay={100}>
              <div className="p-8 sm:p-12 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gray-50 text-gray-500 border border-gray-100 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                  Add-on Option
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                    <Icons.Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent AI Chatbot</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Deploy a custom-trained conversational AI assistant. Trained on your documents, FAQs, pricing details, and guidelines, it answers questions, captures contact info, pre-qualifies, and books appointments 24/7.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Trained on your custom business data & documents',
                      'Answers FAQs, handles support, and books calendar dates',
                      'Integrated on Web Chat, SMS, Instagram, & FB Messenger',
                      'Passes qualified leads into your unified CRM automatically',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Available as a Premium Custom Add-on
                </div>
              </div>
            </AnimationWrapper>

            {/* Custom WordPress Cloud Hosting Add-on */}
            <AnimationWrapper type="slide" delay={200}>
              <div className="p-8 sm:p-12 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gray-50 text-gray-500 border border-gray-100 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                  Add-on Option
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                    <Icons.Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">WordPress Cloud Hosting</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Prefer the CMS control and extensive plugin ecosystem of WordPress? We provide lighting-fast, secure cloud hosting for your WordPress site directly on our high-performance agency servers.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'High-performance, secure cloud hosting infrastructure',
                      'Integrated with our custom GHL calendars, forms, & funnels',
                      'Full control over custom WordPress themes and plugins',
                      'Daily automated backups and security updates included',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Available for an additional monthly fee
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* SEO & AISO (Traditional & AI Search Engine Optimizations) */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Search Optimization</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Traditional SEO <br className="hidden sm:inline" />
                  Meets AI Search (AISO)
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  The web search landscape has changed. Customers no longer just search Google; they query AI search assistants like Gemini, ChatGPT, Claude, and Perplexity. 
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We optimize your smart website builds for both worlds. Your site will rank on standard maps and search results, while its backend structure will make it highly readable and recommendable by AI discovery systems.
                </p>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {/* Traditional SEO Block */}
              <AnimationWrapper type="slide" delay={100}>
                <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Icons.Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Traditional SEO Optimization</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Optimized semantic HTML5 coding, clean meta titles, descriptions, keyword placement, XML sitemap generation, structured header tags, and quick-loading optimized imagery to score high on core web vitals.
                    </p>
                  </div>
                </div>
              </AnimationWrapper>

              {/* AI Search Engine Optimization (AISO) */}
              <AnimationWrapper type="slide" delay={200}>
                <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Icons.Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AI Search Optimization (AISO)</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Custom JSON-LD schema entity injection and structured data templates that align with search engine indexing models. We format your service lists, locations, and descriptions so AI engines can easily read, parse, summarize, and recommend your business to users.
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Design vs DIY templates */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Flexibility & Choice</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Custom Built or Build-It-Yourself</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you want an absolute white-glove setup handled by our experts, or the hands-on control to build and launch on your own, we have you covered.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Custom Built */}
            <AnimationWrapper type="slide" delay={100}>
              <div className="p-8 sm:p-12 rounded-3xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Professionally Built by AI REV LABS</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Leave the heavy lifting to the professionals. We will write, design, and wire up your smart websites, conversion funnels, and landing pages from scratch. Fully integrated and optimized to fit your brand.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Custom copywriting written to convert your target audience',
                      'Professional layouts tailored to your exact brand assets',
                      'Full technical setup: calendars, CRM syncs, domain mapping',
                      'Dynamic pipelines and automated workflow setups created for you',
                      'Post-launch visual inspection and core vitals optimization',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100">
                  <Link
                    to="/get-started"
                    className="inline-flex items-center text-sm font-bold text-black hover:underline"
                  >
                    Request a Custom Build <Icons.ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </AnimationWrapper>

            {/* DIY Templates */}
            <AnimationWrapper type="slide" delay={200}>
              <div className="p-8 sm:p-12 rounded-3xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">DIY Builder & Templates</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Access our intuitive drag-and-drop website editor. You have absolute creative control to structure pages, customize elements, and design blocks with zero coding knowledge required.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Intuitive, visual drag-and-drop editor with zero-code needed',
                      'Over **200+ industry-specific, pre-designed templates**',
                      'Pre-built forms, surveys, and calendars ready to paste in',
                      'Easily swap images, edit text layers, and change styles',
                      'Modify designs anytime with instant cloud updates',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100">
                  <Link
                    to="/get-started"
                    className="inline-flex items-center text-sm font-bold text-black hover:underline"
                  >
                    Access DIY Site Builder <Icons.ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities & Tech Specifications */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Core Infrastructure</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Advanced Specifications</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                A secure, highly scalable technological base that gives your brand the speed and security it needs.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blogs */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">CMS Blog Builder</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Add and manage an active company blog. Effortlessly write articles, structure layouts, organize authors, customize URL slugs, configure categories, and automatically generate RSS feeds for content marketing.
              </p>
            </div>

            {/* E-commerce */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Online E-commerce Store</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Seamlessly list digital or physical products, courses, or services. Manage multiple size/color variants, track current inventory status, collect payments via Stripe/PayPal/Square/NMI, and build customized checkout routes.
              </p>
            </div>

            {/* Hosting SSL */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Secure Cloud Hosting & SSL</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                High-performance website hosting with built-in speed caching. We provision and renew free SSL certificates automatically so that all traffic on your custom domain is encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimationWrapper type="fade">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Build Your Smart Website Engine?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Stop settling for passive sites. Let's build a conversion engine that captures contacts, manages bookings, and automates your business growth 24/7.
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

        {/* Small subtle grid element */}
        <div className="absolute inset-0 opacity-10 bg-dot-pattern mix-blend-overlay"></div>
      </section>
    </div>
  );
};
