# useany-landing

Landing page for [UseAny](https://useany.sh) — open-source tools for AI agents.

Built with Astro 5, Tailwind CSS 4, and TypeScript. Deployed to Cloudflare Pages.

## Prerequisites

- Node 22
- pnpm 10

## Development

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # preview the build locally
```

## Project structure

```
src/
  pages/index.astro          # main page
  layouts/Layout.astro       # base HTML layout
  components/                # Header, Hero, Projects, ProjectCard, Footer
  data/projects.ts           # project list data
  assets/styles.css          # Tailwind imports
public/                      # logo.svg, logo.png, favicon.svg
.github/workflows/deploy.yml # CI/CD
```

## Adding a project

Add an entry to `src/data/projects.ts` matching the `Project` interface. The Projects component renders the array automatically.

## Deployment

Pushing to `main` triggers GitHub Actions which builds the site and deploys `dist/` to Cloudflare Pages via `pnpm wrangler pages deploy`.

Required repository secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
