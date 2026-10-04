import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const CountUpInline = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <motion.span
      onViewportEnter={() => {
        if (!hasStarted) {
          setHasStarted(true);
          let start = 0;
          const endVal = parseInt(end);
          if(isNaN(endVal)) {
            setCount(end);
            return;
          }
          const totalFrames = Math.round(duration * 60);
          let frame = 0;
          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const current = Math.round(endVal * progress);
            setCount(current);
            if (frame === totalFrames) {
              clearInterval(counter);
              setCount(endVal);
            }
          }, 1000 / 60);
        }
      }}
    >
      {count}{suffix}
    </motion.span>
  );
};

const About = () => {
  const { title, description, stats } = portfolioData.about;

  return (
    <section id="about" className="section-padding bg-white/[0.02]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pill mb-6">ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-lg">
            {description}
          </p>
          <a href="#contact" className="outline-btn inline-flex">
            Learn More About Me
          </a>
        </motion.div>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col justify-center border-l-4 border-l-primary"
            >
              <div className="text-4xl font-bold text-white mb-2 flex items-center">
                <CountUpInline end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
