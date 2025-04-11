
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
      sensitivity={30}
      className={cn('touch-hover touch-active transition-transform', className)}
    >
      <Card className="h-full overflow-hidden border-0 glass">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-primary-purple/10 text-primary-purple"
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
              className="flex-1 gap-2"
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
              className="flex-1 gap-2"
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
