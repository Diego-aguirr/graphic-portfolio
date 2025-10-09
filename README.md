🎨 Grafic – Portafolio de Diseño Gráfico

Grafic es una plataforma profesional creada con Next.js 15, TypeScript y Tailwind CSS. Permite a diseñadores gráficos mostrar sus trabajos, conectar con clientes y gestionar contenido desde un panel de administración.

🚀 Características

✅ Portafolio dinámico con imágenes categorizadas

✅ Panel de administración seguro con Supabase Auth

✅ Contacto directo vía WhatsApp

✅ Optimizado para SEO y rendimiento

✅ Diseño moderno, responsive y profesional

🛠️ Tecnologías Usadas

Next.js 15

TypeScript

Tailwind CSS

Supabase

Vercel



📂 Estructura del Proyecto
grafic/
    2 ├───.gitignore
    3 ├───next.config.ts
    4 ├───package.json
    5 ├───postcss.config.mjs
    6 ├───README.md
    7 ├───tsconfig.json
    8 ├───public/
    9 │   ├───favicon.ico
   10 │   └───img/
   11 │       ├───hero.jpeg
   12 │       ├───pro1.png
   13 │       └───pro2.png
   14 └───src/
   15     ├───app/
   16     │   ├───(admin)/
   17     │   │   ├───layout.tsx
   18     │   │   └───dashboard/
   19     │   │       └───page.tsx
   20     │   ├───(marketing)/
   21     │   │   ├───page.tsx
   22     │   │   ├───aboutus/
   23     │   │   │   └───page.tsx
   24     │   │   ├───contacform/
   25     │   │   │   └───page.tsx
   26     │   │   └───ourdesigns/
   27     │   │       ├───page.tsx
   28     │   │       └───[category]/
   29     │   │           └───page.tsx
   30     │   ├───api/
   31     │   ├───login/
   32     │   │   └───page.tsx
   33     │   ├───update-password/
   34     │   │   └───page.tsx
   35     │   ├───error.tsx
   36     │   ├───globals.css
   37     │   ├───layout.tsx
   38     │   └───not-found.tsx
   39     ├───components/
   40     │   ├───ui/
   41     │   │   ├───confirModal.tsx
   42     │   │   └───UpdateModal.tsx
   43     │   ├───BackToAdminButton.tsx
   44     │   ├───CategoryNav.tsx
   45     │   ├───ContactForm.tsx
   46     │   ├───DesignCard.tsx
   47     │   ├───EditFrom.tsx
   48     │   ├───Footer.tsx
   49     │   ├───Gallery.tsx
   50     │   ├───Hero.tsx
   51     │   ├───ImageList.tsx
   52     │   ├───LoginForm.tsx
   53     │   ├───LogoutButton.tsx
   54     │   ├───Navbar.tsx
   55     │   ├───PortfolioPreview.tsx
   56     │   ├───QuickContact.tsx
   57     │   ├───ServiceCard.tsx
   58     │   ├───ServicesOverview.tsx
   59     │   ├───Sidebar.tsx
   60     │   ├───UpdatePasswordForm.tsx
   61     │   ├───UploadForm.tsx
   62     │   ├───WhatAppButton.tsx
   63     │   └───wrapper.tsx
   64     ├───interfaces/
   65     │   ├───button.ts
   66     │   ├───database.ts
   67     │   ├───designcard.ts
   68     │   ├───index.ts
   69     │   ├───modal.ts
   70     │   ├───Overvie.ts
   71     │   ├───service.ts
   72     │   └───updatemodal.ts
   73     └───lib/
   74         ├───events/
   75         │   └───imgEvent.ts
   76         ├───helper/
   77         │   ├───delete-image.ts
   78         │   ├───update-image.ts
   79         │   └───upload-image.ts
   80         ├───supabase/
   81         │   ├───client.ts
   82         │   ├───middleware.ts
   83         │   └───server.ts
   84         ├───fetchImg.ts
   85         └───utils.ts



 🌐 SEO y Etiquetas Meta

El proyecto incluye etiquetas meta para mejorar posicionamiento:

<meta name="title" content="CraftyCraft17 - Portafolio de Diseño Gráfico Profesional">
<meta name="description" content="Portafolio moderno de diseño gráfico. Logos, branding, flyers, CVs y más. Contacta directo por WhatsApp.">
<meta name="keywords" content="diseño gráfico, branding, logos, flyers, diseño web, ilustraciones, portafolio, diseño moderno">
<meta property="og:title" content="CraftyCraft17 - Diseño Gráfico Profesional">
<meta property="og:description" content="Explora nuestro portafolio de diseño gráfico: logos, branding, flyers, CVs y más.">
<meta property="og:image" content="/og-image.png">
<meta property="og:url" content="https://craftycraft17.com">
<meta name="twitter:card" content="summary_large_image">

🚀 Cómo Ejecutarlo
# Instalar dependencias
npm install

# Ejecutar servidor en desarrollo
npm run dev


Accede en  https://grafic-studio.vercel.app/


