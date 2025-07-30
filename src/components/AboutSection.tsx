import { Card, CardContent } from '@/components/ui/card';
import { Brain, Database, TrendingUp, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning Expertise",
      description: "Advanced knowledge in ML algorithms, model optimization, and deployment strategies"
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
                As a recent <strong className="text-primary">MSc Data Science graduate from University of Essex</strong>, 
                I bring a fresh perspective and cutting-edge knowledge to the field of data analytics. 
                My academic foundation is complemented by practical experience gained through internships 
                and hands-on projects.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                I specialize in <strong className="text-secondary">machine learning</strong>, 
                <strong className="text-accent"> statistical analysis</strong>, and 
                <strong className="text-primary"> data visualization</strong>, 
                with a proven track record of achieving 98% accuracy in ML model deployment. 
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

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Immediately Available
              </span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Mumbai, India
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Open to Relocation
              </span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="gradient-border data-glow">
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