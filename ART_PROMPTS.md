# Art Plan & ChatGPT Prompts

Every placeholder on the site has a **slot id**. Open the site with `?slots` (e.g. `localhost:5173/?slots`) to see each one labeled in place.

**Status key:** 🟡 placeholder (game art stand-in) · ⚪ empty (CSS stand-in) · 🎬 needs real footage · ✅ final

**Where files go:** `public/img/<slot-id>.webp` (convert PNG → WebP, quality ~80). Transparent layers stay PNG→WebP with alpha.

---

## How to use these prompts

1. Start a fresh ChatGPT image chat.
2. **Attach `barrel-shooter/assets/images/game_icon.png`** as the style reference. Attach the specific boss/world sprite too when a prompt says so.
3. Paste the **Style Anchor** below, then the slot prompt.
4. For transparent layers, ask: *"transparent background PNG"*. If it gives a background anyway, remove it after.
5. Generate at the largest size offered, then crop to the listed ratio.

### Style Anchor (paste before every prompt)

> Match the attached reference image's art style exactly: bold cartoon illustration, thick black ink outlines, chunky stylized proportions, gritty painted texture with paint spatter and scuffs, saturated colors, dramatic low-angle lighting. Palette: blood red (#d7182a), hazard yellow (#ffc21a), hoodie cyan (#19b8ff), zombie green (#7fc243) on scorched near-black (#0d0909). Mobile game key art quality, cinematic composition. No text, no letters, no logos, no UI, no watermark.

---

## 1. Hero (`#top`) — the most important art on the site

The hero is **4 stacked layers** that move at different speeds (parallax). Each layer must be a separate image. Keep the same lighting direction (warm light from upper-center) across all four.

### `hero-bg` 🟡 — Sky / backdrop layer
- **Size:** 2560×1440 (16:9), opaque. **Now:** `main_menu.png` burst.
- **Must:** empty left 45% (headline sits there). No characters.

> Wide cinematic backdrop for a zombie apocalypse game title screen. A ruined suburban town skyline at dusk under an explosive blood-red and orange sunburst sky with comic-style radiating light rays from upper center. Silhouettes of a park ferris wheel, a shopping mall sign, a construction crane, a beach pier, a theater marquee and a museum dome along the horizon. Smoke columns, floating embers, ash. Left side of the frame darker and less detailed for text overlay. 16:9.

### `hero-horde` ⚪ — Horde wall (mid layer)
- **Size:** 2560×900, **transparent**. Bottom-anchored. **Now:** CSS black ridge.

> A massive wall of cartoon zombie silhouettes shambling toward the viewer, shown from the waist up, packed shoulder to shoulder across the entire width. Mostly dark backlit shapes with rim light in orange and red, a few glowing eyes, raised arms and grasping hands. Mix of zombie types: walkers, a hulking tank zombie, a zombie in a hard hat, a zombie Santa hat, a zombie in a lifeguard shirt. Transparent background PNG, wide banner, bottom edge flat.

### `hero-char` 🟡 — The hoodie kid (front layer)
- **Size:** 1600×1800 (portrait-ish), **transparent**. **Now:** `game_icon.png` with feathered edge.
- **Attach:** `game_icon.png` + `player_win.png`.

> Full body hero shot of the exact same character from the reference: a young survivor in a dark charcoal hoodie with bright cyan trim and cyan zip, brown hair, bandage on cheek, fierce determined expression, leather utility belt and pouches, fingerless brown gloves. He stands in a heroic low-angle pose with one boot planted on a wooden crate, aiming a huge yellow-and-black industrial nail gun forward toward the viewer. Strong red rim light from behind, warm key light from above. Transparent background PNG, character only, no hands or zombies around him.

### `hero-hands` ⚪ — Foreground zombie hands
- **Size:** 2560×700, **transparent**. Bottom-anchored. **Now:** CSS floor fade.

