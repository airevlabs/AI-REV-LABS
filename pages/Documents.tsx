import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

export const Documents: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tabs for the 50+ Professional Templates Showcase
  const [activeTemplateTab, setActiveTemplateTab] = useState<'proposals' | 'agreements' | 'onboarding'>('proposals');

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-dot-pattern border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimationWrapper type="fade">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 bg-black rounded-full mr-2.5 animate-pulse"></span>
                Streamlined Agreements
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Sign Deals Faster with <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Documents & Contracts
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Send professional sales proposals, estimates, and contracts that close instantly. Secure legally binding digital signatures, automate sequential approvals, auto-populate CRM database fields, and capture deposits on signing—all from one secure workspace.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Create Your First Contract
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('templates-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  View 50+ Templates
                </button>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Legacy vs Smart Digital Comparison Section */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Seamless Sign-offs</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Disconnected Paperwork vs. Intelligent Contracts</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Stop printing, scanning, and manually chasing signatures. Move your client contracts and service approvals into friction-free, high-converting digital flows.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Legacy Paperwork Methods</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Relying on scattered email attachments, manual PDF annotations, and chasing sign-offs over the phone, leading to slow deal cycles.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Forcing clients to print, sign, scan, and email PDF attachments back to your office',
                      'Staring at blank proposal screens with no template library to standardise core terms',
                      'Manually copy-pasting client names, entity addresses, and pricing parameters from CRM to DOCs',
                      'No clear timeline alerts, forcing you to manually call clients to check if they read the NDA',
                      'Separate invoice chasing, adding late payment risks right after client contract approvals',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Slowed pipeline momentum, manual double-entry, and lower close rates.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart Engine Card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Intelligent Flows
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Rev Labs Digital Document Engine</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A secure, legally binding workspace integrated directly into your CRM. Create proposal templates, track client views in real-time, and collect immediate payments.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Fully legally binding electronic signatures with time-stamped security audit logs',
                      'Gain instant access to a pre-built library of 50+ industry-specific agreements and proposals',
                      'Auto-populate contact records, entity details, and project figures natively using CRM tags',
                      'See exactly when your client opens and reads the agreement with real-time audit logs',
                      'Trigger instant Stripe deposit invoice checkouts the exact second your client signs',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: Accelerated deal completions, safe audit storage, and immediate down-payments.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Sequential Approval & Time-Stamped Audit Simulator */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Audit & Workflows</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Sequential Workflows & Legally Binding Audits
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Complex agreements often require multiple approvals. Our workflow planner lets you build automated, chronological routes (e.g. Creator → Supervisor → Customer), moving the contract along instantly as signers approve.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed font-semibold text-black">
                  Secure Time-Stamped Ledger:
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Every sign-off includes a secure, time-stamped digital audit trail recording names, emails, transaction dates, and client IP addresses to guarantee legal compliance.
                </p>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7">
              <AnimationWrapper type="scale" delay={150}>
                {/* Workflow Simulator Card */}
                <div className="bg-gray-900 text-white rounded-3xl border border-gray-800 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Sequential Signing Pipeline</span>
                    <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">Secure Audit</span>
                  </div>

                  {/* Signer visual timeline */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 text-black font-black text-xs flex items-center justify-center">✓</div>
                        <span className="text-xs font-bold text-white">Signer 1: Sales Representative</span>
                      </div>
                      <span className="text-[10px] text-green-400 font-bold bg-green-400/5 px-2 py-0.5 rounded">Signed</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 text-black font-black text-xs flex items-center justify-center">✓</div>
                        <span className="text-xs font-bold text-white">Signer 2: Operations Director</span>
                      </div>
                      <span className="text-[10px] text-green-400 font-bold bg-green-400/5 px-2 py-0.5 rounded">Signed</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 border-2 border-white/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white font-black text-xs flex items-center justify-center animate-pulse">3</div>
                        <span className="text-xs font-bold text-white">Signer 3: Client Approval (Active)</span>
                      </div>
                      <span className="text-[10px] text-blue-400 font-bold bg-blue-400/10 px-2 py-0.5 rounded animate-pulse">Awaiting Signature</span>
                    </div>
                  </div>

                  {/* Simulated Secure Audit log feed */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase font-bold text-gray-500 block mb-2 tracking-widest">Time-Stamped Compliance Logs</span>
                    <div className="space-y-2 text-[10px] font-mono text-gray-400">
                      <p><span className="text-gray-500">[09:15 AM]</span> Document draft created from "Service Contract Template" via CRM workflow.</p>
                      <p><span className="text-gray-500">[11:22 AM]</span> Approved & signed by Signer 1 (IP: 192.168.4.15).</p>
                      <p><span className="text-gray-500">[11:23 AM]</span> Sequential route dispatched alert dynamically to Operations Director.</p>
                      <p><span className="text-gray-500">[01:45 PM]</span> Approved & signed by Signer 2 (IP: 192.168.4.18).</p>
                      <p><span className="text-gray-500">[02:10 PM]</span> Opened and viewed by Client (IP: 72.184.211.5) - Time spent: 4m 12s.</p>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 50+ Professional Templates Showcase */}
      <section id="templates-showcase" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Accelerate Drafting</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                50+ Ready-To-Use Branded Templates
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Launch clean, compliant agreements in seconds. Select a verified baseline structure, dynamically auto-fill CRM variables, and broadcast.
              </p>

              {/* Selector Tabs */}
              <div className="mt-8 flex justify-center space-x-2 p-1 bg-gray-50 rounded-full border border-gray-100 max-w-md mx-auto relative z-20">
                <button
                  onClick={() => setActiveTemplateTab('proposals')}
                  className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${
                    activeTemplateTab === 'proposals' ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Proposals
                </button>
                <button
                  onClick={() => setActiveTemplateTab('agreements')}
                  className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${
                    activeTemplateTab === 'agreements' ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Agreements
                </button>
                <button
                  onClick={() => setActiveTemplateTab('onboarding')}
                  className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${
                    activeTemplateTab === 'onboarding' ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Onboarding
                </button>
              </div>
            </div>
          </AnimationWrapper>

          {/* Templates Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {activeTemplateTab === 'proposals' && (
              <>
                <AnimationWrapper type="scale" delay={50}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.FileText className="text-gray-400 w-12 h-12" />
                      <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Sales Proposal
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Sales quote & Scope proposal</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Integrated visual pricing options grids, deliverables checklists, and sign-to-accept agreements.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={150}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Database className="text-gray-400 w-12 h-12" />
                      <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Estimate
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Project Cost Estimate</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Interactive estimates highlighting modular project items that auto-convert to invoices when signed.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={250}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Workflow className="text-gray-400 w-12 h-12" />
                      <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        RFP
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Commercial Bid Proposal</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">A detailed structured bid proposal outline configured to showcase executive qualifications and case metrics.</p>
                  </div>
                </AnimationWrapper>
              </>
            )}

            {activeTemplateTab === 'agreements' && (
              <>
                <AnimationWrapper type="scale" delay={50}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Lock className="text-gray-400 w-12 h-12" />
                      <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        NDA
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Non-Disclosure Agreement</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Standard bilateral NDA protecting intellectual properties and trade secrets in seconds.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={150}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Users className="text-gray-400 w-12 h-12" />
                      <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Retainer
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Monthly Service Agreement</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Customised standard agreement outlining recurring monthly service scopes and card-on-file retainer policies.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={250}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.FileText className="text-gray-400 w-12 h-12" />
                      <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Subcontractor
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Contractor Agreement</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Legally vetted independent subcontractor framework outlining clear payment maturity cycles and milestones.</p>
                  </div>
                </AnimationWrapper>
              </>
            )}

            {activeTemplateTab === 'onboarding' && (
              <>
                <AnimationWrapper type="scale" delay={50}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Users className="text-gray-400 w-12 h-12" />
                      <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Onboarding
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Client Onboarding Checklist</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Structured checklist form requesting logos, team logins, and core operational details directly upon signing.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={150}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.FileText className="text-gray-400 w-12 h-12" />
                      <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Questionnaire
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Intake Strategy Form</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Tailored marketing intake questions built directly into the proposal layout for zero-gap starts.</p>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper type="scale" delay={250}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-all">
                    <div className="h-44 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <Icons.Workflow className="text-gray-400 w-12 h-12" />
                      <div className="absolute top-3 left-3 bg-black text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Access
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Technical Access Request</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Secure document outlines requesting digital permissions and database configurations securely.</p>
                  </div>
                </AnimationWrapper>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Core Platform Capabilities Grid */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Platform Features</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Built for Agreement Efficiency</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the automated features designed to make drafting, tracking, and signing contract documents seamless.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CRM Smart Auto-population */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">CRM Smart Variable Sync</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Save hours of double-entry data. Our direct CRM connection dynamically auto-populates client names, entity addresses, and pricing details into new agreement drafts automatically.
                </p>
              </div>
            </AnimationWrapper>

            {/* Automated Reminders */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Sign Reminders</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Never manually email a client to sign a contract again. Configure gentle recurring SMS/email notifications that prompt unsigned contacts to complete their agreements.
                </p>
              </div>
            </AnimationWrapper>

            {/* Sign-to-Pay billing */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sign-to-Pay Retainers</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pair with our **Invoicing & Payments** capability. Require immediate deposit payments or retainer credit card authorization the exact second the customer signs their agreement.
                </p>
              </div>
            </AnimationWrapper>

            {/* Status alerts */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Live Status Triggers</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Instantly triggers actions when a contract status changes. Let the system automatically change CRM sales pipeline stages from "Proposal" to "Contract Cleared" without manual reviews.
                </p>
              </div>
            </AnimationWrapper>

            {/* Mobile signing responsiveness */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Responsive Mobile Sign</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Fully optimized responsive layout allows clients to easily review scopes and draw signatures securely from standard mobile screens, tablets, or email apps.
                </p>
              </div>
            </AnimationWrapper>

            {/* View logs auditing */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Engagement Logs</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  See when a contract gets opened and how long they spent reading different sections. Identify which clauses are causing review hesitations before they even reply.
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Accelerate Your Contract Cycles?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Draft compliant agreements, secure legally binding signatures, auto-populate details, and collect payments on sign-off today.
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
