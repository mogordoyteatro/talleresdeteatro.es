# SEO REPASO — talleresdeteatro.es
## Para ChatGPT: revisión independiente del trabajo implementado

**Sitio:** https://talleresdeteatro.es  
**Archivo:** `06-home-completo.html` (HTML/CSS/JS en un solo archivo, alojado en GitHub Pages)  
**Estado actual:** El sitio **ya rankea #1 en Google** para "talleres de teatro barcelona" y variantes. El objetivo es mantener o mejorar ese posicionamiento al publicar el rediseño.

---

## QUÉ SE IMPLEMENTÓ — código exacto

### 1. TITLE TAG
```html
<title>Talleres de Teatro Barcelona · Clases de Teatro en Gracia | talleresdeteatro.es</title>
```
*(antes decía: `talleresdeteatro.es — Home (prototipo)`)*

---

### 2. META DESCRIPTION
```html
<meta name="description" content="Talleres de teatro en Barcelona · Gracia. Clases para principiantes, intermedios y actores con experiencia. Sebastián Mogordoy y Candelaria Sesín. 88 reseñas ★★★★★ en Google." />
```

---

### 3. ROBOTS + CANONICAL
```html
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://talleresdeteatro.es/" />
```

---

### 4. OPEN GRAPH
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://talleresdeteatro.es/" />
<meta property="og:title" content="Talleres de Teatro Barcelona · Escuela de Actuación en Gracia" />
<meta property="og:description" content="Clases de teatro en Barcelona para principiantes, intermedios y actores. Dirigido por Sebastián Mogordoy y Candelaria Sesín. 88 reseñas ★★★★★ en Google." />
<meta property="og:image" content="https://talleresdeteatro.es/imagenes_optimizadas/sebastian-mogordoy-candelaria-sesin-profesores-teatro-barcelona.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="es_ES" />
<meta property="og:site_name" content="Talleres de Teatro Barcelona" />
```

---

### 5. TWITTER CARD
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Talleres de Teatro Barcelona · Sebastián Mogordoy y Candelaria Sesín" />
<meta name="twitter:description" content="Clases de teatro en Barcelona. Principiantes, intermedios y actores con experiencia. 88 reseñas 5★ en Google." />
<meta name="twitter:image" content="https://talleresdeteatro.es/imagenes_optimizadas/sebastian-mogordoy-candelaria-sesin-profesores-teatro-barcelona.jpg" />
```

---

### 6. SCHEMA — LocalBusiness
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Talleres de Teatro Barcelona · Sebastián Mogordoy",
  "description": "Escuela de teatro y entrenamiento actoral en Gracia, Barcelona. Clases para principiantes, intermedios y actores con experiencia. Dirigido por Sebastián Mogordoy y Candelaria Sesín.",
  "url": "https://talleresdeteatro.es",
  "telephone": "+34676694958",
  "email": "info@talleresdeteatro.com",
  "image": "https://talleresdeteatro.es/imagenes_optimizadas/sebastian-mogordoy-candelaria-sesin-profesores-teatro-barcelona.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Espacio La Mansión, Roger de Flor",
    "addressLocality": "Barcelona",
    "addressRegion": "Cataluña",
    "addressCountry": "ES",
    "postalCode": "08013"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.3964,
    "longitude": 2.1787
  },
  "openingHours": ["Mo 19:00-22:00", "Tu 19:00-22:00", "We 19:00-22:00", "Th 19:00-22:00"],
  "priceRange": "€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "88",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": ["https://www.instagram.com/tallerdeteatro.mogordoy/"],
  "founder": [
    {
      "@type": "Person",
      "name": "Sebastián Mogordoy",
      "jobTitle": "Director y Profesor de Teatro",
      "sameAs": "https://www.instagram.com/sebamogordoy/"
    },
    {
      "@type": "Person",
      "name": "Candelaria Sesín",
      "jobTitle": "Actriz y Profesora de Teatro",
      "sameAs": "https://www.instagram.com/candelariasesin/"
    }
  ]
}
```

---

### 7. SCHEMA — Cursos (ItemList con 3 Course)
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Talleres de Teatro Barcelona",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Taller de Teatro Principiantes Barcelona",
        "description": "Clases de teatro para principiantes en Barcelona. Improvisación, cuerpo, escucha y primeras herramientas actorales para entrar en la ficción desde la acción.",
        "url": "https://talleresdeteatro.es/principiantes/",
        "provider": { "@type": "Organization", "name": "Talleres de Teatro Barcelona", "url": "https://talleresdeteatro.es" },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": { "@type": "Place", "name": "Espacio La Mansión", "address": { "@type": "PostalAddress", "addressLocality": "Barcelona", "addressCountry": "ES" } },
          "scheduleTimezone": "Europe/Madrid"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "Taller de Teatro con Experiencia Barcelona",
        "description": "Clases de teatro para actores con experiencia previa en Barcelona. Personaje, presencia, deseo, conflicto y poética personal.",
        "url": "https://talleresdeteatro.es/intermedios/",
        "provider": { "@type": "Organization", "name": "Talleres de Teatro Barcelona", "url": "https://talleresdeteatro.es" },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": { "@type": "Place", "name": "Espacio La Mansión", "address": { "@type": "PostalAddress", "addressLocality": "Barcelona", "addressCountry": "ES" } }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "Cuerpo al Texto — Entrenamiento Actoral Barcelona",
        "description": "Taller avanzado de actuación sobre texto y escena en Barcelona. Trabajo sobre escenas y monólogos desde el cuerpo, el estado y las fuerzas de la situación.",
        "url": "https://talleresdeteatro.es/avanzados/",
        "provider": { "@type": "Organization", "name": "Talleres de Teatro Barcelona", "url": "https://talleresdeteatro.es" },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": { "@type": "Place", "name": "Espacio La Mansión", "address": { "@type": "PostalAddress", "addressLocality": "Barcelona", "addressCountry": "ES" } }
        }
      }
    }
  ]
}
```

