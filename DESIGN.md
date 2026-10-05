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
  badge:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.9rem 0.4rem 0.7rem"
    height: "2.5rem"
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
    backgroundColor: "{colors.enamel}"
    rounded: "{rounded.sm}"
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

The site is read as a watch face. White enamel is the ground; blued steel draws the structure (headline accents, rules, ticks, line art, the one dark band); gold appears the way indices do on a dial: small, exact, few. Dividers are railroad minute tracks, markers are the concave diamond from the logo, and the signature figures (the hero dial and the live hours dial) are real dials with a hand, a minute track and a gold index at twelve. Services and brands are drawn, not photographed: authored steel line art with a gold index, sitting in small enamel wells.

Density is calm and direct. Sections breathe on a fluid section rhythm, content sits in a 76rem column, and section heads are a single headline with no stacked label and no right-hand lead. Grouped content sits on white cards or in enamel panels with a hairline. Media that does not exist yet renders as a short, quiet 16:9 well drawn in the dial's own grammar, never a fabricated photo or card; an internal-page gallery with nothing in it is simply absent. Motion is watchmaker's motion: ticks drawing in, a slow hand sweep, a single gleam crossing glass, diamonds turning like a crown; all of it collapses under reduced motion.

**Key Characteristics:**
- White and enamel ground, blued-steel structure, gold reserved for indices and the single gold CTA on the steel band.
- One variable family, Archivo, used on two axes: semi-condensed heavy for headlines, expanded uppercase for dial labels.
- Railroad minute-track ticks as dividers between white sections, card crowns and step tracks.
- The concave four-point diamond as the only bullet, marker, separator and active indicator.
- Authored steel line art (with a gold index) for every service and brand.
- Soft, steel-tinted shadows that appear on response (hover, scroll), never at rest on content.
- Exactly one full-bleed blued-steel band per page (Location on the home, the store block on internal pages).

## Colors

A cool, nearly monochrome blued-steel system on white enamel with one warm metal accent.

### Primary
- **Blued Steel** (steel): the structural color. Primary buttons, link and arrow-link text, icons, line-art strokes, the steel band, minute-track ticks (at 30-85% alpha), dial strokes, the empty-media seam and play disc, the select chevron, dial-label list heads, `accent-color`, the hover fill of option chips.
- **Tempered Steel** (steel-deep): hover state of primary buttons; line-art shading; the video backdrop; the shadow tint (`rgb(15 65 87 / a)`) for every soft shadow.
- **Night Steel** (steel-night): reserved deepest steel for figures and gradients.

### Secondary
- **Index Gold** (gold): indices only. Concave diamond markers and separators, the dial's twelve-o'clock index, the hours arc, line-art indices, the logo bar under the hero's city name, nav hover/active diamonds, the empty-media seam pin, focus rings (and the 55% gold field-focus halo), text selection, the icon on a hovered option chip, and the one gold "Como chegar" button on the steel band.
- **Bright Gold** (gold-bright): hover state of the gold button only.
- **Aged Gold** (gold-deep): gold where it must hold up on white at small size: review stars, the open-status diamond, the gold tick sweep crowning a hovered service card, an opened FAQ diamond.

### Neutral
- **White Enamel** (white): page ground, header, service and brand cards, inputs, option chips, badges, media frames inside enamel bands.
- **Parts-Tray Enamel** (enamel): the before/after and reviews bands, form and picker panels, art wells, empty media frames, the "other brand" card, the footer.
- **Shadowed Enamel** (enamel-2): secondary enamel inside figures and line art.
- **Dial Ink** (ink): headings and primary text.
- **Graphite** (ink-2): leads, summaries, FAQ answers, nav links at rest, footer text, the card WhatsApp link at rest.
- **Hairline** (line): 1px borders of cards, panels, media frames, band edges, FAQ rows, footer rules.
- **Strong Hairline** (line-strong): ghost-button, input, chip and link-chip borders, the FAQ top rule and closed FAQ diamond, hovered card border, scrollbar thumb.
- **On-Steel White / On-Steel Mist** (on-steel, on-steel-2): headline and body text on the steel band.

### Functional
- **Signal Red** (error): form errors only, as the invalid-field border and the inline error line beneath it. Never decorative.
- **Closed Steel / Closed Mist** (status-closed, status-closed-on-steel): the open-status diamond when the store is closed, on white and on the steel band respectively. The status is always also stated in text.

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
- **Title** (780, fluid 1.2-1.4rem, width 86%): card, step and item H3s; brand names at 1.25rem, width 88%.
- **Lead** (420, fluid 1.0625-1.25rem, line-height 1.5, Graphite): the one supporting sentence under a hero H1, 36-40ch.
- **Body** (420, 1.0625rem, line-height 1.6): running text, pretty wrapping. Action text and labels at 600-650.
- **Small** (420-560, 0.875-0.9375rem): card summaries, breadcrumbs, field labels and errors, status, footer.
- **Label** (620, 0.75rem, 0.14em tracking, uppercase, width 125%): dial labels naming a data group (Horário, footer column heads, a page-hero list head, link-chip group heads, before/after legends; step numbers at 0.8rem).
- **Micro label** (620, 0.68rem, 0.12-0.16em, uppercase, width 125%): legends inside a media frame only (the ANTES / DEPOIS tags over a photo, "Vídeo em breve").

