import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Diva Reign</h3>
            <p className="text-sm opacity-90">
              Transformative spiritual fiction that awakens the soul and illuminates the path to self-discovery.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#books" className="text-sm opacity-90 hover:opacity-100 transition-smooth">
                Books
              </a>
              <a href="#about" className="text-sm opacity-90 hover:opacity-100 transition-smooth">
                About
              </a>
              <a href="#contact" className="text-sm opacity-90 hover:opacity-100 transition-smooth">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-bounce"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-bounce"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-bounce"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@divareign.com"
                className="hover:scale-110 transition-bounce"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} Diva Reign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
