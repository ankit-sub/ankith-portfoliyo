import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingElement from './FloatingElement';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };
  
  const navLinks = [
    { name: 'Home', path: 'hero' },
    { name: 'About', path: 'about' },
    { name: 'Projects', path: 'projects' },
    { name: 'Skills', path: 'skills' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button onClick={() => handleNavClick('hero')} className="text-2xl font-bold text-gradient flex items-center gap-2">
          <FloatingElement animationType="none" className="w-10 h-10 bg-primary-purple text-white flex items-center justify-center rounded-lg">
            A
          </FloatingElement>
          <span>Portfolio</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <FloatingElement 
              key={link.name} 
              animationType="none"
              delay={index * 100} 
              sensitivity={70}
              maxTilt={10}
            >
              <button 
                onClick={() => handleNavClick(link.path)}
                className="relative font-medium text-sm hover:text-primary-purple after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-purple after:transition-all hover:after:w-full"
              >
                {link.name}
              </button>
            </FloatingElement>
          ))}
          <FloatingElement animationType="none" delay={navLinks.length * 100}>
            <Button 
              onClick={() => handleNavClick('contact')}
              className="rounded-full bg-primary-purple text-white hover:bg-secondary-purple"
            >
              Get in Touch
            </Button>
          </FloatingElement>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden glass ${isOpen ? 'max-h-[500px] py-4' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className="text-lg py-2 hover:text-primary-purple"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => handleNavClick('contact')}
            className="rounded-full bg-primary-purple text-white hover:bg-secondary-purple"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
