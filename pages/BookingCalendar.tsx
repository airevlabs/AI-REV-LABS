import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const BookingCalendar: React.FC = () => {
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
                Intelligent Booking & <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Scheduling Engine
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Eliminate no-shows and double bookings. Provide a seamless scheduling experience directly integrated into your CRM and marketing funnels.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Automate Your Calendar
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
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Manual Scheduling vs. Automated Engine</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Stop juggling third-party calendar apps and spreadsheets. Centralize your bookings directly within your business operations.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Fragmented Scheduling</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Relying on external apps like Calendly or back-and-forth emails creates friction and disjointed customer experiences.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Back-and-forth emails to find a time that works',
                      'No-shows cost you money because of lack of automated reminders',
                      'Requires Zapier to connect booking app with your CRM',
                      'Data is scattered across multiple platforms',
                      'Hard to collect upfront payments efficiently',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Frustrating for clients and leads to missed opportunities.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Engine Card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Integrated
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Unified Booking Engine</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A frictionless experience where leads schedule, pay, and are automatically synced into your CRM—all in one place.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Native two-way sync with Google Calendar & Outlook',
                      'Automated SMS and email reminders drastically reduce no-shows',
                      'Clients can choose specific staff members or services',
                      'Integrated Stripe and PayPal for upfront payments',
                      'Automated post-appointment follow-up campaigns',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: Seamless experience, higher attendance, and more revenue.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Booking Types Section */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Versatile Scheduling</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Bookings for Every Business Model</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                No matter how you operate, our engine supports your scheduling logic with absolute flexibility. All types are treated with equal importance.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Simple */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Simple / One-on-One Bookings</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Perfect for discovery calls, sales demos, personal consultations, and standard meetings. Connect your personal schedule and let clients find a time that works for you.
                </p>
              </div>
            </AnimationWrapper>

            {/* Round Robin */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Round Robin Distribution</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Distribute appointments across an entire team. Optimize assignments based on who is available fastest, or enforce equal lead distribution among your sales reps.
                </p>
              </div>
            </AnimationWrapper>

            {/* Class */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Class & Group Events</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Host webinars, group workshops, or fitness classes. Allow multiple attendees to book the same time slot until your specified capacity limit is reached.
                </p>
              </div>
            </AnimationWrapper>

            {/* Service */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service Bookings</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Offer a menu of distinct services. Clients select the specific service they want (e.g., haircut, plumbing inspection), and can even choose their preferred staff member to perform it.
                </p>
              </div>
            </AnimationWrapper>

            {/* Rental */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rental Bookings</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Perfect for renting out vehicles, event spaces, or equipment. Define specific availability blocks, handle deposits, and prevent double-booking for physical assets over multi-day periods.
                </p>
              </div>
            </AnimationWrapper>

            {/* Resources */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Management</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Link physical resources (like an MRI room, a massage table, or a specialized machine) to specific calendar bookings, ensuring a physical resource is never double-booked even if staff are available.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Syncing & Automations Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Beyond The Calendar</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Syncing & Automation Power</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                What happens after the booking is just as important. Our system ensures you show up on time, and your clients do too.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              {/* Integrations */}
              <AnimationWrapper type="slide" delay={100}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Two-Way External Sync</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Bi-directional sync with **Google Calendar**, **Outlook**, and **iCloud**. If you block time on your phone's personal calendar, it instantly makes you unavailable for client bookings.
                  </p>
                </div>
              </AnimationWrapper>

              <AnimationWrapper type="slide" delay={200}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Video Conferencing Links</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Direct integration with **Zoom**, **Google Meet**, and **Microsoft Teams**. Unique meeting links are generated automatically the moment a booking is confirmed and sent in the invites.
                  </p>
                </div>
              </AnimationWrapper>

              <AnimationWrapper type="slide" delay={300}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Upfront Booking Payments</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Require deposits or full payments during the booking flow by connecting **Stripe** or **PayPal**. Perfect for paid consultations, class fees, or rental deposits.
                  </p>
                </div>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-6 space-y-6">
              {/* Automations */}
              <AnimationWrapper type="slide" delay={400}>
                <div className="p-8 rounded-2xl bg-black text-white shadow-xl">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                    <Icons.Workflow className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">CRM Triggers & Workflows</h3>
                  <ul className="space-y-4">
                    {[
                      'Automatically tag contacts and move them into "Appointment Booked" pipeline stages.',
                      'Trigger pre-appointment intake forms and qualification surveys.',
                      'Fire off multi-channel SMS and Email reminders 24hrs and 1hr before meetings.',
                      'Launch automated "Miss You" and rescheduling sequences for No-Shows.',
                      'Automatically request Google Reviews via SMS directly after a completed appointment.',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300 leading-relaxed">
                        <Icons.Check className="w-4 h-4 text-white mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Automate Your Calendar?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Upgrade to a fully unified booking engine today and watch your show-up rates soar.
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
