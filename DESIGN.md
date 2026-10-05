---
name: Império Eletrônicos Sorocaba
description: Phone repair as watchmaking. A white enamel dial with blued-steel structure and gold indices.
colors:
  white: "#ffffff"
  enamel: "#f5f7f8"
  enamel-2: "#eaf0f3"
  steel: "#195b77"
  steel-deep: "#0f4157"
  steel-night: "#0a2f40"
  gold: "#fdc528"
  gold-deep: "#d9a40a"
  ink: "#0b1116"
  ink-2: "#3e505b"
  line: "#d9e2e7"
  line-strong: "#b9c8d0"
  on-steel: "#ffffff"
  on-steel-2: "#c4dbe6"
typography:
  display:
    fontFamily: "Archivo, 'Archivo Fallback', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 4.6vw, 4.75rem)"
    fontWeight: 820
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 82"
  headline:
    fontFamily: "Archivo, 'Archivo Fallback', system-ui, sans-serif"
    fontSize: "clamp(1.95rem, 1.45rem + 2.3vw, 3.1rem)"
    fontWeight: 780
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 86"
  title:
    fontFamily: "Archivo, 'Archivo Fallback', system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.4vw, 1.4rem)"
    fontWeight: 780
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 86"
  lead:
    fontFamily: "Archivo, 'Archivo Fallback', system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 420
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, 'Archivo Fallback', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 420
    lineHeight: 1.6
  small:
    fontFamily: "Archivo, 'Archivo Fallback', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 420
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, 'Archivo Fallback', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 620
    lineHeight: 1.3
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 125"
rounded:
  sm: "0.75rem"
  md: "1.25rem"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 0.6rem + 2vw, 2.5rem)"
  section: "clamp(4.5rem, 3rem + 6vw, 8.5rem)"
  max: "76rem"
  header: "4.25rem"
components:
  button-primary:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.45rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.steel-deep}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.45rem"
    height: "3.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.white}"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.8rem"
    height: "3.6rem"
  button-on-steel:
    backgroundColor: "transparent"
    textColor: "{colors.on-steel}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.8rem"
    height: "3.6rem"
  badge:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.9rem 0.4rem 0.7rem"
    height: "2.5rem"
  card-service:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "2.25rem 1.75rem 1.5rem"
  card-service-hover:
    backgroundColor: "{colors.white}"
  well:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "clamp(1.5rem, 1rem + 2vw, 2.25rem)"
  nav-link:
    textColor: "{colors.ink-2}"
    padding: "0 0.8rem"
    height: "2.75rem"
  band-steel:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.on-steel}"
    padding: "{spacing.section} 0"
  footer:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink-2}"
    typography: "{typography.small}"
---

# Design System: Império Eletrônicos Sorocaba

## Overview

**Creative North Star: "The White Enamel Dial"**

