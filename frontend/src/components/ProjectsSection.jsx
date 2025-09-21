import React, { useState } from 'react';
import { ExternalLink, Github, Filter, ChevronRight } from 'lucide-react';
import { projects } from '../mock';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Showcasing impactful data analytics projects that transformed business operations and drove strategic decisions
            </p>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === category
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Filter size={16} />
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                {/* Project Header */}
                <div className="p-8">
                  {/* Project Image/Visual */}
                  <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3NTg0NDk1ODd8MA&ixlib=rb-4.1.0&q=85"
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    {/* Category Badge */}
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.description}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ChevronRight size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs font-medium"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Actions */}
                    <div className="flex gap-4 pt-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <ExternalLink size={16} />
                        View Details
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <Github size={16} />
                        Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-slate-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Interested in seeing more of my work?
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105" style={{ fontFamily: 'Inter, sans-serif' }}>
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
