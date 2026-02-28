import React from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Metric } from '../types';

export const ResultsSection: React.FC = () => {
  const metrics: Metric[] = [
    { id: '1', value: '45%', label: 'Reduction in Admin Time' },
    { id: '2', value: '3x', label: 'Increase in Lead Response Speed' },
    { id: '3', value: '24/7', label: 'System Uptime & Availability' },
  ];

  return (
    <section id="results" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <AnimationWrapper key={metric.id} delay={index * 150} type="scale">
              <div className="text-center">
                <div className="text-5xl font-bold text-black mb-2">{metric.value}</div>
                <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">{metric.label}</div>
              </div>
            </AnimationWrapper>
          ))}
        </div>

      </div>
    </section>
  );
};