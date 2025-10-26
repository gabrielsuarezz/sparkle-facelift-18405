import { Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Navigation = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-section');
    chatSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Sun className="h-8 w-8 text-primary transition-transform group-hover:rotate-180 duration-500" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            HELIOS
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/learn-more">
            <Button variant="ghost" className="font-medium hover:text-primary transition-colors">
              Learn More
            </Button>
          </Link>
          <Button 
            onClick={scrollToChat}
            className="bg-gradient-to-r from-primary to-[hsl(35,100%,58%)] text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all"
          >
            Chat w/ Us
          </Button>
        </div>
      </div>
    </nav>
  );
};
