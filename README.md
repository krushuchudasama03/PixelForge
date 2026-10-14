# PixelForge

**Young creators. Real deliverables.**

The portfolio of PixelForge — a small team of young makers led by **Krushnrajsinh** (Co-Founder & Chief Website Developer), with **Rishi** and **Yuvi** on presentation design. Live demos of **Sentinel Shield**, **JARVIS v7/v8**, and the **Cyber Shield deck** ship inside this repo.

## Tech Stack

- React 19 + TypeScript
- Vite
- lucide-react & canvas-confetti
- Zero backend — fully static, runs anywhere

## Local Development

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + build into /docs
npm run lint     # oxlint
```

## Deploying to GitHub Pages (no workflow — straight from a branch)

This repo ships to GitHub Pages **from a branch directly**, with no GitHub Actions workflow at all.

### 1. Rename the repo to `PixelForge`

GitHub **Settings → General → Repository name** → set it to exactly `PixelForge`
(case matters — the Vite `base` is `/PixelForge/`, which is what keeps the site
from 404-ing on Pages).

### 2. Build the site into `/docs`

```bash
npm run build
```

Vite is configured with `base: '/PixelForge/'` and `outDir: 'docs'`, so every build
lands in a `docs/` folder that is committed to the repo (`.gitignore` intentionally
does **not** ignore it). A `.nojekyll` file is included automatically.

### 3. Point GitHub Pages at the branch

**Settings → Pages → Build and deployment**

- **Source:** `Deploy from a branch`
- **Branch:** `main` — Folder: `/docs`

Commit and push `docs/` together with the rest of the repo, and the site goes live at:

**https://pixelforge.github.io/PixelForge/**  
(user name on GitHub must match — if your username is different, the URL becomes
`https://<username>.github.io/PixelForge/`)

### Re-deploying after changes

```bash
git add docs/ && git commit -m "Rebuild site" && git push
```

## Project Layout

```
docs/            built site — what GitHub Pages serves (committed)
public/demos/    live demo files (Sentinel Shield, Cyber Shield deck, JARVIS viewer)
src/components/  all UI sections (Hero, Portfolio, Team, member Portal…)
src/config.ts    single source of truth: brand, team, projects, contact edits
```

## Editing the Content

Almost everything on the site — brand name, hero copy, team member bios,
achievements, services, and portfolio projects — lives in **`src/config.ts`**.
Change it there, rebuild, and re-push `docs/`.
