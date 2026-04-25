/* global React */

function MetricStrip() {
  const items = [
    { k: "48–96h", v: "Time-to-Deck" },
    { k: "5", v: "Agenten im Mesh" },
    { k: "100%", v: "Human-in-the-loop" },
    { k: "0", v: "Retainer · Equity · Stunden" },
  ];
  return (
    <section style={{ background: "var(--ao-navy-900)", color: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
        {items.map((it, i) => (
          <div key={i}>
            <div className="ao-mono" style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1 }}>{it.k}</div>
            <div style={{ marginTop: 10, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", fontWeight: 600 }}>{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AgentCard({ id, name, role, desc }) {
  return (
    <article className="ao-card" style={{ padding: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 6,
          background: "var(--ao-navy-tint)", color: "var(--ao-navy-700)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--ao-font-mono)", fontWeight: 700, fontSize: 13,
        }}>{id}</div>
        <div>
          <div style={{ fontFamily: "var(--ao-font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", color: "var(--ao-slate-500)" }}>AGENT {id}</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "var(--ao-ink)", letterSpacing: "-0.01em" }}>{name}</div>
        </div>
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ao-navy-700)", marginBottom: 8 }}>{role}</div>
      <p style={{ fontSize: 14, color: "var(--ao-slate-500)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </article>
  );
}

function AgentGrid() {
  const agents = [
    { id: "01", name: "Scout",    role: "Marktforschung",       desc: "Findet Signal im Marktrauschen. TAM, SAM, SOM mit Quellen — nicht aus dem Bauch." },
    { id: "02", name: "Narrator", role: "Narrativ & Wedge",     desc: "Schreibt die Story, keine Floskeln. Wedge, Why-Now, warum euer Team und nicht ein anderes." },
    { id: "03", name: "Quant",    role: "Financials",           desc: "Modelliert 5-Jahres-P&L, Burn, Runway. Zahlen, die eine Due Diligence überstehen." },
    { id: "04", name: "Atelier",  role: "Design & Layout",      desc: "13 Folien im Haus-Stil. Kein Template-Theater, keine Stockfotos." },
    { id: "05", name: "Auditor",  role: "Fact-Check & Legal",   desc: "Prüft jede Zahl, jedes Zitat, jede Rechtsaussage. DSGVO-konform, haftbar, nachweisbar." },
  ];
  return (
    <section id="mesh" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <span className="ao-overline">DAS MESH</span>
          <h2 className="ao-h1" style={{ marginTop: 20, marginBottom: 20 }}>Fünf spezialisierte Agenten. Ein koordinierter Workflow.</h2>
          <p className="ao-lede">Jeder Agent hat eine klare Rolle, eigene Skills, eigene Quellen. Koordiniert über GBrain Memory — damit Scout weiß, was Narrator geschrieben hat.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {agents.map(a => <AgentCard key={a.id} {...a} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MetricStrip, AgentCard, AgentGrid });
