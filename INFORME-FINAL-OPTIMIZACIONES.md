# Informe final de optimizaciones — talleresdeteatro.es
**Fecha:** Mayo 2026 | **Para:** repaso con ChatGPT antes del deploy

---

## Contexto

Rediseño completo del sitio de Talleres de Teatro Barcelona (Sebastián Mogordoy y Candelaria Sesín, Gràcia, Barcelona). El sitio reemplaza un WordPress por HTML estático optimizado. Restricción principal: el sitio rankea #1 en Google para los términos clave — nada puede poner ese posicionamiento en riesgo.

---

## Archivos listos para subir al servidor

### Páginas principales

| Archivo | URL destino | Estado |
|---|---|---|
| `07-home-seo.html` | `talleresdeteatro.es/` | ✅ Listo |
| `principiantes-v2.html` | `talleresdeteatro.es/principiantes/` | ✅ Listo |
| `con-experiencia-v2.html` | `talleresdeteatro.es/intermedios/` | ✅ Listo |
| `cuerpo-al-texto-v1.html` | `talleresdeteatro.es/avanzados/` | ✅ Listo |
| `nosotros-v2.html` | `talleresdeteatro.es/quienes-somos/` | ✅ Listo |
| `contacto-html.html` | `talleresdeteatro.es/contacto/` | ✅ Listo |
| `info.html` | URL privada (noindex) | ✅ Listo |

### Archivos de soporte

| Archivo | Función | Estado |
|---|---|---|
| `sitemap.xml` | Sitemap para Google | ✅ Actualizado |
| `robots.txt` | Control de rastreo | ✅ Actualizado |
| `talleres-informacion-2025-26.pdf` | Descargable desde info.html | ✅ Listo |
| `imagenes_optimizadas/` | Todas las fotos del sitio | ✅ Listo |
| `hero-talleres-720p-web.mp4` | Vídeo hero home (recomendado) | ✅ Listo |
| `somos-relato.mp4` | Vídeo sección Nosotros | ✅ Listo |

---

## Qué se optimizó en esta sesión (resumen técnico)

### 1. SEO — Schema markup completo en todas las páginas

Cada página tiene su propio bloque JSON-LD con:

- **Home:** `LocalBusiness` + `AggregateRating` (88 reseñas, 5★) + `ItemList` de cursos + `FAQPage` (9 preguntas) + `BreadcrumbList`
- **Principiantes:** `Course` + `CourseInstance` + `FAQPage` (6 preguntas) + `BreadcrumbList`
- **Con experiencia:** `Course` + `CourseInstance` + `FAQPage` (5 preguntas) + `BreadcrumbList`
- **Avanzados:** `Course` + `CourseInstance` + `FAQPage` (4 preguntas) + `BreadcrumbList`
- **Nosotros:** `Organization` + `Person` (Mogordoy + Sesín) + `FAQPage` (4 preguntas) + `BreadcrumbList`
- **Contacto:** `ContactPage` + `FAQPage` (3 preguntas) + `BreadcrumbList`

### 2. SEO — Meta tags optimizados en todas las páginas

- Titles con keyword principal + localización + brand (formato probado)
- Meta descriptions 140–160 chars con CTA ("Primera clase sin cargo")
- Open Graph completo: tipo, url, título, descripción, imagen real (no placeholder WordPress)
- Twitter Card: `summary_large_image`
- Geo tags: `geo.region ES-CT`, `geo.placename Barcelona`, coordenadas GPS
- Keywords meta en todas las páginas
- `robots: index, follow, max-snippet:-1, max-image-preview:large`

### 3. SEO — Canonicals correctos en todas las páginas

```
Home              → https://talleresdeteatro.es/
Principiantes     → https://talleresdeteatro.es/principiantes/
Con experiencia   → https://talleresdeteatro.es/intermedios/
Avanzados         → https://talleresdeteatro.es/avanzados/
Nosotros          → https://talleresdeteatro.es/quienes-somos/
Contacto          → https://talleresdeteatro.es/contacto/   ← corregido (era /contacto-html/)
```

### 4. SEO — OG images reales (no placeholders WordPress)

Todas las páginas apuntan a imágenes reales del sitio en `imagenes_optimizadas/`:
- Principiantes → `actores-taller-barcelona-0451.jpg`
- Con experiencia → `actores-taller-barcelona-0467.jpg`
- Avanzados → `taller-teatro-gracia-barcelona-1094.jpg`
- Nosotros / Contacto → `sebastian-mogordoy-candelaria-sesin-profesores-teatro-barcelona.jpg`

### 5. AI Search (ChatGPT / Gemini / Perplexity)

