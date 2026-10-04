import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { SiPython, SiTensorflow, SiOpencv, SiFastapi, SiDocker, SiReact } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  const [passionIndex, setPassionIndex] = useState(0);
  const { name, title, passions, summary, socials, location } = portfolioData.hero;

  useEffect(() => {
    const interval = setInterval(() => {
      setPassionIndex((prev) => (prev + 1) % passions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [passions.length]);

  const technologies = [
    { icon: SiPython, color: 'text-blue-400' },
    { icon: SiTensorflow, color: 'text-orange-400' },
    { icon: SiOpencv, color: 'text-green-400' },
    { icon: SiFastapi, color: 'text-teal-400' },
    { icon: SiDocker, color: 'text-blue-500' },
    { icon: SiReact, color: 'text-cyan-400' }
  ];

  return (
    <section id="home" className="section-padding pt-32 min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="pill mb-6">AI ENGINEER</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="gradient-text">{name}</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold mb-6 h-10 flex items-center">
            <span className="mr-2">I build</span>
            <motion.span
              key={passionIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-primary"
            >
              {passions[passionIndex]}.
            </motion.span>
          </div>
          
          <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="gradient-btn">View My Work ↗</a>
            <a href="/CV.pdf" target="_blank" rel="noreferrer" className="outline-btn">
              Download CV <FiDownload />
            </a>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-semibold mb-4 tracking-wider uppercase">Technologies I work with</p>
            <div className="flex gap-4 text-3xl">
              {technologies.map((Tech, i) => (
                <Tech.icon key={i} className={`hover:-translate-y-1 transition-transform cursor-pointer ${Tech.color}`} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:justify-self-end w-full max-w-md mx-auto lg:mx-0"
        >
          <div className="glass-card p-6 relative overflow-hidden group">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/40 rounded-full blur-[60px] -z-10"></div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex flex-col items-center mb-8"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 mb-4 bg-gray-800">
                <img src="/me.jpg" alt={name} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Ibrahem&background=0D8ABC&color=fff&size=128' }} />
              </div>
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <p className="text-primary font-medium">{title}</p>
              <p className="text-gray-400 text-sm">{location}</p>
            </motion.div>

            {/* Social Cards Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:-translate-y-1 transition-all group/card"
                >
                  <social.icon className="text-2xl text-gray-400 group-hover/card:text-primary transition-colors" />
                  <span className="text-xs text-gray-400 group-hover/card:text-white text-center break-all px-1 max-w-full overflow-hidden text-ellipsis whitespace-nowrap" title={social.name}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Floating code snippet */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-6 -bottom-6 md:-right-12 glass-card p-4 hidden md:block bg-[#1a1b3b]/95 backdrop-blur-xl shadow-2xl z-20"
          >
            <div className="flex gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-xs font-mono text-gray-300">
<span className="text-purple-400">const</span> engineer <span className="text-pink-400">=</span> {'{'}
  name: <span className="text-green-300">"{name}"</span>,
  skills: [<span className="text-green-300">"Python"</span>, <span className="text-green-300">"YOLO"</span>, <span className="text-green-300">"RAG"</span>],
  passion: <span className="text-green-300">"Building AI systems"</span>
{'}'};
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
