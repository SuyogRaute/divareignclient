import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BooksShowcase from "@/components/BooksShowcase";
import AboutAuthor from "@/components/AboutAuthor";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <BooksShowcase />
        <AboutAuthor />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