> Several green rotting cartoon zombie hands and forearms bursting up from cracked ground and rubble along the bottom edge of the frame, grasping upward, at different heights, largest at the far left and far right corners, smaller toward the center leaving the middle mostly clear. Thick ink outlines, dirt chunks and debris flying. Transparent background PNG, wide banner, bottom edge flat.

### `logo` ⚪ — BARREL STORM wordmark
- **Size:** 1800×900, **transparent**. **Now:** styled live text (Anton font).
- **Note:** AI image models mangle letters. Generate it, but expect to clean it up in a vector tool, or keep the live-text version.

> Game logo wordmark reading exactly "BARREL STORM" in two stacked lines, "BARREL" in cream white and "STORM" in blood red, extremely heavy condensed blocky letters, slightly tilted upward to the right, thick black outline and hard black drop shadow, chipped and scratched metal texture, a wooden barrel bursting apart behind the letters with nails and sparks flying out. Transparent background PNG. Spell it exactly: B-A-R-R-E-L S-T-O-R-M.

### `badge-google-play` — Official badge
Don't generate. Download the official badge from Google's Partner Marketing Hub ("Get it on Google Play") and drop it in as SVG/PNG. Brand rules require the official artwork.

---

## 2. Gameplay (`#gameplay`) — 🎬 REAL FOOTAGE

These must be real gameplay. Players can tell. Record on the phone (landscape), trim to clip length, export MP4 (H.264) **and** a still frame for the poster.

| Slot | Length | What to capture |
|------|--------|-----------------|
| `video-trailer` | 45–75s | Edited sizzle: early waves → cage pops → level-ups → horde at wave 4 → boss → win screen. Fast cuts, music. |
| `video-boss` | 10–20s loop | A boss fight mid-phase. Zombie Claus or the Kraken read best on small tiles. |
| `video-horde` | 10–20s loop | The moment the belt breaks at wave 4 and the screen fills. |
| `video-build` | 10–20s loop | A late-run broken build: 4 gadgets + stacked add-ons, everything exploding. |

**Tips:** hide notifications (Do Not Disturb), max brightness, record at 60fps, then the site plays them muted + looped.

---

## 3. How It Plays (`#how`) — 🎬 short loops (or stills)

Same as above: real footage, 5–8s seamless loops, landscape. Stills are an OK fallback.

| Slot | Shows |
|------|-------|
| `clip-move` | Player sliding between lanes, nails auto-firing, early wave. |
| `clip-cages` | Shooting a cage open → gadget/ally appears; a level-up popup. |
| `clip-horde` | Wave 4 horde, screen packed. |
| `clip-boss` | Boss telegraphing an attack and the player avoiding it. |

---

## 4. The Run (`#run`)

### `run-bg` ⚪ — The Wall backdrop
- **Size:** 2560×1440, opaque, dark. **Now:** CSS animated red sunburst.
- **Note:** sits behind a giant outlined clock + "THE WALL" text. Must stay dark and low-detail in the center.

> Overhead-perspective view looking down a long road at an endless sea of cartoon zombies flooding toward the camera, packed edge to edge to the horizon, under a blood-red sky. Very dark overall, lit mostly by red rim light, the center of the frame darker and blurred for text overlay, detail concentrated at the edges. 16:9.

---

## 5. The Worlds (`#worlds`) — 6 environment paintings

- **Size:** 2560×1440 (16:9), opaque. **Now:** the in-game `map.png` (theater uses `arena.png`).
- **Composition rule for all 6:** side-view or 3/4 establishing shot (not top-down like the game maps), **center 40% kept calm** (title + text sit there), **top 25% dark** (tabs sit there). Zombies small in the distance, no hero.
- **Attach:** that world's `map.png` so props match.

### `world-park`
> Cinematic establishing shot of a suburban city park overrun by zombies at golden hour: autumn trees with orange and red leaves, winding dirt path, stone fountain, park benches, a riding lawn mower abandoned on the grass, scattered toy-like ticking bombs. Small cartoon zombies shambling in the distance. Warm amber light, long shadows. Calm open center for text, darker sky at top.

