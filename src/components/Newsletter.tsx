import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift, Sparkles, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Aurora! 🌟",
      description: "You'll receive your 15% discount code via email shortly.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-0 shadow-hover bg-white/95 backdrop-blur">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">
                      Newsletter
                    </span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Stay in the Loop
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    Subscribe to get special offers, new arrival alerts, and parenting tips 
                    delivered straight to your inbox. Plus, get <strong>15% off</strong> your first order!
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Gift className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Early Access</p>
                      <p className="text-sm text-muted-foreground">New collections first</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-coral/20 rounded-full flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-coral" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Exclusive Deals</p>
                      <p className="text-sm text-muted-foreground">Subscriber-only offers</p>
                    </div>
                  </div>
                </div>

                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 bg-background border-border focus:border-primary"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isLoading}
                      className="bg-primary hover:bg-primary-dark text-primary-foreground px-8"
                    >
                      {isLoading ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    By subscribing, you agree to receive marketing emails from Aurora. 
                    You can unsubscribe at any time.
                  </p>
                </form>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-primary p-8 shadow-soft">
                  <div className="w-full h-full bg-white/10 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="relative">
                        <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                          <Heart className="h-12 w-12 text-white" />
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-bounce">
                          <span className="text-accent-foreground font-bold text-xs">15%</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-white font-semibold text-lg">Join 10,000+</p>
                        <p className="text-white/90 text-sm">Happy Aurora Families</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-warm rounded-2xl opacity-30"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;