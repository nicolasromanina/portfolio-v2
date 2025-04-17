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
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with real-time inventory management and personalized recommendations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      features: [
        'User authentication and profile management',
        'Product search with filters',
        'Shopping cart and checkout',
        'Payment gateway integration',
        'Order tracking',
        'Admin dashboard with analytics'
      ],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Star className="h-3 w-3" />, label: 'Featured' },
      category: 'Web'
    },
    {
      id: '2',
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with customizable widgets and comprehensive data visualization.',
      technologies: ['Next.js', 'D3.js', 'GraphQL', 'AWS'],
      features: [
        'Real-time data processing',
        'Interactive charts and graphs',
        'Customizable dashboard layouts',
        'Data export in multiple formats',
        'Automated report generation',
        'User permission management'
      ],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Zap className="h-3 w-3" />, label: 'New' },
      category: 'Web'
    },
    {
      id: '3',
      title: 'Content Management System',
      description: 'A modern CMS with role-based access control and flexible content modeling.',
      technologies: ['TypeScript', 'PostgreSQL', 'Express', 'React'],
      features: [
        'Customizable content types',
        'Media library with image processing',
        'Content versioning',
        'Role-based permissions',
        'API-first architecture',
        'SEO optimization tools'
      ],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Award className="h-3 w-3" />, label: 'Award-winning' },
      category: 'Web'
    },
    {
      id: '4',
      title: 'Fitness Tracking App',
      description: 'A mobile application for tracking workouts and monitoring fitness progress.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      features: [
        'Workout tracking and scheduling',
        'Custom workout creation',
        'Progress statistics',
        'Social sharing',
        'Notifications and reminders'
      ],
      image: 'https://images.unsplash.com/photo-1512941675423-6b1e33a15c91',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Smartphone className="h-3 w-3" />, label: 'Mobile App' },
      category: 'Mobile'
    },
    {
      id: '5',
      title: 'Smart Home Automation System',
      description: 'An IoT-based system for controlling smart home devices with a centralized dashboard and automation rules.',
      technologies: ['C++', 'Node-RED', 'MQTT', 'Spring Boot'],
      features: [
        'Real-time device control (lights, thermostat, etc.)',
        'Automation workflows using Node-RED',
        'RESTful API with Spring Boot',
        'ESP32-based device firmware in C++',
        'Mobile and web dashboards',
        'Voice assistant integration'
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Cpu className="h-3 w-3" />, label: 'IoT' },
      category: 'IoT'
    },
    {
      id: '6',
      title: 'Environmental Monitoring System',
      description: 'An IoT solution for monitoring air quality and environmental conditions with real-time data logging.',
      technologies: ['C++', 'Node-RED', 'Arduino', 'PostgreSQL'],
      features: [
        'Sensor data collection (temperature, humidity, PM2.5)',
        'Data visualization with Node-RED dashboards',
        'Arduino-based sensor nodes programmed in C++',
        'Cloud storage with PostgreSQL',
        'Alert system for threshold breaches',
        'API for third-party integrations'
      ],
      image: 'https://images.unsplash.com/photo-1508514177221-188b274676af',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Cpu className="h-3 w-3" />, label: 'IoT' },
      category: 'IoT'
    },
    {
      id: '7',
      title: 'IoT Control Mobile App',
      description: 'A mobile app for controlling and monitoring IoT devices with a user-friendly interface.',
      technologies: ['Java', 'Android SDK', 'Firebase', 'MQTT'],
      features: [
        'Real-time device status updates',
        'Remote control of IoT devices',
        'Push notifications for alerts',
        'User authentication with Firebase',
        'MQTT-based communication',
        'Customizable device groups'
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Smartphone className="h-3 w-3" />, label: 'Mobile App' },
      category: 'Mobile'
    },
    {
      id: '8',
      title: 'Health Monitoring App',
      description: 'A mobile app for tracking health metrics and integrating with wearable IoT devices.',
      technologies: ['React Native', 'Spring Boot', 'Firebase', 'Bluetooth'],
      features: [
        'Real-time health data from wearables (heart rate, steps)',
        'Spring Boot backend for data processing',
        'Bluetooth connectivity for device pairing',
        'Personalized health insights',
        'Data export to PDF',
        'User authentication and data privacy'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      liveDemo: '#',
      sourceCode: '#',
      badge: { icon: <Smartphone className="h-3 w-3" />, label: 'Mobile App' },
      category: 'Mobile'
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