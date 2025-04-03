import React from 'react';
import { Code, Palette, WrenchIcon, Network } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Design & Development',
      description: 'Custom websites built with modern technologies. Specializing in eCommerce, portfolio, and corporate sites.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Graphics Design',
      description: 'Creative design solutions including logos, posters, and social media visuals that capture your brand essence.',
    },
    {
      icon: <WrenchIcon className="w-8 h-8" />,
      title: 'IT Support & Troubleshooting',
      description: 'Professional IT support services to keep your systems running smoothly and efficiently.',
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'System Administration',
      description: 'Expert system administration and networking solutions for businesses of all sizes.',
    },
  ];

  const handleGetQuote = () => {
    window.open('https://wa.me/your-whatsapp-number', '_blank');
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-16">
          Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-indigo-600 dark:text-indigo-400 mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <button
                  onClick={handleGetQuote}
                  className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Request a Free Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;