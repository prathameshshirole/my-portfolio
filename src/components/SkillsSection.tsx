import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Database, Code, BarChart3, Brain, Globe, TrendingUp } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Data Analysis & Visualization",
      color: "primary",
      skills: [
        { name: "SQL", level: 95, certified: true },
        { name: "Tableau", level: 90, certified: false },
        { name: "Power BI", level: 75, certified: false },
        { name: "Excel", level: 90, certified: false },
        { name: "Google Analytics", level: 80, certified: false }
      ]
    },
    {
      icon: Code,
      title: "Programming & ML",
      color: "secondary",
      skills: [
        { name: "Python", level: 95, certified: false },
        { name: "R Programming", level: 80, certified: true },
        { name: "TensorFlow", level: 85, certified: false },
        { name: "OpenCV", level: 80, certified: false },
        { name: "Machine Learning", level: 90, certified: false }
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      color: "accent",
      skills: [
        { name: "Dashboard Design", level: 85, certified: false },
        { name: "KPI Development", level: 80, certified: false },
        { name: "Process Optimization", level: 75, certified: false },
        { name: "Stakeholder Communication", level: 90, certified: false },
        { name: "Strategic Analysis", level: 80, certified: false }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return { bg: 'bg-primary/20', text: 'text-primary', icon: 'text-primary' };
      case 'secondary':
        return { bg: 'bg-secondary/20', text: 'text-secondary', icon: 'text-secondary' };
      case 'accent':
        return { bg: 'bg-accent/20', text: 'text-accent', icon: 'text-accent' };
      default:
        return { bg: 'bg-primary/20', text: 'text-primary', icon: 'text-primary' };
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="gradient-text">Skills</span> & Competencies
          </h2>
          <p className="text-xl text-muted-foreground">
            Technical expertise with practical application experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <Card key={categoryIndex} className="gradient-border data-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <category.icon className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{skill.name}</span>
                            {skill.certified && (
                              <Badge variant="outline" className="text-xs">
                                Certified
                              </Badge>
                            )}
                          </div>
                          <span className={`text-sm font-medium ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills & Tools */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Additional <span className="gradient-text">Technologies</span> & Tools
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Development Tools */}
            <Card className="gradient-border data-glow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-3">Development</h4>
                <div className="space-y-2">
                  <Badge variant="outline">Jupyter Notebooks</Badge>
                  <Badge variant="outline">Git/GitHub</Badge>
                  <Badge variant="outline">VS Code</Badge>
                  <Badge variant="outline">Google Colab</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Data Processing */}
            <Card className="gradient-border data-glow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-semibold mb-3">Data Processing</h4>
                <div className="space-y-2">
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">NumPy</Badge>
                  <Badge variant="outline">Scipy</Badge>
                  <Badge variant="outline">Scikit-learn</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Visualization */}
            <Card className="gradient-border data-glow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-3">Visualization</h4>
                <div className="space-y-2">
                  <Badge variant="outline">Matplotlib</Badge>
                  <Badge variant="outline">Seaborn</Badge>
                  <Badge variant="outline">Plotly</Badge>
                  <Badge variant="outline">D3.js</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Cloud & Deployment */}
            <Card className="gradient-border data-glow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-3">Deployment</h4>
                <div className="space-y-2">
                  <Badge variant="outline">Flask</Badge>
                  <Badge variant="outline">Streamlit</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">AWS Basics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
            <p className="text-muted-foreground">
              98% accuracy achieved in production ML models with advanced optimization techniques
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
            <p className="text-muted-foreground">
              Creating compelling visual narratives that translate complex data into actionable insights
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Business Intelligence</h3>
            <p className="text-muted-foreground">
              Bridging the gap between technical analysis and strategic business decision-making
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;