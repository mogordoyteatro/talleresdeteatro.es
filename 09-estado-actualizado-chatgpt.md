# Estado actualizado del rediseño — talleresdeteatro.es
**Fecha:** 2026-05-11  
**Para:** ChatGPT  
**De:** Seba + Claude

---

## Contexto del proyecto

Rediseño de **talleresdeteatro.es** — escuela de teatro en Barcelona (Gracia), dirigida por **Sebastián Mogordoy** y **Candelaria Sesin**. Tres niveles: Principiantes, Intermedios, Avanzados.

**Objetivo:** sitio moderno, limpio, que convierta visitas en alumnos — tanto para personas sin experiencia como para actores formados.

**Destino final: GitHub Pages** (ya no WordPress). El prototipo HTML se publica directamente. Seba actualiza el sitio con ayuda de Claude, así que no se necesita CMS.

**Restricción SEO:** el sitio rankea #1 en Google. Las URLs existentes son sagradas.

---

## Sistema de diseño (tokens aprobados)

```css
:root {
  --bg:       #0C0C0C;
  --bg-2:     #161616;
  --white:    #FFFFFF;
  --g100:     #E0E0E0;
  --g300:     #909090;
  --g500:     #505050;
  --g700:     #282828;
  --g800:     #181818;
  --accent:   #E50914;   /* rojo — acento principal */
  --gold:     #FFD700;   /* dorado — solo reseñas Google */
  --pad-x:    clamp(24px, 5vw, 72px);
  --pad-y:    clamp(72px, 9vw, 120px);
  --max-w:    1280px;
}
```

**Tipografías:**
- Display / títulos: **Archivo Black** — uppercase, letter-spacing 0.01em, nunca italic
- Cuerpo / UI: **Inter** — weights 300, 400, 500, 700
- Cursiva decorativa (solo banner Instagram): **Dancing Script** 700
- Todas desde Google Fonts

**Referencia estética:** Grec Festival de Barcelona. Fondo negro, tipografía bold upright que ocupa espacio. Nada "delicado".

---

## Archivo principal

**`06-home-completo.html`** — único archivo activo. CSS inline en `<style>`, HTML en body, JS al pie antes de `</body>`. Todo cambio se hace aquí.

---

## Lo que está construido

### BLOQUE 01 — HERO ✅

- Video fullscreen (`hero-nuevo-1080p-web.mp4` desktop / `hero-nuevo-720p-web.mp4` mobile)
- Poster: `hero-poster-nuevo.jpg`
- Video siempre muted al inicio, botón de sonido abajo derecha
- **Nav fija (position: fixed, z-index 1000):**
  - Izquierda: logo img + tagline "Estudio de teatro | Dir. Sebastián Mogordoy"
  - Centro: links en blanco, sección activa en bold (scroll-spy JS)
  - Derecha: ícono Instagram → `https://www.instagram.com/tallerdeteatro.mogordoy/`
  - CTA "Escríbenos" en rojo
  - Dropdown "Fotos & Videos" con sub-items: Instagram / Fotos / Videos
  - Hamburger para mobile
  - `.hero-nav.scrolled` class cuando scrollY > 60px
- **H1:** "ACTUAR ES / ENTRAR EN / OTRO ESTADO." ("OTRO ESTADO." en rojo)
- **Overline:** "Desde 2010 en Buenos Aires — Desde 2020 en Barcelona · Gracia"
- **Footer hero:** horarios (Principiantes Lun/Mar/Jue, Intermedios/Avanzados Mié), ubicación
- **CTAs:** "Ver talleres →" (rojo), "Reservar clase →" (outline)
- **Badge:** `5 ⭐⭐⭐⭐⭐ · 88 reseñas en Google`
- **WhatsApp sticky:** botón flotante → `+34 676 694 958`

### BLOQUE 02 — RESEÑAS GOOGLE ✅

- Cabecera dos columnas: "5 ⭐⭐⭐⭐⭐ / 88 RESEÑAS / EN GOOGLE" (5 en dorado, stars en emoji)
- Párrafo descriptivo + link "VER LAS 88 RESEÑAS →" en dorado
- Carrusel de 15 cards: avatar iniciales, nombre, tag, 5 estrellas, texto reseña
- Layout: 3 visible desktop / 2 tablet / 1 mobile
- Navegación: flechas prev/next, scroll 1 card a la vez, dots indicadores, swipe táctil (umbral 40px)
- Pie del bloque: nota local SEO + badge ★★★★★

### BLOQUE 03 — GALERÍA (pantalla separada) ✅

**Comportamiento clave:** La galería NO aparece en el scroll del home. Es una pantalla independiente que se abre desde el menú nav (overlay `position: fixed; z-index: 500`). Tiene un botón "← Volver al inicio" que la cierra. El home queda debajo con `overflow: hidden` mientras está abierta.

**Estructura:**
```html
<div id="gallery-page" class="gallery-page">
  <button id="galleryBackBtn">← Volver al inicio</button>
  <section class="gallery" id="galeria">
    <!-- tabs + panels -->
  </section>
</div>
```

**JS clave:**
```javascript
function openGallery(tabName) {
  galleryPage.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  activateTab(tabName);
}
function closeGallery() {
  galleryPage.classList.remove('is-open');
  document.body.style.overflow = '';
}
// Nav dropdown links con data-tab → openGallery(tab)
// galleryBackBtn → closeGallery()
```

