
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import FloatingElement from './FloatingElement';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <FloatingElement>
      <Card className="glass border-0 w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Get in Touch</CardTitle>
          <CardDescription className="text-center">
            Have a question or want to work together? Send me a message!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/50 border-0"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/50 border-0"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-32 bg-white/50 border-0"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-primary-purple hover:bg-secondary-purple text-white"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </CardFooter>
      </Card>
    </FloatingElement>
  );
};

export default ContactForm;
