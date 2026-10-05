import React from 'react';

export const dockSocials = [
  { name: 'WhatsApp', url: 'https://wa.me/201273446781', icon: 'https://img.icons8.com/color/96/whatsapp--v1.png', glow: '37,211,102' },
  { name: 'Gmail', url: 'mailto:ibrahemk09zobj@gmail.com', icon: 'https://img.icons8.com/color/96/gmail-new.png', glow: '234,67,53' },
  { name: 'Phone', url: 'tel:01273446781', icon: 'https://img.icons8.com/color/96/phone.png', glow: '56,189,248' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ibrahem-sayed-1b38722a4', icon: 'https://img.icons8.com/color/96/linkedin.png', glow: '10,102,194' },
  { name: 'GitHub', url: 'https://github.com/ibacorpration', icon: 'https://img.icons8.com/ios-glyphs/96/ffffff/github.png', glow: '255,255,255' },
  { name: 'Kaggle', url: 'https://www.kaggle.com/', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png', glow: '32,190,255' },
];

const SocialDock = ({ className = '' }) => (
  <div className={`inline-flex items-end gap-3 md:gap-4 px-5 py-4 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl ${className}`}>
    {dockSocials.map((s) => (
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
        <span className="flex w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/10 transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-125 group-hover:bg-white/10 group-hover:shadow-[0_10px_30px_-5px_rgba(var(--g),0.7)]">
          <img src={s.icon} alt={s.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
        </span>
      </a>
    ))}
  </div>
);

export default SocialDock;
