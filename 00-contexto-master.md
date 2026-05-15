# Contexto maestro — Proyecto rediseño talleresdeteatro.es

**Última actualización:** mayo 2026
**Estado:** dirección visual aprobada — pendiente elegir acento final (rojo vs amarillo) y maquetar bloques del home
**Propósito de este archivo:** traspaso completo a ChatGPT (o cualquier modelo nuevo) para continuar el proyecto sin perder nada.

---

## 1) Resumen en 30 segundos

Seba (cliente) quiere rediseñar **www.talleresdeteatro.es** — el sitio de los Talleres de Teatro de Sebastián Mogordoy y Candelaria Sesin en Barcelona (Gracia). Objetivo: que se vea moderno, limpio, que el mensaje llegue, que las fotos/vídeos/reseñas se vean bien, y que dé ganas de venir a probar — tanto a principiantes como a actores con experiencia.

**Estética acordada:** negra, bold, contemporánea — referencias Festival Grec, teatros europeos (Schaubühne), Netflix.
**CTA principal:** contactar por WhatsApp (+34 676 69 49 58) o email (info@talleresdeteatro.com).
**Restricción dura:** la web ya está top en Google. **No se puede perder posicionamiento.**

---

## 2) Quién es el cliente

- **Nombre:** Seba (Sebastián Eliseo) — el estudio se llama "Estudio Sebastián Mogordoy" + Candelaria Sesin como coordinadora.
- **Email:** sebastian.eliseo@gmail.com
- **Idioma de trabajo:** español (acepta argentinismos, voseo ocasional). Escribe con erratas y abreviaciones — no corregir, sí entender.
- **Flujo de trabajo decidido:** ChatGPT para diseño/planificación. Claude para programar (HTML/CSS/JS/PHP/WordPress). Seba pasa los prompts entre los dos.

---

## 3) Sobre el negocio (talleresdeteatro.es)

**Qué es:** estudio de teatro / escuela de entrenamiento actoral en Barcelona desde 2010.
**Ubicación:** Espacio La Mansión, barrio Gracia, Barcelona.

**Profesores:**
- **Sebastián Mogordoy** — coordinador general, director, formación argentina (linaje Bartís, Raúl Serrano, Sergio Boris).
- **Candelaria Sesin** — codirección artística.
- Asistentes: Camila Granieri y Andrés Roska.

**Créditos profesionales:**
- Teatre Lliure, Sala Beckett, Netflix, festivales internacionales.
- Linaje pedagógico: Ricardo Bartís, Raúl Serrano, Sergio Boris.

**Tres niveles de talleres:**
1. **Principiantes** — "La creación del artificio" — Lunes o Jueves 19-22h. Grupo nuevo Martes 19-22h (Jun/Jul).
2. **Intermedios** — "Inscribir lo propio" — Miércoles 19-22h. "Últimas plazas".
3. **Avanzados** — "El ser mirado" — Miércoles 19-22h. Para actores formados.

Todos: 3 horas semanales, presenciales.

**Ciclo extra:** "La Tiranía del Deseo" (presentaciones de los grupos).
**Precios:** NO públicos. El usuario pregunta por WhatsApp.

**Léxico propio del estudio (preservar en el copy):**
- "actuar es un juego adulto"
- "fracturar lo real"
- "el cuerpo es el protagonista"
- "el campo imaginario"
- "el ser mirado"
- "la creación del artificio"
- "inscribir lo propio"
- "salto al vacío"
- "súper juego"
- "improvisación dirigida"
- "poética personal"

**Activos visuales existentes:**
- ~50 fotos del taller
- 3 vídeos en YouTube: `_DD2o8RWFzI`, `4An61DJr39w`, `RnRlFAWvrxM`
- 2 vídeos MP4 auto-hosted (taller-de-teatro-intro3.mp4 + WhatsApp-Video-2024-09-03)
- Feed de Instagram activo (@tallerdeteatro.mogordoy)
- **80 reseñas en Google con puntuación 5,0/5** ← activo crítico

---

## 4) Restricciones críticas del proyecto

### Restricción #1 — SEO: no perder el ranking

- La web rankea en posiciones 2-5 en queries clave ("talleres de teatro barcelona", "clases de teatro barcelona", etc.).
- 3.544 clics totales en 16 meses, 177.000 impresiones, 63% móvil.
- **URLs protegidas — no se pueden romper sin 301:**

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

