
import React, { useState, useEffect, useRef } from 'react';

const MediaSection = () => {
  const [activeTab, setActiveTab] = useState('videos');
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

  const mediaItems = {
    videos: [
      {
        id: 1,
        title: "Official Trailer",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        date: "December 2024"
      },
      {
        id: 2,
        title: "Gameplay Reveal",
        thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        date: "January 2025"
      },
      {
        id: 3,
        title: "Vice City Tour",
        thumbnail: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
        date: "March 2025"
      }
    ],
    screenshots: [
      {
        id: 1,
        title: "Downtown Vice City",
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
        date: "February 2025"
      },
      {
        id: 2,
        title: "Beach Sunset",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        date: "February 2025"
      },
      {
        id: 3,
        title: "Nightlife",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        date: "February 2025"
      }
    ]
  };

  return (
    <section id="media" ref={sectionRef} className="py-20 bg-gta-dark relative">
      <div className="max-container">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}>
          <span className="neon-gradient">Media</span>
        </h2>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-10 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex border-b border-white/20">
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 font-bold text-lg transition-all duration-300 ${activeTab === 'videos' ? 'text-gta-neonpink border-b-2 border-gta-neonpink' : 'text-white/70'}`}
            >
              Videos
            </button>
            <button
              onClick={() => setActiveTab('screenshots')}
              className={`px-6 py-3 font-bold text-lg transition-all duration-300 ${activeTab === 'screenshots' ? 'text-gta-neonblue border-b-2 border-gta-neonblue' : 'text-white/70'}`}
            >
              Screenshots
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'videos' && mediaItems.videos.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-md transition-transform hover:scale-[1.02] ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-gta-neonpink/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-white/70 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.date}</p>
              </div>
            </div>
          ))}

          {activeTab === 'screenshots' && mediaItems.screenshots.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-md transition-transform hover:scale-[1.02] ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-bold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-white/70 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
