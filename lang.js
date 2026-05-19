/* ═══════════════════════════════════════════════════════════════
   lang.js — Selector de idioma ES / CA
   talleresdeteatro.es — cobertura exhaustiva verificada contra HTML real
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Traducciones comunes a todas las páginas ────────────────── */
  var COMMON = [
    /* Navbar desktop */
    { sel: '.nav-links a[href="/"]',                     html: 'Benvinguts' },
    { sel: '.nav-links a[href="/principiantes/"]',       html: 'Principiants' },
    { sel: '.nav-links a[href="/intermedios/"]',         html: 'Amb experiència' },
    { sel: '.nav-links a[href="/avanzados/"]',           html: 'Cos al text' },
    { sel: '.nav-links a[href="/quienes-somos/"]',       html: 'Nosaltres' },
    { sel: '.nav-links a[href="/blog/"]',                html: 'Lectures' },
    { sel: '.nav-cta a',                                 html: 'Escriu-nos' },
    { sel: '.nav-has-dropdown > a',                      html: 'Fotos i vídeos <span class="nav-chevron">▾</span>' },
    /* Menú móvil */
    { sel: '.mobile-menu-nav a[href="/"]',               html: 'Benvinguts' },
    { sel: '.mobile-menu-nav a[href="/principiantes/"]', html: 'Principiants' },
    { sel: '.mobile-menu-nav a[href="/intermedios/"]',   html: 'Amb experiència' },
    { sel: '.mobile-menu-nav a[href="/avanzados/"]',     html: 'Cos al text' },
    { sel: '.mobile-menu-nav a[href="/quienes-somos/"]', html: 'Nosaltres' },
    { sel: '.mobile-menu-nav a[href="/blog/"]',          html: 'Lectures' },
    { sel: '.mm-cta',                                    html: 'Escriu-nos →' },
    /* Botón WhatsApp y hamburger */
    { sel: '.btn-wa',                                    html: 'Reservar classe <span class="arrow">→</span>' },
    { sel: '.hamburger', attr: 'aria-label', val: 'Obrir menú' },
  ];

  /* ── Traducciones por página ─────────────────────────────────── */
  var PAGES = {

    /* ══════════════════════════════════════════════════════
       HOME
    ══════════════════════════════════════════════════════ */
    '/': [
      { sel: '.hero-mobile-badge',   html: 'Estudi de teatre<br>Dir. Sebastián Mogordoy · Candelaria Sesín' },
      { sel: '.hero-overline',       html: 'Des del 2010 a Buenos Aires — Des del 2020 a Barcelona · Gràcia' },
      { sel: '.hero-h1',             html: 'Ser tot allò<br><span class="accent-word">que no som.</span>' },
      { sel: '.hero-cta-block a.btn-primary:not(.btn-wa)', html: 'Veure tallers <span class="arrow">→</span>' },
      /* Reseñas */
      { sel: '.reviews-header-left .overline', html: 'El que diuen' },
      { sel: '.badge-txt',           html: '<strong>5 / 5</strong> · 88 ressenyes · Google' },
      /* Talleres */
      { sel: '.levels-h2',           html: 'Tria el teu<br>punt d\'<br><span class="accent-word">entrada.</span>' },
      { sel: '.levels-intro',        html: 'Tres recorreguts possibles per estudiar teatre a Barcelona: per als que comencen de zero, per als que volen aprofundir i per a actors que busquen entrenament, presència i llenguatge propi.' },
      /* Anuncio */
      { sel: '.levels-announce-tag',   html: 'Nou grup' },
      { sel: '.levels-announce-title', html: 'Principiants' },
      { sel: '.levels-announce-badge', html: 'Inici juny 2026' },
      { sel: '.levels-announce-cta',   html: 'Reservar plaça →' },
      /* Cards de nivel */
      { sel: '#principiantes .level-card-subtitle', html: 'La creació de l\'artifici. Formació.' },
      { sel: '#principiantes .level-card-title',    html: 'Principiants' },
      { sel: '#principiantes .level-card-cta',      html: 'Més info i inscripció — Principiants →' },
      { sel: '#intermedios .level-card-subtitle',   html: 'La inscripció del propi. Entrenament.' },
      { sel: '#intermedios .level-card-title',      html: 'Amb experiència' },
      { sel: '#intermedios .level-card-cta',        html: 'Més info i inscripció — Amb experiència →' },
      { sel: '#avanzados .level-card-subtitle',     html: 'Cos al text. Entrenament avançat.' },
      { sel: '#avanzados .level-card-title',        html: 'Cos al text' },
      { sel: '#avanzados .level-card-cta',          html: 'Més info i inscripció — Cos al text →' },
      /* Galería */
      { sel: '.galeria-overline',    html: 'Fotos i vídeos' },
    ],

    /* ══════════════════════════════════════════════════════
       PRINCIPIANTES
    ══════════════════════════════════════════════════════ */
    '/principiantes/': [
      /* Hero */
      { sel: '.hero-tag',                        html: 'Taller 01 · Sense experiència prèvia' },
      { sel: '.hero-title',                      html: 'Iniciació.',   index: 0 },
      { sel: '.hero-title',                      html: 'Principiants', index: 1 },
      { sel: '.hero-tagline',                    html: 'Per a persones amb ganes d\'expressar-se, aprendre i divertir-se, fent teatre.' },
      /* Intro section */
      { sel: '.intro-section .overline',         html: 'Per a qui' },
      { sel: '.intro-statement',                 html: 'No cal<br>haver actuat<br><span class="acc">mai.</span>' },
      { sel: '.intro-pullquote p',               html: 'Aquest és un lloc per no saber,<br>per equivocar-se<br>i expandir-se.' },
      { sel: '.intro-cta-line span',             html: '¡No t\'ho pensis més i vine a provar!' },
      /* Porque section */
      { sel: '.porque-section .overline',        html: 'El perquè' },
      { sel: '.porque-headline',                 html: 'Actuar<br>és una altra<br><span>forma</span><br>d\'estar.' },
      { sel: '.porque-intro',                    html: 'No per convertir-se en una altra persona. Sinó per descobrir altres possibilitats de la pròpia. El teatre no t\'ensenya a fingir, t\'ensenya a estar present.' },
      /* Proceso section */
      { sel: '.proceso-section .overline',       html: 'L\'entrenament actoral' },
      { sel: '.proceso-h2',                      html: 'Cada classe,<br><span class="acc">una aventura.</span>' },
      /* Video section */
      { sel: '.video-section .overline',         html: 'El taller en vídeo' },
      { sel: '.video-h2',                        html: 'Fer el<br>salt.' },
      /* Testimonios */
      { sel: '.testimonios-section .overline',   html: 'El que diuen' },
      { sel: '.testimonios-h2',                  html: 'El que diuen<br>els que ja<br><span class="acc">hi eren.</span>' },
      /* Reels */
      { sel: '.reels-section .overline',         html: 'Benvinguts' },
      /* Info section */
      { sel: '.info-section .overline',          html: 'Informació pràctica' },
      { sel: '.info-col-title',                  html: 'El taller',      index: 0 },
      { sel: '.info-col-title',                  html: 'La inscripció',  index: 1 },
      { findText: '.info-label', from: 'Nivel',          to: 'Nivell' },
      { findText: '.info-label', from: 'Frecuencia',     to: 'Freqüència' },
      { findText: '.info-label', from: 'Días y grupos',  to: 'Dies i grups' },
      { findText: '.info-label', from: 'Lugar',          to: 'Lloc' },
      { findText: '.info-label', from: 'Incorporación',  to: 'Incorporació' },
      { findText: '.info-label', from: 'Coordinan',      to: 'Coordinen' },
      { findText: '.info-label', from: 'Clase de prueba',to: 'Classe de prova' },
      /* Ubicación */
      { sel: '.ubicacion-section .overline',     html: 'On som' },
      /* Test section (segunda galería testimonios) */
      { sel: '.test-section .test-overline',     html: 'Testimonis' },
      { sel: '.test-h2',                         html: 'El que diuen<br>els que ja<br><span class="acc">hi eren.</span>' },
      /* FAQ */
      { sel: '.faq-section .overline',           html: 'Preguntes freqüents' },
      { sel: '.faq-h2',                          html: 'Tot el que<br>et preguntes.' },
      /* CTA final */
      { sel: '.cta-title',                       html: 'que vol<br>entrar en<br><span class="acc">escena.</span>' },
      { sel: '.cta-sub',                         html: 'La primera classe és sense cost. Vine a conèixer l\'espai, el grup i la forma de treballar. Sense compromís, només per veure com se sent.' },
      { sel: '.cta-nota',                        html: 'Incorporació per entrevista — Places limitades' },
      /* Galeria */
      { sel: '.galeria-universo .overline',      html: 'El taller en imatges' },
      { sel: '.galeria-titulo',                  html: 'Som imatges<br><span class="acc">que expliquem històries.</span>' },
      { sel: '.gallery .overline',               html: 'Galeria' },
    ],

    /* ══════════════════════════════════════════════════════
       INTERMEDIOS
    ══════════════════════════════════════════════════════ */
    '/intermedios/': [
      /* Hero */
      { sel: '.hero-tag',                        html: 'Taller 02 · Amb experiència teatral' },
      { sel: '.hero-title',                      html: 'Amb experiència.' },
      { sel: '.hero-tagline',                    html: 'Per a actors professionals i estudiants avançats que volen aprofundir, crear escenes i trobar la seva poètica.' },
      /* Intro */
      { sel: '.intro-section .overline',         html: 'Per a qui' },
      { sel: '.intro-statement',                 html: 'La ficció<br>surt de<br><span class="acc">tu.</span>' },
      { sel: '.intro-pullquote p',               html: 'El material és el teu. El treball és trobar com posar-lo a escena.' },
      { sel: '.intro-cta-line span',             html: 'Incorporació per entrevista' },
      /* Escena section */
      { sel: '.escena-section .overline',        html: 'L\'entrenament' },
      { sel: '.escena-h2',                       html: 'El treball<br>sobre l\'<span>escena.</span>' },
      { sel: '.escena-intro',                    html: 'Treball sobre escenes pròpies, construcció de personatge, veu i presència escènica. Cada participant porta el seu material: situacions reals, textos, imatges o conflictes que volen escenificar.' },
      /* Metodo section */
      { sel: '.metodo-section .overline',        html: 'La metodologia' },
      /* Video section */
      { sel: '.video-section .overline',         html: 'Cicle de teatre' },
      { sel: '.video-h2',                        html: 'La tirania<br>del<br>desig.' },
      /* Testimonios */
      { sel: '.testimonios-section .overline',   html: 'El que diuen' },
      { sel: '.testimonios-h2',                  html: 'El que diuen<br>els que ja<br><span class="acc">hi eren.</span>' },
      /* Carousel */
      { sel: '.carousel-h2',                     html: 'Estem<br>en <span>moviment.</span>' },
      /* Info section */
      { sel: '.info-section .overline',          html: 'Informació pràctica' },
      { findText: '.info-label', from: 'Nivel',          to: 'Nivell' },
      { findText: '.info-label', from: 'Formato',        to: 'Format' },
      { findText: '.info-label', from: 'Horarios',       to: 'Horaris' },
      { findText: '.info-label', from: 'Lugar',          to: 'Lloc' },
      { findText: '.info-label', from: 'Precio',         to: 'Preu' },
      { findText: '.info-label', from: 'Coordinación',   to: 'Coordinació' },
      /* Ubicación */
      { sel: '.ubicacion-section .overline',     html: 'On trobar-nos' },
      { sel: '.ubicacion-h2',                    html: 'Gràcia,<br>Barcelona.' },
      /* FAQ */
      { sel: '.faq-section .overline',           html: 'Preguntes freqüents' },
      { sel: '.faq-h2',                          html: 'El que<br>solen preguntar.' },
      /* CTA */
      { sel: '.cta-nota',                        html: 'Incorporació per entrevista — Places limitades' },
    ],

    /* ══════════════════════════════════════════════════════
       AVANZADOS
    ══════════════════════════════════════════════════════ */
    '/avanzados/': [
      /* Hero */
      { sel: '.hero-tag',                        html: 'Taller d\'escena · Text · Veu' },
      { sel: '.hero-title',                      html: 'Cos<br>al text.' },
      { sel: '.hero-tagline',                    html: 'Entrenament per a actors i estudiants avançats que volen aprofundir el treball sobre la paraula, el conflicte, l\'escolta i la poètica escènica.' },
      /* Intro */
      { sel: '.intro-section .overline',         html: 'La idea central' },
      { sel: '.intro-statement',                 html: 'Les paraules<br>surten d\'<br>un <span class="acc">cos.</span>' },
      { sel: '.intro-pullquote p',               html: 'El text<br>no es recita.' },
      { sel: '.intro-cta-line span',             html: 'Incorporació per entrevista' },
      /* Escena section */
      { sel: '.escena-section .overline',        html: 'Entrenament' },
      { sel: '.escena-h2',                       html: 'Què<br><span>entreniem.</span>' },
      { sel: '.escena-intro',                    html: 'Cinc eixos que es treballen de forma integrada. No són mòduls separats: són dimensions d\'un mateix acte d\'actuar.' },
      /* Video section */
      { sel: '.video-section .overline',         html: 'El treball en vídeo' },
      { sel: '.video-h2',                        html: 'Dir<br>des de<br>la <span class="acc">escena.</span>' },
      /* Testimonios */
      { sel: '.testimonios-section .overline',   html: 'El que diuen' },
      { sel: '.testimonios-h2',                  html: 'Els que ja<br>van treballar.' },
      /* Carousel */
      { sel: '.carousel-h2',                     html: 'En <span>moviment.</span>' },
      /* Info section */
      { sel: '.info-section .overline',          html: 'Informació pràctica' },
      { findText: '.info-label', from: 'Nivel',          to: 'Nivell' },
      { findText: '.info-label', from: 'Modalidad',      to: 'Modalitat' },
      { findText: '.info-label', from: 'Formato',        to: 'Format' },
      { findText: '.info-label', from: 'Horarios',       to: 'Horaris' },
      { findText: '.info-label', from: 'Lugar',          to: 'Lloc' },
      { findText: '.info-label', from: 'Incorporación',  to: 'Incorporació' },
      { findText: '.info-label', from: 'Precio',         to: 'Preu' },
      { findText: '.info-label', from: 'Coordinación',   to: 'Coordinació' },
      /* Ubicación */
      { sel: '.ubicacion-section .overline',     html: 'On trobar-nos' },
      { sel: '.ubicacion-h2',                    html: 'Gràcia,<br>Barcelona.' },
      /* FAQ */
      { sel: '.faq-section .overline',           html: 'Preguntes freqüents' },
      { sel: '.faq-h2',                          html: 'Preguntes<br>freqüents.' },
      /* CTA */
      { sel: '.cta-nota',                        html: 'Incorporació per entrevista — Places limitades' },
    ],

    /* ══════════════════════════════════════════════════════
       QUIÉNES SOMOS
    ══════════════════════════════════════════════════════ */
    '/quienes-somos/': [
      { sel: '.hero-overline',                                   html: 'Tallers de Teatre a Barcelona · Des del 2010' },
      { sel: '#sebastian .persona-role',                         html: 'Actor · Director · Pedagog' },
      { sel: '#candelaria .persona-role',                        html: 'Actriu · Directora · Docent' },
      { sel: '.asistentes-overline',                             html: 'Assistents d\'entrenament' },
      { sel: '.asistentes-h2',                                   html: 'Acompanyen<br>el procés.' },
      { sel: '.asistente-card:first-child .asistente-role',      html: 'Actriu · Ballarina · Docent' },
      { sel: '.asistente-card:last-child .asistente-role',       html: 'Actor · Docent' },
      { sel: '.asistente-summary',                               html: 'Veure CV <span class="asistente-arrow">▾</span>' },
    ],

    /* ══════════════════════════════════════════════════════
       CONTACTO
    ══════════════════════════════════════════════════════ */
    '/contacto/': [
      { sel: '.contact-hero-title',              html: 'Escriu-nos.' },
      { sel: 'label[for="nombre"]',              html: 'Nom' },
      { sel: 'label[for="email"]',               html: 'Correu electrònic' },
      { sel: 'label[for="nivel"]',               html: 'Nivell d\'interès' },
      { sel: 'label[for="mensaje"]',             html: 'Missatge' },
      { sel: 'input[name="nombre"]',   attr: 'placeholder', val: 'El teu nom' },
      { sel: 'input[name="email"]',    attr: 'placeholder', val: 'correu@exemple.com' },
      { sel: 'textarea[name="mensaje"]', attr: 'placeholder', val: 'Explica\'ns el que vulguis...' },
      { sel: 'button[type="submit"]',            html: 'Enviar missatge →' },
      { sel: 'option[value="principiantes"]',    html: 'Principiants' },
      { sel: 'option[value="intermedios"]',      html: 'Amb experiència' },
      { sel: 'option[value="avanzados"]',        html: 'Cos al text' },
    ],

    /* ══════════════════════════════════════════════════════
       INFO
    ══════════════════════════════════════════════════════ */
    '/info/': [
      { sel: 'h1', html: 'Informació sobre els tallers' },
    ],

    /* ══════════════════════════════════════════════════════
       BLOG
    ══════════════════════════════════════════════════════ */
    '/blog/': [
      { sel: '.blog-overline, .page-overline', html: 'Lectures' },
      { sel: '.blog-h1, .page-h1',             html: 'Articles i reflexions.' },
    ],
  };

  /* ── Motor de traducción ─────────────────────────────────────── */
  function applyList(list) {
    list.forEach(function (item) {
      try {
        /* findText: busca elementos por contenido de texto exacto */
        if (item.findText) {
          document.querySelectorAll(item.findText).forEach(function (el) {
            if (el.textContent.trim() === item.from) el.textContent = item.to;
          });
          return;
        }
        var els = Array.from(document.querySelectorAll(item.sel));
        /* index: apunta a un elemento específico de la lista */
        if (item.index !== undefined) els = els[item.index] ? [els[item.index]] : [];
        els.forEach(function (el) {
          if (item.attr) {
            el.setAttribute(item.attr, item.val);
          } else if (item.html !== undefined) {
            el.innerHTML = item.html;
          }
        });
      } catch (e) { /* selector inválido — ignorar silenciosamente */ }
    });
  }

  function apply(lang) {
    if (lang === 'es') {
      localStorage.setItem('ttb_lang', 'es');
      location.reload();
      return;
    }
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
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = this.getAttribute('data-target') || 'ca';
        apply(target);
      });
    });
    var saved = localStorage.getItem('ttb_lang');
    if (saved === 'ca') apply('ca');
  });

  window.TTBLang = { apply: apply };

})();
