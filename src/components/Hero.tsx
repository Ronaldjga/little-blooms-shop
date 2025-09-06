import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[600px] lg:min-h-[700px] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-light/50 rounded-full text-sm font-medium text-foreground">
              <Sparkles className="h-4 w-4 text-accent" />
              New Collection Available
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Little Adventures 
                <span className="text-primary block">Begin Here</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Discover our carefully curated collection of sustainable, comfortable, 
                and stylish clothing designed for your little ones' every adventure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground group">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Lookbook
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Organic Cotton</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-coral rounded-full"></div>
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/5] rounded-2xl bg-gradient-warm p-8 shadow-soft">
              {/* Placeholder for hero image - will be replaced with actual product image */}
              <div className="w-full h-full bg-white/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-primary font-medium">Beautiful Children's Fashion</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-hover animate-bounce">
              <span className="text-accent-foreground font-bold text-sm">NEW</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-coral rounded-full flex items-center justify-center shadow-hover">
              <span className="text-coral-foreground font-bold text-xs">-20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-secondary rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-coral rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;