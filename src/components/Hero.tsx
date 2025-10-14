import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import bookUnveiled from "@/assets/book-unveiled.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
              Transformative
              <span className="block text-primary mt-2">Spiritual Fiction</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Discover soul-awakening stories that guide you through journeys of self-discovery, 
              spiritual growth, and divine remembrance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="cta" size="lg" onClick={() => scrollToSection("books")}>
                Explore Books
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("about")}>
                About the Author
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-scale">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-smooth" />
              <img
                src={bookUnveiled}
                alt="Unveiled: A Soul's Journey from Amnesia to Alignment"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-book transform group-hover:scale-105 transition-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
