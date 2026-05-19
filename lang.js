/* ═══════════════════════════════════════════════════════════════
   lang.js — Selector de idioma ES / CA
   talleresdeteatro.es
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Traducciones comunes a todas las páginas ────────────────── */
  var COMMON = [
    /* Navbar desktop */
    { sel: 'a[href="/"]',                         html: 'Benvinguts' },
    { sel: 'a[href="/principiantes/"]',           html: 'Principiants' },
    { sel: 'a[href="/intermedios/"]',             html: 'Amb experiència' },
    { sel: 'a[href="/avanzados/"]',               html: 'Cos al text' },
    { sel: 'a[href="/quienes-somos/"]',           html: 'Nosaltres' },
    { sel: 'a[href="/blog/"]',                    html: 'Lectures' },
    { sel: 'a[href="/contacto/"]',                html: 'Escriu-nos' },
    { sel: '.nav-cta a',                          html: 'Escriu-nos' },
    /* Navbar dropdown galeria */
    { sel: 'a[data-tab="fotos"]',                 html: 'Fotos' },
    { sel: 'a[data-tab="videos"]',                html: 'Vídeos' },
    { sel: 'a[data-tab="instagram"]',             html: 'Instagram' },
    /* Nav dropdown text (parent link) */
    { sel: '.nav-has-dropdown > a',               html: 'Fotos i vídeos <span class="nav-chevron">▾</span>' },
    /* Mobile menu */
    { sel: '.mobile-menu-nav a[href="/"]',        html: 'Benvinguts' },
    { sel: '.mobile-menu-nav a[href="/principiantes/"]', html: 'Principiants' },
    { sel: '.mobile-menu-nav a[href="/intermedios/"]',   html: 'Amb experiència' },
    { sel: '.mobile-menu-nav a[href="/avanzados/"]',     html: 'Cos al text' },
    { sel: '.mobile-menu-nav a[href="/quienes-somos/"]', html: 'Nosaltres' },
    { sel: '.mobile-menu-nav a[href="/blog/"]',          html: 'Lectures' },
    { sel: '.mm-cta',                             html: 'Escriu-nos →' },
    /* Botones WhatsApp comunes */
    { sel: '.btn-wa',                             html: 'Reservar classe <span class="arrow">→</span>' },
    /* Hamburger aria */
    { sel: '.hamburger',                          attr: 'aria-label', val: 'Obrir menú' },
  ];

  /* ── Traducciones por página ─────────────────────────────────── */
  var PAGES = {

    /* ─────────────── HOME ─────────────── */
    '/': [
      { sel: '.hero-h1-seo',            html: 'Tallers de Teatre a Barcelona' },
      { sel: '.hero-mobile-badge',      html: 'Estudi de teatre<br>Dir. Sebastián Mogordoy · Candelaria Sesín' },
      { sel: '.hero-overline',          html: 'Des del 2010 a Buenos Aires — Des del 2020 a Barcelona · Gràcia' },
      { sel: '.hero-h1',                html: 'Ser tot allò<br><span class="accent-word">que no som.</span>' },
      { sel: '.hero-cta-block a.btn-primary:not(.btn-wa)', html: 'Veure tallers <span class="arrow">→</span>' },
      /* Reviews */
      { sel: '.reviews-header-left .overline',  html: 'El que diuen' },
      { sel: '.reviews-local-note',             html: '<strong>Classes de teatre presencials a Gràcia, Barcelona</strong> · Principiants, actors amb experiència i Cos al text' },
      { sel: '.badge-txt',                      html: '<strong>5 / 5</strong> · 88 ressenyes · Google' },
      /* Levels section */
      { sel: '.levels-header .overline',        html: 'Tallers de teatre a Barcelona' },
      { sel: '.levels-h2',                      html: 'Tria el teu<br>punt d\'<br><span class="accent-word">entrada.</span>' },
      { sel: '.levels-intro',                   html: 'Tres recorreguts possibles per estudiar teatre a Barcelona: per als que comencen de zero, per als que volen aprofundir i per a actors que busquen entrenament, presència i llenguatge propi.' },
      /* Announce banner */
      { sel: '.levels-announce-tag',            html: 'Nou grup' },
      { sel: '.levels-announce-title',          html: 'Principiants' },
      { sel: '.levels-announce-badge',          html: 'Inici juny 2026' },
      { sel: '.levels-announce-cta',            html: 'Reservar plaça →' },
      /* Level card 01 */
      { sel: '#principiantes .level-card-subtitle',  html: 'La creació de l\'artifici. Formació.' },
      { sel: '#principiantes .level-card-title',     html: 'Principiants' },
      { sel: '#principiantes .level-card-text',      html: 'Per a persones sense experiència prèvia — o amb ganes de tornar a jugar. El més important és gaudir-ho, desconnectar i descobrir el plaer d\'actuar. Improvisació, cos, escolta i primeres eines actorals per entrar a la ficció sense por.' },
      { sel: '#principiantes .level-card-schedule',  html: 'Dilluns / Dimarts / Dijous&nbsp;·&nbsp;19 a 22h' },
      { sel: '#principiantes .level-card-cta',       html: 'Més info i inscripció — Principiants →' },
      /* Level card 02 */
      { sel: '#intermedios .level-card-subtitle',  html: 'La inscripció del propi. Entrenament.' },
      { sel: '#intermedios .level-card-title',     html: 'Amb experiència' },
      { sel: '#intermedios .level-card-text',      html: 'Per a persones amb formació teatral prèvia o temps d\'entrenament. Treball sobre material propi, presència i construcció d\'escena. S\'exigeix compromís, continuïtat i disposició a aprofundir.' },
      { sel: '#intermedios .level-card-cta',       html: 'Més info i inscripció — Amb experiència →' },
      /* Level card 03 */
      { sel: '#avanzados .level-card-subtitle',  html: 'Cos al text. Entrenament avançat.' },
      { sel: '#avanzados .level-card-title',     html: 'Cos al text' },
      { sel: '#avanzados .level-card-text',      html: 'Per a actors en activitat. Treball sobre textos dramàtics, monòlegs i escenes. Tècnica actoral, presència, veu i escolta. El text com a territori de forces i acció, no com a literatura a recitar.' },
      { sel: '#avanzados .level-card-cta',       html: 'Més info i inscripció — Cos al text →' },
      /* Gallery tabs */
      { sel: '#tab-instagram',      html: 'Instagram' },
      { sel: '#tab-fotos',          html: 'Fotos' },
      { sel: '#tab-videos',         html: 'Vídeos' },
      /* Galería header */
      { sel: '.galeria-overline',   html: 'Fotos i vídeos' },
    ],

    /* ─────────────── PRINCIPIANTES ─────────────── */
    '/principiantes/': [
      { sel: '.hero-overline',      html: 'Tallers de teatre a Barcelona · Gràcia' },
      { sel: '.hero-h1',            html: 'La creació<br>de<br><span class="acc">l\'artifici.</span>' },
      { sel: '.intro-section .overline',   html: 'La idea central' },
      { sel: '.intro-statement',           html: 'El joc<br>és la<br><span class="acc">porta.</span>' },
      { sel: '.intro-cta-line span',       html: 'Sense experiència prèvia' },
      { sel: '.intro-p:first-of-type',     html: 'El teatre no és un talent. És una pràctica. No cal tenir experiència, ni saber actuar, ni haver fet res previ. El que cal és ganes de jugar, de descobrir i d\'entrar en un espai diferent.' },
      { sel: '.escena-header .overline',   html: 'Què treballem' },
      { sel: '.escena-header h2',          html: 'El que passa<br>a les <span class="acc">classes.</span>' },
      /* Info section */
      { sel: '.info-section .overline',    html: 'Informació pràctica' },
      { sel: '[data-label="Nivel"]',       html: 'Nivell' },
      { sel: '[data-label="Horario"]',     html: 'Horari' },
      { sel: '[data-label="Precio"]',      html: 'Preu' },
      { sel: '[data-label="Duración"]',    html: 'Durada' },
      { sel: '[data-label="Modalidad"]',   html: 'Modalitat' },
      /* Testimonios */
      { sel: '.testimonios-h2',            html: 'El que diuen<br>els que ja<br><span class="acc">hi eren.</span>' },
      { sel: '.test-h2',                   html: 'El que diuen<br>els que ja<br><span class="acc">hi eren.</span>' },
      /* CTA final */
      { sel: '.cta-nota',                  html: 'Incorporació per entrevista — Places limitades' },
    ],

    /* ─────────────── INTERMEDIOS ─────────────── */
    '/intermedios/': [
      { sel: '.hero-overline',      html: 'Tallers de teatre a Barcelona · Gràcia' },
      { sel: '.hero-h1',            html: 'La inscripció<br>del<br><span class="acc">propi.</span>' },
      { sel: '.intro-section .overline',   html: 'La idea central' },
      { sel: '.intro-statement',           html: 'La ficció<br>surt de<br><span class="acc">tu.</span>' },
      { sel: '.intro-cta-line span',       html: 'Incorporació per entrevista' },
      { sel: '.escena-header .overline',   html: 'Què treballem' },
      { sel: '.escena-header h2',          html: 'El que passa<br>a les <span class="acc">classes.</span>' },
      /* Video section */
      { sel: '.video-section .overline',   html: 'Cicle de teatre' },
      { sel: '.video-h2',                  html: 'La tirania<br>del<br>desig.' },
      { sel: '.video-p:first-of-type',     html: 'Aquest espai proposa que els participants desenvolupin escenes pròpies i materials actorals per construir un cicle de funcions reals. Al llarg de l\'any investiguem situacions, vincles, imaginaris i conflictes fins a convertir-los en escenes vives capaces de sostenir-se davant el públic.' },
      /* Elenco */
      { sel: '.video-copy .video-p:last-of-type span[style*="uppercase"]', html: 'Darrera edició · Actuació i Creació' },
      /* Info section */
      { sel: '.info-section .overline',    html: 'Informació pràctica' },
      /* Testimonios */
      { sel: '.testimonios-h2',            html: 'El que diuen<br>els que ja<br><span class="acc">hi eren.</span>' },
    ],

    /* ─────────────── AVANZADOS ─────────────── */
    '/avanzados/': [
      { sel: '.hero-overline',      html: 'Tallers de teatre a Barcelona · Gràcia' },
      { sel: '.hero-h1',            html: 'Cos<br>al<br><span class="acc">text.</span>' },
      { sel: '.intro-section .overline',   html: 'La idea central' },
      { sel: '.intro-statement',           html: 'Les paraules<br>surten d\'<br>un <span class="acc">cos.</span>' },
      { sel: '.intro-pullquote p',         html: 'El text<br>no es recita.' },
      { sel: '.intro-cta-line span',       html: 'Incorporació per entrevista' },
      { sel: '.intro-break-text',          html: 'Cada frase té<br>un cos.<br>La veu també actua.' },
      { sel: '.escena-header .overline',   html: 'Què treballem' },
      { sel: '.escena-header h2',          html: 'El que passa<br>a les <span class="acc">classes.</span>' },
      /* kw tags */
      { sel: '.intro-kw-tag:nth-child(1)', html: 'Escenes teatrals' },
      { sel: '.intro-kw-tag:nth-child(2)', html: 'Monòlegs' },
      { sel: '.intro-kw-tag:nth-child(3)', html: 'Veu i actuació' },
      { sel: '.intro-kw-tag:nth-child(4)', html: 'Tècnica actoral' },
      { sel: '.intro-kw-tag:nth-child(5)', html: 'Barcelona · Gràcia' },
      /* Info section */
      { sel: '.info-section .overline',    html: 'Informació pràctica' },
      /* Testimonios */
      { sel: '.testimonios-h2',            html: 'El que diuen<br>els que ja<br><span class="acc">hi eren.</span>' },
      /* Música */
      { sel: '#soundBtn',                  attr: 'aria-label', val: 'Activar o desactivar música' },
    ],

    /* ─────────────── QUIÉNES SOMOS ─────────────── */
    '/quienes-somos/': [
      { sel: '.nosotros-overline, .page-overline', html: 'Qui som' },
      { sel: '.nosotros-h1, .page-h1',             html: 'El equip.' },
      { sel: '.persona-section#sebastian .persona-role',  html: 'Actor · Director · Pedagog' },
      { sel: '.persona-section#candelaria .persona-role', html: 'Actriu · Directora · Docent' },
      { sel: '.asistentes-overline',   html: 'Assistents d\'entrenament' },
      { sel: '.asistentes-h2',         html: 'Acompanyen<br>el procés.' },
      { sel: '#camila-card .asistente-role, .asistente-card:first-child .asistente-role', html: 'Actriu · Ballarina · Docent' },
      { sel: '#andres .asistente-role, .asistente-card:last-child .asistente-role',       html: 'Actor · Docent' },
      { sel: '.asistente-summary',     html: 'Veure CV <span class="asistente-arrow">▾</span>' },
      { sel: '.asistente-cv-label:first-of-type', html: 'Teatre' },
      /* Comunidad section */
      { sel: '.comunidad-section .overline', html: 'La comunitat' },
    ],

    /* ─────────────── CONTACTO ─────────────── */
    '/contacto/': [
      { sel: '.contacto-overline, .page-overline', html: 'Contacte' },
      { sel: '.contacto-h1, .page-h1',             html: 'Escriu-nos.' },
      { sel: 'label[for="nombre"]',  html: 'Nom' },
      { sel: 'label[for="email"]',   html: 'Correu electrònic' },
      { sel: 'label[for="nivel"]',   html: 'Nivell d\'interès' },
      { sel: 'label[for="mensaje"]', html: 'Missatge' },
      { sel: 'input[name="nombre"]',  attr: 'placeholder', val: 'El teu nom' },
      { sel: 'input[name="email"]',   attr: 'placeholder', val: 'correu@exemple.com' },
      { sel: 'textarea[name="mensaje"]', attr: 'placeholder', val: 'Explica\'ns el que vulguis...' },
      { sel: 'button[type="submit"]', html: 'Enviar missatge →' },
      { sel: 'option[value="principiantes"]', html: 'Principiants' },
      { sel: 'option[value="intermedios"]',   html: 'Amb experiència' },
      { sel: 'option[value="avanzados"]',     html: 'Cos al text' },
    ],

    /* ─────────────── INFO ─────────────── */
    '/info/': [
      { sel: 'h1',  html: 'Informació sobre els tallers' },
    ],

    /* ─────────────── BLOG ─────────────── */
    '/blog/': [
      { sel: '.blog-overline, .page-overline', html: 'Lectures' },
      { sel: '.blog-h1, .page-h1',             html: 'Articles i reflexions.' },
    ],
  };

  /* ── Aplicar traducciones ────────────────────────────────────── */
  function applyList(list) {
    list.forEach(function (item) {
      try {
        var els = document.querySelectorAll(item.sel);
        els.forEach(function (el) {
          if (item.attr) {
            el.setAttribute(item.attr, item.val);
          } else if (item.html !== undefined) {
            el.innerHTML = item.html;
          }
        });
      } catch (e) { /* selector inválido, ignorar */ }
    });
  }

  function apply(lang) {
    if (lang === 'es') {
      localStorage.setItem('ttb_lang', 'es');
      location.reload();
      return;
    }
    /* Catalán */
    applyList(COMMON);
    var path = location.pathname;
    if (path !== '/' && path.slice(-1) !== '/') path += '/';
    if (PAGES[path]) applyList(PAGES[path]);
    document.documentElement.lang = 'ca';
    localStorage.setItem('ttb_lang', 'ca');
    updateToggle('ca');
  }

  function updateToggle(lang) {
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      if (lang === 'ca') {
        btn.textContent = 'ES';
        btn.setAttribute('data-target', 'es');
        btn.setAttribute('aria-label', 'Canviar a castellà');
        btn.classList.add('lang-active');
      } else {
        btn.textContent = 'CA';
        btn.setAttribute('data-target', 'ca');
        btn.setAttribute('aria-label', 'Canviar a català');
        btn.classList.remove('lang-active');
      }
    });
  }

  /* ── Init ────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    /* Botones de toggle */
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = this.getAttribute('data-target') || 'ca';
        apply(target);
      });
    });
    /* Restaurar idioma guardado */
    var saved = localStorage.getItem('ttb_lang');
    if (saved === 'ca') apply('ca');
  });

  window.TTBLang = { apply: apply };

})();
