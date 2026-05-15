# TRASPASO — talleresdeteatro.es · Rediseño web
**Fecha:** mayo 2026 · **Archivo principal:** `06-home-completo.html`

---

## QUÉ ES ESTE PROYECTO

Rediseño completo de la home de **talleresdeteatro.es**, escuela de teatro en Barcelona (barrio de Gracia, Espacio La Mansión). Dirigida por **Sebastián Mogordoy** (director, actor, docente) y **Candelaria Sesín** (actriz, profesora). Activos desde 2010 en Buenos Aires, desde 2020 en Barcelona.

El sitio actualmente **rankea #1 en Google** para sus keywords principales. El rediseño debe mantener y mejorar ese posicionamiento. Es un archivo HTML único (`06-home-completo.html`) con CSS y JS inline, pensado para GitHub Pages.

---

## DIRECCIÓN DE DISEÑO (NO CAMBIAR)

- **Fondo:** `#0C0C0C` (negro profundo)
- **Acento:** `#E50914` (rojo)
- **Dorado:** `#FFD700`
- **Tipografía display:** Archivo Black, uppercase, sin itálica
- **Tipografía cuerpo:** Inter
- **Estética:** editorial / afiche teatral / brutalismo tipográfico
- **Referencias:** Grec Festival de Barcelona, Sala Beckett, Temporada Alta

---

## ESTRUCTURA DE LA PÁGINA (de arriba a abajo)

### 1. HERO
- Video fullscreen de fondo (autoplay, muted)
- Texto rotante con dissolve suave (fade + blur): 9 frases que ciclan. Las dos más importantes:
  - *"Ser todo eso / que no somos."*
  - *"Ser todo eso / que imaginamos."*
- Bloque derecha: `ESTUDIO DE TEATRO / DIR. SEBASTIÁN MOGORDOY / JUNTO A CANDELARIA SESÍN`
- Botón volumen (debajo del bloque de dirección)
- Botones CTA: "Ver talleres →" y "Reservar clase →"
- Estrellas + texto "5.0 · 88 reseñas" con link Google

### 2. RESEÑAS (88 reseñas Google · 5 estrellas)
- Logo Google completo (wordmark) + "5 ⭐⭐⭐⭐⭐" + "88 reseñas en Google"
- Texto: "¡Gracias a nuestros alumnos…"
- Carrusel de reseñas de alumnos reales

### 3. TALLERES (Bloque principal)
Título: "Talleres de teatro en Barcelona"

**Banner nuevo grupo** (afiche editorial):
- Foto de fondo con overlay suave
- Panel translúcido: NUEVO GRUPO / PRINCIPIANTES (enorme)
- Badge amarillo: "Inicio junio 2026" (dentro del panel, bajo el título)
- Barra inferior **amarilla** con celdas: COORD / DÍA / HORARIO + CTA rojo
- Link a WhatsApp

**Tres cards:**
| Card | Subtítulo | Título | Horario |
|------|-----------|--------|---------|
| 01 | La creación del artificio. Formación | **Principiantes** | Lun / Mar / Jue · 19-22h |
| 02 | Inscribir lo propio. Entrenamiento | **Con experiencia** | Miércoles · 19-22h |
| 03 | Inicio septiembre | **Cuerpo al texto** | Lunes · 19-22h |

**Sección info expandida (3 columnas):**
- Cada columna: video YouTube (con marco rojo) + texto descriptivo + coord en dorado
- Principiantes: Coord. Sebastián Mogordoy — Candelaria Sesin
- Con experiencia: Coord. Sebastián Mogordoy — Candelaria Sesín
- Cuerpo al texto: Coord. Sebastián Mogordoy

**Sección metodología** ("¿Por qué elegir nuestros talleres?"):
- 6 items: Sin experiencia previa / El cuerpo como protagonista / Desarrollo integral / Poética personal / Enfoque en el Aquí y Ahora / Los encuentros

### 4. NOSOTROS
- Fotos de Sebastián y Candelaria
- Bio breve de cada uno
- Bloque "15 años" con foto
- Bloque "Más allá de la ficción" con foto de comunidad

### 5. NOTICIAS / TRABAJO EN ESCENA
- "Sebastián Mogordoy en escena"
- El Fill (Teatre Lliure, 2026) — con logo Lliure
- Euforia y Desazón (Temporada Alta / Sala Beckett / Teatros del Canal)

### 6. IMAGEN FINAL
- `foto-final-nariz.jpg` — imagen completa sin crop (object-fit: contain)

### 7. GALERÍA (tabs)
- Instagram (grid de thumbnails linkados)
- Fotos (grid estático)
- Videos (grid de iframes YouTube, ~24 videos)

### 8. FOOTER
- Nombre, redes sociales, navegación, datos de contacto

---

## CARPETA DE IMÁGENES
Todas en `imagenes_optimizadas/`. Nombres SEO-friendly:
- `principiantes-clase-2025.jpg`
- `intermedios-clase-2025.jpg`
- `avanzados-clase-2025.jpg`
- `banner-nuevo-grupo.jpg`
- `sebastian-mogordoy-director-actor-teatro-barcelona.jpg`
- `candelaria-sesin-actriz-profesora-teatro-barcelona.jpg`
- `Google_2015_logo.webp`
- `logo-teatre-lliure-barcelona.png`
- `logo-sala-beckett.png`
- `logo-teatro-comunidad-barcelona.jpg`
- (+ ~40 imágenes más de clases, ensayos, espacio)

---

## VIDEOS
- Hero: `hero-nuevo-1080p-web.mp4` / `hero-nuevo-720p-web.mp4`
- ~24 videos de YouTube embebidos en la galería

---

## MENÚ PRINCIPAL
- Bienvenidos · Principiantes · Con experiencia · Cuerpo al texto · Nosotros · Fotos & Videos · Escríbenos

---

## CONTACTO / LINKS IMPORTANTES
- Web: https://talleresdeteatro.es
- WhatsApp: +34 676 694 958
- Instagram: @tallerdeteatro.mogordoy
- Email: info@talleresdeteatro.com
- Reseñas Google: https://www.google.com/search?q=Talleres+de+Teatro+Sebastián+Mogordoy+Barcelona+reseñas

---

## KEYWORDS PRINCIPALES (sitio ya rankea #1)
- talleres de teatro barcelona
- clases de teatro barcelona
- taller de teatro barcelona
- escuela de teatro barcelona
- teatro gracia barcelona
- talleres de teatro gracia
- clases de teatro gracia
- teatro principiantes barcelona
- entrenamiento actoral barcelona

---

## LO QUE NO CAMBIAR (restricciones duras)
1. El posicionamiento SEO actual (#1 en Google) es intocable
2. Dirección tipográfica: Archivo Black / rojo / negro / dorado — NO cambiar
3. El H1 es poético y rota — hay un H2 con keywords fuertes que sostiene el SEO
4. Nombres de imágenes ya optimizados para SEO — no renombrar
5. URLs del sitio real no cambiar

---

## ESTADO ACTUAL
El prototipo está terminado visualmente. Pendiente antes de publicar:
- Corregir title tag (quitar "prototipo")
- Añadir Schema markup LocalBusiness + Course
- Añadir etiquetas Open Graph
- Añadir canonical tag
- Revisar H1 (actualmente poético — considerar H1 con keywords oculto o aria)
