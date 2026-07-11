import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

const CONTACT_LINKS = [
  {
    Icon: Mail,
    label: "Email",
    value: "batralakshay16@gmail.com",
    href: "mailto:batralakshay16@gmail.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 8901150561",
    href: "tel:+918901150561",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "lakshay-batra-dev",
    href: "https://www.linkedin.com/in/lakshay-batra-dev/",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "DROP5136",
    href: "https://github.com/DROP5136",
  },
];

const Contact = () => {
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
    <section id="contact" className="section" ref={ref}>
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <p className="eyebrow mb-3">05 / Contact</p>
          <h2 className="section-title">Let's connect</h2>
          <div style={{ width: "48px", height: "3px", borderRadius: "99px", background: "var(--gradient-primary)", marginTop: "1rem" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Left — message */}
          <div className="reveal">
            <p style={{ color: "hsl(0,0%,60%)", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1.5rem" }}>
              I'm actively looking for internship and project opportunities. Whether you have a role, an idea, or just want to talk tech — my inbox is always open.
            </p>
            <p style={{ color: "hsl(0,0%,45%)", lineHeight: 1.85, fontSize: "0.9rem", marginBottom: "2rem" }}>
              I typically respond within 24 hours.
            </p>
            <a
              href="mailto:batralakshay16@gmail.com"
              className="btn-primary"
              style={{ display: "inline-flex" }}
            >
              <Mail size={16} />
              Say Hello
            </a>

            <div style={{ marginTop: "2.5rem" }}>
              <a
                href="/Lakshay_Batra_CV.pdf"
                download="Lakshay_Batra_CV.pdf"
                className="btn-ghost"
                style={{ display: "inline-flex" }}
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right — links */}
          <div className="reveal stagger" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", transitionDelay: "100ms" }}>
            {CONTACT_LINKS.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "0.5rem",
                    background: "hsla(248,90%,66%,0.1)",
                    border: "1px solid hsla(248,90%,66%,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} style={{ color: "hsl(248,90%,66%)" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.72rem", color: "hsl(0,0%,40%)", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {label}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "hsl(0,0%,80%)", fontWeight: 500, marginTop: "1px" }}>
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="site-footer"
        style={{ marginTop: "6rem" }}
      >
        <p>
          Designed & built by{" "}
          <span style={{ color: "hsl(248,90%,66%)" }}>Lakshay Batra</span>
          {" "} — {new Date().getFullYear()}
        </p>
        <p style={{ marginTop: "0.35rem", color: "hsl(0,0%,25%)" }}>
          React · TypeScript · Tailwind · Vite
        </p>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #contact .section-inner > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
