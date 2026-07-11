import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="navbar"
      style={{ background: scrolled ? "hsla(0,0%,4%,0.92)" : "hsla(0,0%,4%,0.6)" }}
    >
      {/* Logo */}
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer select-none"
        style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.9rem", color: "hsl(0,0%,95%)", fontWeight: 500 }}
      >
        <span style={{ color: "hsl(248,90%,66%)" }}>{"{"}</span>
        &nbsp;LB&nbsp;
        <span style={{ color: "hsl(248,90%,66%)" }}>{"}"}</span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <button key={l} onClick={() => scrollTo(l)} className="nav-link bg-transparent border-0 cursor-pointer">
            {l}
          </button>
        ))}
        <a
          href="/Lakshay_Batra_CV.pdf"
          download="Lakshay_Batra_CV.pdf"
          className="btn-primary"
          style={{ padding: "0.45rem 1.1rem", fontSize: "0.8rem" }}
        >
          Resume ↓
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden cursor-pointer bg-transparent border-0"
        onClick={() => setOpen(!open)}
        style={{ color: "hsl(0,0%,80%)" }}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            background: "hsl(0,0%,5%)",
            borderBottom: "1px solid hsl(0,0%,12%)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            zIndex: 99,
          }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="bg-transparent border-0 cursor-pointer text-left"
              style={{ color: "hsl(0,0%,70%)", fontFamily: "'Space Grotesk',sans-serif", fontSize: "1rem", fontWeight: 500 }}
            >
              {l}
            </button>
          ))}
          <a
            href="/Lakshay_Batra_CV.pdf"
            download="Lakshay_Batra_CV.pdf"
            className="btn-primary"
            style={{ alignSelf: "flex-start", fontSize: "0.85rem" }}
          >
            Download Resume ↓
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
