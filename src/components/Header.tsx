import { ShoppingBag, Menu, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              className="md:hidden p-2 mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              Aurora
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              New Arrivals
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Girls
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Boys
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Baby
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Sale
            </a>
          </nav>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden lg:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-muted/50 border-border focus:border-primary"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Search className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline">Search</span>
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              <span className="hidden sm:ml-2 sm:inline">Account</span>
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:ml-2 sm:inline">Wishlist</span>
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-4 w-4" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-coral text-coral-foreground">
                2
              </Badge>
              <span className="hidden sm:ml-2 sm:inline">Cart</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="px-4 pt-4 pb-6 space-y-4">
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                New Arrivals
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Girls
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Boys
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Baby
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Sale
              </a>
              <div className="pt-4 border-t border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 bg-muted/50"
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;