# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + TypeScript (pinned by the briefing). Plain CSS with custom properties, no UI framework; `@astrojs/sitemap` is the only integration. No domain yet: the site URL lives in `src/data/business.ts` and `astro.config.mjs`.

## Users

People in Sorocaba (SP), mostly on a phone, whose phone broke or misbehaves and who want to talk to a real repair shop nearby, fast. Many arrive from Google searches like "conserto de celular Sorocaba" or from the Google Business Profile, and decide in seconds whether to message on WhatsApp.

## Product Purpose

Website of Império Eletrônicos Sorocaba, a phone repair / technical assistance shop with a physical store (Box 5) at R. Nicarágua, 156, Vila Barcelona. Success = WhatsApp conversations started, store visits ("Como chegar"), and local search authority for phone repair in Sorocaba. It is also the base for future per-service pages.

## Positioning

A real, physical shop in Vila Barcelona, Sorocaba, with a 5.0 Google rating (21 reviews), reachable directly on WhatsApp. That presence and reputation are the only claims the site makes today.

## Operating Context

Visitors come from Google Search / Maps and Instagram, on mobile, often mid-problem. The conversion channel is WhatsApp (`wa.me/5515996155767`) with a prefilled message; secondary is directions via Google Maps. Opening hours: Mon–Fri 10:00–19:00, closed Sat/Sun.

## Capabilities and Constraints

- All business data centralized in `src/data/business.ts`; services in `src/data/services.ts`.
- Confirmed generic service categories only: assistência técnica de celulares, conserto e manutenção, diagnóstico de aparelhos.
- The store is also associated on Google with electronics accessories; the product line is NOT confirmed.
- Undecided / not yet provided: final service list, differentiators, team/store story, photos and videos, real review texts, product catalog, domain, payment methods.

## Brand Commitments

- Name: Império Eletrônicos Sorocaba.
- Logo: teal crown outline with a concave gold diamond in the center and a gold bar beneath (`Coroa Teal com Diamante Dourado.png`).
- Palette pinned by the client: blue #195B77 (authority, structure), gold #FDC528 (accent), white #FFFFFF (dominant), text #0B1116, secondary ground #F5F7F8. The site must not turn entirely blue.
- The crown inspires discrete graphic elements; the gold diamond is the small-detail language (bullets, markers, separators, hovers, micro-interactions), without excess.
- Must not look like a generic AI template or a clone of Império das Telas (technical reference only). No emoji, no purposeless icons, no purple/blue SaaS gradients, no lorem ipsum, no filler marketing phrases.

## Evidence on Hand

- Google rating 5.0 with 21 reviews (real, may be shown and used in JSON-LD aggregateRating).
- Google Maps place: https://maps.app.goo.gl/mywmYnCeW4EC3Jdp7 (coords -23.5185916, -47.4391035).
- Instagram: https://www.instagram.com/imperioeletronicossorocaba
- No photos, videos, testimonials, service specifics, prices, warranty, repair times, years in business, brands served, certifications. None of these may be invented; the site holds structure for them.

## Product Principles

1. Every claim on the page is a verifiable fact; missing content becomes prepared structure, never filler.
2. WhatsApp is always one tap away, on every viewport.
3. Physical presence (address, map, hours) is proof, shown prominently.
4. Mobile first, extremely fast, minimal JS.
5. One source of truth for business data.

## Accessibility & Inclusion

Semantic HTML, strong contrast, visible focus, keyboard-navigable accessible mobile menu, alt text, `prefers-reduced-motion` respected.
