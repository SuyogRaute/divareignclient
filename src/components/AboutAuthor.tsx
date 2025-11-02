import authorPortrait from "@/assets/auther.jpg";
import { Button } from "./ui/button";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const AboutAuthor = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* ✅ Author Image - Left on Desktop, Above name on Mobile */}
          <div className="hidden md:flex justify-center animate-fade-in-scale">
            <div className="relative group w-[320px] lg:w-[360px]">
              <div className="absolute -inset-4 bg-gradient-gold rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition-smooth" />
              <img
                src={authorPortrait}
                alt="Diva Reign - Author Portrait"
                className="relative w-full h-auto rounded-2xl shadow-elevated transform group-hover:scale-105 transition-bounce object-cover"
              />
            </div>
          </div>

          {/* ✅ Author Text */}
          <div className="space-y-6 animate-fade-in text-left md:text-left">
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
                About the Author
              </h2>

              {/* 👇 Mobile Image (between heading and name) */}
              <div className="flex justify-center md:hidden my-6">
                <div className="relative group w-[220px] sm:w-[260px]">
                  <div className="absolute -inset-4 bg-gradient-gold rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition-smooth" />
                  <img
                    src={authorPortrait}
                    alt="Diva Reign - Author Portrait"
                    className="relative w-full h-auto rounded-2xl shadow-elevated transform group-hover:scale-105 transition-bounce object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl lg:text-3xl text-primary font-serif">
                Diva Reign
              </h3>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Diva Reign is a contemporary author and visionary storyteller whose work explores the
                evolution of the self, consciousness, and the human spirit. Through her books{" "}
                <em>Unveiled</em> and <em>Sovereign</em>, she invites readers on a transformative
                journey of truth, healing, and empowerment.
              </p>
              <p>
                With a voice that bridges depth and clarity, Diva writes to awaken awareness and
                spark inner alchemy. Her words reflect a lived understanding of resilience and
                renewal — turning pain into purpose and introspection into illumination.
              </p>
              <p>
                Each of her works is not merely a book, but a mirror — guiding readers toward
                authenticity, freedom, and higher consciousness.
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center sm:items-start  justify-start gap-4">
              <Button variant="elegant" size="lg" onClick={scrollToContact}>
                Connect With Me
              </Button>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/diva.reign?igsh=NnUzd3k4azVtbGlz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-bounce"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/divareign15?t=1oCBRnMQy6sKT8MSaMYpNA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-bounce"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/share/17YDRGq2e6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-bounce"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="mailto:divareign15@gmail.com"
                  className="hover:scale-110 transition-bounce"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
