
import FloatingElement from '@/components/FloatingElement';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FloatingElement>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>
        </FloatingElement>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <FloatingElement delay={300}>
              <h3 className="text-2xl font-semibold mb-4">
                I'm Ankith K R, a Passionate Web Developer & Designer
              </h3>
            </FloatingElement>
            
            <FloatingElement delay={400}>
              <p className="text-muted-foreground mb-4">
                With over 5 years of experience in web development, I've had the 
                opportunity to work on a diverse range of projects, from small business 
                websites to complex web applications.
              </p>
            </FloatingElement>
            
            <FloatingElement delay={500}>
              <p className="text-muted-foreground mb-4">
                My approach combines technical expertise with creative problem-solving. 
                I believe that great design should not only look appealing but also 
                provide an intuitive and enjoyable user experience.
              </p>
            </FloatingElement>
            
            <FloatingElement delay={600}>
              <p className="text-muted-foreground mb-8">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </FloatingElement>
            
            <FloatingElement delay={700} className="flex flex-wrap gap-4">
              <Button className="rounded-full bg-primary-purple hover:bg-secondary-purple text-white">
                Download CV
              </Button>
              <Button variant="outline" className="rounded-full">
                My Skills
              </Button>
            </FloatingElement>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <FloatingElement delay={200} animationType="float-subtle">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-purple/30 to-ocean-blue/30 translate-x-4 translate-y-4 blur-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                  alt="About Me" 
                  className="rounded-3xl w-full shadow-xl relative z-10 glass"
                />
                
                <div className="absolute top-4 -left-4 glass p-4 rounded-xl shadow-lg animate-float-subtle">
                  <div className="text-xl font-bold text-gradient">100+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 glass p-4 rounded-xl shadow-lg animate-float-subtle" style={{ animationDelay: '1s' }}>
                  <div className="text-xl font-bold text-gradient">50+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
