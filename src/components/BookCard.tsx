import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface BookCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  amazonLink: string;
  reverse?: boolean;
}

const BookCard = ({ title, subtitle, description, image, tags, amazonLink, reverse = false }: BookCardProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? "md:grid-flow-dense" : ""}`}>
      <div className={`${reverse ? "md:col-start-2" : ""} animate-fade-in-scale`}>
        <div className="relative group max-w-md mx-auto">
          <div className="absolute -inset-4 bg-gradient-accent rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-smooth" />
          <img
            src={image}
            alt={`${title}: ${subtitle}`}
            className="relative w-full rounded-2xl shadow-book transform group-hover:scale-105 transition-bounce"
          />
        </div>
      </div>

      <div className={`${reverse ? "md:col-start-1 justify-center md:row-start-1" : ""} space-y-6 animate-fade-in`}>
        <div className="space-y-3">
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {title}
          </h3>
          <p className="text-xl lg:text-2xl text-muted-foreground font-light italic">
            {subtitle}
          </p>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed ">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button variant="cta" size="lg" asChild>
            <a href={amazonLink} target="_blank" rel="noopener noreferrer">
              Buy on Amazon
            </a>
          </Button>
          <Button variant="outline" size="lg">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
