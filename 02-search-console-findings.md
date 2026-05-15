# Search Console — hallazgos clave (16 meses)

**Periodo analizado:** enero 2025 – mayo 2026
**Propiedad:** sc-domain:talleresdeteatro.es

---

## Datos generales

- **3.544 clics** totales (~221 clics/mes promedio)
- **~177.000 impresiones** totales
- **Posición media: 10,8** (engañosa: en las queries top el ranking real es 2-5; el promedio baja por long-tail)
- **CTR medio: 2,0 %** (con margen claro para mejorar)
- **63% del tráfico viene de móvil**, 36% de desktop, 1% tablet
- **93% del tráfico desde España** (Argentina, Italia, Alemania, USA marginales)

El site rankea, pero más en el rango de página 1 (posiciones 2-5 en queries clave), no estrictamente #1 en todas. Que igual está fenomenal y es lo que confirma tu intuición de que el SEO es un activo real.

---

## Top 10 queries (16 meses) — ÉSTAS SE PROTEGEN SÍ O SÍ

| # | Query | Clics | Impresiones | Posición media | Lectura |
|---|---|---|---|---|---|
| 1 | clases de teatro barcelona | 120 | 1.303 | ~4 | Money keyword |
| 2 | taller de teatro | 80 | 2.993 | ~4-5 | Mucha impresión, **CTR bajo** — oportunidad |
| 3 | taller de teatro barcelona | 74 | 433 | ~3 | Excelente CTR |
| 4 | talleres de teatro barcelona | 58 | 1.522 | ~2-3 | Money keyword |
| 5 | clases de teatro para adultos barcelona | 52 | ~860 | ~4 | Segmento clave |
| 6 | taller de teatro barcelona (variantes) | + | + | | Variaciones múltiples |
| 7 | curso teatro barcelona | + | 176 | ~3,4 | Lo cubrimos sin pelearle a "curso" |
| 8 | clases de actuacion barcelona | + | 55 | ~2,4 | Money keyword secundaria |
| 9 | escuela de teatro barcelona | + | 346 | ~4,5 | Mucha impresión, CTR baja |
| 10 | escuelas de teatro barcelona | + | 209 | ~4,6 | Misma familia |

**Patrón claro:** las queries que convierten son combinaciones de `{taller / clase / curso / escuela} + de teatro + Barcelona`. Cualquier rediseño debe mantener estos términos visibles en el body, en H1/H2 (con un solo H1 limpio), en title y en meta description. No los podemos disolver en favor de copy poético.

Hay también una **familia secundaria en catalán** ("taller de teatre", "escola teatre barcelona", "curs teatre barcelona") con tráfico modesto. Vale la pena mantener algún bloque o variante en catalán para no perderla.

---

## Top páginas (16 meses) — el mapa del tráfico

| # | URL | Clics | Impresiones | CTR | Estado |
|---|---|---|---|---|---|
| 1 | `https://talleresdeteatro.es/` | 2.107 | 102.301 | 2,1% | Home HTTPS — la canónica |
| 2 | `http://www.talleresdeteatro.es/` | 1.350 | 119.609 | 1,1% | ⚠️ **DUPLICADO** (HTTP/www) |
| 3 | `/principiantes/` | 55 | 5.690 | 0,97% | OK, podría mejorar |
| 4 | `/avanzados/` | 30 | 13.497 | **0,22%** | ⚠️ **CTR pésimo con muchas impresiones** |
| 5 | `/quienes-somos/` | 26 | 5.565 | 0,47% | Bio del estudio |
| 6 | `/intermedios/` | 14 | 6.816 | **0,21%** | ⚠️ **CTR pésimo con muchas impresiones** |
| 7 | `/contacto-html/` | 14 | 1.764 | 0,79% | Página de contacto |
| 8 | `/info/` | 7 | 574 | 1,2% | Menor relevancia |
| 9 | `/fotos-2015-html/` | 3 | 281 | 1,1% | Galería |
| 10 | `/on-line-html/` | 2 | 138 | 1,4% | Probable cursos online |
| 11 | `/flyers-html/` | 1 | 210 | 0,5% | Carteles |
| 12 | `/la-tirania-del-deseo-ciclo-de-teatro/` | 1 | 84 | 1,2% | Ciclo |
| 13 | `/argetina/` | 1 | 80 | 1,3% | ⚠️ **Typo en URL** ("argetina" en vez de "argentina") |
| 14 | `/wp-content/uploads/2023/11/bienvenida.pdf` | 0 | 39 | 0% | PDF indexado |
| 15 | `/uncategorized/hello-world/` | 0 | 6 | 0% | ⚠️ **Hello World por defecto de WordPress** |
| 16 | `/category/uncategorized/` | 0 | 5 | 0% | ⚠️ **Categoría WP sin usar** |
| 17 | `/wp-content/uploads/2023/11/MG_6399-1024x683.jpg` | 0 | 1 | 0% | Imagen indexada suelta |

**Hallazgos críticos:**

1. **El homepage está indexado dos veces** — `https://talleresdeteatro.es/` (HTTPS canónica) Y `http://www.talleresdeteatro.es/` (HTTP-www como duplicada). La versión HTTP-www tiene **más impresiones que la HTTPS** pero con CTR mucho peor, y está pisando autoridad. Esto es lo más grave en SEO ahora mismo.

2. **`/avanzados/` e `/intermedios/` tienen CTR catastróficos** (0,22% y 0,21% respectivamente) a pesar de tener 13.500 y 6.800 impresiones. Eso significa que sus snippets (title + meta description) no enganchan a la gente que busca. Reescribirlos puede multiplicar clics x5-x10 sin tocar nada del ranking.

