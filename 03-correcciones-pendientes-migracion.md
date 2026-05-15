# Correcciones pendientes — se aplican durante el go-live del rediseño

**Decisión:** no tocar el sitio actual ahora para no arriesgar el ranking. Todas estas correcciones se aplican en bloque cuando el rediseño esté listo y se haga el cutover.

---

## 1) Duplicación HTTP/www → HTTPS sin www (PRIORIDAD ALTA)

**Problema:**
Google indexa dos versiones de la home como URLs distintas:
- `https://talleresdeteatro.es/` (canónica, 2.107 clics en 16m)
- `http://www.talleresdeteatro.es/` (duplicada, 1.350 clics y 120K impresiones)

Eso reparte autoridad de dominio entre dos versiones que deberían ser una.

**Objetivo:** que toda variante de URL termine en `https://talleresdeteatro.es/` (HTTPS sin www).

**Cómo arreglarlo** (al cutover del rediseño):

### a) En WordPress (Ajustes → Generales):
Asegurar que ambos campos están así:

```
Dirección de WordPress (URL): https://talleresdeteatro.es
Dirección del sitio (URL):    https://talleresdeteatro.es
```

Sin `www`. Sin `http://`.

### b) En `.htaccess` (Apache, lo más común con WordPress):

Añadir al principio del archivo, ANTES del bloque `# BEGIN WordPress`:

```apache
<IfModule mod_rewrite.c>
RewriteEngine On

# Redirigir HTTP → HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://talleresdeteatro.es/$1 [R=301,L]

# Redirigir www → no-www
RewriteCond %{HTTP_HOST} ^www\.talleresdeteatro\.es [NC]
RewriteRule ^(.*)$ https://talleresdeteatro.es/$1 [R=301,L]
</IfModule>
```

Si el hosting usa Nginx en vez de Apache, el equivalente es:

```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name www.talleresdeteatro.es talleresdeteatro.es;

    if ($scheme = http) {
        return 301 https://talleresdeteatro.es$request_uri;
    }
    if ($host = www.talleresdeteatro.es) {
        return 301 https://talleresdeteatro.es$request_uri;
    }
}
```

### c) Canonical en cada página:
En el `<head>` de cada plantilla debe figurar:

```html
<link rel="canonical" href="https://talleresdeteatro.es/PATH-DE-ESTA-PAGINA/" />
```

Yoast SEO lo hace automáticamente si los ajustes generales están bien (paso a).

### d) Verificar tras go-live:
```bash
curl -I http://www.talleresdeteatro.es/      # debe responder 301 a HTTPS sin www
curl -I http://talleresdeteatro.es/          # debe responder 301
curl -I https://www.talleresdeteatro.es/     # debe responder 301
curl -I https://talleresdeteatro.es/         # debe responder 200 (canónica)
```

### e) En Search Console:
Tras el cambio, todo se consolidará automáticamente bajo `sc-domain:talleresdeteatro.es` (la propiedad ya existe). En 4-8 semanas, las impresiones y clics del HTTP-www se transfieren a la canónica.

---

## 2) Erratas en copy

Sustituir TODAS estas en el contenido del rediseño:

| Errata actual | Correcto |
|---|---|
| DIRIGDA | DIRIGIDA |
| improvización | improvisación |
| talleresdetestro.com | talleresdeteatro.com |
| Actualmete | Actualmente |
| Guiterrez | Gutiérrez |
| RASLDOSKY (apellido Andrés) | Roska (a confirmar contigo) |
| argetina (en slug y captions) | argentina |
| protagonizada por Javier Guiterrez | protagonizada por Javier Gutiérrez |

**Acción:** se incorporan ya en el nuevo copy que escribamos para el rediseño. Cuando esté la versión final del copy, lo revisamos juntos antes de pasarlo al diseño.

---

## 3) URL del botón principal

**Problema:** los botones "prueba una clase gratis" llevan a:
- En el hero: `/contacto.html/` (con `.html/`)
- En el menú: `/contacto-html/` (con guion)

Search Console confirma que la canónica indexada es `https://talleresdeteatro.es/contacto-html/` (con guion, 14 clics, 1.764 imp).

**Solución en el rediseño:**
- Usar **una sola URL para contacto**: `https://talleresdeteatro.es/contacto-html/`
- Todos los CTAs apuntan a esa URL
- 301 desde `/contacto.html/` → `/contacto-html/` por si quedó algún enlace externo

---

## 4) Limpiar URLs basura

### `/argetina/` (con typo)
- Indexada con 80 impresiones en 16 meses.
- Acción al cutover: revisar qué contenido tiene. Si aún tiene sentido (probablemente sobre la temporada en Argentina), cambiar slug a `/argentina/` y poner 301 desde `/argetina/` → `/argentina/`. Si ya no aplica, 301 a `/`.

