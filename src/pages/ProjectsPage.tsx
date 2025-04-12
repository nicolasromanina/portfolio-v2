
import React from 'react';
import Terminal from '../components/Terminal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ExternalLink } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-terminal-green text-3xl font-bold mb-2">Projects</h1>
        <p className="text-terminal-muted">Showcasing my best work</p>
      </header>
      
      <div className="mb-8 animate-slide-up">
        <Terminal initialPath="/projects" />
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
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow">
                  <p className="text-center font-bold">Project Screenshot</p>
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
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow">
                  <p className="text-center font-bold">Project Screenshot</p>
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
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow">
                  <p className="text-center font-bold">Project Screenshot</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-6 glass-panel text-terminal-muted text-sm font-sans animate-fade-in" style={{ animationDelay: '400ms' }}>
        <p>Pro tip: Type 'projects' in the terminal for more details or use 'cd projects' to navigate to the projects page</p>
      </div>
    </div>
  );
};

export default ProjectsPage;
