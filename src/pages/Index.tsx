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
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import heroImage from "@/assets/hero-image.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectMobileApp from "@/assets/project-mobile-app.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";

const Index = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

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
          <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 animate-bounce-in animate-float">
            🚀 Premium Web & App Development
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            We Build Digital
            <span className="block text-accent animate-fade-in-left" style={{ animationDelay: '0.3s' }}>Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Transform your ideas into powerful websites and mobile apps that drive results and delight users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="hero" 
              size="lg"
              className="group transform hover:scale-105 transition-all duration-300 animate-glow-pulse"
            >
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-all duration-300" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
                features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
                delay: 0
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
                features: ["iOS & Android", "Cross-platform", "App Store Ready"],
                delay: 200
              },
              {
                icon: Code2,
                title: "Custom Solutions",
                description: "Tailored digital solutions designed specifically for your business needs and requirements.",
                features: ["API Integration", "Database Design", "Cloud Solutions"],
                delay: 400
              }
            ].map((service, index) => (
              <div
                key={service.title}
                className={`transition-all duration-700 ${
                  servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <Card className="shadow-card hover:shadow-hero transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 transition-all duration-300">
                      {service.description}
                    </p>
                    <ul className="text-left space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={feature}
                          className={`flex items-center transition-all duration-300 transform ${
                            servicesVisible 
                              ? 'translate-x-0 opacity-100' 
                              : 'translate-x-4 opacity-0'
                          }`}
                          style={{ 
                            animationDelay: `${service.delay + (featureIndex * 100)}ms`,
                            transitionDelay: `${service.delay + (featureIndex * 100)}ms`
                          }}
                        >
                          <CheckCircle className="h-4 w-4 text-accent mr-2 animate-scale-in" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
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
              <ProjectCard key={index} {...project} delay={index * 200} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${aboutVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're passionate about creating digital solutions that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "We deliver high-quality projects on time, every time, without compromising on quality.",
                delay: 0
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Our experienced developers and designers work together to create exceptional digital experiences.",
                delay: 200
              },
              {
                icon: Trophy,
                title: "Proven Results",
                description: "Track record of successful projects and satisfied clients who've achieved their business goals.",
                delay: 400
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`text-center transition-all duration-700 group ${
                  aboutVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground transition-all duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
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