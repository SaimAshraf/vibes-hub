yes this is good and also do more thing on main page this should feel like automation  
  
  
Homepage wow pass + "Let's talk" guided flow

## 1. Fix the restaurant look on the main page

The restaurant photo currently appears twice on the homepage (hero collage and the NexPos flagship block), which makes Nexivo read as a hospitality brand.

- Generate two new abstract, tech-forward hero images: a dark layered "intelligence" visual (glowing network/data planes) and a second supporting frame showing a modern team at screens.
- Hero collage uses the new images only. The restaurant photo stays in one place: the NexPos flagship section, where it belongs.
- No image is repeated anywhere on the page.

## 2. Make the main page more impressive

- Hero: larger stacked headline with a word that cycles (agents / automations / software), depth-layered images with slow parallax on scroll, glass stat chips (projects, hours automated, uptime) floating over the collage.
- Add a moving marquee strip of capability keywords under the hero.
- Capability cards: hover lift, animated gradient edge, number counters.
- Add a "How we work" horizontal step rail (Audit → Design → Build → Run) with animated connecting line.
- Connected-company flow line gains a travelling pulse dot.
- Keep all motion reduced-motion safe and verify on mobile widths.

## 3. Replace every visible email with a "Let's talk" button

Emails stop being the visible call to action across the site (home contact band, footer, product pages, contact page). Each becomes a "Let's talk" button that opens a guided step slider instead of jumping straight to mail.

Flow (one question per screen, big tap targets, progress bar, back/skip on every step):

1. What do you need? — AI agents / Automation / Business software / Not sure
2. What kind of business? — Restaurant / Factory / Retail & e-commerce / Services / Other
3. How soon? — ASAP / This quarter / Just exploring
4. Optional: name + contact (skippable, nothing required)
5. Summary screen: shows their answers, then "Send to Nexivo" opens their mail app with subject and full message already written, plus a copy-to-clipboard fallback and the Instagram link.

Nobody has to type anything to reach the last step.

## Technical notes

- New `LetsTalk.tsx` in `src/components/nexivo/`: context provider + dialog with step state, animated slide transitions, and a mailto builder assembling subject/body from selections.
- Provider mounted in `SiteShell`; a `LetsTalkButton` replaces the `mailto:` anchors in `Visuals.tsx` (ContactBand), `Footer.tsx`, `Home.tsx`, `NexPos.tsx`, `ProductDetail.tsx`, `Contact.tsx`.
- Footer keeps a small plain-text email line as a secondary option.
- New generated hero assets under `src/assets/`; homepage sections updated in `Home.tsx` with styles added to `src/index.css`.
- Verify build, then desktop and mobile screenshots of the homepage and the dialog flow.