import { Card } from "@/components/ui/card";
import { Code2, Database, Palette, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "C++", "C"],
    },
    {
      icon: Terminal,
      title: "Web Development",
      skills: ["React", "JavaScript", "CSS", "HTML"],
    },
    {
      icon: Database,
      title: "Database & Backend",
      skills: ["Oracle SQL", "PL/SQL", "Database Design"],
    },
    {
      icon: Palette,
      title: "Design & Creative",
      skills: ["Adobe Photoshop", "Premiere Pro", "Canva", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <category.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    • {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-center">Core Competencies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Operating Systems",
              "Artificial Intelligence",
              "Cyber Security",
              
              
            ].map((competency) => (
              <span
                key={competency}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {competency}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
