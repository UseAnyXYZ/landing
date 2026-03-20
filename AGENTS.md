# AGENTS.md

## Project overview

Landing page for [UseAny](https://useany.sh) — open-source tools for AI agents. Static site built with Astro 5, Tailwind CSS 4, TypeScript strict mode. Deployed to Cloudflare Pages.

## Commands

- `pnpm dev` — start dev server (port 4321)
- `pnpm build` — build static site to `dist/`
- `pnpm preview` — preview production build locally

## Key conventions

- Astro components use `.astro` files with TypeScript frontmatter.
- Tailwind v4 — styles use `@import "tailwindcss"` in `src/assets/styles.css`. No `tailwind.config` file; Tailwind v4 uses CSS-based configuration.
- Tailwind is integrated as a Vite plugin (`@tailwindcss/vite`) in `astro.config.mjs`, not as a PostCSS plugin.
- TypeScript is in strict mode (`astro/tsconfigs/strict`).
- All component props must have explicit TypeScript interfaces.
- Layout wraps all pages; it accepts optional `title` and `description` props.

## Architecture

- Single page: `src/pages/index.astro`
- Base layout: `src/layouts/Layout.astro`
- Components: `src/components/` — Header, Hero, Projects, ProjectCard, Footer
- Data: `src/data/projects.ts` — array of `Project` objects rendered by the Projects component
- Static assets: `public/` — served at root path

## Adding a project

Add an entry to `src/data/projects.ts` matching the `Project` interface:

- `name` — project name
- `description` — short description
- `tags` — string array (e.g. `["CLI", "REST API"]`)
- `license` — license identifier (e.g. `"MIT"`)
- `language` — primary language
- `links` — array of `{label, url}` objects

## Styling

- Dark theme: `bg-slate-900 text-slate-200` on body.
- Max-width container: `max-w-3xl` centered with `mx-auto px-6 py-12`.
- Use Tailwind utility classes directly in Astro templates. No CSS modules or styled-components.

## Deployment

- CI: `.github/workflows/deploy.yml` — triggers on push to `main`.
- Runs `pnpm wrangler pages deploy dist --project-name=useany-landing`.
- Secrets needed: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

## Do not

- Do not add a `tailwind.config.js/ts` file — Tailwind v4 does not use one.
- Do not switch from pnpm to npm or yarn.
- Do not add SSR or server-side adapters — this is a static site.
- Do not modify the Cloudflare project name in the deploy workflow.
