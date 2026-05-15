# Estado actual del rediseño — talleresdeteatro.es
**Fecha:** 2026-05-11  
**Para:** ChatGPT  
**De:** Seba (dueño del proyecto) + Claude (asistente de programación)

---

## Contexto del proyecto

Estamos rediseñando la web de **talleresdeteatro.es**, una escuela de teatro en Barcelona fundada y dirigida por **Sebastián Mogordoy** y **Candelaria Sesin**. Trabajan en el Espacio La Mansión, en el barrio de Gracia. Ofrecen tres niveles: **Principiantes, Intermedios y Avanzados**.

**Objetivo del rediseño:** que el sitio se vea moderno y limpio, que la información sea clara, que las fotos/videos/reseñas se vean bien, y que tanto personas sin experiencia como actores con formación tengan ganas de venir a probar.

**Restricción crítica:** el sitio rankea #1 en Google para sus palabras clave. No se pueden cambiar las URLs ni alterar la densidad de keywords del contenido SEO. El destino final es WordPress (no un framework JS).

---

## Sistema de diseño aprobado (tokens)

```css
:root {
  --bg:       #0C0C0C;   /* negro casi puro */
  --bg-2:     #161616;
  --white:    #FFFFFF;
  --g100:     #E0E0E0;
  --g300:     #909090;
  --g500:     #505050;
  --g700:     #282828;
  --g800:     #181818;
  --accent:   #E50914;   /* rojo Netflix */
  --gold:     #FFD700;   /* dorado — usado en reseñas */
  --pad-x:    clamp(24px, 5vw, 72px);
  --pad-y:    clamp(72px, 9vw, 120px);
  --max-w:    1280px;
}
```

**Tipografías:**
- Display / títulos: **Archivo Black** — siempre uppercase, letter-spacing: 0.01em, sin cursiva
- Cuerpo / UI: **Inter** — weights 300, 400, 500, 700
- Ambas vienen de Google Fonts

**Referencia estética:** Grec Festival de Barcelona (pósters tipográficos, fondo negro, tipografía bold upright que ocupa espacio). Nada "delicado" ni editorial clásico.

---

## Archivo principal

**`06-home-completo.html`** — prototipo HTML/CSS/JS single-file. Es el único archivo activo. Todos los cambios se hacen ahí.

Está en la carpeta del proyecto. Contiene todo el CSS inline en `<style>`, el HTML del body, y los scripts al pie antes de `</body>`.

---

## Lo que está construido (bloques completados)

### BLOQUE 01 — HERO (completo)

**Video de fondo fullscreen:**
- Archivo: `hero-nuevo-1080p-web.mp4` (13MB, 1920×1080, 37s, 2847kbps, con audio AAC)
- Versión mobile: `hero-nuevo-720p-web.mp4` (5.9MB, 720p)
- Poster: `hero-poster-nuevo.jpg` (frame al segundo 3)
- El video arranca siempre en **mute** (requisito del browser para autoplay). Hay un botón ícono de sonido abajo a la derecha para activarlo.

**Estructura del hero:**
```html
<header>
  <section class="hero">
    <video class="hero-video" autoplay muted loop playsinline preload="metadata" poster="hero-poster-nuevo.jpg">
      <source src="hero-nuevo-1080p-web.mp4" type="video/mp4" media="(min-width: 769px)">
      <source src="hero-nuevo-720p-web.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay"></div>  <!-- degradado cinematográfico -->
    <div class="hero-fade"></div>     <!-- fade suave hacia la siguiente sección -->
    <button class="hero-sound" id="soundBtn">...</button>  <!-- toggle mute/unmute -->
    <nav class="hero-nav">...</nav>
    <div class="hero-body">...</div>
  </section>
</header>
```

