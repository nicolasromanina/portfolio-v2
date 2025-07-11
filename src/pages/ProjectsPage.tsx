import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ExternalLink, Star, Zap, Award, Cpu, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  liveDemo: string;
  sourceCode: string;
  badge?: { icon: React.ReactNode; label: string };
  category: string;
}

const ProjectsPage = ({ theme = 'dark' }: { theme?: 'dark' | 'light' }) => {
  const [filter, setFilter] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Pharmacy Management',
      description: 'A  Pharmacy Management System API built using Spring Boot. It includes core functionalities for user authentication (login and registration), sales management, inventory tracking, customer management, reporting, and dashboard views. JWT tokens are used for secure user sessions.',
      technologies: ['JAVA', 'Spring boot', 'MongoDB'],
      features: [
        'User Authentication & Authorization',
        'Sales Management',
        'Inventory Management',
        'Customer Management',
        'Reporting',
        'Admin dashboard with analytics'
      ],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      liveDemo: '#',
      sourceCode: 'https://github.com/nicolasromanina/pharmacy-api',
      badge: { icon: <Star className="h-3 w-3" />, label: 'Featured' },
      category: 'Web'
    },
    {
      id: '2',
      title: 'RFID Security System',
      description: 'A security system based on reading RFID badges using a PIC16F877A microcontroller. The system reads an RFID badge via UART, controls a relay for locking/unlocking a door.',
      technologies: ['C', 'C++'],
      features: [
        'Lecture de tags RFID via UART',
        'Vérification des tags RFID par rapport à une liste prédéfinie',
        'Commande d\'un relais pour ouvrir/fermer une porte',
        'Messages d\'accueil et d\'invite pour scanner un badge',
        'Gestion robuste des erreurs UART',
        'User permission management'
      ],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Cpu className="h-3 w-3" />, label: 'IoT' },
      category: 'IoT'
    },
    {
      id: '3',
      title: 'To-Do List Application',
      description: 'A full-stack task management application with a Spring Boot backend and a React + TypeScript + Vite frontend. It features user authentication, task management, and a responsive design.',
      technologies: ['Java 21', 'Spring Boot 3', 'Spring Data MongoDB', 'Maven', 'React', 'TypeScript', 'Vite'],
      features: [
        'REST API for CRUD operations on tasks',
        'Input validation and error handling',
        'CORS configuration for frontend communication',
        'User authentication with JWT',
        'Task management with due dates and priorities',
        'Filter tasks by status (All/Completed/In Progress)',
        'Responsive design with Tailwind CSS',
      ],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      liveDemo: '#',
      sourceCode: 'https://github.com/nicolasromanina/to-do-list',
      badge: { icon: <Star className="h-3 w-3" />, label: 'Featured' },
      category: 'Web'
    },
    {
      id: '4',
      title: 'PrintPro - Print Service Management Application',
      description: 'A complete web application for managing print services with client and administrator interface. It includes features for managing print services, clients, and administrators, with a focus on user-friendly design and efficient management.',
      technologies: ['React', 'Typescript', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      features: [
        'Authentication and authorization for clients and administrators',
        'Client dashboard for managing print services',
        'Real-time statuses (quote, pending, in progress, completed, delivered, cancelled)',
        'Chat support: Customer response',
        'Responsive design with Tailwind CSS',
        'Search and filter functionality for print services',
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      liveDemo: '#',
      sourceCode: 'https://github.com/nicolasromanina/3Mfront',
      badge: { icon: <Smartphone className="h-3 w-3" />, label: 'web' },
      category: 'web'
    }
  ];

  useEffect(() => {
    const filtered = projects.filter(project =>
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase())) ||
      project.category.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [filter]);

  const additionalCommands = [
    {
      name: 'projects',
      description: 'List all projects',
      handler: () => projects
        .map(p => `${p.title} [${p.category}] - ${p.description}`)
        .join('\n')
    },
    {
      name: 'iot',
      description: 'List IoT projects',
      handler: () => projects
        .filter(p => p.category === 'IoT')
        .map(p => `${p.title} - ${p.description}`)
        .join('\n') || 'No IoT projects found'
    },
    {
      name: 'mobile',
      description: 'List mobile projects',
      handler: () => projects
        .filter(p => p.category === 'Mobile')
        .map(p => `${p.title} - ${p.description}`)
        .join('\n') || 'No mobile projects found'
    },
    {
      name: 'tech',
      description: 'List all technologies used',
      handler: () => Array.from(new Set(projects.flatMap(p => p.technologies)))
        .sort()
        .join(', ')
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

  return (
    <motion.div 
      className={`max-w-7xl mx-auto p-6 ${currentTheme.container}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-8">
        <motion.h1 
          className={`text-4xl font-bold ${currentTheme.accent} mb-2 font-mono`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Projects
        </motion.h1>
        <motion.p 
          className={`text-lg ${currentTheme.muted}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Showcasing innovative solutions in web, mobile, and IoT development
        </motion.p>
      </header>

      <motion.div 
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Terminal 
          initialPath="/projects" 
          theme={theme} 
          additionalCommands={additionalCommands}
        />
      </motion.div>

      <div className="content-section mb-16">
        <motion.div 
          className="flex items-center mb-10"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Briefcase className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Featured Projects
          </h2>
        </motion.div>

        <motion.div 
          className="mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Input
            type="text"
            placeholder="Filter by name, technology, or category (e.g., IoT, Mobile, C++)..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={`w-full max-w-md ${currentTheme.card}`}
            aria-label="Filter projects"
          />
        </motion.div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
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
                          className="font-sans text-2xl group-hover:text-green-400 transition-colors"
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
                    <div className="grid grid-cols-1 gap-6">
                      <motion.div 
                        className="relative h-48 overflow-hidden rounded-lg"
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
                      <div>
                        <p className={`font-sans mb-4 ${currentTheme.text}`}>
                          {project.description}
                        </p>
                        <h3 className="font-bold mb-2">Key Features:</h3>
                        <ul className="list-disc pl-5 mb-4 text-sm">
                          {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs"
                            >
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div 
        className={`mt-6 p-4 rounded-lg backdrop-blur-md ${currentTheme.card} text-sm font-sans`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className={currentTheme.muted}>
          Pro tip: Use terminal commands like 'projects', 'iot', 'mobile', or 'tech' to explore projects and technologies
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;