**Tab: Instagram**
- Banner con degradado Instagram (naranja→rosa→magenta), ícono IG, "Instagram" en Dancing Script, handle
- En prototipo local: grilla 3×3 de fotos locales que linkean a posts reales de Instagram
- En producción (GitHub Pages): reemplazar grid con LightWidget embed (código comentado en el HTML):
  ```html
  <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
  <iframe src="//lightwidget.com/widgets/1a9296d4bb355e0798da7f3c7fdcfdb6.html" ...></iframe>
  ```
  Widget ID de Seba: `1a9296d4bb355e0798da7f3c7fdcfdb6`

**Tab: Fotos**
- Masonry CSS (`columns: 4`, gap 5px) con ~190 fotos optimizadas
- Lazy loading, `display: none` para items > 24, botón "Ver más fotos" revela de a 24
- Lightbox: `position: fixed`, navegación ←/→/Esc, click backdrop cierra

**Tab: Videos**
- Grid CSS (`repeat(auto-fill, minmax(320px, 1fr))`, gap 24px)
- 23 videos en total:
  - 2 MP4 propios (intro4.mp4, WhatsApp behind-the-scenes)
  - 21 YouTube con patrón facade (thumbnail hqdefault.jpg + botón play rojo → iframe al click)
  - YouTube IDs incluidos: `_DD2o8RWFzI`, `4An61DJr39w`, `cjjhpn-KzAE`, `7QhxzpAznME`, `TD84FKxrxBk`, `naIClNQe0w8`, `2cWk5kOYHwU`, `365Bcun7_Es`, `xLtRvD8AvYc`, `LJ93odUhcX4`, `RnRlFAWvrxM`, `rKMlLob3r1w`, `iZfwvvey-nU`, `0C3BH-kmFjM`, `xR_3_4GiAi0`, `TRoP-U2jtb0`, `ABl8tfmsSFQ`, `gtPoO6fkpsM`, `-XcQ50iPW8c`, `LDhKgo5Z3ig`, `e6X8WgLgcKQ`

---

## Bloques pendientes (04 al 11)

| # | Nombre | Descripción |
|---|--------|-------------|
| 04 | Niveles / Talleres | Cards Principiantes / Intermedios / Avanzados con foto, descripción, horario, CTA. **El más importante para conversión.** |
| 05 | Nosotros | Sebastián y Candelaria — fotos profesionales, bio, filosofía |
| 06 | El Espacio | Espacio La Mansión en Gracia — fotos, dirección, mapa Google |
| 07 | Metodología | Cómo son las clases, qué se trabaja, qué esperar |
| 08 | Precios / Inscripción | CTA a WhatsApp o formulario |
| 09 | Partners | Logos Teatre Lliure, Teatro Comunidad, etc. |
| 10 | Footer | Dirección, redes, legal |

---

## Imágenes disponibles (carpeta `imagenes_optimizadas/`)

~190 JPGs optimizadas. Claves:

| Archivo | Uso sugerido |
|---|---|
| `sebastian-mogordoy-director-actor-teatro-barcelona.jpg` | Nosotros, hero |
| `candelaria-sesin-actriz-profesora-teatro-barcelona.jpg` | Nosotros |
| `sebastian-mogordoy-candelaria-sesin-profesores-teatro-barcelona.jpg` | Nosotros juntos |
| `espacio-la-mansion-coworking-roger-flor-barcelona.jpg` | El Espacio |
| `nivel-avanzados-entrenamiento-actoral-teatro-barcelona.jpg` | Card Avanzados |
| `inscribir-lo-propio-taller-teatro-intermedios-barcelona.jpg` | Card Intermedios |
| `la-creacion-del-artificio-taller-teatro-principiantes-barcelona.jpg` | Card Principiantes |
| `logo-teatre-lliure-barcelona.jpg` | Partners |
| `logo-teatro-comunidad-barcelona.jpg` | Partners |
| `clase-teatro-barcelona-[mes]-2023-sesion-[N]-[NNN].jpg` | Galería (~169 fotos) |

---

## Videos disponibles

| Archivo | Notas |
|---|---|
| `hero-nuevo-1080p-web.mp4` | Hero desktop (13MB, 37s) |
| `hero-nuevo-720p-web.mp4` | Hero mobile (5.9MB) |
| `hero-poster-nuevo.jpg` | Poster video |
| `taller-de-teatro-intro4.mp4` (en servidor WP) | Video presentación en tab Videos |
| `WhatsApp-Video-2024-09-03-at-22.04.41.mp4` (en servidor WP) | Behind the scenes |

---

## Reglas inamovibles

1. **SEO:** No cambiar URLs ni keywords. El sitio rankea #1.
2. **Destino:** GitHub Pages — HTML/CSS/JS estático puro.
3. **Single-file prototype:** Todo en `06-home-completo.html`.
4. **No italic en títulos.** Archivo Black siempre upright, uppercase.
5. **Rojo (#E50914)** para acento. **Dorado (#FFD700)** solo en reseñas Google.
6. **Video hero siempre muted al inicio.**
7. **WhatsApp sticky** en toda la página → `+34 676 694 958`.
8. **LightWidget:** el código está comentado en el HTML, se activa al subir a GitHub Pages.

---

## Decisiones tomadas en esta sesión

- **GitHub Pages** en lugar de WordPress: más simple, el prototipo HTML ES el sitio final.
- **LightWidget** para el feed de Instagram en producción (widget ID ya configurado). En local se muestra grilla de fotos propias que linkean a Instagram.
- **Galería como pantalla separada** (overlay fijo) en lugar de sección en el scroll del home. Cada tab (Instagram/Fotos/Videos) se abre desde el menú nav.
- **Próximo paso sugerido:** Bloque 04 — Niveles/Talleres (las tres cards de conversión).
