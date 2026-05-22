import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

interface WorkflowNode {
  type: 'trigger' | 'action' | 'wait';
  title: string;
  desc: string;
  icon: string;
}

export const WorkflowAutomations: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulator tabs states
  const [activeTemplateTab, setActiveTemplateTab] = useState<'nurture' | 'onboarding' | 'review'>('nurture');

  // ROI Calculator states
  const [hoursSpent, setHoursSpent] = useState<number>(8);
  const [wage, setWage] = useState<number>(30);
  const [employees, setEmployees] = useState<number>(4);

  // Workflow templates dictionary
  const workflowTemplates: Record<'nurture' | 'onboarding' | 'review', WorkflowNode[]> = {
    nurture: [
      { type: 'trigger', title: 'New Form Submission', desc: 'Prospect fills out smart website booking inquiry form.', icon: 'Globe' },
      { type: 'action', title: 'Create CRM Contact', desc: 'Natively ingestion as a Lead, auto-populate details & tag as "Warm Prospect".', icon: 'Users' },
      { type: 'action', title: 'Instant SMS & Email Handshake', desc: 'Dispatches personalized text follow-up in under 30 seconds.', icon: 'MessageSquare' },
      { type: 'action', title: 'Team Slack Notification', desc: 'Alerts sales representatives automatically with detailed contact records.', icon: 'Zap' }
    ],
    onboarding: [
      { type: 'trigger', title: 'Contract Signed Accept', desc: 'Client signs legally binding monthly professional service agreement.', icon: 'FileText' },
      { type: 'action', title: 'Stripe Deposit Invoice', desc: 'Triggers instant down-payment checkout or card-on-file authorization.', icon: 'CreditCard' },
      { type: 'action', title: 'Provision Folders', desc: 'Auto-generates Google Drive client folders & project tracking lists.', icon: 'Database' },
      { type: 'action', title: 'Email Welcome Packet', desc: 'Sends onboarding check-in lists & secure strategy strategy questionnaire links.', icon: 'Mail' }
    ],
    review: [
      { type: 'trigger', title: 'Service Marked "Done"', desc: 'Staff advances sales pipeline stage card to Deliverable Completed.', icon: 'Workflow' },
      { type: 'wait', title: 'Wait 2 Hours', desc: 'Provides buffer time for client to experience standard delivery success.', icon: 'Clock' },
      { type: 'action', title: 'Send Review Request SMS', desc: 'Dispatches polite checkout feedback questionnaire containing review link.', icon: 'MessageSquare' },
      { type: 'action', title: 'CRM Stage Automation', desc: 'If 5-star rating received, advances contact tag dynamically to "Promoter".', icon: 'TrendingUp' }
    ]
  };

  const getIconComponent = (name: string) => {
    switch (name) {
      case 'Globe': return <Icons.Globe className="w-5 h-5" />;
      case 'Users': return <Icons.Users className="w-5 h-5" />;
      case 'MessageSquare': return <Icons.MessageSquare className="w-5 h-5" />;
      case 'Zap': return <Icons.Zap className="w-5 h-5" />;
      case 'FileText': return <Icons.FileText className="w-5 h-5" />;
      case 'CreditCard': return <Icons.CreditCard className="w-5 h-5" />;
      case 'Database': return <Icons.Database className="w-5 h-5" />;
      case 'Mail': return <Icons.Mail className="w-5 h-5" />;
      case 'Workflow': return <Icons.Workflow className="w-5 h-5" />;
      case 'Clock': return <Icons.Clock className="w-5 h-5" />;
      case 'TrendingUp': return <Icons.TrendingUp className="w-5 h-5" />;
      default: return <Icons.Zap className="w-5 h-5" />;
    }
  };

  const calculateSavings = () => {
    const weeklyWageSavings = hoursSpent * wage * employees;
    const monthlySavings = Math.round(weeklyWageSavings * 4.33);
    const annualSavings = Math.round(weeklyWageSavings * 52);
    const annualHoursSaved = Math.round(hoursSpent * employees * 52);
    return {
      monthly: monthlySavings,
      annual: annualSavings,
      hours: annualHoursSaved
    };
  };

  const { monthly, annual, hours } = calculateSavings();

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-dot-pattern border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimationWrapper type="fade">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 bg-black rounded-full mr-2.5 animate-pulse"></span>
                Operational Efficiency
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Scale Your Business <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 pb-2">
                  Without the Administrative Overhead
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                Stop wasting valuable staff time on manual copy-pasting, routing notifications, and email tracking. Our robust Workflow Automation engine connects your CRM, calendars, messaging channels, and documents to execute business tasks 24/7/365 with zero human error.
              </p>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative z-20"
                >
                  Start Automating Today
                  <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  See Simulators
                </button>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Comparison Section (Manual Grind vs. Smart Workflows) */}
      <section id="details-section" className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper type="fade">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Operational Freedom</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Manual Administration Grind vs. Smart Auto-Pilot</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Human administrative error and delay represent the single largest leaks in your pipeline. Free your staff to focus on high-value strategy while code handles the rest.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mt-12">
            {/* Manual Card */}
            <AnimationWrapper type="slide" delay={100} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 text-gray-500">
                    <Icons.X className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Manual Administrative Operations</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Saddling your operational staff with boring repetitive admin task checklists, driving high payroll costs and slower lead response times.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Manually exporting contact CSV files between CRM, billing systems, and sheets',
                      'Staff sending repetitive calendar reminder texts and check-ins one by one',
                      'No automatic notification routing when client contracts are signed or payments received',
                      'Losing contact leads because someone forgot to tag them or move them in the pipeline',
                      'Fragmented tools that require constant human coordination to maintain records',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-medium text-gray-400">
                  Result: Increased operational drag, payroll inflation, and slower scaling potential.
                </div>
              </div>
            </AnimationWrapper>

            {/* Smart engine card */}
            <AnimationWrapper type="slide" delay={200} className="h-full">
              <div className="p-8 sm:p-12 rounded-3xl border-2 border-black bg-white flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
                  Auto-Pilot Systems
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 text-white">
                    <Icons.Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Rev Labs Smart Workflow Engine</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A centralized, visually designed triggers and multi-step sequence builder. Program your standard operational rules once, and watch them execute flawlessly.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Sync database contacts dynamically in real-time across your billing, documents, and lists',
                      'Configure visual workflows with date-based waits, automated SMS, and email check-ins',
                      'Route pipeline events instantly to staff on Slack or Discord with rich context variables',
                      'Natively log every process state transition, ensuring complete audit records',
                      'Build customized API webhooks to connect any external authority tools flawlessly',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-900 font-medium">
                        <Icons.Check className="w-4 h-4 text-black mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-100 text-sm font-bold text-black">
                  Result: Error-free execution, streamlined lead handshakes, and reduced overhead costs.
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Interactive Workflow Node Diagram Simulator */}
      <section className="py-24 bg-gray-50/50 bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Visual Blueprint</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Visual Multi-Step Flow Simulator
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Select an operational trigger blueprint tab below to see how our automation builder handles sequential business rules dynamically. Code coordinates each task flawlessly without manual steps.
                </p>

                {/* Flow Tabs */}
                <div className="mt-8 flex justify-center space-x-1 p-1 bg-white rounded-full border border-gray-200 max-w-sm relative z-20">
                  <button
                    onClick={() => setActiveTemplateTab('nurture')}
                    className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
                      activeTemplateTab === 'nurture' ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Lead Nurture
                  </button>
                  <button
                    onClick={() => setActiveTemplateTab('onboarding')}
                    className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
                      activeTemplateTab === 'onboarding' ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Onboarding
                  </button>
                  <button
                    onClick={() => setActiveTemplateTab('review')}
                    className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
                      activeTemplateTab === 'review' ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Review Booster
                  </button>
                </div>
              </AnimationWrapper>
            </div>

            <div className="lg:col-span-7">
              <AnimationWrapper type="scale" delay={150}>
                {/* Visual Workflow Canvas Mockup */}
                <div className="bg-gray-900 text-white rounded-3xl border border-gray-800 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Flow Blueprint Canvas</span>
                    <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-full border border-green-500/20">Active Sequence</span>
                  </div>

                  {/* Nodes list with arrows */}
                  <div className="space-y-6">
                    {workflowTemplates[activeTemplateTab].map((node, index) => (
                      <div key={index} className="relative">
                        {/* Connecting Line */}
                        {index < workflowTemplates[activeTemplateTab].length - 1 && (
                          <div className="absolute left-6 top-12 bottom-[-24px] w-0.5 bg-gradient-to-b from-black/40 via-white/20 to-black/40 z-0"></div>
                        )}

                        {/* Node Card */}
                        <div className={`flex items-start space-x-4 p-4 rounded-xl border relative z-10 transition-all duration-300 ${
                          node.type === 'trigger' 
                            ? 'bg-blue-950/40 border-blue-500/35 hover:border-blue-500/60' 
                            : node.type === 'wait'
                            ? 'bg-amber-950/30 border-amber-500/25 hover:border-amber-500/50'
                            : 'bg-white/5 border-white/10 hover:border-white/25'
                        }`}>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            node.type === 'trigger' 
                              ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30' 
                              : node.type === 'wait'
                              ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                              : 'bg-white/5 text-white border border-white/10'
                          }`}>
                            {getIconComponent(node.icon)}
                          </div>
                          
                          <div>
                            <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full ${
                              node.type === 'trigger' 
                                ? 'bg-blue-500/10 text-blue-400' 
                                : node.type === 'wait'
                                ? 'bg-amber-500/10 text-amber-400'
                                : 'bg-white/5 text-gray-400'
                            } inline-block mb-1`}>
                              {node.type}
                            </span>
                            <h4 className="text-sm font-bold text-white leading-tight">{node.title}</h4>
                            <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">{node.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Hours Saved ROI Calculator */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Calculation Displays */}
            <div className="lg:col-span-6 lg:order-2">
              <AnimationWrapper type="fade">
                <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Operational ROI Calculator</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Calculate Your Staff Time Reclaimed
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Repetitive tasks cost small businesses thousands of dollars in hidden administration overhead. Adjust the selectors below to see how much payroll you can redirect toward growth.
                </p>

                {/* Controls */}
                <div className="space-y-6 mt-8">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                      <span>Manual Admin Hours Per Employee/Week:</span>
                      <span className="text-black font-bold">{hoursSpent} Hours</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="30"
                      step="1"
                      value={hoursSpent}
                      onChange={(e) => setHoursSpent(parseInt(e.target.value))}
                      className="w-full accent-black cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                      <span>Average Employee Hourly Wage ($):</span>
                      <span className="text-black font-bold">${wage}/hr</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="80"
                      step="5"
                      value={wage}
                      onChange={(e) => setWage(parseInt(e.target.value))}
                      className="w-full accent-black cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                      <span>Total Employees Performing Manual Work:</span>
                      <span className="text-black font-bold">{employees} Staff</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value))}
                      className="w-full accent-black cursor-pointer"
                    />
                  </div>
                </div>
              </AnimationWrapper>
            </div>

            {/* Savings visual cards */}
            <div className="lg:col-span-6 lg:order-1">
              <AnimationWrapper type="scale" delay={150}>
                <div className="bg-gray-900 text-white rounded-3xl border border-gray-800 shadow-2xl p-8 sm:p-12 text-center relative overflow-hidden">
                  <span className="text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 uppercase tracking-wider mb-6 inline-block">
                    Estimated Annual Savings
                  </span>

                  <h3 className="text-5xl sm:text-6xl font-black text-white mb-2 leading-none">
                    ${annual.toLocaleString()}
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Direct Operational Value Reclaimed</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <h4 className="text-xl font-bold text-gray-300 mb-0.5">${monthly.toLocaleString()}</h4>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Saved Monthly</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <h4 className="text-xl font-bold text-gray-300 mb-0.5">{hours.toLocaleString()} hrs</h4>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Hours Saved Yearly</p>
                    </div>
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
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Engineered for Flawless Operations</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the automated features designed to make coordinate workflows, triggers, database syncing, and custom integrations.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dynamic Triggers */}
            <AnimationWrapper type="slide" delay={50}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Event Triggering</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Start sequences based on any client action. Form fills, payment checkouts, CRM pipeline advances, date anniversaries, or inbound SMS keywords can launch custom sequences.
                </p>
              </div>
            </AnimationWrapper>

            {/* Smart CRM integrations */}
            <AnimationWrapper type="slide" delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dynamic CRM Database Sync</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  As prospects progress through your workflows, let the system automatically re-tag them, move pipeline deal status cards, assign tasks to staff, and sync profiles instantly.
                </p>
              </div>
            </AnimationWrapper>

            {/* Date wait conditions */}
            <AnimationWrapper type="slide" delay={250}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complex Delay & Wait Steps</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Program precise calendar timing checks. Send SMS reminders exactly 1 hour before scheduled consultation calls, wait 3 days to send invoice reminders, or hold actions until custom dates.
                </p>
              </div>
            </AnimationWrapper>

            {/* Webhooks custom API */}
            <AnimationWrapper type="slide" delay={350}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Outbound Custom Webhooks</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Need to send data to third-party tools outside our native platform? Create outbound webhooks natively to push payload details to custom API databases in real-time.
                </p>
              </div>
            </AnimationWrapper>

            {/* Inbound webhook triggers */}
            <AnimationWrapper type="slide" delay={450}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inbound API Event Triggers</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kick off automated sequences using external data feeds. Listen for webhook signals from other databases to instantly trigger SMS alerts and advance client pipeline workflows.
                </p>
              </div>
            </AnimationWrapper>

            {/* Team alerts */}
            <AnimationWrapper type="slide" delay={550}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-black border border-gray-100">
                  <Icons.Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Channel Staff Alerts</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Keep your internal team flawlessly aligned. Send automated Discord/Slack direct pings, email briefings, or GHL task lists the millisecond a prospect demands human attention.
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
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Start Scaling Smarter</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Draft operational blueprints once, set manual administrative checklists on auto-pilot, and reclaim hundreds of hours of team time.
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Build Your First Automation
              <Icons.ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimationWrapper>
        </div>

        <div className="absolute inset-0 opacity-10 bg-dot-pattern mix-blend-overlay"></div>
      </section>
    </div>
  );
};
