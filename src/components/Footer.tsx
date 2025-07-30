import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Summary */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Prathamesh Shirole</h3>
            <p className="text-muted-foreground mb-4">
              MSc Data Science Graduate specializing in machine learning, 
              data analysis, and business intelligence solutions.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-foreground">shiroleprathamesh2000@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-foreground">+91 9765150677</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-foreground">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#education" className="block text-muted-foreground hover:text-primary transition-colors">
                Education
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Status & Availability */}
          <div>
            <h4 className="font-semibold mb-4">Current Status</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-foreground text-sm">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground text-sm">Open to relocation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground text-sm">Remote work ready</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-xs text-muted-foreground mb-2">Specializing in:</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Data Analysis</span>
                <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">Machine Learning</span>
                <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">Business Intelligence</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Prathamesh Shirole. Built with{' '}
            <Heart className="inline h-4 w-4 text-red-500 mx-1" />
            using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Ready to transform your data into actionable insights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;