The site is read as a watch face. White enamel is the ground; blued steel draws the structure (headlines' accents, rules, ticks, the one dark band); gold appears the way indices do on a dial: small, exact, few. Dividers are railroad minute tracks, markers are the concave diamond from the logo, and the signature figures (the hero dial and the live hours dial) are real dials with a hand, a minute track and a gold index at twelve.

Density is calm and generous. Sections breathe on a fluid section rhythm, content sits in a 76rem column, and parts-tray wells (enamel `#f5f7f8` panels with a hairline border) hold grouped content. Content that does not exist yet renders as a deliberately drawn quiet well, never a fabricated card. Motion is watchmaker's motion: ticks drawing in, a slow hand sweep, a single gleam crossing glass; all of it collapses under reduced motion.

**Key Characteristics:**
- White and enamel ground, blued-steel structure, gold reserved for indices and the single gold CTA on the steel band.
- One variable family, Archivo, used on two axes: semi-condensed heavy for headlines, expanded uppercase for dial labels.
- Railroad minute-track ticks as section dividers and card crowns.
- The concave four-point diamond as the only bullet, marker and active indicator.
- Soft, steel-tinted shadows that appear on response (hover, scroll), never at rest on content.
- Exactly one full-bleed blued-steel band per page (Location).

## Colors

A cool, nearly monochrome blued-steel system on white enamel with one warm metal accent.

### Primary
- **Blued Steel** (steel): the structural color. Primary buttons, link and arrow-link text, icons, the steel band background, minute-track ticks (at 35-85% alpha), dial strokes, footer column headings, `accent-color`.
- **Tempered Steel** (steel-deep): hover state of primary buttons; the shadow tint (`rgb(15 65 87 / a)`) for every soft shadow.
- **Night Steel** (steel-night): reserved deepest steel for figures and gradients.

### Secondary
- **Index Gold** (gold): indices only. Concave diamond markers, the dial's twelve-o'clock index, the hours arc, the logo bar under the hero's city name, nav hover/active diamonds, focus rings, text selection, and the one gold "Como chegar" button on the steel band.
- **Aged Gold** (gold-deep): gold where it must hold up on white at small size: review stars, the open-status diamond, the gold tick sweep crowning a hovered service card.

### Neutral
- **White Enamel** (white): page ground, header, hovered cards, badges.
- **Parts-Tray Enamel** (enamel): wells, service cards at rest, the trust strip, the footer.
- **Shadowed Enamel** (enamel-2): secondary enamel used inside figures (opened phone back).
- **Dial Ink** (ink): headings and primary text.
- **Graphite** (ink-2): lead paragraphs, summaries, nav links at rest, footer text.
- **Hairline** (line): 1px borders of cards, wells, badges, header on scroll, footer rules.
- **Strong Hairline** (line-strong): ghost-button border, toggle border, hovered card border, scrollbar thumb.
- **On-Steel White / On-Steel Mist** (on-steel, on-steel-2): headline and body text on the steel band.

### Named Rules
**The Index Rule.** Gold is an index, not a surface. It marks, it never fills a panel or a section. The only filled gold element permitted is the primary action on the blued-steel band, where steel and white are already taken.

**The One Band Rule.** A page carries exactly one full-bleed blued-steel band. Everything else stays on white or enamel.

## Typography

**Display Font:** Archivo variable (wght 100-900, wdth 62-125%), with a metric-matched Arial fallback ('Archivo Fallback') then system-ui.
**Body Font:** Archivo at default width.
**Label Font:** Archivo expanded to 125% width.

**Character:** One family stretched in two directions, the way a dial pairs condensed numerals with wide printed legends. Headlines are compressed and heavy, labels are wide, spaced and small.

### Hierarchy
- **Display** (820, fluid 2.5-4.75rem, line-height 0.98, width 82%): the hero H1 only, max 12-13ch. The city word may take Blued Steel with a gold logo bar beneath it.
- **Headline** (780, fluid 1.95-3.1rem, line-height 1.04, width 86%): section H2s, balanced wrapping. A second clause may drop to a new line in Blued Steel.
- **Title** (780, fluid 1.2-1.4rem, width 86%): card and item H3s.
- **Lead** (420, fluid 1.0625-1.25rem, line-height 1.5, Graphite): one supporting sentence under a headline, 32-40ch.
- **Body** (420, 1.0625rem, line-height 1.6): running text, pretty wrapping.
- **Small** (420-540, 0.9375rem): summaries, badges, status, footer.
- **Label** (620, 0.75rem, 0.14em tracking, uppercase, width 125%): dial labels naming a data group (Horário, footer column heads, fact terms, before/after legends).

### Named Rules
**The Two Axes Rule.** Hierarchy is set by width as much as size: headings go narrower (82-86%), labels go wider (125%). Never set a heading at default width or a label condensed.

**The Label Names Data Rule.** A dial label names the data group it sits on (hours, contact, a fact term). It is never a decorative line stacked above a section headline.

## Layout

A single centered column, max 76rem plus fluid gutters (1-2.5rem). Sections pad on a fluid rhythm (4.5-8.5rem). Hero is one column on mobile, `1.1fr / 0.9fr` copy-and-dial from 900px. Service cards go 1 / 2 / 3 columns at 640 / 980px; an odd last card spans the row at two columns. Section heads split headline left and lead right-aligned at 900px. The footer grid runs 1 / 2 / four uneven columns (1.4/1/0.9/0.8fr) at 640 / 1024px. The header is sticky at 4.25rem; on mobile a fixed WhatsApp bar sits at the bottom and the footer pads for it. Touch targets hold 2.5-3.6rem minimum heights. Minute-track dividers (a 1.25rem rail of 1px ticks every 12px with 2px majors every 60px, diamond at center) separate sections instead of plain rules.

## Elevation & Depth

Flat at rest, lifted on response. Depth is conveyed first by tone (white over enamel, enamel over white) and hairlines; shadows are soft, steel-tinted and diffuse, applied when something is hovered or the page scrolls.

### Shadow Vocabulary
- **Resting lift** (`0 1px 2px rgb(15 65 87 / 0.06), 0 4px 12px rgb(15 65 87 / 0.06)`): available token for quiet separation.
- **Hover lift** (`0 2px 4px rgb(15 65 87 / 0.06), 0 14px 32px -8px rgb(15 65 87 / 0.18)`): hovered buttons and service cards (paired with a 1-3px rise), and hero media.
- **Scrolled header** (`0 6px 20px -14px rgb(15 65 87 / 0.35)`): sticky header once scrolled.
- **Figure drop** (`drop-shadow(0 30px 40px rgb(15 65 87 / 0.14))`): the hero dial.

### Named Rules
**The Response Rule.** Content surfaces carry no shadow at rest. A shadow is the answer to hover, focus or scroll.

## Shapes

Generously rounded containers (1.25rem) with tighter inner frames (0.75rem); all buttons, badges and icon buttons are full pills. Borders are 1px hairlines on containers and 1.5px on buttons. The recurring silhouette is the concave four-point diamond (an SVG mask, `--diamond-mask`), used at 0.45-1.15rem as bullet, divider jewel, seam pin, nav indicator and status dot; it rotates 90 degrees on hover as a crown turning. Circles appear only as dials.

## Components

### Buttons
Pill-shaped, confident, with a single glass gleam crossing on hover.
- **Shape:** full pill (999px), 1.5px border, min-height 3.25rem (3.6rem large).
- **Primary:** Blued Steel fill, white text, weight 650; hover deepens to Tempered Steel.
- **Ghost:** transparent with Strong Hairline border and steel text; hover takes a steel border and white fill.
- **Gold:** Index Gold fill with ink text, only on the steel band; hover brightens.
- **On-steel:** transparent with a 45% white border and white text; hover adds an 8% white wash.
- **Hover / Focus:** 1px rise plus hover lift; a skewed white gleam sweeps left to right over 0.8s. Focus is a 3px gold outline at 3px offset.

### Badges
- **Style:** white pill, hairline border, small Graphite text with bold ink figure, steel icon (aged-gold stars); border goes steel on hover.

### Cards / Containers
- **Service card:** enamel at rest, 1.25rem radius, hairline border, crowned by a minute-track tick strip. Hover/focus-within: white fill, strong hairline, hover lift, 3px rise, gold ticks sweep across the crown, the diamond turns 90 degrees. The whole card is clickable through its WhatsApp link.
- **Well (empty state):** enamel or white panel, hairline border, 1.25rem radius; a gold diamond, a headline, one sentence and an arrow link. Placeholder frames are enamel with a 12px steel dot grid, wide dial-label legends and a steel seam pinned by a gold diamond.

### Navigation
- **Desktop:** Graphite links (0.95rem, 560) at 2.75rem height; hover turns ink and a small gold diamond scales in beneath, also marking the current section.
- **Header:** 97% white, sticky, gains a hairline and scrolled-header shadow on scroll. Mobile collapses to a steel WhatsApp icon button and a pill menu toggle whose two lines cross into an X; the menu is a white sheet with hairline-separated rows.

### Minute Track (signature)
A divider of two tick rails flanking a gold diamond; on reveal the rails draw outward and the diamond turns in. A dark variant uses white ticks on steel.

### Hours Dial (signature)
On the steel band: a 24-hour ring with the opening-hours arc in gold, a white hand at the current São Paulo time tipped with a gold diamond, and a live open/closed status beside it.

### Steel Band and Footer
The Location band is the single full-bleed Blued Steel section, with white headline, On-Steel Mist address and the gold + on-steel button pair. The footer is Parts-Tray Enamel with a hairline top, steel dial-label column heads each led by a diamond.

## Do's and Don'ts

### Do:
- **Do** keep gold to indices: diamonds, dial index, hours arc, focus rings, nav markers, and the one gold button on the steel band.
- **Do** separate sections with the minute track rather than plain rules or color blocks.
- **Do** set headings semi-condensed (82-86% width, 780-820 weight) and dial labels expanded (125%, 0.14em, uppercase).
- **Do** render missing content as a quiet well with a diamond, one sentence and an action.
- **Do** keep content surfaces shadowless at rest and use the steel-tinted hover lift on response.
- **Do** turn every motion off under reduced motion; content stays visible without JavaScript.

### Don't:
- **Don't** fill panels, sections or backgrounds with gold.
- **Don't** add a second full-bleed steel band to a page.
- **Don't** place a dial label as a decorative line above a section headline; labels name data groups.
- **Don't** invent cards, reviews, photos or counts to fill an empty slot.
- **Don't** use bullets, dots or icons where the concave diamond is the marker.
- **Don't** use hard offset shadows; on white and enamel, shadows are diffuse and tinted with steel (the map on the steel band is the only darker drop).
