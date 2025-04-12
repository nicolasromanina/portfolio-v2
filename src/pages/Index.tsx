
import React from 'react';
import Terminal from '../components/Terminal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-terminal-green text-3xl font-bold mb-2">Developer Portfolio</h1>
        <p className="text-terminal-muted">A neo-brutalist CLI-inspired showcase</p>
      </header>
      
      <div className="mb-8">
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
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-terminal-green text-2xl font-bold">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="brutalist-card">
            <CardHeader>
              <CardTitle>E-commerce Platform</CardTitle>
              <CardDescription>React, Node.js, MongoDB</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A full-featured e-commerce platform with real-time inventory management, customer analytics, and a custom CMS.</p>
              <div className="flex justify-end mt-4">
                <button className="brutalist-button">View Project</button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="brutalist-card">
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>Next.js, D3.js, GraphQL</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Real-time analytics dashboard with customizable widgets, data visualization, and automated reporting.</p>
              <div className="flex justify-end mt-4">
                <button className="brutalist-button">View Project</button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="brutalist-card">
            <CardHeader>
              <CardTitle>CMS</CardTitle>
              <CardDescription>TypeScript, PostgreSQL</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A modern content management system built with TypeScript and PostgreSQL, featuring role-based access control.</p>
              <div className="flex justify-end mt-4">
                <button className="brutalist-button">View Project</button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-4 text-terminal-muted text-sm">
          <p>Pro tip: Type 'projects' in the terminal for more details or use 'cd projects' to navigate to the projects page</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-terminal-green text-2xl font-bold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="brutalist-card p-4">
            <h3 className="font-bold mb-2">Frontend</h3>
            <ul className="list-disc pl-5">
              <li>React & React Native</li>
              <li>TypeScript / JavaScript</li>
              <li>Next.js</li>
              <li>Tailwind CSS / SCSS</li>
              <li>Redux / Context API</li>
            </ul>
          </div>
          
          <div className="brutalist-card p-4">
            <h3 className="font-bold mb-2">Backend</h3>
            <ul className="list-disc pl-5">
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
