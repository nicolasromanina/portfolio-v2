import React, { useState } from 'react';
import Terminal from '../components/Terminal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, GraduationCap, Briefcase, Phone, Mail, MapPin, ChevronRight, Download, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  image: string;
  badge: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description: string;
  keyAreas: string[];
  tags: string[];
  image: string;
  badge: string;
}

const AboutPage = ({ theme = 'dark' }: { theme?: 'dark' | 'light' }) => {
  const navigate = useNavigate();
  const [isCvDownloading, setIsCvDownloading] = useState(false);

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      period: '2021-Present',
      description: 'Leading frontend development for enterprise applications, focusing on performance and UX.',
      achievements: [
        'Led a team of 5 developers to rebuild the flagship product',
        'Implemented CI/CD pipeline reducing deployment time by 70%',
        'Mentored junior developers and conducted code reviews',
        'Optimized app performance, reducing load time by 40%'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      badge: 'Current Position'
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2019-2021',
      description: 'Worked on both frontend and backend in a fast-paced startup environment.',
      achievements: [
        'Developed user-facing features with React and TypeScript',
        'Built RESTful APIs using Node.js and Express',
        'Implemented database models with MongoDB and PostgreSQL',
        'Participated in product design and UX decisions'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      badge: 'Previous Position'
    }
  ];

  const education: Education[] = [
    {
      id: '1',
      degree: 'Master in Computer Engineering',
      institution: 'University of Tananariva',
      year: '2023',
      description: 'Advanced study in computer engineering principles, focusing on software architecture and system design.',
      keyAreas: [
        'Advanced Software Architecture',
        'Distributed Systems Design',
        'Machine Learning Applications',
        'Cloud Computing Technologies',
        'Advanced Database Management'
      ],
      tags: ['Software Development', 'System Design', 'AI/ML', 'Cloud Technologies'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      badge: 'Graduate Degree'
    },
    {
      id: '2',
      degree: 'Bachelor in Signal and System Engineering',
      institution: 'University of Tananariva',
      year: '2022',
      description: 'Comprehensive education in signal processing and fundamental computing concepts.',
      keyAreas: [
        'Signal Processing Fundamentals',
        'Control Systems Engineering',
        'Digital Communication Systems',
        'Programming Fundamentals',
        'Electronics and Circuits'
      ],
      tags: ['Signal Processing', 'System Analysis', 'Programming', 'Electronics'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      badge: 'Undergraduate Degree'
    },
    {
      id: '3',
      degree: 'Baccalaureate Series C',
      institution: 'High School Tanambe',
      year: '',
      description: 'Strong foundation in scientific disciplines with a focus on mathematics and sciences.',
      keyAreas: [
        'Advanced Mathematics',
        'Physics and Physical Sciences',
        'Chemistry',
        'Biology',
        'Computer Science Fundamentals'
      ],
      tags: ['Mathematics', 'Physics', 'Chemistry', 'Sciences'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      badge: 'High School Diploma'
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

  const handleCvDownload = () => {
    setIsCvDownloading(true);
    setTimeout(() => {
      setIsCvDownloading(false);
      window.open('/cv.pdf', '_blank');
    }, 1000);
  };

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
          About Me
        </motion.h1>
        <motion.p 
          className={`text-lg ${currentTheme.muted} font-sans`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Discover the developer behind the code
        </motion.p>
      </header>

      <motion.div 
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Terminal 
          initialPath="/about"
          theme={theme}
          additionalCommands={[
            {
              name: 'bio',
              description: 'Show personal biography',
              handler: () => `
Nicolas ROMANINA
Full Stack Developer passionate about creating impactful solutions.
Based in Madagascar, with a focus on modern web technologies.
              `
            },
            {
              name: 'interests',
              description: 'Show professional interests',
              handler: () => `
- Performance Optimization
- Web Accessibility
- User Experience Design
- Scalable System Architecture
- Open Source Contributions
              `
            }
          ]}
        />
      </motion.div>

      <div className="content-section mb-16">
        <motion.div 
          className="flex items-center mb-10"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <User className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Personal Profile
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card 
            className={`group ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            role="article"
            aria-labelledby="profile-title"
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle id="profile-title" className="font-sans text-2xl">
                    Nicolas ROMANINA
                  </CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">
                    Full Stack Developer
                  </CardDescription>
                </div>
                <Badge className={`flex items-center space-x-1 ${currentTheme.accent} bg-opacity-20`}>
                  <span className="text-xs">Open to Opportunities</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className={`font-sans mb-4 ${currentTheme.text}`}>
                    I'm a dedicated Full Stack Developer with a passion for crafting innovative web solutions. My journey in tech started with a curiosity for how things work, evolving into a career focused on creating impactful, user-centric applications.
                  </p>
                  <p className={`font-sans mb-4 ${currentTheme.text}`}>
                    With a Master's in Computer Engineering from the University of Tananariva, I bring a strong foundation in software architecture and system design to every project. My expertise spans modern JavaScript frameworks, backend development, and performance optimization.
                  </p>
                  <p className={`font-sans mb-4 ${currentTheme.text}`}>
                    I'm driven by a desire to solve real-world problems through clean code, accessible interfaces, and scalable systems. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-center gap-3">
                      <Phone className={`h-5 w-5 ${currentTheme.accent}`} />
                      <span>+261 34 11 815 03</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className={`h-5 w-5 ${currentTheme.accent}`} />
                      <span>nicolasromanina@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className={`h-5 w-5 ${currentTheme.accent}`} />
                      <span>Madagascar</span>
                    </div>
                  </div>
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
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Button 
                      className={`${currentTheme.button} flex items-center gap-2`}
                      onClick={handleCvDownload}
                      disabled={isCvDownloading}
                    >
                      <motion.span
                        animate={{ rotate: isCvDownloading ? 360 : 0 }}
                        transition={{ duration: 1, repeat: isCvDownloading ? Infinity : 0 }}
                      >
                        <Download className="w-4 h-4" />
                      </motion.span>
                      <span>{isCvDownloading ? 'Downloading...' : 'Download CV'}</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => navigate('/projects')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Portfolio
                    </Button>
                  </div>
                </div>
                <motion.div 
                  className="relative h-64 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://avatars.githubusercontent.com/u/12345678?v=4" 
                    alt="Nicolas Romanina" 
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

      <div className="content-section mb-16">
        <motion.div 
          className="flex items-center mb-10"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <GraduationCap className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Education
          </h2>
        </motion.div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card 
                  className={`group ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  role="article"
                  aria-labelledby={`edu-title-${edu.id}`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle 
                          id={`edu-title-${edu.id}`}
                          className="font-sans text-xl group-hover:text-green-400 transition-colors"
                        >
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="font-mono text-xs mt-1">
                          {edu.institution}{edu.year ? `, ${edu.year}` : ''}
                        </CardDescription>
                      </div>
                      <Badge className={`flex items-center space-x-1 ${currentTheme.accent} bg-opacity-20`}>
                        <span className="text-xs">{edu.badge}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="relative h-40 overflow-hidden rounded-lg mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={edu.image} 
                        alt={edu.degree} 
                        className="object-cover w-full h-full transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                    <p className={`font-sans mb-4 text-sm ${currentTheme.text}`}>
                      {edu.description}
                    </p>
                    <h3 className="font-bold mb-2 text-sm">Key Areas:</h3>
                    <ul className="list-disc pl-5 mb-4 text-sm">
                      {edu.keyAreas.map((area, idx) => (
                        <li key={idx}>{area}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {edu.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 text-sm"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <ChevronRight className="w-4 h-4" />
                      View Certification
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="content-section mb-16">
        <motion.div 
          className="flex items-center mb-10"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Briefcase className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Professional Experience
          </h2>
        </motion.div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            layout
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card 
                  className={`group ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  role="article"
                  aria-labelledby={`exp-title-${exp.id}`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle 
                          id={`exp-title-${exp.id}`}
                          className="font-sans text-xl group-hover:text-green-400 transition-colors"
                        >
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="font-mono text-xs mt-1">
                          {exp.company} | {exp.period}
                        </CardDescription>
                      </div>
                      <Badge className={`flex items-center space-x-1 ${currentTheme.accent} bg-opacity-20`}>
                        <span className="text-xs">{exp.badge}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="relative h-40 overflow-hidden rounded-lg mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={exp.image} 
                        alt={exp.title} 
                        className="object-cover w-full h-full transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                    <p className={`font-sans mb-4 text-sm ${currentTheme.text}`}>
                      {exp.description}
                    </p>
                    <h3 className="font-bold mb-2 text-sm">Key Achievements:</h3>
                    <ul className="list-disc pl-5 mb-4 text-sm">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 text-sm"
                      onClick={() => navigate('/projects')}
                    >
                      <ChevronRight className="w-4 h-4" />
                      View Projects
                    </Button>
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
          Pro tip: Type 'bio' or 'interests' in the terminal to learn more about me
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;