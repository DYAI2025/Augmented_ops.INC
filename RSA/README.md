# Augmented_Ops — Design System

**Operator:** Benjamin Poersch · Fused Firmament · DYAI2025
**HQ:** Grazer Damm 207, 12157 Berlin · Germany
**Contact:** contact@dyai.cloud · +49 170 706 12 39
**Tagline:** *"Built by the mesh. Approved by the human."*

---

## 1 · What Augmented_Ops is

Augmented_Ops is a **holding company** for a family of autonomous-AI service agencies. Each sub-agency is staffed by specialised AI agent meshes rather than humans — with a mandatory **human-in-the-loop approval gate (DSGVO Art. 22)** at every checkpoint. The parent brand acts as Matador ("dach-firma"), coordinating strategy, shared infrastructure (GBrain memory, Skills Layer, AI stack), investor relations, and cross-sell between sub-agencies.

### The four agencies
| Code | Name | Focus | Status |
|---|---|---|---|
| **VSA** | Virtual Service Agency | Investor-deck production · customer acquisition · AI outreach / lead qualification | Live — *primary reference site* |
| **CSA** | Customer Support Agency | 24/7 AI ticket resolution · chatbot · email auto-response · troubleshooting | Live |
| **RSA** | Recruitment Service Agency | AI resume screening · candidate matching · automated interview conduct | Live |
| **DSA** | Direct Sales Agency | Automated B2B sales · enterprise deal closing | Launch 2026 |

Shared across all agencies: **GBrain memory**, **Skills Layer**, unified agentic stack, one investor relations funnel, one employer brand, 10–15% management commission flowing up to the holding.

---

## 2 · Sources used for this design system

**Codebases (local mounted folders, read-only):**
- `VS-Agentur/index.html` (903 lines) — VSA production site, **primary visual reference** → copied to `reference/VSA-index.html`
- `CSA/csa.index.html` — CSA site → copied to `reference/CSA-index.html`
- `RSA/rsa.index.html` — empty stub (4 bytes, "test") — **no design context available**

**GitHub repo:** `DYAI2025/Augmented_ops.INC` (imported selectively)
- `src/App.tsx` → black + neon cyberpunk "ops" variant (secondary palette)
- `src/index.css` → neon tokens
- Build is Vite + React + Tailwind + Motion + Lucide

**Deployed URLs (reference only — not used to build from):**
- https://vsa-production.up.railway.app (VSA)
- https://augmentedops-production.up.railway.app (Holding + CSA + RSA)
- Investor PDFs at `/pdfs/INVESTORENDECK-{VSA,CSA,RSA}.pdf`

**Brand imagery (generated, copied to `assets/`):**
- `augmentedOps.png` — key visual: holographic blue human figure on digital stage surrounded by translucent team. "Cosmic blue on black, data-matrix backdrop."
- `brand-grok-cosmic.png`, `brand-grok-social.png` — Grok-generated cosmic-themed variants

---

## 3 · Brand positioning

Augmented_Ops is **not** a vibe-agency, not a consultancy, not SaaS. It positions itself at the intersection of three things simultaneously:

1. **Autonomous AI agents doing real labour** (not copilots, not chatbots)
2. **Mandatory human approval at every output gate** (DSGVO Art. 22 as a product principle, not a compliance footnote)
3. **Only real, captable-verifiable companies served** — no fantasy startups

The brand voice sells *trust over novelty*. AI is the mechanism; human signature is the product.

---

## 4 · CONTENT FUNDAMENTALS — voice, tone, copy rules

### 4.1 Language
- **Primary: German (de-DE)**. English fallback for international funnel (`/en/` hreflang).
- German copy is **du-form**, not Sie. ("Dein Deck entsteht während wir sprechen." "Du signierst …" "Freigegeben von dir.")
- Code-switching is normal and expected: English technical terms stay English *inside* German sentences. Examples from live copy:
  > "Ein Mesh spezialisierter Agenten übernimmt **Recherche, Narrativ, Financials** und Design."
  > "…ein dreizehn-**Folien-Wireframe** mit Narrativ, **Wedge** und **Why-Now**."
  > "Human-in-the-loop bei jeder **Freigabe**."

