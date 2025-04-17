import React from 'react';
import Terminal from '../components/Terminal';
import { Cpu, Code, Server, GitBranch } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  projectPath: string;
}

const SkillsPage = ({ theme = 'dark' }: { theme?: 'dark' | 'light' }) => {
  const navigate = useNavigate();

  const themeStyles = {
    dark: {
      container: 'bg-gray-900 text-gray-100',
      card: 'bg-gray-800/50 backdrop-blur-md border-gray-700',
      text: 'text-gray-100',
      muted: 'text-gray-400',
      accent: 'text-green-400',
      button: 'bg-green-600 hover:bg-green-700',
      progress: 'bg-green-400',
      badge: 'bg-gray-700 text-green-400'
    },
    light: {
      container: 'bg-gray-100 text-gray-900',
      card: 'bg-white/80 backdrop-blur-md border-gray-200',
      text: 'text-gray-900',
      muted: 'text-gray-600',
      accent: 'text-green-600',
      button: 'bg-green-500 hover:bg-green-600',
      progress: 'bg-green-500',
      badge: 'bg-gray-200 text-green-600'
    }
  };

  const currentTheme = themeStyles[theme];

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Code className={`h-5 w-5 ${currentTheme.accent}`} />,
      skills: [
        { name: 'React', proficiency: 95 },
        { name: 'TypeScript', proficiency: 90 },
        { name: 'Next.js', proficiency: 85 },
        { name: 'Tailwind CSS', proficiency: 92 },
        { name: 'Redux', proficiency: 88 }
      ],
      projectPath: '/projects/frontend'
    },
    {
      title: 'Backend',
      icon: <Server className={`h-5 w-5 ${currentTheme.accent}`} />,
      skills: [
        { name: 'Java', proficiency: 90 },
        { name: 'Spring Boot', proficiency: 85 },
        { name: 'Java EE', proficiency: 80 },
        { name: 'Node.js', proficiency: 88 },
        { name: 'GraphQL', proficiency: 80 },
        { name: 'PostgreSQL', proficiency: 85 },
        { name: 'REST API Design', proficiency: 92 },
        { name: 'AWS', proficiency: 75 }
      ],
      projectPath: '/projects/backend'
    },
    {
      title: 'DevOps',
      icon: <GitBranch className={`h-5 w-5 ${currentTheme.accent}`} />,
      skills: [
        { name: 'Docker', proficiency: 75 },
        { name: 'CI/CD', proficiency: 82 },
        { name: 'Git', proficiency: 95 },
        { name: 'Kubernetes', proficiency: 70 },
        { name: 'Terraform', proficiency: 65 }
      ],
      projectPath: '/projects/devops'
    }
  ];

  const additionalSkills = [
    'GraphQL', 'Firebase', 'Redux', 'React Native', 'Jest', 'Cypress',
    'Storybook', 'Figma', 'Agile/Scrum', 'UI/UX Design', 'Python', 'Microservices',
    'Android SDK', 'Hibernate'
  ];

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
          Skills
        </motion.h1>
        <motion.p 
          className={`text-lg ${currentTheme.muted} font-sans`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          My technical expertise in web, backend, mobile, and DevOps
        </motion.p>
      </header>

      <motion.div 
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Terminal 
          initialPath="/skills"
          theme={theme}
          additionalCommands={[
            {
              name: 'skills',
              description: 'List all skills',
              handler: () => {
                const allSkills = skillCategories.map(cat => 
                  `${cat.title}:\n${cat.skills.map(skill => `  - ${skill.name} (${skill.proficiency}%)`).join('\n')}`
                ).join('\n\n') + `\n\nAdditional Skills:\n${additionalSkills.map(skill => `  - ${skill}`).join('\n')}`;
                return allSkills;
              }
            },
            {
              name: 'category',
              description: 'Show skills by category (frontend, backend, devops)',
              handler: (args: string[]) => {
                const category = args[0]?.toLowerCase();
                const cat = skillCategories.find(c => c.title.toLowerCase() === category);
                if (!cat) return 'Available categories: frontend, backend, devops';
                return `${cat.title}:\n${cat.skills.map(skill => `- ${skill.name} (${skill.proficiency}%)`).join('\n')}`;
              }
            },
            {
              name: 'java',
              description: 'Show Java-related skills',
              handler: () => {
                const javaSkills = skillCategories
                  .find(cat => cat.title === 'Backend')!
                  .skills
                  .filter(skill => ['Java', 'Spring Boot', 'Java EE'].includes(skill.name))
                  .map(skill => `- ${skill.name} (${skill.proficiency}%)`)
                  .join('\n');
                const additionalJavaSkills = additionalSkills
                  .filter(skill => ['Android SDK', 'Hibernate'].includes(skill))
                  .map(skill => `- ${skill}`)
                  .join('\n');
                return `Java Skills:\n${javaSkills}\n\nAdditional Java Skills:\n${additionalJavaSkills}`;
              }
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
          <Cpu className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Technical Skills
          </h2>
        </motion.div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className={`p-8 rounded-lg ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                whileHover={{ scale: 1.03 }}
                role="article"
                aria-labelledby={`skill-${category.title.toLowerCase()}-title`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h3 
                  id={`skill-${category.title.toLowerCase()}-title`} 
                  className="font-bold mb-6 text-xl font-sans flex items-center"
                >
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </h3>
                <div className="space-y-5 font-sans">
                  {category.skills.map((skill) => (
                    <motion.div 
                      key={skill.name}
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-bold">{skill.name}</span>
                        <span className={currentTheme.accent}>{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          className={`h-2.5 rounded-full ${currentTheme.progress}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    className={`w-full text-sm font-medium ${currentTheme.button}`}
                    onClick={() => navigate(category.projectPath)}
                  >
                    View {category.title} Projects
                  </Button>
                </motion.div>
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
          <Code className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Additional Skills
          </h2>
        </motion.div>

        <motion.div 
          className={`p-6 rounded-lg ${currentTheme.card} mb-8`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
              >
                <Badge 
                  className={`${currentTheme.badge} px-3 py-1 text-sm cursor-pointer transition-all duration-300`}
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className={`mt-6 p-4 rounded-lg backdrop-blur-md ${currentTheme.card} text-sm font-sans`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className={currentTheme.muted}>
          Pro tip: Use the 'skills', 'category [frontend|backend|devops]', or 'java' commands in the terminal
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SkillsPage;