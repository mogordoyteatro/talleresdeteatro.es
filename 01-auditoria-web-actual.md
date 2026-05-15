# Auditoría — talleresdeteatro.es

**Fecha:** mayo 2026
**Objetivo:** detectar qué frena al visitante (sea principiante o actor con experiencia) de querer venir a probar una clase, y priorizar qué arreglar antes de meternos al rediseño.

---

## ⚠️ Restricción crítica del proyecto

**La web actual está #1 en Google** en búsquedas relevantes. Ese posicionamiento es un activo que NO se puede perder, y de hecho hay margen para mejorarlo. Por eso:

- **No cambiamos URLs** (`/principiantes/`, `/intermedios/`, `/avanzados/`, `/contacto/`…). Si hay que mover algo, va con redirección 301.
- **Preservamos las menciones de marca y ubicación** ("Barcelona", "Gracia", "escuela de teatro", "entrenamiento actoral") en el body, redistribuidas con sentido en vez de repetidas a lo bruto.
- **Lo que arreglamos lo arreglamos sin romper.** Antes de tocar nada estructural, revisar Google Search Console para identificar qué páginas y queries traen tráfico y proteger esas señales.
- **Lo que se haga puede mejorar el ranking actual**: schema.org con AggregateRating (80 reseñas 5,0/5), mejor jerarquía de H1/H2, performance móvil, alt-text en imágenes. Todo upside.

Esta restricción está incorporada en cada recomendación del informe.

---

## TL;DR

La web tiene **dos activos enormes mal aprovechados**: 80 reseñas de Google con 5,0/5, y un material visual abundante (fotos del taller, vídeos del entrenamiento, Instagram activo). Y tiene un **tercer activo invisible para el visitante pero crítico para el negocio**: ya está rankeando #1 en Google. El problema no es la falta de contenido, es **el exceso desordenado**: hay demasiado todo, todo al mismo tiempo, sin jerarquía. El visitante no sabe en qué mirar, no entiende rápido qué es exactamente lo que ofreces, y cuando por fin decide contactar, el botón lleva a una URL rota.

**Los tres problemas más urgentes:**

1. **Mensaje difuso en los primeros 3 segundos.** El hero compite consigo mismo: hay un vídeo de fondo, un titular grande, un subtítulo con erratas, otro titular SEO y una bajada de ubicación, todo apilado. No se entiende rápido qué tipo de entrenamiento es ni a quién está dirigido.
2. **Estructura repetitiva y desordenada.** El feed de Instagram aparece dos veces, hay cuatro encabezados marcados como H1, el menú de navegación se duplica, y los tres niveles (principiantes / intermedios / avanzados) están mezclados con bloques teóricos sobre Bartís y Raúl Serrano, sin un mapa claro.
3. **CTAs débiles y rotos.** El botón principal "Escríbenos prueba una clase gratis!" lleva a una URL malformada (`/contacto.html/`), el WhatsApp y el mail están enterrados al final, y no hay un solo botón fijo y persistente que acompañe al visitante mientras baja.

Si arreglamos solo esos tres, el sitio ya convierte mejor sin tocar el diseño visual.

---

## Lo que SÍ funciona (no destruir en el rediseño)

- **Reseñas de Google integradas inline**, con avatares, estrellas y texto completo. 80 reseñas con puntuación 5,0/5 es prueba social potentísima.
- **Tres niveles claros**: Principiantes ("La creación del artificio"), Intermedios ("Inscribir lo propio"), Avanzados ("El ser mirado"). La nomenclatura poética es bonita y diferencia bien.
- **Bios y referencias intelectuales**: Sebastián Mogordoy + Candelaria Sesin, con linaje pedagógico explícito (Raúl Serrano, Ricardo Bartís). Esto da autoridad real a actores con experiencia.
- **Hay vídeo del entrenamiento real** (3 embeds YouTube + 2 MP4 auto-hosted). El material existe.
- **Datos concretos visibles**: ubicación (Espacio La Mansión, Gracia, Barcelona), horarios (Lunes / Jueves / Martes / Miércoles 19-22h), modalidad (3h semanales), profesores y asistentes nombrados.
- **WhatsApp y mail directos** disponibles: +34 676 69 49 58, info@talleresdeteatro.com.
- **Tono auténtico** del copy en pasajes sueltos: "actuar es un juego adulto", "fracturar lo real", "el cuerpo es el protagonista". Hay voz, hay poética. Solo está desperdigada.
- **Skip-link de accesibilidad** ("Saltar al contenido") presente.

