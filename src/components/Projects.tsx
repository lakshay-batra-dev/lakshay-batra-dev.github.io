import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Facial Emotion Recognition System",
      description: "Real-time facial emotion recognition using Python and OpenCV, trained on 2,000+ images achieving 85% accuracy in classifying emotions from live webcam input.",
      tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      link: "https://fer-demo.vercel.app",
      githubLink: "https://github.com/DROP5136/facial-emotion-recognition",
      metrics: "85% Accuracy | 2,000+ Images",
    },
    {
      title: "Netflix Database Management System",
      description: "Comprehensive 12-table relational database managing movies, subscriptions, and 1,000+ user profiles with automated PL/SQL procedures for backend operations.",
      tech: ["Oracle SQL", "PL/SQL", "Database Design", "ER Modeling"],
      link: "https://netflix-dbms-demo.vercel.app",
      githubLink: "https://github.com/DROP5136/netflix-dbms",
      metrics: "12 Tables | 1,000+ Users | 5 Procedures",
    },
    {
      title: "E-Commerce Website",
      description: "Responsive e-commerce platform with real-time checkout, product filtering, and clean UI/UX supporting 200+ products with seamless user interaction.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
      link: "https://amazon-clone-demo.vercel.app",
      githubLink: "https://github.com/DROP5136/amazon-clone",
      metrics: "6 Core Features | 200+ Products",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm font-semibold text-primary">{project.metrics}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.link || project.githubLink) && (
                <div className="flex flex-wrap gap-2 w-full">
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 min-w-[120px] border-primary/40 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 min-w-[120px] border-primary/40 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
