
import React from 'react';
import Terminal from '../components/Terminal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Briefcase, Cpu, ExternalLink, ChevronRight, Star, Zap, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-12 animate-fade-in">
        <h1 className="text-terminal-green text-5xl font-bold mb-4 font-sans">Developer Portfolio</h1>
        <p className="text-terminal-muted text-lg font-sans">A modern neo-brutalist CLI-inspired showcase</p>
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
2015-2019: B.S. Computer Science, Tech University
2019-2021: M.S. Software Engineering, Code Academy
Certifications: AWS Solutions Architect, Google Cloud Professional Developer
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
            }
          ]}
        />
      </div>
      
      <div className="content-section mb-16">
        <div className="flex items-center mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <Briefcase className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 modern-grid" style={{ animationDelay: '200ms' }}>
          <Card className="feature-card group h-full">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">E-commerce Platform</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">React, Node.js, MongoDB</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <Star className="h-3 w-3 text-terminal-green" />
                  <span className="text-xs">Featured</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-sans mb-6">A full-featured e-commerce platform with real-time inventory management, customer analytics, and a custom CMS.</p>
              <div className="flex flex-wrap mb-6">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Redux</span>
              </div>
              <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="brutalist-button flex items-center space-x-2">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card group h-full">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Analytics Dashboard</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">Next.js, D3.js, GraphQL</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <Zap className="h-3 w-3 text-terminal-green" />
                  <span className="text-xs">New</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-sans mb-6">Real-time analytics dashboard with customizable widgets, data visualization, and automated reporting.</p>
              <div className="flex flex-wrap mb-6">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">D3.js</span>
                <span className="tech-tag">GraphQL</span>
                <span className="tech-tag">AWS</span>
              </div>
              <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="brutalist-button flex items-center space-x-2">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card group h-full">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">CMS</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">TypeScript, PostgreSQL</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <Award className="h-3 w-3 text-terminal-green" />
                  <span className="text-xs">Award-winning</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-sans mb-6">A modern content management system built with TypeScript and PostgreSQL, featuring role-based access control.</p>
              <div className="flex flex-wrap mb-6">
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">React</span>
              </div>
              <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="brutalist-button flex items-center space-x-2">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
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
          <Cpu className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Technical Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 modern-grid" style={{ animationDelay: '600ms' }}>
          <div className="brutalist-card p-8 h-full hover-glow">
            <h3 className="font-bold mb-6 text-xl font-sans flex items-center">
              <Code className="mr-3 h-5 w-5 text-terminal-green" />
              Frontend
            </h3>
            <div className="space-y-5 font-sans">
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
                  <span className="font-bold">Next.js</span>
                  <span className="text-terminal-green">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
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
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">Redux / Context API</span>
                  <span className="text-terminal-green">88%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="brutalist-card p-8 h-full hover-glow">
            <h3 className="font-bold mb-6 text-xl font-sans flex items-center">
              <Cpu className="mr-3 h-5 w-5 text-terminal-green" />
              Backend
            </h3>
            <div className="space-y-5 font-sans">
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
                  <span className="font-bold">GraphQL</span>
                  <span className="text-terminal-green">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
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
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">AWS / Firebase</span>
                  <span className="text-terminal-green">75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <button onClick={() => window.location.href = '/skills'} className="brutalist-button flex items-center space-x-2">
            <span>View All Skills</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
