import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding">
      <div className="text-center mb-16">
        <span className="pill mb-4">MY JOURNEY</span>
        <h2 className="text-3xl md:text-4xl font-bold">Experience & Education</h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>

        <div className="space-y-12">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-1.5 border-4 border-background z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className="glass-card p-6 relative hover:border-primary/30 transition-colors">
                  <span className="text-sm font-semibold text-primary mb-2 block">{item.date}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <h4 className="text-md text-gray-300 mb-4">{item.company}</h4>
                  
                  <ul className={`space-y-2 text-sm text-gray-400 ${idx % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 max-w-[90%]">
                        <span className={`text-primary mt-1 ${idx % 2 === 0 ? '' : 'md:hidden'}`}>▹</span>
                        <span className="text-left">{point}</span>
                        <span className={`text-primary mt-1 hidden ${idx % 2 === 0 ? '' : 'md:inline-block'}`}>◃</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
