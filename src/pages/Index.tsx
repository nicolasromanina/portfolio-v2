import React, { useState } from 'react';
import Terminal from '../components/Terminal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Briefcase, Cpu, ExternalLink, ChevronRight, Star, Zap, Award, Phone, Mail, GraduationCap, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveDemo: string;
  sourceCode: string;
  badge?: { icon: React.ReactNode; label: string };
}

const Index = ({ theme = 'dark' }: { theme?: 'dark' | 'light' }) => {
  const navigate = useNavigate();
  const [isResumeDownloading, setIsResumeDownloading] = useState(false);

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Star className="h-3 w-3" />, label: 'Featured' }
    },
    {
      id: '2',
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with customizable widgets.',
      technologies: ['Next.js', 'D3.js', 'GraphQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Zap className="h-3 w-3" />, label: 'New' }
    },
    {
      id: '3',
      title: 'Content Management System',
      description: 'A modern CMS with role-based access control.',
      technologies: ['TypeScript', 'PostgreSQL', 'Express', 'React'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Award className="h-3 w-3" />, label: 'Award-winning' }
    }
  ];

  const themeStyles = {
    dark: {
      container: 'bg-gray-900 text-gray-100',
      card: 'bg-gray-800/50 backdrop-blur-md border-gray-700',
      text: 'text-gray-100',
      muted: 'text-gray-400',
      accent: 'text-green-400',
      button: 'bg-green-600 hover:bg-green-700'
    },
    light: {
      container: 'bg-gray-100 text-gray-900',
      card: 'bg-white/80 backdrop-blur-md border-gray-200',
      text: 'text-gray-900',
      muted: 'text-gray-600',
      accent: 'text-green-600',
      button: 'bg-green-500 hover:bg-green-600'
    }
  };

  const currentTheme = themeStyles[theme];

  const handleResumeDownload = () => {
    setIsResumeDownloading(true);
    setTimeout(() => {
      setIsResumeDownloading(false);
      // Simulate resume download
      window.open('/resume.pdf', '_blank');
    }, 1000);
  };

  return (
    <motion.div 
      className={`max-w-7xl mx-auto p-6 ${currentTheme.container}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-12">
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-start gap-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.img 
            src="/profile.jpg" 
            alt="Nicolas Romanina" 
            className="w-24 h-24 rounded-full border-2 border-green-400"
            whileHover={{ scale: 1.1 }}
          />

          <div>
            <h1 className={`text-5xl font-bold ${currentTheme.accent} mb-2 font-mono`}>
              Nicolas ROMANINA
            </h1>
            <p className={`text-xl ${currentTheme.muted} font-sans`}>
              Full Stack Developer | Crafting Modern Web Solutions
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/nicolasromanina" target="_blank" rel="noopener noreferrer">
                <Github className={`h-6 w-6 ${currentTheme.accent} hover:scale-110 transition-transform`} />
              </a>
              <a href="https://linkedin.com/in/nicolasromanina" target="_blank" rel="noopener noreferrer">
                <Linkedin className={`h-6 w-6 ${currentTheme.accent} hover:scale-110 transition-transform`} />
              </a>
              <a href="https://twitter.com/nicolasromanina" target="_blank" rel="noopener noreferrer">
                <Twitter className={`h-6 w-6 ${currentTheme.accent} hover:scale-110 transition-transform`} />
              </a>
            </div>
          </div>
        </motion.div>
      </header>

      <motion.div 
        className="mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Terminal 
          initialPath="/"
          theme={theme}
          additionalCommands={[
            {
              name: 'education',
              description: 'Show education history',
              handler: () => `
2023: Master in Computer Engineering, University of Tananariva
2022: Bachelor in Signal and System Engineering, University of Tananariva
High School: Baccalaureate Series C, High School Tanambe
              `
            },
            {
              name: 'experience',
              description: 'Show work experience',
              handler: () => `
2021-Present: Senior Frontend Developer at TechCorp
- Led team of 5 developers to rebuild flagship product
- Implemented CI/CD pipeline (70% faster deployment)
- Mentored junior developers

2019-2021: Full Stack Developer at StartupXYZ
- Developed user-facing features (React, TypeScript)
- Built RESTful APIs (Node.js, Express)
- Managed databases (MongoDB, PostgreSQL)
              `
            },
            {
              name: 'contact',
              description: 'Show contact information',
              handler: () => `
Phone: +261 34 11 815 03
Email: nicolasromanina@gmail.com
Location: Madagascar
              `
            },
            {
              name: 'social',
              description: 'Show social media profiles',
              handler: () => `
GitHub: github.com/nicolasromanina
LinkedIn: linkedin.com/in/nicolasromanina
Twitter: twitter.com/nicolasromanina
              `
            }
          ]}
        />
      </motion.div>

      <div className="content-section mb-16">
        <motion.div 
          className="flex items-center mb-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Briefcase className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Featured Projects
          </h2>
        </motion.div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className={`group ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  role="article"
                  aria-labelledby={`project-title-${project.id}`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle 
                          id={`project-title-${project.id}`}
                          className="font-sans text-xl group-hover:text-green-400 transition-colors"
                        >
                          {project.title}
                        </CardTitle>
                        <CardDescription className="font-mono text-xs mt-1">
                          {project.technologies.join(', ')}
                        </CardDescription>
                      </div>
                      {project.badge && (
                        <Badge 
                          className={`flex items-center space-x-1 ${currentTheme.accent} bg-opacity-20`}
                          variant="secondary"
                        >
                          {project.badge.icon}
                          <span className="text-xs">{project.badge.label}</span>
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="relative h-40 overflow-hidden rounded-lg mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                    <p className={`font-sans mb-4 text-sm ${currentTheme.text}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        className={`flex items-center gap-2 text-sm ${currentTheme.button}`}
                        asChild
                      >
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <span>Live Demo</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="text-sm"
                        asChild
                      >
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="flex justify-end mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Button 
            className={`${currentTheme.button} flex items-center gap-2`}
            onClick={() => navigate('/projects')}
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>

        <motion.div 
          className={`mt-6 p-4 rounded-lg backdrop-blur-md ${currentTheme.card} text-sm font-sans`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className={currentTheme.muted}>
            Pro tip: Type 'projects' in the terminal for details or 'cd projects' to navigate
          </p>
        </motion.div>
      </div>

      <div className="content-section mb-16">
        <motion.div 
          className="flex items-center mb-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <GraduationCap className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Education
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            {
              title: 'Master in Computer Engineering',
              institution: 'University of Tananariva, 2023',
              description: 'Advanced study in software architecture and system design.',
              skills: ['Software Development', 'System Design', 'AI/ML', 'Cloud']
            },
            {
              title: 'Bachelor in Signal and System Engineering',
              institution: 'University of Tananariva, 2022',
              description: 'Comprehensive education in signal processing and systems.',
              skills: ['Signal Processing', 'System Analysis', 'Programming', 'Electronics']
            },
            {
              title: 'Baccalaureate Series C',
              institution: 'High School Tanambe',
              description: 'Strong foundation in mathematics and sciences.',
              skills: ['Mathematics', 'Physics', 'Chemistry', 'Sciences']
            }
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card className={`group ${currentTheme.card} hover:shadow-xl transition-all`}>
                <CardHeader>
                  <CardTitle className="font-sans text-xl">{edu.title}</CardTitle>
                  <CardDescription className="font-mono text-xs">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm ${currentTheme.text} mb-4`}>{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="content-section mb-16">
        <motion.div 
          className="flex items-center mb-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Cpu className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Technical Skills
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            {
              title: 'Frontend Development',
              description: 'Building responsive and performant UIs.',
              skills: [
                { name: 'React & React Native', level: 95 },
                { name: 'TypeScript / JavaScript', level: 90 },
                { name: 'Tailwind CSS / SCSS', level: 92 }
              ],
              tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
            },
            {
              title: 'Backend Development',
              description: 'Developing scalable backend services and APIs.',
              skills: [
                { name: 'Node.js / Express', level: 88 },
                { name: 'PostgreSQL / MongoDB', level: 85 },
                { name: 'REST API Design', level: 92 }
              ],
              tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL']
            }
          ].map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card className={`group ${currentTheme.card} hover:shadow-xl transition-all`}>
                <CardHeader>
                  <CardTitle className="font-sans text-xl">{skillSet.title}</CardTitle>
                  <CardDescription className="font-mono text-xs">{skillSet.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4">
                    {skillSet.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-1">
                          <span className="font-bold">{skill.name}</span>
                          <span className={currentTheme.accent}>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full ${currentTheme.button}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: 0.8, duration: 1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="content-section mb-16">
        <motion.div 
          className="flex items-center mb-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Mail className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Contact Information
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className={`group ${currentTheme.card} hover:shadow-xl transition-all`}>
            <CardHeader>
              <CardTitle className="font-sans text-xl">Get In Touch</CardTitle>
              <CardDescription className="font-mono text-xs">Let's collaborate on your next project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className={`font-sans mb-4 ${currentTheme.text}`}>
                    I'm excited about new projects and opportunities. Reach out to discuss how we can work together!
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Phone className={`h-5 w-5 ${currentTheme.accent}`} />
                      <span>+261 34 11 815 03</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className={`h-5 w-5 ${currentTheme.accent}`} />
                      <span>nicolasromanina@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className={`${currentTheme.button} flex items-center gap-2`}
                      onClick={handleResumeDownload}
                      disabled={isResumeDownloading}
                    >
                      <motion.span
                        animate={{ rotate: isResumeDownloading ? 360 : 0 }}
                        transition={{ duration: 1, repeat: isResumeDownloading ? Infinity : 0 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.span>
                      <span>{isResumeDownloading ? 'Downloading...' : 'Download Resume'}</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="text-sm"
                      onClick={() => navigate('/contact')}
                    >
                      Contact Me
                    </Button>
                  </div>
                </div>
                <motion.div 
                  className="relative h-64 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" 
                    alt="Contact" 
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;