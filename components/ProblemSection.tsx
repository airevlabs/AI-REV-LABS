import React from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Icons } from './Icons';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Icons.Clock className="w-8 h-8 text-gray-600" />,
      title: "Manual Follow-up Delays",
      description: "Leads go cold within minutes. If you're manually responding, you're losing potential revenue every single day."
    },
    {
      icon: <Icons.Database className="w-8 h-8 text-gray-600" />,
      title: "Disorganized Data",
      description: "Spreadsheets and sticky notes don't scale. Valuable customer data gets lost in the noise of daily operations."
    },
    {
      icon: <Icons.Phone className="w-8 h-8 text-gray-600" />,
      title: "Missed Calls",
      description: "Every missed call is a missed opportunity. 62% of calls to small businesses go unanswered."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper type="fade">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Growing Pains Are Real</h2>
            <p className="text-xl text-gray-600">
              Running a service business is hard enough without the chaos of manual admin work.
              Most small-medium sized businesses face the same critical bottlenecks that stifle growth.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-10">
          {problems.map((problem, index) => (
            <AnimationWrapper key={index} delay={index * 150} type="slide">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};