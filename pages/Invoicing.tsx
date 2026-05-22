import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const Invoicing: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simple active reminder timeline state for visual collections simulator
  const [selectedReminderStep, setSelectedReminderStep] = useState<'early' | 'due' | 'overdue'>('early');

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-dot-pattern border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimationWrapper type="fade">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 bg-black rounded-full mr-2.5 animate-pulse"></span>
                Financial Velocity
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Get Paid Faster with <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Invoicing & Payments
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Transform your collections process. Send professional estimates, digital invoices, and secure payment links instantly. Automate collections, billing follow-ups, and recurring retainers so you never have to chase checks again.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Set Up Your Billing Engine
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('gateways-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  Explore Integrations
                </button>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Legacy vs Smart Automated Billing Comparison Section */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Seamless Collections</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Manual Chasing vs. Instant Automated Settlements</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Chasing accounts receivable leaks time and cash flow. Move to digital, single-click payment processing that operates hands-free.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Legacy Manual Billing</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Struggling with paper invoices, calling clients to collect card numbers over the phone, and wasting hours reconciling bank accounts manually.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Drafting manual PDF invoices on Word documents and emailing them out one-by-one',
                      'Calling overdue clients repeatedly to collect card details or waiting weeks for mail checks',
                      'No subscription billing system, forcing manual monthly invoicing for recurring clients',
                      'Forgetting to follow up on late invoices, leading to bad debt and cash flow blocks',
                      'Manually recording payments in separate CRM spreadsheets and accounting records',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Slower sales cycles, outstanding invoices, and high administrative stress.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Engine Card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Instant Settlements
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Rev Labs Automated Billing</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A secure, multi-processor financial engine that collects payments automatically through text links, recurring retainers, and CRM pipelines.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Create and email professional branded invoices and digital price estimates in seconds',
                      'Send click-to-pay Text-to-Pay SMS links directly to customer cell phones',
                      'Set up recurring retainer service contracts and installment bills with card-on-file ease',
                      'Automate SMS & Email reminder sequences that politely collect late invoices hands-free',
                      'Sync clearing transactions directly to CRM pipelines and client account balances instantly',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: Accelerated collections, safe storage, and predictable recurring revenue.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Gateway Integration Section */}
      <section id="gateways-section" className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Gateway Connections</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Connect Your <br className="hidden sm:inline" />
                  Preferred Merchant Account
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  You don't need to change processors or sign up for complex third-party tools. Our platform connects directly with the industry's most authoritative, highly secure merchant gateways in a single click.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed font-semibold text-black">
                  Keep Your Preferred Provider:
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Connect Stripe for low-friction digital checkout, PayPal for global trust, Square for local card readers, or NMI and Authorize.Net for institutional high-volume merchant processing. Secure PCI compliance remains handled entirely at the gateway level.
                </p>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Stripe & PayPal */}
              <AnimationWrapper type="scale" delay={50}>
                <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all text-center">
                  <div className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-2xl mb-4">
                    S
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Stripe Connection</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">Sync accounts in one click to unlock immediate payments, dynamic mobile checkout pages, and recurring retainer retainers.</p>
                </div>
              </AnimationWrapper>

              <AnimationWrapper type="scale" delay={150}>
                <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl mb-4">
                    P
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">PayPal Integration</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">Offer standard PayPal express checkouts, Venmo links, and pay-later features to optimize customer checkout conversions.</p>
                </div>
              </AnimationWrapper>

              {/* Square & Authorize.Net / NMI */}
              <AnimationWrapper type="scale" delay={250}>
                <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-900 text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-4">
                    ■
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Square Sync</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">Perfect for local retail and on-site contractors. Sync square catalogs, visual POS transactions, and customer files cleanly.</p>
                </div>
              </AnimationWrapper>

              <AnimationWrapper type="scale" delay={350}>
                <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all text-center">
                  <div className="w-16 h-16 mx-auto bg-red-50 text-red-700 rounded-2xl flex items-center justify-center font-black text-2xl mb-4">
                    A
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Authorize.Net & NMI</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">Ideal for established service providers and high-volume billing. Complete support for customized multi-mid routing rules.</p>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Collections Simulator (Overdue Reminders) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <AnimationWrapper type="scale" delay={100}>
                {/* Reminder Flow visualizer card */}
                <div className="bg-gray-900 text-white rounded-3xl border border-gray-800 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Collections Automation Sequence</span>
                    <span className="text-xs font-bold text-black bg-white px-2.5 py-1 rounded-full">Polite & Hands-Free</span>
                  </div>

                  {/* Simulator Steps selector tabs inside grid */}
                  <div className="grid grid-cols-3 gap-2 p-1 bg-white/5 rounded-xl border border-white/10 mb-6">
                    <button
                      onClick={() => setSelectedReminderStep('early')}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        selectedReminderStep === 'early' ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      3 Days Before
                    </button>
                    <button
                      onClick={() => setSelectedReminderStep('due')}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        selectedReminderStep === 'due' ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      On Due Date
                    </button>
                    <button
                      onClick={() => setSelectedReminderStep('overdue')}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        selectedReminderStep === 'overdue' ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      5 Days Overdue
                    </button>
                  </div>

                  {/* Live Render Area */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    {selectedReminderStep === 'early' && (
                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                          <span>Action: Email & SMS Pre-Notice</span>
                          <span>Trigger: 3 Days prior</span>
                        </div>
                        <h4 className="font-bold text-base text-white">"Friendly heads up from [Your Brand]"</h4>
                        <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                          "Hi [Client Name], just a gentle note that invoice #1042 for [Service Retainer] is scheduled to process on [Due Date]. No action is needed if your card on file is up to date!"
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-bold">
                          <span>Status: Scheduled Automatically</span>
                          <span className="text-green-400 font-black">✔ Active</span>
                        </div>
                      </div>
                    )}

                    {selectedReminderStep === 'due' && (
                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                          <span>Action: SMS Text-to-Pay Link</span>
                          <span>Trigger: 9:00 AM on Due Date</span>
                        </div>
                        <h4 className="font-bold text-base text-white">"Your receipt or pay link is ready"</h4>
                        <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                          "Hi [Client Name], your invoice for [Service Retainer] is due today. You can quickly view and securely settle the balance using this direct 1-click link: <strong>pay.airevlabs.com/inv-1042</strong>. Thank you!"
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-bold">
                          <span>Status: Sent via SMS & Email</span>
                          <span className="text-green-400 font-black">✔ Active</span>
                        </div>
                      </div>
                    )}

                    {selectedReminderStep === 'overdue' && (
                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                          <span>Action: Overdue Notice Sequence</span>
                          <span>Trigger: 5 Days Overdue</span>
                        </div>
                        <h4 className="font-bold text-base text-red-400">"Overdue Invoice Alert: Action Required"</h4>
                        <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                          "Hi [Client Name], we noticed that invoice #1042 remains outstanding. Please take a brief moment to update your billing details here: <strong>pay.airevlabs.com/inv-1042</strong> to prevent any service interruptions. Need help? Reply directly to this text!"
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-bold">
                          <span>Status: Late Reminder Sent</span>
                          <span className="text-red-400 font-black">⚠ Overdue Alert</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Eliminate Administrative Chase</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Stop Chasing Unpaid Checks
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Chasing customers for payment is uncomfortable and drains valuable administrative energy. Our automated collection sequences protect your cash flow politely, maintaining your brand's professionalism while ensuring invoices get cleared on time.
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="px-4 py-2 bg-black/5 border border-gray-100 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-800">
                    Saves 8+ Hours/Wk
                  </div>
                  <div className="px-4 py-2 bg-black/5 border border-gray-100 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-800">
                    Lowers Bad Debt
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
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Accelerated Payment Features</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the tools built directly into your unified billing system to capture every transactional opportunity.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Text-To-Pay Links */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Text-To-Pay Links</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Send secure payment links via SMS text message or email right after completing service. Allow customers to swipe to pay on their cell phones in less than 30 seconds.
                </p>
              </div>
            </AnimationWrapper>

            {/* Estimates to Invoices */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Estimates-to-Invoicing</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Draft professional estimates and digital proposals. The exact second a customer adds their legal digital signature, the system auto-converts the estimate into an invoice and initiates billing.
                </p>
              </div>
            </AnimationWrapper>

            {/* Retainers & Recurring billing */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Retainers & Subscriptions</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Set up automated monthly retainer agreements, recurring service contracts, and installment plans. Safe card-on-file storage processes billing on a fixed schedule.
                </p>
              </div>
            </AnimationWrapper>

            {/* Visual CRM sync */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">CRM Pipeline Sync</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The millisecond an invoice processes successfully, the CRM instantly moves the corresponding lead to "Deals Paid" and triggers any pre-configured service onboarding automations.
                </p>
              </div>
            </AnimationWrapper>

            {/* In-chat Checkout */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Conversational Checkout</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Allow our **AI Chatbot** or **AI Voice Agent** to dynamically text secure payment links directly to customers in the middle of standard service consultations or Q&A chats.
                </p>
              </div>
            </AnimationWrapper>

            {/* Detailed Analytics */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Ledger Reports</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Audit transaction history instantly. Monitor collection timelines, outstanding late values, and retainer growth curves under a single financial portal.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Synergies Explanation Panel */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Product Ecosystem</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Stop No-Show Appointments <br className="hidden sm:inline" />
                  With Service Synergies
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Do clients book valuable spots on your calendar and then fail to show up? Require commitment up front to protect your schedule.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed font-semibold text-black">
                  Required Up-Front Booking Deposits:
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  When you pair our **Invoicing & Payments** module with the **Smart Booking Calendar**, you can configure booking deposit rules. Customers must complete a secure digital down-payment before their appointment slot is officially confirmed, filtering out non-serious inquiries automatically.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Deposit Gateways on Booking Calendars</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Force deposit rules (e.g., $50 booking locks) dynamically when customers select slot hours in your calendar funnels.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Reconciliation-Free Bookkeeping</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Cleared down-payments are auto-recorded to the customer's visual contact profile inside the CRM, allowing seamless invoice balance deductions after services are finalized.
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Automate Your Cash Flow?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Stop chasing unpaid balances. Set up direct payment gateways, send text-to-pay links, and configure gentle collection triggers today.
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
