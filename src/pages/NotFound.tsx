
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal as TerminalIcon, AlertTriangle, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card className="feature-card group max-w-2xl w-full animate-fade-in">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="font-sans text-2xl">Page Not Found</CardTitle>
              <CardDescription className="font-mono text-xs mt-1">Error 404</CardDescription>
            </div>
            <div className="glass-panel flex items-center space-x-1">
              <AlertTriangle className="h-3 w-3 text-terminal-green" />
              <span className="text-xs">ERROR_PATH_NOT_FOUND</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="font-sans mb-4">The requested path was not found on this server. Please check the URL or navigate back to the home page.</p>
              
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
                className="brutalist-button w-full flex items-center justify-center space-x-2"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Return to Home</span>
              </button>
            </div>
            <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="404 Error" className="object-cover w-full h-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
