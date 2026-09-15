# VOYNICH — Premium Automotive

Sitio web oficial e informativo de **VOYNICH**, una marca conceptual de vehículos
premium. Es un sitio 100% estático, visual y narrativo: no tiene tienda, carrito,
usuarios, login ni backend de ningún tipo.

## Tecnologías utilizadas

- **React 18** — UI declarativa por componentes.
- **Vite** — bundler y servidor de desarrollo.
- **Tailwind CSS** — sistema de utilidades para el diseño (oscuro, cinematográfico, premium).
- **Framer Motion** — animaciones de scroll y transiciones suaves.
- Sin backend, sin base de datos, sin autenticación: es un sitio completamente estático.

## Estructura del proyecto

```
VOYNICH-PROJECT/
├── index.html                 # Punto de entrada HTML, SEO y metadatos
├── main.jsx                   # Bootstrap de React
├── App.jsx                    # Shell de la aplicación (renderiza Home)
├── index.css                  # Estilos globales + tema Tailwind
├── vite.config.js             # Configuración de Vite (alias "@", base para GH Pages)
├── tailwind.config.js         # Configuración de Tailwind
├── public/
│   ├── favicon.svg            # Monograma VOYNICH
│   └── manifest.json          # Manifest básico
└── src/
    ├── pages/
    │   └── Home.jsx            # Composición de todas las secciones de la página
    ├── components/
    │   ├── voynich/             # Secciones de la marca VOYNICH
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Vehicles.jsx
    │   │   ├── FeaturedVehicle.jsx
    │   │   ├── Design.jsx
    │   │   ├── Technology.jsx
    │   │   ├── Performance.jsx
    │   │   ├── Interior.jsx
    │   │   ├── Experience.jsx
    │   │   ├── FinalCTA.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Counter.jsx
    │   │   └── Reveal.jsx
    │   └── ui/
    │       └── image.jsx        # Componente de imagen con carga responsive/lazy
    ├── hooks/
    │   └── use-size.jsx
    └── lib/
        └── utils.js             # Utilidad cn() para clases de Tailwind
```

La narrativa de la página sigue el flujo original:

```
Navbar → Hero → Vehicles → Featured Vehicle → Design → Technology
       → Performance → Interior → Experience → Final CTA → Footer
```

La navegación principal funciona mediante anclas (`#vehicles`, `#design`,
`#technology`, `#performance`, `#about`, etc.), sin necesidad de un router.

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Esto levanta un servidor local (por defecto en `http://localhost:5173`) con
recarga en caliente.

## Generar el build de producción

```bash
npm run build
```

Esto genera la carpeta `dist/` con el sitio completamente estático, listo para
desplegar en cualquier hosting estático (GitHub Pages, Netlify, Vercel, etc.).

Para previsualizar ese build localmente antes de publicar:

```bash
npm run preview
```

## Despliegue en GitHub Pages

El proyecto ya está configurado para GitHub Pages (`base: './'` en
`vite.config.js`, sin rutas absolutas, sin dependencias de `localhost` ni de
ningún backend).

### Opción A — Despliegue automático (recomendado)

Este repositorio incluye un workflow en
`.github/workflows/deploy.yml` que compila y publica el sitio automáticamente
en cada push a la rama `main`.

Para activarlo:

1. Sube este proyecto a un repositorio de GitHub.
2. Ve a **Settings → Pages** del repositorio.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Haz push a `main` (o ejecuta el workflow manualmente desde la pestaña
   **Actions**). El sitio quedará publicado en
   `https://<usuario>.github.io/<nombre-del-repositorio>/`.

### Opción B — Despliegue manual

```bash
npm install
npm run build
```

Luego sube el contenido de la carpeta `dist/` a la rama `gh-pages` (por
ejemplo con la herramienta `gh-pages`) o configúrala como carpeta de origen en
**Settings → Pages** del repositorio.

## Notas técnicas

- El proyecto usa el alias `@` para importar desde `src/` (por ejemplo,
  `@/components/voynich/Navbar`). Está configurado tanto en `vite.config.js`
  como en `jsconfig.json`.
- Las imágenes se sirven desde una CDN pública externa mediante el componente
  `Image` (`src/components/ui/image.jsx`), que optimiza el tamaño y formato
  automáticamente según el contenedor. No requiere backend ni claves de API.
- No existen referencias a `localhost` ni a servicios que requieran
  autenticación; el sitio funciona igual de bien como archivo estático servido
  desde cualquier CDN.
