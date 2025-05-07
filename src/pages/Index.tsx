
import React, { useEffect } from 'react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import MediaSection from '@/components/MediaSection';
import PreOrderSection from '@/components/PreOrderSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update the page title
    document.title = "GTA VI - Vice City Awaits";
  }, []);

  return (
    <div className="min-h-screen bg-gta-dark text-white">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MediaSection />
        <PreOrderSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
