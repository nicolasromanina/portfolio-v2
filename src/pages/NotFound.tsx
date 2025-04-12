
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal as TerminalIcon, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-terminal-background p-4">
      <div className="brutalist-card max-w-md w-full animate-fade-in">
        <div className="flex items-center space-x-2 mb-4">
          <AlertTriangle className="text-brutalist-accent h-8 w-8" />
          <h1 className="text-4xl font-bold text-brutalist-accent">404</h1>
        </div>
        
        <p className="text-xl mb-6 font-sans font-semibold">Terminal Error: Path Not Found</p>
        <p className="text-terminal-muted mb-8 font-sans">
          The requested path was not found on this server.
        </p>
        
        <div className="terminal-container mb-8 rounded-lg overflow-hidden">
          <div className="flex items-center space-x-2 mb-2">
            <TerminalIcon className="w-5 h-5 text-terminal-green" />
            <span className="text-terminal-green font-mono">Terminal</span>
          </div>
          <code className="block bg-terminal-background text-terminal-green p-4 font-mono border border-terminal-border rounded-sm">
            $ cd {location.pathname}<br />
            bash: cd: {location.pathname}: No such file or directory
          </code>
        </div>
        
        <button
          onClick={() => navigate('/')}
          className="brutalist-button w-full flex items-center justify-center space-x-2"
        >
          <TerminalIcon className="w-5 h-5" />
          <span>Return to Home</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
