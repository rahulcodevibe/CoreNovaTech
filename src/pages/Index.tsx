import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Zap, 
  Users, 
  Trophy,
  ArrowRight,
  CheckCircle
} from "lucide-react";

import heroImage from "@/assets/hero-image.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectMobileApp from "@/assets/project-mobile-app.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with advanced features, payment integration, and responsive design for optimal user experience.",
      image: projectEcommerce,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile application for fitness enthusiasts with workout tracking, progress analytics, and social features.",
      image: projectMobileApp,
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      category: "Mobile App"
    },
    {
      title: "Corporate Website",
      description: "Professional business website with modern design, CMS integration, and optimized performance.",
      image: projectCorporate,
      technologies: ["Next.js", "TypeScript", "Tailwind", "Sanity"],
      category: "Web Development"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Modern development workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
            🚀 Premium Web & App Development
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We Build Digital
            <span className="block text-accent">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Transform your ideas into powerful websites and mobile apps that drive results and delight users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="hero" 
              size="lg"
              className="group"
            >
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card hover:shadow-hero transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-bounce">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <p className="text-muted-foreground mb-6">
                  Custom websites and web applications built with modern technologies for optimal performance and user experience.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    SEO Optimized
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Fast Loading
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hero transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-bounce">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
                <p className="text-muted-foreground mb-6">
                  Native and cross-platform mobile applications that provide seamless user experiences across all devices.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    iOS & Android
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Cross-platform
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    App Store Ready
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hero transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-bounce">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Tailored digital solutions designed specifically for your business needs and requirements.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    API Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Database Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Cloud Solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're passionate about creating digital solutions that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">
                We deliver high-quality projects on time, every time, without compromising on quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Our experienced developers and designers work together to create exceptional digital experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Track record of successful projects and satisfied clients who've achieved their business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">WebArtisans</span>
            </div>
            <p className="text-white/80 mb-6">
              Crafting digital experiences that inspire and deliver results.
            </p>
            <p className="text-white/60">
              © 2024 WebArtisans. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;