import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { FiLayers, FiAward, FiCpu, FiTarget, FiMapPin, FiBookOpen, FiZap, FiArrowRight, FiDownload } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const statIcons = [FiLayers, FiAward, FiCpu, FiTarget];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const end = parseInt(value, 10);
  const from = end > 1000 ? end - 15 : 0;
  const [n, setN] = useState(from);

  useEffect(() => {
    if (!inView || isNaN(end)) return;
    const c = animate(from, end, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, end, from]);

  return (
    <span ref={ref}>
      {isNaN(end) ? value : n}
      <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">{suffix}</span>
    </span>
  );
};

const highlights = [
  { icon: FiMapPin, label: 'Based in', value: 'Cairo, Egypt' },
  { icon: FiBookOpen, label: 'Education', value: 'B.Sc. Computer Science' },
  { icon: FiZap, label: 'Focus', value: 'Computer Vision & GenAI' },
];

const About = () => {
  const { title, description, stats } = portfolioData.about;

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="pill mb-6">ABOUT ME</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            I'm passionate about building{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              AI solutions
            </span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-lg">{description}</p>

          <div className="space-y-3 mb-10">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="group flex items-center gap-4 w-fit"
              >
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-cyan-300/50">
                  <h.icon />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gray-500">{h.label}</span>
                  <span className="text-gray-200 font-medium">{h.value}</span>
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a id="about-contact-btn" href="#contact" className="gradient-btn inline-flex items-center gap-2 group">
              Let's Talk <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              id="about-cv-btn"
              href="https://flowcv.com/resume/632mgn0l0jsd"
              target="_blank"
              rel="noreferrer"
              className="outline-btn inline-flex items-center gap-2"
            >
              Resume <FiDownload />
            </a>
          </div>
        </motion.div>

        {/* Right - Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative rounded-3xl p-[1px] bg-white/10 hover:bg-gradient-to-br hover:from-fuchsia-500/80 hover:to-cyan-400/80 transition-colors duration-500"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-[#0c0c16] p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="pointer-events-none absolute -top-20 -right-20 w-44 h-44 rounded-full bg-fuchsia-500/0 group-hover:bg-fuchsia-500/20 blur-3xl transition-all duration-500" />
                  <span className="pointer-events-none absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/15 blur-3xl transition-all duration-500" />

                  <div className="relative mb-8">
                    <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center text-white text-lg shadow-[0_8px_25px_-8px_rgba(217,70,239,0.7)] transition-transform duration-500 group-hover:rotate-[12deg] group-hover:scale-110">
                      <Icon />
                    </span>
                  </div>

                  <div className="relative text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="relative text-gray-400 text-sm leading-snug">{stat.label}</p>

                  <span className="absolute left-6 right-6 bottom-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
