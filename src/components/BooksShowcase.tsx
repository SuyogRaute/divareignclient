import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bookUnveiled from '@/assets/book-unveiled.jpg';
import bookSovereign from '@/assets/book-sovereign.png';
import bookUnveiledback from '@/assets/book-unveiled-back.jpg';
import bookSovereigamazon from '@/assets/book-sovereign-amazon.jpg';
import bookUnveiledamazon from '@/assets/book-unveiled-amazon.jpg';
import booksovereign2 from '@/assets/book-sovereignback.jpg';

// ✅ Detect user’s country (India vs Others)
const useCountry = () => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // Try IP-based lookup for accuracy
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => setCountry(data.country_code))
      .catch(() => {
        // Fallback: use browser language
        const userLang = navigator.language || navigator.language;
        if (userLang.toLowerCase().includes("en-in") || userLang.toLowerCase().includes("hi")) {
          setCountry("IN");
        } else {
          setCountry("US");
        }
      });
  }, []);

  return country;
};

// ✅ Button component (from your UI library style)
const Button = ({ children, variant = "default", size = "default", asChild, className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    cta: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl",
    outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground"
  };
  const sizes = {
    default: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg"
  };

  const buttonClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asChild && children?.type === 'a') {
    return <a {...children.props} className={buttonClassName}>{children.props.children}</a>;
  }

  return <button className={buttonClassName} {...props}>{children}</button>;
};

// ✅ Badge component
const Badge = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors";
  const variants = {
    default: "bg-primary/10 text-primary border border-primary/20",
    secondary: "bg-secondary text-secondary-foreground"
  };

  return <span className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</span>;
};

// ✅ Book Card
const BookCard = ({ title, subtitle, description, images, tags, amazonLinkIN, amazonLinkUS, reverse = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const country = useCountry();

  // Auto-rotate images
  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images]);

  const goToNextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const goToPrevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  // ✅ Choose correct Amazon link
  const amazonLink = country === "IN" ? amazonLinkIN : amazonLinkUS;

  return (
    <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? "md:grid-flow-dense" : ""}`}>
      <div className={`${reverse ? "md:col-start-2" : ""} animate-fade-in-scale`}>
        <div className="relative group max-w-md mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[2/3]">
            <img
              src={images[currentImageIndex]}
              alt={`${title}: ${subtitle} - Image ${currentImageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75 w-2'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={`${reverse ? "md:col-start-1 md:row-start-1" : ""} space-y-6 animate-fade-in`}>
        <div className="space-y-3">
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">{title}</h3>
          <p className="text-xl lg:text-2xl text-muted-foreground font-light italic">{subtitle}</p>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-sm px-3 py-1">{tag}</Badge>
          ))}
        </div>

        <div className="pt-4">
          <Button variant="cta" size="lg" asChild>
            <a href={amazonLink} target="_blank" rel="noopener noreferrer">
              Buy on Amazon
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

// ✅ Books Section
const BooksShowcase = () => {
  const books = [
    {
      title: "Unveiled",
      subtitle: "A Soul's Journey from Amnesia to Alignment",
      description: `You are not broken. You are becoming.

UNVEILED is not just a book—it's a lifeline for the soul. Written in poetic, piercingly honest prose, it invites you to break free from the illusions of the Matrix and remember the divine truth buried beneath your pain.

This is a guide for the seekers, the sensitives, and the silent warriors—for those who have felt too much, fallen too hard, and risen with sacred fire in their bones.

In these pages, pain becomes power, trauma becomes transformation, and remembering becomes the most radical act of all.

UNVEILED isn't just something you read. It's something you feel.

And once you remember who you are, there's no going back.`,
      images: [bookUnveiledamazon, bookUnveiled, bookUnveiledback],
      tags: ["Spiritual Fiction", "Self-Discovery", "Transformation", "Soul Journey"],
      amazonLinkIN: "https://www.amazon.in/dp/B0FMKHSJRB?ref=cm_sw_r_ffobk_cso_wa_apan_dp_P6Z0KPRX7M7BCEE1N4WJ&ref_=cm_sw_r_ffobk_cso_wa_apan_dp_P6Z0KPRX7M7BCEE1N4WJ&social_share=cm_sw_r_ffobk_cso_wa_apan_dp_P6Z0KPRX7M7BCEE1N4WJ&bestFormat=true",
      amazonLinkUS: "https://www.amazon.com/dp/B0FMKG81R3?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_6MCZCTTZ4WY3TSJ7JVCT&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_6MCZCTTZ4WY3TSJ7JVCT&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_6MCZCTTZ4WY3TSJ7JVCT&bestFormat=true&csmig=1",
    },
    {
      title: "Sovereign",
      subtitle: "Breaking the Marriage Myth and Reclaiming Your Freedom",
      description: `What if marriage was never about love?

For centuries, society has sold us the myth of marriage as the ultimate fulfillment — a sacred bond, a promise of happiness, a necessary step into adulthood. But what if this promise has been the greatest scam of all?

Sovereign: Breaking the Marriage Myth and Reclaiming Your Freedom dismantles the institution of marriage with unflinching honesty. Diva Reign exposes how it has caged women under patriarchy, trapped men in roles they did not choose, and suffocated the natural evolution of human beings.

This is not a book against love — it is a book against chains disguised as love. It is a manifesto for those who dare to question, to walk away from scripts written by others, and to reclaim their sovereignty.

Raw, fearless, and deeply liberating, Sovereign is the book for every soul who knows they were born free, but taught to forget it.`,
      images: [bookSovereign, booksovereign2, bookSovereigamazon],
      tags: ["Personal Growth", "Freedom", "Empowerment", "Relationships"],
      amazonLinkIN: "https://www.amazon.in/dp/8199223863?ref=cm_sw_r_ffobk_cso_cp_apan_dp_WX25JCABCAC2ADZZ9428&ref_=cm_sw_r_ffobk_cso_cp_apan_dp_WX25JCABCAC2ADZZ9428&social_share=cm_sw_r_ffobk_cso_cp_apan_dp_WX25JCABCAC2ADZZ9428&bestFormat=true",
      amazonLinkUS: "https://www.amazon.com/dp/8199223863/ref=sr_1_1?crid=LHQ3SXZUX9Z3&dib=eyJ2IjoiMSJ9.ki0WBAPATrX9o6hIUQ0iAA.wG6Yuyq0FlYVR-pHmPUNHcqn0QyZI6Uc2bNXkWqn5Xw&dib_tag=se&keywords=9788199223868&qid=1760174705&refresh=1&sprefix=%2Caps%2C287&sr=8-1",
      reverse: true,
    },
  ];

  return (
    <section id="books" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground">Published Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore transformative stories that awaken the soul and illuminate the path to self-discovery
          </p>
        </div>

        <div className="space-y-20 lg:space-y-24">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksShowcase;
