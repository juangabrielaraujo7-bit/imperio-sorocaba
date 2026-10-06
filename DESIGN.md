---
name: Império Eletrônicos Sorocaba
description: Phone repair as watchmaking. A white enamel dial with blued-steel structure and small gold indices.
colors:
  white: "#ffffff"
  enamel: "#f5f7f8"
  enamel-2: "#eaf0f3"
  steel: "#195b77"
  steel-deep: "#0f4157"
  steel-night: "#0a2f40"
  gold: "#fdc528"
  gold-bright: "#ffd247"
  gold-deep: "#d9a40a"
  ink: "#0b1116"
  ink-2: "#3e505b"
  line: "#d9e2e7"
  line-strong: "#b9c8d0"
  on-steel: "#ffffff"
  on-steel-2: "#c4dbe6"
  error: "#b3261e"
  status-closed: "#8aa0ac"
  status-closed-on-steel: "#9fbccb"
typography:
  display:
    fontFamily: "Archivo, 'Archivo Fallback', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 4.6vw, 4.75rem)"
    fontWeight: 820
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 82"
  display-page:
    fontFamily: "Archivo, 'Archivo Fallback', system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 1.5rem + 4vw, 4.25rem)"
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
  label-micro:
    fontFamily: "Archivo, 'Archivo Fallback', system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 620
    lineHeight: 1.3
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 125"
rounded:
  focus: "6px"
  logo: "8px"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.5rem"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 0.6rem + 2vw, 2.5rem)"
  section: "clamp(3.25rem, 2.25rem + 4.5vw, 7rem)"
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
  button-gold-hover:
    backgroundColor: "{colors.gold-bright}"
    textColor: "{colors.ink}"
  button-on-steel:
    backgroundColor: "transparent"
    textColor: "{colors.on-steel}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.8rem"
    height: "3.6rem"
  chip-option:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 0.9rem 0.6rem 1.1rem"
    height: "3.25rem"
  chip-option-hover:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.white}"
  chip-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.95rem"
    height: "2.75rem"
  card-service:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1.25rem 1.25rem 0.75rem"
  card-brand:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1rem 0.75rem 0.85rem"
  art-well:
    backgroundColor: "transparent"
    rounded: "{rounded.sm}"
  card-review:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  review-avatar:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    size: "2.6rem"
  carousel-slide:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    width: "clamp(12rem, 9rem + 14vw, 17rem)"
  carousel-nav:
    backgroundColor: "{colors.white}"
    textColor: "{colors.steel}"
    rounded: "{rounded.pill}"
    size: "3rem"
  carousel-nav-hover:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.white}"
  divider:
    backgroundColor: "{colors.line}"
    height: "1px"
  panel:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.25rem, 0.75rem + 2.5vw, 3rem)"
  media-frame:
    backgroundColor: "{colors.enamel}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 0.9rem"
    height: "3.1rem"
  nav-link:
    textColor: "{colors.ink-2}"
    padding: "0 0.8rem"
    height: "2.75rem"
  band-enamel:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    padding: "{spacing.section} 0"
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

The site is read as a watch face. White enamel is the ground; blued steel draws the structure (headline accents, rules, ticks, the one dark band); gold appears the way indices do on a dial: small, exact, few. Markers are small round dots, dividers between white sections are a single hairline, and the signature figures (the hero dial and the live hours dial) are real dials with a hand, a minute track and a gold circular index at twelve. Services and brands are shown as transparent photo cutouts sitting directly on white cards, with authored steel line art as the fallback where no photo exists.

Density is calm and direct. Sections breathe on a fluid section rhythm, content sits in a 76rem column, and section heads are a single headline with no stacked label and no right-hand lead. Grouped content sits on white cards or in enamel panels with a hairline. Real customer proof is shown as it is (three Google reviews, before/after photos); media that does not exist yet renders as a quiet well drawn in the dial's own grammar, never a fabricated photo or card. Motion is watchmaker's motion: card crown ticks sweeping gold, a slow hand sweep, a single gleam crossing glass, a carousel that turns like a bezel; all of it collapses under reduced motion.

