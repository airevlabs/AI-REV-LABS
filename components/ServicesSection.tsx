import React from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Icons } from './Icons';
import { Service } from '../types';

export const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 'website',
      title: 'Smart Website Builds',
      description: 'High-converting designs with integrated booking, payments, and automated CRM connections built-in.',
      iconName: 'Globe'
    },
    {
      id: 'voice-ai',
      title: 'AI Voice Agents',
      description: 'Intelligent phone answering that books appointments, qualifies leads, and answers questions 24/7.',
      iconName: 'Phone'
    },
    {
      id: 'digital-ai',
      title: 'Digital AI Agents',
      description: 'Instant responses across your website, SMS, and social media to capture engagement instantly.',
      iconName: 'MessageSquare'
    },
    {
      id: 'reputation',
      title: 'Reputation Management',
      description: 'Automate review requests and mitigate negative feedback to boost your online authority.',
      iconName: 'TrendingUp'
    },
    {
      id: 'local-seo',
      title: 'Local SEO',
      description: 'Dominate local search with GMB optimization and syncing across 95+ authoritative directories.',
      iconName: 'MapPin'
    },
    {
      id: 'web-seo',
      title: 'SEO & GEO Optimization',
      description: 'Dominate traditional Google search while future-proofing your brand for Generative Engine Optimization (GEO) in AI tools like ChatGPT, Gemini, etc.',
      iconName: 'Search'
    },
    {
      id: 'reactivation',
      title: 'Database Reactivation',
      description: 'Wake up your "dead" leads. We launch campaigns to re-engage past prospects and drive immediate revenue.',
      iconName: 'Database'
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
              <div className="group h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden">
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