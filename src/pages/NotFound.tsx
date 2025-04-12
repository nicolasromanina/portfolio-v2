
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal as TerminalIcon, AlertTriangle, ChevronLeft } from "lucide-react";

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
      <div className="brutalist-card max-w-md w-full animate-fade-in bg-gradient-to-b from-brutalist-white to-brutalist-grey/30">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="text-terminal-green h-8 w-8" />
            <h1 className="text-4xl font-bold text-terminal-green">404</h1>
          </div>
          <div className="glass-panel">
            <code className="text-terminal-green text-xs">ERROR_PATH_NOT_FOUND</code>
          </div>
        </div>
        
        <p className="text-xl mb-4 font-sans font-semibold">Terminal Error: Path Not Found</p>
        <p className="text-terminal-muted mb-6 font-sans">
          The requested path was not found on this server.
        </p>
        
        <div className="terminal-container mb-6 rounded-lg overflow-hidden border-terminal-green">
          <div className="flex items-center space-x-2 mb-2">
            <TerminalIcon className="w-5 h-5 text-terminal-green" />
            <span className="text-terminal-green font-mono">Terminal</span>
          </div>
          <code className="block bg-terminal-background text-terminal-green p-4 font-mono border border-terminal-border rounded-sm">
            <span className="terminal-prompt">$</span> cd {location.pathname}<br />
            <span className="text-brutalist-accent">bash: cd: {location.pathname}: No such file or directory</span>
          </code>
        </div>
        
        <button
          onClick={() => navigate('/')}
          className="brutalist-button w-full flex items-center justify-center space-x-2 bg-gradient-to-r hover:bg-gradient-to-l from-brutalist-white to-brutalist-grey/30"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Return to Home</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
