import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { socials } = portfolioData.hero;
  
  return (
    <section id="contact" className="section-padding bg-white/[0.02]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pill mb-6">LET'S WORK TOGETHER</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Have a project in mind?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-lg max-w-lg">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's create something amazing together!
          </p>
          <a href="mailto:ibrahemk09zobj@gmail.com" className="gradient-btn inline-flex">
            Get in Touch ↗
          </a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 lg:pl-12"
        >
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {socials.filter(s => ['LinkedIn', 'GitHub'].includes(s.name)).map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-primary hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <a href="mailto:ibrahemk09zobj@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group w-fit">
              <span className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              ibrahemk09zobj@gmail.com
            </a>
            
            <a href="tel:01273446781" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group w-fit">
              <span className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              01273446781
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 mt-2">
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-2">Languages</h3>
            <p className="text-gray-300 text-sm">Arabic <span className="text-gray-500">(Native)</span>, English <span className="text-gray-500">(Intermediate)</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