FAQPage schema en todas las páginas, con preguntas en lenguaje natural diseñadas para aparecer cuando alguien pregunta:
- "escuela de teatro barcelona"
- "clases de teatro barcelona sin experiencia"
- "cuánto cuesta un taller de teatro en barcelona" → respuesta: "escríbenos para saber la cuota"
- "quién es Sebastián Mogordoy"
- "mejor taller de teatro barcelona"
- "primera clase gratis teatro barcelona"
- "formación actoral barcelona"

### 6. Performance — Core Web Vitals

- **Lazy loading** añadido a todas las imágenes secundarias e iframes (mapas) — el primer elemento de cada página se deja sin lazy para preservar el LCP
- **Google Fonts no bloqueante** — técnica `media="print" onload="this.media='all'"` en todas las páginas (3 referencias por página)
- **Scripts con `defer`** — eliminados render-blocking scripts en home y páginas de curso
- **`preload="metadata"`** en todos los `<video autoplay>` — evita que el browser descargue el vídeo completo en mobile antes de que el usuario interactúe
- **`rel="noopener noreferrer"`** en todos los `target="_blank"`

### 7. Mobile

CSS inyectado en todas las páginas con reglas específicas para 480px y 768px:
- Grids pasan a columna única (talleres, directores, reseñas)
- CTAs se apilan en vertical con ancho 100%
- Tipografía fluida con `clamp()` para H1/H2/hero
- Padding de secciones y contenedores adaptado

### 8. Sitemap

```xml
talleresdeteatro.es/              (priority 1.0)
talleresdeteatro.es/principiantes/ (priority 0.9)
talleresdeteatro.es/intermedios/   (priority 0.9)
talleresdeteatro.es/avanzados/     (priority 0.8)  ← añadida
talleresdeteatro.es/quienes-somos/ (priority 0.7)
talleresdeteatro.es/contacto/      (priority 0.8)  ← corregida URL
```
Todos los `lastmod` actualizados a 2026-05-15.

### 9. Robots.txt

```
Disallow: /info.html   ← añadido (página privada de alumnos, noindex)
Sitemap: https://talleresdeteatro.es/sitemap.xml
```

### 10. PDF descargable (talleres-informacion-2025-26.pdf)

Generado con Python/reportlab + PIL. Incluye:
- Portada con foto vertical a sangre (sin distorsión), overlay oscuro PIL, logo en blanco
- Contenido: presentación, los tres niveles, directores, info práctica
- Diseño coherente con el sitio: fondo negro, acento rojo, tipografía Inter
- Sin precio en ninguna parte (estrategia de 15 años: no mostrar precio → invita al contacto)
- Enlace de descarga desde `info.html` con botón destacado en dorado

---

## Estrategia de precios — por qué no aparece el precio

El precio (€100/mes) no se muestra en ninguna parte del sitio ni del PDF. Tampoco en las FAQs de schema (la respuesta es "escríbenos para saber la cuota mensual"). Motivo: 15 años de experiencia demuestran que no mostrar el precio filtra a quienes no están realmente interesados y obliga a iniciar una conversación directa con los alumnos potenciales. Solo se comunica "sin matrícula de inscripción" y "primera clase siempre sin cargo" como anclas de bajo riesgo.

---

## Pendiente antes/después del deploy

### Obligatorio antes de subir
- [ ] **301 redirects** — configurar en `.htaccess` o nginx las redirecciones de las URLs de WordPress a las nuevas:
  - `/taller-de-teatro-principiantes/` → `/principiantes/`
  - `/taller-con-experiencia/` → `/intermedios/`
  - `/quienes-somos/` → `/quienes-somos/` (igual, pero verificar)
  - `/contacto/` → `/contacto/` (verificar que WordPress usaba esta URL)
  - Cualquier otra URL indexada → su equivalente nuevo

### Recomendado después del deploy
- [ ] **Google Search Console** — verificar propiedad y enviar sitemap nuevo
- [ ] **Google Analytics 4** — añadir snippet de seguimiento (actualmente el sitio no tiene tracking)
- [ ] **Google Business Profile** — actualizar fotos, horarios y descripción
- [ ] **Formulario de contacto** — actualmente abre `mailto:`, valorar conectar a backend o Formspree
- [ ] **Reseñas reales** — el grid de reseñas tiene 6 ejemplos de muestra; reemplazar con las reseñas reales de Google

---

## Lo que NO hay que tocar

- Diseño visual — aprobado y estable (Archivo Black, rojo #E50914, fondo negro)
- Posicionamiento SEO — el sitio ya está #1; los cambios de esta sesión son conservadores y compatibles
- Metodología — todo está en castellano de España, sin anglicismos innecesarios

---

*Documento generado: Mayo 2026. Para uso con ChatGPT/Gemini u otros asistentes para continuar el desarrollo.*
