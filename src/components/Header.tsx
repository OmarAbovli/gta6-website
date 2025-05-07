
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations after component mount
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-container flex items-center justify-between">
        <div className={`flex items-center motion-safe:animate-fade-in-left ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <a href="/" className="group">
            <h1 className={cn(
              "text-3xl font-bold transition-all duration-300",
              isScrolled ? "text-white" : "text-gta-neonpink text-glow"
            )}>
              GTA <span className="text-gta-neonblue text-glow-blue">VI</span>
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Media", "Pre-Order"].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-medium uppercase tracking-wider transition-all hover:text-gta-neonpink",
                isScrolled ? "text-white" : "text-white",
                `motion-safe:animate-fade-in-right ${loaded ? 'opacity-100' : 'opacity-0'}`
              )}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-white p-2 motion-safe:animate-fade-in-right ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col space-y-1">
            <span className={cn(
              "h-0.5 w-full bg-white transition-all",
              mobileMenuOpen && "translate-y-1.5 rotate-45"
            )}></span>
            <span className={cn(
              "h-0.5 w-full bg-white transition-all",
              mobileMenuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "h-0.5 w-full bg-white transition-all",
              mobileMenuOpen && "-translate-y-1.5 -rotate-45"
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-black/95 z-40 flex flex-col pt-20 px-4 md:hidden transition-all duration-300",
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          {["Home", "About", "Media", "Pre-Order"].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xl font-medium uppercase tracking-wider text-white hover:text-gta-neonpink transition-all transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
