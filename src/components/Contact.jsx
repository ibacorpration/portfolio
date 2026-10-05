import React from 'react';
import { motion } from 'framer-motion';

const contacts = [
  {
    name: 'WhatsApp',
    value: '+20 127 344 6781',
    url: 'https://wa.me/201273446781',
    icon: 'https://img.icons8.com/color/96/whatsapp--v1.png',
    color: '37, 211, 102',
  },
  {
    name: 'Email',
    value: 'ibrahemk09zobj@gmail.com',
    url: 'mailto:ibrahemk09zobj@gmail.com',
    icon: 'https://img.icons8.com/color/96/gmail-new.png',
    color: '234, 67, 53',
  },
  {
    name: 'Phone',
    value: '01273446781',
    url: 'tel:01273446781',
    icon: 'https://img.icons8.com/color/96/phone.png',
    color: '56, 189, 248',
  },
  {
    name: 'LinkedIn',
    value: 'Ibrahem Sayed',
    url: 'https://www.linkedin.com/in/ibrahem-sayed-1b38722a4',
    icon: 'https://img.icons8.com/color/96/linkedin.png',
    color: '10, 102, 194',
  },
  {
    name: 'GitHub',
    value: '@ibacorpration',
    url: 'https://github.com/ibacorpration',
    icon: 'https://img.icons8.com/fluent/96/github.png',
    color: '200, 200, 210',
  },
  {
    name: 'Kaggle',
    value: 'Kaggle Profile',
    url: 'https://www.kaggle.com/',
    icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png',
    color: '32, 190, 255',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[2rem] p-[1px] bg-gradient-to-br from-fuchsia-500/60 via-white/10 to-cyan-400/60 shadow-[0_0_80px_-20px_rgba(168,85,247,0.45)]"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0b0b14]/95 backdrop-blur-xl px-6 py-12 md:px-14 md:py-16">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-fuchsia-600/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 text-gray-300 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Available for work
              </span>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Let's build something{' '}
                <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                  amazing
                </span>{' '}
                together
              </h2>

              <p className="text-gray-400 leading-relaxed text-lg mb-8 max-w-md">
                Have a project in mind or an opportunity to share? I'm always open to discussing
                new ideas — reach out on any platform and I'll get back to you quickly.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/201273446781"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-[0_8px_30px_-8px_rgba(37,211,102,0.6)] hover:shadow-[0_10px_40px_-6px_rgba(37,211,102,0.8)] hover:-translate-y-0.5 transition-all"
                >
                  <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="" className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:ibrahemk09zobj@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all"
                >
                  Send Email ↗
                </a>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-6 text-sm">
                <div>
                  <p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Location</p>
                  <p className="text-gray-200">Cairo, Egypt</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Languages</p>
                  <p className="text-gray-200">
                    Arabic <span className="text-gray-500">(Native)</span>, English{' '}
                    <span className="text-gray-500">(Intermediate)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right - contact tiles */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {contacts.map((c) => (
                <motion.a
                  key={c.name}
                  variants={item}
                  href={c.url}
                  target={c.url.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={c.name}
                  style={{ '--brand': c.color }}
                  className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(var(--brand),0.6)] hover:shadow-[0_10px_40px_-10px_rgba(var(--brand),0.6)]"
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_0%_50%,rgba(var(--brand),0.18),transparent_70%)]" />

                  <span className="relative shrink-0 w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]">
                    <img src={c.icon} alt={c.name} className="w-9 h-9 object-contain" />
                  </span>

                  <span className="relative min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-wider text-gray-500 mb-0.5">
                      {c.name}
                    </span>
                    <span className="block text-gray-100 font-medium truncate">{c.value}</span>
                  </span>

                  <span className="relative text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                    ↗
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
