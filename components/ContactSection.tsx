import React, { useEffect } from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Icons } from './Icons';

export const ContactSection: React.FC = () => {
  useEffect(() => {
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
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <AnimationWrapper type="slide">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Automate?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form to contact us today! We can evaluate your current processes and show you where we can save you time and money.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mr-4 flex-shrink-0 text-black">
                     <Icons.MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">Kalamazoo, Michigan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mr-4 flex-shrink-0 text-black">
                     <Icons.Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:2693994990" className="hover:text-black transition-colors">(269) 399-4990</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper type="fade" delay={200}>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
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
      </div>
    </section>
  );
};