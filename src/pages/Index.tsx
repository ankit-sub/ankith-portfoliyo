
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BackgroundShapes from '@/components/BackgroundShapes';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ProjectsSection from '@/sections/ProjectsSection';
import SkillsSection from '@/sections/SkillsSection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add event listeners for touch interactions
    const handleTouchStart = (e: TouchEvent) => {
      document.body.style.overflow = 'auto';
    };

    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundShapes />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
