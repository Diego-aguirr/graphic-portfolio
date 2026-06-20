# AGENTS.md — Grafic

Portfolio de diseño gráfico para demo. Next.js 15 + datos estáticos.

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15.5 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 4, Framer Motion |
| Language | TypeScript 5 (strict) |
| Package Manager | pnpm |
| Auth | JWT (jsonwebtoken) en cookies httpOnly |
| Email | @emailjs/browser |
| Backend | Sin DB. Datos hardcodeados en memoria. |

## Scripts

```bash
pnpm dev       # Dev server (Turbopack)
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # ESLint
```

## Path Aliases

```json
{
  "@/*": "src/*",
  "@components/*": "src/components/*",
  "@lib/*": "src/lib/*",
  "@interfaces/*": "src/interfaces/*"
}
```

## Architecture

```
src/
├── app/
│   ├── (marketing)/        # Rutas públicas (server components)
│   │   ├── page.tsx              # Home
│   │   ├── aboutus/page.tsx      # Quienes Somos
│   │   ├── ourdesigns/page.tsx   # Galería de diseño
│   │   └── contacform/page.tsx   # Formulario de contacto
│   ├── admin/
│   │   ├── layout.tsx            # Protección JWT (server)
│   │   └── dashboard/page.tsx    # Panel de administración
│   ├── login/page.tsx            # Login
│   ├── actions/
│   │   ├── auth.ts               # Server actions: login/logout
│   │   └── images.ts             # Server actions: CRUD imágenes
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   ├── error.tsx                 # Error boundary global
│   └── not-found.tsx             # 404 page
├── components/
│   ├── Navbar.tsx                # Navegación principal
│   ├── Sidebar.tsx               # Menú mobile
│   ├── Footer.tsx                # Footer con links
│   ├── ContactForm.tsx           # Formulario contacto (EmailJS)
│   ├── DesignCard.tsx            # Card de diseño en galería
│   ├── DesignGrid.tsx            # Grid con filtros client-side
│   ├── CategoryNav.tsx           # Botones de filtro por categoría
│   ├── Gallery.tsx               # Galería legacy
│   ├── ImageList.tsx             # Lista de imágenes (admin)
│   ├── UploadForm.tsx            # Formulario nueva imagen (admin)
│   ├── EditForm.tsx              # Formulario editar imagen (admin)
│   ├── LoginForm.tsx             # Formulario login
│   ├── LogoutButton.tsx          # Botón cerrar sesión
│   ├── Hero.tsx                  # Hero section del home
│   ├── ServiceCard.tsx           # Card de servicios
│   ├── ServicesOverview.tsx      # Sección de servicios
│   ├── WhatAppButton.tsx         # Botón WhatsApp
│   ├── QuickContact.tsx          # Contacto rápido
│   └── PortfolioPreview.tsx      # Preview del portafolio
├── interfaces/
│   ├── designcard.ts             # DesignCardProps
│   ├── service.ts                # ServiceCardProps
│   ├── Overvie.ts                # overviewProps
│   ├── modal.ts                  # ConfirmModalProps
│   └── updatemodal.ts            # UpdateModalProps
├── lib/
│   └── auth.ts                   # JWT auth (login, session, logout)
├── services/
│   └── data/
│       ├── types.ts              # ImageRecord interface
│       └── static-images.ts      # Array de imágenes hardcodeadas
└── middleware.ts                  # Protección de rutas (cookie check)
```

## Auth System

- **Credenciales**: admin / (ver `.env` — variables `ADMIN_USER` y `ADMIN_PASSWORD`)
- **JWT**: firmado con `JWT_SECRET` de `.env`, expira en 7 días
- **Cookie**: httpOnly, sameSite lax, secure en producción
- **Middleware**: solo chequea existencia del cookie (no verifica JWT)
- **Layout admin**: verifica JWT en `getSession()` (Node.js runtime)

**IMPORTANTE**: El middleware corre en Edge Runtime. NO usar `jsonwebtoken` ahí.
La verificación del JWT solo funciona en Server Components/Actions (Node.js).

## Data Layer

- Imágenes hardcodeadas en `src/services/data/static-images.ts`
- CRUD in-memory via server actions (`src/app/actions/images.ts`)
- Las mutaciones viven en el server process (se pierden al reiniciar)
- No hay base de datos. No hay storage externo.

## Next.js Conventions

- Server Components por defecto
- `"use client"` solo para: useState, useEffect, event handlers, browser APIs
- Server Actions para mutations (create/update/delete)
- Route groups `(marketing)` para separar público de admin
- `loading.tsx` / `error.tsx` / `not-found.tsx` para UX

## Deployment

- **Plataforma**: Vercel (o cualquier hosting Next.js)
- **Variables de entorno requeridas**:
  - `JWT_SECRET` — firma del JWT (cambiar en producción)
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` — opcional, para formulario contacto
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` — opcional
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` — opcional
- Sin dependencia de DB ni servicios externos
- `pnpm build` debe compilar sin errores

## Known Limitations

- Admin credentials hardcodeadas (no hay registro de usuarios)
- Imágenes in-memory (no persisten entre reinicios)
- Sin tests
- Sin rate limiting en login
- EmailJS en demo mode si no se configuran las variables

## File Conventions

- Componentes: PascalCase (`DesignCard.tsx`)
- Pages: `page.tsx` (Next.js convention)
- Actions: kebab-case (`auth.ts`, `images.ts`)
- Types: interfaces en `src/interfaces/`
- CSS: Tailwind utilities, sin CSS modules
- Exports: named exports preferidos
