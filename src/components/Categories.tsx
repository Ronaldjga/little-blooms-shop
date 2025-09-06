import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Baby, Heart, Shirt, Sparkles } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "New Arrivals",
      description: "Fresh styles for every season",
      icon: Sparkles,
      color: "accent",
      count: "24 items"
    },
    {
      name: "Girls",
      description: "Dresses, tops & more",
      icon: Heart,
      color: "coral",
      count: "156 items"
    },
    {
      name: "Boys", 
      description: "Comfortable everyday wear",
      icon: Shirt,
      color: "primary",
      count: "128 items"
    },
    {
      name: "Baby",
      description: "0-24 months essentials",
      icon: Baby,
      color: "secondary",
      count: "89 items"
    }
  ];

  const colorMap: Record<string, string> = {
    accent: "bg-gradient-to-br from-accent to-accent-light",
    coral: "bg-gradient-to-br from-coral to-coral-light",
    primary: "bg-gradient-to-br from-primary to-primary-light",
    secondary: "bg-gradient-to-br from-secondary to-secondary-light"
  };

  const iconColorMap: Record<string, string> = {
    accent: "text-accent-foreground",
    coral: "text-coral-foreground", 
    primary: "text-primary-foreground",
    secondary: "text-secondary-foreground"
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our thoughtfully organized collections, designed to make 
            finding the perfect outfit for your little one effortless.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className="group overflow-hidden border-border hover:shadow-hover transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className={`${colorMap[category.color]} p-8 relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Icon */}
                    <div className="relative z-10 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className={`h-8 w-8 ${iconColorMap[category.color]}`} />
                      </div>
                      
                      <div>
                        <h3 className={`text-xl font-bold ${iconColorMap[category.color]} mb-1`}>
                          {category.name}
                        </h3>
                        <p className={`text-sm ${iconColorMap[category.color]} opacity-90`}>
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="p-6 bg-background">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-medium">
                        {category.count}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:text-primary-foreground hover:bg-primary group/btn"
                      >
                        Shop Now
                        <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Special Offers Banner */}
        <div className="mt-16">
          <Card className="overflow-hidden bg-gradient-primary border-0 shadow-hover">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-center lg:text-left">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground">
                      First Order Special
                    </h3>
                    <p className="text-primary-foreground/90 text-lg">
                      Get 20% off your first purchase plus free shipping on orders over $50. 
                      Join thousands of happy families who trust Aurora for quality children's clothing.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90 shadow-soft"
                    >
                      Claim Your Discount
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-white/10 p-6 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                        <Sparkles className="h-12 w-12 text-white" />
                      </div>
                      <p className="text-white font-medium text-lg">20% OFF</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Categories;