### Named Rules
**The Two Axes Rule.** Hierarchy is set by width as much as size: headings go narrower (82-88%), labels go wider (125%). Never set a heading at default width or a label condensed.

**The Label Names Data Rule.** A dial label names the data group it sits on (hours, contact, a list, a fact term). It is never a decorative line stacked above a section headline.

## Layout

A single centered column, max 76rem plus fluid gutters (1-2.5rem). Sections pad on a fluid rhythm (3.25-7rem). Section heads are a lone H2 above content; where an action belongs to the section (before/after) it sits on the same row, wrapping beneath on small screens. The home hero is one column on mobile, copy-and-dial from 900px; the internal page hero is copy plus a flat side card at `1.15fr / 0.85fr` from 960px. Service cards run 1 / 2 / 3 columns at 640 / 1024px (horizontal art-left cards below 1024px, stacked above); brand cards run 2 columns (the "other" card spanning the row) then 5 at 768px. Media rails are a horizontal snap-scroll row on mobile (cards at min(72%, 17rem), bleeding to the screen edge) and a 2-4 column grid from 768px. How-it-works is a vertical step track on mobile and four columns on a horizontal minute track from 900px. Form, FAQ and store intro split copy and content at 1024px. The header is sticky at 4.25rem; on mobile a fixed WhatsApp bar sits at the bottom. Touch targets hold 2.5-3.6rem minimum heights.

### Named Rules
**The Divider Rule.** The minute track (a 1.25rem rail of 1px ticks every 12px with 2px majors every 60px, diamond at center) appears only between two white sections, and adds no space: it sits in a container whose negative block margins equal half the section rhythm, centring it in the gap. A band change (into an enamel band or the steel band) is marked by the band's own edge, never by a track.

## Elevation & Depth

Flat at rest, lifted on response. Depth is conveyed first by tone (white over enamel, enamel over white) and hairlines; shadows are soft, steel-tinted and diffuse, applied when something is hovered or the page scrolls.

### Shadow Vocabulary
- **Resting lift** (`0 1px 2px rgb(15 65 87 / 0.06), 0 4px 12px rgb(15 65 87 / 0.06)`): available token for quiet separation.
- **Hover lift** (`0 2px 4px rgb(15 65 87 / 0.06), 0 14px 32px -8px rgb(15 65 87 / 0.18)`): hovered buttons, service and brand cards (paired with a 1-2px rise), and hero media.
- **Scrolled header** (`0 6px 20px -14px rgb(15 65 87 / 0.35)`): sticky header once scrolled.
- **Figure drop** (`drop-shadow(0 30px 40px rgb(15 65 87 / 0.14))`): the hero dial.
- **Play disc** (`0 6px 20px rgb(11 17 22 / 0.3)`): the white play button floating over a real video.

### Named Rules
**The Response Rule.** Content surfaces carry no shadow at rest. A shadow is the answer to hover, focus or scroll.

## Shapes

Generously rounded containers (1.25rem) with tighter inner frames and inputs (0.75rem); the form and picker panels step up to 1.5rem. All buttons, badges, option chips, link chips and icon buttons are full pills. Focus outlines round at 6px; the logo links round at 8px so the ring hugs the mark. Borders are 1px hairlines on containers and 1.5px on buttons, chips and inputs. The recurring silhouette is the concave four-point diamond (an SVG mask, `--diamond-mask`), used at 0.55-1.3rem as bullet, divider jewel, breadcrumb separator, seam pin, step gem, FAQ mark, nav indicator and status dot; it rotates 90 degrees on hover or open as a crown turning. Circles appear only as dials and play discs.

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
- **Badge:** white pill, hairline border, small Graphite text with bold ink figure, steel icon (aged-gold stars); border goes steel on hover.

### Cards / Containers
- **Service card:** white, 1.25rem radius, hairline border, crowned by a minute-track tick strip. An enamel art well holds the service's line art (square at the left on mobile, 16:10 on top from 1024px). Title, one Graphite line, then "Ver detalhes" (steel, arrow) and a Graphite WhatsApp link with a steel icon. The whole card links to the service page; the WhatsApp link sits above that hit area. Hover/focus-within: strong hairline, hover lift, 2px rise, gold ticks sweep across the crown, the art scales and tilts. Keyboard focus outlines the whole card in gold.
- **Brand card:** white, centred line art, brand name, a small steel "Ver" line with arrow; same hover lift and an art tilt. The "other brand" card is enamel and opens WhatsApp.
- **Panel:** enamel, hairline, 1.5rem radius, fluid padding; holds the quote form and the option picker.
- **Page-hero side card:** flat white card, hairline, 1.25rem radius: an enamel art well, a dial-label list head and hairline-ruled rows each led by a diamond (rows link onward with a steel arrow when a page exists).

