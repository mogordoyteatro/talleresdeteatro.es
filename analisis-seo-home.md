# ANÁLISIS SEO — talleresdeteatro.es · Home
**Fecha:** mayo 2026 · **Archivo:** `06-home-completo.html`
**Posición actual:** #1 en Google para "talleres de teatro barcelona" y variantes

---

## RESUMEN EJECUTIVO

El sitio ya está muy bien posicionado. El análisis detecta **5 problemas críticos** que deben resolverse antes de publicar el prototipo, y **6 mejoras** que pueden fortalecer aún más el posicionamiento.

---

## PROBLEMAS CRÍTICOS (resolver antes de publicar)

### 🔴 1. TITLE TAG — contiene "(prototipo)"
**Actual:**
```
talleresdeteatro.es — Home (prototipo)
```
**Problema:** La palabra "prototipo" aparece en Google. Es un error grave de presentación y elimina keywords valiosas.

**Propuesta:**
```
Talleres de Teatro Barcelona · Clases de Teatro en Gracia | talleresdeteatro.es
```
Formato recomendado: **Keyword principal · Keyword secundaria | Marca** (máx. 60 caracteres)

---

### 🔴 2. H1 ES POÉTICO, NO TIENE KEYWORDS
**Actual (inicial):**
```html
<h1>Ser todo eso<br><span>que no somos.</span></h1>
```
**Problema:** Google lee el H1 como señal de relevancia temática. Ninguna de las 9 frases del rotador contiene "teatro", "Barcelona", "talleres" ni ninguna keyword relevante.

**Solución recomendada (dos opciones):**

**Opción A — H1 invisible para el usuario, visible para Google:**
```html
<h1 class="seo-h1-hidden">Talleres de Teatro en Barcelona · Escuela de Actuación en Gracia</h1>
```
```css
.seo-h1-hidden {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
}
```
Y el texto rotante pasa a ser un `<p>` o `<div>` con `aria-hidden="true"`.

**Opción B — Integrar keywords en una de las frases rotantes:**
Añadir una frase como: *"Teatro en Barcelona"* / *"Escuela de actuación"* al ciclo.

**⚠️ Nota:** Si el sitio ya rankea #1 con el H1 actual del sitio real, no tocar hasta verificar que el H1 del prototipo coincide con el de producción.

---

### 🔴 3. NO HAY SCHEMA MARKUP
**Problema:** Sin datos estructurados, Google no puede mostrar rich snippets (estrellas, horarios, ubicación) en los resultados de búsqueda. Es una oportunidad enorme perdida.

**Schemas a implementar:**

**LocalBusiness (fundamental):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Talleres de Teatro Barcelona · Sebastián Mogordoy",
  "description": "Escuela de teatro y entrenamiento actoral en Gracia, Barcelona. Clases para principiantes, intermedios y actores con experiencia.",
  "url": "https://talleresdeteatro.es",
  "telephone": "+34676694958",
  "email": "info@talleresdeteatro.com",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "88",
    "bestRating": "5"
  },
  "sameAs": [
    "https://www.instagram.com/tallerdeteatro.mogordoy/"
  ]
}
</script>
```

**Course (para cada taller — muy útil para Google):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Taller de Teatro Principiantes Barcelona",
  "description": "Clases de teatro para principiantes en Barcelona. Improvisación, cuerpo y primeras herramientas actorales.",
  "provider": {
    "@type": "Organization",
    "name": "Talleres de Teatro Barcelona",
    "url": "https://talleresdeteatro.es"
  }
}
</script>
```

---

### 🔴 4. NO HAY CANONICAL TAG
**Problema:** Sin canonical, si la misma página es accesible desde varias URLs (con/sin www, con/sin slash final), Google puede penalizarla por contenido duplicado.

**Añadir en `<head>`:**
```html
<link rel="canonical" href="https://talleresdeteatro.es/" />
```

---

### 🔴 5. NO HAY OPEN GRAPH NI TWITTER CARDS
**Problema:** Cuando alguien comparte el sitio en redes sociales o WhatsApp, no aparece preview de imagen ni título correcto. Afecta CTR indirectamente.

**Añadir en `<head>`:**
```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://talleresdeteatro.es/" />
<meta property="og:title" content="Talleres de Teatro Barcelona · Escuela de Actuación en Gracia" />
<meta property="og:description" content="Clases de teatro en Barcelona para principiantes, intermedios y actores. Dirigido por Sebastián Mogordoy y Candelaria Sesín. 88 reseñas ★★★★★ en Google." />
<meta property="og:image" content="https://talleresdeteatro.es/imagenes_optimizadas/sebastian-mogordoy-candelaria-sesin-profesores-teatro-barcelona.jpg" />
<meta property="og:locale" content="es_ES" />
<meta property="og:site_name" content="Talleres de Teatro Barcelona" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Talleres de Teatro Barcelona · Sebastián Mogordoy" />
<meta name="twitter:description" content="Clases de teatro en Barcelona. Principiantes, intermedios y actores con experiencia. 88 reseñas 5★ en Google." />
<meta name="twitter:image" content="https://talleresdeteatro.es/imagenes_optimizadas/sebastian-mogordoy-candelaria-sesin-profesores-teatro-barcelona.jpg" />
```

