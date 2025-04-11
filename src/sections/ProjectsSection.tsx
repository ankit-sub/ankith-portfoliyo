
import { useState } from 'react';
import FloatingElement from '@/components/FloatingElement';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with a seamless shopping experience, payment integration, and an intuitive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A creative portfolio website with smooth animations and interactive elements to showcase projects and skills.',
    image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    tags: ['React', 'Tailwind CSS', 'GSAP', 'Vite'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity app with features for task organization, reminders, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'An interactive weather application with real-time forecasts, location-based data, and visual representations.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    tags: ['JavaScript', 'Weather API', 'Chart.js', 'CSS3'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'A health and fitness application for tracking workouts, nutrition, and personal wellness goals.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['React Native', 'TypeScript', 'GraphQL', 'Firebase'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 6,
    title: 'AI Content Generator',
    description: 'An AI-powered tool for generating various types of content, including blog posts, social media captions, and marketing copy.',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    tags: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    liveLink: '#',
    repoLink: '#',
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FloatingElement>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
        </FloatingElement>
        
        <FloatingElement delay={200}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Here are some of my recent projects that showcase my skills and expertise in web development and design.
          </p>
        </FloatingElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
              delay={index * 100}
            />
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <FloatingElement>
              <Button 
                onClick={loadMoreProjects}
                className="rounded-full bg-primary-purple hover:bg-secondary-purple text-white"
              >
                Load More Projects
              </Button>
            </FloatingElement>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
