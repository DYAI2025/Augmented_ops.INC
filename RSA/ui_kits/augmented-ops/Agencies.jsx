/* global React */

function AgencyCard({ code, name, focus, status, statusColor }) {
  return (
    <article className="ao-card" style={{ padding: 28, display: "flex", flexDirection: "column", minHeight: 220 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{ fontFamily: "var(--ao-font-mono)", fontWeight: 800, fontSize: 20, letterSpacing: "0.08em", color: "var(--ao-navy-700)" }}>{code}</div>
        <span className="ao-mono" style={{
          fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
          color: statusColor, padding: "4px 10px", borderRadius: 9999, border: `1px solid ${statusColor}33`,
          background: `${statusColor}0D`,
        }}>{status}</span>
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "var(--ao-ink)", letterSpacing: "-0.01em", marginBottom: 8 }}>{name}</div>
      <div style={{ fontSize: 14, color: "var(--ao-slate-500)", lineHeight: 1.55, flex: 1 }}>{focus}</div>
      <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 6, color: "var(--ao-navy-700)", fontSize: 13, fontWeight: 600 }}>
        Investor Deck
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </div>
    </article>
  );
}

function AgencyGrid() {
  return (
    <section id="agencies" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <span className="ao-overline">DIE FAMILIE</span>
          <h2 className="ao-h1" style={{ marginTop: 20, marginBottom: 20 }}>Vier Agenturen. Ein Mesh. Eine Unterschrift.</h2>
          <p className="ao-lede">Augmented_Ops ist die Dachmarke. Jede Sub-Agentur nutzt dasselbe Mesh — spezialisiert auf eine Disziplin.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          <AgencyCard code="VSA" name="Virtual Service Agency"     focus="Investor-Decks, AI-Outreach, Lead-Qualifizierung. Primary-Site, go-to."    status="live"    statusColor="#059669" />
          <AgencyCard code="CSA" name="Customer Support Agency"    focus="24/7 Ticket-Resolution. 5.000 Tickets/Monat, 30s Response, 83% automatisiert." status="live"    statusColor="#059669" />
          <AgencyCard code="RSA" name="Recruitment Service Agency" focus="Resume-Screening, Candidate-Matching, AI-Interviews. 100 Kandidaten/Monat."   status="live"    statusColor="#059669" />
          <AgencyCard code="DSA" name="Direct Sales Agency"        focus="B2B-Sales, Enterprise-Deal-Closing. Zukünftig — Launch 2026."                 status="planned" statusColor="#D97706" />
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section id="contact" style={{ padding: "80px 32px", background: "var(--ao-slate-50)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          background: "var(--ao-bg-cta-band)", color: "#fff",
          borderRadius: 16, padding: "56px 64px",
          boxShadow: "var(--ao-shadow-navy)",
          display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center",
        }}>
          <div>
            <h2 className="ao-h1" style={{ color: "#fff", marginBottom: 16 }}>Dein Deck entsteht während wir sprechen.</h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.75)", lineHeight: 1.6, margin: 0, maxWidth: "48ch" }}>
              30-min Call. 48–96h später hältst du ein fertig signiertes Deck. Kein Retainer, keine Equity, Pauschalpreis pro Projekt.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="#" style={{
              background: "#fff", color: "var(--ao-navy-700)",
              padding: "14px 26px", borderRadius: 9999, fontWeight: 600, fontSize: 15,
              textDecoration: "none", textAlign: "center",
              boxShadow: "0 10px 28px -8px rgba(0,0,0,.3)",
            }}>Deck anfragen →</a>
            <a href="#" style={{
              color: "#fff", padding: "14px 26px",
              border: "1px solid rgba(255,255,255,.25)", borderRadius: 9999,
              fontWeight: 600, fontSize: 15, textDecoration: "none", textAlign: "center",
            }}>30-min Call buchen</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--ao-ink)", color: "rgba(255,255,255,.7)", padding: "64px 32px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <Logo dark />
            <span style={{ fontWeight: 800, fontSize: 18, color: "#fff", letterSpacing: "-0.02em" }}>Augmented_Ops</span>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.7 }}>
            Fused Firmament · DYAI2025<br/>
            Benjamin Poersch<br/>
            Grazer Damm 207, 12157 Berlin<br/>
            contact@dyai.cloud · +49 170 706 12 39
          </div>
        </div>
        <FooterCol title="Agenturen" links={["VSA", "CSA", "RSA", "DSA (2026)"]} />
        <FooterCol title="Brand"     links={["Das Mesh", "Wie es funktioniert", "Investoren", "Kontakt"]} />
        <FooterCol title="Legal"     links={["Impressum", "Datenschutz", "AGB", "TOMs · DSGVO"]} />
      </div>
      <div style={{ maxWidth: 1200, margin: "48px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.1)", display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(255,255,255,.4)" }}>
        <span>© 2026 Fused Firmament · DYAI2025. Built by the mesh. Approved by the human.</span>
        <span className="ao-mono">DSGVO · Art. 22 · EU-Hosting</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="ao-micro" style={{ color: "rgba(255,255,255,.4)", marginBottom: 14 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((l, i) => <a key={i} href="#" style={{ color: "rgba(255,255,255,.75)", fontSize: 14, textDecoration: "none" }}>{l}</a>)}
      </div>
    </div>
  );
}

Object.assign(window, { AgencyCard, AgencyGrid, CTABand, Footer, FooterCol });
