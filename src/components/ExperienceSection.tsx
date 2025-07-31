import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Target, Zap, Code, Globe } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Hands-on experience in machine learning and data analysis
          </p>
        </div>

        {/* Main Experience */}
        <Card className="gradient-border data-glow mb-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Briefcase className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Machine Learning Intern
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-1">
                      Code Wind Technologies
                    </p>
                    <p className="text-muted-foreground">
                      June 2022 - July 2022 • Remote
                    </p>
                  </div>
                  <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 w-fit">
                    Internship
                  </Badge>
                </div>

                <div className="space-y-6">
                  <p className="text-foreground/90 leading-relaxed">
                    Analyzed the MNIST dataset to build a predictive classification model for handwritten digits, 
                    achieving 98% accuracy through rigorous data preprocessing and feature engineering.
                  </p>

                  {/* Key Achievements */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary text-sm">•</span>
                          <span className="text-foreground/80">98% accuracy on MNIST dataset classification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary text-sm">•</span>
                          <span className="text-foreground/80">Real-time web application deployment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary text-sm">•</span>
                          <span className="text-foreground/80">Minimal latency optimization for production use</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary text-sm">•</span>
                          <span className="text-foreground/80">Model performance tuning and validation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Code className="h-5 w-5 text-secondary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">TensorFlow</Badge>
                        <Badge variant="outline">OpenCV</Badge>
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">MNIST Dataset</Badge>
                        <Badge variant="outline">Web Deployment</Badge>
                        <Badge variant="outline">Model Optimization</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Zap className="h-5 w-5 text-accent" />
                      Skills Developed
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h5 className="font-medium text-foreground mb-2">Predictive Modeling</h5>
                        <p className="text-sm text-muted-foreground">Techniques for forecasting and classification</p>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h5 className="font-medium text-foreground mb-2">Image Data Analysis</h5>
                        <p className="text-sm text-muted-foreground">Processing and interpreting visual data</p>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h5 className="font-medium text-foreground mb-2">Dashboarding & Visualization</h5>
                        <p className="text-sm text-muted-foreground">Creating interactive reports and dashboards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Experience & Achievements */}
        <div className="grid md:grid-cols-1 gap-8">
          

          <Card className="gradient-border data-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Innovation & Research</h3>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mb-2">Startup Exhibition</Badge>
                    <p className="text-sm text-muted-foreground">
                      Participated in startup innovation exhibition at ACPCE, demonstrating entrepreneurial 
                      mindset and innovative problem-solving capabilities
                    </p>
                  </div>
                  <div className="mt-3">
                    <Badge variant="outline">R Programming Certified</Badge>
                    <Badge variant="outline" className="ml-2">3D Design with Fusion 360</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Objective */}
        <Card className="gradient-border data-glow mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
            <p className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Seeking opportunities to apply my data science expertise in challenging real-world business scenarios. 
              I'm particularly interested in roles focused on <span className="text-primary font-semibold">data analysis</span>, 
              <span className="text-secondary font-semibold"> business intelligence</span>, and 
              <span className="text-accent font-semibold"> data-driven reporting</span> where I can contribute 
              to data-driven decision making and help organizations unlock valuable insights from their data.
            </p>
            
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;