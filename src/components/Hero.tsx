import React from 'react';
import { ArrowRight } from 'lucide-react';
import myImage from '../images/portfolio-image.png'; // Import your local image

const Hero = () => {
  const handleGetQuote = () => {
    window.open('https://wa.me/your-whatsapp-number', '_blank');
  };

  return (
    <section id="home" className="pt-20 lg:pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse" />
              <h1 className="relative text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Atuhaire Joel</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              A passionate full-stack developer and IT professional specializing in web development,
              graphics design, and system administration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGetQuote}
                className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#projects"
                className="group px-8 py-3 bg-white dark:bg-gray-800 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image with 3D Pop-Out Effect */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Glowing Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              {/* Image Wrapper */}
              <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-2">
                <img
                  src={myImage}
                  alt="Atuhaire Joel"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg shadow-indigo-500/50"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
