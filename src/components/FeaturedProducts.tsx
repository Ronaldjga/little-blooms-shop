import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Organic Cotton Floral Dress",
      price: 32.99,
      originalPrice: 45.99,
      image: "/placeholder-dress.jpg",
      category: "Dresses",
      rating: 5,
      isNew: true,
      isOnSale: true,
      colors: ["coral", "primary", "accent"],
      sizes: ["2T", "3T", "4T", "5T"]
    },
    {
      id: "2",
      name: "Adventure Explorer Set",
      price: 28.50,
      image: "/placeholder-set.jpg",
      category: "Sets",
      rating: 4,
      isNew: true,
      colors: ["primary", "secondary"],
      sizes: ["12M", "18M", "2T", "3T"]
    },
    {
      id: "3",
      name: "Cozy Knit Cardigan",
      price: 38.00,
      originalPrice: 42.00,
      image: "/placeholder-cardigan.jpg",
      category: "Knitwear",
      rating: 5,
      isOnSale: true,
      colors: ["secondary", "primary", "coral"],
      sizes: ["2T", "3T", "4T"]
    },
    {
      id: "4",
      name: "Rainbow Stripe Leggings",
      price: 18.99,
      image: "/placeholder-leggings.jpg",
      category: "Bottoms",
      rating: 4,
      colors: ["accent", "coral", "primary"],
      sizes: ["12M", "18M", "2T", "3T", "4T"]
    },
    {
      id: "5",
      name: "Sunshine Yellow Romper",
      price: 25.99,
      originalPrice: 29.99,
      image: "/placeholder-romper.jpg",
      category: "Rompers",
      rating: 5,
      isOnSale: true,
      colors: ["accent", "coral"],
      sizes: ["0-3M", "3-6M", "6-12M"]
    },
    {
      id: "6",
      name: "Little Gardener Overalls",
      price: 42.00,
      image: "/placeholder-overalls.jpg",
      category: "Overalls",
      rating: 4,
      isNew: true,
      colors: ["primary", "secondary", "accent"],
      sizes: ["12M", "18M", "2T", "3T", "4T"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites that combine comfort, style, and sustainability 
            for your little one's wardrobe essentials.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;