**Key Characteristics:**
- White and enamel ground, blued-steel structure, gold reserved for indices and the single gold CTA on the steel band.
- One variable family, Archivo, used on two axes: semi-condensed heavy for headlines, expanded uppercase for dial labels.
- Small round dots (`.dot`, `--dot-mask`) as the only bullet, separator, status and position indicator.
- A plain 1px hairline between two white sections; bands mark their own edges.
- Transparent product cutouts directly on white, no well behind them.
- Soft, steel-tinted shadows that appear on response (hover, scroll), never at rest on content.
- Exactly one full-bleed blued-steel band per page (Location on the home, the store block on internal pages).

## Colors

A cool, nearly monochrome blued-steel system on white enamel with one warm metal accent.

### Primary
- **Blued Steel** (steel): the structural color. Primary buttons, link and arrow-link text, icons, line-art strokes, the steel band, card crown ticks (30% alpha), dial strokes, the default `.dot`, the active carousel dot, the FAQ +/− bars, the review avatar, the empty-media seam and play disc, the select chevron, dial-label list heads, `accent-color`, the hover fill of option chips and carousel arrows.
- **Tempered Steel** (steel-deep): hover state of primary buttons; line-art shading; the video backdrop; the shadow tint (`rgb(15 65 87 / a)`) for every soft shadow.
- **Night Steel** (steel-night): reserved deepest steel for figures and gradients.

### Secondary
- **Index Gold** (gold): indices only. The hero dial's twelve-o'clock circle and hand tips, the hours arc and hours-dial index, nav hover/active dots, the before/after handle and empty-seam pin, the logo bar under the hero's city name, focus rings (and the 55% gold field-focus halo), text selection, the icon on a hovered option chip, the open-status dot on the steel band, and the one gold "Como chegar" button on the steel band.
- **Bright Gold** (gold-bright): hover state of the gold button only.
- **Aged Gold** (gold-deep): gold where it must hold up on white at small size: review stars, the open-status dot on white, the gold tick sweep crowning a hovered service card, list dots in the page-hero card and store intro.

### Neutral
- **White Enamel** (white): page ground, header, service, brand and review cards, carousel frames, inputs, option chips, media frames inside enamel bands.
- **Parts-Tray Enamel** (enamel): the before/after and reviews bands, form and picker panels, empty media frames, the "other brand" card, the footer.
- **Shadowed Enamel** (enamel-2): secondary enamel inside figures and line art.
- **Dial Ink** (ink): headings and primary text.
- **Graphite** (ink-2): leads, summaries, FAQ answers, review source and date, nav links at rest, footer text, the card WhatsApp link at rest.
- **Hairline** (line): 1px borders of cards, panels, media frames, band edges, FAQ rows, footer rules, and the section divider.
- **Strong Hairline** (line-strong): ghost-button, input, chip, link-chip and carousel-arrow borders, inactive carousel dots, breadcrumb separator dots, the FAQ top rule, hovered card border, scrollbar thumb.
- **On-Steel White / On-Steel Mist** (on-steel, on-steel-2): headline and body text on the steel band.

### Functional
- **Signal Red** (error): form errors only, as the invalid-field border and the inline error line beneath it. Never decorative.
- **Closed Steel / Closed Mist** (status-closed, status-closed-on-steel): the open-status dot when the store is closed, on white and on the steel band respectively. The status is always also stated in text.

### Named Rules
**The Index Rule.** Gold is an index, not a surface. It marks, it never fills a panel or a section. The only filled gold element permitted is the primary action on the blued-steel band, where steel and white are already taken.

**The One Band Rule.** A page carries exactly one full-bleed blued-steel band. Other bands are enamel; everything else stays on white.

## Typography

**Display Font:** Archivo variable (wght 100-900, wdth 62-125%), with a metric-matched Arial fallback ('Archivo Fallback') then system-ui.
**Body Font:** Archivo at default width.
**Label Font:** Archivo expanded to 125% width.

**Character:** One family stretched in two directions, the way a dial pairs condensed numerals with wide printed legends. Headlines are compressed and heavy, labels are wide, spaced and small.

