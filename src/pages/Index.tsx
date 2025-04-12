
import React from 'react';
import Terminal from '../components/Terminal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Briefcase, Cpu, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-12 animate-fade-in">
        <h1 className="text-terminal-green text-4xl font-bold mb-3 font-sans">Developer Portfolio</h1>
        <p className="text-terminal-muted font-sans">A modern neo-brutalist CLI-inspired showcase</p>
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
      
      <div className="mb-12">
        <div className="flex items-center mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <Briefcase className="text-terminal-green mr-3 h-6 w-6" />
          <h2 className="text-terminal-green text-2xl font-bold font-sans">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 modern-grid" style={{ animationDelay: '200ms' }}>
          <Card className="brutalist-card group h-full">
            <CardHeader>
              <CardTitle className="font-sans">E-commerce Platform</CardTitle>
              <CardDescription className="font-mono text-xs">React, Node.js, MongoDB</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-sans mb-4">A full-featured e-commerce platform with real-time inventory management, customer analytics, and a custom CMS.</p>
              <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="brutalist-button flex items-center space-x-2">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="brutalist-card group h-full">
            <CardHeader>
              <CardTitle className="font-sans">Analytics Dashboard</CardTitle>
              <CardDescription className="font-mono text-xs">Next.js, D3.js, GraphQL</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-sans mb-4">Real-time analytics dashboard with customizable widgets, data visualization, and automated reporting.</p>
              <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="brutalist-button flex items-center space-x-2">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="brutalist-card group h-full">
            <CardHeader>
              <CardTitle className="font-sans">CMS</CardTitle>
              <CardDescription className="font-mono text-xs">TypeScript, PostgreSQL</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-sans mb-4">A modern content management system built with TypeScript and PostgreSQL, featuring role-based access control.</p>
              <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="brutalist-button flex items-center space-x-2">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-4 text-terminal-muted text-sm font-sans animate-fade-in" style={{ animationDelay: '300ms' }}>
          <p>Pro tip: Type 'projects' in the terminal for more details or use 'cd projects' to navigate to the projects page</p>
        </div>
      </div>
      
      <div className="mb-12">
        <div className="flex items-center mb-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <Cpu className="text-terminal-green mr-3 h-6 w-6" />
          <h2 className="text-terminal-green text-2xl font-bold font-sans">Technical Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 modern-grid" style={{ animationDelay: '500ms' }}>
          <div className="brutalist-card p-6 h-full">
            <h3 className="font-bold mb-4 font-sans flex items-center">
              <Code className="mr-2 h-5 w-5" />
              Frontend
            </h3>
            <ul className="list-disc pl-5 font-sans space-y-2">
              <li>React & React Native</li>
              <li>TypeScript / JavaScript</li>
              <li>Next.js</li>
              <li>Tailwind CSS / SCSS</li>
              <li>Redux / Context API</li>
            </ul>
          </div>
          
          <div className="brutalist-card p-6 h-full">
            <h3 className="font-bold mb-4 font-sans flex items-center">
              <Cpu className="mr-2 h-5 w-5" />
              Backend
            </h3>
            <ul className="list-disc pl-5 font-sans space-y-2">
              <li>Node.js / Express</li>
              <li>GraphQL</li>
              <li>PostgreSQL / MongoDB</li>
              <li>REST API Design</li>
              <li>AWS / Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
