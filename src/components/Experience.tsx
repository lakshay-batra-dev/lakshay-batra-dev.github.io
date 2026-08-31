import { useEffect, useRef } from "react";

const Experience = () => {
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
    <section
      id="experience"
      className="section"
      ref={ref}
      style={{ background: "hsl(0,0%,5%)" }}
    >
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <p className="eyebrow mb-3">04 / Background</p>
          <h2 className="section-title">Education & Experience</h2>
          <div style={{ width: "48px", height: "3px", borderRadius: "99px", background: "var(--gradient-primary)", marginTop: "1rem" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Education */}
          <div className="reveal" style={{ alignSelf: "start" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "hsl(0,0%,35%)",
                marginBottom: "1.75rem",
              }}
            >
              Education
            </p>
            <div className="timeline">
              {/* TIET */}
              <div style={{ position: "relative", marginBottom: "2.5rem" }}>
                <div className="timeline-dot" />
                <div style={{ marginBottom: "0.25rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "hsl(0,0%,90%)" }}>
                    B.Tech — Computer Science & Engineering
                  </h3>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "'JetBrains Mono',monospace",
                      color: "hsl(248,90%,66%)",
                      background: "hsla(248,90%,66%,0.08)",
                      border: "1px solid hsla(248,90%,66%,0.2)",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "0.375rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    2023 – 2027
                  </span>
                </div>
                <p style={{ color: "hsl(248,90%,70%)", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.35rem" }}>
                  Thapar Institute of Engineering & Technology
                </p>
                <p style={{ color: "hsl(0,0%,40%)", fontSize: "0.8rem" }}>Patiala, Punjab</p>
              </div>

              {/* Class XII */}
              <div style={{ position: "relative", marginBottom: "2.5rem" }}>
                <div className="timeline-dot" style={{ background: "hsl(316,70%,60%)", boxShadow: "0 0 10px hsla(316,70%,60%,0.5)" }} />
                <div style={{ marginBottom: "0.25rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "hsl(0,0%,90%)" }}>
                    CBSE Class XII
                  </h3>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "'JetBrains Mono',monospace",
                      color: "hsl(316,70%,70%)",
                      background: "hsla(316,70%,60%,0.08)",
                      border: "1px solid hsla(316,70%,60%,0.2)",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "0.375rem",
                    }}
                  >
                    92% — Mar 2023
                  </span>
                </div>
                <p style={{ color: "hsl(316,70%,70%)", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.35rem" }}>
                  Scholars Rosary Sr. Sec. School
                </p>
                <p style={{ color: "hsl(0,0%,40%)", fontSize: "0.8rem" }}>Rohtak, Haryana</p>
              </div>

              {/* Class X */}
              <div style={{ position: "relative" }}>
                <div className="timeline-dot" style={{ background: "hsl(168,70%,45%)", boxShadow: "0 0 10px hsla(168,70%,45%,0.5)" }} />
                <div style={{ marginBottom: "0.25rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "hsl(0,0%,90%)" }}>
                    CBSE Class X
                  </h3>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "'JetBrains Mono',monospace",
                      color: "hsl(168,70%,55%)",
                      background: "hsla(168,70%,45%,0.08)",
                      border: "1px solid hsla(168,70%,45%,0.2)",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "0.375rem",
                    }}
                  >
                    94.6% — Mar 2021
                  </span>
                </div>
                <p style={{ color: "hsl(168,70%,55%)", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.35rem" }}>
                  Scholars Rosary Sr. Sec. School
                </p>
                <p style={{ color: "hsl(0,0%,40%)", fontSize: "0.8rem" }}>Rohtak, Haryana</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {/* EDC */}
            <div className="reveal" style={{ transitionDelay: "100ms" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "hsl(0,0%,35%)",
                  marginBottom: "1.75rem",
                }}
              >
                Leadership
              </p>
              <div
                className="surface"
                style={{ borderRadius: "0.75rem", padding: "1.5rem" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "hsl(0,0%,90%)" }}>Member</h3>
                  <span className="chip" style={{ fontSize: "0.7rem" }}>TIET</span>
                </div>
                <p style={{ color: "hsl(248,90%,70%)", fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.75rem" }}>
                  Entrepreneurship Development Cell (EDC)
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    "Coordinated logistics for E-Summit — 500+ participants",
                    "Facilitated workshops on business modeling & startup pitching",
                  ].map((pt) => (
                    <li key={pt} style={{ color: "hsl(0,0%,50%)", fontSize: "0.85rem", display: "flex", gap: "0.5rem" }}>
                      <span style={{ color: "hsl(248,90%,66%)", flexShrink: 0 }}>—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="reveal" style={{ transitionDelay: "200ms" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "hsl(0,0%,35%)",
                  marginBottom: "1.75rem",
                }}
              >
                Certifications
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { name: "Machine Learning Specialization", issuer: "Stanford Online & DeepLearning.AI", year: "2025" },
                  { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2025" },
                ].map(({ name, issuer, year }) => (
                  <div
                    key={name}
                    className="surface"
                    style={{ borderRadius: "0.75rem", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}
                  >
                    <div>
                      <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "hsl(0,0%,88%)" }}>{name}</p>
                      <p style={{ fontSize: "0.78rem", color: "hsl(0,0%,45%)", marginTop: "2px" }}>{issuer}</p>
                    </div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "'JetBrains Mono',monospace",
                        color: "hsl(248,90%,66%)",
                        flexShrink: 0,
                      }}
                    >
                      {year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #experience .section-inner > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