---

## Lo que NO funciona, agrupado por bloque

### 1) Mensaje y posicionamiento

- **Hero sobrecargado.** Compiten cinco bloques de texto: nombre del estudio, dedicatoria a Candelaria Sesin, H1 largo, subtítulo con errata ("DIRIGDA"), y H3 de ubicación. Demasiado para procesar de un golpe.
- **No queda claro en 3 segundos QUÉ es esto.** ¿Una escuela? ¿Un curso? ¿Una compañía? ¿Un método? El visitante necesita inferirlo bajando.
- **No hay segmentación visible para los dos públicos.** Un principiante y un actor profesional ven exactamente lo mismo en la home. No hay un "¿es tu primera vez? empieza aquí" vs "¿ya actúas? mira el avanzado".
- **Eslóganes diluidos.** "Actuar es un juego adulto", "fracturar lo real", "el cuerpo es el protagonista" son frases-eje fuertes, pero están enterradas dentro de párrafos largos en vez de destacadas como pilares de posicionamiento.

### 2) Estructura y navegación

- **Feed de Instagram duplicado**: aparece arriba (antes del header) y abajo, idéntico. Ocupa pantalla y carga JS dos veces.
- **Cuatro H1 distintos** en una misma página. Mala jerarquía semántica y mala señal para SEO.
- **Menú duplicado** (header + sidebar), con el mismo listado de items.
- **Mezcla de secciones de niveles con secciones teóricas.** Entre Principiantes e Intermedios se cuela "¿Por qué elegir nuestros talleres?", y entre Intermedios y Avanzados se cuela "El cuerpo como protagonista" con cita a Bartís. Eso rompe el ritmo de lectura y obliga al visitante a saltar atrás-adelante.
- **El bloque "Nosotros" está al final**, después de los talleres. Para un actor con experiencia que escanea linaje pedagógico, eso debería estar mucho más arriba.
- **No hay un mapa de horarios consolidado.** Los horarios están repartidos dentro del texto de cada nivel ("Lunes o Jueves 19-22h"). Falta una tabla/listado limpio que diga "estos son los grupos y estos los días".
- **No hay precios.** Decisión deliberada o no, hay que decidir. Si la idea es contactar primero, hay que decirlo explícitamente ("escríbenos y te pasamos toda la info"); si no, mostrar al menos un rango.

### 3) Copy, tono y detalles

- **Erratas visibles y consistentes**: "DIRIGDA" (por "dirigida"), "improvización" (debería ser "improvisación"), "talleresdetestro.com", "Actualmete", "Guiterrez", "RASLDOSKY", "argetina" en la URL de un slug. Cada errata es un microimpacto en credibilidad, sobre todo para actores con experiencia que están evaluando seriedad pedagógica.
- **Mayúsculas sostenidas** en muchos titulares ("TALLERES DE TEATRO Y ENTRENAMIENTO ACTORAL FORMACION PARA PRINCIPIANTES, INTERMEDIOS…"). Cansa leer, da estética de página antigua, y dificulta la jerarquía.
- **Bloques de texto largos** sin pausas visuales. Las explicaciones del método se leen como un monólogo continuo.
- **Mezcla de idiomas sin marcar** (hay al menos una reseña en inglés). Falta `hreflang` o aviso.

### 4) Fotos y vídeos

- **Imágenes pesadas.** Todas en JPEG/PNG, sin WebP/AVIF, sin `srcset` visible, sin `loading="lazy"`. La galería del footer son ~20 fotos que cargan a la vez.
- **Faltan textos alternativos (alt).** Muchas imágenes aparecen con alt vacío o con el filename de la cámara ("PXL_20231031_..."). Mal para accesibilidad y para SEO.
- **Dos vídeos MP4 auto-hosted** (el hero y un vídeo de WhatsApp). Pesan y se sirven sin optimización ni poster. Sería mejor: a) bajar el bitrate y dar poster, o b) subir a YouTube/Vimeo unlisted y embeber.
- **Tres iframes de YouTube** uno tras otro. Cada uno carga su propio loader. Conviene reemplazar por poster + clic-para-reproducir, o usar `lite-youtube-embed`.
- **Galería del footer** sin lightbox, sin pies de foto, sin orden narrativo. Son fotos del taller pero no cuentan una historia.
- **Las fotos no respiran.** En el HTML actual están metidas como bloques pequeños alineados; no hay ninguna foto a sangre completa que funcione como pieza cinematográfica.

