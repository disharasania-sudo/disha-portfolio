import React from 'react';
import { MapPin, Award, Users, TrendingUp } from 'lucide-react';
import { personalInfo, education, certifications } from '../mock';

const AboutSection = () => {
  const stats = [
    { icon: TrendingUp, label: "Years Experience", value: "3+" },
    { icon: Users, label: "Projects Completed", value: "50+" },
    { icon: Award, label: "Certifications", value: "1+" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              About Me
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image and Stats */}
            <div className="space-y-8">
              {/* Professional Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGFuYWx5c3R8ZW58MHx8fHwxNzU4NDU2ODI4fDA&ixlib=rb-4.1.0&q=85"
                    alt="Professional workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} />
                    <span className="font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                      <stat.icon size={24} className="text-emerald-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.value}</div>
                    <div className="text-sm text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Turning Data Into Strategic Business Value
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {personalInfo.summary}
                </p>
                <p className="text-slate-600 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  With expertise spanning from ETL processes to stakeholder presentations, I bridge the gap between complex data and actionable business strategies. My experience mentoring teams and optimizing processes has consistently delivered measurable results for organizations.
                </p>
              </div>

              {/* Education */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Award size={20} className="text-emerald-600" />
                  Education
                </h4>
                <div>
                  <h5 className="font-semibold text-slate-800" style={{ fontFamily: 'Inter, sans-serif' }}>{education.degree}</h5>
                  <p className="text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>{education.institution}, {education.location}</p>
                  <p className="text-sm text-slate-500" style={{ fontFamily: 'Inter, sans-serif' }}>Graduated: {education.year}</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Award size={20} className="text-emerald-600" />
                  Certifications
                </h4>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold text-slate-800" style={{ fontFamily: 'Inter, sans-serif' }}>{cert.name}</h5>
                      <p className="text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>{cert.issuer}</p>
                    </div>
                    <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
