import { useEffect, useRef } from "react";

const STATS = [
  { value: "94%", label: "ML model accuracy" },
  { value: "400", label: "Typing samples per user" },
  { value: "500+", label: "Event participants reached" },
  { value: "2027", label: "Expected graduation" },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={ref}>
      <div className="section-inner">
        {/* Eyebrow + title */}
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <p className="eyebrow mb-3">01 / About</p>
          <h2 className="section-title">Who I am</h2>
          <div style={{ width: "48px", height: "3px", borderRadius: "99px", background: "var(--gradient-primary)", marginTop: "1rem" }} />
        </div>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Left — bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ color: "hsl(0,0%,65%)", lineHeight: 1.85, fontSize: "1rem" }}>
              I'm a Computer Science student at{" "}
              <span style={{ color: "hsl(0,0%,90%)", fontWeight: 600 }}>Thapar Institute of Engineering & Technology</span>,
              graduating in 2027. My work lives at the intersection of robust backend architecture and applied machine learning.
            </p>
            <p style={{ color: "hsl(0,0%,65%)", lineHeight: 1.85, fontSize: "1rem" }}>
              I've built an agentic workflow platform with{" "}
              <span style={{ color: "hsl(248,90%,75%)" }}>React, Node.js, FastAPI, and LangGraph</span> — including
              JWT auth, OTP-based 2FA, and LLM-driven request classification — and ML pipelines in Python
              that achieved{" "}
              <span style={{ color: "hsl(248,90%,75%)" }}>94% biometric classification accuracy</span>.
            </p>
            <p style={{ color: "hsl(0,0%,65%)", lineHeight: 1.85, fontSize: "1rem" }}>
              Outside of shipping code, I'm a core member of the{" "}
              <span style={{ color: "hsl(0,0%,90%)", fontWeight: 600 }}>Entrepreneurship Development Cell @ TIET</span>,
              helping organise E-Summit and mentor peers in startup culture.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              {["Full-Stack", "Machine Learning", "DSA", "System Design", "REST APIs"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="surface"
                style={{ padding: "1.5rem", borderRadius: "0.75rem" }}
              >
                <p
                  className="text-gradient"
                  style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}
                >
                  {value}
                </p>
                <p style={{ color: "hsl(0,0%,45%)", fontSize: "0.8rem", marginTop: "0.5rem", lineHeight: 1.4 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stack on small screens */}
        <style>{`
          @media (max-width: 700px) {
            #about .reveal > div:nth-child(2) {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;
