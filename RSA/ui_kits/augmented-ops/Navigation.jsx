/* global React */
const { useState, useEffect } = React;

function Logo({ size = 30, dark = false }) {
  const bg = dark ? "#fff" : "#1A237E";
  const fg = dark ? "#1A237E" : "#fff";
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" aria-hidden="true">
      <rect x="2" y="2" width="26" height="26" rx="7" fill={bg} />
      <path d="M9 10.5l6 9 6-9" stroke={fg} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "saturate(180%) blur(12px)",
      WebkitBackdropFilter: "saturate(180%) blur(12px)",
      borderBottom: scrolled ? "1px solid var(--ao-slate-200)" : "1px solid transparent",
      transition: "border-color .2s var(--ao-ease-out)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--ao-ink)" }}>
          <Logo />
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>Augmented_Ops</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#mesh" className="nav-link">Das Mesh</a>
          <a href="#how" className="nav-link">Wie es funktioniert</a>
          <a href="#agencies" className="nav-link">Agenturen</a>
          <a href="#contact" className="nav-link">Kontakt</a>
          <a href="#contact" className="btn-primary">Deck anfragen</a>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { Logo, Navigation });
