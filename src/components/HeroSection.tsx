import { Button } from '@/components/ui/button';
import { Download, Mail, ChevronDown, BarChart3, Database, Brain } from 'lucide-react';
// import profilePhoto from '@/assets/profile-photo.jpg';
const profilePhoto = '/lovable-uploads/9b0d944d-7b9c-4e35-81b2-85a77c1277c3.png';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pb-24 pt-16"
      aria-labelledby="hero-heading"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
      
      {/* Animated data grid */}
      <div className="absolute inset-0 data-grid opacity-15"></div>
      
      {/* Floating data points - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 left-10 w-4 h-4 bg-primary rounded-full floating-animation opacity-60"></div>
      <div className="hidden sm:block absolute top-32 right-20 w-3 h-3 bg-secondary rounded-full floating-animation animation-delay-200 opacity-60"></div>
      <div className="hidden sm:block absolute bottom-40 left-20 w-5 h-5 bg-accent rounded-full floating-animation animation-delay-400 opacity-60"></div>
      <div className="hidden sm:block absolute bottom-20 right-32 w-2 h-2 bg-primary rounded-full floating-animation animation-delay-600 opacity-60"></div>
      
      {/* Animated data icons - hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-1/4 text-primary/20 icon-pulse">
        <BarChart3 size={40} />
      </div>
      <div className="hidden md:block absolute top-1/3 right-1/3 text-secondary/20 icon-pulse animation-delay-400">
        <Database size={35} />
      </div>
      <div className="hidden md:block absolute bottom-1/3 left-1/3 text-accent/20 icon-pulse animation-delay-200">
        <Brain size={45} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          {/* Profile Photo */}
          <div className="relative flex-shrink-0 mt-4 sm:mt-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 data-glow mx-auto">
              <img 
                src={profilePhoto} 
                alt="Prathamesh Shirole - Data Science Professional" 
                className="w-full h-full object-cover"
                loading="eager"
                width="288"
                height="288"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-primary rounded-full p-1.5 sm:p-2 pulse-glow">
              <BarChart3 className="text-primary-foreground" size={16} />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">Prathamesh Shirole</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium mb-4 sm:mb-6">
              MSc Data Science Graduate | Aspiring Data Analyst
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-foreground/90 mb-6 sm:mb-8 leading-relaxed">
              Transforming data into actionable insights through advanced analytics and compelling data visualization
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="data-glow bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="View my projects section"
              >
                View Projects
              </Button>
              <a href="/Prathamesh_Shirole_CV.pdf" download className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gradient-border hover:shadow-glow-secondary transition-all duration-300 flex items-center justify-center gap-2 w-full"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="lg"
                className="gradient-border hover:shadow-glow-accent transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Go to contact section"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
      
         {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 inset-x-0 flex flex-col items-center animate-bounce z-20">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Scroll to explore</span>
        <ChevronDown className="text-primary cursor-pointer hover:text-primary/80 transition-colors" size={24} onClick={scrollToNext} />
      </div>
    </section>
  );
};

export default HeroSection;