### 4.2 Tone
- **Sachlich, technisch präzise, trocken-lakonisch.** No exclamation marks. No hype adjectives. No "revolutionary", "cutting-edge".
- **Confident, never apologetic** — but states limits plainly ("Wir arbeiten ausschließlich mit echten, gesellschaftsrechtlich existierenden Firmen.")
- **Short sentences. Strong verbs.** Aphoristic endings: "Agenten empfehlen, Menschen entscheiden." · "Built by the mesh. Approved by the human."
- **Anti-consultant register** — directly mocks the alternative: "Kein Retainer. Keine Equity. Pauschalpreis pro Projekt." · "Retainer sind ein Finanzierungsmodell für Consultant-Stunden, die wir nicht verkaufen."

### 4.3 Casing
- **Headlines:** sentence case, not Title Case ("Fünf Agenten. Ein Deck. Kein Consultant-Taxameter.")
- **Eyebrows & micro-labels:** ALL-CAPS with 0.12em letter-spacing ("AUTONOME KI-AGENTUR · BERLIN", "DAS MESH", "PRINZIP 01")
- **Buttons:** Sentence case on primary site ("Deck anfragen", "Wie es funktioniert"). UPPERCASE on neon-ops variant ("REQUEST A DEMO", "TRANSMIT DATA") with 0.2–0.3em tracking.
- **Agent IDs & chips:** mono-font, letter-spaced, uppercase ("AGENT 01 · SCOUT")

### 4.4 Copy patterns — specifics to copy
- **Typographic bullet points:** `·` mid-dot as separator, not em-dash or slash. ("Fused Firmament · DYAI2025 · Berlin")
- **Precise time promises:** "48–96h", "30-min Call", "T+18h". Numbers are always numerals, never spelled out.
- **Structured micro-tables over prose** — the VSA engagement timeline, the Agent Mesh live panel, the flow diagram — all use grid-structured data instead of paragraphs.
- **Pair the technical with the human:** every agent has a codename *and* a role ("Scout · Marktforschung", "Atelier · Design & Layout", "Auditor · Fact-Check & Legal"). Never just titles.
- **Self-referential transparency:** copy frequently admits what the system is doing ("Checkpoint 02 / 05", "paused · awaiting CEO signature"). The system narrating itself is the product demo.

### 4.5 Emoji & symbols
- **No emoji in UI copy.** The internal system-spec uses `✅` checkboxes, but the live site does **not**. Emoji are absent from VSA, CSA, and App.tsx.
- **Unicode glyphs used as micro-icons:** `⌘` (human gate / command key), `·` (separator), `→` (link arrow). Used sparingly.
- **Status bullets:** small coloured dots (pulsing on live status) — not emoji.

### 4.6 Legal / compliance copy
- Always explicit about DSGVO: "DSGVO · EU-Hosting", "Art. 22 konform", "TOMs dokumentiert".
- Founder named by full name every time (**Benjamin Poersch**), full address reproduced (Grazer Damm 207, 12157 Berlin), phone with country code.
- "Verantwortliche Stelle" phrasing is the German GDPR formulation — use it verbatim.

---

## 5 · VISUAL FOUNDATIONS

### 5.1 Colour
**Primary system — trust navy (VSA/CSA live sites):**
- `--ao-navy-700: #1A237E` — signature colour; logos, H-accents, primary CTA, all brand moments.
- `--ao-navy-900: #0B1437` — darkest (metric strip background, CTA-band gradient start).
- `--ao-navy-600: #3949AB`, `--ao-navy-500: #5C6BC0` — hover/support.
- `--ao-navy-tint: #EEF0FB` — eyebrow chip background (always paired with navy-700 text).
- **Ink:** `#0F172A`. **Slate scale:** 50 / 100 / 200 / 400 / 500 / 700 (Tailwind slate — used verbatim).
- **Semantics:** success `#059669`, warn `#D97706`. Danger `#DC2626` rarely — Augmented_Ops prefers "on hold" / "queued" to "error" in its vocabulary.

**Secondary system — neon "ops" (Augmented_Ops holding site, App.tsx):**
- Black `#000` background, `#0D0D0D` card.
- `--ao-neon-blue: #00F0FF` (systems accent), `--ao-neon-green: #39FF14` (agent-active).
- Applied **only** for internal dashboards / ops UIs / investor-pitch hero moments. Never mixed with navy in the same frame.

