import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import TechStackSection from "@/components/tech-stack-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="tech">
          <TechStackSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Soham Gandhi. Built with ❤️ using React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
