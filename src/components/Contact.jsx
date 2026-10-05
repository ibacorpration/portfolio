import React from 'react';
import { motion } from 'framer-motion';

import SocialDock from './SocialDock';

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
        <motion.div {...fadeUp(0.3)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
          <a
            href="https://wa.me/201273446781"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-2xl px-4 py-3 bg-gradient-to-br from-[#25D366]/15 to-[#075E54]/10 border border-[#25D366]/25 hover:border-[#25D366]/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-15px_rgba(37,211,102,0.6)]"
          >
            <img src="https://img.icons8.com/color/96/whatsapp--v1.png" alt="WhatsApp" className="w-9 h-9 shrink-0" />
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-white">Chat on WhatsApp</h3>
              <p className="text-xs text-gray-400 truncate">+20 127 344 6781</p>
            </div>
            <span className="w-7 h-7 shrink-0 rounded-full border border-white/15 flex items-center justify-center text-white text-sm group-hover:bg-[#25D366] group-hover:border-transparent group-hover:-rotate-45 transition-all duration-300">
              →
            </span>
          </a>

          <a
            href="mailto:ibrahemk09zobj@gmail.com"
            className="group flex items-center gap-3 rounded-2xl px-4 py-3 bg-gradient-to-br from-[#EA4335]/15 to-[#4285F4]/10 border border-[#EA4335]/25 hover:border-[#EA4335]/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-15px_rgba(234,67,53,0.6)]"
          >
            <img src="https://img.icons8.com/color/96/gmail-new.png" alt="Gmail" className="w-9 h-9 shrink-0" />
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-white">Send an Email</h3>
              <p className="text-xs text-gray-400 truncate">ibrahemk09zobj@gmail.com</p>
            </div>
            <span className="w-7 h-7 shrink-0 rounded-full border border-white/15 flex items-center justify-center text-white text-sm group-hover:bg-[#EA4335] group-hover:border-transparent group-hover:-rotate-45 transition-all duration-300">
              →
            </span>
          </a>
        </motion.div>

        {/* Social dock */}
        <motion.div {...fadeUp(0.4)}>
          <SocialDock />
        </motion.div>

        <motion.p {...fadeUp(0.5)} className="mt-10 text-sm text-gray-500">
          📍 Cairo, Egypt &nbsp;•&nbsp; Arabic (Native) &nbsp;•&nbsp; English (Intermediate)
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
