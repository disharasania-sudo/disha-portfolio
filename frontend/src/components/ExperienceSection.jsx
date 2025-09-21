import React from 'react';
import { Calendar, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { experience } from '../mock';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              A proven track record of delivering data-driven solutions and strategic insights across diverse industries
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200 rounded-full"></div>

            {experience.map((job, index) => (
              <div key={job.id} className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content Card */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Company Header */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-6`}>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {job.company}
                    </h3>
                    <h4 className="text-lg font-semibold text-emerald-600 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {job.position}
                    </h4>
                    
                    <div className={`flex flex-col sm:flex-row gap-4 text-sm text-slate-600 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>{job.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-lg mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {job.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <CheckCircle size={20} className="text-emerald-600" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <ArrowRight size={16} className="text-emerald-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-slate-800 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Technologies & Tools:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>7+</div>
              <div className="text-slate-600 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Years Total Experience</div>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>50+</div>
              <div className="text-slate-600 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Projects Completed</div>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>2</div>
              <div className="text-slate-600 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Major Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
