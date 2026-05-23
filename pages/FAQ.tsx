import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from '../components/AnimationWrapper';
import { Icons } from '../components/Icons';

interface FAQItem {
  id: string;
  category: 'general' | 'services' | 'eligibility' | 'process';
  question: string;
  answer: React.ReactNode;
}

export const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'general' | 'services' | 'eligibility' | 'process'>('all');
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'general', label: 'General & Platform' },
    { value: 'services', label: 'Features & Automation' },
    { value: 'eligibility', label: 'Business Eligibility' },
    { value: 'process', label: 'Process & Onboarding' },
  ] as const;

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'general',
      question: 'What is AI Rev Labs and how does it help service businesses?',
      answer: (
        <div className="space-y-3">
          <p>
            <strong>AI Rev Labs</strong> is a premium, comprehensive software-as-a-service (SaaS) and automation platform engineered specifically to streamline operations, save valuable administrative time, and boost revenue for service-based businesses.
          </p>
          <p>
            We combine high-converting, professional digital presences (like Smart Websites and Local SEO) with automated backend tools (such as AI Phone Receptionists, Missed Call Text Back, and automated CRM pipelines). By capturing every customer touchpoint immediately, we ensure you never miss a lead and grow your revenue effortlessly.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-2',
      category: 'general',
      question: 'How does the setup process work? Do I need to be tech-savvy?',
      answer: (
        <div className="space-y-3">
          <p>
            <strong>Not at all!</strong> We handle the heavy lifting for you. Backed by over 20 years of expertise in web construction, networking, and IT infrastructure, our expert team sets up, designs, and configures your systems, integrations, workflows, and AI assistants.
          </p>
          <p>
            We deliver a ready-to-use, turn-key system and a simple, central dashboard so you can easily view your leads, track conversations, and manage bookings. You focus on running your business; we handle the code.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-3',
      category: 'general',
      question: 'How long does it take to get my new systems set up and live?',
      answer: (
        <div className="space-y-3">
          <p>
            Setup timelines vary based on the complexity and scope of the services you select:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Simple Configurations:</strong> Standard solutions (like booking calendars and AI chatbots) can be set up in just a <strong>few days</strong>.
            </li>
            <li>
              <strong>Phone Registration Features:</strong> Features requiring dedicated phone numbers (such as <em>Missed Call Text Back</em> or <em>AI Phone Receptionists</em>) take longer because carriers require official **A2P 10DLC registration** to verify your business before sending SMS. This registration process is governed by the mobile carriers.
            </li>
            <li>
              <strong>Major Builds:</strong> A complete Custom Automation suite or a full, premium Smart Website build typically takes <strong>one to two weeks</strong>.
            </li>
          </ul>
          <p className="italic text-gray-500 text-sm mt-2">
            *Note: The setup timeline is highly dependent on client response speeds. The quicker you provide your basic business details, branding assets, and answers to our setup queries, the faster we can get your systems live!
          </p>
        </div>
      ),
    },
    {
      id: 'faq-4',
      category: 'services',
      question: 'What is the difference between a traditional website and an AI Rev Labs "Smart Website"?',
      answer: (
        <div className="space-y-4">
          <p>
            A traditional website acts like a static digital brochure. It looks professional but expects visitors to actively hunt for contact info, call during business hours, or wait hours for an email reply.
          </p>
          <p>
            An AI Rev Labs <strong>Smart Website</strong> is an active, fully integrated sales engine. Depending on your package, your site can be integrated with:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="font-bold text-black block mb-1">Traditional Website</span>
              <span className="text-gray-600 text-sm">Static info, manual contact forms, slow lead response times, and disconnected from your calendars.</span>
            </div>
            <div className="bg-black text-white p-3 rounded-xl">
              <span className="font-bold text-white block mb-1">Smart Website</span>
              <span className="text-gray-300 text-sm">Instant booking widgets, automatic missed-call text-back, real-time CRM syncing, and conversational AI chatbots.</span>
            </div>
          </div>
          <p>
            The moment a visitor drops their info, our systems engage them immediately, schedule bookings, and automate follow-ups. It doesn't just display information; it actively captures and converts leads.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-5',
      category: 'services',
      question: 'What is the "Missed Call Text Back" feature and how does it secure revenue?',
      answer: (
        <div className="space-y-3">
          <p>
            When a potential customer calls your business and you are unable to answer (whether you're on a job, with another client, or closed for the day), our platform instantly texts them back within seconds.
          </p>
          <p>
            This immediate automated response engages the caller, asks how we can assist them, and provides a direct link to your online booking calendar. This secures the hot lead immediately, preventing them from calling your competitors.
          </p>
          <p className="bg-gray-50 p-3 rounded-xl border-l-4 border-black text-sm text-gray-600">
            <strong>Important Requirement:</strong> To enable this feature, you will need to register a dedicated business phone number and SMS service through our platform. This ensures full regulatory compliance (A2P 10DLC verification) and maximum text message delivery rates.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-6',
      category: 'services',
      question: 'What is Reputation Management and how does it help my search rankings?',
      answer: (
        <div className="space-y-3">
          <p>
            <strong>Reputation Management</strong> automates the review capture process to build instant online trust. Immediately after a service is completed, our system automatically triggers friendly SMS or email review invitations to your satisfied clients.
          </p>
          <p>
            Positive ratings are routed directly to major review platforms like Google and Facebook, boosting your brand credibility. Crucially, fresh and consistent positive Google reviews are a primary ranking signal for Local SEO. This directly makes your business more visible to new searchers in your local area, driving a steady stream of organic traffic.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-7',
      category: 'services',
      question: 'What is the difference between the AI Phone Receptionist and the AI Chatbot?',
      answer: (
        <div className="space-y-3">
          <p>
            Both are intelligent automated assistants, but they serve different communication channels:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>AI Phone Receptionist:</strong> A voice-based AI assistant that answers incoming calls, speaks politely and fluidly, resolves common inquiries (such as business hours, pricing, or locations), and books appointments directly into your CRM calendar 24/7.
            </li>
            <li>
              <strong>AI Chatbot:</strong> A text-based interactive chat widget placed on your website or social media channels. It engages web visitors instantly, captures lead details, schedules bookings, and alerts you of hot sales opportunities.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'faq-8',
      category: 'eligibility',
      question: 'What types of service-based businesses does AI Rev Labs serve?',
      answer: (
        <div className="space-y-3">
          <p>
            We proudly design automation engines and digital structures for a massive array of service-based businesses, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 mt-2">
            <div>
              <span className="font-bold text-black block text-base mb-1">Home Services</span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Plumbers & HVAC Techs</li>
                <li>Electricians & Roofers</li>
                <li>Painters & Handymen</li>
                <li>Landscapers & Tree Experts</li>
                <li>Cleaners & Pest Control</li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-black block text-base mb-1">Medical & Wellness</span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dentists</li>
                <li>Chiropractors</li>
                <li>Therapists</li>
                <li>Diagnostic Centers</li>
                <li>Counseling practices</li>
              </ul>
            </div>
            <div className="mt-2 sm:mt-0">
              <span className="font-bold text-black block text-base mb-1">Professional Services</span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Real Estate Agents & Lawyers</li>
                <li>Accountants & Bookkeepers</li>
                <li>Consultants & Coaches</li>
                <li>IT & Managed Services</li>
              </ul>
            </div>
            <div className="mt-2 sm:mt-0">
              <span className="font-bold text-black block text-base mb-1">Automotive & Logistics</span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Auto Repair & Mobile Detailing</li>
                <li>Towing & Rental Services</li>
                <li>Moving & Junk Removal</li>
                <li>Photographers & Videographers</li>
              </ul>
            </div>
          </div>
          <p className="font-bold text-black mt-3">And much more!</p>
        </div>
      ),
    },
    {
      id: 'faq-9',
      category: 'eligibility',
      question: 'Do you serve businesses that are not service-based?',
      answer: (
        <div className="space-y-3">
          <p>
            <strong>Yes!</strong> While our core tools are optimized for service workflows, we are highly adaptable. We are completely willing to work with other business models—including restaurants, retail shops, e-commerce stores, software products, etc.—to implement custom workflows, advanced chatbots, and modern lead funnels.
          </p>
          <p>
            Please <Link to="/get-started" className="font-bold text-black underline hover:text-gray-700 transition-colors">contact us</Link> to discuss your unique business requirements and find out how we can design a custom setup that helps optimize your operations!
          </p>
        </div>
      ),
    },
    {
      id: 'faq-10',
      category: 'eligibility',
      question: 'Are there any types of businesses that AI Rev Labs does not serve?',
      answer: (
        <div className="space-y-3">
          <p>
            <strong>Yes.</strong> To ensure the integrity of our network or align with our core ethical standards, we do not partner with or build solutions for businesses in certain highly regulated, restricted, or immoral industries. This includes, but is not limited to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm">
            <li>Alcohol production, distribution, or sales</li>
            <li>Recreational cannabis, narcotics, or drug paraphernalia</li>
            <li>Gambling, sports betting, and casino applications</li>
            <li>Adult entertainment and pornography</li>
            <li>Financial institutions or credit brokers</li>
            <li>Any operations promoting hate, violence, or discrimination</li>
          </ul>
          <p>
            We reserve the absolute right to deny service or terminate accounts for any business that contradicts our moral beliefs or violates our ethical standards.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-11',
      category: 'process',
      question: 'How do I get started with AI Rev Labs, and what does the process entail?',
      answer: (
        <div className="space-y-4">
          <p>
            Getting started is simple, structured, and completely streamlined:
          </p>
          <ol className="relative border-l border-gray-200 ml-3 space-y-6">
            <li className="mb-4 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black text-white rounded-full -left-3 ring-8 ring-white text-xs font-bold">1</span>
              <h4 className="font-bold text-black mb-1">Submit Your Inquiry</h4>
              <p className="text-gray-600 text-sm">
                Head over to our <Link to="/get-started" className="font-bold text-black underline hover:text-gray-700">Get Started</Link> page and fill out our quick contact form to share your business goals.
              </p>
            </li>
            <li className="mb-4 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black text-white rounded-full -left-3 ring-8 ring-white text-xs font-bold">2</span>
              <h4 className="font-bold text-black mb-1">Discovery Consultation</h4>
              <p className="text-gray-600 text-sm">
                We hop on a brief call to analyze your current needs and outline high-impact opportunities.
              </p>
            </li>
            <li className="mb-4 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black text-white rounded-full -left-3 ring-8 ring-white text-xs font-bold">3</span>
              <h4 className="font-bold text-black mb-1">Strategic Proposal</h4>
              <p className="text-gray-600 text-sm">
                We map out a tailored proposal outlining the exact services, web adjustments, and automations suited for your operations.
              </p>
            </li>
            <li className="mb-4 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black text-white rounded-full -left-3 ring-8 ring-white text-xs font-bold">4</span>
              <h4 className="font-bold text-black mb-1">Onboarding & Configuration</h4>
              <p className="text-gray-600 text-sm">
                Once approved, we collect your branding assets and basic info. Our development team then builds your setup.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black text-white rounded-full -left-3 ring-8 ring-white text-xs font-bold">5</span>
              <h4 className="font-bold text-black mb-1">Launch & Handover</h4>
              <p className="text-gray-600 text-sm">
                We go live! We test every connection and provide continuous optimizations to ensure your revenue engine runs smoothly.
              </p>
            </li>
          </ol>
        </div>
      ),
    },
  ];

  // Filtering logic
  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.id.toLowerCase().includes(searchQuery.toLowerCase()); // or content check if needed
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 font-sans overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-dot-pattern border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <AnimationWrapper type="fade">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 mb-6 shadow-sm">
                <span className="w-2.5 h-2.5 bg-black rounded-full mr-2.5 animate-pulse"></span>
                Support Center
              </div>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={100}>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Frequently Asked <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
                  Questions
                </span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper type="slide" delay={200}>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                Find clear, detailed answers about how AI Rev Labs builds, integrates, and automates your business revenue engines.
              </p>
            </AnimationWrapper>

            {/* Interactive Search Bar */}
            <AnimationWrapper type="slide" delay={300}>
              <div className="mt-8 max-w-xl mx-auto relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                  <Icons.Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-md shadow-gray-100/50"
                  id="faq-search-input"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-black transition-colors"
                  >
                    <Icons.X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </AnimationWrapper>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-50 pointer-events-none -z-10 animate-pulse-slow"></div>
      </section>

      {/* Main content grid */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category tabs */}
        <AnimationWrapper type="fade">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setOpenId(null);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                  selectedCategory === cat.value
                    ? 'bg-black border-black text-white shadow-lg'
                    : 'bg-white border-gray-200 text-gray-600 hover:text-black hover:border-gray-300'
                }`}
                id={`faq-tab-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimationWrapper>

        {/* FAQs Accordion list */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <AnimationWrapper key={faq.id} delay={index * 50} type="slide">
                  <div 
                    className={`bg-white rounded-2xl border transition-all duration-300 ${
                      isOpen 
                        ? 'border-gray-900 shadow-xl shadow-gray-100/50' 
                        : 'border-gray-100 shadow-sm hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between group focus:outline-none"
                      id={`faq-btn-${faq.id}`}
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-gray-900 text-base sm:text-lg pr-4 group-hover:text-black transition-colors">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0">
                        <Icons.ChevronRight 
                          className={`w-5 h-5 text-gray-400 group-hover:text-black transform transition-transform duration-300 ${
                            isOpen ? 'rotate-90 text-black' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Accordion expand/collapse */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[800px] border-t border-gray-50 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="px-6 py-5 sm:px-8 sm:py-6 text-gray-600 leading-relaxed text-sm sm:text-base bg-gray-50/20">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </AnimationWrapper>
              );
            })
          ) : (
            <AnimationWrapper type="fade">
              <div className="text-center py-16 bg-gray-50/50 border border-gray-100 rounded-3xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-gray-400 mb-4">
                  <Icons.Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">No matching questions found</h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto px-4">
                  Try adjusting your search terms or selecting a different category from the tabs above.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-6 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </AnimationWrapper>
          )}
        </div>
      </section>

      {/* Modern Get Started CTA */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper type="fade">
          <div className="bg-black text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-400 text-sm sm:text-base mb-8">
                We're always happy to help. Fill out our contact form and our strategic onboarding specialists will get back to you to answer all your inquiries.
              </p>
              <Link
                to="/get-started"
                className="inline-flex items-center px-8 py-3.5 bg-white text-black rounded-full font-bold text-base hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg"
                id="faq-cta-btn"
              >
                Get Started
                <Icons.ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            {/* Subtle background overlay */}
            <div className="absolute inset-0 opacity-10 bg-dot-pattern mix-blend-overlay pointer-events-none"></div>
          </div>
        </AnimationWrapper>
      </section>
    </div>
  );
};
