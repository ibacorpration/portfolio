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
          className="order-2 lg:order-1"
        >
          <span className="pill mb-6">AI ENGINEER</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="gradient-text">{name}</span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10 flex items-center">
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
          
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="gradient-btn w-full sm:w-auto justify-center">View My Work ↗</a>
            <a href="https://flowcv.com/resume/632mgn0l0jsd" target="_blank" rel="noreferrer" className="outline-btn w-full sm:w-auto justify-center">
              Download CV <FiDownload />
            </a>
          </div>

          <div>
            <p className="text-xs md:text-sm text-gray-500 font-semibold mb-4 tracking-wider uppercase">Technologies I work with</p>
            <div className="flex flex-wrap gap-4 text-2xl md:text-3xl">
              {technologies.map((Tech, i) => (
                <Tech.icon key={i} className={`hover:-translate-y-1 transition-transform cursor-pointer ${Tech.color}`} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Redesigned Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:justify-self-end w-full max-w-lg mx-auto lg:mx-0 flex flex-col items-center order-1 lg:order-2"
        >
          {/* Main Photo with gradient mask */}
          <div className="relative w-full aspect-square max-w-[300px] md:max-w-[380px] mb-8 group">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[60px] md:blur-[80px] -z-10 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-700"></div>
            
            {/* Image Container with Mask */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <div 
                className="w-full h-full"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)'
                }}
              >
                <img 
                  src="/me.jpg" 
                  alt={name} 
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700" 
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Ibrahem&background=0D8ABC&color=fff&size=512&rounded=true' }} 
                />
              </div>
            </motion.div>
          </div>

          {/* Floating Social Squares */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 z-10 w-full max-w-[350px] md:max-w-[400px]">
            {socials.map((social, i) => (
              <motion.a 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-gradient-to-tr hover:from-secondary hover:to-primary hover:border-transparent hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:-translate-y-2 transition-all duration-300 group/social"
                title={social.name}
              >
                <social.icon className="text-xl md:text-2xl text-gray-400 group-hover/social:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
