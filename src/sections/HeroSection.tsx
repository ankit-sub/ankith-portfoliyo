import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingElement from '@/components/FloatingElement';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left lg:w-1/2 z-10">
          <FloatingElement delay={200}>
            <h3 className="text-lg md:text-xl font-medium mb-4 text-primary-purple">
              Hello, I'm
            </h3>
          </FloatingElement>
          
          <FloatingElement delay={400}>
            <h1 className="text-gradient font-bold mb-4">
              Ankith K R
            </h1>
          </FloatingElement>
          
          <FloatingElement delay={600}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Creative AI user
            </h2>
          </FloatingElement>
          
          <FloatingElement delay={800}>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              I create stunning digital experiences with modern technologies. 
              Specializing in interactive websites and applications with beautiful animations 
              and responsive designs.
            </p>
          </FloatingElement>
          
          <FloatingElement delay={1000} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button className="rounded-full bg-primary-purple text-white hover:bg-secondary-purple">
              View My Work
            </Button>
            
            <Button variant="outline" className="rounded-full">
              Download CV
            </Button>
          </FloatingElement>
        </div>
        
        <div className="lg:w-1/2 relative z-10">
          <FloatingElement animationType="float" delay={300}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-purple to-ocean-blue opacity-40 blur-3xl animate-pulse-subtle"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="John Doe" 
                className="rounded-full object-cover w-full h-full border-4 border-white/50 shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full glass flex items-center justify-center animate-float-subtle">
                <span className="font-bold text-gradient">5+ Years</span>
              </div>
            </div>
          </FloatingElement>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
