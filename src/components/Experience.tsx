import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Education & Experience
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h4 className="text-xl font-bold mb-2">B.Tech in Engineering</h4>
                <p className="text-primary font-semibold mb-2">Thapar Institute of Engineering & Technology</p>
                <p className="text-sm text-muted-foreground mb-2">2023 - 2027</p>
                <p className="text-sm text-muted-foreground">Patiala, Punjab</p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h4 className="text-xl font-bold mb-2">CBSE Class XII</h4>
                <p className="text-primary font-semibold mb-2">Scholars Rosary Sr. Sec. School</p>
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>2023</span>
                  <span className="font-semibold text-foreground">92%</span>
                </div>
                <p className="text-sm text-muted-foreground">Rohtak, Haryana</p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h4 className="text-xl font-bold mb-2">CBSE Class X</h4>
                <p className="text-primary font-semibold mb-2">Scholars Rosary Sr. Sec. School</p>
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>2021</span>
                  <span className="font-semibold text-foreground">94.6%</span>
                </div>
                <p className="text-sm text-muted-foreground">Rohtak, Haryana</p>
              </Card>
            </div>
          </div>

          {/* Leadership & Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Leadership</h3>
            </div>
            <div className="space-y-4 mb-8">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h4 className="text-xl font-bold mb-2">Team Leader</h4>
                <p className="text-primary font-semibold mb-2">Adobe India Hackathon</p>
                <p className="text-sm text-muted-foreground">
                  Led a team of 3 members to design tech-driven solutions, facilitating collaboration and guiding technical decisions to deliver a functional prototype.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h4 className="text-xl font-bold mb-2">Delegate</h4>
                <p className="text-primary font-semibold mb-2">Model United Nations (MUN)</p>
                <p className="text-sm text-muted-foreground">
                  Represented countries in inter-school MUNs, debating global issues and drafting resolutions while developing public speaking and diplomacy skills.
                </p>
              </Card>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▪</span>
                  <div>
                    <p className="font-semibold">Microsoft Azure Fundamentals (AZ-900)</p>
                    <p className="text-sm text-muted-foreground">Microsoft | June - July 2025</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▪</span>
                  <div>
                    <p className="font-semibold">Full-Stack Web Development Bootcamp</p>
                    <p className="text-sm text-muted-foreground">Udemy | May - July 2025</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▪</span>
                  <div>
                    <p className="font-semibold">Data Analyst Experience Program</p>
                    <p className="text-sm text-muted-foreground">Deloitte Australia | June - July 2025</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
