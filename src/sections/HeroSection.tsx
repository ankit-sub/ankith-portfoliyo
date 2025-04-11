
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingElement from '@/components/FloatingElement';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left lg:w-1/2 z-10">
          <FloatingElement delay={200} animationType="scale-pulse">
            <h3 className="text-lg md:text-xl font-medium mb-4 text-primary-purple">
              Hello, I'm
            </h3>
          </FloatingElement>
          
          <FloatingElement delay={400}>
            <h1 className="text-gradient font-bold mb-4 relative">
              <span className="relative z-10">Ankith K R</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-ocean-blue/20 blur-2xl -z-10 animate-pulse-subtle"></span>
            </h1>
          </FloatingElement>
          
          <FloatingElement delay={600}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Creative Web Developer & Designer
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
            <Button className="rounded-full bg-primary-purple text-white hover:bg-secondary-purple transition-all duration-300 hover:shadow-lg hover:shadow-primary-purple/30 hover:-translate-y-1">
              View My Work
            </Button>
            
            <Button variant="outline" className="rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              Download CV
            </Button>
          </FloatingElement>
        </div>
        
        <div className="lg:w-1/2 relative z-10">
          <FloatingElement animationType="float" delay={300}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-purple to-ocean-blue opacity-40 blur-3xl animate-pulse-subtle"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary-purple/30 to-ocean-blue/30 animate-rotate-slow opacity-60 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Ankith K R" 
                className="rounded-full object-cover w-full h-full border-4 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary-purple/50"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full glass flex items-center justify-center animate-float-subtle">
                <span className="font-bold text-gradient">5+ Years</span>
              </div>
              
              <div className="absolute top-5 -left-10 glass px-3 py-2 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium">React</span>
              </div>
              
              <div className="absolute bottom-10 -right-12 glass px-3 py-2 rounded-full shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-sm font-medium">Next.js</span>
              </div>
            </div>
          </FloatingElement>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-primary-purple/10 hover:bg-primary-purple/20 transition-all duration-300"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6 text-primary-purple" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
