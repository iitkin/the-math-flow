# Changing and Deploying The Math Flow

## Overview

The site is a React + Vite + Tailwind CSS app deployed to GitHub Pages at:
**https://iitkin.github.io/the-math-flow/**

Pushing to `main` automatically builds and deploys via GitHub Actions.

---

## Making Changes

All UI lives in a single file: `src/App.tsx`

Global styles and color/font tokens are in `src/index.css`.

### Run locally

```bash
npm run dev
```

The dev server starts at `http://localhost:5173` (or the next available port) with hot reload.

### Build locally

```bash
npm run build
```

Output goes to `dist/`. Check for TypeScript or build errors before pushing.

---

## Deploying

Push to `main` — that's it.

```bash
git add src/App.tsx
git commit -m "Your change description"
git push origin main
```

GitHub Actions runs `.github/workflows/pages.yml`, which:
1. Installs dependencies (`npm ci`)
2. Builds the project (`npm run build`)
3. Uploads `dist/` as a Pages artifact
4. Deploys to GitHub Pages

The deploy takes about 60 seconds. You can monitor it at:
**https://github.com/iitkin/the-math-flow/actions**

---

## Gotchas

- **GitHub Pages must be set to workflow mode** — not the default Jekyll/legacy mode. This was configured once via the GitHub API. If Pages ever stops working, go to repo **Settings → Pages** and confirm "Source" is set to **GitHub Actions**.
- **Token needs `workflow` scope** — the git remote URL embeds a Personal Access Token. If pushes to `.github/workflows/` are rejected, update the token at **github.com → Settings → Developer settings → Personal access tokens** and add the `workflow` scope.
- The Vite `base` is set to `/the-math-flow/` in `vite.config.ts` to match the GitHub Pages subpath. Do not remove it.
