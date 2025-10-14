import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary">
            Diva Reign
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("books")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Books
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </button>
            <Button variant="cta" size="lg" onClick={() => scrollToSection("contact")}>
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("books")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-smooth font-medium"
            >
              Books
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-smooth font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-smooth font-medium"
            >
              Contact
            </button>
            <div className="px-4 pt-2">
              <Button variant="cta" className="w-full" onClick={() => scrollToSection("contact")}>
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
