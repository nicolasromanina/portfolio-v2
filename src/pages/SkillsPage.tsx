import React from 'react';
import Terminal from '../components/Terminal';
import { Cpu, Code, Server, GitBranch } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SkillsPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-terminal-green text-3xl font-bold mb-2">Skills</h1>
        <p className="text-terminal-muted">Technical expertise and capabilities</p>
      </header>
      
      <div className="mb-8 animate-slide-up">
        <Terminal initialPath="/skills" />
      </div>
      
      <div className="content-section mb-16">
        <div className="flex items-center mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <Cpu className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Technical Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 modern-grid" style={{ animationDelay: '200ms' }}>
          <div className="brutalist-card p-8 h-full hover-glow">
            <h3 className="font-bold mb-6 text-xl font-sans flex items-center">
              <Code className="mr-3 h-5 w-5 text-terminal-green" />
              Frontend
            </h3>
            <div className="space-y-5 font-sans">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">React</span>
                  <span className="text-terminal-green">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">TypeScript</span>
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
                  <span className="font-bold">Tailwind CSS</span>
                  <span className="text-terminal-green">92%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">Redux</span>
                  <span className="text-terminal-green">88%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="w-full text-sm font-medium mt-4"
              >
                View Frontend Projects
              </Button>
            </div>
          </div>
          
          <div className="brutalist-card p-8 h-full hover-glow">
            <h3 className="font-bold mb-6 text-xl font-sans flex items-center">
              <Server className="mr-3 h-5 w-5 text-terminal-green" />
              Backend
            </h3>
            <div className="space-y-5 font-sans">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">Node.js</span>
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
                  <span className="font-bold">PostgreSQL</span>
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
                  <span className="font-bold">AWS</span>
                  <span className="text-terminal-green">75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="w-full text-sm font-medium mt-4"
              >
                View Backend Projects
              </Button>
            </div>
          </div>
          
          <div className="brutalist-card p-8 h-full hover-glow">
            <h3 className="font-bold mb-6 text-xl font-sans flex items-center">
              <GitBranch className="mr-3 h-5 w-5 text-terminal-green" />
              DevOps
            </h3>
            <div className="space-y-5 font-sans">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">Docker</span>
                  <span className="text-terminal-green">75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">CI/CD</span>
                  <span className="text-terminal-green">82%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">Git</span>
                  <span className="text-terminal-green">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">Kubernetes</span>
                  <span className="text-terminal-green">70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold">Terraform</span>
                  <span className="text-terminal-green">65%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="w-full text-sm font-medium mt-4"
              >
                View DevOps Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-section mb-16">
        <div className="flex items-center mb-10 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <Code className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Additional Skills</h2>
        </div>
        
        <div className="brutalist-card p-6 mb-8 hover-glow animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div className="tech-tag">GraphQL</div>
            <div className="tech-tag">Firebase</div>
            <div className="tech-tag">Redux</div>
            <div className="tech-tag">React Native</div>
            <div className="tech-tag">Jest</div>
            <div className="tech-tag">Cypress</div>
            <div className="tech-tag">Storybook</div>
            <div className="tech-tag">Figma</div>
            <div className="tech-tag">Agile/Scrum</div>
            <div className="tech-tag">UI/UX Design</div>
            <div className="tech-tag">Python</div>
            <div className="tech-tag">Microservices</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 glass-panel text-terminal-muted text-sm font-sans animate-fade-in" style={{ animationDelay: '500ms' }}>
        <p>Pro tip: Use the terminal to explore my skills with the 'skills' command</p>
      </div>
    </div>
  );
};

export default SkillsPage;