3. **Hay una URL con typo indexada**: `/argetina/`. Embarazoso. Probablemente un slug mal escrito al crear una página vieja sobre Argentina (los grupos del verano allá). Redirigir 301 a la URL correcta.

4. **WordPress por defecto sigue indexado**: el "Hello World" post de bienvenida, y la categoría "Uncategorized". Limpiar (noindex o borrar).

5. **El total de URLs con tráfico es solo 17** — el sitio es pequeño y manejable. Eso facilita la migración.

---

## URLs PROTEGIDAS (cero margen para romper)

Estas URLs no se cambian, no se renombran, no se rompen. Si por algún motivo se moviera contenido, va con 301 explícita:

```
https://talleresdeteatro.es/
https://talleresdeteatro.es/principiantes/
https://talleresdeteatro.es/intermedios/
https://talleresdeteatro.es/avanzados/
https://talleresdeteatro.es/quienes-somos/
https://talleresdeteatro.es/contacto-html/
https://talleresdeteatro.es/info/
https://talleresdeteatro.es/la-tirania-del-deseo-ciclo-de-teatro/
https://talleresdeteatro.es/on-line-html/
https://talleresdeteatro.es/flyers-html/
https://talleresdeteatro.es/fotos-2015-html/
```

Y todas las versiones HTTP/www deben hacer 301 → versión HTTPS sin www.

---

## Oportunidades SEO claras (todo upside)

### 1) Consolidar duplicado HTTP/www (impacto: alto)
- Configurar redirecciones 301 desde `http://www.talleresdeteatro.es/*` → `https://talleresdeteatro.es/*`.
- Verificar que solo haya **una** propiedad principal en Search Console (la versión sc-domain ya cubre todas, pero asegurar el canonical `<link rel="canonical">` en cada página apunte solo a HTTPS sin www).
- Tras esto, los ~1.350 clics duplicados se consolidarán en el dominio canónico, dándole más autoridad.

### 2) Reescribir snippets de /intermedios/ y /avanzados/ (impacto: alto)
- Esos dos snippets tienen 13.500 + 6.800 impresiones y casi nadie clica. Si pasamos de 0,22% a 2% de CTR (lo normal), son ~300 clics extra al año por página.
- Reescribir title y meta description con: beneficio claro, mención a "Barcelona", incluir "actores" (para /avanzados/) y "experiencia previa" (para /intermedios/), y un gancho ("método propio", "grupos reducidos", "clase de prueba gratis").

### 3) Añadir schema.org AggregateRating + Review (impacto: alto)
- Con 80 reseñas reales 5,0/5 en Google, marcar datos estructurados puede activar **estrellas en los resultados de búsqueda**.
- Esto sube CTR de forma transversal en TODAS las queries.
- Compatible con WordPress + Yoast / Rank Math fácilmente.

### 4) Limpiar URLs basura (impacto: bajo, pero sanea)
- Borrar (o `noindex`) el post "Hello World" y la categoría "Uncategorized".
- Redirigir 301 `/argetina/` → la URL real con contenido sobre la temporada argentina (o, si ya no aplica, redirigir a `/` con un mensaje).
- Decidir si el PDF `bienvenida.pdf` debe indexarse o ir en `noindex` (probablemente no aporta).

### 5) Mejorar /avanzados/ y /intermedios/ específicamente
- Cada una con copy distinto, sin canibalizar la home.
- /avanzados/ debería capturar específicamente "entrenamiento actoral barcelona", "actores profesionales", "formación avanzada", "Bartís", "Raúl Serrano".
- /intermedios/ debería capturar "intermedios", "ya tengo experiencia", "profundizar", "construcción del personaje".

### 6) Móvil first (impacto: alto)
- Móvil ya es el 63% del tráfico y tiene CTR de 2,8% vs 1,3% desktop. La velocidad y la experiencia móvil son críticas: si mejoramos Core Web Vitals (especialmente LCP y CLS), el ranking sube y el CTR también.

---

## Plan de protección para la migración

Antes de cualquier cambio en producción:

1. **Exportar CSV** completo de queries y páginas desde Search Console (hoy mismo) y guardarlo como baseline.
2. **Crear staging** en subdominio `noindex` con el rediseño.
3. **Mapeo URL por URL** (las 17 críticas) — confirmar que el rediseño respeta cada una.
4. **Plan de 301s**: HTTP/www → HTTPS-sin-www, y cualquier URL que mueva contenido.
5. **Schema.org AggregateRating** implementado en home y páginas de niveles.
6. **Sitemap.xml actualizado** y reenviado en Search Console.
7. **Validación previa al go-live**: Screaming Frog crawl staging + producción y diff.
8. **Go-live ventana baja** (martes mañana).
9. **Monitor semanal** en Search Console durante 4-6 semanas (impresiones, clics, posición por query top y por página top).
10. **Si una página clave cae más de 20% en impresiones**, revertir o ajustar inmediatamente.

---

## Próximo paso recomendado

Tenemos un mapa muy claro de qué proteger y qué oportunidades hay. Te propongo dos caminos posibles:

**A) Avanzar al diseño** con esta info como brief (yo me llevo las queries clave y las URLs protegidas como restricción dura, y arranco con la dirección de arte cinematográfica + propuesta de hero).

**B) Profundizar antes en SEO**: exportar el CSV completo para tener baseline guardado, y de paso revisar Indexación / Core Web Vitals / Enlaces (las otras secciones de Search Console) para no llevarnos sorpresas durante la migración.

Mi recomendación: **A primero, B en paralelo como tarea técnica antes del go-live.** El rediseño puede empezar ya con esta información; el resto de validación SEO técnica es para cuando esté el staging listo.