### 5.2 Typography
- **UI/body:** Inter (400, 500, 600, 700, 800). Letter-spacing −0.02em for headlines, tight.
- **Mono/data:** JetBrains Mono (400, 500, 700). Used for: timestamps, agent IDs, metric values on dark backgrounds, micro-labels, chips.
- **No serif.** The brand is deliberately sans-only. (*Reference: Bazodiac sibling brand uses Cormorant Garamond; Augmented_Ops rejects this and commits to Inter.*)
- H1 clamps 2.25rem → 3.75rem (hero) or 2.5rem → 4.5rem (display). H2 clamps 1.75 → 2.75rem.
- Lede paragraph: 1.125rem, line-height 1.65, max 64ch.

### 5.3 Spacing & rhythm
- 8px base grid. Section padding: `100px` desktop, `72px` mobile.
- Container max: `1200px`, 32px side padding (20px mobile).
- Generous white space between sections on the light theme; dense metric-strip breaks between sections.

### 5.4 Backgrounds
- **Hero:** pale-white base with two soft navy-tinted radial gradients — one top-right (80% 20%), one top-left (15% 0%) at ~8% opacity. Subtle, never loud.
- **Section alternation:** white → `--ao-slate-50` → white. Only two background colours per page.
- **CTA band:** 135° gradient navy-900 → navy-700, always wrapped in a `border-radius: 16px` container with navy shadow — **not full-bleed**.
- **Metric strip:** solid `navy-900`, white text, mono values — thin horizontal dark band between light sections.
- **No** hand-drawn illustrations, **no** photography backgrounds, **no** repeating patterns, **no** grain/noise textures on the primary system.
- **Brand key art** (the Grok holographic-human image) appears only as a pitch/hero element in decks — not on the site.

### 5.5 Animation & motion
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out) is the house curve for reveals. `cubic-bezier(0.4, 0, 0.2, 1)` for interactions.
- **Durations:** 150ms (hover), 200ms (base), 300ms (transitions), 600ms (page reveals).
- **Reveal pattern** (App.tsx): opacity + y-translate + blur filter, staggered 0.15s, delay-children 0.2s. H1 adds a 2° skewY that resolves to 0.
- **Live-status pulse:** 2s infinite opacity 1 → 0.5 → 1, on green success dots.
- **Hover on primary CTA:** `translateY(-1px)` + deeper shadow. Never scale.
- **Agent cards:** `translateY(-2px)` + `border-color: navy-600` + `box-shadow: md` on hover.
- **SVG arrow micro-interaction:** `translateX(3px)` on parent hover (the arrow "leans in").
- **Respect `prefers-reduced-motion`**: all animations cut to 0.001ms.

### 5.6 Hover / press / focus
- **Primary button hover:** darker navy (`navy-800`), `translateY(-1px)`, shadow deepens.
- **Ghost button hover:** border darkens to `navy-600`, text to `navy-800`.
- **Link hover:** text colour → `navy-700`, no underline change.
- **Press:** no explicit press state on primary — relies on browser default. On neon variant, the neon glow intensifies.
- **Focus ring:** 3px `rgba(57,73,171,.25)` outside the element. Never remove outline.

### 5.7 Borders
- Default: 1px `--ao-slate-200 (#E2E8F0)`.
- On hover of interactive surfaces: advance to `navy-600`.
- Gate/highlight containers (workflow "human gate" step): linear-gradient 180° `navy-tint → slate-50`.
- **No dashed borders. No double borders. No borders wider than 1px** except the 3px gradient top-bar on the Agent Mesh panel (`linear-gradient(90deg, navy-700, navy-500)`).

### 5.8 Shadows & elevation
- `sm: 0 1px 2px rgba(15,23,42,.06)` — resting flat cards.
- `md: 0 4px 12px rgba(15,23,42,.08)` — hover lift.
- `lg: 0 12px 32px rgba(15,23,42,.12)` — live panel (Agent Mesh).
- `navy: 0 12px 32px -8px rgba(26,35,126,.35)` — primary CTA signature shadow. Deepens to `-0 16px 36px -8px rgba(26,35,126,.45)` on hover.
- **No inner shadows. No multi-layer stacked shadows.** One shadow per element.
- Neon variant swaps to `0 0 15px rgba(0,240,255,.3)` glow on active agent chips.

