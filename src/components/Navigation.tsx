import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["books", "about", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "books", label: "Books" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/98 backdrop-blur-xl shadow-2xl border-b border-primary/20"
          : "bg-card/80 backdrop-blur-md shadow-lg border-b border-border"
      }`}
    >
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-70" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with animation */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <h1 className="relative text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Diva Reign
            </h1>
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-primary animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 group"
              >
                <span className={`relative z-10 font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground group-hover:text-primary"
                }`}>
                  {item.label}
                </span>
                
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`} />
                
                {/* Hover glow effect */}
                <span className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </button>
            ))}
            
            <div className="ml-4 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition-all duration-300" />
              <Button 
                variant="cta" 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="relative transform group-hover:scale-105 transition-all duration-300"
              >
                Get in Touch
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 rounded-lg group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            <div className="relative text-foreground group-hover:text-primary transition-colors duration-300">
              {isOpen ? (
                <X size={24} className="animate-in spin-in-90" />
              ) : (
                <Menu size={24} />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-in slide-in-from-top duration-300">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative block w-full text-left px-4 py-3 rounded-lg group overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className={`relative font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground group-hover:text-primary"
                }`}>
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary via-purple-500 to-pink-500 rounded-r-full" />
                )}
              </button>
            ))}
            
            <div className="px-4 pt-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition-all duration-300" />
                <Button 
                  variant="cta" 
                  className="relative w-full group-hover:scale-[1.02] transition-transform duration-300" 
                  onClick={() => scrollToSection("contact")}
                >
                  Get in Touch
                  <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes spin-in-90 {
          from {
            transform: rotate(-90deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .spin-in-90 {
          animation: spin-in-90 0.3s ease-out;
        }
        @keyframes slide-in-from-top {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .slide-in-from-top {
          animation: slide-in-from-top 0.3s ease-out;
        }
        .animate-in {
          animation-fill-mode: both;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;