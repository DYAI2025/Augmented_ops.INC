/* global React */

function WorkflowStep({ n, label, detail, gate = false, active = false }) {
  return (
    <div style={{
      padding: 28,
      background: gate ? "linear-gradient(180deg, var(--ao-navy-tint), var(--ao-slate-50))" : "#fff",
      borderRight: "1px solid var(--ao-slate-200)",
      position: "relative",
    }}>
      <div style={{ fontFamily: "var(--ao-font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", color: gate ? "var(--ao-navy-700)" : "var(--ao-slate-500)", marginBottom: 14 }}>CHECKPOINT {n}/05</div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "var(--ao-ink)", letterSpacing: "-0.01em", marginBottom: 8 }}>
        {gate && <span style={{ marginRight: 6 }}>⌘</span>}{label}
      </div>
      <div style={{ fontSize: 13, color: "var(--ao-slate-500)", lineHeight: 1.55 }}>{detail}</div>
      {active && (
        <div style={{ position: "absolute", top: 14, right: 14, display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#059669", animation: "ao-pulse 2s infinite" }} />
          <span className="ao-mono" style={{ fontSize: 10, fontWeight: 600, color: "#059669", letterSpacing: "0.1em" }}>LIVE</span>
        </div>
      )}
    </div>
  );
}

function WorkflowFlow() {
  return (
    <section id="how" style={{ padding: "100px 0", background: "var(--ao-slate-50)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <span className="ao-overline">WIE ES FUNKTIONIERT</span>
          <h2 className="ao-h1" style={{ marginTop: 20, marginBottom: 20 }}>Fünf Checkpoints. Ein Deck. Du signierst.</h2>
          <p className="ao-lede">Kein Black-Box-Output. Jede Stufe ist sichtbar, jede Freigabe dokumentiert. Agenten empfehlen, Menschen entscheiden.</p>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)",
          background: "#fff", border: "1px solid var(--ao-slate-200)",
          borderRadius: 16, overflow: "hidden",
        }}>
          <WorkflowStep n="01" label="30-min Call"  detail="Wir klären Ziel, Zielgruppe, Wedge. Du redest, wir hören. Keine Pitches." />
          <WorkflowStep n="02" label="Mesh Launch"  detail="Scout, Quant, Narrator starten parallel. Du siehst das Dashboard, nicht nur das Ergebnis." active />
          <WorkflowStep n="03" label="Human Gate"   detail="Du prüfst Narrativ und Financials. Änderungen per Kommentar — das Mesh arbeitet sie ein." gate />
          <WorkflowStep n="04" label="Atelier"      detail="13-Folien-Wireframe wird zum fertigen Deck. Haus-Stil, eure Markenfarben, dein Logo." />
          <WorkflowStep n="05" label="Freigabe"     detail="Du signierst. Auditor protokolliert. Du erhältst Deck, Quellen, Haftungsbrief." gate />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WorkflowStep, WorkflowFlow });
