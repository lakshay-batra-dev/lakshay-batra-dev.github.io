import { useEffect, useRef } from "react";

const SKILL_CATEGORIES = [
  {
    label: "Core Stack",
    description: "What I build with daily",
    skills: [
      { name: "JavaScript (ES6+)", tag: "IntelliFlow" },
      { name: "TypeScript", tag: "IntelliFlow" },
      { name: "React.js", tag: "IntelliFlow" },
      { name: "Node.js", tag: "IntelliFlow" },
      { name: "Express.js", tag: "IntelliFlow" },
      { name: "MongoDB", tag: "IntelliFlow" },
      { name: "FastAPI", tag: "IntelliFlow" },
    ],
  },
  {
    label: "Machine Learning",
    description: "Applied in research & projects",
    skills: [
      { name: "Python", tag: "Keystroke Auth" },
      { name: "Scikit-learn", tag: "Keystroke Auth" },
      { name: "XGBoost", tag: "Keystroke Auth" },
      { name: "SVM", tag: "Keystroke Auth" },
      { name: "NumPy", tag: "Keystroke Auth" },
      { name: "Feature Engineering", tag: "Keystroke Auth" },
    ],
  },
  {
    label: "Systems & Infra",
    description: "Security, auth & API design",
    skills: [
      { name: "JWT Auth", tag: "IntelliFlow" },
      { name: "OTP-based 2FA", tag: "IntelliFlow" },
      { name: "LangGraph", tag: "IntelliFlow" },
      { name: "REST API Design", tag: "IntelliFlow" },
      { name: "MySQL", tag: "Coursework" },
      { name: "SQL", tag: "Coursework" },
    ],
  },
  {
    label: "Languages & Tools",
    description: "Fundamentals & workflow",
    skills: [
      { name: "C++", tag: "DSA / Coursework" },
      { name: "HTML5 / CSS3", tag: "IntelliFlow" },
      { name: "Tailwind CSS", tag: "IntelliFlow" },
      { name: "Git & GitHub", tag: "All projects" },
      { name: "Postman", tag: "IntelliFlow" },
      { name: "VS Code", tag: "Daily" },
    ],
  },
];

const CS_CONCEPTS = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "IntelliFlow":     { bg: "hsla(248,90%,66%,0.08)", text: "hsl(248,90%,72%)", border: "hsla(248,90%,66%,0.2)" },
  "Keystroke Auth":  { bg: "hsla(316,70%,60%,0.08)", text: "hsl(316,70%,70%)", border: "hsla(316,70%,60%,0.2)" },
  "Coursework":      { bg: "hsla(168,70%,40%,0.1)",  text: "hsl(168,70%,55%)", border: "hsla(168,70%,40%,0.25)" },
  "DSA / Coursework":{ bg: "hsla(168,70%,40%,0.1)",  text: "hsl(168,70%,55%)", border: "hsla(168,70%,40%,0.25)" },
  "All projects":    { bg: "hsla(45,90%,55%,0.08)",  text: "hsl(45,90%,60%)",  border: "hsla(45,90%,55%,0.2)"  },
  "Daily":           { bg: "hsla(0,0%,100%,0.05)",   text: "hsl(0,0%,50%)",    border: "hsla(0,0%,100%,0.1)"   },
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="section"
      ref={ref}
      style={{ background: "hsl(0,0%,5%)" }}
    >
      <div className="section-inner">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <p className="eyebrow mb-3">02 / Skills</p>
          <h2 className="section-title">What I work with</h2>
          <div
            style={{
              width: "48px",
              height: "3px",
              borderRadius: "99px",
              background: "var(--gradient-primary)",
              marginTop: "1rem",
            }}
          />
          {/* Legend */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <p style={{ color: "hsl(0,0%,38%)", fontSize: "0.8rem", fontFamily: "'JetBrains Mono', monospace" }}>
              Tags show where each skill was applied →
            </p>
            {[
              { label: "IntelliFlow", key: "IntelliFlow" },
              { label: "Keystroke Auth", key: "Keystroke Auth" },
              { label: "Coursework", key: "Coursework" },
              { label: "All projects", key: "All projects" },
            ].map(({ label, key }) => {
              const c = TAG_COLORS[key];
              return (
                <span
                  key={key}
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: c.text,
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    padding: "0.15rem 0.55rem",
                    borderRadius: "0.375rem",
                  }}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Skill categories grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.label}
              className="reveal surface"
              style={{
                borderRadius: "0.875rem",
                padding: "1.5rem",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Category header */}
              <p
                style={{
                  fontSize: "0.68rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "hsl(0,0%,32%)",
                  marginBottom: "0.25rem",
                }}
              >
                {cat.label}
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "hsl(0,0%,45%)",
                  marginBottom: "1.25rem",
                  lineHeight: 1.4,
                }}
              >
                {cat.description}
              </p>

              {/* Skills list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {cat.skills.map(({ name, tag }) => {
                  const c = TAG_COLORS[tag] ?? TAG_COLORS["Daily"];
                  return (
                    <div
                      key={name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.875rem",
                          color: "hsl(0,0%,78%)",
                          fontWeight: 500,
                        }}
                      >
                        {name}
                      </span>
                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontFamily: "'JetBrains Mono', monospace",
                          color: c.text,
                          background: c.bg,
                          border: `1px solid ${c.border}`,
                          padding: "0.15rem 0.5rem",
                          borderRadius: "0.375rem",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CS fundamentals */}
        <div className="reveal" style={{ transitionDelay: "320ms" }}>
          <div
            style={{
              borderTop: "1px solid hsl(0,0%,11%)",
              paddingTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.68rem",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "hsl(0,0%,32%)",
                marginBottom: "1rem",
              }}
            >
              CS Fundamentals — Studied at TIET
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {CS_CONCEPTS.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
