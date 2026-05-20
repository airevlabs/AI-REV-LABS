import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const LocalSEO: React.FC = () => {
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
                Dominate Local Search & <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Directory Sync
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Control how you appear across the internet. Push perfectly consistent business data to over 40+ authoritative networks from one centralized dashboard.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Sync Your Business Profile
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  View Sync Networks
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
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Data Chaos vs. Centralized Authority</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Search engines penalize businesses with inconsistent local listings. Stop losing rank to conflicting internet directories.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Fragmented Local Data</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Manually updating profiles across the web leaves room for errors, unauthorized edits, and search engine confusion.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Old phone numbers left active on Yelp or Bing pages',
                      'Holiday hours not updated, frustrating customers who arrive to closed doors',
                      'Competitors or users suggesting unauthorized map edits that go unnoticed',
                      'Duplicate listings created automatically by scraping bots confusing search algorithms',
                      'No clear way to post updates to Google Business Profile consistently',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Lower map pack rankings, lost foot traffic, and diminished trust.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Engine Card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Centralized
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Rev Labs Sync Engine</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A universal dashboard that protects your brand presence and forces 40+ platforms to display your exact data.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Update your address, phone, or hours once, and sync everywhere instantly',
                      'Automatically detect and suppress duplicate or rogue listings',
                      'Lock profiles from unauthorized user edits to protect your reputation',
                      'Post special offers and updates directly to Google Business Profile from the hub',
                      'Optimize directory structuring for Siri, Alexa, and Voice Search',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: Maximum local authority, higher search rankings, and voice-search readiness.
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
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Engineered for Discoverability</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                A robust foundation built for any business, anywhere. Take control of the internet's most critical local search channels.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 40+ Directories */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Syncs to 40+ Directories</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Automatically publish your business details to over 40 major networks including Google Business Profile, Apple Maps, Bing Places, Yelp, Facebook, Yellowpages, and authoritative industry databases.
                </p>
              </div>
            </AnimationWrapper>

            {/* Centralized Updates */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Centralized Data Control</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Change your business hours for an upcoming holiday or update a phone number through our single dashboard. The update propagates across all 40+ connected directories simultaneously.
                </p>
              </div>
            </AnimationWrapper>

            {/* GBP Publishing */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Google Direct Publishing</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Keep your Google profile highly active. Post new updates, special promotional offers, and company announcements directly to Google Business Profile right from your central marketing hub.
                </p>
              </div>
            </AnimationWrapper>

            {/* Voice Search */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Voice Search Ready</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Smart assistants like Siri, Alexa, and Google Assistant pull data directly from these directory aggregators. By locking in correct data, your business becomes the reliable, authoritative answer for voice queries.
                </p>
              </div>
            </AnimationWrapper>

            {/* Duplicate Suppression */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Duplicate Suppression</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Scraping bots routinely create false or duplicate profiles, which dilutes your SEO ranking. Our engine continually scans the web to detect and suppress duplicate profiles so Google only sees your one true listing.
                </p>
              </div>
            </AnimationWrapper>

            {/* Profile Protection */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Listing Profile Lock</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Anyone can suggest an edit to your Google or Maps profile. We lock your directories down so unauthorized edits from competitors or confused users are automatically rejected and corrected.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Trust & Authority Explain */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Search Algorithms Explained</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Universal Trust for <br className="hidden sm:inline" />
                  Every Industry
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Search engines like Google don't just trust what you say on your own website. They verify your existence by crawling the internet to see if other authoritative directories agree with your data.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  If Yelp, Bing, and Facebook all show the exact same name, address, and phone number, Google's algorithm rewards you with high "Trust" metrics, pushing you higher in local map rankings.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed font-semibold text-black">
                  Applicable to Any Business.
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Whether you operate a brick-and-mortar storefront, a multi-location clinic, or a home-service fleet without a physical showroom, our sync engine universally establishes your local footprint to capture active nearby buyers.
                </p>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {/* Highlight 1 */}
              <AnimationWrapper type="slide" delay={100}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Icons.TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">The Google Map Pack Advantage</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Earning a spot in the top 3 Google Map results drastically increases inbound lead volume. Perfect directory consistency is a foundational requirement to achieve and hold those rankings.
                    </p>
                  </div>
                </div>
              </AnimationWrapper>

              {/* Highlight 2 */}
              <AnimationWrapper type="slide" delay={200}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Icons.Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Passive Infrastructure Maintenance</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Set it and forget it. Once the sync is established, the network continuously broadcasts your correct NAP (Name, Address, Phone) data, shielding your business from data decay over time.
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Lock Down Your Local Presence?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Sync your exact business details across 40+ major networks instantly and start capturing more local search volume.
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
