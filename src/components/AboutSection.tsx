import { Card, CardContent } from '@/components/ui/card';
import { Brain, Database, TrendingUp, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Data Modeling & Analysis",
      description: "Proficient in designing data models, performing complex analysis, and extracting actionable insights"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Proficient in extracting insights from complex datasets using statistical analysis"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Focused on translating data findings into actionable business strategies"
    },
    {
      icon: Users,
      title: "Stakeholder Communication",
      description: "Skilled at presenting technical insights to non-technical stakeholders"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recent MSc Data Science graduate passionate about transforming complex data into clear business insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-foreground/90 leading-relaxed">
                My passion lies in uncovering the stories hidden within data and transforming complex information into clear, actionable strategies. 
                With a recent <strong className="text-primary">MSc in Data Science from the University of Essex</strong>, I have a strong academic foundation complemented by practical, hands-on project experience.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                I specialize in <strong className="text-secondary">data analysis</strong>, 
                <strong className="text-accent"> statistical modeling</strong>, and 
                <strong className="text-primary"> data visualization</strong>, 
                with a proven ability to develop reports and dashboards that drive business decisions. 
                My approach combines technical expertise with business acumen to deliver solutions 
                that drive real-world impact.
              </p>

              <p className="text-foreground/90 leading-relaxed">
                Currently seeking opportunities to apply my data science expertise in challenging 
                real-world business scenarios. I'm particularly interested in roles where I can 
                contribute to data-driven decision making and help organizations unlock the value 
                hidden in their data.
              </p>
            </div>

            
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card className="gradient-border data-glow text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <highlight.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2024</div>
            <div className="text-sm text-muted-foreground">MSc Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Technical Skills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Dedicated</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;