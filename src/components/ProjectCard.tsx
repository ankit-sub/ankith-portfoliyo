
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import FloatingElement from './FloatingElement';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  delay?: number;
  className?: string;
  children?: ReactNode;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveLink,
  repoLink,
  delay = 0,
  className,
  children
}: ProjectCardProps) => {
  return (
    <FloatingElement
      delay={delay}
      sensitivity={25}
      className={cn('card-hover transition-transform', className)}
    >
      <Card className="h-full overflow-hidden border-0 glass">
        <div className="relative h-48 overflow-hidden image-zoom">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 to-ocean-blue/20 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl text-gradient">{title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-primary-purple/10 text-primary-purple hover:bg-primary-purple/20 transition-colors duration-300"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
        
        <CardContent>
          <CardDescription className="text-sm">{description}</CardDescription>
          {children}
        </CardContent>
        
        <CardFooter className="flex justify-between gap-4">
          {liveLink && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 gap-2 button-pop bg-gradient-to-r from-primary-purple/5 to-ocean-blue/5 hover:from-primary-purple/10 hover:to-ocean-blue/10"
              onClick={() => window.open(liveLink, '_blank')}
            >
              <ExternalLink size={16} />
              Live Demo
            </Button>
          )}
          
          {repoLink && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 gap-2 button-pop bg-gradient-to-r from-ocean-blue/5 to-primary-purple/5 hover:from-ocean-blue/10 hover:to-primary-purple/10"
              onClick={() => window.open(repoLink, '_blank')}
            >
              <Github size={16} />
              Code
            </Button>
          )}
        </CardFooter>
      </Card>
    </FloatingElement>
  );
};

export default ProjectCard;
