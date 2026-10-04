import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding bg-white/[0.02]">
      <div className="text-center mb-16">
        <span className="pill mb-4">FEATURED PROJECTS</span>
        <h2 className="text-3xl md:text-4xl font-bold">Some of My Recent Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 flex flex-col h-full overflow-hidden"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute top-4 left-4 z-10 text-white/50 font-bold text-lg">
                {project.id}
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cardbg to-transparent"></div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="text-primary text-sm font-semibold flex items-center gap-2 hover:text-white transition-colors mt-auto w-fit"
              >
                View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Carousel dots (decorative) */}
      <div className="flex justify-center gap-2 mt-12">
        {projects.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-white/20'}`}></div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
