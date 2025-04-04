import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
const handleGetQuote = () => {
window.open('https://wa.me/+256767896471', '_blank');
  };


  return (
    <section id="home" className="pt-20 lg:pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzQxNTEiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2NEgzNnpNNDAgMzBoNHY0aC00ek00MCAzNGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
      
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
     <div className="lg:w-1/2 flex justify-center">
  <div className="relative group mt-6">  {/* Added margin-top here */}
    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
    <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
      <img
        src="/portfolio-image.png"
        alt="Atuhaire Joel"
        className="w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:rotate-3 group-hover:scale-110"
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
