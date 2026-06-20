# AGENTS.md — Grafic

Portfolio app to showcase design work. Built for demo deployment.

## Tech Stack

- **Framework**: Next.js 15.4.5 (App Router, Turbopack)
- **UI**: React 19.1.1, Tailwind CSS 4, Framer Motion
- **Language**: TypeScript 5 (strict mode)
- **Package Manager**: pnpm
- **Backend**: Hardcoded static data (Supabase removed)
- **Email**: EmailJS Browser

## Scripts

```bash
pnpm run dev      # Dev server with Turbopack
pnpm run build    # Production build
pnpm run start    # Start production server
pnpm run lint     # ESLint check
```

## Path Aliases

Defined in `tsconfig.json`:

| Alias | Path |
|-------|------|
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@lib/*` | `src/lib/*` |
| `@interfaces/*` | `src/interfaces/*` |

## Architecture

```
src/
├── app/                    # App Router routes
│   ├── (marketing)/        # Public pages (home, about, designs, contact)
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components (flat structure)
├── interfaces/             # TypeScript type definitions
├── lib/                    # Utilities and helpers
└── services/               # Data layer (future: image service)
    ├── data/               # Static data (hardcoded)
    └── images/             # Image service interface
```

## Coding Conventions

- **Components**: Functional components with TypeScript
- **Styling**: Tailwind CSS utilities, `clsx` + `tailwind-merge` for conditional classes
- **Types**: Strict TypeScript, interfaces in `src/interfaces/`
- **Exports**: Named exports preferred
- **Imports**: Use path aliases (`@components/`, `@lib/`, etc.)

## Next.js Conventions

- Use Server Components by default
- Add `"use client"` only for interactivity (useState, useEffect, event handlers)
- Use `loading.tsx` for route-level loading states
- Use `error.tsx` for error boundaries
- Use `not-found.tsx` for 404 pages

## Data Layer

Currently hardcoded in `src/services/data/`. Prepared for:
- **Cloudinary**: Image service interface in `src/services/images/`
- **Prisma + PostgreSQL**: Database service interface (future)

## ESLint

Uses `next/core-web-vitals` and `next/typescript` configs.
