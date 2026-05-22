import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const SocialMedia: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simple active tab state for templates showcase simulation
  const [activeTemplateCategory, setActiveTemplateCategory] = useState<'promo' | 'educational' | 'testimonial'>('promo');

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-dot-pattern border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimationWrapper type="fade">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 bg-black rounded-full mr-2.5 animate-pulse"></span>
                Omnichannel Presence
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Publish Everywhere. <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Social Media Planner
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Connect your brand directly to the digital feeds of active buyers. Draft, approve, and schedule high-impact posts to <strong>Facebook, Instagram, LinkedIn, X (Twitter), TikTok, and Google Business Profile</strong>—all from one single premium calendar dashboard.
              </p>
            </AnimationWrapper>

            {/* Social Platform Icons List */}
            <AnimationWrapper type="scale" delay={300}>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm hover:scale-105 transition-all">
                  <Icons.Facebook className="w-5 h-5 text-blue-600 mr-2" /> Facebook
                </div>
                <div className="flex items-center px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm hover:scale-105 transition-all">
                  <Icons.Instagram className="w-5 h-5 text-pink-600 mr-2" /> Instagram
                </div>
                <div className="flex items-center px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm hover:scale-105 transition-all">
                  <Icons.Linkedin className="w-5 h-5 text-blue-800 mr-2" /> LinkedIn
                </div>
                <div className="flex items-center px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm hover:scale-105 transition-all">
                  <svg className="w-5 h-5 text-black mr-2 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X / Twitter
                </div>
                <div className="flex items-center px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm hover:scale-105 transition-all">
                  <svg className="w-5 h-5 text-black mr-2 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.78-.22-.22-.41-.47-.59-.73v7.02c0 3.82-2.58 7.33-6.31 8.16-3.73.83-7.79-1.07-9.35-4.63-1.57-3.57-.27-8.08 3.04-10.02.66-.39 1.39-.68 2.14-.85v4.06c-1.39.43-2.44 1.74-2.41 3.21.03 1.83 1.77 3.27 3.57 2.92 1.34-.26 2.24-1.44 2.24-2.8V.02z"/>
                  </svg>
                  TikTok
                </div>
                <div className="flex items-center px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm hover:scale-105 transition-all">
                  <Icons.MapPin className="w-5 h-5 text-red-500 mr-2" /> Google Business
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Start Planning Free
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('templates-library')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  Explore 200+ Templates
                </button>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Legacy vs Smart Social Comparison Section */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Streamlined Workflows</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Scattered Posting vs. Unified Content Engines</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Stop logging in and out of a dozen social profiles just to post a single announcement. Own your voice cleanly and consistently.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Manual Scattered Posting</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Staring at blank compose windows while writing captions, guessing tags, and formatting custom sizes for six different applications.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Logging into separate tools (Meta, X, LinkedIn, TikTok) wasting hours every week',
                      'No template library, leaving your marketing team staring at empty screens for content hooks',
                      'Posting blind without tracking viral industry trends, leading to poor post reach',
                      'Manual resizing of vertical Reels, horizontal YouTube thumbnails, and LinkedIn banners',
                      'Messy tracking with zero central calendar review before campaigns go live',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Inconsistent profiles, forgotten feeds, and zero organic business growth.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Engine Card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Unified Planner
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Rev Labs Social Planner</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A beautiful, unified publisher built directly into your CRM. Create once, review inside a central drag-and-drop calendar, and schedule forever.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Publish to Facebook, Instagram, LinkedIn, X, TikTok, and GBP instantly',
                      'Access 200+ ready-to-use premium social templates and seasonal presets',
                      'Integrated real-time trend dashboard for trending hashtags & topics',
                      'Interactive calendar visualizer with simple drag-and-drop rescheduling',
                      'Option to unlock the Premium AI Social Copilot for captions, images, and single-click network variations',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: 10x faster scheduling, stunning visual presence, and continuous traffic.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Real-time Social Trends Section */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Trend Intelligence</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Capitalize on Real-Time <br />
                  Social Industry Trends
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Algorithms prioritize what is popular right now. Our integrated **Social Trends Discovery Engine** keeps you ahead of the curve by identifying what your audience is actively search-querying and engaging with.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed font-semibold text-black">
                  Ride the Viral Wave:
                </p>
                <div className="space-y-4 mt-3">
                  <div className="flex items-start">
                    <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-600"><strong>Viral Hook Analytics:</strong> Track high-performing intro lines that maximize view retention in short-form video.</p>
                  </div>
                  <div className="flex items-start">
                    <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-600"><strong>Dynamic Hashtag Discovery:</strong> Auto-pull industry tags that are gaining traction in your local radius.</p>
                  </div>
                </div>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7">
              <AnimationWrapper type="scale" delay={150}>
                {/* Visual Trend Discovery Dashboard Simulator */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-8 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Live Trend Discovery Feed</span>
                    </div>
                    <span className="text-xs font-bold text-black bg-black/5 px-2.5 py-1 rounded-full">Updated 2m ago</span>
                  </div>

                  <div className="space-y-4">
                    {/* Trend Row 1 */}
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-black transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">#1 Trending in Your Sector</span>
                        <span className="text-xs text-gray-400 font-medium">85k engagements today</span>
                      </div>
                      <h4 className="font-bold text-gray-800 text-base mt-2">"Small Business AI Operations Integration"</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">High demand for explanation videos outlining how AI calendars hook into core databases.</p>
                      <div className="mt-3 flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-gray-600 bg-gray-200/50 px-2 py-0.5 rounded">#AIOps</span>
                        <span className="text-[10px] font-bold text-gray-600 bg-gray-200/50 px-2 py-0.5 rounded">#RevOps</span>
                        <span className="text-[10px] font-bold text-gray-600 bg-gray-200/50 px-2 py-0.5 rounded">#SME</span>
                      </div>
                    </div>

                    {/* Trend Row 2 */}
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-black transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">High Growth Trend</span>
                        <span className="text-xs text-gray-400 font-medium">+142% volume growth</span>
                      </div>
                      <h4 className="font-bold text-gray-800 text-base mt-2">"Behind-The-Scenes Automated Workflows"</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">Audiences are engaging heavily with video clips showing screen-recordings of workflow triggers.</p>
                      <div className="mt-3 flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-gray-600 bg-gray-200/50 px-2 py-0.5 rounded">#AutomationTips</span>
                        <span className="text-[10px] font-bold text-gray-600 bg-gray-200/50 px-2 py-0.5 rounded">#TechStack</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates Showcase */}
      <section id="templates-library" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Eliminate Writer's Block</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                200+ Ready-To-Use Premium Social Templates
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Draft beautiful content in seconds. Simply select a pre-made template category tailored to your industry, drop in your logo, refine, and schedule.
              </p>

              {/* Selector Tabs */}
              <div className="mt-8 flex justify-center space-x-2 p-1 bg-gray-50 rounded-full border border-gray-100 max-w-md mx-auto relative z-20">
                <button
                  onClick={() => setActiveTemplateCategory('promo')}
                  className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${
                    activeTemplateCategory === 'promo' ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Promotional
                </button>
                <button
                  onClick={() => setActiveTemplateCategory('educational')}
                  className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${
                    activeTemplateCategory === 'educational' ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Educational
                </button>
                <button
                  onClick={() => setActiveTemplateCategory('testimonial')}
                  className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${
                    activeTemplateCategory === 'testimonial' ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Testimonials
                </button>
              </div>
            </div>
          </AnimationWrapper>

          {/* Templates Grid Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {activeTemplateCategory === 'promo' && (
              <>
                <AnimationWrapper type="scale" delay={50}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Facebook className="absolute top-3 right-3 text-blue-600 w-5 h-5" />
                      <div className="text-center p-4">
                        <span className="text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded uppercase">Facebook Promo Preset</span>
                        <p className="text-xs text-gray-500 font-bold mt-2">"Attention [Local City] Homeowners..."</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Local Offer Campaign</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Built-in lead capture form trigger. Optimized to attract nearby prospects with localized pricing maps.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={150}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Instagram className="absolute top-3 right-3 text-pink-600 w-5 h-5" />
                      <div className="text-center p-4">
                        <span className="text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded uppercase">Instagram Grid Preset</span>
                        <p className="text-xs text-gray-500 font-bold mt-2">"Swipe to unlock 20% off our best-selling..."</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Seasonal Discount Carousel</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">High-contrast bold headers to drive maximum swipe-through retention and bio-link clicks.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={250}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.MapPin className="absolute top-3 right-3 text-red-500 w-5 h-5" />
                      <div className="text-center p-4">
                        <span className="text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded uppercase">GBP Offer Preset</span>
                        <p className="text-xs text-gray-500 font-bold mt-2">"Claim our limited seasonal promo slots..."</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Google Business Search Booster</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Syncs directly onto your Google Business profile search panels to catch prospects looking for your services.</p>
                  </div>
                </AnimationWrapper>
              </>
            )}

            {activeTemplateCategory === 'educational' && (
              <>
                <AnimationWrapper type="scale" delay={50}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Linkedin className="absolute top-3 right-3 text-blue-800 w-5 h-5" />
                      <div className="text-center p-4">
                        <span className="text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded uppercase">LinkedIn PDF Preset</span>
                        <p className="text-xs text-gray-500 font-bold mt-2">"3 Crucial Pillars of Scaling Your Operations..."</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Industry Whitepaper Post</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Designed as a high-authority professional document hook to drive comments and network requests.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={150}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <svg className="absolute top-3 right-3 text-black w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.78-.22-.22-.41-.47-.59-.73v7.02c0 3.82-2.58 7.33-6.31 8.16-3.73.83-7.79-1.07-9.35-4.63-1.57-3.57-.27-8.08 3.04-10.02.66-.39 1.39-.68 2.14-.85v4.06c-1.39.43-2.44 1.74-2.41 3.21.03 1.83 1.77 3.27 3.57 2.92 1.34-.26 2.24-1.44 2.24-2.8V.02z"/>
                      </svg>
                      <div className="text-center p-4">
                        <span className="text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded uppercase">TikTok Reel Preset</span>
                        <p className="text-xs text-gray-500 font-bold mt-2">"The 3 biggest mistakes small companies make..."</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Viral Hook Short-Form Video</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Video layout structure matching current high-retention trends on Reels, Shorts, and TikTok.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={250}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <svg className="absolute top-3 right-3 text-black w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      <div className="text-center p-4">
                        <span className="text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded uppercase">X Thread Preset</span>
                        <p className="text-xs text-gray-500 font-bold mt-2">"1/ 95% of businesses build booking setups wrong..."</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">X Educational Thread</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Optimized to drive impressions and bookmarks through structured educational value blocks.</p>
                  </div>
                </AnimationWrapper>
              </>
            )}

            {activeTemplateCategory === 'testimonial' && (
              <>
                <AnimationWrapper type="scale" delay={50}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Instagram className="absolute top-3 right-3 text-pink-600 w-5 h-5" />
                      <div className="text-center p-4">
                        <span className="text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded uppercase">Insta Story Preset</span>
                        <p className="text-xs text-gray-500 font-bold mt-2">"Another day, another booked client..."</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Client Win Story</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Sleek quote structures designed to showcase client transformation slides beautifully.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={150}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Linkedin className="absolute top-3 right-3 text-blue-800 w-5 h-5" />
                      <div className="text-center p-4">
                        <span className="text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded uppercase">LinkedIn Story Preset</span>
                        <p className="text-xs text-gray-500 font-bold mt-2">"How we helped [Company Name] reactivation..."</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Case Study Breakdown</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Detailed visual metrics and ROI tables formatted for high-retention corporate posts.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={250}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Facebook className="absolute top-3 right-3 text-blue-600 w-5 h-5" />
                      <div className="text-center p-4">
                        <span className="text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded uppercase">Facebook Video Preset</span>
                        <p className="text-xs text-gray-500 font-bold mt-2">"Hear directly from [Customer Name]..."</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Customer Video Interview</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Video testimonial framework optimized with eye-catching caption placement.</p>
                  </div>
                </AnimationWrapper>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Premium AI Social Copilot - Monthly Subscription Add-on Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gray-800 rounded-full blur-3xl opacity-30 pointer-events-none -z-10 animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <AnimationWrapper type="fade">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-200 mb-6 shadow-2xl">
                <Icons.Cpu className="w-4 h-4 text-white mr-2.5 animate-pulse" />
                Premium Optional Module
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Supercharge With The <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 pb-2">
                  AI Social Copilot Add-On
                </span>
              </h2>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
                Take your social scheduling to the absolute next level. Activate our premium AI Social Copilot module as an **additional monthly subscription** to unlock advanced design, variation, and copywriting intelligence.
              </p>
            </AnimationWrapper>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* AI Caption Writer */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white">
                    <Icons.FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">AI Caption Copilot</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Write high-converting, copywriter-level social post captions in any brand voice instantly. Adjust length, emojis, and call-to-action hooks with a click.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                  Premium Add-On Feature
                </div>
              </div>
            </AnimationWrapper>

            {/* AI Image Generation */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white">
                    <Icons.Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">AI Image Generator</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Generate gorgeous, custom images, brand illustrations, or background graphics in seconds without expensive royalty stock sites or complex design tools.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                  Premium Add-On Feature
                </div>
              </div>
            </AnimationWrapper>

            {/* Multi-Network Variations */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white">
                    <Icons.Workflow className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Platform Variations</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Enter one concept and let the AI instantly convert it into custom posts optimized for each channel (e.g., an X thread, an Instagram visual caption, and a professional LinkedIn summary).
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                  Premium Add-On Feature
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Hashtags */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white">
                    <Icons.TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Smart Hashtags</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Automated copy analysis suggests the highest-performing, context-relevant hashtags to maximize search indexing and viral organic reach.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                  Premium Add-On Feature
                </div>
              </div>
            </AnimationWrapper>
          </div>

          {/* Pricing Add-on Highlights */}
          <AnimationWrapper type="scale" delay={450}>
            <div className="mt-16 bg-white/5 border border-white/10 p-8 rounded-3xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white/10 text-white px-4 py-1 rounded-bl-xl font-bold text-[10px] uppercase tracking-wider">
                Subscription Guide
              </div>
              <div className="mb-6 md:mb-0 text-left">
                <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">How Packaging Works</span>
                <h4 className="text-2xl font-bold text-white mt-1">AI Social Copilot Pricing</h4>
                <p className="text-sm text-gray-400 mt-2 max-w-xl">
                  While multi-network calendar scheduling, the 200+ templates library, and real-time trend discovery are fully included in your base AI Rev Labs package, the advanced AI Copilot features (captions, images, post variations) are activated as an **additional monthly subscription**.
                </p>
              </div>
              <div className="px-6 py-4 bg-white text-black rounded-2xl text-center flex-shrink-0 shadow-lg border border-white">
                <span className="text-xs font-bold text-gray-500 block uppercase">Monthly AI Module</span>
                <span className="text-2xl font-black mt-1 block">Premium Add-on</span>
                <span className="text-[10px] font-medium text-gray-500 block mt-1">Requires active base planner</span>
              </div>
            </div>
          </AnimationWrapper>
        </div>

        <div className="absolute inset-0 opacity-10 bg-dot-pattern mix-blend-overlay"></div>
      </section>

      {/* Core Platform Capabilities Grid */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Interactive Elements</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Designed for Seamless Growth</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the fully loaded platform features built directly into your centralized marketing engine.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Direct CRM Integration */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Unified CRM Connection</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Automatically sync leads captured from social media posts and direct-message interactions right into your sales pipeline databases for easy follow-ups.
                </p>
              </div>
            </AnimationWrapper>

            {/* Smart Calendar Preview */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Drag-and-Drop Planner</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  View and manage all social drafts and schedules on a visual interactive calendar grid. Simply drag posts to reschedule them to different days or hours.
                </p>
              </div>
            </AnimationWrapper>

            {/* Rich Media Vault */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated Asset Storage</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Store high-resolution brand logos, custom photos, Reels, and short TikTok video clips inside a secure central database. Access media instantly from the post creator.
                </p>
              </div>
            </AnimationWrapper>

            {/* Team Collaboration */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Approvals & Permissions</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Set custom team roles. Let content drafts be created by assistants or freelancers, requiring admin review and approval before scheduling live.
                </p>
              </div>
            </AnimationWrapper>

            {/* Multi-Account Support */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Profiles Connect</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Manage multiple pages per network. Easily link separate Facebook business profiles, multiple Instagram feeds, and distinct branch locations under one account.
                </p>
              </div>
            </AnimationWrapper>

            {/* Advanced Analytics */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Granular Engagement Audits</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Analyze post impressions, clicks, shares, comments, and profile growth directly. Pinpoint which platform drives the peak level of new active leads.
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Dominate the Social Feed?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Unlock our unified social media calendar, 200+ content templates, and trend tracking dashboard. Connect your brand to active buyers today.
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Get Started Free
              <Icons.ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimationWrapper>
        </div>

        <div className="absolute inset-0 opacity-10 bg-dot-pattern mix-blend-overlay"></div>
      </section>
    </div>
  );
};
