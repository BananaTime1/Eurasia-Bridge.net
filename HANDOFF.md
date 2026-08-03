# Eurasia Bridge — project handoff

**For a fresh Claude Code session:** read this file + `SETUP.md`, then continue. Everything below is current as of the last session.

## What this is
Marketing website for **Eurasia Bridge (Евразия Мост / پل اوراسیا)** — a trading & logistics **intermediary** on the **Iran ⇄ Kazakhstan / CIS** corridor (sourcing, transport, customs, payment, barter, "supplier to shelf"). Kazakhstan-based; **Russian is the default language**, English + Persian (RTL) also supported. Client is non-technical; his father (business-savvy) reviews it.

## Stack & how to run
- **Static multi-page site, vanilla JS, no build step.** Just HTML/CSS/JS files in this folder.
- Open `index.html` in a **real browser** (Chrome/Safari) to see it properly. The in-app preview pane renders `file://` as a flattened static snapshot — the globe spin, scroll animation, video autoplay, and live news only fully work in a real browser.
- **⚠️ Preview-cache gotcha:** the preview pane pins `app.js?v=N` / `styles.css?v=N` after first load. **Whenever you edit app.js or styles.css, bump the `?v=` number** in the `<script>`/`<link>` of the HTML pages (currently `app.js?v=13`, `styles.css?v=6`) or the pane serves stale code. Use `sed` across pages.

## Files
- `index.html` — home: **video hero** (media/corridor-truck-eu.mp4) + big bold headline + stat row → goods marquee → two directions → **globe "network" section** → **live news** → CTA (port video) → footer.
- `routes.html` — 3 crossing methods (rail/ferry/road) with interactive globe explorer + fly-to-route; six services.
- `listings.html` — **Cargo catalog** (cards from seed or live Sheet).
- `contact.html` — enquiry form (validates, shows success, POSTs to Google Sheet if configured; prefills `?cargo=` from listings).
- `app.js` — everything: i18n dict `T` (en/ru/fa), `applyLang`, the canvas `Globe` class, route explorer, listings, news, contact form, mobile nav, transitions.
- `styles.css` — design system (amber accent `#E89A3C`, Manrope display + Onest body + Vazirmatn FA + IBM Plex Mono).
- `geo.js` — embedded region coastlines for the globe.
- `google-sheet.gs` — Apps Script for the Sheet backend (form intake + listings feed).
- `SETUP.md` / `README.md` — user-facing setup + overview.
- `hero-concept.html` — throwaway demo (Oswald "full-B" option), not linked; ignore/delete.
- `media/` — corridor-truck-eu.mp4 (hero), port-containers.mp4 (CTA band).

## Design direction ("Direction B blend", locked)
Photographic + bold, but keeps our craft. **Amber** accent (between gold & orange). **Manrope 800** headlines (friendly-bold, not serif). Real logistics video hero + **stat row** (like First Transport reference). The **globe stays** but as a "network" section, not the hero. Palette dark warm-black; RU default.

## Where to change common things
- **Text/translations:** the `T` object at top of `app.js` (keys via `data-i18n="..."` in HTML). RU is default (`let LANG = ... || "ru"`).
- **Cargo listings:** `LISTINGS_SEED` array in app.js (dir/en/ru/hs/origin/moq/barter). Live version comes from the Sheet "Listings" tab if `LISTINGS_ENDPOINT` is set.
- **Globe look/behaviour:** `class Globe` in app.js; instances created in the `DOMContentLoaded` at the bottom (home network globe, routes explorer globe). Just reimagined it (halo + glossy sphere + glowing amber arcs, removed graticule).
- **Backend endpoints:** `SHEET_ENDPOINT` (form → Sheet) and `LISTINGS_ENDPOINT` (Sheet → cargo list), both `""` near top of app.js — paste the Apps Script `/exec` URL there once deployed.
- **News query/source:** `initNews()` in app.js (Google News RSS via allorigins.win proxy — works only when hosted, not file://).

## ✅ Done
Direction B site (video hero, amber, Manrope, RU default), routes/globe explorer, cargo listings page (+ Cargo nav), live news section, mobile burger menu, WCAG focus/contrast, meta/OG/favicon, mailto:/tel:, contact form (validation + success + Sheet POST wired), reimagined globe. Git: repo initialised in this folder, ~3 commits.

## ⏳ PENDING — pick up here
1. **Truck hero clip** — current one (media/corridor-truck-eu.mp4) is a genuine European cab-over per the client's spec, but the stock scene is cluttered (roadside flags, tropical). **The client said he "wanted to say something about the truck" — ask him what, before swapping.** He wants European cab-over, NOT American, no visible logos; a clean steppe/open-road clip would be ideal.
2. **Google Sheet backend** — client is deploying the Apps Script (`google-sheet.gs`). When he sends the Web App `/exec` URL: paste it into **both** `SHEET_ENDPOINT` and `LISTINGS_ENDPOINT` in app.js, bump cache `?v=`, re-zip. He also wanted the option of **email-on-new-lead** — add a `MailApp.sendEmail(...)` line to `doPost` in google-sheet.gs pointing at an address he chooses.
3. **GitHub + hosting** — repo is committed locally but **no `gh` CLI on the machine** and no auth, so it hasn't been pushed. He needs to create the repo on github.com and push manually (steps in SETUP.md), then enable GitHub Pages OR use Netlify Drop. **Hosting is required for the news feed to work.**
4. **Domain** — he's choosing one. Recommended: **`.kz`** (eurasia-bridge.kz — his market + matches the site) as primary, plus **`eurasiabridges.com`** (€12) for international. Once decided, **update the email + all references** (site currently uses `eurasia-bridge.kz` / `enquiry@eurasia-bridge.kz`).
5. **Native-speaker pass on RU + FA copy** — all non-English text is AI draft; must be reviewed before real launch.

## Open questions for the client
- What did he want to say about the truck clip?
- Final domain?
- Where should new-lead notification emails go?
