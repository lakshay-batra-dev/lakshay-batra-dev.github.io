import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "ML Engineer",
  "Backend Architect",
  "Open Source Enthusiast",
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const scrollDown = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero-section">
      <div className="section-inner text-center" style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <p className="hero-role eyebrow mb-4">
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          className="hero-name text-gradient"
          style={{ fontSize: "clamp(3.2rem, 10vw, 7rem)", marginBottom: "1.25rem" }}
        >
          Lakshay Batra
        </h1>

        {/* Typewriter role */}
        <div
          className="hero-role cursor"
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
            fontWeight: 500,
            color: "hsl(0,0%,65%)",
            marginBottom: "1.75rem",
            height: "2.4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {displayed}
        </div>

        {/* Bio */}
        <p
          className="hero-bio"
          style={{
            maxWidth: "540px",
            margin: "0 auto 2.5rem",
            color: "hsl(0,0%,45%)",
            lineHeight: 1.75,
            fontSize: "1rem",
          }}
        >
          B.Tech CSE @ TIET Patiala. Building enterprise-grade systems,
          ML-powered tools, and clean UIs that actually work.
        </p>

        {/* CTAs */}
        <div
          className="hero-cta"
          style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            See My Work
          </button>
          <a href="/Lakshay_Batra_CV.pdf" download="Lakshay_Batra_CV.pdf" className="btn-ghost">
            Download CV
          </a>
        </div>

        {/* Socials */}
        <div
          className="hero-socials"
          style={{ display: "flex", gap: "1.25rem", justifyContent: "center", marginBottom: "4rem" }}
        >
          {[
            { href: "https://github.com/DROP5136", Icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/lakshay-batra-dev/", Icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:batralakshay16@gmail.com", Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid hsl(0,0%,15%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "hsl(0,0%,50%)",
                transition: "color 0.2s, border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.color = "hsl(248,90%,75%)";
                t.style.borderColor = "hsla(248,90%,66%,0.5)";
                t.style.background = "hsla(248,90%,66%,0.08)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.color = "hsl(0,0%,50%)";
                t.style.borderColor = "hsl(0,0%,15%)";
                t.style.background = "transparent";
              }}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollDown}
          className="bg-transparent border-0 cursor-pointer"
          style={{
            color: "hsl(0,0%,30%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            margin: "0 auto",
            fontSize: "0.7rem",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.1em",
            animation: "fadeIn 1s 1s both",
          }}
        >
          scroll
          <ArrowDown size={14} style={{ animation: "fadeUp 1s 0.5s infinite alternate" }} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
