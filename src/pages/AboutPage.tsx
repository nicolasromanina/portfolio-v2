
import React from 'react';
import Terminal from '../components/Terminal';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-terminal-green text-3xl font-bold mb-2">About Me</h1>
        <p className="text-terminal-muted">Get to know the developer behind the code</p>
      </header>
      
      <div className="mb-8">
        <Terminal initialPath="/about" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <div className="brutalist-card p-6 h-full">
            <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 mb-4">
              <p className="text-center font-bold">Profile Picture</p>
            </div>
            <h2 className="text-xl font-bold mb-2">John Developer</h2>
            <p className="text-terminal-muted mb-4">Full Stack Developer</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Experience:</span>
                <span>5+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Availability:</span>
                <span className="text-terminal-green">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="brutalist-card p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">My Story</h2>
            <p className="mb-4">
              I'm a passionate Full Stack Developer with 5+ years of experience building web applications that solve real-world problems. My journey began with a fascination for technology and a desire to create products that impact people's lives.
            </p>
            <p className="mb-4">
              After graduating with a Master's in Software Engineering, I joined StartupXYZ where I cut my teeth on fast-paced development cycles and learned to wear many hats. This experience taught me to be adaptable and solution-oriented.
            </p>
            <p>
              Currently, I'm working as a Senior Frontend Developer at TechCorp, where I lead a team developing innovative web applications. I'm particularly interested in performance optimization, accessibility, and creating delightful user experiences.
            </p>
          </div>
          
          <div className="brutalist-card p-6">
            <h2 className="text-xl font-bold mb-4">Education & Certifications</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">M.S. Software Engineering</h3>
                <p className="text-terminal-muted">Code Academy | 2019-2021</p>
                <p>Specialized in Web Technologies and Cloud Computing</p>
              </div>
              <div>
                <h3 className="font-bold">B.S. Computer Science</h3>
                <p className="text-terminal-muted">Tech University | 2015-2019</p>
                <p>Minor in Human-Computer Interaction</p>
              </div>
              <div>
                <h3 className="font-bold">Certifications</h3>
                <ul className="list-disc pl-5">
                  <li>AWS Solutions Architect</li>
                  <li>Google Cloud Professional Developer</li>
                  <li>React Advanced Patterns (Frontend Masters)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="brutalist-card p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Professional Journey</h2>
        <div className="space-y-6">
          <div className="relative border-l-2 border-brutalist-black pl-6 pb-6">
            <div className="absolute w-4 h-4 bg-terminal-green border-2 border-brutalist-black rounded-full -left-[9px] top-0"></div>
            <h3 className="font-bold">Senior Frontend Developer</h3>
            <p className="text-terminal-muted">TechCorp | 2021-Present</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Led a team of 5 developers to rebuild the company's flagship product</li>
              <li>Implemented CI/CD pipeline reducing deployment time by 70%</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Optimized app performance, reducing load time by 40%</li>
            </ul>
          </div>
          
          <div className="relative border-l-2 border-brutalist-black pl-6">
            <div className="absolute w-4 h-4 bg-terminal-green border-2 border-brutalist-black rounded-full -left-[9px] top-0"></div>
            <h3 className="font-bold">Full Stack Developer</h3>
            <p className="text-terminal-muted">StartupXYZ | 2019-2021</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Developed user-facing features with React and TypeScript</li>
              <li>Built RESTful APIs using Node.js and Express</li>
              <li>Implemented database models with MongoDB and PostgreSQL</li>
              <li>Participated in product design and UX decisions</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-terminal-muted">
        <p>Pro tip: Use the 'experience' command in the terminal to see a summary of my work history</p>
      </div>
    </div>
  );
};

export default AboutPage;