- Mantener menciones de marca y ubicación ("Barcelona", "Gracia", "escuela de teatro", "entrenamiento actoral", "teatro Barcelona") distribuidas con sentido en el body, en H1/H2.
- Cualquier cambio en producción requiere staging, validación con Screaming Frog, 301s explícitas, monitoreo semanal post-launch.

### Restricción #2 — No tocar el sitio actual hasta el cutover

Las correcciones (HTTP/www, erratas, URLs basura) se aplican en bloque cuando el rediseño esté listo, no antes.

### Restricción #3 — Stack: WordPress con tema custom

WordPress como CMS, tema custom desde cero. No Next.js. Eliminar plugins pesados (Smash Balloon Instagram, Embedder for Google Reviews → reemplazo con código propio liviano).

---

## 5) Dirección visual — DECISIONES TOMADAS Y CERRADAS

### 5.1) Sistema tipográfico (aprobado)

| Uso | Tipografía | Peso | Estilo |
|---|---|---|---|
| Títulos / Display | **Archivo Black** | Black (máximo) | Upright, uppercase, tracking -0.02em |
| Cuerpo / UI / Nav | **Inter** | 300 / 400 / 700 | Normal |
| Metadata / labels | Inter | 700 | Uppercase, tracking amplio |

**Rechazados explícitamente:** Fraunces (serif), Barlow Italic. Motivo: "demasiado clásico".

**Referencias tipográficas aprobadas:**
- Festival Grec de Barcelona (pósters)
- Teatros europeos: Schaubühne Berlin, Théâtre de la Ville
- La referencia exacta que aprobó Seba: tipografía de "LA VIE SECRÈTE SE VIEUX" del Grec — ultra-bold, upright, uppercase, sin decoración.

### 5.2) Paleta de colores (aprobada — pendiente elección final de acento)

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0C0C0C` | Fondo principal |
| `--bg-2` | `#161616` | Fondos de secciones alternadas |
| `--white` | `#FFFFFF` | Texto principal |
| `--g100` | `#E0E0E0` | Texto secundario |
| `--g300` | `#909090` | Texto terciario / metadata |
| `--g500` | `#505050` | Labels, bordes |
| `--g700` | `#282828` | Bordes sutiles |
| `--g800` | `#181818` | Fondos de paneles |

**Acento — pendiente decisión final:**
- **Opción A: Rojo #E50914** (rojo Netflix — primera opción del cliente)
- **Opción B: Amarillo #F5C800** (segunda opción)
- **Descartados:** #7A1F1F (rojo butaca), #BA4A4A (coral), #C89B3F (ámbar)

