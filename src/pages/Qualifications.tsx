
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElement from '@/components/FloatingElement';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Qualifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <FloatingElement delay={100}>
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="group flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-gradient">Qualifications</span>
          </h1>
        </FloatingElement>

        <div className="max-w-3xl mx-auto">
          <FloatingElement delay={200} className="mb-12">
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Education</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-primary-purple pl-6 py-2 relative">
                  <div className="absolute w-4 h-4 rounded-full bg-primary-purple -left-[10px] top-0"></div>
                  <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
                  <p className="text-muted-foreground">Visvesvaraya Technological University</p>
                  <p className="text-sm">2016 - 2020</p>
                  <p className="mt-2">Graduated with distinction, focusing on web technologies and software development.</p>
                </div>
                
                <div className="border-l-4 border-primary-purple pl-6 py-2 relative">
                  <div className="absolute w-4 h-4 rounded-full bg-primary-purple -left-[10px] top-0"></div>
                  <h3 className="text-xl font-semibold">Advanced Web Development Certification</h3>
                  <p className="text-muted-foreground">Udemy</p>
                  <p className="text-sm">2021</p>
                  <p className="mt-2">Completed intensive course on modern web development frameworks and techniques.</p>
                </div>
              </div>
            </div>
          </FloatingElement>
          
          <FloatingElement delay={300} className="mb-12">
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Professional Certifications</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-ocean-blue pl-6 py-2 relative">
                  <div className="absolute w-4 h-4 rounded-full bg-ocean-blue -left-[10px] top-0"></div>
                  <h3 className="text-xl font-semibold">AWS Certified Developer</h3>
                  <p className="text-muted-foreground">Amazon Web Services</p>
                  <p className="text-sm">2022</p>
                  <p className="mt-2">Expertise in developing and maintaining applications on the AWS platform.</p>
                </div>
                
                <div className="border-l-4 border-ocean-blue pl-6 py-2 relative">
                  <div className="absolute w-4 h-4 rounded-full bg-ocean-blue -left-[10px] top-0"></div>
                  <h3 className="text-xl font-semibold">React Developer Certification</h3>
                  <p className="text-muted-foreground">Meta (formerly Facebook)</p>
                  <p className="text-sm">2023</p>
                  <p className="mt-2">Advanced proficiency in React and its ecosystem including Redux, React Router, and Hooks.</p>
                </div>
              </div>
            </div>
          </FloatingElement>
          
          <FloatingElement delay={400} className="mb-12">
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>React, Next.js, Vue.js</li>
                    <li>Tailwind CSS, SCSS</li>
                    <li>TypeScript, JavaScript (ES6+)</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Node.js, Express</li>
                    <li>Python, Django</li>
                    <li>RESTful APIs</li>
                    <li>GraphQL</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Database & Cloud</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>MongoDB, PostgreSQL</li>
                    <li>Firebase, Supabase</li>
                    <li>AWS, Vercel, Netlify</li>
                    <li>Docker, CI/CD</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Design & Tools</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Figma, Adobe XD</li>
                    <li>UI/UX Design Principles</li>
                    <li>Git, GitHub</li>
                    <li>Agile Methodology</li>
                  </ul>
                </div>
              </div>
            </div>
          </FloatingElement>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Qualifications;
