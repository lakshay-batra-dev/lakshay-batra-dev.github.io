import { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    number: "01",
    title: "IntelliFlow",
    subtitle: "Workflow Automation Platform",
    description:
      "Architected an agentic workflow platform that converts client requests into structured projects through AI classification, dynamic task breakdown, employee matching, and approval workflows. Built React + TypeScript portals for clients, employees, and managers, a Node.js/Express REST API on MongoDB, and a FastAPI AI microservice using LangGraph and Groq LLMs — with JWT, OTP 2FA, rate limiting, and matching on skills, workload, availability, and department.",
    tech: ["React.js", "Node.js", "MongoDB", "LangGraph", "FastAPI", "TypeScript", "Groq"],
    github: "https://github.com/DROP5136/Intelliflow",
    highlights: ["AI request classification", "LangGraph + Groq LLMs", "OTP 2FA + JWT"],
  },
  {
    number: "02",
    title: "Keystroke Auth",
    subtitle: "Behavioral Biometric Security",
    description:
      "Developed a behavioral biometric authentication system analyzing 31 keystroke-timing features to authenticate users from unique typing patterns. Benchmarked XGBoost, SVM, Random Forest, and ensemble models, achieving 94% accuracy across 400 typing samples per user with feature engineering, standardization, independent train/test splits, and threshold optimization.",
    tech: ["Python", "Scikit-learn", "XGBoost", "SVM", "Random Forest"],
    github: "https://github.com/DROP5136/keystroke-authentication-system",
    highlights: ["94% classification accuracy", "31 timing features", "400 samples/user"],
  },
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <p className="eyebrow mb-3">03 / Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <div style={{ width: "48px", height: "3px", borderRadius: "99px", background: "var(--gradient-primary)", marginTop: "1rem" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="reveal surface"
              style={{
                borderRadius: "1rem",
                padding: "2.5rem",
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "2rem",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Number */}
              <div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "hsl(0,0%,13%)",
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  {p.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                  <div>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "hsl(0,0%,95%)", letterSpacing: "-0.02em" }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: "0.8rem", color: "hsl(248,90%,66%)", fontFamily: "'JetBrains Mono',monospace", marginTop: "2px" }}>
                      {p.subtitle}
                    </p>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.8rem",
                      color: "hsl(0,0%,50%)",
                      border: "1px solid hsl(0,0%,16%)",
                      padding: "0.4rem 0.9rem",
                      borderRadius: "0.5rem",
                      textDecoration: "none",
                      transition: "color 0.2s, border-color 0.2s, background 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      const t = e.currentTarget;
                      t.style.color = "hsl(0,0%,90%)";
                      t.style.borderColor = "hsla(248,90%,66%,0.4)";
                      t.style.background = "hsla(248,90%,66%,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      const t = e.currentTarget;
                      t.style.color = "hsl(0,0%,50%)";
                      t.style.borderColor = "hsl(0,0%,16%)";
                      t.style.background = "transparent";
                    }}
                  >
                    <Github size={14} />
                    View Code
                  </a>
                </div>

                <p style={{ color: "hsl(0,0%,52%)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                  {p.description}
                </p>

                {/* Highlights */}
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "'JetBrains Mono',monospace",
                        color: "hsl(316,70%,70%)",
                        background: "hsla(316,70%,60%,0.08)",
                        border: "1px solid hsla(316,70%,60%,0.2)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "0.375rem",
                      }}
                    >
                      ✦ {h}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {p.tech.map((t) => (
                    <span key={t} className="chip" style={{ fontSize: "0.72rem" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #projects .surface > div:first-child { display: none; }
          #projects .surface { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