### 5) Reseñas de Google (gran activo, mala vitrina)

- **5,0/5 sobre 80 reseñas** es excepcional. Esto debería ser el primer o segundo bloque después del hero, no a mitad de página.
- **Plugin "Embedder for Google Reviews"** cumple, pero el bloque visual queda enmarcado como widget genérico, no integrado al diseño del sitio.
- **No hay filtro ni destacados.** Las reseñas más útiles son las que mencionan "primera vez" o "actor profesional" (los dos perfiles que queremos convertir). Ahora mismo todas pesan igual.
- **Mostrar todas las reseñas a la vez** es ruido. Un carrusel curado con 5-8 reseñas seleccionadas + enlace a "ver las 80 en Google" rinde más.

### 6) CTAs y conversión

- **CTA principal apunta a URL rota o anómala**: `/contacto.html/` (con barra final). En el menú está como `/contacto-html/`. Inconsistencia que puede romper el clic.
- **No hay botón sticky de WhatsApp** flotando mientras se hace scroll. Para un sitio cuya conversión principal es "escribir por WhatsApp/email", esto es básico.
- **WhatsApp y email están solo al final**, en un bloque pequeño. Deberían acompañar al visitante todo el scroll.
- **Falta de urgencia/escasez genuinas.** "Últimas plazas" aparece suelto en intermedios, pero no se usa de forma sistémica para los grupos que de verdad están cerrando inscripción.
- **No hay formulario corto** ("nombre + qué nivel te interesa + cuándo podrías venir"). Para gente tímida que no se anima a WhatsAppear, un mini formulario baja la barrera.

### 7) SEO

**Contexto importante: la web ya está #1 en Google en búsquedas clave.** El SEO no está bien estructurado técnicamente pero está funcionando — probablemente por antigüedad del dominio, backlinks, reseñas y consistencia temática. Lo que sigue son cosas a **mejorar sin romper lo que ya funciona**.

- **Title y meta description están escritos** y razonables ("Curso de Interpretación en Barcelona…"). Mantener, refinar.
- **OG tags completos** (imagen, vídeo, locale). Bien.
- **Yoast SEO detectado**. Bien.
- **Los múltiples H1 y el copy con "TALLERES DE TEATRO BARCELONA" repetido en mayúsculas** parece SEO antiguo, pero **está rankeando**. La intervención aquí es delicada: consolidar a un solo H1 limpio y mantener las variaciones como H2/H3, sin perder densidad temática de términos como "teatro Barcelona", "Gracia", "principiantes", "actores".
- **No se ve schema.org** para LocalBusiness ni para reviews. **Esta es la palanca SEO más clara para mejorar el #1 actual**: con 80 reseñas reales 5,0/5, marcar `AggregateRating` y `Review` puede activar estrellas en los resultados de Google y subir CTR sin perder nada.
- **Las páginas internas por nivel** (/principiantes/, /intermedios/, /avanzados/) son joyas a optimizar individualmente. Cada una puede capturar búsquedas long-tail distintas ("clases de teatro principiantes Barcelona", "entrenamiento actoral profesional Barcelona") sin canibalizar la home.
- **Antes de cualquier cambio estructural**, hay que revisar Google Search Console para ver qué páginas y queries traen tráfico orgánico real, y protegerlas como prioridad.
- **Plan de migración seguro**: rediseñar en staging, hacer un crawl con Screaming Frog y comparar URL por URL, asegurar 301s, y monitorear rankings cada semana durante 4-6 semanas tras el go-live.

### 8) Performance

- **WordPress 6.9.4 + plugins**: Smash Balloon Instagram x2, Embedder Google Reviews, varios iframes YouTube, vídeos MP4 auto-hosted.
- **Probablemente el sitio pasa de los 5 MB** en peso de home. Sin medirlo formalmente (haría falta WebPageTest o Lighthouse), los síntomas están todos: hero pesado, dos feeds JS, tres iframes, sin lazy-load, JPEG grandes.
- **Esto afecta a móvil**, que es donde la mayoría de la gente decide si entra a una clase.

