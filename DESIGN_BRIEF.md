# Barrel Storm Website — Design Brief

**Goal:** An epic, cinematic one-page site for Barrel Storm. Riot/Blizzard-grade, not a template.
**Primary CTA:** Get it on Google Play — https://play.google.com/store/apps/details?id=com.shaicoolgames.barrel_storm
**Tone:** Loud, confident, a little funny (the game is toy weapons vs. zombies). Explain *how it plays* and show the cool stuff. **No "the game the ads promised" angle** — rejected as boring.

---

## Visual Language (pulled from refs/)

| Ref | What we steal |
|-----|---------------|
| `riot-hero.png` | Full-bleed key art hero, logo-as-image (not text), short punchy headline + one fat pill CTA with an icon. Nav floats over the art. |
| `riot-slanted-game-cards.png` | **Skewed/slanted vertical cards**, each a full-height character art panel with logo on top. → Our 6 bosses or 6 worlds. Hover = card widens, others compress. |
| `riot-news-grid.png` | One big hero tile + stacked side tiles. Thin colored frame around featured art. → Gameplay video + clip tiles. |
| `blizzard-zone-tabs.png` | Section title + text tabs with underline, full-width painted environment behind. Arrow buttons on the sides. → "The Worlds" section. |
| `blizzard-tab-carousel.png` | Tabs → left text / right **framed image** (hand-drawn border inset), dots under. → "How it works" steps. |
| `blizzard-accordion-framed.png` | Accordion on left, framed media on right that swaps per item. → Weapons/gadgets arsenal. |

**Shared DNA:** dark near-black backgrounds tinted toward the section's color (purple, brown, red); art does the talking; generous whitespace; framed media with ornamental borders; tabs with thick colored underline; big circular arrow buttons.

## Our Twist (what makes it not generic)
- **Palette from the game icon:** blood red `#C8102E`-ish bursts, hazard yellow (the nail gun), hoodie cyan as accent, zombie green for danger. Dark base `#0E0A0A`.
- **Comic-ink texture:** halftone/spatter overlays, thick black outlines on frames (matches the cartoon art), not frosted glass.
- **Type:** condensed heavy display face for headlines (e.g. a grunge/impact-style display font), clean humanist for body. NOT Inter. Chosen at build time from reference, not by banned-list.
- **Motion:** GSAP ScrollTrigger + Lenis. Pinned sections, scrubbed parallax layers, zombie hands rising from the bottom edge on scroll, screen-shake on the "Wall" moment.

## Banned (AI-site tells)
Frosted glass cards · purple-to-blue gradient blobs · three identical icon feature cards · centered-everything symmetric layout · emoji as icons · lorem ipsum · stock images.

---

## Page Sections (draft)

1. **Hero** — Full-bleed animated key art (hoodie kid + horde), layered parallax (bg burst / horde / hero / foreground hands). Logo, one line ("Six worlds. One hoodie. Infinite zombies."-style, TBD), Google Play CTA, "Watch Trailer" pill.
2. **Trailer / Gameplay** — Riot news-grid layout: big gameplay video + 3 clip tiles (boss fight, horde wall, upgrade explosion).
3. **How It Plays** — Blizzard tab carousel, 4 steps: *Move & auto-fire* → *Smash cages for gear* → *Survive the horde* → *Beat the boss*. Each with a framed gameplay clip/gif.
4. **The Worlds** — Blizzard zone tabs: Park · Mall · Construction Yard · Beach · Theater · Museum. Full-width painted bg per world, swapping with a wipe.
5. **The Bosses** — Riot slanted cards ×6: Groundskeeper, Zombie Claus, Storm Core, Kraken, Ballerina, T-Rex. Hover expands.
6. **Arsenal** — Blizzard accordion: weapon/gadget categories (blasters, gadgets, allies, upgrades) with framed media using the existing item icons.
7. **Final CTA** — Huge red burst, the hero standing on the crate, Google Play badge. Footer.

## Assets
- **Existing (from `barrel-shooter/assets/images`):** `game_icon.png` (key art reference), `main_menu.png`, per-arc `map.png`/`arena.png`, boss sprites, item icons (`icon_*.png`), player sprites.
- **To generate:** widescreen hero key art (layered PNGs), 6 world backgrounds in painted style, 6 boss portrait panels (vertical, Riot-card ratio).
- **From user:** gameplay footage (screen recordings).

## Tech
Static. Vite (or Astro) + GSAP (ScrollTrigger, SplitText) + Lenis. Deploy on Vercel. Domain TBD.
