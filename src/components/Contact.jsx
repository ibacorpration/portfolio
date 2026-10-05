import React from 'react';
import { motion } from 'framer-motion';

const socials = [
  { name: 'WhatsApp', url: 'https://wa.me/201273446781', icon: 'https://img.icons8.com/color/96/whatsapp--v1.png', glow: '37,211,102' },
  { name: 'Gmail', url: 'mailto:ibrahemk09zobj@gmail.com', icon: 'https://img.icons8.com/color/96/gmail-new.png', glow: '234,67,53' },
  { name: 'Phone', url: 'tel:01273446781', icon: 'https://img.icons8.com/color/96/phone.png', glow: '56,189,248' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ibrahem-sayed-1b38722a4', icon: 'https://img.icons8.com/color/96/linkedin.png', glow: '10,102,194' },
  { name: 'GitHub', url: 'https://github.com/ibacorpration', icon: 'https://img.icons8.com/ios-glyphs/96/ffffff/github.png', glow: '255,255,255' },
  { name: 'Kaggle', url: 'https://www.kaggle.com/', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png', glow: '32,190,255' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[conic-gradient(from_180deg,rgba(217,70,239,0.18),rgba(34,211,238,0.18),rgba(217,70,239,0.18))] blur-[120px]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p {...fadeUp(0)} className="text-sm font-mono tracking-[0.3em] uppercase text-cyan-300/80 mb-5">
          — Contact —
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
          Got an idea?
          <br />
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
            Let's talk.
          </span>
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
          Open to new projects, collaborations and full-time opportunities in AI & Computer Vision.
        </motion.p>

        {/* Two main action cards */}
        <motion.div {...fadeUp(0.3)} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 text-left">
          <a
            href="https://wa.me/201273446781"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl p-7 bg-gradient-to-br from-[#25D366]/15 to-[#075E54]/10 border border-[#25D366]/25 hover:border-[#25D366]/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(37,211,102,0.55)]"
          >
            <div className="absolute -right-10 -bottom-10 w-44 h-44 opacity-10 group-hover:opacity-25 group-hover:scale-110 transition-all duration-500">
              <img src="https://img.icons8.com/color/240/whatsapp--v1.png" alt="" className="w-full h-full" />
            </div>
            <img src="https://img.icons8.com/color/96/whatsapp--v1.png" alt="WhatsApp" className="w-12 h-12 mb-6" />
            <p className="text-xs uppercase tracking-widest text-[#25D366] mb-2">Fastest reply</p>
            <h3 className="text-2xl font-bold text-white mb-1">Chat on WhatsApp</h3>
            <p className="text-gray-400">+20 127 344 6781</p>
            <span className="absolute top-7 right-7 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:bg-[#25D366] group-hover:border-transparent group-hover:rotate-45 transition-all duration-500">
              →
            </span>
          </a>

          <a
            href="mailto:ibrahemk09zobj@gmail.com"
            className="group relative overflow-hidden rounded-3xl p-7 bg-gradient-to-br from-[#EA4335]/15 to-[#4285F4]/10 border border-[#EA4335]/25 hover:border-[#EA4335]/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(234,67,53,0.55)]"
          >
            <div className="absolute -right-10 -bottom-10 w-44 h-44 opacity-10 group-hover:opacity-25 group-hover:scale-110 transition-all duration-500">
              <img src="https://img.icons8.com/color/240/gmail-new.png" alt="" className="w-full h-full" />
            </div>
            <img src="https://img.icons8.com/color/96/gmail-new.png" alt="Gmail" className="w-12 h-12 mb-6" />
            <p className="text-xs uppercase tracking-widest text-[#EA4335] mb-2">Drop a line</p>
            <h3 className="text-2xl font-bold text-white mb-1">Send an Email</h3>
            <p className="text-gray-400 break-all">ibrahemk09zobj@gmail.com</p>
            <span className="absolute top-7 right-7 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:bg-[#EA4335] group-hover:border-transparent group-hover:rotate-45 transition-all duration-500">
              →
            </span>
          </a>
        </motion.div>

        {/* Social dock */}
        <motion.div {...fadeUp(0.4)} className="inline-flex items-end gap-3 md:gap-4 px-5 py-4 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={s.name}
              style={{ '--g': s.glow }}
              className="group relative"
            >
              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white text-black text-xs font-semibold px-2 py-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                {s.name}
              </span>
              <span className="flex w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/10 transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-125 group-hover:bg-white/10 group-hover:shadow-[0_10px_30px_-5px_rgba(var(--g),0.7)]">
                <img src={s.icon} alt={s.name} className="w-7 h-7 md:w-8 md:h-8 object-contain" />
              </span>
            </a>
          ))}
        </motion.div>

        <motion.p {...fadeUp(0.5)} className="mt-10 text-sm text-gray-500">
          📍 Cairo, Egypt &nbsp;•&nbsp; Arabic (Native) &nbsp;•&nbsp; English (Intermediate)
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
