# Resumen de sesión — con-experiencia-v2.html
## talleresdeteatro.es · Rediseño web

---

## Contexto del proyecto

Rediseño completo del sitio web de talleres de teatro en Barcelona (talleresdeteatro.es). El sitio tiene tres páginas principales:

- `home` (07-home-seo.html) — ya completada
- `principiantes-v2.html` — ya completada, sirve de referencia de diseño
- `con-experiencia-v2.html` — completada en esta sesión

**Objetivo general:** Que el sitio se vea moderno, limpio, con información clara, fotos y videos bien presentados, y que invite tanto a personas sin experiencia como a actores con trayectoria a unirse al taller.

---

## Sistema de diseño (compartido entre todas las páginas)

- **Fondo:** `#0C0C0C` (negro profundo)
- **Acento:** `#E50914` (rojo)
- **Dorado:** `#FFD700`
- **Blanco:** `#FFFFFF`
- **Tipografía títulos:** Archivo Black (uppercase)
- **Tipografía cuerpo:** Inter
- **Estilo visual:** Cinematográfico, editorial, estilo Grec / cartelería de teatro europeo
- **Un solo archivo HTML** por página (sin frameworks, sin dependencias externas)

---

## Página: con-experiencia-v2.html

**URL canónica:** `https://talleresdeteatro.es/intermedios/`
*(preserva el posicionamiento actual #1 en Google para esa URL)*

### Propuesta de la página

Esta página fusiona intermedios + avanzados en un solo taller llamado **"Con experiencia · Inscribir lo propio"**. Está dirigida a actores con trayectoria que quieren profundizar, crear escenas propias y desarrollar su poética personal. No es un taller para aprender qué es el teatro — es para descubrir qué teatro es cada uno.

---

## Secciones construidas (en orden)

### 1. HEAD / SEO
- `<title>`: Clases de Teatro con Experiencia en Barcelona | Intermedios y Avanzados
- Meta description, robots, canonical → `https://talleresdeteatro.es/intermedios/`
- Open Graph + Twitter Card completos
- **3 schemas JSON-LD:**
  - `Course` (educationalLevel: Intermediate)
  - `LocalBusiness` + `PerformingArtsTheater`
  - `FAQPage` con 8 preguntas

### 2. HERO
- Video de fondo: `somos-relato.mp4` (autoplay, muted, loop, playsinline)
- Botón de sonido: círculo 40px, arriba a la derecha bajo el nav (idéntico a principiantes)
- Número de taller: `02` (en principiantes es `01`)
- Títulos: **"Con experiencia."** / **"Inscribir lo propio."**
- Tagline: "Para actores profesionales y estudiantes avanzados que quieren profundizar, crear escenas y encontrar su poética."

### 3. PARA QUIÉN (intro statement)
- Titular poético en Archivo Black grande:
  > "El goce de diluirse en esa **substancia.**"
- Pull quote vertical:
  > "El trabajo ya no es aprender qué es el teatro. Es descubrir qué teatro eres tú."

### 4. STRIP IMAGEN
- Foto: `imagenes_optimizadas/ensayo-teatro-barcelona-0914.jpg`
- Imagen a pantalla completa, altura fija, object-fit cover

### 5. LABORATORIO
- Titular: "Laboratorio de investigación técnica y desarrollo de la poética."
- Subtítulo en rojo grande (Archivo Black 100px): **"Entrenamos actuar."**

### 6. EL TRABAJO SOBRE LA ESCENA (4 cards)
- Improvisación dirigida
- Fuerzas en juego
- Poética personal
- Creación de escenas

### 7. FOTO EDITORIAL
- Foto: `imagenes_optimizadas/actores-taller-barcelona-0603.jpg`
- Caption: "Lo propio en escena."

### 8. METODOLOGÍA
- Header superior con descripción del método
- Grid 3 columnas:
  - Entrenamiento colectivo
  - Improvisación de escenas
  - Poética individual

### 9. VIDEO 50/50
- YouTube facade (thumbnail → iframe al hacer clic)
- Video ID: `4An61DJr39w`
- Título: "Entrar en la escena."

### 10. TESTIMONIOS
- Testimonio destacado: Rodrigo M. (actor con experiencia)
- Grid 2×2 con 4 testimonios adicionales

### 11. INFO PRÁCTICA
- Tabla 6 filas: día/hora, duración, nivel, lugar, precio, inscripción
- 2 CTAs: WhatsApp + teléfono

### 12. FAQ
- 8 preguntas/respuestas con `<details>/<summary>` nativos
- JS toggle `+` / `×`

### 13. MAPA / UBICACIÓN
- Dirección: Roger de Flor 253, Espacio La Mansión, Barcelona
- Metro: Verdaguer (L5) / Sagrada Família (L2-L5)
- Facade estática → clic carga Google Maps iframe

### 14. CTA FINAL
- Frase: "Tal vez ya hay una escena esperándote."
- 2 botones: WhatsApp + "Ver el taller de principiantes"

### 15. WHATSAPP STICKY
- Botón verde fijo en esquina inferior derecha, siempre visible

### 16. GALLERY OVERLAY
- Panel a pantalla completa con 3 tabs:
  - **Instagram:** 12 thumbnails con links a @tallerdeteatro.mogordoy
  - **Fotos:** 30 fotos en grid masonry, clic abre lightbox
  - **Videos:** 4 facades YouTube (IDs: 4An61DJr39w, 7QhxzpAznME, _DD2o8RWFzI, DXJLIxEDfdz)
- Se abre desde el link "Fotos & Videos" del nav

### 17. LIGHTBOX
- Visor de foto a pantalla completa
- Navegación con flechas y teclado (← →)
- Cierre con ESC o clic en fondo
- Compartido entre gallery overlay y galería universo

### 18. CARRUSEL B&W
- Título: "La sala, en movimiento."
- 18 slides, `filter: saturate(0)` (blanco y negro)
- Drag-to-scroll con mouse, swipe táctil
- Botones prev/next

### 19. GALERÍA UNIVERSO
- Sección `id="galeria"` (ancla del nav)
- Título: "El universo en **imágenes.**"
- 646 fotos shuffleadas con LCG seeded (SECCION_SEED=3)
  - Seed distinto a principiantes (seed=42) y home (seed=7) → orden diferente
- Carga inicial: 120 fotos
- Botón "Ver más fotos" en batches de 120
- Clic en foto → abre lightbox en la posición correcta

---

## JavaScript implementado

- Nav scroll (clase `scrolled`)
- Hero sound toggle (mute/unmute)
- Hamburger mobile menu
- Video 50/50 facade → iframe
- Mapa facade → iframe
- FAQ toggle `+`/`×`
- Gallery overlay: `openGallery()`, `closeGallery()`, switchTab()
- Lightbox: `window.openLightbox(srcs, idx)` — compartido globalmente
- Carrusel: drag, touch swipe, botones prev/next
- Galería universo: LCG shuffle seeded, renderBatch, load-more

---

## Decisiones de diseño tomadas

| Decisión | Motivo |
|---|---|
| Fusionar intermedios + avanzados en una sola página | Audiencia similar, evita duplicar contenido |
| URL canónica → `/intermedios/` | Preservar ranking #1 en Google existente |
| SECCION_SEED=3 para el shuffle de fotos | Orden diferente al de principiantes (seed=42) y home (seed=7) |
| Video hero diferente al de principiantes | `somos-relato.mp4` vs video de principiantes |
| Imágenes editoriales no repetidas | `ensayo-teatro-barcelona-0914` y `actores-taller-barcelona-0603` (distintas a principiantes) |
| Texto en castellano de España (tú, no vos) | Público objetivo en Barcelona/España |
| Botón sonido = círculo arriba derecha | Idéntico a principiantes para coherencia de UI |

---

## Archivos del proyecto

```
pagina web talleres/
├── 07-home-seo.html           ✅ completa
├── principiantes-v2.html      ✅ completa (referencia de diseño)
├── con-experiencia-v2.html    ✅ completa (esta sesión)
├── imagenes_optimizadas/      646 fotos JPG optimizadas
├── somos-relato.mp4           Video hero de con-experiencia (copiar manualmente)
└── resumen-sesion-con-experiencia.md  ← este archivo
```

---

## Pendiente / Para discutir con ChatGPT

- ¿El texto "El goce de diluirse en esa substancia" conecta bien con el público actor con experiencia?
- ¿Las 8 preguntas del FAQ cubren las dudas reales de alguien con experiencia?
- ¿El orden de las secciones es el más efectivo para convertir visitas en inscripciones?
- ¿Hay algo que falta para el actor con experiencia que aún no haya probado este taller?
- Próximo paso: ¿hacer una página de inicio rediseñada o primero publicar estas dos?
