# Nexivo Team Page — "The Core Four"

## Goal
A dedicated, dramatic Team page that presents the four founders like a film's opening credits, then shows the wider Nexivo team as disciplines (no invented people or faces). Saim appears first on mobile.

## Page flow
```text
1. Opening       — dark stage, "The people behind the systems." 4 portraits slice in
2. Founder reels — one cinematic chapter per founder (Saim first)
3. The Core grid — all four together, hover/tap to light up
4. The wider team — disciplines shown as a living "system map"
5. Join / Let's talk ending
```

### 1. Opening (hero)
- Big serif headline with a word-by-word reveal; small label "Founders · Nexivo".
- Four tall portrait strips side by side (desktop) that slide up one after another, slightly overlapping and tilted, with a cyan scan-line sweeping across each.
- Mobile: Saim's strip takes the front, others fan out behind like a stack of cards.

### 2. Founder chapters (the dramatic part)
Order: **Saim Ashraf (CTO)** → Syed Quraib Ali Gillani (CEO) → Talha Iqbal (COO) → Amaan Janjua (CBO).
- Each chapter: large portrait, giant outlined role letters behind it ("CTO", "CEO"...), name in huge serif, title spelled out, LinkedIn button.
- Portraits start in black-and-white and bloom into colour as you scroll to them, with a glowing duotone edge in the brand cyan/lime.
- Layout alternates left/right on desktop, so it reads as a broken editorial grid; on mobile each becomes a full-width card.
- A short "focus" line per role describing the area they lead (technology, vision, operations, business growth) — no invented achievements or numbers.
- Photo consistency: all four are cropped to the same tall frame and colour-graded the same way (Quraib's circle frame and Talha's black bars are trimmed off).

### 3. The Core grid
- Compact 2×2 (mobile) / 1×4 (desktop) recap; tapping a card flips it to show role + LinkedIn.

### 4. The wider team — decided approach
Shown as disciplines, not people: **Engineering, AI & Automation, Product & Design, Delivery & Support, Growth & Partnerships**.
- Presented as a connected node map: four founder nodes in the centre, discipline nodes around them, animated signal lines pulsing between them (ties into the "connected systems" story).
- Each discipline has a one-line description of what it does for clients. No head counts or fake stats.
- Mobile: becomes a vertical chain of glowing nodes.

### 5. Ending
- "Want to build with us?" with the existing Let's talk button.

## Animations
- Staggered slide-up and clip-path reveals for portraits.
- Black-and-white to colour on scroll; subtle tilt-on-hover (desktop only).
- Scan-line sweep, giant role letters drifting slowly as you scroll.
- Pulsing signal lines on the team map.
- All motion turns off for visitors who prefer reduced motion.

## Site integration
- New "Team" link in the top menu, mobile menu and footer.
- Small "Meet the founders" link from the About page.
- Page title and description for search/sharing.

## Technical details
- Route `/team` inside `SiteShell`; new `src/pages/Team.tsx` and `src/data/team.ts` (array order puts Saim first).
- Photos uploaded via Lovable Assets after cropping to a uniform portrait ratio with ImageMagick.
- Reuse `Reveal`, `SmartImage`, `PageIntro`, `LetsTalkButton`; new styles added to `index.css` with semantic tokens only.
- Verify with Playwright at desktop and mobile widths (order, overflow, animation, links).
