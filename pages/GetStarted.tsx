import React, { useEffect } from 'react';
import { AnimationWrapper } from '../components/AnimationWrapper';

export const GetStarted: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement('script');
    script.src = "https://links.airevlabs.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50 min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper type="slide">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Automate?</h2>
            <p className="text-xl text-gray-600">
              Fill out the form to contact us today! We can evaluate your current processes and show you where we can save you time and money.
            </p>
          </div>
        </AnimationWrapper>
        
        <AnimationWrapper type="slide" delay={200}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-gray-200/50">
            <iframe
                src="https://links.airevlabs.com/widget/form/ZnnkJe78BvZKRPwmiFY2"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px', minHeight: '600px' }}
                id="inline-ZnnkJe78BvZKRPwmiFY2" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact"
                data-height="1157"
                data-layout-iframe-id="inline-ZnnkJe78BvZKRPwmiFY2"
                data-form-id="ZnnkJe78BvZKRPwmiFY2"
                title="Contact"
            />
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};
