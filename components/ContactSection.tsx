import React, { useState } from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Icons } from './Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Consultation',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      // TODO: Connect to backend or email service here
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <AnimationWrapper type="slide">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Automate?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Schedule a free discovery call. We'll audit your current processes and show you exactly where we can save you time and money.
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
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper type="fade" delay={200}>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Icons.Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h3>
                  <p className="text-gray-600">We'll be in touch within 24 hours to schedule your consultation.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-black font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                        placeholder="Your Business Ltd."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="Consultation">General Consultation</option>
                      <option value="Voice AI">AI Voice Agents</option>
                      <option value="Website">Smart Website Build</option>
                      <option value="SEO">SEO & Reputation</option>
                      <option value="Reactivation">Database Reactivation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="Tell us about your current challenges..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-black text-white rounded-lg font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      'Get Your Free Consultation'
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};