### Hierarchy
- **Display** (820, fluid 2.5-4.75rem, line-height 0.98, width 82%): the home hero H1 only, max 12-14ch. The city word may take Blued Steel with a gold logo bar beneath it.
- **Display, page** (820, fluid 2.3-4.25rem, width 82%): the H1 of service and brand pages, max 14ch.
- **Headline** (780, fluid 1.95-3.1rem, line-height 1.04, width 86%): section H2s, balanced wrapping. A smaller panel headline (fluid 1.5-2.25rem) heads the option picker.
- **Title** (780, fluid 1.2-1.4rem, width 86%): card and item H3s; brand names at 1.25rem, width 88%.
- **Lead** (420, fluid 1.0625-1.25rem, line-height 1.5, Graphite): the one supporting sentence under a hero H1, 36-40ch.
- **Body** (420, 1.0625rem, line-height 1.6): running text and review quotes, pretty wrapping. Action text and labels at 600-650; review author at 700.
- **Small** (420-560, 0.85-0.9375rem): card summaries, breadcrumbs, review source and date, field labels and errors, status, footer.
- **Label** (620, 0.75rem, 0.14em tracking, uppercase, width 125%): dial labels naming a data group (Horário, footer column heads, a page-hero list head, link-chip group heads, ANTES / DEPOIS legends).
- **Micro label** (620, 0.68rem, 0.12-0.16em, uppercase, width 125%): legends inside a media frame only ("Vídeo em breve", the "em breve" pill on an empty slide).

### Named Rules
**The Two Axes Rule.** Hierarchy is set by width as much as size: headings go narrower (82-88%), labels go wider (125%). Never set a heading at default width or a label condensed.

**The Label Names Data Rule.** A dial label names the data group it sits on (hours, contact, a list, a fact term). It is never a decorative line stacked above a section headline.

## Layout

A single centered column, max 76rem plus fluid gutters (1-2.5rem). Sections pad on a fluid rhythm (3.25-7rem). Section heads are a lone H2 above content; the before/after section centres its head, carousel and action. The home runs Hero, Services, Before/After band, Brands, Quote form, Reviews band, Store intro, Location (steel band), FAQ. The home hero is one column on mobile, copy-and-dial from 900px; the internal page hero is copy plus a flat side card at `1.15fr / 0.85fr` from 960px. Service cards run 1 / 2 / 3 columns at 640 / 1024px (horizontal image-left cards below 1024px, stacked above with a 2:1 image area); brand cards run 2 columns (the "other" card spanning the row) then 5 at 768px; review cards run 1 / 2 / 3 columns. Media rails are a horizontal snap-scroll row on mobile and a 2-4 column grid from 768px. Form, FAQ and store intro split copy and content at 1024px. The header is sticky at 4.25rem; on mobile a fixed WhatsApp bar sits at the bottom. Touch targets hold 2.5-3.6rem minimum heights.

### Named Rules
**The Divider Rule.** Between two white sections the divider is a single 1px Hairline rule (`.container.divider > hr`), and it adds no space: the container's negative block margins equal half the section rhythm, centring the rule in the gap. A band change (into an enamel band or the steel band) is marked by the band's own edge, never by a rule.

## Elevation & Depth

Flat at rest, lifted on response. Depth is conveyed first by tone (white over enamel, enamel over white) and hairlines; shadows are soft, steel-tinted and diffuse, applied when something is hovered or the page scrolls.

### Shadow Vocabulary
- **Resting lift** (`0 1px 2px rgb(15 65 87 / 0.06), 0 4px 12px rgb(15 65 87 / 0.06)`): available token for quiet separation.
- **Hover lift** (`0 2px 4px rgb(15 65 87 / 0.06), 0 14px 32px -8px rgb(15 65 87 / 0.18)`): hovered buttons, service and brand cards (paired with a 1-2px rise), and hero media.
- **Scrolled header** (`0 6px 20px -14px rgb(15 65 87 / 0.35)`): sticky header once scrolled.
- **Cutout drop** (`drop-shadow(0 10px 14px rgb(15 65 87 / 0.18))`): product cutouts on service, brand and page-hero cards, so the object sits on the white.
- **Figure drop** (`drop-shadow(0 30px 40px rgb(15 65 87 / 0.14))`): the hero dial.
- **Carousel frame** (`0 30px 50px -24px rgb(15 65 87 / 0.45)`): the tall before/after frames, which read as objects standing in space.
- **Play disc** (`0 6px 20px rgb(11 17 22 / 0.3)`): the white play button floating over a real video.

### Named Rules
**The Response Rule.** Content surfaces carry no shadow at rest. A shadow is the answer to hover, focus or scroll; the only resting drops belong to objects (cutouts, the dial, carousel frames), never to cards.

## Shapes

