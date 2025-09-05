import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveLink?: string;   // ✅ Added this property
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  category,
  liveLink,   // ✅ Destructure it here
  delay = 0,
}: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="group overflow-hidden shadow-card hover:shadow-hero transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* External Link button */}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
            >
              <div className="bg-white/90 p-2 rounded-full animate-bounce-in hover:bg-primary/90 hover:text-white">
                <ExternalLink className="h-4 w-4 text-primary" />
              </div>
            </a>
          )}

          {/* Category Badge */}
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            {category}
          </Badge>
        </div>

        <CardContent className="p-6 transform transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-all duration-300 transform group-hover:translate-x-1">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 transition-all duration-300">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
