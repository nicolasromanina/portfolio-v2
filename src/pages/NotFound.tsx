
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen flex items-center justify-center bg-terminal-background">
      <div className="brutalist-card max-w-md w-full p-8">
        <h1 className="text-4xl font-bold mb-4 text-brutalist-accent">404</h1>
        <p className="text-xl mb-6">Terminal Error: Path Not Found</p>
        <p className="text-terminal-muted mb-8">
          The requested path was not found on this server.
        </p>
        <code className="block bg-terminal-background text-terminal-green p-4 mb-8 font-mono border-2 border-terminal-border">
          $ cd {location.pathname}<br />
          bash: cd: {location.pathname}: No such file or directory
        </code>
        <button
          onClick={() => navigate('/')}
          className="brutalist-button w-full"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