### Hello World post (`/uncategorized/hello-world/`)
- Post por defecto que WordPress crea al instalar.
- Acción: borrar (no `noindex`, borrar) o marcar `noindex` desde Yoast.

### Categoría "Uncategorized" (`/category/uncategorized/`)
- Categoría por defecto sin uso.
- Acción: si no tiene posts útiles asignados, borrar. Si los tiene, renombrar la categoría y reasignar.

### PDF `bienvenida.pdf`
- Indexado con 39 impresiones, 0 clics.
- Decisión a tomar: si es un PDF informativo útil para visitantes, mantener pero añadir `noindex` desde headers HTTP (`X-Robots-Tag: noindex`). Si no aporta, retirar del sitemap y dejar `noindex`.

### Imagen suelta indexada (`MG_6399-1024x683.jpg`)
- Solo 1 impresión. Ruido. No requiere acción específica más allá del cleanup natural del sitemap.

---

## 5) Schema.org (oportunidad — añadir nuevo)

No es una corrección, es una mejora que se mete en el go-live:

### LocalBusiness en home:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://talleresdeteatro.es/#business",
  "name": "Talleres de Teatro – Estudio Sebastián Mogordoy",
  "url": "https://talleresdeteatro.es/",
  "telephone": "+34676694958",
  "email": "info@talleresdeteatro.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Espacio La Mansión",
    "addressLocality": "Gracia, Barcelona",
    "addressRegion": "Cataluña",
    "addressCountry": "ES"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "80"
  }
}
```

Esto puede activar **estrellas en los resultados de Google** y subir CTR transversalmente.

### Course schema en `/principiantes/`, `/intermedios/`, `/avanzados/`:
Cada nivel es un curso. Marcar como `Course` con `provider`, `name`, `description`, `courseMode: onsite`, `location`, `offers` si hay precio público.

Esto puede ganar visibilidad en búsquedas específicas de cursos.

---

## 6) Reescribir snippets de /intermedios/ y /avanzados/

Estas dos páginas tienen CTR del 0,2% con muchas impresiones. Reescribir title y meta description en el rediseño:

### /intermedios/
- **Title actual (probable):** mezcla con "TALLERES DE TEATRO BARCELONA INTERMEDIOS"
- **Title propuesto:** "Taller de teatro intermedios en Barcelona | Para quien ya tiene experiencia"
- **Meta description propuesta:** "¿Ya hiciste teatro? Profundiza en construcción de personaje, presencia escénica y poética propia. Miércoles 19-22h en Gracia. Clase de prueba gratis."

### /avanzados/
- **Title propuesto:** "Entrenamiento actoral avanzado en Barcelona | Para actores"
- **Meta description propuesta:** "Entrenamiento para actores profesionales y formados: el cuerpo como protagonista, el ser mirado, dirección de improvisación. Miércoles 19-22h en Gracia."

(Los textos exactos los pulimos cuando trabajemos el copy del rediseño.)

---

## Checklist final para el go-live

Cuando el rediseño esté en staging y aprobado, ejecutar en este orden:

- [ ] Backup completo del WordPress actual (archivos + DB).
- [ ] Exportar CSV de Search Console (queries + páginas) como baseline.
- [ ] Configurar redirecciones 301 según sección 1 (HTTP/www → HTTPS sin www).
- [ ] Configurar redirecciones específicas: `/contacto.html/` → `/contacto-html/`, `/argetina/` → `/argentina/` (o `/`).
- [ ] Borrar Hello World post y limpiar categoría "Uncategorized".
- [ ] Aplicar `noindex` o retirar del sitemap el PDF `bienvenida.pdf` si no se mantiene.
- [ ] Verificar que TODAS las URLs protegidas (lista en el doc Search Console) responden 200 con el nuevo diseño.
- [ ] Implementar schema.org LocalBusiness con AggregateRating en home.
- [ ] Implementar schema.org Course en `/principiantes/`, `/intermedios/`, `/avanzados/`.
- [ ] Confirmar canonical en cada página apunta a la URL canónica HTTPS sin www.
- [ ] Title y meta description nuevos en cada página (especialmente /intermedios/ y /avanzados/).
- [ ] Corregir todas las erratas del copy (sección 2).
- [ ] Sitemap.xml regenerado y reenviado en Search Console.
- [ ] Verificación con `curl -I` de las redirecciones críticas.
- [ ] Verificación con Screaming Frog: crawl completo, cero 404s, cero loops de redirección.
- [ ] Monitoreo semanal en Search Console durante 4-6 semanas post-launch.