### Media
- **Media card:** an enamel frame with hairline border and 1.25rem radius, a 4:5 portrait when real media exists (photo, video or before/after slider), a diamond-led caption beneath. Photos ease to 1.03 scale on hover. Inside an enamel band the frame turns white.
- **Empty media:** a short 16:9 quiet well on a 12px steel dot grid. The *seam* variant splits ANTES | DEPOIS legends across a 2px steel seam pinned by a gold diamond (the diamond turns on hover) and fills before/after slots; the *video* variant centres a small white play disc with a steel ring above the micro label "Vídeo em breve" and fills store-video slots.
- **Media rail:** horizontal snap-scroll row on mobile, grid on desktop. On internal pages the gallery section is omitted entirely when it has no media.
- **Video:** Tempered Steel backdrop, a white play disc that fades once playing.

### Inputs / Fields
- **Style:** white, 1.5px Strong Hairline border, 0.75rem radius, min-height 3.1rem, 1rem text; small 650 labels above. Selects carry a steel chevron in place of the native arrow; textareas do not resize.
- **Focus:** steel border plus a 3px 55% gold halo.
- **Error:** Signal Red border and a Signal Red 560 line beneath the field, linked through `aria-describedby`.

### Navigation
- **Desktop:** Graphite links (0.95rem, 560) at 2.75rem height; hover turns ink and a small gold diamond scales in beneath, also marking the current section.
- **Header:** 97% white, sticky, gains a hairline and scrolled-header shadow on scroll. Mobile collapses to a steel WhatsApp icon button and a pill menu toggle whose two lines cross into an X; the menu is a white sheet with hairline-separated rows.
- **Breadcrumb:** small steel 560 links separated by small gold diamonds; the current page in Graphite.

### Minute Track (signature)
Two tick rails flanking a gold diamond; on reveal the rails draw outward and the diamond turns in. A dark variant uses white ticks on steel. Placed only per the Divider Rule.

### How It Works (signature)
Numbered steps on a minute track: a vertical tick rail with a gold diamond per step on mobile, a horizontal major/minor rail above four columns from 900px. Step numbers are steel expanded labels with tabular figures.

### FAQ
Rows between a strong top rule and hairline separators; the question in 650 turns steel on hover. A Strong Hairline diamond on the right turns 90 degrees, grows slightly and gilds to Aged Gold when the row opens.

### Hours Dial and Steel Bands (signature)
The home's Location band and the internal pages' store block are the one Blued Steel band per page: white headline, On-Steel Mist address, the gold + on-steel button pair. The store block carries the hours dial (a 24-hour ring with the opening-hours arc in gold, a white hand at São Paulo time tipped with a gold diamond) or a store photo. Open status uses a diamond dot: Aged Gold (gold on steel) when open, Closed Steel / Closed Mist when closed.

### Line Art
Authored SVG drawings for each service and brand: 3px Blued Steel strokes with round joins, Tempered Steel and Shadowed Enamel fills, one gold diamond index. They depict the repair or the device form, never a manufacturer's logo.

### Footer
Parts-Tray Enamel with a hairline top; steel dial-label column heads each led by a diamond.

## Do's and Don'ts

### Do:
- **Do** keep gold to indices: diamonds, dial index, hours arc, line-art indices, focus rings, nav markers, and the one gold button on the steel band.
- **Do** place the minute track only between two white sections, centred in the gap with no added space; let enamel and steel bands mark their own edges.
- **Do** set headings semi-condensed (82-88% width, 780-820 weight) and dial labels expanded (125%, 0.14em, uppercase).
- **Do** render missing media as a short 16:9 quiet well (seam for before/after, play disc for video), and drop an internal-page gallery that has nothing to show.
- **Do** draw services and brands as steel line art with one gold index, inside an enamel well.
- **Do** keep content surfaces shadowless at rest and use the steel-tinted hover lift on response.
- **Do** turn every motion off under reduced motion; content stays visible without JavaScript.

### Don't:
- **Don't** fill panels, sections or backgrounds with gold.
- **Don't** add a second full-bleed steel band to a page.
- **Don't** put a minute track at a band change, or add space around it between sections.
- **Don't** place a dial label as a decorative line above a section headline; labels name data groups.
- **Don't** invent cards, reviews, photos or counts to fill an empty slot, and don't let an empty frame take a full portrait's height.
- **Don't** use bullets, dots or icons where the concave diamond is the marker.
- **Don't** use manufacturer logos where the line art stands for a brand.
- **Don't** use Signal Red for anything but form errors.
- **Don't** use hard offset shadows; on white and enamel, shadows are diffuse and tinted with steel (the map on the steel band and the play disc over video are the only darker drops).
