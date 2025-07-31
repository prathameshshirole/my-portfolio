import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Target, Database, Brain, Search } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      icon: Brain,
      title: "Handwritten Digit Classification",
      subtitle: "Professional Internship Project",
      description: "Developed a high-performance machine learning model achieving 98% classification accuracy on the MNIST dataset with real-time web deployment capabilities.",
      achievements: [
        "98% classification accuracy on MNIST dataset",
        "Real-time web application deployment", 
        "Minimal latency optimization for production use",
        "Comprehensive model validation and testing"
      ],
      technologies: ["TensorFlow", "OpenCV", "Python", "MNIST", "Web Deployment"],
      status: "Completed",
      type: "Professional",
      metrics: {
        accuracy: "98%",
        deployment: "Real-time",
        status: "Production"
      },
      demoLink: "#",
      sourceCodeLink: "#"
    },
    {
      icon: Search,
      title: "E-commerce Search Optimization",
      subtitle: "MSc Dissertation Project",
      description: "Research-focused project implementing Natural Language Processing techniques to enhance e-commerce search algorithms and improve product discovery relevance.",
      achievements: [
        "Advanced NLP implementation for search enhancement",
        "Machine learning-driven product recommendation system",
        "Comprehensive analysis of search algorithm performance",
        "Academic research contributing to e-commerce optimization"
      ],
      technologies: ["Python", "NLP Libraries", "Machine Learning", "Search Algorithms", "Data Analysis"],
      status: "Recently Completed",
      type: "Research",
      metrics: {
        focus: "NLP",
        type: "Dissertation",
        status: "Academic"
      },
      researchPaperLink: "#"
    },
    {
      icon: Database,
      title: "Academic Data Science Projects",
      subtitle: "University Course Projects",
      description: "Comprehensive collection of data science projects covering statistical modeling, financial machine learning, database management, and interactive visualization systems.",
      achievements: [
        "Advanced statistical modeling with experimental data",
        "Machine learning applications in financial sector",
        "SQL-based database processing and optimization",
        "Interactive dashboard development and reporting"
      ],
      technologies: ["R Programming", "SQL", "Statistical Modeling", "Financial ML", "Dashboard Design"],
      status: "Multiple Projects",
      type: "Academic",
      metrics: {
        projects: "5+",
        domains: "Multi-sector",
        status: "Completed"
      },
      projectPortfolioLink: "#"
    }
  ];

  const getIconColors = (index: number) => {
    const colors = [
      { bg: 'bg-primary/20', icon: 'text-primary' },
      { bg: 'bg-secondary/20', icon: 'text-secondary' },
      { bg: 'bg-accent/20', icon: 'text-accent' }
    ];
    return colors[index % colors.length];
  };

  const getStatusBadge = (status: string, type: string) => {
    if (status === "Completed" && type === "Professional") {
      return <Badge className="bg-primary/20 text-primary">Professional Project</Badge>;
    }
    if (status === "Recently Completed" && type === "Research") {
      return <Badge className="bg-secondary/20 text-secondary">MSc Dissertation</Badge>;
    }
    if (type === "Academic") {
      return <Badge className="bg-accent/20 text-accent">Academic Portfolio</Badge>;
    }
    return <Badge variant="outline">{status}</Badge>;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span> & Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Demonstrating practical application of data science skills through real-world projects and academic research
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const colors = getIconColors(index);
            return (
              <Card key={index} className="gradient-border data-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project Icon & Basic Info */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                        <project.icon className={`h-10 w-10 ${colors.icon}`} />
                      </div>
                      <div className="text-center lg:text-left">
                        {getStatusBadge(project.status, project.type)}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex-1">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground mb-3">
                          {project.subtitle}
                        </p>
                        <p className="text-foreground/90 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Target className="h-5 w-5 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2">
                                <span className="text-primary text-sm mt-1">•</span>
                                <span className="text-foreground/80 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies & Metrics */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Project Metrics</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                                <div key={metricIndex} className="bg-muted/30 rounded-lg p-3">
                                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                                  <div className="font-semibold text-sm">{value}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        {project.type === "Professional" && (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              asChild 
                              disabled={!project.demoLink}
                            >
                              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Demo
                              </a>
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              asChild 
                              disabled={!project.sourceCodeLink}
                            >
                              <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Source Code
                              </a>
                            </Button>
                          </>
                        )}
                        {project.type === "Research" && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            asChild 
                            disabled={!project.researchPaperLink}
                          >
                            <a href={project.researchPaperLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Research Paper
                            </a>
                          </Button>
                        )}
                        {project.type === "Academic" && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            asChild 
                            disabled={!project.projectPortfolioLink}
                          >
                            <a href={project.projectPortfolioLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Project Portfolio
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="gradient-border data-glow text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground mb-2">Model Accuracy</div>
              <p className="text-xs text-foreground/70">Achieved in production ML deployment</p>
            </CardContent>
          </Card>

          <Card className="gradient-border data-glow text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">3+</div>
              <div className="text-sm text-muted-foreground mb-2">Major Projects</div>
              <p className="text-xs text-foreground/70">Spanning academic and professional work</p>
            </CardContent>
          </Card>

          <Card className="gradient-border data-glow text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground mb-2">Technologies</div>
              <p className="text-xs text-foreground/70">Core tools and frameworks mastered</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="gradient-border data-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Contribute</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                These projects demonstrate my ability to deliver high-impact data science solutions. 
                I'm excited to bring this expertise to challenging real-world business problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Discuss Opportunities
                </Button>
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;