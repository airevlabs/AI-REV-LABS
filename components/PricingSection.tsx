import React from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Icons } from './Icons';
import { PricingTier } from '../types';

export const PricingSection: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$997",
      description: "Perfect for small local businesses ready to automate basics.",
      features: [
        "Smart Website or Funnel",
        "Missed Call Text Back",
        "Google Review Automation",
        "Basic CRM Setup"
      ]
    },
    {
      name: "Growth",
      price: "$2,497",
      description: "Complete automation suite for scaling service businesses.",
      features: [
        "Everything in Starter",
        "AI Voice Agent (Receptionist)",
        "Database Reactivation Campaign",
        "Advanced Workflows & Nurture",
        "Priority Support"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for multi-location or complex needs.",
      features: [
        "Full Custom AI Development",
        "Dedicated Account Manager",
        "Multi-Location SEO",
        "Custom API Integrations",
        "White-Glove Onboarding"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper type="fade">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-xl text-gray-600">Invest in systems that pay for themselves.</p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <AnimationWrapper key={index} delay={index * 150} type="slide">
              <div className={`h-full p-8 rounded-2xl border flex flex-col relative transition-transform hover:scale-105 duration-300 ${
                tier.recommended 
                  ? 'border-black shadow-xl bg-black text-white' 
                  : 'border-gray-200 bg-white text-gray-900 hover:shadow-lg'
              }`}>
                {tier.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold mb-4">{tier.price}<span className="text-lg font-normal opacity-70">{tier.price !== 'Custom' ? '/mo' : ''}</span></div>
                <p className={`mb-8 text-sm ${tier.recommended ? 'text-gray-300' : 'text-gray-500'}`}>
                  {tier.description}
                </p>

                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Icons.Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.recommended ? 'text-green-400' : 'text-black'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  tier.recommended 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  Choose {tier.name}
                </button>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};