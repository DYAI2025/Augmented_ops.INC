/* global React */
const { useState, useEffect } = React;

function StatusDot({ color = "#059669" }) {
  return (
    <span style={{
      display: "inline-block", width: 8, height: 8, borderRadius: "50%",
      background: color, boxShadow: `0 0 0 3px ${color}33`,
      animation: "ao-pulse 2s infinite",
    }} />
  );
}

function AgentMeshPanel() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 2000);
    return () => clearInterval(id);
  }, []);
  const agents = [
    { id: "01", name: "SCOUT",    role: "Marktforschung",          state: "done"    },
    { id: "02", name: "NARRATOR", role: "Narrativ & Wedge",        state: "running" },
    { id: "03", name: "QUANT",    role: "Financials · 5y P&L",     state: "running" },
    { id: "04", name: "ATELIER",  role: "Design & Layout",         state: "queued"  },
    { id: "05", name: "AUDITOR",  role: "Fact-Check & Legal",      state: "queued"  },
  ];
  const stateMeta = {
    done:    { label: "done",    color: "#059669", bg: "#ECFDF5" },
    running: { label: "running", color: "#1A237E", bg: "#EEF0FB" },
    queued:  { label: "queued",  color: "#64748B", bg: "#F8FAFC" },
  };
  return (
    <div style={{
      background: "#fff", border: "1px solid var(--ao-slate-200)",
      borderRadius: 16, overflow: "hidden", boxShadow: "var(--ao-shadow-lg)",
      position: "relative",
    }}>
      <div style={{ height: 3, background: "linear-gradient(90deg, var(--ao-navy-700), var(--ao-navy-500))" }} />
      <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--ao-slate-100)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <StatusDot />
          <span className="ao-micro" style={{ color: "var(--ao-ink)" }}>AGENT MESH · LIVE</span>
        </div>
        <span className="ao-mono" style={{ fontSize: 11, color: "var(--ao-slate-500)" }}>T+{(18 + tick).toString().padStart(2, "0")}h</span>
      </div>
      {agents.map(a => {
        const m = stateMeta[a.state];
        return (
          <div key={a.id} style={{
            padding: "16px 24px", display: "grid",
            gridTemplateColumns: "auto 1fr auto", gap: 14, alignItems: "center",
            borderBottom: "1px solid var(--ao-slate-100)",
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 6,
              background: "var(--ao-navy-tint)", color: "var(--ao-navy-700)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--ao-font-mono)", fontWeight: 700, fontSize: 11,
            }}>{a.id}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "var(--ao-ink)" }}>AGENT {a.id} · {a.name}</div>
              <div style={{ fontSize: 13, color: "var(--ao-slate-500)", marginTop: 2 }}>{a.role}</div>
            </div>
            <span style={{
              fontFamily: "var(--ao-font-mono)", fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
              color: m.color, background: m.bg, padding: "4px 10px", borderRadius: 9999,
              border: `1px solid ${m.color}33`,
            }}>{m.label}</span>
          </div>
        );
      })}
      <div style={{
        padding: "14px 24px",
        background: "linear-gradient(180deg, var(--ao-navy-tint), var(--ao-slate-50))",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <span style={{ fontSize: 16 }}>⌘</span>
        <span className="ao-mono" style={{ fontSize: 12, color: "var(--ao-navy-700)", fontWeight: 600 }}>
          HUMAN GATE · awaiting CEO signature
        </span>
      </div>
    </div>
  );
}

function HeroAgentMesh() {
  return (
    <section style={{ paddingTop: 160, paddingBottom: 100, background: "var(--ao-bg-hero)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <span className="ao-overline">AUTONOME KI-AGENTUR · BERLIN</span>
          <h1 className="ao-display" style={{ marginTop: 20, marginBottom: 24 }}>
            Fünf Agenten.<br/>Ein Deck.<br/>
            <span style={{ color: "var(--ao-navy-700)" }}>Kein Consultant-Taxameter.</span>
          </h1>
          <p className="ao-lede" style={{ marginBottom: 32 }}>
            VSA ist eine autonome KI-Agentur. Ein Mesh spezialisierter Agenten übernimmt
            Recherche, Narrativ, Financials und Design. Du signierst, das Mesh liefert —
            in 48–96 Stunden.
          </p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary">Deck anfragen
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 6, transition: "transform .15s" }} className="arrow"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#how" className="btn-ghost">Wie es funktioniert</a>
          </div>
          <div style={{ marginTop: 32, display: "flex", gap: 24, color: "var(--ao-slate-500)", fontSize: 13 }}>
            <span>DSGVO · EU-Hosting</span><span>·</span>
            <span>Art. 22 konform</span><span>·</span>
            <span>Pauschalpreis pro Projekt</span>
          </div>
        </div>
        <AgentMeshPanel />
      </div>
    </section>
  );
}

Object.assign(window, { HeroAgentMesh, AgentMeshPanel, StatusDot });
