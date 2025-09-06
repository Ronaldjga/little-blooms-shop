import { Heart, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating?: number;
  isNew?: boolean;
  isOnSale?: boolean;
  colors?: string[];
  sizes?: string[];
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  rating = 5, 
  isNew = false, 
  isOnSale = false,
  colors = ["primary", "secondary", "coral"],
  sizes = ["2T", "3T", "4T"]
}: ProductCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isHovered, setIsHovered] = useState(false);

  const colorMap: Record<string, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary", 
    coral: "bg-coral",
    accent: "bg-accent"
  };

  return (
    <Card 
      className="group overflow-hidden border-border hover:shadow-hover transition-all duration-300 bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted/30">
          {/* Placeholder for product image */}
          <div className="w-full h-full bg-gradient-warm flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto bg-white/30 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-medium text-primary">{category}</p>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-accent text-accent-foreground font-medium">
                New
              </Badge>
            )}
            {isOnSale && (
              <Badge className="bg-coral text-coral-foreground font-medium">
                Sale
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 backdrop-blur hover:bg-white transition-all duration-200",
              isFavorited && "text-coral hover:text-coral"
            )}
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <Heart className={cn("h-4 w-4", isFavorited && "fill-current")} />
          </Button>

          {/* Quick Actions - Show on Hover */}
          <div className={cn(
            "absolute inset-x-3 bottom-3 transform transition-all duration-300",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          )}>
            <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft">
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Category & Rating */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
              {category}
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3 w-3",
                    i < rating 
                      ? "fill-accent text-accent" 
                      : "text-muted-foreground"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>

          {/* Color Options */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Colors:</span>
            <div className="flex gap-1">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "w-4 h-4 rounded-full border-2 transition-all",
                    colorMap[color] || "bg-muted",
                    selectedColor === color 
                      ? "border-foreground scale-110" 
                      : "border-muted-foreground/30"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Sizes:</span>
            <div className="flex gap-1">
              {sizes.map((size) => (
                <span
                  key={size}
                  className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">
              ${price.toFixed(2)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            {isOnSale && (
              <Badge variant="secondary" className="ml-auto bg-coral-light text-coral text-xs">
                {Math.round(((originalPrice! - price) / originalPrice!) * 100)}% off
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;