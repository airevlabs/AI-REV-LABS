import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const EmailSMS: React.FC = () => {
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
                Scalable Outreach
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Connect and Convert with <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Email & SMS Campaigns
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Construct, schedule, and automate gorgeous marketing broadcasts. Reach thousands of warm leads instantly on the channels they check most—with proven layouts and 100+ plug-and-play templates.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Launch Your First Campaign
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('template-library')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  View Templates Library
                </button>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Legacy vs Smart Comparison Section */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Smarter Campaigns</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Standard Bulk Blasts vs. Targeted Customer Flows</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Bulk message blasts that ignore user behavior lead directly to spam folders and unsubscribes. Build high-delivery, high-engagement systems.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Legacy Outreach Methods</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Using disconnected tools, boring text-only designs, and sending generic messages to everyone at once without segmenting.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Generic newsletters sent to different customer groups without dynamic filters',
                      'No text message capability, forcing you to rely solely on crowded email boxes',
                      'Boring plain-text or ugly HTML emails that do not reflect your brand quality',
                      'No tracking or triggers to see which contacts clicked links or opened offers',
                      'Zero automation to follow up dynamically based on subscriber interest',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Low open rates, higher bounce rates, and valuable revenue leaking out.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Engine Card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  High Delivery
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Rev Labs Smart Campaign Engine</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    An optimized, multi-channel platform to design beautiful, personalized experiences that deliver straight to primary inboxes.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Send beautiful emails utilizing 100+ ready-made, high-converting templates',
                      'Broadcast high-open-rate SMS blasts alongside traditional email newsletter lists',
                      'Dynamic contact customization (merge fields, custom links, localized times)',
                      'A/B test subject lines, layouts, and send times automatically for peak ROI',
                      'Seamless triggers (e.g. auto-text a discount code when someone submits a website form)',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: Unbeatable click rates, optimized delivery scores, and instant buyer action.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Featured Templates Showcase */}
      <section id="template-library" className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Library Assets</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  100+ Plug-and-Play <br />
                  Designer Email Templates
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Never stare at a blank screen again. Gain instant access to a growing repository of **100+ professionally designed, conversion-focused templates**. 
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed font-semibold text-black">
                  Optimized for Every Campaign Category:
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Whether you are launching a monthly educational newsletter, broadcasting a seasonal holiday promotion, asking for customer reviews, or sending product updates, our library has you covered. Simply drop in your logo, tweak the text, and broadcast.
                </p>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="px-4 py-2 bg-black/5 border border-gray-100 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-800">
                    Drag-and-Drop Builder
                  </div>
                  <div className="px-4 py-2 bg-black/5 border border-gray-100 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-800">
                    Mobile Responsive
                  </div>
                </div>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Template Card 1 */}
              <AnimationWrapper type="scale" delay={100}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 transform rotate-1 hover:rotate-0 transition-all duration-300">
                  <div className="h-40 bg-gray-900/5 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                    <Icons.Mail className="w-12 h-12 text-gray-400 animate-pulse" />
                    <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                      Promotion
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Seasonal Sale Promo</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">High-converting layout with bold product grids and integrated discount checkout CTAs.</p>
                </div>
              </AnimationWrapper>

              {/* Template Card 2 */}
              <AnimationWrapper type="scale" delay={200}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 transform -rotate-1 hover:rotate-0 transition-all duration-300">
                  <div className="h-40 bg-gray-900/5 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                    <Icons.FileText className="w-12 h-12 text-gray-400 animate-pulse" />
                    <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                      Newsletter
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Monthly Brand Digest</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Beautifully structured multiple columns designed to share company news and articles cleanly.</p>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Platform Features</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Reach the Right People</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our campaigns deliver powerful micro-personalization and deep analytics tools to optimize every message you send.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Multi-Channel Outreach */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Omnichannel Broadcasts</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Deliver gorgeous, responsive email newsletters alongside punchy, highly-responsive text message campaigns. Coordinate both channels under a single client dashboard.
                </p>
              </div>
            </AnimationWrapper>

            {/* Smart Segmentation */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Lists Segmenting</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Group contacts automatically based on custom fields, pipeline stage, geographic location, or interaction behavior to send hyper-targeted, relevant messages.
                </p>
              </div>
            </AnimationWrapper>

            {/* Micro Personalization */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dynamic Merge Personalization</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Embed client names, past purchase details, custom calendar links, and personalized values to increase conversions and make massive lists feel like intimate one-on-one reach outs.
                </p>
              </div>
            </AnimationWrapper>

            {/* Real-time Analytics */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Granular Delivery Metrics</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Audit delivery logs instantly. Track exactly who opened your emails, who clicked specific links, who unsubscribed, and which elements drove the highest conversions.
                </p>
              </div>
            </AnimationWrapper>

            {/* Dynamic Triggers */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Workflow Automation Triggers</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Trigger automated messages the instant a user submits a form, schedules an appointment, leaves a negative review, pays an invoice, or changes stages in your sales pipeline.
                </p>
              </div>
            </AnimationWrapper>

            {/* A/B Optimization */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">A/B Testing Controls</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Test subject headings, message body lengths, calls-to-action, or rich graphics. The platform dynamically measures open and click rates and automatically rolls out the winning version.
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Start Broadcasting Like a Pro</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Get immediate access to our 100+ email templates and launch automated Email & SMS campaigns that build massive retention.
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
