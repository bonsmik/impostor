# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (runs on port 3050)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- No test framework is configured.

## Architecture

This is a Next.js 16 app using the App Router (`src/app/`), TypeScript with strict mode, and Tailwind CSS v4.

- Single-page app currently — the home page (`src/app/page.tsx`) is a client component with a player-count selection form for starting a game
- Root layout (`src/app/layout.tsx`) loads Geist Sans and Geist Mono fonts via `next/font/google`
- Global styles in `src/app/globals.css` define CSS custom properties for the color palette and use Tailwind v4's `@theme inline` directive to register them as Tailwind colors
- Path alias: `@/*` maps to `./src/*`

## Styling

- Tailwind CSS v4 with `@tailwindcss/postcss` plugin
- Light-only color scheme with glassmorphism aesthetic (translucent whites, backdrop blur, deep box shadows)
- Custom color tokens: `--accent` (indigo), `--accent-2` (pink), `--accent-3` (cyan)
- Respects `prefers-reduced-motion`
