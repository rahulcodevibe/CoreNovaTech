import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="bg-gradient-hero p-2 rounded-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-glow-pulse">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold group-hover:text-accent transition-all duration-300">
              <span className="text-indigo-600 font-bold text-3xl">Core</span>
              <span className="text-sky-500 font-bold text-3xl">Nova</span>
              <span className="text-slate-500 font-semibold text-2lg"> Tech</span>

            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-accent transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-accent transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="hero"
              size="sm"
              className="transform hover:scale-110 transition-all duration-300 animate-glow-pulse"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-accent transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-accent transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground hover:text-accent transition-smooth"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-accent transition-smooth"
              >
                About
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="hero"
                size="sm"
                className="w-fit"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;