import BookCard from "./BookCard";
import bookUnveiled from "@/assets/book-unveiled.jpg";
import bookSovereign from "@/assets/book-sovereign.jpg";

const BooksShowcase = () => {
  const books = [
    {
      title: "Unveiled",
      subtitle: "A Soul's Journey from Amnesia to Alignment",
      description: "A woman awakens with no memory of who she is. As she unravels the secrets of her past, she embarks on a transformative quest of self-discovery and spiritual awakening. A profound exploration of identity, memory, and the soul's purpose.",
      image: bookUnveiled,
      tags: ["Spiritual Fiction", "Self-Discovery", "Transformation", "Soul Journey"],
      amazonLink: "https://amazon.com",
    },
    {
      title: "Sovereign",
      subtitle: "Breaking the Marriage Myth and Reclaiming Your Freedom",
      description: "Challenge societal expectations and discover true personal sovereignty. This empowering narrative explores the myths surrounding marriage and relationships, guiding readers toward authentic freedom and self-determination.",
      image: bookSovereign,
      tags: ["Personal Growth", "Freedom", "Empowerment", "Relationships"],
      amazonLink: "https://amazon.com",
      reverse: true,
    },
  ];

  return (
    <section id="books" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground">
            Published Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore transformative stories that awaken the soul and illuminate the path to self-discovery
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksShowcase;
