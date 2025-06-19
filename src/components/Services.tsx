import React from 'react';
import { MessageSquare, Zap, Shield, Users, BarChart3, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Live Chat Support',
      description: 'Real-time messaging with advanced chatbots and human agents for instant customer assistance.',
      features: ['AI-powered responses', 'Multi-language support', 'File sharing'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Headphones,
      title: 'Voice Support',
      description: 'Crystal-clear voice communication with intelligent call routing and recording capabilities.',
      features: ['Call recording', 'Smart routing', 'Quality monitoring'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with end-to-end encryption and compliance certifications.',
      features: ['End-to-end encryption', 'GDPR compliant', 'SOC 2 certified'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights and reporting to optimize your customer service performance.',
      features: ['Real-time analytics', 'Custom reports', 'Performance metrics'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for your support team with shared inboxes and task management.',
      features: ['Shared inboxes', 'Task assignments', 'Team chat'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Intelligent automation to streamline workflows and reduce response times significantly.',
      features: ['Auto-responses', 'Workflow automation', 'Smart routing'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Service Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to deliver exceptional customer service, powered by cutting-edge technology and intuitive design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-200/50 dark:border-gray-700/50"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 group-hover:animate-pulse`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;