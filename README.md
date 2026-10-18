# Grupo LA — sitio web

Sitio de **Grupo LA**, empresa de construcción y remodelaciones. Astro estático → GitHub Pages.

## Estado

Base del sitio en rama `setup/sitio-base`. Todos los datos de contacto, proyectos, testimonios y fotos
son **PLACEHOLDER** hasta que el cliente los entregue (la UI lo indica con un aviso de demostración).

## Comandos

```bash
npm install
npm run dev       # desarrollo
npm run check     # astro check
npm run build     # build estático
npm run preview   # preview del build
```

Build con base path de GitHub Pages (repo de proyecto):

```bash
BASE_PATH=/grupo-la-web SITE_URL=https://juancito8812.github.io npm run build
```

## Dónde se edita

- `src/config.ts` — **todo** el contenido: marca, contacto, servicios, proceso, proyectos, FAQs, formulario.
- `src/styles/global.css` — tokens de diseño y layout.
- `src/components/` — Header, Footer, Logo, Icon, MediaPlaceholder, ProjectCard, QuoteForm.
- `public/favicon.svg` — marca en vectorial (propuesta, monograma LA).

## Pendiente del cliente

1. Datos reales de contacto (teléfono, WhatsApp, correo, dirección).
2. Fotografías de proyectos (antes / después) y del equipo.
3. Textos de proyectos reales y testimonios autorizados.
4. Logo definitivo en vectorial (reemplaza la propuesta).
5. Dominio propio (a registrar en Cloudflare).
6. Webhook de n8n para el formulario → `site.quoteEndpoint`.
