
import React from 'react';
import Terminal from '../components/Terminal';

const SkillsPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-terminal-green text-3xl font-bold mb-2">Skills</h1>
        <p className="text-terminal-muted">Technical expertise and capabilities</p>
      </header>
      
      <div className="mb-8">
        <Terminal initialPath="/skills" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="brutalist-card p-6">
          <h2 className="text-xl font-bold mb-4">Frontend</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold">React</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold">TypeScript</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Next.js</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Tailwind CSS</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="brutalist-card p-6">
          <h2 className="text-xl font-bold mb-4">Backend</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold">Node.js</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Express</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold">PostgreSQL</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold">MongoDB</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="brutalist-card p-6">
          <h2 className="text-xl font-bold mb-4">DevOps</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold">Docker</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold">AWS</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold">CI/CD</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '82%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Git</h3>
              <div className="h-2 w-full bg-brutalist-grey mt-1">
                <div className="h-full bg-terminal-green" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="brutalist-card p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Additional Skills</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <li className="bg-brutalist-grey/30 p-2 border-2 border-brutalist-black">GraphQL</li>
          <li className="bg-brutalist-grey/30 p-2 border-2 border-brutalist-black">Firebase</li>
          <li className="bg-brutalist-grey/30 p-2 border-2 border-brutalist-black">Redux</li>
          <li className="bg-brutalist-grey/30 p-2 border-2 border-brutalist-black">React Native</li>
          <li className="bg-brutalist-grey/30 p-2 border-2 border-brutalist-black">Jest</li>
          <li className="bg-brutalist-grey/30 p-2 border-2 border-brutalist-black">Cypress</li>
          <li className="bg-brutalist-grey/30 p-2 border-2 border-brutalist-black">Storybook</li>
          <li className="bg-brutalist-grey/30 p-2 border-2 border-brutalist-black">Figma</li>
          <li className="bg-brutalist-grey/30 p-2 border-2 border-brutalist-black">Agile/Scrum</li>
        </ul>
      </div>
      
      <div className="text-terminal-muted">
        <p>Pro tip: Use the terminal to navigate between sections with the 'cd' command</p>
      </div>
    </div>
  );
};

export default SkillsPage;
