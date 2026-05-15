# PROYECTO REDISEÑO WEB — TALLERES DE TEATRO BARCELONA
## talleresdeteatro.es — Documentación completa del proyecto

---

## 1. QUÉ ES EL PROYECTO

Rediseño completo de la web de **Talleres de Teatro Barcelona**, dirigidos por **Sebastián Mogordoy** y **Candelaria Sesín**. Estudio de teatro en el barrio de Gracia, Barcelona, activo desde 2010 (antes en Buenos Aires, desde 2020 en Barcelona).

El sitio actual (WordPress) ya **rankea #1 en Google para "talleres de teatro barcelona"** y keywords relacionadas. La prioridad máxima del rediseño es **mantener ese posicionamiento y mejorarlo**, además de modernizar el diseño, mejorar la conversión y hacer que el mensaje llegue con más fuerza.

**Web live actual:** https://www.talleresdeteatro.es  
**Email:** info@talleresdeteatro.com  
**WhatsApp:** +34 676 69 49 58  
**Instagram:** @tallerdeteatro.mogordoy  
**Ubicación:** Espacio La Mansión, Carrer de Roger de Flor 253, Local 2 y 3, 08025 Barcelona · Gracia  
**Metro:** Verdaguer (L4/L5) o Sagrada Família (L2/L5)

---

## 2. SISTEMA DE DISEÑO (DESIGN SYSTEM)

### Tipografía
- **Titulares:** Archivo Black (Google Fonts) — uppercase, sin serif, contundente
- **Cuerpo:** Inter (Google Fonts) — weights 300/400/500/700
- **Textos poéticos/pedagógicos:** Georgia / Times New Roman — italic

### Paleta de colores
```css
--bg:     #0C0C0C   /* negro principal */
--bg-2:   #111111   /* negro secciones */
--bg-3:   #161616   /* negro oscuro variante */
--white:  #FFFFFF
--accent: #E50914   /* rojo principal — CTAs, énfasis */
--gold:   #FFD700   /* dorado — overlines, nav activo, highlights */
--g100:   #E0E0E0
--g300:   #909090
--g500:   #505050
--g700:   #282828
--g800:   #181818
--pad-x:  clamp(24px, 5vw, 72px)
--pad-y:  clamp(72px, 9vw, 120px)
--max-w:  1280px
```

