import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Star } from 'lucide-react';

type CommandHandler = (args: string[]) => void | string | Promise<void | string>;

interface Command {
  name: string;
  description: string;
  handler: CommandHandler;
}

interface TerminalHistoryItem {
  id: string;
  input: string;
  output?: string;
  isError?: boolean;
  timestamp: number;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  timestamp: number;
}

const WELCOME_MESSAGE = `
🌌 Welcome to My portfolio
Type 'help' to see available commands.
Use ↑↓ for history, Tab for suggestions, Shift+Enter for multi-line input.
Ctrl+L to clear, Ctrl+S to toggle sound effects.
`;

interface TerminalProps {
  initialPath?: string;
  additionalCommands?: Command[];
  theme?: 'dark' | 'light';
}

const Terminal: React.FC<TerminalProps> = ({ 
  initialPath = '/', 
  additionalCommands = [], 
  theme: initialTheme = 'dark' 
}) => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<TerminalHistoryItem[]>(() => {
    const saved = localStorage.getItem('terminalHistory');
    return saved ? JSON.parse(saved) : [{ 
      id: crypto.randomUUID(),
      input: '', 
      output: WELCOME_MESSAGE,
      timestamp: Date.now()
    }];
  });
  const [commandHistory, setCommandHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('commandHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<number>(-1);
  const [currentPath, setCurrentPath] = useState<string>(initialPath);
  const [theme, setTheme] = useState<'dark' | 'light'>(initialTheme);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const saved = localStorage.getItem('terminalAchievements');
    return saved ? JSON.parse(saved) : [];
  });
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  // Sound effects from jsDelivr CDN
  const typeSound = useMemo(() => new Audio('https://cdn.jsdelivr.net/gh/kenwheeler/cash@master/assets/sounds/click.mp3'), []);
  const executeSound = useMemo(() => new Audio('https://cdn.jsdelivr.net/gh/kenwheeler/cash@master/assets/sounds/beep.mp3'), []);

  // Animated background (stars effect)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const stars: { x: number; y: number; radius: number; speed: number }[] = [];
    for (let i = 0; i < 50; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, [theme]);

  const routes = useMemo(() => ({
    skills: '/skills',
    projects: '/projects',
    about: '/about',
    contact: '/contact',
    home: '/'
  }), []);

  const addAchievement = useCallback((name: string, description: string) => {
    setAchievements(prev => {
      if (prev.some(a => a.name === name)) return prev;
      const newAchievement = { id: crypto.randomUUID(), name, description, timestamp: Date.now() };
      toast({
        title: `Achievement Unlocked: ${name}`,
        description,
        className: theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
      });
      return [...prev, newAchievement];
    });
  }, [theme]);

  const basicCommands: Command[] = useMemo(() => [
    {
      name: 'help',
      description: 'Show available commands',
      handler: () => {
        addAchievement('Command Explorer', 'Ran the help command');
        const allCommands = [...basicCommands, ...additionalCommands];
        return allCommands
          .map(cmd => `${cmd.name.padEnd(15)} - ${cmd.description}`)
          .join('\n');
      }
    },
    {
      name: 'clear',
      description: 'Clear the terminal',
      handler: () => {
        setHistory([{ 
          id: crypto.randomUUID(),
          input: '', 
          output: WELCOME_MESSAGE,
          timestamp: Date.now()
        }]);
        return '';
      }
    },
    {
      name: 'ls',
      description: 'List available sections',
      handler: () => Object.keys(routes).join('\n')
    },
    {
      name: 'cd',
      description: 'Navigate to a section (e.g., cd skills)',
      handler: (args) => {
        if (!args.length) return 'Usage: cd <section>';
        const destination = args[0].toLowerCase();
        if (destination in routes) {
          const path = routes[destination as keyof typeof routes];
          setCurrentPath(path);
          navigate(path);
          addAchievement('Navigator', 'Changed directory with cd');
          return `Changed directory to ${path}`;
        }
        return `Directory not found: ${destination}`;
      }
    },
    {
      name: 'about',
      description: 'Show developer information',
      handler: () => {
        addAchievement('Bio Reader', 'Viewed about information');
        return `
Full Stack Developer 
- Expertise: Java, Spring boot, React, TypeScript, Node.js
- Focus: Performance, UX, Scalable Systems
        `;
      }
    },
    {
      name: 'skills',
      description: 'List developer skills',
      handler: () => {
        addAchievement('Skill Scanner', 'Listed developer skills');
        return `
Frontend:
  - React (95%)
  - TypeScript (90%)
  - Next.js (85%)
Backend:
 - Java (88%)
  - Spring boot (88%)
  - Node.js (88%)
  - GraphQL (80%)
  - PostgreSQL (85%)
DevOps:
  - Docker (75%)
  - CI/CD (82%)
  - Git (95%)
        `;
      }
    },
    {
      name: 'projects',
      description: 'Show recent projects',
      handler: () => {
        addAchievement('Project Explorer', 'Viewed recent projects');
        return `
Recent Projects:
1. E-commerce Platform [React, Node.js, MongoDB]
   - Scalable online store with payment integration
2. Analytics Dashboard [Next.js, D3.js]
   - Real-time data visualization
3. Mobile Banking App [React Native, GraphQL]
   - Secure financial transactions
4. CMS [TypeScript, PostgreSQL]
   - Custom content management system
        `;
      }
    },
    {
      name: 'contact',
      description: 'Display contact information',
      handler: () => {
        addAchievement('Networker', 'Viewed contact information');
        return `
Contact Information:
- Email: nicolasromanina@gmail.com
- GitHub: github.com/nicolasromanina
- LinkedIn: linkedin.com/in/nicolasromanina
- Twitter: twitter.com/nicolasromanina
        `;
      }
    },
    {
      name: 'next',
      description: 'Navigate to the next section',
      handler: () => {
        const currentIndex = Object.values(routes).indexOf(currentPath);
        const nextIndex = (currentIndex + 1) % Object.values(routes).length;
        const nextPath = Object.values(routes)[nextIndex];
        setCurrentPath(nextPath);
        navigate(nextPath);
        return `Navigated to ${nextPath}`;
      }
    },
    {
      name: 'previous',
      description: 'Navigate to the previous section',
      handler: () => {
        const currentIndex = Object.values(routes).indexOf(currentPath);
        const prevIndex = (currentIndex - 1 + Object.values(routes).length) % Object.values(routes).length;
        const prevPath = Object.values(routes)[prevIndex];
        setCurrentPath(prevPath);
        navigate(prevPath);
        return `Navigated to ${prevPath}`;
      }
    },
    {
      name: 'resume',
      description: 'Show professional resume summary',
      handler: () => {
        addAchievement('Career Viewer', 'Viewed resume summary');
        return `
Resume Summary:
- Full Stack Developer (2018-Present)
- Key Technologies: React, TypeScript, Node.js, AWS
- Notable Achievements:
  - Led development of a high-traffic e-commerce platform
  - Reduced app load times by 40% through optimizations
  - Implemented CI/CD pipelines for 5+ projects
- Education: B.Sc. Computer Science, [University Name], 2018
        `;
      }
    },
    {
      name: 'whoami',
      description: 'Display current user information',
      handler: () => `
User: Guest
Role: Portfolio Visitor
Location: Web Browser
Access Level: Public
      `
    },
    {
      name: 'history',
      description: 'Show command history',
      handler: () => {
        if (!commandHistory.length) return 'No command history';
        return commandHistory.map((cmd, index) => `${index + 1}. ${cmd}`).join('\n');
      }
    },
    {
      name: 'theme',
      description: 'Switch terminal theme (dark/light)',
      handler: (args) => {
        if (!args.length) return 'Usage: theme <dark|light>';
        const newTheme = args[0].toLowerCase() as 'dark' | 'light';
        if (newTheme !== 'dark' && newTheme !== 'light') return 'Invalid theme. Use: dark or light';
        setTheme(newTheme);
        addAchievement('Theme Switcher', 'Changed terminal theme');
        return `Theme switched to ${newTheme}`;
      }
    },
    {
      name: 'echo',
      description: 'Print arguments to terminal',
      handler: (args) => args.join(' ') || 'ECHO is on.'
    },
    {
      name: 'weather',
      description: 'Show mock weather data',
      handler: (args) => {
        const city = args.join(' ') || 'Unknown City';
        addAchievement('Meteorologist', 'Checked weather data');
        return `
Weather in ${city}:
- Temperature: 22°C
- Condition: Partly Cloudy
- Humidity: 65%
[Mock data; real API integration possible]
        `;
      }
    },
    {
      name: 'joke',
      description: 'Tell a random programming joke',
      handler: () => {
        const jokes = [
          'Why do programmers prefer dark mode? Because the light attracts bugs.',
          'Why did the scarecrow become a coder? He was outstanding in his field!',
          'How do you comfort a JavaScript bug? You console it.'
        ];
        addAchievement('Comedian', 'Told a programming joke');
        return jokes[Math.floor(Math.random() * jokes.length)];
      }
    },
    {
      name: 'quote',
      description: 'Display an inspirational quote',
      handler: () => {
        const quotes = [
          '"Code is like humor. When you have to explain it, it’s bad." - Cory House',
          '"The best error message is the one that never shows up." - Thomas Fuchs',
          '"Programs must be written for people to read, and only incidentally for machines to execute." - Harold Abelson'
        ];
        addAchievement('Philosopher', 'Read an inspirational quote');
        return quotes[Math.floor(Math.random() * quotes.length)];
      }
    },
    {
      name: 'sound',
      description: 'Toggle sound effects (on/off)',
      handler: (args) => {
        if (!args.length) return 'Usage: sound <on|off>';
        const state = args[0].toLowerCase();
        if (state !== 'on' && state !== 'off') return 'Invalid option. Use: on or off';
        setSoundEnabled(state === 'on');
        addAchievement('Audiophile', 'Toggled sound effects');
        return `Sound effects ${state}`;
      }
    },
    {
      name: 'achievements',
      description: 'List unlocked achievements',
      handler: () => {
        if (!achievements.length) return 'No achievements unlocked yet';
        return `
Unlocked Achievements:
${achievements.map(a => `- ${a.name}: ${a.description} (${new Date(a.timestamp).toLocaleDateString()})`).join('\n')}
        `;
      }
    },
    {
      name: 'ask',
      description: 'Ask a question to a local AI assistant',
      handler: (args) => {
        const question = args.join(' ').toLowerCase();
        addAchievement('Curious Mind', 'Asked a question to the AI');
        const responses: { [key: string]: string } = {
          'what is react': 'React is a JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture.',
          'what is typescript': 'TypeScript is a superset of JavaScript that adds static typing, enhancing code reliability and maintainability.',
          'how to learn coding': 'Start with basics (HTML, CSS, JavaScript), practice on platforms like freeCodeCamp, build projects, and join communities like GitHub.'
        };
        return responses[question] || 'Sorry, I don’t have an answer for that. Try a question about coding!';
      }
    }
  ], [routes, currentPath, navigate, additionalCommands, commandHistory, achievements]);

  const commands = useMemo(() => [...basicCommands, ...additionalCommands], [basicCommands, additionalCommands]);

  // Persist data
  useEffect(() => {
    localStorage.setItem('terminalHistory', JSON.stringify(history));
    localStorage.setItem('commandHistory', JSON.stringify(commandHistory));
    localStorage.setItem('terminalAchievements', JSON.stringify(achievements));
  }, [history, commandHistory, achievements]);

  // Auto-scroll and focus
  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: 'smooth'
    });
    inputRef.current?.focus();
  }, [history]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        setHistory([{ 
          id: crypto.randomUUID(),
          input: '', 
          output: WELCOME_MESSAGE,
          timestamp: Date.now()
        }]);
      } else if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        setSoundEnabled(prev => !prev);
        toast({
          title: 'Sound effects',
          description: `Sound effects ${soundEnabled ? 'disabled' : 'enabled'}`,
          className: theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [soundEnabled, theme]);

  const getSuggestions = useCallback((input: string) => {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return [];
    return commands
      .filter(cmd => cmd.name.toLowerCase().includes(trimmed))
      .map(cmd => cmd.name)
      .slice(0, 5);
  }, [commands]);

  const executeCommand = async (commandLine: string) => {
    const trimmedCommand = commandLine.trim();
    if (!trimmedCommand) return;

    const lines = trimmedCommand.split('\n').map(line => line.trim()).filter(line => line);
    const results: { output: string; isError: boolean }[] = [];

    for (const line of lines) {
      const parts = line.split(' ');
      const command = parts[0].toLowerCase();
      const args = parts.slice(1);

      const commandObj = commands.find(cmd => cmd.name.toLowerCase() === command);

      if (commandObj) {
        try {
          const result = await commandObj.handler(args);
          if (soundEnabled) executeSound.play();
          results.push({ output: result || `Command ${command} executed.`, isError: false });
        } catch (error) {
          results.push({ output: `Error executing ${command}: ${error}`, isError: true });
        }
      } else {
        results.push({ 
          output: `Command not found: ${command}. Type 'help' for available commands.`, 
          isError: true 
        });
      }
    }

    return results;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const results = await executeCommand(input);
    
    setHistory(prev => [
      ...prev,
      { 
        id: crypto.randomUUID(),
        input: `${currentPath}> ${input}`,
        timestamp: Date.now()
      },
      ...(results ? results.map(result => ({
        id: crypto.randomUUID(),
        input: '',
        output: result.output,
        isError: result.isError,
        timestamp: Date.now()
      })) : [])
    ]);

    setCommandHistory(prev => [input, ...prev.slice(0, 49)]);
    setHistoryIndex(-1);
    setInput('');
    setSuggestions([]);
    setSelectedSuggestion(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex + 1 < commandHistory.length) {
        setHistoryIndex(prev => prev + 1);
        setInput(commandHistory[historyIndex + 1]);
        setSuggestions([]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > -1) {
        setHistoryIndex(prev => prev - 1);
        setInput(historyIndex === 0 ? '' : commandHistory[historyIndex - 1]);
        setSuggestions([]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[selectedSuggestion >= 0 ? selectedSuggestion : 0]);
        setSuggestions([]);
        setSelectedSuggestion(-1);
      }
    } else if (e.key === 'ArrowRight' && suggestions.length > 0) {
      e.preventDefault();
      setSelectedSuggestion(prev => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowLeft' && suggestions.length > 0) {
      e.preventDefault();
      setSelectedSuggestion(prev => (prev - 1 + suggestions.length) % suggestions.length);
    }
    if (soundEnabled && e.key.length === 1) typeSound.play();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    setSuggestions(getSuggestions(value));
    setSelectedSuggestion(-1);
  };

  const highlightSuggestion = (suggestion: string, query: string) => {
    const index = suggestion.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return suggestion;
    return (
      <>
        {suggestion.slice(0, index)}
        <span className="bg-green-500/30 text-green-300">{suggestion.slice(index, index + query.length)}</span>
        {suggestion.slice(index + query.length)}
      </>
    );
  };

  const themeStyles = {
    dark: {
      container: 'bg-gray-900/30 text-gray-100 border-gray-700/50',
      input: 'bg-gray-800/20 text-gray-100 caret-green-400 shadow-inner',
      prompt: 'text-green-400 glow',
      error: 'text-red-400',
      suggestion: 'bg-gray-800/60 text-gray-300 border-gray-600/50 shadow-lg',
      suggestionHover: 'bg-gray-700/50',
      output: 'text-gray-200 glow-text',
      canvas: 'opacity-20'
    },
    light: {
      container: 'bg-white/30 text-gray-900 border-gray-200/50',
      input: 'bg-gray-100/20 text-gray-900 caret-green-600 shadow-inner',
      prompt: 'text-green-600 glow',
      error: 'text-red-600',
      suggestion: 'bg-gray-200/60 text-gray-700 border-gray-300/50 shadow-lg',
      suggestionHover: 'bg-gray-300/50',
      output: 'text-gray-800 glow-text',
      canvas: 'opacity-20'
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <motion.div 
      className={`relative w-full h-[500px] rounded-xl p-4 font-mono text-sm shadow-2xl ${currentTheme.container} backdrop-blur-xl overflow-hidden`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      ref={terminalRef}
      role="region"
      aria-label="Interactive Terminal"
    >
      <canvas ref={canvasRef} className={`absolute inset-0 ${currentTheme.canvas}`} />
      <div className="relative space-y-2 overflow-y-auto h-[calc(100%-3rem)] pr-2">
        <AnimatePresence>
          {history.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {item.input && (
                <div className={`flex items-start ${currentTheme.output}`}>
                  {item.input.includes('>') && (
                    <span className={currentTheme.prompt}>{item.input.split('>')[0]}</span>
                  )}
                  <span className="ml-1 whitespace-pre-wrap">{item.input.split('>').slice(1).join('>').trim()}</span>
                </div>
              )}
              {item.output && (
                <pre className={`whitespace-pre-wrap ${item.isError ? currentTheme.error : currentTheme.output}`}>
                  {item.output}
                </pre>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex relative">
        <div className={`mr-2 ${currentTheme.prompt}`}>
          {currentPath}
        </div>
        <textarea
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`flex-1 outline-none ${currentTheme.input} rounded-md p-2 resize-none h-10 leading-tight backdrop-blur-sm`}
          ref={inputRef}
          autoFocus
          autoComplete="off"
          aria-label="Terminal command input"
          rows={1}
        />
        <motion.span 
          className={currentTheme.output}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          ▌
        </motion.span>
        {suggestions.length > 0 && (
          <motion.div 
            className={`absolute bottom-full left-0 w-full p-3 rounded-t-xl ${currentTheme.suggestion} backdrop-blur-xl shadow-xl`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {suggestions.map((suggestion, index) => (
              <div 
                key={index} 
                className={`px-3 py-2 rounded-md cursor-pointer ${index === selectedSuggestion ? currentTheme.suggestionHover : ''}`}
                onClick={() => {
                  setInput(suggestion);
                  setSuggestions([]);
                  setSelectedSuggestion(-1);
                  inputRef.current?.focus();
                }}
              >
                {highlightSuggestion(suggestion, input.trim())}
              </div>
            ))}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default Terminal;