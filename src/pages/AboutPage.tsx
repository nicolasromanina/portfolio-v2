import React from 'react';
import Terminal from '../components/Terminal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, GraduationCap, Briefcase, Phone, Mail, MapPin, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-terminal-green text-3xl font-bold mb-2">About Me</h1>
        <p className="text-terminal-muted">Get to know the developer behind the code</p>
      </header>
      
      <div className="mb-8 animate-slide-up">
        <Terminal initialPath="/about" />
      </div>
      
      <div className="content-section mb-16">
        <div className="flex items-center mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <User className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Personal Profile</h2>
        </div>
        
        <div className="space-y-8 mb-8 modern-grid" style={{ animationDelay: '200ms' }}>
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Nicolas ROMANINA</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">Full Stack Developer</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <span className="text-xs">Open to opportunities</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">
                    I'm a passionate Full Stack Developer with a strong background in both frontend and backend technologies. My journey began with a fascination for technology and a desire to create products that impact people's lives.
                  </p>
                  <p className="font-sans mb-4">
                    After graduating with a Master's in Computer Engineering from the University of Tananariva, I've worked on various projects that have honed my skills in modern web development, system architecture, and user experience design.
                  </p>
                  <p className="font-sans mb-4">
                    I'm particularly interested in performance optimization, accessibility, and creating delightful user experiences that solve real-world problems.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-center gap-3">
                      <Phone className="text-terminal-green h-5 w-5" />
                      <span>+261 34 11 815 03</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-terminal-green h-5 w-5" />
                      <span>nicolasromanina@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-terminal-green h-5 w-5" />
                      <span>Madagascar</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Button variant="default" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download CV
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Portfolio
                    </Button>
                  </div>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <div className="text-center p-4">
                    <p className="font-bold">Profile Photo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="content-section mb-16">
        <div className="flex items-center mb-10 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <GraduationCap className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Education</h2>
        </div>
        
        <div className="space-y-8 mb-8 modern-grid" style={{ animationDelay: '400ms' }}>
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Master in Computer Engineering</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">University of Tananariva, 2023</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <span className="text-xs">Graduate Degree</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">Advanced study in computer engineering principles, focusing on software architecture, algorithms, and system design.</p>
                  <h3 className="font-bold mb-2">Key Areas:</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Advanced Software Architecture</li>
                    <li>Distributed Systems Design</li>
                    <li>Machine Learning Applications</li>
                    <li>Cloud Computing Technologies</li>
                    <li>Advanced Database Management</li>
                  </ul>
                  <div className="flex flex-wrap mb-6">
                    <span className="tech-tag">Software Development</span>
                    <span className="tech-tag">System Design</span>
                    <span className="tech-tag">AI/ML</span>
                    <span className="tech-tag">Cloud Technologies</span>
                  </div>
                  
                  <Button variant="outline" className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    View Certification
                  </Button>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Computer Engineering" className="object-cover w-full h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Bachelor in Signal and System Engineering</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">University of Tananariva, 2022</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <span className="text-xs">Undergraduate Degree</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">Comprehensive education in signal processing, system engineering, and fundamental computing concepts.</p>
                  <h3 className="font-bold mb-2">Key Areas:</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Signal Processing Fundamentals</li>
                    <li>Control Systems Engineering</li>
                    <li>Digital Communication Systems</li>
                    <li>Programming Fundamentals</li>
                    <li>Electronics and Circuits</li>
                  </ul>
                  <div className="flex flex-wrap mb-6">
                    <span className="tech-tag">Signal Processing</span>
                    <span className="tech-tag">System Analysis</span>
                    <span className="tech-tag">Programming</span>
                    <span className="tech-tag">Electronics</span>
                  </div>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="Signal and System Engineering" className="object-cover w-full h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Baccalaureate Series C</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">High School Tanambe</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <span className="text-xs">High School Diploma</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">Strong foundation in scientific disciplines with a focus on mathematics, physics, and chemistry.</p>
                  <h3 className="font-bold mb-2">Key Subjects:</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Advanced Mathematics</li>
                    <li>Physics and Physical Sciences</li>
                    <li>Chemistry</li>
                    <li>Biology</li>
                    <li>Computer Science Fundamentals</li>
                  </ul>
                  <div className="flex flex-wrap mb-6">
                    <span className="tech-tag">Mathematics</span>
                    <span className="tech-tag">Physics</span>
                    <span className="tech-tag">Chemistry</span>
                    <span className="tech-tag">Sciences</span>
                  </div>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <div className="text-center p-4">
                    <p className="font-bold">High School Education</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="content-section mb-16">
        <div className="flex items-center mb-10 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <Briefcase className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Professional Experience</h2>
        </div>
        
        <div className="space-y-8 mb-8 modern-grid" style={{ animationDelay: '600ms' }}>
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Senior Frontend Developer</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">TechCorp | 2021-Present</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <span className="text-xs">Current Position</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">Leading frontend development for enterprise applications, focusing on performance, accessibility, and user experience.</p>
                  <h3 className="font-bold mb-2">Key Achievements:</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Led a team of 5 developers to rebuild the company's flagship product</li>
                    <li>Implemented CI/CD pipeline reducing deployment time by 70%</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                    <li>Optimized app performance, reducing load time by 40%</li>
                  </ul>
                  <div className="flex flex-wrap mb-6">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">CI/CD</span>
                  </div>
                  
                  <Button variant="outline" className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    View Projects
                  </Button>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Frontend Development" className="object-cover w-full h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Full Stack Developer</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">StartupXYZ | 2019-2021</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <span className="text-xs">Previous Position</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">Worked on both frontend and backend aspects of web applications in a fast-paced startup environment.</p>
                  <h3 className="font-bold mb-2">Key Responsibilities:</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Developed user-facing features with React and TypeScript</li>
                    <li>Built RESTful APIs using Node.js and Express</li>
                    <li>Implemented database models with MongoDB and PostgreSQL</li>
                    <li>Participated in product design and UX decisions</li>
                  </ul>
                  <div className="flex flex-wrap mb-6">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">PostgreSQL</span>
                  </div>
                  
                  <Button variant="outline" className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    View Case Studies
                  </Button>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" alt="Full Stack Development" className="object-cover w-full h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
