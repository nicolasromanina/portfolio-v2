
import React from 'react';
import Terminal from '../components/Terminal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Briefcase, Cpu, ExternalLink, ChevronRight, Star, Zap, Award, Phone, Mail, GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-12 animate-fade-in">
        <h1 className="text-terminal-green text-5xl font-bold mb-4 font-sans">Nicolas ROMANINA</h1>
        <p className="text-terminal-muted text-lg font-sans">Full Stack Developer | Modern CLI-inspired Portfolio</p>
      </header>
      
      <div className="mb-12 animate-slide-up">
        <Terminal 
          initialPath="/"
          additionalCommands={[
            {
              name: 'education',
              description: 'Show education history',
              handler: () => {
                return `
2023: Master in Computer Engineering, University of Tananariva
2022: Bachelor degree in Signal and System Engineering, University of Tananariva
High School: Baccalaureate Series C, High School Tanambe
                `;
              }
            },
            {
              name: 'experience',
              description: 'Show work experience',
              handler: () => {
                return `
2021-Present: Senior Frontend Developer at TechCorp
- Led a team of 5 developers to rebuild the company's flagship product
- Implemented CI/CD pipeline reducing deployment time by 70%
- Mentored junior developers and conducted code reviews

2019-2021: Full Stack Developer at StartupXYZ
- Developed user-facing features with React and TypeScript
- Built RESTful APIs using Node.js and Express
- Implemented database models with MongoDB and PostgreSQL
                `;
              }
            },
            {
              name: 'contact',
              description: 'Show contact information',
              handler: () => {
                return `
Phone: +261 34 11 815 03
Email: nicolasromanina@gmail.com
Location: Madagascar
                `;
              }
            }
          ]}
        />
      </div>
      
      <div className="content-section mb-16">
        <div className="flex items-center mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <Briefcase className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Featured Projects</h2>
        </div>
        
        <div className="space-y-8 mb-8 modern-grid" style={{ animationDelay: '200ms' }}>
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">E-commerce Platform</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">React, Node.js, MongoDB, Redux</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <Star className="h-3 w-3 text-terminal-green" />
                  <span className="text-xs">Featured</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">A comprehensive e-commerce solution with advanced features like real-time inventory management, customer analytics, personalized recommendations, and a custom content management system.</p>
                  <h3 className="font-bold mb-2">Key Features:</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>User authentication and profile management</li>
                    <li>Product search with filters and sorting</li>
                    <li>Shopping cart and checkout process</li>
                    <li>Payment gateway integration</li>
                    <li>Order tracking and history</li>
                    <li>Admin dashboard with sales analytics</li>
                  </ul>
                  <div className="flex flex-wrap mb-6">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">Redux</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="brutalist-button flex items-center space-x-2">
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="brutalist-button">GitHub</button>
                  </div>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="E-commerce Platform" className="object-cover w-full h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Analytics Dashboard</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">Next.js, D3.js, GraphQL, AWS</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <Zap className="h-3 w-3 text-terminal-green" />
                  <span className="text-xs">New</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">Real-time analytics dashboard with customizable widgets, comprehensive data visualization, and automated reporting capabilities for business intelligence.</p>
                  <h3 className="font-bold mb-2">Key Features:</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Real-time data processing</li>
                    <li>Interactive charts and graphs</li>
                    <li>Customizable dashboard layouts</li>
                    <li>Data export in multiple formats</li>
                    <li>Automated report generation</li>
                    <li>User permission management</li>
                  </ul>
                  <div className="flex flex-wrap mb-6">
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">D3.js</span>
                    <span className="tech-tag">GraphQL</span>
                    <span className="tech-tag">AWS</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="brutalist-button flex items-center space-x-2">
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="brutalist-button">GitHub</button>
                  </div>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" alt="Analytics Dashboard" className="object-cover w-full h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Content Management System</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">TypeScript, PostgreSQL, Express, React</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <Award className="h-3 w-3 text-terminal-green" />
                  <span className="text-xs">Award-winning</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">A modern CMS built with TypeScript and PostgreSQL, featuring role-based access control, content versioning, and a flexible content modeling system.</p>
                  <h3 className="font-bold mb-2">Key Features:</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Customizable content types and fields</li>
                    <li>Media library with image processing</li>
                    <li>Content versioning and history</li>
                    <li>Role-based permissions</li>
                    <li>API-first architecture</li>
                    <li>SEO optimization tools</li>
                  </ul>
                  <div className="flex flex-wrap mb-6">
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">React</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="brutalist-button flex items-center space-x-2">
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="brutalist-button">GitHub</button>
                  </div>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="Content Management System" className="object-cover w-full h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-end mt-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <button onClick={() => window.location.href = '/projects'} className="brutalist-button flex items-center space-x-2">
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="mt-6 glass-panel text-terminal-muted text-sm font-sans animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p>Pro tip: Type 'projects' in the terminal for more details or use 'cd projects' to navigate to the projects page</p>
        </div>
      </div>
      
      <div className="content-section mb-16">
        <div className="flex items-center mb-10 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <GraduationCap className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Education</h2>
        </div>
        
        <div className="space-y-8 mb-8 modern-grid" style={{ animationDelay: '200ms' }}>
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
          <Cpu className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Technical Skills</h2>
        </div>
        
        <div className="space-y-8 mb-8 modern-grid" style={{ animationDelay: '200ms' }}>
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Frontend Development</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">Modern UI/UX Technologies</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <span className="text-xs">Advanced</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">Expertise in building responsive, accessible, and performant user interfaces with modern JavaScript frameworks.</p>
                  <div className="space-y-5 font-sans mb-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-bold">React & React Native</span>
                        <span className="text-terminal-green">95%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-bold">TypeScript / JavaScript</span>
                        <span className="text-terminal-green">90%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-bold">Tailwind CSS / SCSS</span>
                        <span className="text-terminal-green">92%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">Tailwind CSS</span>
                  </div>
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
                  <CardTitle className="font-sans text-2xl">Backend Development</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">Server and API Technologies</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <span className="text-xs">Advanced</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-4">Strong background in developing scalable and maintainable backend services, APIs, and database systems.</p>
                  <div className="space-y-5 font-sans mb-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-bold">Node.js / Express</span>
                        <span className="text-terminal-green">88%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-bold">PostgreSQL / MongoDB</span>
                        <span className="text-terminal-green">85%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-bold">REST API Design</span>
                        <span className="text-terminal-green">92%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">PostgreSQL</span>
                  </div>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Backend Development" className="object-cover w-full h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="content-section mb-16">
        <div className="flex items-center mb-10 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <Mail className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Contact Information</h2>
        </div>
        
        <Card className="feature-card group">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="font-sans text-2xl">Get In Touch</CardTitle>
                <CardDescription className="font-mono text-xs mt-1">Let's work together</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="font-sans mb-4">I'm always interested in hearing about new projects, opportunities, and collaborations. Feel free to reach out!</p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="text-terminal-green h-5 w-5" />
                    <span>+261 34 11 815 03</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-terminal-green h-5 w-5" />
                    <span>nicolasromanina@gmail.com</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-6">
                  <button className="brutalist-button flex items-center space-x-2">
                    <span>Download Resume</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button onClick={() => window.location.href = '/contact'} className="brutalist-button">Contact Me</button>
                </div>
              </div>
              <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                <div className="text-center p-4">
                  <p className="font-bold">Contact Information</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
