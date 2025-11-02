import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import bookUnveiled from '@/assets/book-unveiled.jpg';
import booksovereign from '@/assets/book-sovereign.png';

const Hero = () => {
  const [activeBook, setActiveBook] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const books = [
    {
      image: bookUnveiled,
      title: "Unveiled",
      subtitle: "A Soul's Journey from Amnesia to Alignment",
      gradient: "from-purple-600/20 via-pink-600/20 to-orange-600/20",
      badge: "✨ Spiritual Fiction",
      heroTitle: "Transformative",
      heroSubtitle: "Soul Journeys",
      description: "Discover soul-awakening stories that guide you through journeys of self-discovery, spiritual growth, and divine remembrance."
    },
    {
      image: booksovereign,
      title: "Sovereign",
      subtitle: "Breaking the Marriage Myth and Reclaiming Your Freedom",
      gradient: "from-blue-600/20 via-teal-600/20 to-emerald-600/20",
      badge: "🌟 Personal Growth",
      heroTitle: "Empowering",
      heroSubtitle: "Self Liberation",
      description: "Break free from societal expectations and reclaim your authentic power through transformative insights on independence and freedom."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveBook((prev) => (prev + 1) % books.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrevBook = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveBook((prev) => (prev - 1 + books.length) % books.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handleNextBook = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveBook((prev) => (prev + 1) % books.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNextBook();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrevBook();
    }
  };

  return (
    <section
      className="relative min-h-screen lg:h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-2 sm:space-y-3 lg:space-y-6 mt-5">
            <div className="space-y-1.5 sm:space-y-2 lg:space-y-4 animate-fade-in">
              <div className="inline-block">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-primary/10 text-primary rounded-full text-xs lg:text-sm font-semibold backdrop-blur-sm border border-primary/20 transition-all duration-500 ">
                  {books[activeBook].badge}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-7xl font-serif font-bold text-foreground leading-tight transition-all duration-500">
                {books[activeBook].heroTitle}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 mt-1 lg:mt-2 animate-pulse">
                  {books[activeBook].heroSubtitle}
                </span>
              </h2>
              
              <p className="text-xs sm:text-sm lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 transition-all duration-500 line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">
                {books[activeBook].description}
              </p>
            </div>

            {/* Desktop buttons */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 lg:pt-4">
              <Button
                variant="cta"
                size="lg"
                onClick={() => scrollToSection('books')}
                className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Books
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('about')}
                className="transform hover:scale-105 transition-all duration-300"
              >
                About the Author
              </Button>
            </div>

            {/* Book indicators */}
            <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start pt-1 sm:pt-2 lg:pt-4">
              {books.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setActiveBook(index);
                      setIsTransitioning(false);
                    }, 500);
                  }}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    activeBook === index
                      ? 'w-8 sm:w-12 bg-primary'
                      : 'w-1.5 sm:w-2 bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`View ${books[index].title}`}
                />
              ))}
            </div>
          </div>

          {/* Book Display - 3D Carousel */}
          <div 
            className="flex justify-center lg:justify-end perspective-1000 order-2 lg:order-none relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation buttons - Mobile only */}
            {/* <button
              onClick={handlePrevBook}
              className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-background transition-all"
              aria-label="Previous book"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={handleNextBook}
              className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-background transition-all"
              aria-label="Next book"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button> */}

            <div className="relative w-full max-w-[200px] sm:max-w-xs lg:max-w-md xl:max-w-lg h-[280px] sm:h-[350px] lg:h-[600px]">
              {books.map((book, index) => {
                const isActive = index === activeBook;
                const isPrev = index === (activeBook - 1 + books.length) % books.length;
                const isNext = index === (activeBook + 1) % books.length;

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isActive
                        ? 'opacity-100 scale-100 translate-x-0 rotate-y-0 z-30'
                        : isPrev
                        ? 'opacity-30 scale-75 -translate-x-32 rotate-y-45 z-10'
                        : isNext
                        ? 'opacity-30 scale-75 translate-x-32 -rotate-y-45 z-10'
                        : 'opacity-0 scale-50 z-0'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isActive
                        ? 'translateZ(0) rotateY(0deg)'
                        : isPrev
                        ? 'translateZ(-100px) rotateY(45deg) translateX(-120px)'
                        : isNext
                        ? 'translateZ(-100px) rotateY(-45deg) translateX(120px)'
                        : 'translateZ(-200px)'
                    }}
                  >
                    <div className="relative group h-full">
                      {/* Glowing background effect */}
                      <div
                        className={`absolute -inset-4 bg-gradient-to-r ${book.gradient} rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500 ${
                          isActive ? 'opacity-30' : ''
                        }`}
                      />
                      
                      {/* Book cover */}
                      <div className="relative h-full flex items-center justify-center">
                        <img
                          src={book.image}
                          alt={`${book.title}: ${book.subtitle}`}
                          className={`relative w-full h-auto max-h-full object-contain rounded-2xl shadow-2xl transition-all duration-700 ${
                            isActive
                              ? 'group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-3xl'
                              : ''
                          } ${isTransitioning && isActive ? 'blur-sm' : 'blur-0'}`}
                        />
                        
                        {/* Book title overlay */}
                        {isActive && (
                          <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 left-1/2 -translate-x-1/2 w-full text-center px-4">
                            <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-foreground drop-shadow-lg">
                              {book.title}
                            </h3>
                          </div>
                        )}
                      </div>

                      {/* Sparkle effects */}
                      {isActive && (
                        <>
                          <div className="hidden lg:block absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75" />
                          <div className="hidden lg:block absolute bottom-20 left-10 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75 animation-delay-300" />
                          <div className="hidden lg:block absolute top-1/2 right-5 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-75 animation-delay-700" />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile buttons - below the book carousel */}
          <div className="lg:hidden flex flex-col gap-2 sm:gap-3 justify-center order-3 pt-3 sm:pt-4">
            <Button
              variant="cta"
              size="default"
              onClick={() => scrollToSection('books')}
              className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full text-sm sm:text-base"
            >
              Explore Books
            </Button>
            <Button
              variant="outline"
              size="default"
              onClick={() => scrollToSection('about')}
              className="transform hover:scale-105 transition-all duration-300 w-full text-sm sm:text-base"
            >
              About the Author
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-45 {
          transform: rotateY(45deg);
        }
        .-rotate-y-45 {
          transform: rotateY(-45deg);
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;