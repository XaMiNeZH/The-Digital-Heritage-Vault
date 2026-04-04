# Custodix Project Tracker

## Project Identity

- Project: `Custodix`
- Tagline: `When Technology Made Culture Fade — And How It Chose to Make It Right`
- Format: scroll-driven cinematic presentation website used as live presentation slides
- Team: `Group 6 · ENSET Mohammedia · 1ère GLSID`
- Stack: `Next.js 14`, `TypeScript`, `Tailwind CSS`, `Framer Motion`, `GSAP`, `React Three Fiber`

## Canonical Prompt And Source Material

- Primary build prompt: [build_prompt.md](/home/xaminezh/The-Digital-Heritage-Vault/build_prompt.md)
- Concept reference: [anqa_project_concept.md](/home/xaminezh/The-Digital-Heritage-Vault/anqa_project_concept.md)
- App visual reference: [anqa_app_design_v2.md](/home/xaminezh/The-Digital-Heritage-Vault/anqa_app_design_v2.md)
- Research/context reference: [digital_heritage_vault_project.md](/home/xaminezh/The-Digital-Heritage-Vault/digital_heritage_vault_project.md)
- Early planning note: [plan v1.md](/home/xaminezh/The-Digital-Heritage-Vault/plan%20v1.md)

## Baseline To Keep

- Canonical working baseline commit: `f813472`
- Commit title: `Establish a working cinematic Custodix presentation baseline`
- This is the first stable, approved version and should be treated as the restore point for future experiments.

## Deployment State

- GitHub remote: `git@github.com:XaMiNeZH/The-Digital-Heritage-Vault.git`
- Default branch: `main`
- Vercel production URL at the time of setup: `https://custodix-digital-heritage-vault.vercel.app`
- First deployment inspector reference: `https://vercel.com/xaminezhs-projects/custodix-digital-heritage-vault/6AiBmoRwgWTA1QZwYSjqUb7bjpmx`

## What Was Built In V1

- Eight-act one-page presentation flow
- Global grain and vignette overlays
- Custom cursor, progress bar, and chapter navigation
- Typewriter opening sequence with particle system
- Evidence section with animated stat strips
- Reckoning section with GSAP pinned reveal
- Solution and app sections with phone mockups and weaving canvas
- X-Factor acknowledgment screen
- Ethical defense and closing sequence

## Session Record

### Milestone 1: Initial Implementation

- Scaffolded a new Next.js app in a previously document-only repo
- Built the full cinematic presentation site from scratch
- Installed dependencies and verified local build
- Deployed to Vercel from the authenticated account

### Milestone 2: Gemini CLI Setup

- Installed Gemini CLI locally
- Verified interactive Google sign-in
- Confirmed headless Gemini CLI works outside the sandbox with cached credentials
- Saved Gemini output artifact for the redesign prompt

Relevant artifact:
- [gemini-custodix-visual-redesign-20260404-020611.md](/home/xaminezh/The-Digital-Heritage-Vault/.omx/artifacts/gemini-custodix-visual-redesign-20260404-020611.md)

### Milestone 3: Design Rollback Decision

- A Gemini-guided redesign pass was attempted
- That redesign was explicitly rejected by the user
- The codebase was restored to the original first-deployed version
- The restored version was verified with `tsc`, `next build`, and local dev

## Active Preference / Design Directive

- Keep the original first deployed presentation look as the preferred baseline
- Do not reapply the Gemini redesign direction unless explicitly requested again
- If experimenting visually in the future, branch from `f813472` or create a new checkpoint before major style changes

## Repro / Verification Commands

```bash
npx tsc --noEmit
npm run build
npm run dev -- --hostname 127.0.0.1 --port 3000
```

## Useful Restore Commands

Restore the approved baseline by commit:

```bash
git checkout f813472 -- .
```

Or inspect the baseline directly:

```bash
git show f813472
```

## Notes For Future Sessions

- The big prompt already lives in `build_prompt.md`; do not duplicate it unless a revised prompt becomes the new canonical source.
- `.omx/` contains local agent artifacts and should be treated as session support data, not the primary source of truth.
- If local and deployed output diverge, compare against commit `f813472` first before making new changes.
