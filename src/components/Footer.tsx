import React from 'react';
import { Headphones, Twitter, Linkedin as LinkedIn, Facebook, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600"></div>
      </div>

      <div className="relative">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Headphones className="w-8 h-8 text-blue-400 transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ServicePro
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transform your customer service with our AI-powered platform. Deliver exceptional support experiences that delight your customers and grow your business.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: LinkedIn, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Product</h3>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Integrations', 'API Documentation', 'Security'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Press', 'Partners', 'Blog'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Support</h3>
              <ul className="space-y-3">
                {['Help Center', 'Contact Us', 'System Status', 'Community', 'Training'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => item === 'Contact Us' ? scrollToSection('contact') : null}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest news, updates, and tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
              <div className="text-sm text-gray-400">
                © 2025 ServicePro. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;