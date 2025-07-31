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
      className="min-h-screen relative flex items-center justify-center overflow-hidden pb-16"
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Photo */}
          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 data-glow mx-auto">
              <img 
                src={profilePhoto} 
                alt="Prathamesh Shirole" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-primary rounded-full p-2 sm:p-3 pulse-glow">
              <BarChart3 className="text-primary-foreground" size={20} />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Prathamesh Shirole</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              MSc Data Science Graduate | Aspiring Data Analyst
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
              Transforming data into actionable insights through advanced analytics and compelling data visualization
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="data-glow bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
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
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce pb-8">
        <span className="text-xs sm:text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <ChevronDown className="text-primary" size={20} />
      </div>
    </section>
  );
};

export default HeroSection;