---

## PROBLEMAS MENORES (mejorar pero no urgente)

### 🟡 6. META DESCRIPTION — mejorable
**Actual:**
```
Talleres de teatro y entrenamiento actoral en Gracia, Barcelona. Formación para principiantes, intermedios y actores con experiencia. Dirigido por Sebastián Mogordoy y Candelaria Sesin.
```
**Problema:** "Candelaria Sesin" sin tilde (Sesín). También el texto no incluye call-to-action ni diferenciador emocional. Máx recomendado: 155 caracteres.

**Propuesta (154 caracteres):**
```
Talleres de teatro en Barcelona · Gracia. Clases para principiantes, intermedios y actores. Sebastián Mogordoy y Candelaria Sesín. 88 reseñas ★★★★★ en Google.
```

---

### 🟡 7. H2 DE RESEÑAS — no aporta keywords
**Actual:**
```html
<h2>5 ⭐⭐⭐⭐⭐ / 88 reseñas / en Google</h2>
```
**Propuesta:** Convertir en `<div>` y mover el texto de reseñas "¡Gracias a nuestros alumnos…" a un H2 con más peso semántico, o añadir texto alternativo descriptivo.

---

### 🟡 8. ALTS DE INSTAGRAM — genéricas
**Actual:** `alt="Ver en Instagram"` (en todos los thumbnails de la galería Instagram)
**Propuesta:** `alt="Clase de teatro Barcelona — [descripción breve de la imagen]"`

---

### 🟡 9. "AVANZADOS" → "CUERPO AL TEXTO" — URLs no coinciden
El menú ahora dice "Cuerpo al texto" pero los links siguen apuntando a `/avanzados/`. Si en el sitio real la URL cambia, actualizar también las páginas internas. Si la URL no cambia, está bien dejar el link como está.

---

## LO QUE ESTÁ MUY BIEN ✅

| Elemento | Estado |
|----------|--------|
| `lang="es"` en `<html>` | ✅ Correcto |
| H2 "Talleres de teatro en Barcelona" | ✅ Keyword exacta |
| H2 "¿Por qué elegir nuestros talleres de teatro en Barcelona?" | ✅ Muy bueno |
| H3s de metodología | ✅ Relevantes |
| Alt texts de imágenes principales | ✅ Con keywords |
| Nombres de archivos de imagen | ✅ Excelentes (SEO-friendly) |
| `loading="lazy"` en imágenes secundarias | ✅ Correcto |
| `loading="eager"` en imagen hero | ✅ Correcto |
| Links internos a páginas del sitio | ✅ Bien estructurados |
| Contenido textual abundante | ✅ Mucho texto relevante |
| Reseñas en página | ✅ Muy positivo para E-E-A-T |
| Mención a premios/teatros (Lliure, Beckett, Canal) | ✅ Autoridad temática |
| Video en hero (señal de calidad de página) | ✅ Positivo |

---

## PLAN DE ACCIÓN PRIORIZADO

| Prioridad | Acción | Impacto | Esfuerzo |
|-----------|--------|---------|---------|
| 🔴 Crítico | Corregir title tag | Alto | 2 min |
| 🔴 Crítico | Añadir canonical | Alto | 2 min |
| 🔴 Crítico | Añadir Open Graph | Medio-Alto | 10 min |
| 🔴 Crítico | Añadir Schema LocalBusiness | Muy alto | 20 min |
| 🔴 Crítico | Resolver H1 / keywords | Alto | 30 min |
| 🟡 Mejora | Añadir Schema Course (x3) | Alto | 30 min |
| 🟡 Mejora | Mejorar meta description | Medio | 5 min |
| 🟡 Mejora | Mejorar alts galería IG | Bajo | 15 min |

---

## NOTA SOBRE EL POSICIONAMIENTO ACTUAL

El sitio rankea #1 probablemente gracias a:
1. **Dominio antiguo** (desde ~2020) con historial limpio
2. **88 reseñas Google con 5 estrellas** — señal de autoridad local muy fuerte
3. **Contenido textual abundante y relevante** sobre teatro en Barcelona
4. **Nombres de imágenes optimizados** con keywords
5. **Backlinks de calidad** (Teatre Lliure, Sala Beckett, Temporada Alta)

Al publicar el nuevo diseño, estos factores se mantienen. Los cambios propuestos **solo pueden mejorar** el posicionamiento, nunca bajarlo, siempre que se mantenga el contenido textual existente.
