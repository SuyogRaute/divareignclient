import authorPortrait from "@/assets/author-portrait.jpg";
import { Button } from "./ui/button";

const AboutAuthor = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-scale">
            <div className="relative group max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-gradient-gold rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition-smooth" />
              <img
                src={authorPortrait}
                alt="Diva Reign - Author Portrait"
                className="relative w-full rounded-full shadow-elevated transform group-hover:scale-105 transition-bounce"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground">
                About the Author
              </h2>
              <h3 className="text-2xl lg:text-3xl text-primary font-serif">
                Diva Reign
              </h3>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Diva Reign is a mystic, creator, and soul-writer whose life has been born on a path 
                of healing, purpose, and divine remembrance.
              </p>
              <p>
                Her mission is to help others wake up to the truth of who they are, guiding them 
                through transformative stories that resonate with the deepest parts of the soul.
              </p>
              <p>
                Drawing from her own spiritual journey, she crafts narratives that inspire personal 
                growth, self-discovery, and alignment with one's highest purpose.
              </p>
            </div>

            <div className="pt-6">
              <Button variant="elegant" size="lg" onClick={scrollToContact}>
                Connect With Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
