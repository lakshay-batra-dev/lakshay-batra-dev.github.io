import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a 
              href="mailto:batralakshay16@gmail.com"
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">batralakshay16@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+918901150561"
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold">+91 8901150561</p>
              </div>
            </a>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-cyan"
              size="lg"
              asChild
            >
              <a href="https://github.com/DROP5136" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-cyan"
              size="lg"
              asChild
            >
              <a href="https://www.linkedin.com/in/lakshay-batra-dev/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </Card>

        
      </div>
    </section>
  );
};

export default Contact;
