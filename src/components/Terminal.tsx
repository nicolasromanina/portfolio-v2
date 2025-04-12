
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast';

type CommandHandler = (args: string[]) => void | string | Promise<void | string>;

interface Command {
  name: string;
  description: string;
  handler: CommandHandler;
}

interface TerminalHistoryItem {
  input: string;
  output?: string;
  isError?: boolean;
}

const WELCOME_MESSAGE = `
Welcome to CryptoTerminal v1.0.0
Type 'help' to see available commands.
`;

interface TerminalProps {
  initialPath?: string;
  additionalCommands?: Command[];
}

const Terminal = ({ initialPath = '/', additionalCommands = [] }: TerminalProps) => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    { input: '', output: WELCOME_MESSAGE }
  ]);
  const [currentPath, setCurrentPath] = useState<string>(initialPath);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const basicCommands: Command[] = [
    {
      name: 'help',
      description: 'Show available commands',
      handler: () => {
        const allCommands = [...basicCommands, ...additionalCommands];
        return allCommands.map(cmd => `${cmd.name.padEnd(15)} - ${cmd.description}`).join('\n');
      }
    },
    {
      name: 'clear',
      description: 'Clear the terminal',
      handler: () => {
        setHistory([]);
        return '';
      }
    },
    {
      name: 'ls',
      description: 'List available sections',
      handler: () => {
        return 'assets\nportfolio\nsettings';
      }
    },
    {
      name: 'cd',
      description: 'Navigate to a section (e.g., cd assets)',
      handler: (args) => {
        if (!args.length) {
          return 'Usage: cd <section>';
        }
        
        const destination = args[0];
        switch (destination) {
          case 'assets':
            setCurrentPath('/assets');
            navigate('/');
            return `Changed directory to /assets`;
          case 'detail':
            if (args.length < 2) {
              return 'Usage: cd detail <asset-id>';
            }
            setCurrentPath(`/detail/${args[1]}`);
            navigate(`/detail/${args[1]}`);
            return `Changed directory to /detail/${args[1]}`;
          case '..':
            setCurrentPath('/');
            navigate('/');
            return 'Changed directory to /';
          default:
            return `Directory not found: ${destination}`;
        }
      }
    },
    {
      name: 'about',
      description: 'Show information about this application',
      handler: () => {
        return `
CryptoTerminal v1.0.0
A neo-brutalist CLI-inspired cryptocurrency dashboard.
Uses CoinCap API for real-time crypto data.
        `;
      }
    },
    {
      name: 'refresh',
      description: 'Refresh the current data',
      handler: () => {
        window.location.reload();
        return 'Refreshing data...';
      }
    }
  ];

  const commands = [...basicCommands, ...additionalCommands];

  const executeCommand = async (commandLine: string) => {
    const trimmedCommand = commandLine.trim();
    if (!trimmedCommand) return;
    
    const parts = trimmedCommand.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    const commandObj = commands.find(cmd => cmd.name === command);
    
    if (commandObj) {
      try {
        const result = await commandObj.handler(args);
        return { output: result || `Command ${command} executed.`, isError: false };
      } catch (error) {
        return { output: `Error executing ${command}: ${error}`, isError: true };
      }
    } else {
      return { output: `Command not found: ${command}. Type 'help' for available commands.`, isError: true };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const result = await executeCommand(input);
    
    setHistory(prev => [
      ...prev,
      { input: `${currentPath}> ${input}` },
      ...(result ? [{ input: '', output: result.output, isError: result.isError }] : [])
    ]);
    
    setInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [history]);

  return (
    <div className="terminal-container w-full h-60 max-h-60 overflow-auto" ref={terminalRef}>
      <div className="space-y-2">
        {history.map((item, index) => (
          <div key={index}>
            {item.input && (
              <div className="terminal-text">{item.input}</div>
            )}
            {item.output && (
              <pre className={`whitespace-pre-wrap ${item.isError ? 'text-brutalist-accent' : 'terminal-text'}`}>
                {item.output}
              </pre>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-2 flex">
        <div className="terminal-prompt mr-2">{currentPath}></div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="terminal-input"
          ref={inputRef}
          autoFocus
        />
        <span className="terminal-text animate-cursor-blink ml-1">▌</span>
      </form>
    </div>
  );
};

export default Terminal;
