# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build` (uses Turbopack)
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint` (ESLint with Next.js TypeScript config)

## Architecture Overview

This is a Next.js 15 frontend portfolio application using the App Router architecture with TypeScript and Tailwind CSS.

### Key Structure
- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from next/font/google
- **Build Tool**: Turbopack (used in both dev and build commands)

### Directory Structure
- `src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration
  - `page.tsx` - Homepage component
  - `globals.css` - Global styles with Tailwind directives

### Configuration Files
- `next.config.ts` - Next.js configuration (minimal setup)
- `tsconfig.json` - TypeScript config with path mapping (`@/*` → `./src/*`)
- `eslint.config.mjs` - ESLint with Next.js core-web-vitals and TypeScript rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS

### Development Notes
- Uses React 19.1.0 with Next.js 15
- Path aliases configured: `@/*` maps to `./src/*`
- TypeScript target: ES2017
- Development server runs on http://localhost:3000
- ESLint ignores: `.next/`, `out/`, `build/`, `node_modules/`, `next-env.d.ts`