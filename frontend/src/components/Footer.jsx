import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:transform hover:-translate-x-1/2 hover:-translate-y-1"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* About Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {personalInfo.name}
                </h3>
                <p className="text-slate-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Transforming complex data into strategic business insights. Specializing in analytics, visualization, and data-driven decision making.
                </p>
              </div>
              
              <div>
                <p className="text-emerald-400 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {personalInfo.title}
                </p>
                <p className="text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
                
                <div>
                  <p className="text-slate-400 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Phone
                  </p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {personalInfo.phone}
                  </a>
                </div>

                <div>
                  <p className="text-slate-400 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    LinkedIn
                  </p>
                  <a
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm text-center md:text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Made with</span>
                <Heart size={16} className="text-emerald-400" fill="currentColor" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>and passion for data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
