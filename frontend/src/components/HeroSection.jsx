import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { personalInfo } from '../mock';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5c3R8ZW58MHx8fHwxNzU4NDU2ODI4fDA&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-lg md:text-xl mb-6 text-slate-200 animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.2s' }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.4s' }}>
            {personalInfo.name}
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-emerald-400 animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.6s' }}>
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-slate-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.8s' }}>
            {personalInfo.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <button 
              onClick={scrollToAbout}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View My Work
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 rounded-full border-2 border-white/50 hover:border-white transition-colors duration-300"
          >
            <ChevronDown size={24} className="text-white" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
