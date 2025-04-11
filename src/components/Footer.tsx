
import { HeartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 glass mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold text-gradient">AKR</Link>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ankith K R. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <p className="flex items-center">
              Made with <HeartIcon className="h-4 w-4 mx-1 text-red-500" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
