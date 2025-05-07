
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle video loading
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Background animation effect similar to Rockstar GTA VI website
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match viewport
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle settings
    const particles: Particle[] = [];
    const particleCount = 80;
    const colors = ['#FF00D5', '#00CCFF'];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Connect particles with lines if they're close enough
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            if (!ctx) return;
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color;
            ctx.lineWidth = 0.2;
            ctx.globalAlpha = 1 - (distance / 120);
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gta-dark overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className={cn(
            "absolute w-full h-full object-cover transition-opacity duration-1000",
            videoLoaded ? "opacity-70" : "opacity-0"
          )}
          onLoadedData={handleVideoLoad}
        >
          <source src="https://videos.ctfassets.net/wn7ipiv9ue5v/1w95XhSWw4Ubh7NDEIxlK/a3ab27e3e80538f843524de0098e73a4/GTA_6_-_Trailer_1_1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback for when video is loading */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-20 motion-safe:animate-scale-in"></div>
        )}
      </div>
      
      {/* Animated Background Canvas - layered on top for additional effect */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0" 
        style={{ opacity: 0.4 }}
      />
      
      {/* Gradient Overlay - darker and more similar to GTA VI website */}
      <div className="absolute inset-0 bg-gradient-to-b from-gta-dark/30 via-gta-dark/60 to-gta-dark z-10"></div>
      
      {/* Content */}
      <div className={cn(
        "relative z-20 max-w-5xl mx-auto text-center transition-all duration-1000",
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tighter">
          <span className="block text-gta-neonpink text-glow animate-neon-pulse motion-safe:animate-fade-in-up" style={{ animationDelay: '0.3s' }}>GRAND THEFT AUTO</span>
          <span className="text-8xl md:text-9xl text-gta-neonblue text-glow-blue motion-safe:animate-fade-in-up" style={{ animationDelay: '0.6s' }}>VI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto motion-safe:animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          Welcome to Vice City. Experience the next chapter in the iconic series that defined gaming.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a 
            href="#pre-order" 
            className="px-8 py-3 bg-gta-neonpink hover:bg-opacity-90 text-white font-bold uppercase tracking-wider rounded transition-all hover:shadow-[0_0_15px_rgba(255,0,213,0.7)] motion-safe:animate-fade-in-right"
            style={{ animationDelay: '1.2s' }}
          >
            Pre-order Now
          </a>
          
          <a 
            href="#media" 
            className="px-8 py-3 bg-transparent border-2 border-gta-neonblue text-white font-bold uppercase tracking-wider rounded transition-all hover:bg-gta-neonblue/10 hover:shadow-[0_0_15px_rgba(0,204,255,0.7)] motion-safe:animate-fade-in-left"
            style={{ animationDelay: '1.2s' }}
          >
            Watch Trailer
          </a>
        </div>

        <div className="mt-10 motion-safe:animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <p className="text-white/60 text-sm">
            Coming Fall 2025
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-safe:animate-fade-in-up z-20" style={{ animationDelay: '2s' }}>
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
