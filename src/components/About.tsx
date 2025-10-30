import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in-left">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate B.Tech student at Thapar Institute of Engineering & Technology with a strong foundation in full-stack development and artificial intelligence. I combine academic excellence with practical project experience.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My expertise spans across Python, C++, React, and database management, with a keen interest in building innovative solutions that solve real-world problems. I thrive on learning new technologies and applying them creatively.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm passionate about digital creativity, having honed my skills in Adobe Photoshop, Premiere Pro, and Figma. I believe in the intersection of technology and design to create impactful user experiences.
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 text-primary">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border/50">
                <span className="text-muted-foreground">Location</span>
                <span className="font-semibold">Patiala, India</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-border/50">
                <span className="text-muted-foreground">Education</span>
                <span className="font-semibold">B.Tech @ Thapar</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Graduation</span>
                <span className="font-semibold">2027</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
