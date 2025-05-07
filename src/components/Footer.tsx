
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gta-dark py-10 border-t border-white/10 relative">
      <div className="max-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gta-neonpink text-glow">
              GTA <span className="text-gta-neonblue text-glow-blue">VI</span>
            </h2>
            <p className="text-white/60 text-sm mt-1">An homage to Rockstar Games</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a href="#home" className="text-white/80 hover:text-gta-neonpink transition-colors">Home</a>
            <a href="#about" className="text-white/80 hover:text-gta-neonpink transition-colors">About</a>
            <a href="#media" className="text-white/80 hover:text-gta-neonpink transition-colors">Media</a>
            <a href="#pre-order" className="text-white/80 hover:text-gta-neonpink transition-colors">Pre-Order</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            This is a fan-made tribute website. Not affiliated with Rockstar Games.
          </p>
          <p className="text-white/40 text-xs mt-2">
            © {currentYear} | All game content and materials are trademarks and copyrights of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