**Nav (barra de navegación):**
- Izquierda: logo imagen (`<img>` apuntando a la URL del servidor WordPress) + tagline "Estudio de teatro | Dir. Sebastián Mogordoy"
- Centro/derecha: links del menú todos en blanco, la sección activa en bold (se detecta por scroll con JS)
- Último ítem derecha: ícono SVG de Instagram → `https://www.instagram.com/tallerdeteatro.mogordoy/`
- Ítem CTA "Escríbenos" en rojo (#E50914)
- Ítems del menú: Bienvenidos / Principiantes / Intermedios / Avanzados / Nosotros / Fotos / Videos / Escríbenos

**Overline del hero:**
```
Desde 2010 en Buenos Aires — Desde 2020 en Barcelona · Gracia
```

**H1 aprobado:**
```
ACTUAR ES
ENTRAR EN
OTRO ESTADO.
```
"OTRO ESTADO." va en rojo (#E50914). Font-size: clamp(44px, 8.5vw, 118px). Line-height: 0.92.

**Footer del hero (info de talleres):**
```
Dirección artística
Sebastián Mogordoy / Candelaria Sesin

Talleres · temporada 2025–26
Principiantes — Lunes / Martes / Jueves 19–22h
Intermedios — Miércoles 19–22h
Avanzados — Miércoles 19–22h

Ubicación
Espacio La Mansión — Gracia, Barcelona
```

**Botones CTA:**
- "Ver talleres →" (botón primario rojo)
- "Reservar clase →" (botón outline transparente)
- Badge social: `5 ⭐⭐⭐⭐⭐ · 88 reseñas en Google`

---

### BLOQUE 02 — PRUEBA SOCIAL / RESEÑAS (completo)

**Cabecera del bloque (dos columnas):**
- Columna izquierda: overline "RESEÑAS DE ALUMNOS" en **dorado**, luego H2 enorme:
  ```
  5 ⭐⭐⭐⭐⭐
  88 RESEÑAS
  EN GOOGLE
  ```
  El "5" en dorado (#FFD700), el "⭐⭐⭐⭐⭐" en emoji reducido. "88 RESEÑAS / EN GOOGLE" en blanco.
- Columna derecha: párrafo descriptivo + link "VER LAS 88 RESEÑAS →" en dorado

**Carrusel de reseñas:**
- 15 cards en total (representativas de las 88 reales en Google)
- Layout: 3 visibles en desktop, 2 en tablet (≤960px), 1 en móvil (≤768px)
- Navegación: flechas prev/next. **Scroll de 1 card a la vez** (no por página)
- Dots indicadores generados dinámicamente
- Swipe táctil en móvil (umbral 40px)
- Botones disabled en los extremos

**Cada card tiene:** avatar iniciales, nombre, tag (Principiante/Actor/etc), 5 estrellas (★★★★★), texto de la reseña

**Pie del bloque:**
- Nota local SEO: "Clases presenciales en Gracia, Barcelona · Principiantes, intermedios y avanzados"
- Badge: `★★★★★ 5 / 5 · 88 reseñas · Google`

---

## Lo que NO está construido todavía (bloques pendientes)

Los bloques 03 al 11 de la home están pendientes. Aquí la estructura prevista:

| Bloque | Nombre | Descripción |
|--------|--------|-------------|
| 03 | Niveles / Talleres | Cards de Principiantes, Intermedios, Avanzados con fotos, descripción y CTA a cada página |
| 04 | Nosotros | Sebastián y Candelaria — fotos profesionales, bio corta, filosofía de enseñanza |
| 05 | Galería de fotos | Grid masonry o carrusel con las ~190 fotos optimizadas de clases |
| 06 | Videos | Sección con videos de clases/ensayos embebidos o en carrusel |
| 07 | El espacio | Espacio La Mansión en Gracia — fotos del lugar, dirección, mapa |
| 08 | Proceso / Metodología | Cómo son las clases, qué se trabaja, qué esperar |
| 09 | Precios e inscripción | Formulario o CTA a WhatsApp/email |
| 10 | Partners / Avalados por | Logos Teatre Lliure, Teatro Comunidad, etc. |
| 11 | Footer | Dirección, redes, legal, mapa |

---

## Imágenes disponibles

Se descargaron y optimizaron ~190 imágenes del servidor WordPress. Están en dos carpetas:

- `imagenes_originales/` — descargadas sin tocar
- `imagenes_optimizadas/` — redimensionadas a max 2000px, comprimidas, renombradas con SEO

**Imágenes clave disponibles:**

| Nombre archivo | Uso sugerido |
|---|---|
| `sebastian-mogordoy-director-actor-teatro-barcelona.jpg` | Hero, sección Nosotros |
| `candelaria-sesin-actriz-profesora-teatro-barcelona.jpg` | Sección Nosotros |
| `sebastian-mogordoy-candelaria-sesin-profesores-teatro-barcelona.jpg` | Nosotros (juntos) |
| `espacio-la-mansion-coworking-roger-flor-barcelona.jpg` | Sección El Espacio |
| `nivel-avanzados-entrenamiento-actoral-teatro-barcelona.jpg` | Card Avanzados |
| `inscribir-lo-propio-taller-teatro-intermedios-barcelona.jpg` | Card Intermedios |
| `la-creacion-del-artificio-taller-teatro-principiantes-barcelona.jpg` | Card Principiantes |
| `clase-teatro-intermedios-barcelona-ensayo-01.jpg` | Galería / Editorial |
| `clase-teatro-intermedios-barcelona-ensayo-02.jpg` | Galería / Editorial |
| `clase-teatro-barcelona-foto-estudio-01.jpg` | Galería estudio |
| `clase-teatro-barcelona-foto-estudio-02.jpg` | Galería estudio |
| `clase-teatro-barcelona-mayo-2023-sesion-1-001.jpg` a `...sesion-final-030.jpg` | Galería sesiones (~169 fotos) |
| `logo-teatre-lliure-barcelona.jpg` | Sección Partners |
| `logo-teatro-comunidad-barcelona.jpg` | Sección Partners |

**Mapa completo de nombres SEO:** archivo `07-mapa-nombres-seo-imagenes.md`

---

## Videos disponibles

| Archivo | Resolución | Tamaño | Duración | Notas |
|---|---|---|---|---|
| `hero-nuevo-1080p-web.mp4` | 1920×1080 | 13MB | 37s | Principal, con audio |
| `hero-nuevo-720p-web.mp4` | 1280×720 | 5.9MB | 37s | Mobile fallback |
| `hero-poster-nuevo.jpg` | 1920×1080 | 320KB | — | Poster del video |

---

## Restricciones y reglas de negocio

1. **SEO primero.** El sitio rankea #1 en Google. Las URLs existentes son sagradas. No cambiar slugs ni keywords principales.
2. **Destino: WordPress.** El prototipo HTML se convertirá en tema WordPress. No usar frameworks JS ni dependencias de NPM.
3. **Single-file prototype.** Todo en `06-home-completo.html` hasta que sea aprobado. CSS inline en `<style>`, JS inline al pie.
4. **No italic en títulos.** Archivo Black siempre upright, uppercase.
5. **Rojo (#E50914) para el acento principal.** Dorado (#FFD700) solo para el bloque de reseñas Google.
6. **Video siempre muted al inicio** (requisito del browser).
7. **WhatsApp sticky:** hay un botón flotante de WhatsApp en toda la página → `+34 676 694 958`.

---

## Flujo de trabajo actual

- **Seba** define la dirección y da feedback visual con screenshots
- **Claude** programa todos los cambios en el HTML
- **ChatGPT** puede proponer copy, estructura de bloques, ideas de diseño — Claude los implementa
- El archivo `06-home-completo.html` es la única fuente de verdad del prototipo

---

## Próximo paso sugerido

Diseñar y programar el **Bloque 03 — Niveles / Talleres**: tres cards (Principiantes, Intermedios, Avanzados) con foto, descripción corta, horario y CTA. Es la sección más importante después del hero porque convierte la visita en inscripción.