---

### 8. H1 INVISIBLE CON KEYWORDS (CSS clip + HTML)
```css
.seo-h1-hidden {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}
```
```html
<h1 class="seo-h1-hidden">Talleres de Teatro Barcelona · Clases de Teatro en Gracia · Escuela de Actuación</h1>
```
El texto poético rotante pasó de `<h1>` a `<div aria-hidden="true">` para que Google no lo interprete como H1.

---

### 9. ALT TEXTS GALERÍA INSTAGRAM
Se reemplazaron los 12 `alt="Ver en Instagram"` genéricos por descripciones específicas con keywords. Ejemplos:
- `alt="Clase de teatro Barcelona — Talleres de Teatro Mogordoy"`
- `alt="Entrenamiento actoral avanzado — Teatro Barcelona"`
- `alt="Sebastián Mogordoy — Director Talleres de Teatro Barcelona"`
- `alt="Candelaria Sesín — Actriz y Profesora Teatro Barcelona"`
- `alt="Estudio de teatro Barcelona — Espacio La Mansión Gracia"`

---

## ESTRUCTURA DE HEADINGS COMPLETA (estado actual)

```
H1 (oculto, SEO): "Talleres de Teatro Barcelona · Clases de Teatro en Gracia · Escuela de Actuación"

H2: "5 ⭐⭐⭐⭐⭐ / 88 reseñas en Google"           ← sección reseñas
H2: "Talleres de teatro en Barcelona"               ← sección talleres (keyword exacta ✅)
H2: "¿Por qué elegir nuestros talleres de teatro en Barcelona?"  ← metodología ✅
H2: "15 años."                                       ← nosotros
H2: "Más allá de la ficción."                        ← comunidad
H2: "Sebastián Mogordoy en escena."                  ← noticias
H2: "El estudio en imágenes"                         ← galería

H3: "Principiantes"
H3: "Con experiencia"
H3: "Cuerpo al texto"
H3: "Sin experiencia previa"
H3: "El cuerpo como protagonista"
H3: "Desarrollo integral"
H3: "Poética personal"
H3: "Enfoque en el Aquí y Ahora"
H3: "Los encuentros"
H3: "Sebastián Mogordoy" (x2 — nosotros)
H3: "Candelaria Sesin" (x2 — nosotros)
H3: "El Fill"
H3: "Euforia y Desazón"
```

---

## CONTENIDO TEXTUAL RELEVANTE EN PÁGINA (keywords presentes)

- "talleres de teatro" — aparece múltiples veces en H2, H3, textos y alt
- "teatro Barcelona" — presente en title, H1, H2, meta, schema, alts
- "clases de teatro Barcelona" — en title, H1, schema
- "principiantes" — card, H3, URL, schema, alt
- "entrenamiento actoral" — en textos y alt
- "Gracia Barcelona" — en title, meta, schema
- "Espacio La Mansión" — en schema y textos
- "improvisación dirigida" — en textos descriptivos
- "Sebastián Mogordoy" — nombre propio, H3, schema, alt
- "Candelaria Sesín" — H3, schema, alt
- "escuela de teatro" — en H1 oculto y textos

---

## LO QUE NO ESTÁ (posibles gaps)

- **Sitemap XML** — no existe en el prototipo (puede estar en el servidor real)
- **FAQ Schema** — la sección "¿Por qué elegir...?" podría marcarse como FAQ
- **BreadcrumbList Schema** — útil para páginas internas, no crítico para home
- **Favicon/apple-touch-icon** — no hay en el prototipo
- **Preload de imagen hero** — la imagen/video principal podría tener `<link rel="preload">`
- **lang en hreflang** — el sitio es solo español, no crítico
- **Review Schema individual** — las reseñas del carrusel no están marcadas con schema (solo el AggregateRating del LocalBusiness)
- **Velocidad de carga** — el archivo HTML pesa bastante (CSS/JS inline). Sin datos reales de PageSpeed

---

## CONTEXTO ADICIONAL IMPORTANTE

- El sitio ya está en #1 en Google — cualquier cambio debe ser conservador
- Los nombres de imágenes ya están optimizados con keywords (ej: `clase-teatro-barcelona-octubre-2023-sesion-1-008.jpg`)
- Hay ~24 videos de YouTube embebidos (galería) — Google los indexa como contenido multimedia
- El sitio tiene backlinks de Teatre Lliure, Sala Beckett y Teatros del Canal (alta autoridad temática)
- 88 reseñas Google con 5 estrellas — señal de E-E-A-T muy fuerte
- El H1 visible era poético y rotante por JS — se optó por H1 oculto con keywords en lugar de modificar el diseño

---

## PREGUNTAS PARA CHATGPT

1. ¿El H1 oculto con `clip: rect(0,0,0,0)` es una técnica segura para Google o puede interpretarse como black hat SEO? ¿Existe una alternativa mejor?
2. ¿El Schema `LocalBusiness` con `aggregateRating` es suficiente para activar las estrellas en los resultados de búsqueda, o Google requiere también reviews individuales marcadas con schema?
3. ¿Falta algún Schema type relevante para una escuela de teatro / actividad cultural en Barcelona?
4. ¿Hay algo en la estructura de H2/H3 que convenga reorganizar para reforzar keywords?
5. ¿Los emojis ★★★★★ en la meta description pueden afectar negativamente el CTR o el indexado?
6. ¿Alguna recomendación técnica específica para sitios en GitHub Pages en términos de SEO?
7. ¿Hay algo que podamos hacer para que Google muestre un Knowledge Panel o rich result más completo para este negocio?
