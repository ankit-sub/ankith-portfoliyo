
import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import FloatingElement from '@/components/FloatingElement';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FloatingElement>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </FloatingElement>
        
        <FloatingElement delay={200}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
          </p>
        </FloatingElement>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <FloatingElement delay={300}>
              <div className="space-y-8">
                <div className="glass p-6 rounded-xl flex items-start gap-4">
                  <div className="mt-1 bg-primary-purple text-white p-2 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">San Francisco, California</p>
                  </div>
                </div>
                
                <div className="glass p-6 rounded-xl flex items-start gap-4">
                  <div className="mt-1 bg-primary-purple text-white p-2 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">hello@johndoe.com</p>
                  </div>
                </div>
                
                <div className="glass p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-4">Connect with me</h3>
                  <div className="flex gap-4">
                    <a href="#" className="bg-primary-purple text-white p-3 rounded-full hover:bg-secondary-purple transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="bg-primary-purple text-white p-3 rounded-full hover:bg-secondary-purple transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="bg-primary-purple text-white p-3 rounded-full hover:bg-secondary-purple transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </FloatingElement>
          </div>
          
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