### `world-mall`
> Cinematic interior of an abandoned shopping mall after hours: pastel checker-tile floor, storefronts with striped awnings and broken glass, a food court, a dead escalator, flickering neon signs, a giant Christmas tree knocked over with scattered presents. Cartoon zombie shoppers emerging from stores in the distance. Teal and pink neon light against darkness. Calm open center for text.

### `world-construction`
> Cinematic construction yard at night: steel scaffolding, a tower crane, piles of dirt and rebar, hazard barriers with yellow-black stripes, floodlights, a crackling electric core machine with a "DANGER HIGH VOLTAGE" sign glowing in the background. Zombies in hard hats in the distance. Hazard yellow and electric blue light. Calm open center for text.

### `world-beach`
> Cinematic beach at sunset under siege: red-and-white striped umbrellas, a sandcastle, beach towels, palm trees, a broken pier, turquoise waves. Huge purple tentacles rising from the sea on the horizon. Small cartoon zombies in swimwear on the sand. Orange sunset with a cyan ocean. Calm open center for text.

### `world-theater`
> Cinematic interior of a grand old theater: deep red velvet curtains, a wooden stage lit by a single harsh spotlight, gilded balconies, empty seats, a cracked chandelier. Zombie audience silhouettes in the seats. Crimson and gold palette, dramatic theatrical lighting. Calm open center for text.

### `world-museum`
> Cinematic interior of a natural history museum at night: a towering T-rex skeleton in the main hall, Egyptian wing in the background with sarcophagi cracked open and glowing runes on an obelisk, marble checker floor, display cases. Mummies and zombies shambling in the distance. Cold moonlight through skylights plus green rune glow. Calm open center for text.

---

## 6. The Bosses (`#bosses`) — 6 tall card portraits

- **Size:** 1200×2000 (3:5 portrait), **transparent** (the card already paints a colored gradient behind). **Now:** in-game sprites.
- **Composition:** boss fills the top 75%, bottom 25% clear (name sits there). The card is skewed 8°, so keep important details away from the left and right edges.
- **Attach:** the boss's in-game sprite so the design matches exactly.

### `boss-groundskeeper` — attach `park/boss.png`
> Dramatic boss portrait of the exact character from the reference: a hulking green zombie groundskeeper in a straw hat and tan work shirt, chewing a cigar, hunched over the wheel of a blue riding lawn mower that is charging toward the viewer, grass clippings and sparks spraying from the blades. Menacing low angle. Transparent background PNG, vertical portrait, bottom quarter empty.

### `boss-zombie-claus` — attach `mall/boss1.png`
> Dramatic boss portrait of the exact character from the reference: a huge undead Santa Claus with pale purple skin, ragged red suit, snarling mouth, a bulging sack of presents slung over his shoulder with zombie arms reaching out of it. Menacing low angle, red and green rim light. Transparent background PNG, vertical portrait, bottom quarter empty.

### `boss-forklift` — attach `construction_site/boss1.png`
> Dramatic boss portrait of the exact character from the reference: a zombie construction worker in a cracked yellow hard hat driving a battered yellow forklift with a giant duct-taped multi-barrel minigun mounted on the forks, muzzle flashing, shell casings flying. Menacing low angle, hazard yellow light. Transparent background PNG, vertical portrait, bottom quarter empty.

### `boss-kraken` — attach `beach/boss.png`
> Dramatic boss portrait of the exact character from the reference: a giant purple cartoon kraken bursting up out of the waves, angry yellow eyes, huge fanged mouth, eight tentacles each ending in a glowing red-pink energy orb about to fire lasers, water exploding around it. Menacing low angle. Transparent background PNG, vertical portrait, bottom quarter empty.

