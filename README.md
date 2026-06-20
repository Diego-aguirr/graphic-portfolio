# Grafic — Portafolio de Diseño Gráfico

Portfolio profesional para demo. Next.js 15 + React 19 + Tailwind CSS.

## Demo

Accedé en: https://grafic-studio.vercel.app/

## Características

- **Home** con hero, servicios y preview del portafolio
- **Galería de diseños** con filtros por categoría (client-side)
- **Formulario de contacto** con EmailJS (o demo mode)
- **Panel de administración** con login JWT y CRUD de imágenes
- **Responsive** — mobile, tablet, desktop
- **SEO** — metadata optimizada en cada página

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15.5 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 4, Framer Motion |
| Language | TypeScript 5 (strict) |
| Auth | JWT en cookies httpOnly |
| Email | @emailjs/browser |
| Package Manager | pnpm |

## Inicio rápido

```bash
# Instalar dependencias
pnpm install

# Variables de entorno
cp .env.example .env
# Editar JWT_SECRET con un valor seguro

# Desarrollo
pnpm dev

# Build producción
pnpm build && pnpm start
```

## Estructura del proyecto

```
src/
├── app/
│   ├── (marketing)/        # Rutas públicas
│   │   ├── page.tsx              # Home
│   │   ├── aboutus/page.tsx      # Quienes Somos
│   │   ├── ourdesigns/page.tsx   # Galería
│   │   └── contacform/page.tsx   # Contacto
│   ├── admin/
│   │   ├── layout.tsx            # Protección JWT
│   │   └── dashboard/page.tsx    # Dashboard
│   ├── login/page.tsx            # Login
│   ├── actions/                  # Server Actions
│   └── layout.tsx                # Root layout
├── components/                   # Componentes React
├── interfaces/                   # Tipos TypeScript
├── lib/auth.ts                   # JWT auth
├── services/data/                # Datos hardcodeados
└── middleware.ts                  # Protección de rutas
```

## Admin

- **URL**: `/login`
- **Credenciales**: admin / (ver `.env`)
- **Funciones**: ver, crear, editar, eliminar imágenes
- **Nota**: las imágenes son in-memory (se pierden al reiniciar)

## Variables de entorno

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `JWT_SECRET` | Sí | Clave para firmar JWT |
| `ADMIN_USER` | Sí | Usuario admin |
| `ADMIN_PASSWORD` | Sí | Contraseña admin |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | No | EmailJS public key |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | No | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | No | EmailJS template ID |

## Deployment

Este proyecto está optimizado para **Vercel**:

1. Conectar el repo de GitHub
2. Configurar variables de entorno en Vercel
3. Deploy automático en cada push

No necesita base de datos ni servicios externos.

## Limitaciones conocidas

- Credenciales de admin hardcodeadas
- Imágenes in-memory (no persisten entre reinicios)
- Sin tests automatizados
- Sin rate limiting
- EmailJS en demo mode sin configuración

## Licencia

Proyecto privado. Uso exclusivo del autor.
