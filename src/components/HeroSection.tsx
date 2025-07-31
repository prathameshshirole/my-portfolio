import { Button } from '@/components/ui/button';
import { Download, Mail, ChevronDown } from 'lucide-react';
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
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Animated data grid */}
      <div className="absolute inset-0 data-grid opacity-20"></div>
      
      {/* Floating data points */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full floating-animation opacity-60"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-secondary rounded-full floating-animation animation-delay-200 opacity-60"></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-accent rounded-full floating-animation animation-delay-400 opacity-60"></div>
      <div className="absolute bottom-20 right-32 w-2 h-2 bg-primary rounded-full floating-animation animation-delay-600 opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-primary/30 data-glow">
              <img 
                src={profilePhoto} 
                alt="Prathamesh Shirole" 
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Prathamesh Shirole</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              MSc Data Science Graduate | Aspiring Data Analyst
            </p>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Transforming data into actionable insights through advanced analytics and compelling data visualization
            </p>

            

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="data-glow bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <a href="/Prathamesh_Shirole_CV.pdf" download>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gradient-border hover:shadow-glow-secondary transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="lg"
                className="gradient-border hover:shadow-glow-accent transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={scrollToNext}
              className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
            >
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;