Generously rounded containers (1.25rem) with tighter inner frames and inputs (0.75rem); the form and picker panels and carousel frames step up to 1.5rem. All buttons, option chips, link chips and icon buttons are full pills; carousel arrows are 3rem circles. Focus outlines round at 6px; the logo links round at 8px so the ring hugs the mark. Borders are 1px hairlines on containers and 1.5px on buttons, chips and inputs. The recurring marker is the small circle: `.dot` at 0.38em as list bullet and breadcrumb separator, and `--dot-mask` (an SVG circle mask) at 0.45-1.1rem for nav indicators, status, the before/after handle and the empty-seam pin. The FAQ mark is a +/− of two 2px steel bars. The logo keeps its own diamond as a brand asset; no other diamond silhouette is used as a marker.

## Components

### Buttons
Pill-shaped, confident, with a single glass gleam crossing on hover.
- **Shape:** full pill, 1.5px border, min-height 3.25rem (3.6rem large).
- **Primary:** Blued Steel fill, white text, weight 650; hover deepens to Tempered Steel.
- **Ghost:** transparent with Strong Hairline border and steel text; hover takes a steel border and white fill.
- **Gold:** Index Gold fill with ink text, only on the steel band; hover brightens to Bright Gold.
- **On-steel:** transparent with a 45% white border and white text; hover adds an 8% white wash.
- **Hover / Focus:** 1px rise plus hover lift; a skewed white gleam sweeps left to right over 0.8s. Focus is a 3px gold outline at 3px offset.
- **Arrow link:** steel 650 text with a trailing arrow that slides 3px on hover; the inline secondary action.

### Chips
- **Option chip (OptionPicker):** white pill, Strong Hairline border, ink 650 label kept on one line, steel WhatsApp icon at the end; options flex-wrap and grow to fill rows (a single column below 480px). Hover fills Blued Steel with white text, the icon turns gold, 1px rise. Each opens WhatsApp with the choice written in.
- **Link chip (LinkChips):** transparent pill, Strong Hairline border, ink 600 text and a steel arrow; hover turns border and text steel. Grouped under a dial label naming the group.

### Cards / Containers
- **Service card:** white, 1.25rem radius, hairline border, crowned by a strip of steel ticks. The image area has no background: a transparent WebP cutout (`public/media/cards`, alpha halo stripped) sits directly on white with the cutout drop (square at the left on mobile, 2:1 on top from 1024px); steel line art is the fallback. Title, one Graphite line, then "Ver detalhes" (steel, arrow) and a Graphite WhatsApp link with a steel icon. The whole card links to the service page; the WhatsApp link sits above that hit area. Hover/focus-within: strong hairline, hover lift, 2px rise, gold ticks sweep across the crown, the cutout scales and tilts. Keyboard focus outlines the whole card in gold.
- **Brand card:** white, a 16:10 cutout area with no background, brand name, a small steel "Ver mais" line with arrow; same hover lift, the cutout lifts 4px and scales 1.04. The "other brand" card is enamel and opens WhatsApp.
- **Review card:** white, hairline, 1.25rem radius, 1.5rem padding. A 2.6rem Blued Steel circle with the author's white initial, the author (700) over "Avaliação no Google" (Graphite small); a row of Aged Gold stars and the date; then the quote. Only real reviews, three on the home, inside the enamel reviews band.
- **Panel:** enamel, hairline, 1.5rem radius, fluid padding; holds the quote form and the option picker.
- **Page-hero side card:** flat white card, hairline, 1.25rem radius: a cutout area with no background (and no glow behind the hero), a dial-label list head and hairline-ruled rows each led by an Aged Gold dot (rows link onward with a steel arrow when a page exists).

### Before/After Carousel (signature)
"Veja o resultado do nosso trabalho" sits in an enamel band with a centred head. A 3D stage (perspective 1000px) shows a centre 9:16 white frame (1.5rem radius, carousel-frame shadow) with a caption beneath; neighbours scale to 0.85, rotate ±10deg on Y, blur 3px and drop to 45% opacity, and only the centre is interactive inside. Steel-on-white circular arrows sit at mid-height; it auto-advances every 4s and pauses on hover, focus, interaction and playing video; a row of 0.5rem circular dots (Strong Hairline, active steel at 1.3x) tracks position. Frames hold a before/after slider, a video, or an empty seam well.

