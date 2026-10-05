import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate, useInView } from 'framer-motion';
import { FiEye, FiLayers, FiRepeat, FiDatabase, FiSearch, FiCpu, FiUploadCloud, FiTarget } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

// Real logos for tools, clean line icons for concepts
const skillIcons = {
  'Python': `${DEV}/python/python-original.svg`,
  'C++': `${DEV}/cplusplus/cplusplus-original.svg`,
  'OpenCV': `${DEV}/opencv/opencv-original.svg`,
  'TensorFlow': `${DEV}/tensorflow/tensorflow-original.svg`,
  'Keras': `${DEV}/keras/keras-original.svg`,
  'Scikit-learn': `${DEV}/scikitlearn/scikitlearn-original.svg`,
  'Docker': `${DEV}/docker/docker-original.svg`,
  'FastAPI': `${DEV}/fastapi/fastapi-original.svg`,
  'Railway': 'https://cdn.simpleicons.org/railway/ffffff',
  'GitHub': 'https://img.icons8.com/ios-glyphs/96/ffffff/github.png',
  'Kaggle': 'https://cdn.simpleicons.org/kaggle/20BEFF',
  'Colab': 'https://cdn.simpleicons.org/googlecolab/F9AB00',
  'n8n': 'https://cdn.simpleicons.org/n8n/EA4B71',
  'Hugging Face': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
  'Transformers': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
  'Roboflow': 'https://cdn.simpleicons.org/roboflow/6706CE',
  'YOLO': FiTarget,
  'Face & Emotion Recognition': FiEye,
  'Segmentation': FiLayers,
  'Transfer Learning': FiRepeat,
  'RAG': FiDatabase,
  'Semantic Search': FiSearch,
  'LLMs & AI Agents': FiCpu,
  'Model Deployment': FiUploadCloud,
};

const levelOf = (v) => (v >= 90 ? 'Expert' : v >= 85 ? 'Advanced' : v >= 80 ? 'Proficient' : 'Intermediate');

const SkillIcon = ({ name }) => {
  const [failed, setFailed] = useState(false);
  const icon = skillIcons[name];
  if (icon && typeof icon !== 'string') {
    const Icon = icon;
    return <Icon className="w-6 h-6 text-cyan-300" />;
  }
  if (!icon || failed) {
    return <span className="text-sm font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">{name.slice(0, 2)}</span>;
  }
  return <img src={icon} alt={name} onError={() => setFailed(true)} className="w-7 h-7 object-contain" />;
};

const Counter = ({ value, start }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const c = animate(0, value, { duration: 1.2, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [start, value]);
  return <>{n}</>;
};

const R = 26;
const CIRC = 2 * Math.PI * R;

const SkillTile = ({ skill, index }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group relative rounded-2xl p-[1px] bg-white/10 hover:bg-gradient-to-br hover:from-fuchsia-500/70 hover:to-cyan-400/70 transition-colors duration-500"
    >
      <div className="relative h-full rounded-2xl bg-[#0c0c16] p-5 flex items-center gap-4 overflow-hidden transition-transform duration-300 group-hover:-translate-y-0.5">
        <span className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-fuchsia-500/0 group-hover:bg-fuchsia-500/15 blur-3xl transition-all duration-500" />

        {/* Progress ring */}
        <div className="relative shrink-0 w-16 h-16">
          <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
            <circle cx="32" cy="32" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
            <motion.circle
              cx="32" cy="32" r={R} fill="none" stroke="url(#skillGrad)" strokeWidth="4" strokeLinecap="round"
              strokeDasharray={CIRC}
              initial={{ strokeDashoffset: CIRC }}
              animate={inView ? { strokeDashoffset: CIRC * (1 - skill.value / 100) } : {}}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 + index * 0.04 }}
            />
          </svg>
          <div className="absolute inset-2 rounded-full bg-white/[0.04] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]">
            <SkillIcon name={skill.name} />
          </div>
        </div>

        <div className="relative min-w-0 flex-1">
          <h4 className="font-semibold text-white truncate">{skill.name}</h4>
          <p className="text-xs text-gray-500 mt-0.5">{levelOf(skill.value)}</p>
        </div>

        <div className="relative text-right">
          <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            <Counter value={skill.value} start={inView} />
          </span>
          <span className="text-sm text-gray-500">%</span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;
  const tabs = ['All', ...skills.map((c) => c.category)];
  const [active, setActive] = useState('All');

  const visible =
    active === 'All'
      ? skills.flatMap((c) => c.items)
      : skills.find((c) => c.category === active)?.items || [];

  return (
    <section id="skills" className="section-padding relative">
      {/* Shared gradient for all rings */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="skillGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="pill mb-4">MY SKILLS</span>
        <h2 className="text-3xl md:text-5xl font-bold">
          Technologies I{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Master</span>
        </h2>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`skills-tab-${tab.replace(/\W+/g, '-').toLowerCase()}`}
              onClick={() => setActive(tab)}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                active === tab ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {active === tab && (
                <motion.span
                  layoutId="skills-tab-bg"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500/80 to-cyan-400/80 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skill tiles */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {visible.map((skill, i) => (
            <SkillTile key={skill.name} skill={skill} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
