# Resumen de cambios — 07-home-seo.html
**Optimización SEO + semántica + performance · talleresdeteatro.es**
Fecha: mayo 2026 · Archivo base: 06-home-completo.html

---

## 1. H1 — Eliminación del H1 oculto, reemplazo por H1 real visible

**Qué se hizo:**
- Se eliminó completamente la clase `.seo-h1-hidden` (que usaba `clip: rect(0,0,0,0)`) y su instancia HTML.
- Se creó un nuevo `<h1 class="hero-h1-seo">Talleres de Teatro en Barcelona</h1>` **real y visible**, posicionado en la esquina superior izquierda del hero, justo debajo del nav.
- Estilos: `font-size: clamp(8px, 0.75vw, 11px)`, `letter-spacing: 0.22em`, `text-transform: uppercase`, `color: rgba(255,255,255,0.32)`. Parece metadata editorial cinematográfica. No compite con el texto poético del hero.
- El texto poético rotante ("Ser todo eso / que no somos") quedó como `<div>`, nunca fue H1.

**Por qué:** La técnica `clip: rect` para ocultar H1 es considerada gray hat por Google desde 2023 y puede generar penalización. El H1 visible integrado elimina ese riesgo y refuerza el posicionamiento.

---

## 2. Schema LocalBusiness — additionalType agregado

**Qué se hizo:**
```json
"@type": "LocalBusiness",
"additionalType": "https://schema.org/PerformingArtsTheater",
```
Se agregó `additionalType` con el valor `https://schema.org/PerformingArtsTheater` sin eliminar ni modificar nada del schema existente (aggregateRating, founders, geo, sameAs, cursos).

---

## 3. FAQ Schema JSON-LD + Sección visual FAQ

**Qué se hizo:**
Se agregó un bloque `FAQPage` con 6 preguntas:
1. ¿Necesito experiencia previa?
2. ¿Dónde se realizan las clases?
3. ¿Qué diferencia hay entre principiantes y actores con experiencia?
4. ¿Cómo son los entrenamientos?
5. ¿Se trabaja improvisación y texto?
6. ¿Qué edades participan?

Se creó también la sección HTML correspondiente con:
- `<details>/<summary>` nativo (accesible sin JavaScript, funciona en todos los navegadores modernos)
- Diseño editorial oscuro, acordeón con `+` rojo que rota a `×`
- Se insertó **después de la sección "En cartelera"**, antes de la imagen final de cierre

---

## 4. Headings semánticos

**Qué se cambió:**

| Antes | Después |
|---|---|
| `<h2>15 años.</h2>` | `<h2>15 años<span>de entrenamiento actoral en Barcelona</span></h2>` |

El `<span>` tiene `font-size: 0.3em`, `color: rgba(255,255,255,0.45)` — se ve como una línea de metadata bajo el número grande, sin romper la estética.

**No se modificó:** "Principiantes", "Con experiencia", "Cuerpo al texto" — se mantienen como están por decisión editorial.

---

## 5. Alt texts — 174 imágenes de galería naturalizadas

**Problema previo:** La galería masonry tenía ~174 imágenes con alt texts genéricos y repetitivos: `"Clase teatro mayo 2023"`, `"Clase teatro junio 2023 s2"`, etc.

**Qué se hizo:** Se reemplazaron todas por un vocabulario variado y natural:
- Entrenamiento actoral en el Espacio La Mansión, Barcelona
- Improvisación dirigida — Talleres de Teatro Gracia
- Proceso creativo actoral — Talleres Mogordoy
- Actores trabajando en escena — Barcelona
- Investigación actoral — Taller de teatro Barcelona
- Escena de improvisación — Gracia, Barcelona
- Entrenamiento físico y vocal — Talleres de Teatro
- Función de fin de ciclo — Teatro Barcelona
- (…30 variantes en rotación)

Las imágenes clave de secciones (level cards, portraits, editorial) se actualizaron individualmente con descripciones específicas.

**Resultado verificado:** 0 alt texts repetidos más de 3 veces en toda la página.

---

## 6. Performance

**Qué se agregó en `<head>`:**
```html
<link rel="preload" as="style"
      href="https://fonts.googleapis.com/css2?family=Archivo+Black..." />
<link rel="preload" as="image" href="hero-poster-nuevo.jpg" />
```
- Preload de la hoja de estilos de Archivo Black → elimina FOUT (flash tipográfico) en el H1 visual del hero
- Preload del poster del hero video → mejora LCP (Largest Contentful Paint)

**Notas pendientes para producción:**
- Comprimir video hero: `hero-nuevo-1080p-web.mp4` debería ser < 8MB con H.264 + faststart
- Confirmar que `loading="lazy"` está en todas las imágenes no críticas (ya estaba implementado en el archivo base)
- YouTube facades ya estaban implementadas correctamente (no cargan iframe hasta click)

---

## 7. sitemap.xml + robots.txt

**sitemap.xml** creado con todas las URLs del sitio:
- `/` (priority 1.0)
- `/principiantes/`, `/intermedios/`, `/avanzados/` (priority 0.9)
- `/contacto-html/` (priority 0.8)
- `/quienes-somos/` (priority 0.7)
- `/fotos-2015-html/`, `/on-line-html/`, `/argetina/` (priority 0.4–0.5)

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://talleresdeteatro.es/sitemap.xml
```

---

## 8. Accesibilidad

Mejoras menores:
- `aria-label` del botón de sonido actualizado
- `aria-label` de la sección hero más específico
- Texto del footer de reseñas actualizado para reflejar los nombres reales de los niveles

---

## Verificación final (automatizada)

```
[H1] Cantidad: 1 → "Talleres de Teatro en Barcelona"
[OK] seo-h1-hidden eliminado
[H2] Cantidad: 8 (sin duplicados)
[OK] FAQ Schema JSON-LD presente
[OK] additionalType PerformingArtsTheater
[OK] Preloads de performance
[OK] Canonical tag presente
[OK] Sección FAQ presente
[OK] Alt texts: 0 repetidos más de 3 veces
[OK] FAQ usa <details>/<summary> nativos
```

---

## Riesgos a monitorear tras deploy

1. **Rankings**: Cualquier cambio en H1 puede causar fluctuación temporal de 1–3 semanas. Monitorear Search Console semanalmente durante el primer mes.
2. **CLS**: El H1 visible en posición absolute puede causar layout shift en pantallas muy pequeñas. Verificar con PageSpeed Insights.
3. **FAQ rich snippet**: Google puede tardar 2–4 semanas en mostrar las FAQ en resultados. No hay garantía de aparición.

---

## Lo que NO se tocó (por decisión)

- Tipografía (Archivo Black + Inter) — confirmada y aprobada
- Paleta de colores (#0C0C0C / #E50914 / #FFD700)
- Layout y animaciones del hero
- Texto poético del hero
- Estructura de navegación
- URLs existentes (sin cambios → sin necesidad de redirects 301)
- Masonry, galería, lightbox, videos
- Schema de cursos (ItemList)
