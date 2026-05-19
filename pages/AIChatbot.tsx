import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const AIChatbot: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-dot-pattern border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimationWrapper type="fade">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 mb-8 shadow-sm">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2.5 animate-pulse"></span>
                  AI Digital Agent
                </div>
              </AnimationWrapper>

              <AnimationWrapper type="slide" delay={100}>
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                  AI Chatbot <br className="hidden sm:inline" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                    Solutions
                  </span>
                </h1>
              </AnimationWrapper>

              <AnimationWrapper type="slide" delay={200}>
                <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Intelligent conversational AI that answers questions, captures leads, and books appointments 24/7 across your website, SMS, email, and social channels.
                </p>
              </AnimationWrapper>

              <AnimationWrapper type="slide" delay={350}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/get-started"
                    className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                  >
                    Start Automating Conversations
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
            
            {/* Promo Video */}
            <AnimationWrapper type="slide" delay={250} className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
               <video 
                 className="w-full h-auto"
                 autoPlay 
                 loop 
                 muted 
                 playsInline
                 controls
               >
                 <source src="https://assets.cdn.filesafe.space/yOZCxFbRfglrxiIQQquF/media/6a0bfef62e98e28fa1cccafb.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
            </AnimationWrapper>
          </div>
        </div>

        {/* Floating tech background glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Comparison Section: Traditional vs Smart */}
      <section id="details-section" className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">The Evolution of Support</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Traditional Live Chat vs. AI Chatbot</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Stop losing leads to slow response times or clunky static forms. Engaged customers demand immediate answers.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mt-12">
            {/* Traditional Card */}
            <AnimationWrapper type="slide" delay={100} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 text-gray-500">
                    <Icons.PhoneMissed className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Traditional Live Chat / Forms</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Static web forms and human-monitored chat channels that result in high drop-offs, slow responses, and missed off-hour inquiries.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Inquiries left unanswered outside standard business hours',
                      'Requires constant manual monitoring or dedicated human agents',
                      'Average response time is often measured in hours, not seconds',
                      'Tedious forms result in high drop-off rates before submission',
                      'Limited to a single website without cross-channel synchronization',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Leaked pipelines, missed contacts, and high customer support overhead.
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
                    <Icons.Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Chatbot Agent</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A fully-trained, ultra-responsive digital specialist acting as the interactive voice of your business across multiple channels.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Responds instantly, 24/7/365 with zero delays',
                      'Multi-Channel: Web Chat, SMS, Email, Messenger, & Instagram DMs',
                      'Syncs seamlessly with WhatsApp (available for an additional monthly fee)',
                      'Intuitively captures contact info and pre-qualifies incoming leads',
                      'Answers highly detailed questions using your custom files & URLs',
                      'Negotiates schedules and books appointments directly to your calendar',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: 100% instant response, highly qualified leads, and booked calendar slots.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Core Features Integrations */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Seamless Intelligence</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Advanced Capabilities</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our AI Chatbot solutions are tailored directly to your operational workflows, documents, and customer channels.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Multi-Channel Sync */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Channel Sync</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Engage customers wherever they prefer. Our AI handles web chat, SMS text, email, Facebook, and Instagram. We can also integrate **WhatsApp** capabilities (requires an additional monthly fee).
                </p>
              </div>
            </AnimationWrapper>

            {/* Document-Trained Knowledge */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Knowledge Base</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Trained directly on your business documents, PDFs, pricing tables, operational sheets, FAQs, and URLs. It answers complex inquiries accurately and holds intelligent context.
                </p>
              </div>
            </AnimationWrapper>

            {/* Smart Lead Qualification */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Capture & Qualification</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Captures visitor names, email addresses, phone numbers, and answers to key qualifying questions natively in standard conversation without requiring them to fill out long, tedious forms.
                </p>
              </div>
            </AnimationWrapper>

            {/* Direct Calendar Scheduling */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Calendar Booking Integration</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Direct connection with your team's scheduling calendars. The AI naturally checks availability, finds open slots, schedules meetings or services, and synchronizes the details immediately.
                </p>
              </div>
            </AnimationWrapper>

            {/* Automatic CRM Sync */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant CRM Connection</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All conversations, captured prospect details, pre-qualification criteria, and booked appointments are instantaneously synced directly to your CRM to trigger automations and update pipelines.
                </p>
              </div>
            </AnimationWrapper>

            {/* Custom Conversational Flows */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guided Form Behavior</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The bot can ask questions in sequence, vary question phrasing, adjust tone, and expertly refocus off-topic replies to keep customers on track.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimationWrapper type="fade">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Automate Customer Engagement?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Transform your website and messaging platforms into highly-converting 24/7 lead-generation systems today.
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
