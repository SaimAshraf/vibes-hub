# Making "What we do" alive (and sharper visuals sitewide)

## The problem
The six "What we do" cards are plain text boxes. On a phone they stack into one long, boring scroll with nothing to look at.

## What changes

### 1. "What we do" becomes an interactive showcase
Instead of six stacked text boxes:

- **Desktop:** a two-part panel. On the left, six compact capability rows you can hover/click; on the right, a live preview panel that changes with the selected capability — a small animated mock (chat agent replying, a call connecting, a workflow firing, a stock table updating, a build progress strip, a live chart). Auto-advances slowly, pauses on interaction.
- **Mobile:** the same six become a swipeable side-scrolling row of compact cards with snap points and a dot indicator, so the section takes one screen instead of six. Tapping a card opens its preview inline.

```text
[ AI agents      ]   +------------------------+
[ Voice bots   * ]   |  animated mini preview |
[ Automation     ]   |  for selected item     |
[ Software       ]   +------------------------+
```

### 2. Other visual upgrades
- **Why Nexivo:** turn the four flat text blocks into an offset numbered layout with a subtle glowing rule and hover lift; on mobile it collapses into a tight two-column numbered list instead of four tall blocks.
- **How we work:** add a drawn connecting line that fills as you scroll through the four steps.
- **Product universe:** stronger image cards — image zooms slightly and a tinted overlay lifts on hover, name and promise sliding up.
- **Numbers row:** thin animated bars under each number so it reads as a dashboard, not text.
- **Mobile polish:** shorter section paddings, smaller headline steps and fewer stacked tall blocks, so the whole page scrolls noticeably less.

## Technical notes
- New component `src/components/nexivo/CapabilityShowcase.tsx`: state-driven selector + small inline SVG/CSS mock previews (no new images), auto-rotate with `setInterval` cleared on interaction, `prefers-reduced-motion` respected.
- `Home.tsx`: replace the `.cap-grid` map with `<CapabilityShowcase />`; adjust the Why Nexivo and product mosaic markup.
- `src/index.css`: new styles for the showcase (grid on desktop, `scroll-snap-type: x mandatory` track on mobile), scroll-linked step rail, mosaic hover, metric bars, and tightened mobile spacing. All colors via existing tokens.
- No content, routing, or backend changes.
