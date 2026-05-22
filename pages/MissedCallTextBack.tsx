import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const MissedCallTextBack: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tabs for SMS Schedule Selector (Business Hours vs After Hours)
  const [activeScheduleTab, setActiveScheduleTab] = useState<'business' | 'after'>('business');

  // ROI Calculator states
  const [missedCalls, setMissedCalls] = useState<number>(20);
  const [avgValue, setAvgValue] = useState<number>(350);
  const [closeRate, setCloseRate] = useState<number>(25);

  const calculateLostRevenue = () => {
    // According to industry stats, ~62% of calls go unanswered. 
    // Auto text-back recovers roughly 80% of those leads.
    // Close rate determines final conversion.
    const calculatedRevenue = missedCalls * avgValue * (closeRate / 100);
    const recoveredRevenue = calculatedRevenue * 0.8;
    return {
      lost: Math.round(calculatedRevenue),
      recovered: Math.round(recoveredRevenue)
    };
  };

  const { lost, recovered } = calculateLostRevenue();

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-dot-pattern border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimationWrapper type="fade">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 bg-black rounded-full mr-2.5 animate-pulse"></span>
                Lead Capture Engine
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Turn Every Missed Call into a <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Booked Customer.
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                62% of calls to small businesses go unanswered. Don't let your next lead call a competitor. Our automated Missed Call Text Back engine replies within 30 seconds to capture intent, continue conversations, and book appointments instantly.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Activate Missed Call Auto-Text
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('sms-simulator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  See How It Works
                </button>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Comparison Section ( Voicemail vs. Smart Auto-Text ) */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Speed to Lead</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Unanswered Voicemails vs. Intelligent Text-Back</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Voicemails are where potential deals go to die. Capturing leads within the first minute increases conversion rates by up to 391%.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mt-12">
            {/* Voicemail Card */}
            <AnimationWrapper type="slide" delay={100} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 text-gray-500">
                    <Icons.X className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">The Cost of Silence</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Leaving a missed caller with nothing but a voicemail box forces them to dial your closest competitor immediately to get a human response.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Over 80% of callers hang up without leaving a voicemail message',
                      'No instant interaction, leaving buyers to continue searching Google for other agencies',
                      'Requires you to manually listen to static audio and write down caller info later',
                      'No lead capture created in your CRM, resulting in missing contact entries',
                      'Long response delays of hours or days, completely cooling down buying intent',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Lost opportunities, wasted ad spend, and lower buyer trust.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Text card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Instant Response
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Missed Call Engine</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Secure an instant, automated text handshake the millisecond a call goes unanswered, shifting prospects directly into interactive text messaging.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Triggers a friendly, customized text back within 30 seconds of a missed call',
                      'Initiates a 2-way conversation to identify client needs while their intent is peak',
                      'Natively populates the CRM database, flagging the contact as a Missed Call Lead',
                      'Automatically drops calendar booking links, enabling self-directed schedules',
                      'Dramatically improves local SEO signals by maintaining reliable responsiveness metrics',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: Captured interest, automatic appointment bookings, and recovered pipeline.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Interactive SMS Simulator Section */}
      <section id="sms-simulator" className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Automation in Action</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Instant, Dynamic Engagement Schedules
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Tailor your automated responses based on operational status. Toggle between business hours and after-hours schedules to see how your auto-text captures incoming demand around the clock.
                </p>

                {/* Simulator schedule tabs */}
                <div className="mt-8 flex space-x-2 p-1 bg-white rounded-full border border-gray-200 max-w-xs relative z-20">
                  <button
                    onClick={() => setActiveScheduleTab('business')}
                    className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
                      activeScheduleTab === 'business' ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Business Hours
                  </button>
                  <button
                    onClick={() => setActiveScheduleTab('after')}
                    className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
                      activeScheduleTab === 'after' ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    After Hours
                  </button>
                </div>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7">
              <AnimationWrapper type="scale" delay={150}>
                {/* Mobile SMS Simulator Card */}
                <div className="max-w-md mx-auto bg-gray-950 text-white rounded-[40px] border-[8px] border-gray-800 shadow-2xl p-6 relative overflow-hidden aspect-[9/16] flex flex-col justify-between">
                  {/* Phone Header Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-gray-800 h-4 w-28 rounded-full z-20"></div>
                  
                  {/* Internal Screen Content */}
                  <div className="flex-1 flex flex-col justify-between pt-4">
                    {/* Call History Header */}
                    <div className="text-center border-b border-white/10 pb-3 mb-4">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Incoming Call</p>
                      <p className="text-sm font-bold text-red-500 flex items-center justify-center mt-1">
                        <Icons.PhoneMissed className="w-4 h-4 mr-1.5" /> Missed Call (04:12 PM)
                      </p>
                    </div>

                    {/* Messages Stack */}
                    <div className="space-y-4 flex-1 overflow-y-auto px-1 flex flex-col justify-end pb-4">
                      {/* Auto response text out */}
                      <div className="self-start max-w-[85%] bg-white/10 border border-white/5 p-3 rounded-2xl rounded-tl-sm text-xs leading-relaxed">
                        <p className="font-semibold text-gray-300 text-[10px] mb-1">AI REV LABS AUTO-REPLY</p>
                        {activeScheduleTab === 'business' ? (
                          "Hi there! 📱 We just saw we missed your call. We're currently helping another client, but we want to make sure you're looked after. How can we help you today?"
                        ) : (
                          "Hi! 🌙 We saw we just missed your call. Our offices are currently closed, but we've logged your number. Text us your inquiry here, and our team will get back to you first thing tomorrow!"
                        )}
                      </div>

                      {/* Lead replies */}
                      <div className="self-end max-w-[85%] bg-blue-600 p-3 rounded-2xl rounded-tr-sm text-xs leading-relaxed text-white">
                        <p className="font-semibold text-blue-200 text-[10px] mb-1">PROSPECT</p>
                        "Hey! I wanted to book a consultation for next Tuesday if possible. Do you have openings?"
                      </div>

                      {/* Outbound schedule link */}
                      <div className="self-start max-w-[85%] bg-white/10 border border-white/5 p-3 rounded-2xl rounded-tl-sm text-xs leading-relaxed">
                        <p className="font-semibold text-gray-300 text-[10px] mb-1">AI REV LABS AUTO-REPLY</p>
                        "Awesome! You can view all our Tuesday availability and secure a slot instantly here: 📅 airevlabs.com/book"
                      </div>
                    </div>

                    {/* Chat Input simulator */}
                    <div className="border-t border-white/10 pt-3 flex items-center space-x-2">
                      <div className="flex-1 bg-white/5 border border-white/10 rounded-full py-2 px-4 text-[10px] text-gray-400">
                        Type a message...
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                        <Icons.ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Lost Revenue Calculator */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Calculations displays */}
            <div className="lg:col-span-6 lg:order-2">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Interactive Calculator</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Stop Bleeding Leaked Pipeline Value
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Every unanswered call is a potential deal given directly to your competitors. Slide the values below to evaluate your current revenue leakage and see how much pipeline you can capture instantly.
                </p>

                {/* Controls */}
                <div className="space-y-6 mt-8">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                      <span>Missed Calls Per Month:</span>
                      <span className="text-black font-bold">{missedCalls}</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={missedCalls}
                      onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                      className="w-full accent-black cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                      <span>Average Value Per Customer ($):</span>
                      <span className="text-black font-bold">${avgValue}</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="50"
                      value={avgValue}
                      onChange={(e) => setAvgValue(parseInt(e.target.value))}
                      className="w-full accent-black cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                      <span>Average Lead Close Rate (%):</span>
                      <span className="text-black font-bold">{closeRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="80"
                      step="5"
                      value={closeRate}
                      onChange={(e) => setCloseRate(parseInt(e.target.value))}
                      className="w-full accent-black cursor-pointer"
                    />
                  </div>
                </div>
              </AnimationWrapper>
            </div>

            {/* Visual breakdown board */}
            <div className="lg:col-span-6 lg:order-1">
              <AnimationWrapper type="scale" delay={150}>
                <div className="bg-gray-900 text-white rounded-3xl border border-gray-800 shadow-2xl p-8 sm:p-12 text-center relative overflow-hidden">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 uppercase tracking-wider mb-6 inline-block">
                    Current Leaked Revenue
                  </span>

                  <h3 className="text-5xl sm:text-6xl font-black text-white mb-2 leading-none">
                    ${lost.toLocaleString()}
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Lost Monthly Value</p>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center relative overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-green-400 bg-green-500/15 px-2.5 py-0.5 rounded-full border border-green-500/25 mb-3 inline-block">
                      Recovered with Auto-Text
                    </span>
                    <h4 className="text-3xl sm:text-4xl font-extrabold text-green-400 mb-1 leading-none">
                      +${recovered.toLocaleString()}
                    </h4>
                    <p className="text-[10px] text-gray-300 font-medium leading-relaxed">Estimated Recaptured Cash Flow (at 80% Capture Rate)</p>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Capabilities Grid */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Platform Features</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Engineered for Rapid Conversions</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the automated features designed to make capturing, tracking, and converting missed caller inquiries completely hands-free.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Speed to Lead Trigger */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Under-30s Response Trigger</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Speed determines close rates. Automate instant SMS text backs that catch prospects while their booking interest is hot, preventing them from calling local competitors.
                </p>
              </div>
            </AnimationWrapper>

            {/* CRM Contact Ingestion */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">CRM Lead Database Mapping</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every missed call is instantly created as a new contact lead inside your CRM workspace. Dynamic tags label them as a missed call prospect, recording dates and operational timelines automatically.
                </p>
              </div>
            </AnimationWrapper>

            {/* Smart Schedule Schedules */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Operational Schedules</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Configure distinct auto-reply copy for active business hours versus weekends or holidays. Maintain professional client care while keeping boundaries perfectly protected.
                </p>
              </div>
            </AnimationWrapper>

            {/* Multi-Channel Fail-safe */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Omnichannel Handshakes</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If the caller does not reply to the automated text, dynamically route backup reminders via email, or prompt your internal staff to call them back during office hours automatically.
                </p>
              </div>
            </AnimationWrapper>

            {/* Local SEO Booster */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">GBP & Google Local SEO Lift</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Google's local ranking algorithms highly prioritize response speeds. Auto-texting missed inquiries prevents abandonment, signaling absolute authority and reliability to Google search crawls.
                </p>
              </div>
            </AnimationWrapper>

            {/* Granular Tracking Dashboard */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call Tracking Logs</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Track exact response numbers, capture logs, and auto-conversion rates inside your visual reports. Know precisely which marketing campaigns or hours of the day generate the most reclaimed opportunities.
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Stop Letting Leads Get Away</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Activate automated text responses, capture customer inquiries instantly, sync details with your CRM, and book consultations around the clock.
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Start Reclaiming Missed Calls
              <Icons.ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimationWrapper>
        </div>

        <div className="absolute inset-0 opacity-10 bg-dot-pattern mix-blend-overlay"></div>
      </section>
    </div>
  );
};
