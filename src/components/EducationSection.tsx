import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Strong academic foundation in data science and technology
          </p>
        </div>

        <div className="space-y-8">
          {/* MSc Data Science */}
          <Card className="gradient-border data-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        MSc in Data Science
                      </h3>
                      <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Recently Completed
                      </Badge>
                    </div>
                    <p className="text-lg text-primary font-semibold mb-2">
                      University of Essex
                    </p>
                    <p className="text-muted-foreground mb-4">
                      2024-2025 • Advanced data science program with focus on practical applications
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Modules:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Financial Data Analysis</Badge>
                          <Badge variant="outline">SQL & Database Processing</Badge>
                          <Badge variant="outline">Experimental Data Modeling</Badge>
                          <Badge variant="outline">Statistical Analysis</Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Dissertation:</h4>
                        <p className="text-foreground/80 italic">
                          "Data-Driven Insights for E-commerce Search Optimization"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BE Information Technology */}
          <Card className="gradient-border data-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      BE in Information Technology
                    </h3>
                    <p className="text-lg text-accent font-semibold mb-2">
                      University of Mumbai
                    </p>
                    <p className="text-muted-foreground mb-4">
                      2019-2023 • Strong foundation in computer science and data technologies
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Machine Learning</Badge>
                          <Badge variant="outline">Data Science</Badge>
                          <Badge variant="outline">Big Data Analytics</Badge>
                          <Badge variant="outline">Software Development</Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-accent" />
                        <span className="text-foreground font-medium">
                          Startup Innovation Exhibition Exhibitor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 transition-all duration-300 hover:scale-[1.02] hover:hover:shadow-xl">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced Degree</h3>
              <p className="text-muted-foreground text-sm">
                MSc Data Science from prestigious UK university with cutting-edge curriculum
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 transition-all duration-300 hover:scale-[1.02] hover:hover:shadow-xl">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Research Focus</h3>
              <p className="text-muted-foreground text-sm">
                Specialized dissertation on NLP and e-commerce optimization algorithms
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 transition-all duration-300 hover:scale-[1.02] hover:hover:shadow-xl">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Recognized for startup innovation and technological advancement initiatives
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;