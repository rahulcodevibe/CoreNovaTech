import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

const ProjectCard = ({ title, description, image, technologies, category }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-hero transition-smooth cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
          <div className="bg-white/90 p-2 rounded-full">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
          {category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-smooth">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;