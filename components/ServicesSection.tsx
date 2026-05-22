import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimationWrapper } from './AnimationWrapper';
import { Icons } from './Icons';
import { Service } from '../types';

export const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 'website',
      title: 'Smart Website Builds',
      description: 'Websites, Landing Pages, or Funnels with integrated booking, payments, and automated CRM connections built-in. Optimized for both traditional SEO and AI Search Optimization.',
      iconName: 'Globe',
      path: '/services/smart-websites'
    },
    {
      id: 'booking',
      title: 'Booking Calendar',
      description: 'Customers can book appointments for services, online meetings, or events with automated reminders and other features.',
      iconName: 'Calendar',
      path: '/services/booking-calendar'
    },
    {
      id: 'crm',
      title: 'CRM',
      description: 'Keep all your contacts, deals, notes, and follow-ups organized in one place so nothing gets missed.',
      iconName: 'Users',
      path: '/services/crm'
    },
    {
      id: 'voice-ai',
      title: 'AI Phone Receptionist',
      description: 'Intelligent AI Voice Agent that books appointments, qualifies leads, and answers questions 24/7.',
      iconName: 'Phone',
      path: '/services/ai-phone-receptionist'
    },
    {
      id: 'digital-ai',
      title: 'AI Chatbot',
      description: 'Instant responses across your website, SMS, email, and social media to capture engagement instantly.',
      iconName: 'MessageSquare',
      path: '/services/ai-chatbot'
    },
    {
      id: 'reputation',
      title: 'Reputation Management',
      description: 'Automate review requests, mitigate negative feedback, and increase 4 to 5 star reviews to boost your online reputation.',
      iconName: 'TrendingUp',
      path: '/services/reputation-management'
    },
    {
      id: 'local-seo',
      title: 'Local SEO',
      description: 'Dominate local search with Google Business Profile optimization and syncing across 40+ authoritative directories.',
      iconName: 'MapPin',
      path: '/services/local-seo'
    },
    {
      id: 'reactivation',
      title: 'Lead Reactivation',
      description: 'Wake up your "dead" leads. We launch campaigns to re-engage cold leads and past customers to drive immediate revenue.',
      iconName: 'Database',
      path: '/services/lead-reactivation'
    },
    {
      id: 'email-sms',
      title: 'Email & SMS Campaigns',
      description: 'Reach leads instantly with targeted email and text campaigns that can be scheduled, personalized, and tracked from one place.',
      iconName: 'Mail',
      path: '/services/email-sms'
    },
    {
      id: 'social-media',
      title: 'Social Media Planner',
      description: 'Plan, schedule, and publish content across multiple social platforms from a single dashboard.',
      iconName: 'Share2',
      path: '/services/social-media'
    },
    {
      id: 'invoicing',
      title: 'Invoicing & Payments',
      description: 'Send invoices, estimates, and payment links, then automate reminders, follow-ups, and recurring billing to get paid faster. Connect major payment providers like Stripe, PayPal, Square, NMI, and Authorize.Net',
      iconName: 'CreditCard',
      path: '/services/invoicing'
    },
    {
      id: 'documents',
      title: 'Documents & Contracts',
      description: 'Create, send, and manage documents and contracts digitally, with workflow-based delivery for faster approvals.',
      iconName: 'FileText'
    },
    {
      id: 'missed-call',
      title: 'Missed Call Text Back',
      description: 'Automatically text missed callers right away so you can reconnect and capture more leads fast.',
      iconName: 'PhoneMissed'
    },
    {
      id: 'workflow',
      title: 'Workflow Automations',
      description: 'Build smart sequences, triggers, and multi-step automations that run your business 24/7.',
      iconName: 'Workflow'
    },
    {
      id: 'custom',
      title: 'Custom Automation',
      description: 'Bespoke AI solutions tailored to your unique workflows and operational challenges.',
      iconName: 'Settings'
    }
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Icons.Globe className="w-6 h-6" />;
      case 'Calendar': return <Icons.Calendar className="w-6 h-6" />;
      case 'Users': return <Icons.Users className="w-6 h-6" />;
      case 'Mail': return <Icons.Mail className="w-6 h-6" />;
      case 'Share2': return <Icons.Share2 className="w-6 h-6" />;
      case 'CreditCard': return <Icons.CreditCard className="w-6 h-6" />;
      case 'FileText': return <Icons.FileText className="w-6 h-6" />;
      case 'PhoneMissed': return <Icons.PhoneMissed className="w-6 h-6" />;
      case 'Workflow': return <Icons.Workflow className="w-6 h-6" />;
      case 'Phone': return <Icons.Phone className="w-6 h-6" />;
      case 'MessageSquare': return <Icons.MessageSquare className="w-6 h-6" />;
      case 'TrendingUp': return <Icons.TrendingUp className="w-6 h-6" />;
      case 'MapPin': return <Icons.MapPin className="w-6 h-6" />;
      case 'Search': return <Icons.Search className="w-6 h-6" />;
      case 'Database': return <Icons.Database className="w-6 h-6" />;
      case 'Settings': return <Icons.Settings className="w-6 h-6" />;
      default: return <Icons.Zap className="w-6 h-6" />;
    }
  };

  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-dot-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper type="fade">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Our Capabilities</span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">Comprehensive Growth Systems</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just fix one part of your business. We build the engine that drives it forward.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimationWrapper key={service.id} delay={index * 100} type="slide">
              <div 
                onClick={() => {
                  if (service.path) {
                    navigate(service.path);
                  }
                }}
                className="group h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {renderIcon(service.iconName)}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-semibold text-gray-400 group-hover:text-black transition-colors">
                  Learn more <Icons.ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};