import { Heart, Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-background">Aurora</h3>
                <p className="text-background/70 mt-2">
                  Thoughtfully designed children's clothing for life's little adventures.
                </p>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-background/70">Follow our journey:</p>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Shop</h4>
              <nav className="space-y-3">
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  New Arrivals
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Girls (0-8 years)
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Boys (0-8 years)
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Baby (0-24 months)
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Sale
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Gift Cards
                </a>
              </nav>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Support</h4>
              <nav className="space-y-3">
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Size Guide
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Shipping Info
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Returns & Exchanges
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Care Instructions
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Contact Us
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  FAQ
                </a>
              </nav>
            </div>

            {/* Company Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Company</h4>
              <nav className="space-y-3">
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Sustainability
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Wholesale
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Careers
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Press
                </a>
                <a href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                  Blog
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-background mb-2">
                Stay updated with Aurora
              </h4>
              <p className="text-sm text-background/70">
                Get the latest news, offers, and parenting tips.
              </p>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto md:max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
              />
              <Button className="bg-background text-foreground hover:bg-background/90 shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-background/70">
            <div className="flex items-center gap-1">
              <span>© {currentYear} Aurora.</span>
              <span>Made with</span>
              <Heart className="h-3 w-3 text-coral fill-current" />
              <span>for little adventurers.</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;