### 5.9 Corner radii
| Token | Usage |
|---|---|
| `6px` | small chips, agent-icon squares |
| `10px` | inputs |
| `16px` | cards, CTA band, live panel |
| `9999px` (full) | buttons, badges, eyebrow chips |

Rule: **cards are `16px`, buttons are pills.** Nothing in between.

### 5.10 Cards
- White background.
- `1px solid var(--ao-slate-200)`.
- `border-radius: 16px`.
- `padding: 28px` (agent cards) or `32px` (principle cards).
- On hover: border → `navy-600`, `box-shadow: md`, `translateY(-2px)`. No scale.
- **Never a left-border-accent card with coloured stripe** (the repo App.tsx does this for services — it's a legacy styling; the live VSA site, which is the canonical reference, does not). Avoid unless building specifically in the neon-ops variant.

### 5.11 Transparency & blur
- Navigation bar: `background: rgba(255,255,255,.95)` + `backdrop-filter: saturate(180%) blur(12px)`. Only place blur appears on the light system.
- Neon variant: `.glass-card` = `rgba(13,13,13,.8)` + `blur(8px)` + `1px rgba(255,255,255,.1)` border. Cards only.
- **No blur on modals, dropdowns, or full-screen overlays on the primary system.**

### 5.12 Imagery tone
- Grok-generated brand key art: **cool cyan-blue holograms on near-black backgrounds**, data-matrix falling text, deep blue floor reflections. Temperature: decidedly cool. Saturation: high on the blues, desaturated elsewhere.
- Client logos section: rendered as plain text names in medium-gray, grayscale-filtered, at `opacity: 0.4`. They colourise only on hover.
- **No photographs of people.** No stock photos. No icons of faces. The brand is deliberately post-human in its visuals.

### 5.13 Layout rules
- Fixed top nav (white + blur), 100 z-index, 16px vertical padding.
- Hero: 2-column `1.1fr 1fr` on desktop (copy left, live Agent-Mesh panel right); single-column on mobile ≤960px.
- Workflow flow: 5-column equal grid with 1px interior borders; collapses to single column ≤860px.
- Agent grid: 3 cols desktop → 1 col mobile at 860px breakpoint.
- Footer grid: `2fr 1fr 1fr 1fr` on desktop, `1fr 1fr` on mobile.

---

## 6 · ICONOGRAPHY

Augmented_Ops uses **custom inline SVG icons**, hand-authored to match the stroke style of the brand. There is **no installed icon library** on the live sites. Repository `src/App.tsx` imports **Lucide React** (`Rocket, Bot, Mic2, Target, ChevronRight, ShieldCheck, Zap, BarChart3, Presentation, Share2`), which is the closest CDN match for style.

**Style rules:**
- `viewBox="0 0 16 16"` for small inline icons, `0 0 30 30` for the logomark.
- Strokes: `1.8–2.2px`, `stroke-linecap: round`, `stroke-linejoin: round`.
- **Monochrome.** Inherit `currentColor` — never hard-coded hex in the SVG body.
- 4–6 path elements max per icon. Dense illustrations are out of brand.
- No filled icons on the primary system (outline only). Filled allowed on dark neon variant.
- **Lucide is the sanctioned CDN substitute** when hand-rolling is impractical. Do not use Heroicons (wrong stroke weight), Feather (too round), or Material Icons (filled-first).

**Emoji:** not used. Status markers use coloured dots + Unicode glyphs (`·`, `⌘`, `→`).

**Asset inventory in `assets/`:**
- `augmentedOps.png` — brand key art (holographic blue human + translucent team, data-matrix bg). 1000×1000, cosmic-blue saturation.
- `brand-grok-cosmic.png`, `brand-grok-social.png` — additional Grok variants (darker, more ambient).
- `logo-inline.svg` — the logomark extracted from VSA: navy-700 rounded square `rx="7"` with a white chevron path `M9 10.5l6 9 6-9`.
- `logo-inline-dark.svg` — white rounded square with navy chevron, for navy backgrounds.

---

## 7 · Index — what's in this folder

```
├── README.md                    ← you are here
├── SKILL.md                     ← invokable as {brand}-design skill
├── colors_and_type.css          ← all CSS vars + semantic utility classes
├── assets/                      ← logos + brand imagery
│   ├── augmentedOps.png
│   ├── brand-grok-cosmic.png
│   ├── brand-grok-social.png
│   ├── logo-inline.svg          ← navy on white
│   └── logo-inline-dark.svg     ← white on navy
├── reference/                   ← source files (read-only copies)
│   ├── VSA-index.html           ← canonical visual reference (primary)
│   └── CSA-index.html
├── preview/                     ← Design System tab cards (one concept each)
│   ├── type-display.html
│   ├── type-scale.html
│   ├── type-mono.html
│   ├── colors-navy.html
│   ├── colors-slate.html
│   ├── colors-semantic.html
│   ├── colors-neon.html
│   ├── radii-shadows.html
│   ├── spacing.html
│   ├── buttons.html
│   ├── cards-agent.html
│   ├── chip-eyebrow.html
│   ├── status-pills.html
│   ├── mesh-live-panel.html
│   ├── logo-lockup.html
│   └── brand-voice.html
└── ui_kits/
    └── augmented-ops/           ← holding-level web UI (navy + neon hybrid)
        ├── README.md
        ├── index.html           ← 4-section landing recreation
        ├── Navigation.jsx
        ├── HeroAgentMesh.jsx
        ├── MetricStrip.jsx
        ├── AgentCard.jsx
        ├── WorkflowFlow.jsx
        ├── CTABand.jsx
        └── Footer.jsx
```

### UI kit coverage
- **VSA (primary site)** is the canonical product; one UI kit (`ui_kits/augmented-ops/`) replicates the live VSA design since it is the most mature and the holding brand inherits from it.
- **CSA, RSA, DSA** sites share tokens but do not yet have distinctive designs worth separate kits — their live sites are simplified re-skins of the same navy+Inter system (RSA is an empty stub in the codebase). Reuse the Augmented_Ops kit until those surfaces diverge.

---

## 8 · ⚠ Caveats & substitutions

- **RSA codebase is empty** (`RSA/rsa.index.html` = 4 bytes, "test"). No design context available. Treat RSA as a clone of CSA/VSA visuals.
- **Fonts:** Inter & JetBrains Mono pulled from Google Fonts CDN. No local `.ttf` files were provided — if you need offline assets, download `Inter-{Regular,Medium,SemiBold,Bold,ExtraBold}.woff2` and `JetBrainsMono-{Regular,Medium,Bold}.woff2` and drop in `fonts/`. Not substituted (Inter is the actual canonical font, just CDN-loaded).
- **Logos:** the VSA logomark is a 30×30 inline SVG, not a file asset. I reconstructed it into `assets/logo-inline*.svg` from the source markup. There is no separate wordmark/logotype file — the brand pairs the SVG mark with the text "VSA." or "Augmented_Ops" in Inter 800.
- **Two competing visual directions in the repo:** `App.tsx` (black + neon cyberpunk) vs. the deployed VSA site (navy + white trust). I treat the **live VSA site as canonical** and the neon variant as a secondary "ops/dashboard" sub-system. **Ask Benjamin which is the go-forward direction** before using the neon system in a customer-facing context.
- **No real deck template was attached** — investor decks referenced as `/pdfs/INVESTORENDECK-*.pdf` URLs but not provided as files. Slide templates are therefore omitted from this first pass.
- **Brand imagery** (`augmentedOps.png`) is Grok-generated. If a production visual identity campaign is planned, commission real key art — the current images are provisional/placeholder.

---

## 9 · Clear ask

**What I need from you to polish this system:**
1. **Pick the primary direction:** navy-trust (VSA live) or black-neon (App.tsx)? Or is the neon variant reserved for dashboards/investor decks only (my current assumption)?
2. **Drop a canonical investor deck** (`INVESTORENDECK-VSA.pdf` or similar) so I can extract a real slide template with your layouts, not a guess.
3. **Any real photography** of the team, office, or product that should be part of the imagery language — or do we commit to the "post-human / holographic only" direction?
4. **RSA + DSA direction** — when those sites launch, do they get their own accent colour within the navy family, or stay visually identical to VSA/CSA?
5. **Confirm the German du-form** is the permanent voice for DE copy (it's charming and distinct but worth double-checking for enterprise deals).
# RSA
