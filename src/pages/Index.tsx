import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Users, Lightbulb, TrendingDown, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-section');
    chatSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center mb-6">
            <Sun className="h-20 w-20 text-primary animate-[spin_20s_linear_infinite]" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-[hsl(35,100%,58%)] to-secondary bg-clip-text text-transparent animate-fade-in">
            HELIOS
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building a Brighter Future
          </p>
          
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/learn-more">
              <Button size="lg" variant="secondary" className="shadow-[var(--shadow-panel)] hover:shadow-lg transition-all">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              onClick={scrollToChat}
              className="bg-gradient-to-r from-primary to-[hsl(35,100%,58%)] hover:shadow-[var(--shadow-glow)] transition-all"
            >
              Chat w/ Us
              <Zap className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8 border-2 hover:border-destructive/50 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="h-8 w-8 text-destructive" />
                <h2 className="text-3xl font-bold text-foreground">The Problem</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rising electricity costs and deteriorating electrical infrastructure are putting a strain on communities. 
                Families are struggling with increasing energy bills while our power systems become less reliable.
              </p>
            </Card>

            <Card className="p-8 border-2 border-primary/50 hover:border-primary transition-all hover:shadow-[var(--shadow-glow)]">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">The Solution</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Education on alternative energy solutions, advocacy for eliminating sales tax on solar installation, 
                and innovative technology like our sun-tracking solar panel that maximizes energy output.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-[var(--shadow-panel)] transition-all hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Accessibility</h3>
              <p className="text-muted-foreground">
                Making solar energy solutions available and affordable for everyone in our community.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-[var(--shadow-panel)] transition-all hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Equality</h3>
              <p className="text-muted-foreground">
                Ensuring all families have equal access to clean, reliable, and affordable energy.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-[var(--shadow-panel)] transition-all hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent rounded-full">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Pioneering new technologies like our sun-tracking solar panel to maximize efficiency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Chat Section - Placeholder */}
      <section id="chat-section" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Chat With Us</h2>
            <p className="text-lg text-muted-foreground">
              Ask our AI assistant anything about solar energy, our project, or how you can get involved.
            </p>
          </div>
          
          <Card className="p-8 border-2 border-secondary/50 shadow-[var(--shadow-panel)]">
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <div className="text-center">
                <Zap className="h-16 w-16 mx-auto mb-4 text-primary animate-pulse" />
                <p className="text-lg">Chat interface will be integrated here</p>
                <p className="text-sm mt-2">Connected to your Snowflake API</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
