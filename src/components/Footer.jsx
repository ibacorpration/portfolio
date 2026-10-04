import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 text-center px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>&copy; {currentYear} Ibrahem Sayed. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <span className="text-red-500">❤️</span> by Ibrahem
        </p>
      </div>
    </footer>
  );
};

export default Footer;