### 9) Accesibilidad

- Skip-link presente (positivo).
- Pero contraste y tamaños no auditables sin ver render. Probable a revisar.
- Alt-text ausente en muchas fotos (ya señalado).
- Vídeos sin subtítulos visibles.

---

## Prioridades para el rediseño

Las divido en tres olas. Si solo hacemos la ola 1, ya mejora muchísimo.

**OLA 1 — Lo imprescindible**

1. Hero limpio: una sola idea fuerte, un solo CTA visible, vídeo de fondo o foto a sangre, sin apilar 5 títulos.
2. Botón WhatsApp sticky en todo el sitio (móvil sobre todo).
3. Arreglar URL de contacto y unificar todos los CTAs hacia ese destino.
4. Borrar duplicaciones: un solo feed de Instagram, un solo menú, un solo H1.
5. Corregir erratas visibles ("DIRIGDA", "improvización", etc.).
6. Bloque de reseñas curadas (5-8) destacadas arriba, con enlace a las 80 completas.
7. Tabla de horarios y niveles consolidada en un solo lugar.

**OLA 2 — La forma cinematográfica**

8. Dirección de arte oscura/cinematográfica: fondo profundo, foco de luz, tipografía editorial, fotos a sangre, mucho aire entre secciones.
9. Segmentación visible: "¿Primera vez?" vs "¿Ya tienes formación actoral?", dos caminos desde el hero.
10. Optimización de fotos (WebP, srcset, lazy), reemplazo de embeds YouTube por poster + play diferido.
11. Galería rediseñada como pieza narrativa, no como cuadrícula plana.
12. Bios de Sebastián y Candelaria reubicadas más arriba (entre hero y niveles, no al final).

**OLA 3 — Lo que multiplica**

13. Páginas dedicadas por nivel con copy distinto y SEO específico (sin canibalizar la home).
14. Schema.org de LocalBusiness + AggregateRating (para estrellas en Google) — palanca clara para mejorar el #1 actual.
15. Mini-formulario alternativo a WhatsApp para gente más tímida.
16. Versión en inglés/catalán si hay tráfico relevante (hreflang).
17. Métricas: GA4 o Plausible para medir qué CTA convierte realmente.

---

## Checklist de migración segura (para no perder el #1)

Antes de cualquier cambio en producción:

1. **Inventariar URLs actuales** con Screaming Frog (export completo de URLs indexadas + códigos de respuesta).
2. **Sacar de Google Search Console**: queries top, páginas con más impresiones/clics, CTR por página. Esa es la lista intocable.
3. **Backup completo del WordPress** actual (archivos + DB).
4. **Diseñar y montar en staging** (subdominio tipo `staging.talleresdeteatro.es` con `noindex`).
5. **Crawl comparativo** staging vs producción: títulos, H1s, meta descriptions, contenido, internal links. Diff documentado.
6. **Plan de redirecciones 301** explícito para cualquier URL que cambie. Cero URLs huérfanas.
7. **Mantener el dominio, los permalinks y los slugs** en la medida de lo posible.
8. **Go-live ventana baja** (martes mañana suele ser buen momento, evitar viernes/fin de semana).
9. **Sitemap.xml actualizado** y resubmit en Search Console.
10. **Monitoreo semanal** de rankings y de impresiones durante 4-6 semanas. Si algo cae, revertir o ajustar.

---

## Próximo paso propuesto

Confirmado el norte (estética oscura/cinematográfica, CTA principal hacia WhatsApp/email, dos públicos a servir), te propongo el siguiente movimiento:

**Definir la dirección de diseño** con un moodboard visual y una propuesta concreta de hero, paleta, tipografía y sistema de bloques. Te muestro 2-3 variantes para que elijas tono exacto (más cinematográfica vs más íntima/artesanal dentro del registro oscuro), y desde ahí montamos el primer prototipo navegable.

¿Lo seguimos por ese camino, o prefieres antes que profundice en alguna sección concreta (ej. me detenga más en copy, en estructura de información, o en performance técnico)?