### `boss-ballerina` — attach `theater/boss_idle.png`
> Dramatic boss portrait of the exact character from the reference: a pale undead ballerina with dark eye shadow and a bored, eerie expression, black bun, layered blood-red tutu, posed en pointe with arms raised in an arch, a harsh spotlight from above and a shockwave ring rippling out from her feet. Transparent background PNG, vertical portrait, bottom quarter empty.

### `boss-trex` — attach `museum/boss_idle.png`
> Dramatic boss portrait of the exact character from the reference: a reanimated T-rex fossil skeleton with glowing yellow eyes, roaring with jaws wide open, museum tag still hanging from its neck, bones held together by glowing rune energy, display-case glass shattering around it. Menacing low angle. Transparent background PNG, vertical portrait, bottom quarter empty.

---

## 7. Arsenal (`#arsenal`)

### `arsenal-gadgets`, `arsenal-addons` ✅
The in-game `icon_*.png` icons are already used. No new art needed.

### `arsenal-curses` ⚪ — 8 curse sigils
- **Size:** 512×512 each, **transparent**. **Now:** a red letter in a circle.
- Generate as one sheet (2 rows × 4) for consistency, then slice.

> A set of 8 game icons on a 4×2 grid, each a cursed sigil medallion: cracked dark iron disc with a glowing blood-red symbol, thick black outlines, dripping red energy. Symbols in order: 1 a dagger over a drop of blood, 2 a ghost hand on a shoulder, 3 a cracked crosshair at point-blank, 4 a crown made of roots and swamp vines, 5 a clenched iron fist, 6 an eye narrowed to a slit, 7 a skull exhaling a wisp of soul, 8 a heart with no eyes / blindfold. Transparent background PNG, evenly spaced, no text.

File names: `curse-blood-pact`, `curse-haunted`, `curse-point-blank`, `curse-swamp-king`, `curse-iron-will`, `curse-tunnel-vision`, `curse-soul-hunger`, `curse-fearless`.

### `arsenal-elites` ⚪ — 8 elite badges
- **Size:** 512×512 each, **transparent**. **Now:** a red letter in a circle.
- Each matches the elite's in-game tell (see `enemy.dart` render cues).

> A set of 8 game icons on a 4×2 grid, each a cartoon zombie head badge with a distinct elite marker, thick black outlines, bold colors: 1 gold crown (Captain), 2 red rage halo (Berserker), 3 pulsing green ring (Regenerator), 4 yellow danger pulse and lit fuse (Detonator), 5 translucent inverted-color ghost (Ghost), 6 green chevrons spiraling inward (Necromancer), 7 shimmering purple shield above the head (Telekinetic), 8 a small slingshot / ranged blob in hand (Shooter). Transparent background PNG, evenly spaced, no text.

File names: `elite-captain`, `elite-berserker`, `elite-regenerator`, `elite-detonator`, `elite-ghost`, `elite-necromancer`, `elite-telekinetic`, `elite-shooter`.

---

## 8. Final CTA (`.cta`)

### `cta-bg` 🟡 — Victory pose
- **Size:** 1600×1800, **transparent** character. **Now:** reuses `hero-char` over a CSS sunburst.
- **Attach:** `game_icon.png` + `player_win.png`.
- A *different pose* from the hero so the page doesn't repeat itself.

> The exact same hoodie character from the reference standing victorious on top of a pile of defeated cartoon zombies, nail gun resting on his shoulder, smirking, hoodie and clothes torn and dusty, one fist raised. Low heroic angle, strong backlight. Transparent background PNG, character and zombie pile only.

---

## 9. Social / SEO

### `og-image` — link preview (Discord, X, iMessage)
- **Size:** 1200×630, opaque. Composite after the hero layers exist: hero-bg + hero-char + logo. **No generation needed.**

---

## Priority order

1. `hero-char` + `hero-bg` (sets the whole look)
2. Gameplay footage (`video-*`, `clip-*`)
3. 6 boss portraits
4. 6 world paintings
5. `hero-horde`, `hero-hands`, `logo`
6. Curse + elite icon sheets, `cta-bg`, `run-bg`
