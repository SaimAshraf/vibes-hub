# Nexivo v2 — "The Automation OS" Direction

Right now the site looks like a generic dark/cyan AI template. The fix isn't more gradients — it's **committing to a strong character** so visitors *feel* the product.

## The Concept: "You're inside an automation OS"

Treat the entire site as if the visitor booted into Nexivo's own runtime. Every section behaves like a panel in a live system — terminals typing, workflows executing, agents thinking, metrics ticking. Less "marketing page", more "live cockpit you scroll through".

Visual character:
- **Editorial + terminal hybrid** — huge serif/display headlines (Instrument Serif or Fraunces) clashing with mono (JetBrains Mono) tickers and labels. Less generic Space Grotesk.
- **High-contrast palette shift** — keep dark base but introduce a signature accent (acid lime `#C6FF3D` or electric tangerine) instead of the safe cyan/magenta combo every AI site uses. Cyan stays as secondary.
- **Brutalist grid lines, ticker tape, status chips** with `[ RUNNING ]`, `[ AGENT_07 ]`, timestamps, version tags everywhere — like a Bloomberg terminal got designed by Linear.
- **No more stock orb glows.** Replace with structural visuals: ASCII/SVG node graphs, workflow diagrams, animated wires.

## Section-by-Section Rebuild

```
┌─ NAVBAR ───────────────────────────────────────────┐
│  Sticky. Shows live "system status" pill:          │
│  ● nexivo.os v2.1 · 4 agents online · 02:41 UTC    │
└────────────────────────────────────────────────────┘
```

1. **Hero — "Boot sequence"**
   - On load, a typewriter terminal types `> initializing nexivo.os...` then resolves into the headline.
   - Headline mixes serif + mono: *"We build the **agents** that run your business."*
   - Right side: live animated workflow node-graph (SVG) with pulsing connections instead of the orb.
   - Bottom ticker tape scrolling: real-ish telemetry — `agent_07 closed lead #4821 · workflow:invoice-sync ran in 1.2s · ...`

2. **Marquee → Capability Stack**
   - Replace partner names with a **dual marquee**: top row = tools we orchestrate, bottom row scrolling opposite = outcomes (`-38hrs/wk`, `+212% bookings`).

3. **Services → "Modules"**
   - Reframe as OS modules. Each card = a fake terminal window with `// agents.chat`, fake code preview, and a "deploy" status. Hover = the code "executes".

4. **Solutions → Industry Switcher**
   - Interactive: click an industry tab (Restaurants / E-com / Real Estate / Clinics) → the panel rewires itself live, showing a tailored workflow diagram + 3 metrics that count up.

5. **Playground (keep, upgrade)**
   - Style as a real IDE-ish chat: line numbers, syntax highlighting on Nexa's responses, "tool calls" appearing as collapsible blocks (`> calling: bookMeeting()` → result). This sells the agent capability viscerally.

6. **Work → Case Files**
   - Drop the generic image cards. Use **dossier layout**: file tab `CASE_001.md`, redacted-style header, before/after metrics with animated bar fills, a quote, and a fake commit log.

7. **Why Nexivo → Manifesto**
   - Editorial spread. Giant serif statement on left ("We don't sell hours. We sell **outcomes that compound**."), numbered principles on right with mono labels `01 / 04`.

8. **Process → "Runtime" timeline**
   - Horizontal scroll-snap timeline: Discover → Architect → Deploy → Optimize, each step a terminal log entry that prints as it enters viewport.

9. **Testimonials → Slack/iMessage style**
   - Real-feeling chat bubbles with avatars, timestamps, ✓✓ read receipts. Feels native, not "quote card".

10. **CTA → "Initialize"**
    - Big terminal prompt: `> nexivo init --your-company` with a blinking cursor input that becomes the email field. Submit = "compiling your audit..." loader.

11. **Footer — System log**
    - Last line shows live uptime, build hash, "made in Bengaluru / running 24/7".

## Motion & Micro-interactions

- **Scroll-driven** reveals using Framer Motion: text masks unmasking, numbers counting, lines drawing.
- **Cursor**: subtle custom cursor with a small mono coordinate readout `x:412 y:889`.
- **Magnetic buttons** on primary CTAs.
- **Section transitions** marked with horizontal scanlines that sweep on enter.
- All motion respects `prefers-reduced-motion`.

## Tech additions

- Add `framer-motion` for scroll/enter animations.
- Add Google Fonts: **Instrument Serif** (display) + keep JetBrains Mono. Remove Space Grotesk dominance.
- New components: `BootHero`, `Ticker`, `NodeGraph` (SVG), `TerminalCard`, `IndustrySwitcher`, `CaseFile`, `RuntimeTimeline`, `ChatTestimonial`, `InitCTA`, `SystemFooter`, `StatusPill`, `CustomCursor`.
- Update `index.css` tokens: add `--accent-lime`, refine gradients, add scanline + noise utilities.

## Out of scope (this pass)

- No real backend / live data — all "live" telemetry is animated mock.
- Keeping existing routing and Lovable Cloud setup untouched.
- Logo and favicon stay as-is.

## Deliverable

A site that, within 3 seconds of landing, makes the visitor think *"oh — these people actually build automation, this isn't a template."*

Approve and I'll execute the full rebuild.