**Nota:** cuando el acento es amarillo (#F5C800), el texto de los botones CTA va en negro (#0C0C0C), no en blanco.

### 5.3) Layout del hero (aprobado)

Estructura inspirada en pósters y sitios de teatros europeos:
1. Nav minimal arriba (logo + links + CTA nav)
2. Título enorme en Archivo Black uppercase
3. Franja inferior con:
   - Metadata limpia a la izquierda (dirección artística / horarios / ubicación)
   - CTA sólido + prueba social a la derecha

**Fondo del hero:** por ahora negro liso. Cuando haya foto/vídeo real del taller, se mete como background con overlay oscuro.

### 5.4) Elementos del sistema visual

- **Acento en logo:** punto final en color de acento (`talleresdeteatro.`)
- **Overline sobre H1:** texto pequeño uppercase en color de acento
- **Estrellas de reseñas:** siempre en `#FFD700` (dorado), independiente del acento
- **Botón CTA:** sólido, sin border-radius, fondo en acento, Inter 700 uppercase
- **Grain noise:** overlay SVG opacity 0.04, sutil
- **WhatsApp sticky:** fijo abajo-derecha, verde #25D366

### 5.5) Anti-patterns (NO hacer)

- No serif en títulos
- No italic en H1
- No keyword stuffing ni mayúsculas sostenidas para SEO
- No cambiar URLs sin 301
- No plugins de WP para reseñas e Instagram
- No dos H1 en una página
- No feed Instagram duplicado
- No tono "academia online"
- No stock photos

---

## 6) Estructura del home (11 bloques)

| # | Bloque | Propósito |
|---|---|---|
| 01 | **Hero** | Presencia. Titular enorme, metadata, CTA. ✅ Prototipado |
| 02 | **Prueba social** | 4-6 reseñas curadas, "5,0 sobre 80". Schema.org AggregateRating. |
| 03 | **Dos puertas** | Segmentación: "¿Primera vez?" / "¿Ya actúas?" |
| 04 | **El método** | 3 bloques: Cuerpo / Juego / Poética |
| 05 | **Linaje** | Bartís, Raúl Serrano, Sergio Boris |
| 06 | **Niveles** | 3 cards: Principiantes / Intermedios / Avanzados |
| 07 | **Nosotros** | Sebastián + Candelaria + tira de logos (Lliure, Beckett, Netflix) |
| 08 | **La sala** | Espacio La Mansión, Gracia, Barcelona. Google Maps. |
| 09 | **Galería** | 6-10 fotos curadas del taller |
| 10 | **CTA final** | Titular de cierre + botón único |
| 11 | **Footer** | Links, contacto, horarios, schema.org |

**Bloques del método (decidido):** 3 bloques — Cuerpo / Juego / Poética.

---

## 7) Estado de los entregables

| Entregable | Estado | Archivo |
|---|---|---|
| Auditoría del sitio actual | ✅ Completo | `01-auditoria-web-actual.md` |
| Análisis Search Console | ✅ Completo | `02-search-console-findings.md` |
| Correcciones para el cutover | ✅ Completo | `03-correcciones-pendientes-migracion.md` |
| Dirección de diseño | ✅ Aprobada | `04-direccion-de-diseno.md` |
| Prototipo HTML del hero | ✅ Entregado | `05-hero-prototipo-paletas.html` |
| Home completo (bloques 01-11) | ⏳ Pendiente | `06-home-completo.html` |

---

## 8) Decisiones pendientes

| Decisión | Estado |
|---|---|
| **Color de acento final** | ⏳ Seba elige entre A (rojo #E50914) y B (amarillo #F5C800) |
| Copy del CTA final (bloque 10) | Pendiente |
| Schema.org Course en niveles | Pendiente (va en el cutover) |
| Versión catalán/inglés | Abierto, no es prioridad ahora |

---

## 9) Próximo paso

1. Seba elige acento (rojo o amarillo).
2. ChatGPT diseña cada bloque del home (02 → 11) con instrucciones precisas de layout, copy y componentes.
3. Seba pasa cada bloque a Claude para que lo programe en HTML.
4. Se ensambla el home completo como prototipo navegable (`06-home-completo.html`).
5. Después del home aprobado: páginas internas.
6. Implementación en WordPress con tema custom.
7. Cutover con todas las correcciones del doc `03`.

---

## 10) Correcciones pendientes para el cutover (resumen)

Documento completo en `03-correcciones-pendientes-migracion.md`. En resumen:

- HTTP/www → HTTPS sin www (`.htaccess` ya redactado en ese doc)
- Erratas: DIRIGDA, improvización, talleresdetestro.com, Actualmete, Guiterrez, RASLDOSKY, argetina
- URL de contacto unificada: `/contacto-html/`
- Limpiar URLs basura: `/argetina/`, hello-world, uncategorized
- Schema.org LocalBusiness + AggregateRating en home
- Schema.org Course en cada página de nivel
- Reescribir snippets de `/intermedios/` y `/avanzados/`

---

## 11) Prompts listos para pasar a Claude (para programar)

Seba usa ChatGPT para pensar y diseñar, y Claude para programar. Estos prompts están listos para copiar, adaptar y pasarle a Claude:

---

### PROMPT — Maquetar un bloque nuevo del home

```
Continuamos el rediseño de talleresdeteatro.es.
El prototipo de referencia visual está en 05-hero-prototipo-paletas.html.

Sistema de diseño:
- Tipografía display: Archivo Black, uppercase, upright, letter-spacing: -0.02em
- Tipografía cuerpo: Inter 300/400/700
- Fondo principal: #0C0C0C
- Texto principal: #FFFFFF
- Grises: #E0E0E0 / #909090 / #505050 / #282828 / #181818
- Acento: [PONER #E50914 o #F5C800]
- Botones: sólidos, sin border-radius, Inter 700 uppercase
- WhatsApp sticky ya incluido en el archivo

Tarea: agregar el Bloque [NÚMERO] — [NOMBRE] al archivo 06-home-completo.html.

Descripción del bloque:
[PEGAR AQUÍ LO QUE DA CHATGPT]

Guardar en: /Users/seba/Documents/Claude/Projects/pagina web talleres/06-home-completo.html
```

---

### PROMPT — Ajustar un bloque existente

```
En el archivo 06-home-completo.html, ajustar el Bloque [NÚMERO].

Problema: [describir qué está mal o qué hay que cambiar]
Lo que debería hacer: [describir el resultado esperado]

No tocar nada más del archivo.
```

---

### PROMPT — Convertir el hero prototipo a WordPress

```
Tenemos el prototipo del hero en 05-hero-prototipo-paletas.html.
Stack: WordPress con tema custom (PHP). Acento elegido: [COLOR].

Tarea: convertir el hero en plantilla WordPress.
- HTML/CSS/JS del hero en front-page.php o index.php del tema custom.
- Estilos en style.css o partial enqueued correctamente.
- Video/foto de fondo como campo ACF o campo de opciones del tema.
- Respetar todas las URLs protegidas (listadas en sección 4 de este documento).
```

---

### PROMPT — Implementar schema.org en WordPress

```
Implementar schema.org en el tema WordPress de talleresdeteatro.es.

1) En la home: JSON-LD con LocalBusiness + AggregateRating:
   - Nombre: "Talleres de Teatro – Estudio Sebastián Mogordoy"
   - Dirección: Espacio La Mansión, Gracia, Barcelona
   - Tel: +34676694958 | Email: info@talleresdeteatro.com
   - AggregateRating: 5.0 / 80 reseñas

2) En /principiantes/, /intermedios/, /avanzados/: JSON-LD Course por nivel.

El JSON-LD va en <script type="application/ld+json"> en el <head> de cada plantilla.
```

---

### PROMPT — Maquetar el bloque de reseñas sin plugin

```
En 06-home-completo.html, agregar el Bloque 02 — Prueba social.

Sin plugin de WordPress. Implementación manual con HTML/CSS.
- Línea grande: "5,0 · 80 reseñas en Google"
- 5 reseñas curadas con texto realista:
  - 2 de personas que llegaron como principiantes
  - 2 de actores con experiencia previa
  - 1 general
- Cada reseña: avatar placeholder, nombre, texto (2-3 líneas), estrellas doradas
- Link "Ver las 80 reseñas" al perfil de Google Maps
- Diseño: cards sobre fondo negro, Inter, sin widget genérico
- Sistema visual igual al hero (mismos tokens de color y tipografía)
```

---

### PROMPT — Redirecciones HTTP/www para el cutover

```
Para el go-live del rediseño, necesito las redirecciones SEO listas.

Escribir el bloque .htaccess completo (Apache / WordPress) que haga:
1. HTTP → HTTPS (talleresdeteatro.es)
2. www → sin www
3. /contacto.html/ → /contacto-html/
4. /argetina/ → / (redirect a home)

Añadir ANTES del bloque # BEGIN WordPress.
También escribir los comandos curl para verificar que funciona.
```

---

## 12) Notas de tono y trabajo con Seba

- Tono cercano, en español, sin formalidades.
- Decisiones con opciones concretas y una recomendada.
- No usar bullet points en respuestas conversacionales — prosa.
- Documentos largos en Markdown estructurado, en archivos separados.
- No corregir las erratas del cliente.
- Mostrar tradeoffs explícitos en decisiones de fondo.

---

## 13) Archivos del proyecto

Todos en `/Users/seba/Documents/Claude/Projects/pagina web talleres/`:

```
00-contexto-master.md                   ← este archivo (traspaso completo)
01-auditoria-web-actual.md              ← auditoría completa del sitio actual
02-search-console-findings.md           ← 16 meses de datos SEO
03-correcciones-pendientes-migracion.md ← todo lo que arreglar en el cutover
04-direccion-de-diseno.md               ← dirección creativa y técnica completa
05-hero-prototipo-paletas.html          ← prototipo del hero (opción A rojo, B amarillo)
06-home-completo.html                   ← pendiente — home bloque a bloque
```
