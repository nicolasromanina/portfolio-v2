
import React from 'react';
import Terminal from '../components/Terminal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-terminal-green text-3xl font-bold mb-2">Projects</h1>
        <p className="text-terminal-muted">Showcasing my best work</p>
      </header>
      
      <div className="mb-8">
        <Terminal initialPath="/projects" />
      </div>
      
      <div className="space-y-8 mb-8">
        <Card className="brutalist-card">
          <CardHeader>
            <CardTitle className="text-2xl">E-commerce Platform</CardTitle>
            <CardDescription>React, Node.js, MongoDB, Redux</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">A comprehensive e-commerce solution with advanced features like real-time inventory management, customer analytics, personalized recommendations, and a custom content management system.</p>
                <h3 className="font-bold mb-2">Key Features:</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>User authentication and profile management</li>
                  <li>Product search with filters and sorting</li>
                  <li>Shopping cart and checkout process</li>
                  <li>Payment gateway integration</li>
                  <li>Order tracking and history</li>
                  <li>Admin dashboard with sales analytics</li>
                </ul>
                <div className="flex gap-2">
                  <button className="brutalist-button">Live Demo</button>
                  <button className="brutalist-button">GitHub</button>
                </div>
              </div>
              <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30">
                <p className="text-center font-bold">Project Screenshot</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="brutalist-card">
          <CardHeader>
            <CardTitle className="text-2xl">Analytics Dashboard</CardTitle>
            <CardDescription>Next.js, D3.js, GraphQL, AWS</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">Real-time analytics dashboard with customizable widgets, comprehensive data visualization, and automated reporting capabilities for business intelligence.</p>
                <h3 className="font-bold mb-2">Key Features:</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Real-time data processing</li>
                  <li>Interactive charts and graphs</li>
                  <li>Customizable dashboard layouts</li>
                  <li>Data export in multiple formats</li>
                  <li>Automated report generation</li>
                  <li>User permission management</li>
                </ul>
                <div className="flex gap-2">
                  <button className="brutalist-button">Live Demo</button>
                  <button className="brutalist-button">GitHub</button>
                </div>
              </div>
              <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30">
                <p className="text-center font-bold">Project Screenshot</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="brutalist-card">
          <CardHeader>
            <CardTitle className="text-2xl">Content Management System</CardTitle>
            <CardDescription>TypeScript, PostgreSQL, Express, React</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">A modern CMS built with TypeScript and PostgreSQL, featuring role-based access control, content versioning, and a flexible content modeling system.</p>
                <h3 className="font-bold mb-2">Key Features:</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Customizable content types and fields</li>
                  <li>Media library with image processing</li>
                  <li>Content versioning and history</li>
                  <li>Role-based permissions</li>
                  <li>API-first architecture</li>
                  <li>SEO optimization tools</li>
                </ul>
                <div className="flex gap-2">
                  <button className="brutalist-button">Live Demo</button>
                  <button className="brutalist-button">GitHub</button>
                </div>
              </div>
              <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30">
                <p className="text-center font-bold">Project Screenshot</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-terminal-muted">
        <p>Pro tip: Type 'projects' in the terminal to see a quick list of all projects</p>
      </div>
    </div>
  );
};

export default ProjectsPage;
