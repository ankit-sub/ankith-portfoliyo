
import FloatingElement from '@/components/FloatingElement';
import SkillBadge from '@/components/SkillBadge';

const SkillsSection = () => {
  const frontendSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 
    'Next.js', 'Tailwind CSS', 'SASS', 'Redux', 'GraphQL'
  ];
  
  const backendSkills = [
    'Node.js', 'Express', 'Python', 'Django', 'PHP', 'Laravel',
    'REST API', 'GraphQL', 'MongoDB', 'PostgreSQL', 'MySQL'
  ];
  
  const toolsSkills = [
    'Git', 'Docker', 'Webpack', 'Vite', 'Jest', 'Cypress',
    'Figma', 'Adobe XD', 'AWS', 'Firebase', 'Vercel', 'Netlify'
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-soft-gray">
      <div className="container mx-auto px-4">
        <FloatingElement>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
        </FloatingElement>
        
        <FloatingElement delay={200}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            I've acquired a diverse set of skills throughout my journey as a web developer and designer.
          </p>
        </FloatingElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <FloatingElement delay={300}>
            <div className="glass p-6 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6 text-center text-gradient">Frontend Development</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {frontendSkills.map((skill, index) => (
                  <SkillBadge 
                    key={skill} 
                    name={skill}
                    delay={index * 50}
                    className="bg-primary-purple/10 text-primary-purple"
                  />
                ))}
              </div>
            </div>
          </FloatingElement>
          
          <FloatingElement delay={500}>
            <div className="glass p-6 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6 text-center text-gradient">Backend Development</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {backendSkills.map((skill, index) => (
                  <SkillBadge 
                    key={skill} 
                    name={skill}
                    delay={index * 50}
                    className="bg-secondary-purple/10 text-secondary-purple"
                  />
                ))}
              </div>
            </div>
          </FloatingElement>
          
          <FloatingElement delay={700}>
            <div className="glass p-6 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6 text-center text-gradient">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {toolsSkills.map((skill, index) => (
                  <SkillBadge 
                    key={skill} 
                    name={skill}
                    delay={index * 50}
                    className="bg-ocean-blue/10 text-ocean-blue"
                  />
                ))}
              </div>
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