### Media
- **Media card:** an enamel frame with hairline border and 1.25rem radius, a 4:5 portrait when real media exists (photo, video or before/after slider), a caption beneath. Photos ease to 1.03 scale on hover. Inside an enamel band the frame turns white.
- **Before/after slider:** a white 2px seam with a gold circular handle; a transparent range input drives it.
- **Empty media:** a quiet well on a 12px steel dot grid. The *seam* variant splits ANTES | DEPOIS legends across a 2px steel seam pinned by a gold circle; the *video* variant centres a small white play disc with a steel ring above the micro label "Vídeo em breve".
- **Media rail:** horizontal snap-scroll row on mobile, grid on desktop. On internal pages the gallery section is omitted entirely when it has no media.
- **Video:** Tempered Steel backdrop, a white play disc that fades once playing.

### Inputs / Fields
- **Style:** white, 1.5px Strong Hairline border, 0.75rem radius, min-height 3.1rem, 1rem text; small 650 labels above. Selects carry a steel chevron in place of the native arrow; textareas do not resize.
- **Focus:** steel border plus a 3px 55% gold halo.
- **Error:** Signal Red border and a Signal Red 560 line beneath the field, linked through `aria-describedby`.

### Navigation
- **Desktop:** Graphite links (0.95rem, 560) at 2.75rem height; hover turns ink and a small gold dot scales in beneath, also marking the current section.
- **Header:** 97% white, sticky, gains a hairline and scrolled-header shadow on scroll. Mobile collapses to a steel WhatsApp icon button and a pill menu toggle whose two lines cross into an X; the menu is a white sheet with hairline-separated rows.
- **Breadcrumb:** small steel 560 links separated by small Strong Hairline dots; the current page in Graphite.

### FAQ
Rows between a strong top rule and hairline separators; the question in 650 turns steel on hover. A 1rem steel + on the right (two 2px bars) collapses to − as its vertical bar rotates flat when the row opens.

### Hours Dial and Steel Bands (signature)
The home's Location band and the internal pages' store block are the one Blued Steel band per page: white headline, On-Steel Mist address, the gold + on-steel button pair. The store block carries the hours dial (a 24-hour ring with the opening-hours arc in gold, a gold circular index at twelve, a white hand at São Paulo time) or a store photo. Open status uses a round dot: Aged Gold (gold on steel) when open, Closed Steel / Closed Mist when closed.

### Hero Dial (signature)
An enamel dial with a steel minute track, a gold circular index at twelve and gold circle tips on the hand, framing an exploded phone (back, board, glass) whose glass carries a single passing gleam.

### Line Art
Authored SVG drawings used where a service or brand has no photo cutout: 3px Blued Steel strokes with round joins, Tempered Steel and Shadowed Enamel fills. They depict the repair or the device form, never a manufacturer's logo.

### Footer
Parts-Tray Enamel with a hairline top; steel dial-label column heads.

## Do's and Don'ts

### Do:
- **Do** keep gold to indices: dial indices, hours arc, nav dots, handle and seam pin, focus rings, stars and status, and the one gold button on the steel band.
- **Do** use the round dot (`.dot` or `--dot-mask`) for every bullet, separator, status and position indicator.
- **Do** divide two white sections with a single 1px Hairline rule centred in the gap with no added space; let enamel and steel bands mark their own edges.
- **Do** set headings semi-condensed (82-88% width, 780-820 weight) and dial labels expanded (125%, 0.14em, uppercase).
- **Do** place product cutouts directly on white with the cutout drop; strip any alpha halo from the WebP.
- **Do** show only real reviews and real before/after work; render missing media as a quiet well and drop an internal-page gallery that has nothing to show.
- **Do** keep content surfaces shadowless at rest and use the steel-tinted hover lift on response.
- **Do** turn every motion off under reduced motion; content stays visible without JavaScript.

### Don't:
- **Don't** fill panels, sections or backgrounds with gold.
- **Don't** add a second full-bleed steel band to a page.
- **Don't** reintroduce diamond or balloon-shaped markers; the diamond belongs to the logo alone.
- **Don't** put a tick track or ornament between sections, or a rule at a band change.
- **Don't** put an enamel well, tinted background or radial glow behind a cutout.
- **Don't** place a dial label as a decorative line above a section headline; labels name data groups.
- **Don't** invent reviews, rating badges, photos or counts to fill a slot, and don't let an empty frame pose as real media.
- **Don't** use manufacturer logos where line art stands for a brand.
- **Don't** use Signal Red for anything but form errors.
- **Don't** use hard offset shadows; on white and enamel, shadows are diffuse and tinted with steel (the map on the steel band and the play disc over video are the only darker drops).
