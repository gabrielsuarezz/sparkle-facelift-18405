import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Battery, TrendingUp, Shield, Wrench } from "lucide-react";
import { SunGearLogo } from "@/components/SunGearLogo";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Learn More About Our Solution
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Discover how solar energy can transform our community and why eliminating the solar sales tax matters.
          </p>

          <div className="space-y-8">
            <Card className="p-8 border-2 border-primary/30 hover:border-primary/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-full shrink-0 group-hover:scale-110 transition-transform">
                  <SunGearLogo className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">Why Solar Energy?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Solar energy is clean, renewable, and increasingly affordable. By harnessing the power of the sun, 
                    households can reduce their electricity bills by up to 70% while decreasing their carbon footprint. 
                    Unlike traditional energy sources, solar panels require minimal maintenance and can last 25+ years.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With rising electricity costs and aging infrastructure, solar energy offers a sustainable path forward 
                    that benefits both families and the environment.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-secondary/30 hover:border-secondary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full shrink-0">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">The Solar Sales Tax Issue</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Currently, solar panel installation is subject to sales tax, making this life-changing technology 
                    less accessible to families who need it most. This tax creates a significant barrier to adoption, 
                    especially for low and middle-income households.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We're advocating for the elimination of this tax to make solar energy accessible to everyone. 
                    By removing this barrier, we can accelerate the transition to clean energy and help more families 
                    reduce their energy costs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-primary/30 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-full shrink-0">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">Our Innovation: Sun-Tracking Solar Panel</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We've developed a physical prototype of a light-tracking solar panel system that automatically 
                    adjusts its position throughout the day to follow the sun's movement across the sky. This innovation 
                    can increase energy capture by up to 40% compared to fixed solar panels.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our sun-tracking system demonstrates that with innovation and engineering, we can maximize the 
                    efficiency of solar technology and make renewable energy even more compelling for households.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/50 to-secondary/10 border-2 border-primary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-full shrink-0">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">The Impact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By combining education, policy advocacy, and technological innovation, we're working to create 
                    lasting change. Our goal is to empower communities to take control of their energy future, 
                    reduce costs, and build a more sustainable world for future generations.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
