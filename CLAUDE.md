# CHSite — Barrel Storm Website

**Repo:** https://github.com/kotz96-lab/CHSite
**Game repo (sibling):** `../barrel-shooter` — source of art + game facts
**Play Store:** https://play.google.com/store/apps/details?id=com.shaicoolgames.barrel_storm
**Tech:** Static site — Vite + vanilla JS + GSAP (ScrollTrigger) + Lenis, deploy Vercel
**Status:** Built with placeholder art — waiting on final art + footage
**Domain:** TBD

## Read First
1. `DESIGN_BRIEF.md` — visual language, sections, banned tells (source of truth)
2. `refs/` — Riot / Blizzard reference screenshots (local only, gitignored)
3. `ART_PROMPTS.md` — every art slot, its status, and the prompt to generate it
4. `project/CURRENT_FOCUS.md`

## Structure
- `index.html` — page markup (static sections)
- `src/content.js` — all game facts + copy for rendered sections (worlds, bosses, steps, arsenal)
- `src/sections/*.js` — one module per section; `tabs.js` is the shared tab controller
- `src/styles/*.css` — tokens + one file per section
- `public/img/` — placeholder art, named by slot id
- `tools/prep_placeholders.py` — regenerates placeholder art from the game repo
- Add `?slots` to the URL to label every art placeholder

## Rules
- Epic and cinematic. Art does the talking. Must not look AI-generated (see banned list in brief).
- Copy explains how the game plays + shows cool stuff. No "fake ads" pitch.
- Game facts come from `../barrel-shooter/lib/models/level_config.dart` — don't invent worlds/bosses.
- Commit after every completed section.

## Quick Commands
```bash
npm install
npm run dev
npm run build
git add -A && git commit -m "type: description" && git push
```
