import React from 'react';
import { Code, Database, BarChart3, Brain, Users } from 'lucide-react';
import { skills } from '../mock';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Languages",
      icon: Code,
      color: "emerald",
      skills: skills.technical.filter(skill => skill.category === "Programming")
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "blue",
      skills: skills.technical.filter(skill => skill.category === "Visualization")
    },
    {
      title: "Database Management",
      icon: Database,
      color: "purple",
      skills: skills.technical.filter(skill => skill.category === "Database")
    },
    {
      title: "Analytics & BI",
      icon: Brain,
      color: "indigo",
      skills: skills.technical.filter(skill => skill.category === "Analytics" || skill.category === "Data Engineering")
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-200"
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Leveraging cutting-edge technologies and methodologies to transform data into strategic business insights
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]}`}>
                  <category.icon size={24} />
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-xl mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Core Competencies
              </h3>
              <p className="text-slate-300 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Essential skills that drive successful project outcomes and team collaboration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.soft.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors duration-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-200 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
