
import React, { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gta-dark to-gta-dark2 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gta-purple/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-gta-neonpink/10 to-transparent"></div>
      
      <div className="max-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className={`lg:w-1/2 ${isVisible ? 'motion-safe:animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="neon-gradient">About</span> <span className="text-white">The Game</span>
            </h2>
            
            <div className="space-y-6 text-white/80">
              <p className={`text-lg ${isVisible ? 'motion-safe:animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                Grand Theft Auto VI takes you to the neon-soaked streets of Vice City, a metropolis teeming with excess, possibility, and consequences.
              </p>
              
              <p className={isVisible ? 'motion-safe:animate-fade-in-right' : 'opacity-0'} style={{ animationDelay: '0.6s' }}>
                Experience a criminal saga set in the sun-drenched city, following the journey of dual protagonists through the most immersive and detailed world in the series to date.
              </p>
              
              <p className={isVisible ? 'motion-safe:animate-fade-in-right' : 'opacity-0'} style={{ animationDelay: '0.8s' }}>
                With cutting-edge graphics, expanded gameplay systems, and a narrative that pushes the boundaries of interactive entertainment, GTA VI redefines what an open world game can be.
              </p>
              
              <div className={`pt-4 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
                <a 
                  href="#pre-order" 
                  className="px-8 py-3 bg-gta-neonblue hover:bg-opacity-90 text-white font-bold uppercase tracking-wider rounded transition-all inline-block hover:shadow-[0_0_15px_rgba(0,204,255,0.7)]"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          
          <div className={`lg:w-1/2 ${isVisible ? 'motion-safe:animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-gta-dark2 p-1.5 rounded-md overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gta-neonpink to-gta-neonblue opacity-40 animate-gradient-x"></div>
              <div className="relative bg-gta-dark rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                  alt="Vice City Beach" 
                  className="w-full h-auto aspect-[16/9] object-cover"
                />
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className={`bg-gta-dark2 p-1.5 rounded-md overflow-hidden relative ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-gta-neonpink to-gta-purple opacity-40 animate-gradient-x"></div>
                <div className="relative bg-gta-dark rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                    alt="Downtown" 
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
              </div>
              <div className={`bg-gta-dark2 p-1.5 rounded-md overflow-hidden relative ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-gta-purple to-gta-neonblue opacity-40 animate-gradient-x"></div>
                <div className="relative bg-gta-dark rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                    alt="Nightlife" 
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <h3 className={`text-3xl font-bold mb-8 text-center text-white ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            Key Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Revolutionary Open World",
                description: "Explore the most detailed and dynamic city Rockstar has ever created."
              },
              {
                title: "Dual Protagonists",
                description: "Experience an intertwined narrative from multiple perspectives."
              },
              {
                title: "Enhanced Gameplay",
                description: "Refined mechanics and entirely new systems create unparalleled freedom."
              },
              {
                title: "Living Economy",
                description: "Dynamic markets, businesses, and criminal enterprises evolve over time."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-gta-dark2/60 border border-white/10 rounded-md p-6 hover:bg-gta-dark2/90 transition-all hover:border-gta-neonpink/30 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${1.2 + index * 0.2}s` }}
              >
                <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
