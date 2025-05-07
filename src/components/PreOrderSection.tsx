
import React, { useEffect, useRef, useState } from 'react';

const PreOrderSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const editions = [
    {
      name: "Standard Edition",
      price: "$69.99",
      features: [
        "Base Game",
        "Criminal Enterprise Starter Pack",
        "Exclusive Character Outfit"
      ],
      highlight: false
    },
    {
      name: "Deluxe Edition",
      price: "$89.99",
      features: [
        "Base Game",
        "Criminal Enterprise Starter Pack",
        "Exclusive Character Outfit",
        "Additional Weapons & Vehicles",
        "Digital Art Book"
      ],
      highlight: true
    },
    {
      name: "Collector's Edition",
      price: "$149.99",
      features: [
        "All Deluxe Edition Content",
        "Steelbook Case",
        "Physical Map of Vice City",
        "Collectible SLA Figurine",
        "Exclusive In-game Property"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pre-order" ref={sectionRef} className="py-20 bg-gta-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1458668383970-8ddd3927deed')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gta-dark/90 to-gta-dark"></div>
      
      <div className="max-container relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}>
          <span className="neon-gradient">Pre-Order</span> <span className="text-white">Now</span>
        </h2>
        
        <p className={`text-white/80 text-lg text-center max-w-2xl mx-auto mb-12 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Secure your copy of Grand Theft Auto VI and receive exclusive bonuses only available during the pre-order period.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {editions.map((edition, index) => (
            <div 
              key={index}
              className={`relative rounded-lg overflow-hidden transition-transform hover:scale-[1.02] ${
                edition.highlight ? 'border-2 border-gta-neonpink border-glow' : 'border border-white/20'
              } ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div 
                className={`p-6 ${
                  edition.highlight ? 'bg-gta-dark2/80' : 'bg-gta-dark2/50'
                }`}
              >
                {edition.highlight && (
                  <span className="absolute top-0 right-0 bg-gta-neonpink text-white text-xs py-1 px-3 rounded-bl font-bold uppercase animate-neon-pulse">
                    Popular
                  </span>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${
                  edition.highlight ? 'text-gta-neonpink' : 'text-white'
                }`}>
                  {edition.name}
                </h3>
                
                <p className="text-3xl font-bold text-white mb-6">{edition.price}</p>
                
                <div className="space-y-3 mb-8">
                  {edition.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg className={`w-5 h-5 text-gta-neonblue mr-2 mt-0.5 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${0.6 + i * 0.1}s` }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-white/80 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: `${0.6 + i * 0.1}s` }}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className={`w-full py-3 font-bold uppercase tracking-wider rounded transition-all ${
                    edition.highlight
                      ? 'bg-gta-neonpink hover:bg-opacity-90 text-white hover:shadow-[0_0_15px_rgba(255,0,213,0.7)]'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                  } ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                >
                  Pre-Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <p className="text-white/60">
            Release date: Fall 2025. Pre-order content subject to availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSection;
