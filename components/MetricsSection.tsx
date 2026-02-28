import React, { useEffect, useRef, useState } from 'react';
import { Metric } from '../types';

export const MetricsSection: React.FC = () => {
  const metrics: Metric[] = [
    { id: '1', value: '45%', label: 'Reduction in Admin Time' },
    { id: '2', value: '3x', label: 'Increase in Lead Response Speed' },
    { id: '3', value: '24/7', label: 'System Uptime & Availability' },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We set isVisible true when it enters, false when it leaves
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gray-50 relative overflow-hidden min-h-[400px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={metric.id} 
              className={`text-center transition-all duration-1000 ease-out transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-90'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
            >
              <div className="bg-white p-10 rounded-3xl border-2 border-black shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-6xl font-black text-black mb-4 tracking-tighter">
                  {metric.value}
                </div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};