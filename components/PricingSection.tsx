import React from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Icons } from './Icons';
import { PricingTier } from '../types';

export const PricingSection: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: "Website Elite",
      price: "$199",
      description: "",
      features: [
        "Website, CRM, Booking Calendar",
        "Form, Survey & Quiz Builders",
        "Analytics & QR Codes",
        "Web Chat",
        "Blog & Online Store",
        "Payments & Invoicing",
        "Documents & Contracts",
        "Mobile App to manage customers"
      ]
    },
    {
      name: "Marketing Elite",
      price: "$199",
      description: "",
      features: [
        "Email & SMS Campaigns",
        "Social Media Planner",
        "Ad Manager",
        "Google Business Optimization",
        "Listing in 40+ directories/search engines",
        "Affiliate Manager"
      ]
    },
    {
      name: "Reputation Elite",
      price: "$199",
      description: "",
      features: [
        "Automated Review Requests",
        "Negative Review mitigation",
        "Ensure mostly 4-5 star reviews",
        "AI Review Replies",
        "Review QR Code"
      ]
    },
    {
      name: "AI Elite",
      price: "$499",
      description: "",
      features: [
        "AI Phone Receptionist",
        "AI SMS & WhatsApp Replies",
        "AI Web Chatbot",
        "AI Email & Social Media Replies",
        "AI Review Replies"
      ],
      recommended: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper type="fade">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Example Packages That Can Be Tailored To Your Needs</h2>
            <p className="mt-4 text-xl text-gray-600">Every business is unique. We can create custom packages based on your specific bottlenecks. Here are some common configurations to get started.</p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <AnimationWrapper key={index} delay={index * 150} type="slide">
              <div className={`h-full p-8 rounded-2xl border flex flex-col transition-transform hover:scale-105 duration-300 ${
                tier.recommended 
                  ? 'border-black shadow-xl bg-black text-white' 
                  : 'border-gray-200 bg-white text-gray-900 hover:shadow-lg'
              }`}>
                
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <div className="text-sm font-semibold opacity-80 uppercase tracking-wider mb-1">Starting at</div>
                  <div className="text-4xl font-bold">{tier.price}<span className="text-lg font-normal opacity-70">/mo</span></div>
                  <div className="text-xs opacity-60 mt-1 font-medium">+ Setup fees</div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Icons.Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.recommended ? 'text-green-400' : 'text-black'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={(e) => e.preventDefault()}
                  className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  tier.recommended 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  Request Custom Quote
                </button>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};