### Navbar (igual en todas las páginas)
- Fija, 68px altura, glassmorphism (backdrop-filter: blur 16px)
- Logo + tagline "Estudio de teatro | Dir. Sebastián Mogordoy"
- Items de menú: **blancos** siempre
- Item activo (página actual): **dorado (#FFD700) + bold**
- "Escríbenos" (CTA): rojo accent
- Niveles (Principiantes / Con experiencia / Cuerpo al texto): dorado
- Dropdown "Fotos & Videos" con 3 subopciones
- Icono Instagram + botón hamburger mobile

### Estilo visual general
- Todo sobre fondo negro
- Imágenes con overlays oscuros
- Efecto parallax en fotos editoriales
- YouTube facade pattern (thumbnail estática, iframe solo al hacer clic)
- Galerías de fotos con lightbox y carga lazy
- Texto en español de España (no argentino — sin voseo)

---

## 3. PÁGINAS DEL PROYECTO

### Archivos HTML creados (rediseño completo)

| Archivo | URL live | Propósito |
|---------|----------|-----------|
| `07-home-seo.html` | talleresdeteatro.es/ | Página principal |
| `principiantes-v2.html` | talleresdeteatro.es/principiantes/ | Taller principiantes |
| `con-experiencia-v2.html` | talleresdeteatro.es/intermedios/ | Taller con experiencia |
| `cuerpo-al-texto-v1.html` | talleresdeteatro.es/avanzados/ | Taller avanzado |
| `nosotros-v2.html` | talleresdeteatro.es/quienes-somos/ | Quiénes somos |
| `contacto-html.html` | talleresdeteatro.es/contacto-html/ | Contacto |
| `sitemap.xml` | talleresdeteatro.es/sitemap.xml | Sitemap SEO |
| `robots.txt` | talleresdeteatro.es/robots.txt | Robots SEO |

Todos son **archivos HTML únicos autocontenidos** (sin frameworks, sin dependencias externas salvo Google Fonts). El CSS y JS están embebidos en cada archivo.

---

## 4. SECCIONES POR PÁGINA

### HOME (07-home-seo.html) — 4504 líneas
1. **Hero** — Imagen de fondo a pantalla completa, texto poético "Ser todo eso que no somos.", overline con años y ciudad, 2 CTAs (Prueba una clase / Ver talleres)
2. **Reviews** — 5 reseñas Google destacadas con foto, nombre y texto. H2 con rating "5★ 88 reseñas en Google"
3. **Niveles** — 3 tarjetas: Principiantes / Con experiencia / Cuerpo al texto con descripción, horario y CTA
4. **Por qué elegirnos** — 6 conceptos metodológicos con texto
5. **El teatro como forma de vida** — Sección editorial con texto filosófico
6. **Nosotros (mini)** — Cards de Sebastián y Candelaria con foto circular, rol y link a la página nosotros
7. **15 años juntos / Tenemos el teatro** — Imagen editorial full-bleed con texto overlay izquierda
8. **LA BANDA DE LOS ACTORES** — Foto grupal en blanco y negro, texto sobre la comunidad
9. **Sebastián en escena** — Video embed YouTube (facade)
10. **FAQ** — 9 preguntas frecuentes en acordeón
11. **Espacio La Mansión** — Info de ubicación, horarios, mapa Google Maps embed
12. **Galería** — Sistema de tabs (Instagram / Fotos / Videos) con lightbox. ~700 imágenes locales
13. **CTA final** — "Ser el poema. Imaginar con el cuerpo." con imagen de fondo y 2 CTAs
14. **Footer** — Links internos, info de contacto

### PRINCIPIANTES (principiantes-v2.html) — 3370 líneas
1. **Hero** — Video de fondo (facade) o imagen, headline "No necesitas haber actuado nunca."
2. **Metodología** — 4 conceptos (Juego adulto, Presencia real, Vínculo genuino, Libertad expresiva)
3. **El proceso** — 6 etapas del trabajo semanal con iconos y descripción
4. **Video** — Embed YouTube facade "Dar el salto"
5. **Testimonios** — 6 reseñas de alumnos principiantes
6. **Instagram teaser** — Feed de Instagram estático
7. **Info práctica** — Horarios, precio, inscripción (2 columnas)
8. **FAQ** — 8 preguntas específicas de principiantes
9. **Galería** — Carrusel de fotos del taller (~700 imágenes)
10. **Ubicación** — Mapa y dirección
11. **CTA final** — "Para el que quiere entrar en escena"
12. **Mini-footer** — Con links a todas las demás páginas

### CON EXPERIENCIA (con-experiencia-v2.html) — 2592 líneas
1. **Hero** — "El goce de diluirse en esa substancia."
2. **Laboratorio** — Descripción del trabajo: improvisación dirigida, poética personal, creación de escenas
3. **Las escenas** — 4 ejes de trabajo con descripción
4. **Tres ejes** — Método en 3 bloques: entrenamiento colectivo, escenas, poética individual
5. **Video** — "La tiranía del deseo"
6. **Testimonios** — Reseñas de alumnos con experiencia
7. **Info práctica** — Horarios, precio, inscripción
8. **FAQ** — 8 preguntas de actores con experiencia
9. **Ubicación + Mapa**
10. **CTA final** — "Hay algo tuyo que todavía no entró al espacio."
11. **Galería** — Carrusel de fotos (~644 imágenes)
12. **Footer SEO** — Con cross-links a todas las páginas

### CUERPO AL TEXTO (cuerpo-al-texto-v1.html) — 2006 líneas
1. **Hero** — "Las palabras salen de un cuerpo."
2. **Entrenamiento** — Descripción del trabajo con texto y escenas
3. **El texto no se recita** — Editorial filosófica sobre el trabajo actoral
4. **Video** — "Decir desde la escena"
5. **Testimonios** — Reseñas de actores formados
6. **Info práctica** — Para actores con formación académica o independiente
7. **FAQ** — 8 preguntas nivel avanzado
8. **Ubicación + Mapa**
9. **CTA final** — "Algunas palabras todavía no pasaron por tu cuerpo."
10. **Carrusel** — Fotos del taller avanzado
11. **Footer SEO** — Con cross-links

### NOSOTROS (nosotros-v2.html) — 1546 líneas
1. **Hero** — Imagen "VALENTIA.png" (foto de Sebastián y Candelaria). Watermark "NOSOTROS." semitransparente centrado
2. **Manifiesto** — Texto filosófico sobre el teatro que les interesa
3. **Tenemos el teatro** — Editorial con imagen actuacion-0207, texto justificado izquierda
4. **Sebastián Mogordoy** — Foto + 2 videos (YouTube + Vimeo) + texto pedagogía en Georgia italic + bio + CV completo en acordeón (`<details>/<summary>`) + link a web personal
5. **Candelaria Sesín** — Foto B&W + Instagram debajo + bio + CV completo en acordeón
6. **LA BANDA DE LOS ACTORES** — Foto grupal + texto sobre la comunidad
7. **Galería** — "Nuestro universo en imágenes."
8. **CTA final** — "Ser el poema. Imaginar con el cuerpo." con imagen actuacion-0231

### CONTACTO (contacto-html.html) — 1182 líneas
1. **Hero** — Imagen de fondo, watermark "ESCRÍBENOS.", H1 "Ven a una clase de prueba, ¡sin cargo!"
2. **Strip rojo** — Contacto rápido: WhatsApp / Email / Instagram
3. **Formulario + Info** — 2 columnas: izquierda formulario (nombre, apellido, email, teléfono, nivel de taller, mensaje), derecha cards de contacto directo y redes sociales
4. **Parallax La Mansión** — Foto `clase-teatro-espacio-mansion-barcelona-0008.jpg` con efecto parallax
5. **Ubicación + Horario** — Dirección, metro, horarios por nivel, tabla de horarios, mapa embed
6. **CTA "Ven a probar. ¡Sin cargo!"** — Con 2 botones: WhatsApp y Email
7. **Footer** — Links internos

---

## 5. SEO — ESTADO ACTUAL

### Keywords principales que ya rankean #1
- "talleres de teatro barcelona"
- "clases de teatro barcelona"
- "teatro principiantes barcelona"
- "taller de teatro gracia"

### Lo que se optimizó en el rediseño

**Técnico:**
- Todos los archivos: HTML semántico limpio, un solo H1 por página
- JSON-LD Schema Markup: LocalBusiness, Course (x3), FAQPage (x4 páginas), ContactPage, Organization, Person (x2), AggregateRating, BreadcrumbList, GeoCoordinates, PostalAddress
- `robots.txt` con sitemap declarado, bloqueando /wp-admin/ y /wp-json/
- `sitemap.xml` con las 6 URLs, prioridades y fechas
- Meta robots: `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`
- Canonical URLs apuntando siempre a las URLs live de WordPress
- Open Graph completo: og:title, og:description, og:image (1200×630), og:locale, og:site_name
- Twitter Card: summary_large_image

**Contenido:**
- Meta descriptions: todas entre 141–155 caracteres (límite Google)
- Title tags: todos entre 59–78 caracteres con keyword principal al inicio
- AggregateRating (88 reseñas ★5) declarado en todas las páginas de taller → habilita estrellas en SERPs
- Cross-links internos entre todas las páginas en footer
- Alt text descriptivo en todas las imágenes con keywords naturales
- FAQPage schema con 8-9 preguntas por página → candidato a featured snippets

**Imágenes:**
- ~700 imágenes locales en `imagenes_optimizadas/` (JPG optimizados)
- Todas las imágenes verificadas — ninguna rota
- Lazy loading en imágenes de galería, eager en hero (LCP)
- Preload del hero image en `<head>`

---

## 6. TECNOLOGÍA

```
Lenguaje:     HTML5 + CSS3 + JavaScript vanilla
Dependencias: Solo Google Fonts (Archivo Black + Inter)
Sin:          React, Vue, Bootstrap, jQuery, ni ningún framework
Imágenes:     Locales en /imagenes_optimizadas/ (~700 fotos)
Videos:       YouTube facade (thumbnail local, iframe on click) + Vimeo embed
Mapas:        Google Maps embed (iframe)
Fuente:       Un solo archivo .html por página (todo inline)
```

**Patrones JS implementados:**
- YouTube/Vimeo facade pattern (carga diferida de iframes)
- Galería con lightbox nativo (sin librerías)
- Parallax scroll con requestAnimationFrame
- Nav scroll-spy + fondo sólido al hacer scroll
- Hamburger menu mobile
- Dropdown "Fotos & Videos" con hover + click mobile
- FAQ acordeón (`<details>/<summary>` nativo HTML)
- CV acordeón (misma técnica)
- Carousel drag-to-scroll con touch support
- Form submission → abre WhatsApp con mensaje pre-completado

---

## 7. ARCHIVOS DEL PROYECTO

```
/pagina web talleres/
├── 07-home-seo.html              ← Home (página principal)
├── principiantes-v2.html         ← Taller principiantes
├── con-experiencia-v2.html       ← Taller con experiencia
├── cuerpo-al-texto-v1.html       ← Taller avanzado
├── nosotros-v2.html              ← Quiénes somos
├── contacto-html.html            ← Contacto
├── sitemap.xml                   ← Sitemap SEO
├── robots.txt                    ← Robots SEO
├── imagenes_optimizadas/         ← ~700 fotos (JPG)
│   ├── actores-taller-barcelona-0371.jpg ... 0995.jpg
│   ├── actuacion-teatro-barcelona-0007.jpg ... 0992.jpg
│   ├── taller-teatro-barcelona-principiantes-0006.jpg ... 0366.jpg
│   ├── taller-teatro-gracia-barcelona-0002.jpg ... 1134.jpg
│   ├── clase-teatro-espacio-mansion-barcelona-0001.jpg ...
│   ├── VALENTIA.png              ← Hero nosotros
│   ├── sebastian-mogordoy-*.jpg  ← Fotos directores
│   ├── candelaria-sesin-*.jpg
│   └── ...
└── [archivos antiguos/borradores no usados]
```

---

## 8. PERSONAS — DIRECTORES

### Sebastián Mogordoy
- Actor, director y pedagogo teatral argentino
- Dirige los talleres desde 2010 (Buenos Aires) y 2020 (Barcelona)
- Web personal: www.sebamogordoy.com
- Instagram: @sebamogordoy
- TV: "El profesor" (Netflix, 2026), "Los Serrano" (Telecinco), "Punta Escarlata" (RTVE)
- Cine: "El mundo es suyo", "El reino", "Tiempo después", entre otras
- Teatro: "Proyecto Lázaro", "Ama Rosa", "El juego de los hipócritas" y más
- Docencia: 15+ años, formación con Ricardo Bartís en Sportivo Teatral, Buenos Aires

### Candelaria Sesín
- Actriz y pedagoga teatral argentina
- Codirectora de los talleres
- Instagram: @candelariasesin
- Formación: IUNA (Instituto Universitario Nacional del Arte), Buenos Aires
- Teatro: extensa trayectoria en teatro independiente
- Gestión cultural: coordinación de muestras y producciones

---

## 9. OFERTA — LOS TRES TALLERES

### Principiantes — "La Creación del Artificio"
- **Para:** Personas sin experiencia previa
- **Días:** Lunes o Jueves
- **Horario:** 19:00 a 22:00 (3 horas)
- **Método:** Improvisación dirigida, cuerpo, presencia escénica, juego
- **Primera clase:** Sin cargo (clase de prueba gratuita)

### Con Experiencia — "Inscribir lo Propio"
- **Para:** Personas con algo de recorrido teatral
- **Días:** Miércoles
- **Horario:** 19:00 a 22:00 (3 horas)
- **Método:** Improvisación dirigida, poética personal, creación de escenas propias
- **Primera clase:** Sin cargo

### Cuerpo al Texto — "Cuerpo al Texto"
- **Para:** Actores formados (formación académica, teatro independiente)
- **Días:** Miércoles
- **Horario:** 19:00 a 22:00 (3 horas)
- **Método:** Trabajo con texto dramático, escenas, monólogos, lógica de la situación
- **Primera clase:** Sin cargo

---

## 10. TONO Y VOZ DE MARCA

- **Idioma:** Castellano de España (no argentino — sin voseo, sin "vos", sin formas en -ás)
- **Registro:** Poético, directo, sin adornos innecesarios. Serio pero no académico
- **Filosofía visible:** El teatro no como hobby sino como forma de estar en el mundo, de fracturar lo cotidiano, de proponer intensidades poéticas
- **CTAs:** Siempre invitan a probar sin presión. "Primera clase sin cargo." / "Ven a probar."
- **Reseñas:** 88 reseñas en Google con media de 5★ — se usan activamente en el copy

---

## 11. PENDIENTES / POSIBLES MEJORAS FUTURAS

- Integrar formulario de contacto con backend real (actualmente abre WhatsApp al enviar)
- Añadir página de "Galería" independiente con todas las fotos
- Añadir página de "Noticias / Blog" para contenido fresco que refuerce el SEO
- Considerar añadir videos de testimonios (más impacto que texto)
- Optimizar las imágenes a formato WebP para mejorar Core Web Vitals
- Implementar en WordPress (reemplazar el tema actual con estas páginas)
- Google Analytics / Tag Manager para tracking de conversiones
- Conectar el formulario con un CRM o al menos con email (Formspree / EmailJS)
- Página de "Política de privacidad" y "Aviso legal" (requisito legal España/RGPD)

---

## 12. PREGUNTAS QUE PODRÍA AYUDAR A RESOLVER CHATGPT

- ¿Hay alguna mejora de copy/texto que haría el mensaje más efectivo?
- ¿Falta alguna sección clave para convertir visitantes en alumnos?
- ¿El flujo de navegación entre páginas es óptimo?
- ¿Qué estrategia de contenido ayudaría a mantener el #1 en Google?
- ¿Cómo mejorar la página de contacto para maximizar conversiones?
- ¿Hay algún elemento SEO técnico que no se haya contemplado?
- ¿Recomendaciones para el paso de estos HTML a WordPress?

---

*Documento generado: Mayo 2025 — Proyecto en desarrollo activo*
