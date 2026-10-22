# CHSite — Barrel Storm Website

**Repo:** https://github.com/kotz96-lab/CHSite
**Game repo (sibling):** `../barrel-shooter` — source of art + game facts
**Play Store:** https://play.google.com/store/apps/details?id=com.shaicoolgames.barrel_storm
**Tech:** Static site — Vite/Astro + GSAP (ScrollTrigger) + Lenis, deploy Vercel
**Status:** Scaffolded (docs only)
**Domain:** TBD

## Read First
1. `DESIGN_BRIEF.md` — visual language, sections, banned tells (source of truth)
2. `refs/` — Riot / Blizzard reference screenshots (local only, gitignored)
3. `project/CURRENT_FOCUS.md`

## Rules
- Epic and cinematic. Art does the talking. Must not look AI-generated (see banned list in brief).
- Copy explains how the game plays + shows cool stuff. No "fake ads" pitch.
- Game facts come from `../barrel-shooter/lib/models/level_config.dart` — don't invent worlds/bosses.
- Commit after every completed section.

## Quick Commands (once code exists)
```bash
npm install
npm run dev
npm run build
git add -A && git commit -m "type: description" && git push
```
