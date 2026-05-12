import React from 'react';
import { Icons } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            {/* Unified Logo Container: White Rectangle */}
            <div className="inline-flex items-center bg-white text-black px-4 py-2 rounded-lg mb-6 shadow-sm">
                <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow w-full h-full">
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.5.45l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.04.27.25.45.5.45h4c.25 0 .46-.18.5-.45l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                    </svg>
                </div>
                <span className="font-sans font-bold text-lg tracking-tight uppercase leading-none ml-3">AI Rev Labs</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automating revenue engines for service businesses. Save time, capture leads, and grow effortlessly.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Smart Website Builds</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Booking Calendar</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">CRM</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Virtual Assistant</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Chatbot</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Reputation Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Local SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Lead Reactivation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Email & SMS Campaigns</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Planner</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Invoicing & Payments</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Documents & Contracts</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Missed Call Text Back</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Workflow Automations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://app.airevlabs.com" className="hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Icons.Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Icons.Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Icons.Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-xs">
              Kalamazoo, Michigan
            </p>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AI Rev Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};