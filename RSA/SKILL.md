---
name: augmented-ops-design
description: Use this skill to generate well-branded interfaces and assets for Augmented_Ops (Fused Firmament / DYAI2025 — Berlin autonomous-AI services holding), either for production or throwaway prototypes/mocks/slides. Contains essential design guidelines, colors, type, fonts, assets, and a navy-trust web UI kit for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill first — it covers brand positioning, voice, visual foundations, iconography, and the two competing visual directions (navy-trust is canonical for the live site; black-neon is the internal "ops" variant for dashboards / investor hero moments only).

Then explore:
- `colors_and_type.css` — CSS variables (colors, type, spacing, shadows, motion, background recipes) and semantic utility classes (`.ao-display`, `.ao-h1`, `.ao-lede`, `.ao-overline`, `.ao-mono`, …).
- `assets/` — logomark SVGs (`logo-inline.svg`, `logo-inline-dark.svg`) and the Grok-generated cosmic brand key art.
- `ui_kits/augmented-ops/` — the canonical navy-trust web UI kit (JSX components + `index.html`).
- `reference/` — read-only copies of the live VSA + CSA HTML for source-of-truth details.
- `preview/` — small demo cards that show every token in context.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of this folder and emit static HTML files for the user to view. If working on production code, copy assets and lift the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few focused questions (navy-trust vs neon-ops? de or en? which sub-agency — VSA / CSA / RSA / DSA?), and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

**Non-negotiables**
- Voice: German du-form, sachlich, no exclamation marks, no "revolutionary", no emoji. Sentence-case headlines, ALL-CAPS eyebrows with 0.12em tracking.
- Inter + JetBrains Mono only. No serifs.
- Primary navy is `#1A237E`. Semantic "on hold" over "error" in copy vocabulary.
- Cards are 16px radius; buttons are full pills. Nothing in between.
- Always name Benjamin Poersch + Grazer Damm 207, 12157 Berlin in legal blocks.
