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

      /* Announce cells */
      { sel: '.cell-label',  html: 'Dia',    index: 1 },
      { sel: '.cell-label',  html: 'Horari', index: 2 },
      { sel: '.cell-value',  html: 'Dimarts', index: 1 },

      /* Level card texts (resum breu) */
      { sel: '#principiantes .level-card-text', html: 'Per a persones sense experiència prèvia — o amb ganes de tornar a jugar. El més important és passar-la bé, desconnectar i descobrir el plaer d\'actuar. Improvisació, cos, escolta i primeres eines actorals per entrar en la ficció sense por.' },
      { sel: '#intermedios .level-card-text',   html: 'Per a qui ja té experiència i vol aprofundir i entrenar actuació. Personatge, presència, desig, conflicte i poètica personal.' },
      { sel: '#avanzados .level-card-text',     html: 'Explorarem escenes i monòlegs des del cos, l\'estat i les forces invisibles que travessen cada situació. Text, ritme, sonoritat i conflicte com a matèria viva per actuar des d\'una presència real i no des de la representació.' },

      /* Level card horaris */
      { sel: '#principiantes .level-card-schedule', html: 'Dilluns / Dimarts / Dijous &nbsp;·&nbsp; 19 a 22h' },
      { sel: '#intermedios .level-card-schedule',   html: 'Dimecres &nbsp;·&nbsp; 19 a 22h' },
      { sel: '#avanzados .level-card-schedule',     html: 'Dilluns &nbsp;·&nbsp; 10 a 13h', index: 0 },

      /* Level card detalls desplegables */
      { sel: '#principiantes .level-card-details summary', html: 'Llegir descripció completa <span class="dets-arrow">↓</span>' },
      { sel: '#intermedios .level-card-details summary',   html: 'Llegir descripció completa <span class="dets-arrow">↓</span>' },
      { sel: '#avanzados .level-card-details summary',     html: 'Llegir descripció completa <span class="dets-arrow">↓</span>' },

      /* Level info texts (expandits, desktop) */
      { sel: '#info-principiantes .level-info-text', html: 'Vols estudiar per primera vegada? En aquesta primera etapa els participants formaran part d\'un espai diferent als de la seva vida quotidiana, amb altres regles i altres possibilitats, juntament amb un grup de persones de diverses edats. La proposta és treballar amb cadascú, des del joc, transcendint cap al teatral. Que vulguin donar-se permís per tornar a jugar, desinhibir-se, perdre la por a l\'exposició, donant credibilitat a les situacions de ficció i descobrint la pròpia potència expressiva. Que puguin "fracturar el real" per alterar el quotidià, soltant el "jo social" i donant lloc a l\'escena de ficció, possibilitant un encontre diferent amb un mateix i amb els altres.<br><br>Un espai per als qui desitgen començar a actuar o tornar a connectar amb el joc, la imaginació i la presència. Treballarem improvisació, escolta, disponibilitat, cos, vincle i primeres eines actorals per entrar en la ficció des de l\'acció i no des de la idea. Explorarem l\'entrenament com un territori de llibertat expressiva on l\'escena apareix com a experiència viva, sensible i compartida.' },
      { sel: '#info-intermedios .level-info-text',   html: 'Treballarem perquè els participants dominin tècnicament la seva eina i que puguin comprendre\'s —més que com la idea d\'un personatge— com una força poètica, un cos disposat, entrenat, vibrant, que en el moment d\'actuar posa en joc tots els seus sentits i aconsegueix manejar tant la percepció multidireccional com la radiació de la pròpia energia, per mitjà de la improvisació dirigida.<br><br>S\'assimila la tècnica i s\'aferma la poètica. L\'activitat demana major compromís i comença a desplegar major complexitat i profunditat en el encontre amb l\'actuació. Entrenarem i crearem escenes per presentar a fi de cicle davant els nostres amics i familiars.<br><br>Un espai d\'aprofundiment per a actors, actrius i estudiants avançats, que ja van tenir un recorregut previ i desitgen ampliar el seu entrenament. Investigarem escena, conflicte, presència, desig, imaginari i construcció de materials actorals des d\'una recerca tècnica i poètica. El treball estarà orientat a desenvolupar una major complexitat expressiva, enfortint la relació entre cos, actuació i mirada pròpia dins de l\'escena.' },
      { sel: '#info-avanzados .level-info-text',     html: 'El treball sobre escenes de text i monòlegs estarà centrat en comprendre que actuar un text no significa "dir bé" unes paraules, sinó descobrir quines forces el produeixen. Analitzarem les tensions que organitzen cada situació, investigant com moltes vegades la veritable lògica de l\'escena no coincideix amb la lògica racional del text escrit. L\'actuació apareix justament en aquella fricció.<br><br>Ens interessa entendre que les paraules no surten solament d\'una idea, sinó d\'un cos travessat per un estat. Un cos afectat, vibrant, desitjant, resistint, manipulant, fugint, necessitant alguna cosa de l\'altre. El text serà abordat doncs com a matèria viva: acció, impuls, respiració i comportament.<br><br>Treballarem també sobre les dimensions sonores i musicals de l\'actuació: el ritme intern de l\'escena, les velocitats, les pauses, les ruptures, la melodia de les frases, la respiració i la relació entre so i sentit.<br><br>La recerca serà que cada actor pugui construir una relació orgànica i poètica amb el text, allunyant-se de la representació il·lustrativa per trobar una actuació viva, present i travessada per veritables forces escèniques.' },

      /* Secció Nuestra mirada / superjuego */
      { sel: '.mirada-grid .overline', html: 'La nostra mirada' },
      { sel: '.mirada-grid h2',        html: 'El teatre <br /> com un <br><span style="color:var(--accent);">superjoc.</span>' },
      { sel: '.mirada-grid p', html: 'Actuar és un acte conscient, tècnic, poètic, lúdic i expressiu. La nostra pedagogia no transmet continguts: t\'acompanyem en el teu procés creatiu.', index: 0 },
      { sel: '.mirada-grid p', html: 'El teatre és el territori on pots ser tot allò que no ets. Un superjoc que t\'invita a descobrir una nova forma d\'habitar el món, d\'estar amb altres, d\'arriscar.', index: 1 },
      { sel: '.mirada-grid p', html: 'Si busques classes de teatre a Barcelona que et permetin explorar la teva creativitat, connectar amb el teu cos i transformar el teu potencial expressiu — has arribat al lloc indicat.', index: 2 },

      /* Metodologia */
      { sel: '.metodo-header .overline', html: 'Metodologia' },
      { sel: '.metodo-header h2',        html: 'Per què triar els nostres tallers de teatre a Barcelona?' },
      { findText: '.metodo-item-title', from: 'Sin experiencia previa',         to: 'Sense experiència prèvia' },
      { findText: '.metodo-item-title', from: 'El cuerpo como protagonista',    to: 'El cos com a protagonista' },
      { findText: '.metodo-item-title', from: 'Desarrollo integral',            to: 'Desenvolupament integral' },
      { findText: '.metodo-item-title', from: 'Poética personal',               to: 'Poètica personal' },
      { findText: '.metodo-item-title', from: 'Enfoque en el «Aquí y Ahora»',   to: 'Enfocament en l\'«Aquí i Ara»' },
      { findText: '.metodo-item-title', from: 'Los encuentros',                 to: 'Les trobades' },
      { sel: '.metodo-item-text', html: 'Si mai has actuat, aquest és el teu lloc! Els nostres grups per a principiants estan dissenyats per a persones sense cap experiència, on el joc i la improvisació són el punt de partida perquè desenvolupis el teu camp imaginari.', index: 0 },
      { sel: '.metodo-item-text', html: 'Inspirats en grans mestres com Raúl Serrano i Ricardo Bartís, treballem el cos no només com una eina expressiva, sinó com el territori on s\'inscriu el conflicte, un llenguatge que no necessita paraules, un lloc de contradicció i veritat.', index: 1 },
      { sel: '.metodo-item-text', html: 'Fomentem la desinhibició, la confiança i la creativitat. Aquí podràs donar-te permís per tornar a jugar, equivocar-te i expandir-te, allunyant-te del «jo social» i fer un salt al camp imaginari, on tot el que t\'imaginis pot passar.', index: 2 },
      { sel: '.metodo-item-text', html: 'Creiem que la teva poètica personal és el relat. No busquem actors genèrics, sinó alliberar la teva veu pròpia i singular, aquella «força expressiva» que et fa únic.', index: 3 },
      { sel: '.metodo-item-text', html: 'T\'ensenyem a activar el present escènic, a vincular-te sense guió previ i a permetre que el teu cos estigui disposat a l\'error i a la troballa.', index: 4 },
      { sel: '.metodo-item-text', html: 'Les trobades setmanals de 3 hores inclouen entrenament col·lectiu, improvisació d\'escenes i reflexió compartida per integrar l\'aprenentatge.<br><br>Tenim molts vestuaris, sabates, perruques, objectes, llums perquè l\'experiència sigui espectacular!', index: 5 },

      /* Bloc Lectures */
      { sel: '.lect-grid > div > span',         html: 'Lectures' },
      { sel: '.lect-grid > div > h3',           html: 'Pensar<br>el teatre.' },
      { sel: '.lect-grid > div > p',            html: 'Articles sobre actuació, cos, imatge i procés creatiu.' },
      { findText: '.lect-grid span', from: 'Técnica actoral',               to: 'Tècnica actoral' },
      { findText: '.lect-grid span', from: 'Filosofía',                     to: 'Filosofia' },
      { findText: '.lect-grid span', from: 'Entrenamiento',                 to: 'Entrenament' },
      { findText: '.lect-grid span', from: 'Por qué actuar no es representar', to: 'Per què actuar no és representar' },
      { findText: '.lect-grid span', from: 'El juego como origen',          to: 'El joc com a origen' },
      { sel: '.lect-grid > div > a[href="/blog/"]', html: 'Veure tots els articles →' },

      /* Bloc Qüestionaris */
      { sel: '.lect-grid > a > span:first-child', html: 'Qüestionaris' },
      { sel: '.lect-grid > a > h3',               html: 'Posa\'l<br>a prova.' },
      { sel: '.lect-grid > a > p',                html: 'Preguntes sobre els conceptes de l\'entrenament: presència, imatge, cos, improvisació. Per saber el que saps, i el que encara no.' },
      { sel: '.lect-grid > a > span:last-child',  html: 'Anar als qüestionaris →' },

      /* Secció Nosaltres (home) */
      { sel: '.nosotros-header .overline', html: 'Qui som' },
      { sel: '.nosotros-card-role', html: 'Coord. General · Professor', index: 0 },
      { sel: '.nosotros-card-role', html: 'Professora', index: 1 },
      { sel: '.prof-role', html: 'Coord. General · Professor', index: 0 },
      { sel: '.prof-role', html: 'Professora', index: 1 },
      { sel: '.nosotros-15anos-titulo', html: '15 anys <br><span class="nosotros-juntos">junts.</span>' },
      { sel: '.nosotros-card-text', html: 'Vam começar l\'any 2010 amb 8 inoblidables alumnes al Camarín de las Musas. Avui continuem fent i pensant el teatre que ens agrada.', index: 2 },
      { sel: '#nosotros .container > div:last-child h2', html: 'Tenim <br><span style="color:var(--accent);">el teatre.</span>' },
      { sel: '.nosotros-card-text', html: 'En un món on la realitat ens empeny a sobreviure enmig de diferents guerres, el teatre continua sent la nostra trinxera, el nostre refugi, lloc d\'expressió, experimentació i investigació, de l\'humà i del procés creatiu.', index: 3 },
      { sel: '.nosotros-card-text', html: 'Quan la vida es posa una mica avorrida o massa agressiva, el teatre ens proposa intensitats poètiques i expressives que ens fan soltar la representació "del personatge que som a la vida" per llençar-nos en un no saber que ens obre a altres possibilitats d\'existència, expandint la nostra experiència, habitant forces i situacions que no ens són pròpies. Ens convida a ser tot allò que no som.', index: 4 },
    ],

    /* ══════════════════════════════════════════════════════
       PRINCIPIANTES
    ══════════════════════════════════════════════════════ */
    '/principiantes/': [
      /* Hero */
      { sel: '.hero-tag',   html: 'Taller 01 · Sense experiència prèvia' },
      { sel: '.hero-title', html: 'Iniciació.',   index: 0 },
      { sel: '.hero-title', html: 'Principiants', index: 1 },
      { sel: '.hero-tagline', html: 'Per a persones amb ganes d\'expressar-se, aprendre i divertir-se, fent teatre.' },
      { sel: '.hero-dir-label', html: 'Estudi de teatre' },
      { sel: '.hero-dir-junto', html: 'juntament amb Candelaria Sesín' },
      { sel: '.hero-meta-item', html: '<strong>Barcelona · Gràcia</strong>', index: 0 },
      { sel: '.hero-meta-item', html: 'Espai La Mansió', index: 1 },
      { sel: '.hero-meta-item', html: 'Places obertes', index: 2 },

      /* Intro section */
      { sel: '.intro-section .overline', html: 'Per a qui' },
      { sel: '.intro-statement', html: 'No cal<br>haver actuat<br><span class="acc">mai.</span>' },
      { sel: '.intro-pullquote p', html: 'Aquest és un lloc per no saber,<br>per equivocar-se<br>i expandir-se.' },
      { sel: '.intro-cta-line span', html: 'No t\'ho pensis més i vine a provar!' },
      /* Párrafos intro */
      { sel: '.intro-p', html: 'Aquest taller de teatre per a principiants està pensat per a persones que s\'acosten a l\'actuació <strong>per primera vegada</strong>, o per a qui vol tornar a connectar amb el joc, el cos i la imaginació després d\'anys sense fer-ho.', index: 0 },
      { sel: '.intro-p', html: 'No s\'actua bé ni malament. S\'actua des d\'on cadascú és i comprèn què és actuar, no cal que sàpiguen fer-ho. Als entrenaments s\'entra en un territori diferent al quotidià, amb altres regles, altres possibilitats, un altre ús del temps, del cos i del camp imaginari. El punt de partida és la curiositat. L\'únic necessari són les ganes d\'animar-se.', index: 1 },
      { sel: '.intro-p', html: 'Entrenarement amb cada persona, <strong>des del joc corporal</strong>, transcendint cap al teatral, per acompanyar-te en un procés acumulatiu i descobrir les teves possibilitats expressives i la teva poètica personal, per mitjà de la improvisació dirigida.', index: 2 },
      { sel: '.intro-p', html: 'Els grups estan conformats per <strong>adults de tots dos sexes, de diferents edats, de diferents costums i nacionalitats</strong>. T\'esperem! És moment d\'actuar.', index: 3 },
      /* Tags */
      { findText: '.intro-kw-tag', from: 'Improvisación teatral', to: 'Improvisació teatral' },
      { findText: '.intro-kw-tag', from: 'Formación actoral',     to: 'Formació actoral' },
      { findText: '.intro-kw-tag', from: 'Gracia, Barcelona',     to: 'Gràcia, Barcelona' },
      { findText: '.intro-kw-tag', from: 'Adultos',               to: 'Adults' },
      { findText: '.intro-kw-tag', from: 'Desde cero',            to: 'Des de zero' },

      /* Porque section */
      { sel: '.porque-section .overline', html: 'El perquè' },
      { sel: '.porque-headline', html: 'Actuar<br>és una altra<br><span>forma</span><br>d\'estar.' },
      { sel: '.porque-intro', html: 'No per convertir-se en una altra persona. Sinó per descobrir altres possibilitats de la pròpia. El teatre no t\'ensenya a fingir, t\'ensenya a estar present.' },
      /* Items porque */
      { sel: '.porque-concept', html: 'Joc adult',        index: 0 },
      { sel: '.porque-concept', html: 'Presència real',   index: 1 },
      { sel: '.porque-concept', html: 'Vincle genuí',     index: 2 },
      { sel: '.porque-concept', html: 'Llibertat expressiva', index: 3 },
      { sel: '.porque-desc', html: 'Hi ha coses que només ocorren quan deixem de controlar-ho tot. El teatre activa aquesta part, la que sap jugar, inventar, creure en l\'impossible.', index: 0 },
      { sel: '.porque-desc', html: 'A escena no es pot estar en un altre lloc. Aquella concentració en el present, en el cos, en l\'altre, en el que passa, és alguna cosa que s\'entrena i que canvia com et relaciones amb el món.', index: 1 },
      { sel: '.porque-desc', html: 'El grup que es forma en un taller de teatre és diferent al de qualsevol altre context. Hi ha alguna cosa en l\'exposició compartida que genera llaços reals.', index: 2 },
      { sel: '.porque-desc', html: 'Sortir dels hàbits expressius propis. Habitar altres estats, altres ritmes, altres lògiques. Això amplia alguna cosa, no sols a l\'escenari.', index: 3 },

      /* Editorial caption */
      { sel: '.editorial-strip-caption p', html: 'Creure és crear.<br>Fes el primer pas i la resta et sorprendrà.' },

      /* Manifesto */
      { sel: '.manifesto-line', html: 'Tornar a jugar, creure, obrir-te sense jutjar-te', index: 0 },
      { sel: '.manifesto-line', html: 'Fracturar allò real, alterant el quotidià', index: 1 },
      { sel: '.manifesto-line', html: 'Obrir-te a un univers amb altres regles i altres possibilitats', index: 2 },
      { sel: '.manifesto-line', html: 'Reconèixer el teu cos com una eina d\'expressió', index: 3 },
      { sel: '.manifesto-line', html: 'Investigar en el teu propi univers associatiu', index: 4 },
      { sel: '.manifesto-line', html: 'Usar el teu cos «poèticament» des del primer dia', index: 5 },

      /* Hacer section */
      { sel: '.hacer-lead', html: 'A la nostra escola de teatre trobaràs un espai de <strong>trobada, expressió, diversió, treball físic, desenvolupament del camp imaginari, formació actoral i construcció social</strong>, on comenzaràs des de zero.', index: 0 },
      { sel: '.hacer-lead', html: 'Esperem que aquestes trobades et permetin <strong>posar el cos i el desig en acció</strong>, i a més de passar-ho bé i conèixer gent.', index: 1 },

      /* Proceso section */
      { sel: '.proceso-section .overline', html: 'L\'entrenament actoral' },
      { sel: '.proceso-h2', html: 'Cada classe,<br><span class="acc">una aventura.</span>' },
      { sel: '.proceso-nota', html: 'Comptem amb una àmplia selecció de <strong>vestuari, objectes i llums</strong> perquè l\'experiència escènica sigui completa <strong>des del primer dia</strong>.', index: 0 },
      { sel: '.proceso-nota', html: 'La metodologia del taller es construeix sobre tres eixos: <strong>l\'entrenament col·lectiu, la improvisació d\'escenes i la reflexió compartida</strong>. A partir dels potencials individuals i grupals, treballem possibilitant una qualitat de trobada diferent amb un mateix i amb els altres. Aquí começaràs a incorporar les eines necessàries per abordar aquest joc adult que proposa el teatre.', index: 1 },
      { sel: '.proceso-nota', html: 'L\'objectiu és <strong>fracturar allò real</strong>, alterar el quotidià, i donar el salt cap a aquell altre costat on tot pot passar: el camp imaginari. Un espai on el cos, la veu i la presència es converteixen en instruments d\'expressió i des de la primera sessió comences a incorporar les eines que proposa el quefer teatral en un treball acumulatiu i molt intens d\'observació i presa de consciència de la pròpia expressivitat, sempre en contacte <strong>AMB L\'ALTRE</strong>.', index: 2 },
      /* Proceso items */
      { sel: '.proceso-title', html: 'Cos <br><span class="acc">i presència</span>', index: 0 },
      { sel: '.proceso-text', html: 'Cada classe comença amb el cos. Exercicis de disponibilitat, escolta i activació del present escènic. No ioga, no relaxació, entrenament actoral des del primer encontre.', index: 0 },
      { sel: '.proceso-title', html: 'Improvisació <br><span class="acc">dirigida</span>', index: 1 },
      { sel: '.proceso-text', html: 'L\'eix central del treball. Tots a l\'espai actuant alhora, conduïts pel coordinador. S\'aprèn a escoltar, reaccionar i sostenir la ficció des de l\'acció, no des de la idea.', index: 1 },
      { sel: '.proceso-title', html: 'Joc <br><span class="acc">i ficció</span>', index: 2 },
      { sel: '.proceso-text', html: 'S\'activa el camp imaginari, aquell territori on tot allò que t\'imagines pot passar. Situacions impossibles, personatges inesperats, altres mons. Sense vergonya, sense judici.', index: 2 },
      { sel: '.proceso-title', html: 'Improvisació <br><span class="acc">d\'escenes</span>', index: 3 },
      { sel: '.proceso-text', html: 'Improvisem escenes breus des de diferents estímuls. S\'inaugura l\'escolta real, el contacte, l\'afectació mútua. No s\'actua sol: s\'actua amb l\'altre. Això ho canvia tot.', index: 3 },
      { sel: '.proceso-title', html: 'Grup <br><span class="acc">i confiança</span>', index: 4 },
      { sel: '.proceso-text', html: 'El grup és la condició del treball. Es construeix un espai on equivocar-se és benvingut, on l\'error no paralitza sinó que obre possibilitats. Això és el que fa diferent aquest teatre.', index: 4 },
      { sel: '.proceso-title', html: 'Mostra <br><span class="acc">de fi de cicle</span>', index: 5 },
      { sel: '.proceso-text', html: 'Al tancament de l\'any, el grup crea i presenta una mostra per a amics i familiars. No és una obra formal, és una trobada on obrim el procés. El primer de molts que aniran creant junts.', index: 5 },

      /* Video section */
      { sel: '.video-section .overline', html: 'El taller en vídeo' },
      { sel: '.video-h2', html: 'Fer el<br>salt.' },

      /* Testimonios */
      { sel: '.testimonios-section .overline', html: 'El que diuen' },
      { sel: '.testimonios-h2', html: 'El que diuen<br>els que ja<br><span class="acc">hi eren.</span>' },

      /* Reels */
      { sel: '.reels-section .overline', html: 'Benvinguts' },

      /* Info section */
      { sel: '.info-section .overline', html: 'Informació pràctica' },
      { sel: '.info-col-title', html: 'El taller',      index: 0 },
      { sel: '.info-col-title', html: 'La inscripció',  index: 1 },
      { findText: '.info-label', from: 'Nivel',          to: 'Nivell' },
      { findText: '.info-label', from: 'Frecuencia',     to: 'Freqüència' },
      { findText: '.info-label', from: 'Días y grupos',  to: 'Dies i grups' },
      { findText: '.info-label', from: 'Lugar',          to: 'Lloc' },
      { findText: '.info-label', from: 'Incorporación',  to: 'Incorporació' },
      { findText: '.info-label', from: 'Coordinan',      to: 'Coordinen' },
      { findText: '.info-label', from: 'Clase de prueba', to: 'Classe de prova' },
      { findText: '.info-label', from: 'Grupo',          to: 'Grup' },
      { sel: '.info-value', html: 'Principiants, sense experiència prèvia', index: 0 },
      { sel: '.info-value', html: '1 trobada setmanal · <strong>3 hores per classe</strong>', index: 1 },
      { sel: '.info-value', html: 'Espai La Mansió<br>Roger de Flor 253 · Gràcia, Barcelona', index: 3 },
      { sel: '.info-value', html: 'Pots incorporar-te en qualsevol moment de l\'any', index: 4 },
      { sel: '.info-value', html: '<strong>Sense cost</strong> per a grups ja iniciats.', index: 6 },
      { sel: '.info-value', html: 'Consultar per WhatsApp o correu.', index: 7 },
      { sel: '.info-value', html: 'Reduït · màxim 12 persones', index: 8 },

      /* Ubicación */
      { sel: '.ubicacion-section .overline', html: 'On som' },

      /* Test section */
      { sel: '.test-section .test-overline', html: 'Testimonis' },
      { sel: '.test-h2', html: 'El que diuen<br>els que ja<br><span class="acc">hi eren.</span>' },

      /* FAQ */
      { sel: '.faq-section .overline', html: 'Preguntes freqüents' },
      { sel: '.faq-h2', html: 'Tot el que<br>et preguntes.' },
      /* FAQ preguntas (faq-q) */
      { findText: '.faq-q', from: '¿Necesito experiencia previa para el taller de principiantes?', to: 'Necessito experiència prèvia per al taller de principiants?' },
      { findText: '.faq-q', from: '¿Qué pasa si soy tímido?',                                     to: 'Què passa si sóc tímid?' },
      { findText: '.faq-q', from: '¿Qué edades tienen los participantes?',                        to: 'Quines edats tenen els participants?' },
      { findText: '.faq-q', from: '¿Se trabaja con textos y obras?',                              to: 'Es treballa amb textos i obres?' },
      { findText: '.faq-q', from: '¿Hay muestra o función al final del año?',                    to: 'Hi ha mostra o funció al final de l\'any?' },
      { findText: '.faq-q', from: '¿Puedo incorporarme en cualquier momento del año?',            to: 'Puc incorporar-me en qualsevol moment de l\'any?' },
      { findText: '.faq-q', from: '¿Cuánto duran las clases y con qué frecuencia?',              to: 'Quant duren les classes i amb quina freqüència?' },
      { findText: '.faq-q', from: '¿Dónde se hacen las clases de teatro?',                       to: 'On es fan les classes de teatre?' },
      /* FAQ respuestas (faq-a) */
      { sel: '.faq-a', html: 'No. Aquest taller està dissenyat específicament per a persones que mai han fet teatre. No cal cap experiència prèvia. El punt de partida és la curiositat i les ganes de provar, res més.', index: 0 },
      { sel: '.faq-a', html: 'La timidesa és benvinguda. No es tracta de ser extravertit ni d\'actuar bé. El treball es fa des del cos i el joc, en un grup on equivocar-se forma part del procés. Molts alumnes arriben amb por, i descobreixen que això canvia bastant de pressa.', index: 1 },
      { sel: '.faq-a', html: 'Joves i adults de diferents edats, professions i orígens. Aquesta barreja és part del que fa el grup tan interessant i el treball tan viu.', index: 2 },
      { sel: '.faq-a', html: 'L\'eix del treball és la improvisació dirigida, no el text memoritzat. En el nivell de principiants es treballa principalment des del cos, l\'acció i la ficció improvisada. El text entra més endavant, com una eina més dins del treball actoral.', index: 3 },
      { sel: '.faq-a', html: 'Sí. Al tancament de cada cicle el grup crea i presenta una mostra per a amics i familiars. No és una obra formal, és una trobada on es comparteix el procés de l\'any. Una experiència diferent per a tots els que hi participen.', index: 4 },
      { sel: '.faq-a', html: 'Sí. L\'estructura del taller permet incorporar-se en qualsevol moment. Si hi ha un grup nou formant-se, et recomanem reservar plaça directament, les vacants són limitades i els grups s\'omplen de pressa.', index: 5 },
      { sel: '.faq-a', html: 'Cada trobada dura 3 hores, una vegada per setmana. Aquesta freqüència permet que el treball s\'acumuli i s\'aprofundeixi, sense ser una càrrega al calendari setmanal.', index: 6 },
      { sel: '.faq-a', html: 'A l\'Espai La Mansió, Carrer de Roger de Flor 253, Local 2 i 3, al barri de Gràcia, Barcelona. Molt ben comunicat en metro: estacions Verdaguer i Sagrada Família (L2/L5).', index: 7 },

      /* CTA final */
      { sel: '.cta-eyebrow', html: 'Taller de teatre per a principiants · Barcelona · Gràcia' },
      { sel: '.cta-line1',   html: 'Potser hi ha alguna cosa en tu' },
      { sel: '.cta-title',   html: 'que vol<br>entrar en<br><span class="acc">escena.</span>' },
      { sel: '.cta-sub',     html: 'La primera classe és sense cost. Vine a conèixer l\'espai, el grup i la forma de treballar. Sense compromís, només per veure com se sent.' },
      { sel: '.cta-nota',    html: 'Places limitades · Espai La Mansió · Roger de Flor 253 · Gràcia, Barcelona' },

      /* Galeria */
      { sel: '.galeria-universo .overline', html: 'El taller en imatges' },
      { sel: '.galeria-titulo', html: 'Som imatges<br><span class="acc">que expliquem històries.</span>' },
      { sel: '.gallery .overline', html: 'Galeria' },
    ],

    /* ══════════════════════════════════════════════════════
       INTERMEDIOS
    ══════════════════════════════════════════════════════ */
    '/intermedios/': [
      /* Hero */
      { sel: '.hero-tag',     html: 'Taller 02 · Amb experiència teatral' },
      { sel: '.hero-title',   html: 'Amb experiència.' },
      { sel: '.hero-tagline', html: 'Per a actors professionals i estudiants avançats que volen aprofundir, crear escenes i trobar la seva poètica.' },
      { sel: '.hero-dir-label', html: 'Estudi de teatre' },
      { sel: '.hero-dir-junto', html: 'juntament amb Candelaria Sesín' },

      /* Intro */
      { sel: '.intro-section .overline', html: 'Per a qui' },
      { sel: '.intro-statement', html: 'La ficció<br>surt de<br><span class="acc">tu.</span>' },
      { sel: '.intro-pullquote p', html: 'El material és el teu. El treball és trobar com posar-lo a escena.' },
      { sel: '.intro-cta-line span', html: 'Incorporació per entrevista' },
      /* Párrafos intro */
      { sel: '.intro-p', html: 'Si ets actor professional o ja ets un estudiant avançat, en aquesta <strong>escola de teatre</strong> s\'aprofundeix en situacions de major complexitat tècnica i poètica: vincles més densos, materials més personals, improvisacions on l\'error no paralitza, sinó que obre.', index: 0 },
      { sel: '.intro-p', html: 'El treball es focalitza en una recerca de llenguatge propi: entrenant mitjançant la improvisació dirigida, aprofundint l\'opinió personal i el llenguatge teatral. No es tracta de tècnica com a fi, sinó com a camí cap a la poètica.', index: 1 },
      { sel: '.intro-p', html: 'Els participants comencen a fer-se càrrec de la seva poètica personal i de les seves decisions d\'actuació. A reconèixer la seva imatge, la seva potència particular, i a portar la seva capacitat expressiva al màxim.', index: 2 },
      { sel: '.intro-p', html: 'Els grups barrejen trajectòries: actors de formació acadèmica, persones que porten anys en tallers, gent del teatre independent. <strong>Aquesta diversitat és part constitutiva del treball col·lectiu.</strong> Si estàs donant els teus primers passos a escena, pots veure el <a href="/principiantes/" style="color:var(--accent); text-decoration:underline; text-underline-offset:3px;">taller de principiants</a>.', index: 3 },
      /* intro-break */
      { sel: '.intro-break-text', html: 'És el moment en el qual<br>es comença a comprendre<br>i dominar les pròpies forces.' },
      /* Tags */
      { findText: '.intro-kw-tag', from: 'Improvisación avanzada', to: 'Improvisació avançada' },
      { findText: '.intro-kw-tag', from: 'Creación de escenas',    to: 'Creació d\'escenes' },
      { findText: '.intro-kw-tag', from: 'Poética personal',       to: 'Poètica personal' },
      { findText: '.intro-kw-tag', from: 'Adultos con experiencia', to: 'Adults amb experiència' },

      /* Escena section */
      { sel: '.escena-section .overline', html: 'L\'entrenament' },
      { sel: '.escena-h2', html: 'El treball<br>sobre l\'<span>escena.</span>' },
      { sel: '.escena-intro', html: 'Una trobada setmanal de tres hores. L\'eix no és la tècnica com a fi sinó com a camí: el cos disponible, l\'escolta activa, la ficció sostinguda. Es treballa sempre des de l\'acció, mai des de la idea prèvia.' },
      /* Items escena */
      { sel: '.escena-concept', html: 'Improvisació <br><span class="acc">dirigida</span>', index: 0 },
      { sel: '.escena-text', html: 'El treball no és lliure: té estructura, direcció i rigor. La improvisació és el territori on l\'actor entra en contacte real amb el que succeeix, sense xarxa, sense guió previ. El que ocorre a escena és el que importa.', index: 0 },
      { sel: '.escena-concept', html: 'Forces <br><span class="acc">en joc</span>', index: 1 },
      { sel: '.escena-text', html: 'Què mou un actor. Què el deté. Què el transforma. El treball sobre les forces a escena (el desig, l\'obstacle, el conflicte, el vincle) és el que dóna espessor a una escena i la distingeix de l\'exercici.', index: 1 },
      { sel: '.escena-concept', html: 'Poètica <br><span class="acc">personal</span>', index: 2 },
      { sel: '.escena-text', html: 'Cada actor té un univers propi: imatges, obsessions, ritmes, territoris que li pertanyen. El treball és descobrir-los, nomenar-los i començar a habitar-los des de l\'escena. Això és el que fa que un actor sigui inconfusible.', index: 2 },
      { sel: '.escena-concept', html: 'Creació <br><span class="acc">d\'escenes</span>', index: 3 },
      { sel: '.escena-text', html: 'De la improvisació al material propi. El grup treballa sobre escenes que es van construint, revisant i aprofundint al llarg de l\'any. Al tancament del cicle, aquell material es presenta en una mostra oberta i el cicle <em>La tirania del desig</em>.', index: 3 },

      /* Metodo section */
      { sel: '.metodo-section .overline', html: 'La metodologia' },
      { sel: '.metodo-headline', html: 'Tres eixos. <br><span class="acc">Un entrenament.</span>' },
      { sel: '.metodo-lead', html: 'Cada classe es construeix sobre tres pilars que es retroalimenten. No són fases separades: se superposen, es tensionen, s\'aprofundeixen junts. La improvisació mai és descans. L\'entrenament mai és rutina.' },
      { sel: '.metodo-concept', html: 'Entrenament col·lectiu', index: 0 },
      { sel: '.metodo-desc', html: 'Cada classe comença amb el cos: escalfament actoral, disponibilitat, presència, escolta de l\'espai i del grup. No és escalfament: és l\'inici real del treball. El cos és el primer instrument. A aquest nivell, es tracta d\'afinar-lo cada vegada més.', index: 0 },
      { sel: '.metodo-concept', html: 'Creació d\'escenes', index: 1 },
      { sel: '.metodo-desc', html: 'L\'eix central del treball. S\'improvisen escenes amb diferents estímuls i amb major complexitat que en el nivell inicial: vincles més densos, situacions més exigents, materials més personals. L\'error no paralitza: obre. Aquí l\'exigència és major perquè la disponibilitat també ho és.', index: 1 },
      { sel: '.metodo-concept', html: 'Poètica individual', index: 2 },
      { sel: '.metodo-desc', html: 'Al llarg del cicle es treballa sobre el material propi de cada actor: les seves imatges, les seves obsessions, el seu món. La reflexió compartida sobre el que sorgeix a escena permet que cada persona comenci a reconèixer i aprofundir en la seva pròpia poètica. Aquest és el treball més lent i més valuós.', index: 2 },

      /* Video section */
      { sel: '.video-section .overline', html: 'Cicle de teatre' },
      { sel: '.video-h2', html: 'La tirania<br>del<br>desig.' },
      { sel: '.video-p', html: 'Aquest espai proposa que els participants desenvolupin escenes pròpies i materials actorals per construir un cicle de funcions reals. Al llarg de l\'any investiguem situacions, vincles, imaginaris i conflictes fins a convertir-los en escenes vives capaces de sostenir-se davant el públic.', index: 0 },
      { sel: '.video-p', html: 'L\'objectiu és entrenar actuant, però també travessar el procés complet de creació: assaig, reescriptura, muntatge i funció. Ja hem presentat funcions en espais com Badabadoc, dins del cicle <em>La tirania del desig</em>, compartint materials creats a l\'entrenament amb públic real i programació teatral.', index: 1 },
      { sel: '.video-p', html: 'Direcció: <strong>Sebastián Mogordoy</strong> i <strong>Candelaria Sesín</strong><br>Espai La Mansió · Gràcia, Barcelona', index: 2 },

      /* Testimonios */
      { sel: '.testimonios-section .overline', html: 'El que diuen' },
      { sel: '.testimonios-h2', html: 'El que diuen<br>els que ja<br><span class="acc">hi eren.</span>' },

      /* Carousel */
      { sel: '.carousel-h2', html: 'Estem<br>en <span>moviment.</span>' },

      /* Info section */
      { sel: '.info-section .overline', html: 'Informació pràctica' },
      { findText: '.info-label', from: 'Nivel',       to: 'Nivell' },
      { findText: '.info-label', from: 'Formato',     to: 'Format' },
      { findText: '.info-label', from: 'Horarios',    to: 'Horaris' },
      { findText: '.info-label', from: 'Lugar',       to: 'Lloc' },
      { findText: '.info-label', from: 'Precio',      to: 'Preu' },
      { findText: '.info-label', from: 'Coordinación', to: 'Coordinació' },
      { sel: '.info-value', html: 'Taller de teatre amb experiència prèvia: actors professionals, estudiants avançats, persones que reprenen la formació actoral.', index: 0 },
      { sel: '.info-value', html: '<strong>Una vegada per setmana · 3 hores per trobada.</strong> Ritme anual amb mostra de fi de cicle.', index: 1 },
      { sel: '.info-value', html: '<strong>Dimecres · 19 a 22 h.</strong><br><span class="info-note">Sense vacants. Inscripció oberta per a setembre.</span>', index: 2 },
      { sel: '.info-value', html: '<strong>Espai La Mansió</strong> · Carrer de Roger de Flor, 253, Local 2 i 3 · Gràcia, Barcelona.<br>Metro: Verdaguer o Sagrada Família.', index: 3 },
      { sel: '.info-value', html: 'Consultar quotes mensuals. Primera classe <strong>sense cost.</strong>', index: 4 },
      { sel: '.info-value', html: 'Sebastián Mogordoy i Candelaria Sesín', index: 5 },

      /* Ubicación */
      { sel: '.ubicacion-section .overline', html: 'On trobar-nos' },
      { sel: '.ubicacion-h2', html: 'Gràcia,<br>Barcelona.' },

      /* FAQ */
      { sel: '.faq-section .overline', html: 'Preguntes freqüents' },
      { sel: '.faq-h2', html: 'El que<br>solen preguntar.' },
      { sel: '.faq-list .faq-item:nth-child(1) summary', html: 'Necessito experiència prèvia per entrar a Amb experiència? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(1) .faq-body', html: 'Sí. Aquest taller està pensat per a persones que ja han tingut contacte amb el teatre: un taller anterior, formació acadèmica, treball amb grups amateurs o professional. No cal un recorregut llarg, però sí haver trepitjat una escena i entendre de què va el treball actoral.' },
      { sel: '.faq-list .faq-item:nth-child(2) summary', html: 'Quina diferència hi ha entre Principiants i Amb experiència? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(2) .faq-body', html: 'A Principiants es construeixen les bases: el cos, el joc, la ficció des de zero. A Amb experiència el punt de partida és un altre. No s\'explica què és el teatre: es treballa dins d\'ell amb major exigència, densitat i complexitat. El nivell de disponibilitat requerit és major i el treball va cap a la poètica personal de cada actor.' },
      { sel: '.faq-list .faq-item:nth-child(3) summary', html: 'Quin tipus d\'escenes es treballen? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(3) .faq-body', html: 'Escenes improvisades a partir de diferents estímuls: situacions, vincles, imatges, estats. Al llarg de l\'any aquelles improvisacions es van convertint en material propi de cada actor. No es munten obres d\'autor: es construeix material des del treball a sala.' },
      { sel: '.faq-list .faq-item:nth-child(4) summary', html: 'Es treballa amb text i monòlegs? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(4) .faq-body', html: 'L\'eix és la improvisació dirigida, no el text memoritzat. El text pot aparèixer com estímul o territori de treball, però no s\'assagen parlaments ni es munten escenes d\'obres. Si t\'interessa el treball específic amb text dramàtic, això pertany al taller Cos al Text.' },
      { sel: '.faq-list .faq-item:nth-child(5) summary', html: 'Hi ha mostra o presentació al final de l\'any? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(5) .faq-body', html: 'Sí. Al tancament de cada cicle el grup crea i presenta una mostra. En aquest nivell el material tendeix a ser més elaborat: escenes construïdes, composicions pròpies, presentacions obertes al públic. El procés de creació és part central del treball de l\'any, i l\'objectiu final és poder fer funcions en un teatre, amb el nostre cicle anomenat <em>La tirania del desig</em>.' },
      { sel: '.faq-list .faq-item:nth-child(6) summary', html: 'Puc incorporar-me durant l\'any? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(6) .faq-body', html: 'Depèn del moment del cicle. En general es pot incorporar algú quan el grup no està en fase de creació avançada per a la mostra. Escriu-nos i t\'expliquem en quin punt estem i si té sentit que t\'incorporis ara o esperis a l\'inici del pròxim cicle.' },
      { sel: '.faq-list .faq-item:nth-child(7) summary', html: 'Quant duren les classes? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(7) .faq-body', html: 'Cada trobada dura 3 hores, una vegada per setmana. És el temps mínim perquè el treball tingui profunditat real: escalfar-se, improvisar, reflexionar i tancar el cicle de la classe.' },
      { sel: '.faq-list .faq-item:nth-child(8) summary', html: 'On es realitzen les classes? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(8) .faq-body', html: 'A l\'Espai La Mansió, Carrer de Roger de Flor 253, Local 2 i 3, al barri de Gràcia, Barcelona. Metro: Verdaguer (L5) o Sagrada Família (L2-L5).' },

      /* CTA final */
      { sel: '.cta-final-heading', html: 'Imaginar amb <br>el cos. <br><span class="acc">El cos com a territori.</span>' },
      { sel: '.cta-final-sub', html: 'Una primera classe sense cost. Sense compromís.<br>Només per veure si és el teu lloc.' },
      { sel: '.cta-nota', html: 'Incorporació per entrevista — Places limitades' },
    ],

    /* ══════════════════════════════════════════════════════
       AVANZADOS
    ══════════════════════════════════════════════════════ */
    '/avanzados/': [
      /* Hero */
      { sel: '.hero-tag',      html: 'Taller d\'escena · Text · Veu' },
      { sel: '.hero-title',    html: 'Cos<br>al text.' },
      { sel: '.hero-subtitle', html: 'Escenes, monòlegs i actuació des de la lògica viva de la situació.' },
      { sel: '.hero-tagline',  html: 'Entrenament per a actors i estudiants avançats que volen aprofundir el treball sobre la paraula, el conflicte, l\'escolta i la poètica escènica.' },
      { sel: '.hero-dir-label', html: 'Estudi de teatre' },
      { sel: '.hero-meta-item', html: '<strong>Barcelona · Gràcia</strong>', index: 0 },
      { sel: '.hero-meta-item', html: 'Espai La Mansió', index: 1 },
      { sel: '.hero-meta-item', html: 'Vacants limitades', index: 2 },

      /* Intro */
      { sel: '.intro-section .overline', html: 'La idea central' },
      { sel: '.intro-statement', html: 'Les paraules<br>surten d\'<br>un <span class="acc">cos.</span>' },
      { sel: '.intro-pullquote p', html: 'El text<br>no es recita.' },
      { sel: '.intro-cta-line span', html: 'Incorporació per entrevista' },
      /* Párrafos intro */
      { sel: '.intro-p', html: 'El text no és literatura. No es «diu» ni s\'«interpreta». <strong>Apareix des d\'un estat</strong>, des de forces en joc, des de la lògica viva de la situació. El que el personatge diu no és el que l\'actor fa: l\'actor actua amb el text, no el text.', index: 0 },
      { sel: '.intro-p', html: 'Aquest <strong>taller de teatre amb text</strong> treballa sobre escenes i monòlegs des de l\'actuació, no des de la lectura. El punt de partida és sempre la situació real: el vincle, el desig, la contradicció, el conflicte. La paraula arriba quan el cos ja és pres.', index: 1 },
      { sel: '.intro-p', html: 'Treballem ritme, respiració, musicalitat i projecció no com exercicis tècnics aïllats, sinó com a conseqüència directa de l\'estat actoral. La veu no és un instrument separat: és actuació. El treball sobre <strong>monòlegs, escenes teatrals i tècnica actoral</strong> succeeix en relació, no en el buit.', index: 2 },
      { sel: '.intro-p', html: 'Si véns d\'una altra escola de teatre, de la universitat, del teatre independent o d\'anys de treball escènic: hi ha alguna cosa específica que aquest taller pot donar a la teva pràctica. No és un taller per començar. És un taller per <strong>anar més lluny.</strong>', index: 3 },
      /* intro-break */
      { sel: '.intro-break-text', html: 'Cada frase té<br>un cos.<br>La veu també actua.' },
      /* Tags */
      { findText: '.intro-kw-tag', from: 'Escenas teatrales', to: 'Escenes teatrals' },
      { findText: '.intro-kw-tag', from: 'Monólogos',         to: 'Monòlegs' },
      { findText: '.intro-kw-tag', from: 'Voz y actuación',   to: 'Veu i actuació' },
      { findText: '.intro-kw-tag', from: 'Técnica actoral',   to: 'Tècnica actoral' },
      { findText: '.intro-kw-tag', from: 'Barcelona · Gracia', to: 'Barcelona · Gràcia' },

      /* Escena section */
      { sel: '.escena-section .overline', html: 'Entrenament' },
      { sel: '.escena-h2', html: 'Què<br><span>entrenim.</span>' },
      { sel: '.escena-intro', html: 'Cinc eixos que es treballen de forma integrada. No són mòduls separats: són dimensions d\'un mateix acte d\'actuar.' },
      /* Items escena */
      { sel: '.escena-concept', html: 'Escena', index: 0 },
      { sel: '.escena-text', html: 'Anàlisi de situació, vincles, accions i forces en joc. L\'escena com a unitat de treball, no com a resultat.', index: 0 },
      { sel: '.escena-concept', html: 'Text', index: 1 },
      { sel: '.escena-text', html: 'Comprensió del text des de l\'escena i no des del literari. La partitura com a territori d\'acció, no com a guió.', index: 1 },
      { sel: '.escena-concept', html: 'Veu', index: 2 },
      { sel: '.escena-text', html: 'Ritme, respiració, musicalitat i projecció expressiva des de l\'estat actoral. La veu com extensió del cos a escena.', index: 2 },
      { sel: '.escena-concept', html: 'Monòleg', index: 3 },
      { sel: '.escena-text', html: 'Construcció de presència, pensament viu i escolta interna. El monòleg com escena, no com recitació.', index: 3 },
      { sel: '.escena-concept', html: 'Poètica', index: 4 },
      { sel: '.escena-text', html: 'Recerca d\'una forma pròpia d\'actuar i dir. La interpretació teatral com a llenguatge personal, no com a imitació d\'un model.', index: 4 },

      /* Video section */
      { sel: '.video-section .overline', html: 'El treball en vídeo' },
      { sel: '.video-h2', html: 'Dir<br>des de<br>la <span class="acc">escena.</span>' },
      { sel: '.video-body', html: 'El treball sobre improvisació en escenes escrites: com el text s\'obre quan l\'actor l\'habita des de l\'interior de la situació i no des de fora, interpretant-lo. L\'actuació no il·lustrativa. El <strong>ritme com a força</strong>, l\'escolta com acció, la ressonància del conflicte real.', index: 0 },
      { sel: '.video-body', html: 'Una classe és un espai d\'investigació: es treballa sobre el material, s\'atura, es repeteix, es transforma. No hi ha performació. Hi ha <strong>procés tècnic i poètic al mateix temps.</strong>', index: 1 },
      { sel: '.video-coord', html: 'Coordinació: Sebastián Mogordoy' },

      /* Testimonios */
      { sel: '.testimonios-section .overline', html: 'El que diuen' },
      { sel: '.testimonios-h2', html: 'Els que ja<br>van treballar.' },

      /* Carousel */
      { sel: '.carousel-h2', html: 'En <span>moviment.</span>' },

      /* Info section */
      { sel: '.info-section .overline', html: 'Informació pràctica' },
      { sel: '.info-h2', html: 'Tot el <br>que necessites <br>saber.' },
      { sel: '.info-tagline', html: 'Incorporació per entrevista o experiència prèvia. Vacants molt limitades. Si t\'interessa, escriu-nos com abans millor.' },
      { findText: '.info-label', from: 'Nivel',         to: 'Nivell' },
      { findText: '.info-label', from: 'Modalidad',     to: 'Modalitat' },
      { findText: '.info-label', from: 'Formato',       to: 'Format' },
      { findText: '.info-label', from: 'Horarios',      to: 'Horaris' },
      { findText: '.info-label', from: 'Lugar',         to: 'Lloc' },
      { findText: '.info-label', from: 'Incorporación', to: 'Incorporació' },
      { findText: '.info-label', from: 'Precio',        to: 'Preu' },
      { findText: '.info-label', from: 'Coordinación',  to: 'Coordinació' },
      { sel: '.info-value', html: 'Avançat — actors, estudiants amb trajectòria escènica, formació actoral prèvia.', index: 0 },
      { sel: '.info-value', html: '<strong>Escenes i monòlegs.</strong> Treball sobre text dramàtic des de l\'actuació.', index: 1 },
      { sel: '.info-value', html: '<strong>Una vegada per setmana · 3 hores per trobada.</strong> Cicle anual amb mostra.', index: 2 },
      { sel: '.info-value', html: '<strong>Dilluns · 10 a 13 h</strong> o <strong>19 a 22 h</strong> · <strong>Dimarts · 19 a 22 h.</strong><br><span class="info-note">Inscripció oberta per a setembre.</span>', index: 3 },
      { sel: '.info-value', html: '<strong>Espai La Mansió</strong> · Carrer de Roger de Flor, 253, Local 2 i 3 · Gràcia, Barcelona.<br>Metro: Verdaguer o Sagrada Família.', index: 4 },
      { sel: '.info-value', html: 'Per entrevista o experiència prèvia. <strong>Vacants molt limitades.</strong>', index: 5 },
      { sel: '.info-value', html: 'Consultar quotes mensuals. <strong>Sense cost la primera entrevista.</strong>', index: 6 },
      { sel: '.info-value', html: 'Sebastián Mogordoy', index: 7 },

      /* Ubicación */
      { sel: '.ubicacion-section .overline', html: 'On trobar-nos' },
      { sel: '.ubicacion-h2', html: 'Gràcia,<br>Barcelona.' },

      /* FAQ */
      { sel: '.faq-section .overline', html: 'Preguntes freqüents' },
      { sel: '.faq-h2', html: 'Preguntes<br>freqüents.' },
      { sel: '.faq-list .faq-item:nth-child(1) summary', html: 'Necessito experiència prèvia per a aquest taller de teatre amb text? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(1) .faq-body', html: 'Sí. Aquest taller està pensat per a persones que ja tenen recorregut escènic: actors de formació acadèmica, estudiants avançats, persones amb experiència en altres tallers o en teatre independent. No és un espai per començar des de zero. Si estàs començant, pots veure el <a href="/principiantes/" style="color:var(--accent);">taller de principiants</a>.' },
      { sel: '.faq-list .faq-item:nth-child(2) summary', html: 'Es treballen monòlegs? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(2) .faq-body', html: 'Sí. El monòleg és una de les formes centrals del treball. No com exercici de memorització sinó com a construcció de presència, pensament viu i escolta interna. Treballem el monòleg com escena — amb un interlocutor real o imaginari, amb forces, amb estat actoral.' },
      { sel: '.faq-list .faq-item:nth-child(3) summary', html: 'Puc portar els meus propis textos o escenes? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(3) .faq-body', html: 'Sí. Pots portar textos que t\'interessin — clàssics, contemporanis, fragments, materials propis — i treballar-los des de la lògica de la situació i de les forces en joc. El criteri no és el gènere ni l\'època sinó les possibilitats de treball actoral que ofereix.' },
      { sel: '.faq-list .faq-item:nth-child(4) summary', html: 'Quin tipus d\'escenes es treballen? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(4) .faq-body', html: 'Escenes de dues o més persones, monòlegs, fragments d\'obres, material de creació pròpia. El criteri no és el gènere: són situacions amb conflicte real, vincles, desig, contradicció. No treballem escenes de manera il·lustrativa. El treball és sempre des de dins de la situació.' },
      { sel: '.faq-list .faq-item:nth-child(5) summary', html: 'Es treballa tècnica vocal? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(5) .faq-body', html: 'Sí, però la veu no es treballa com un aparell separat del cos. Treballem ritme, respiració, musicalitat, projecció i ressonància en relació directa amb l\'estat actoral i la lògica de l\'escena. La veu és també actuació.' },
      { sel: '.faq-list .faq-item:nth-child(6) summary', html: 'Hi ha mostra o funció al final de l\'any? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(6) .faq-body', html: 'Sí. Al tancament de cada cicle el grup presenta una mostra de treball. En aquest taller el material sol ser d\'una major elaboració: escenes acabades, monòlegs treballats, composicions pròpies. El procés de creació és part integral de l\'any, no un apèndix final.' },
      { sel: '.faq-list .faq-item:nth-child(7) summary', html: 'És un taller d\'anàlisi de text? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(7) .faq-body', html: 'No. El text no s\'estudia com a literatura. Es treballa com partitura d\'acció, com territori de forces, com material viu. L\'anàlisi — si n\'hi ha — sempre està al servei del fer: d\'estar a escena, d\'actuar. No és un seminari, és un laboratori.' },
      { sel: '.faq-list .faq-item:nth-child(8) summary', html: 'Puc incorporar-me durant l\'any? <span class="faq-arrow" aria-hidden="true">+</span>' },
      { sel: '.faq-list .faq-item:nth-child(8) .faq-body', html: 'Depèn del moment del cicle i de la teva experiència prèvia. La incorporació és per entrevista. Escriu-nos i avaluem junts si el moment i el nivell de treball són els adequats perquè t\'incorporis ara o en el pròxim cicle.' },

      /* CTA final */
      { sel: '.cta-final-heading', html: 'Habitar <br><span class="acc">les paraules.</span>' },
      { sel: '.cta-final-sub', html: 'Incorporació per entrevista o experiència prèvia.<br>Escriu-nos i ho parlem.' },
      { sel: '.cta-nota', html: 'Incorporació per entrevista — Places limitades' },
    ],

    /* ══════════════════════════════════════════════════════
       QUIÉNES SOMOS
    ══════════════════════════════════════════════════════ */
    '/quienes-somos/': [
      /* Hero */
      { sel: '.hero-overline', html: 'Tallers de Teatre a Barcelona · Des del 2010' },
      { sel: '.hero-tagline',  html: 'Quinze anys investigant l\'actuació,<br>el cos, la improvisació<br>i l\'escena.' },
      { sel: '.hero-cta-row a.btn-primary:not(.btn-wa)', html: 'Veure tallers <span class="arrow">→</span>' },

      /* Manifiesto */
      { sel: '.manifiesto-section .overline', html: 'La nostra mirada' },
      { sel: '.manifiesto-left h2', html: 'El teatre que ens interessa fractura el real.<span class="acc"> Altera el quotidià.</span>' },
      { sel: '.manifiesto-p', html: 'Proposa intensitats poètiques que ens fan alliberar la representació «del personatge que som a la vida» per llençar-nos en un no saber que ens obre a altres possibilitats d\'existència.' },

      /* Editorial full */
      { sel: '.editorial-full-text h2', html: 'Tenim <br><span class="acc">el teatre.</span>' },
      { sel: '.editorial-full-text p', html: 'En un món on la realitat ens empeny a sobreviure enmig de diferents guerres, el teatre continua sent la nostra trinxera, el nostre refugi, lloc d\'expressió, experimentació i investigació, del humà i del procés creatiu.', index: 0 },
      { sel: '.editorial-full-text p', html: 'Quan la vida es posa una mica avorrida o massa agressiva, el teatre ens proposa intensitats poètiques i expressives que ens fan alliberar la representació «del personatge que som a la vida» per llençar-nos en un no saber que ens obre a altres possibilitats d\'existència. Ens convida a ser tot allò que no som.', index: 1 },

      /* Sebastián */
      { sel: '#sebastian .persona-role', html: 'Actor · Director · Pedagog' },
      { sel: '#sebastian .pullquote p',  html: 'L\'actuació neix de l\'acte.' },
      { sel: '#sebastian .persona-bio p', html: 'Actor, director i pedagog teatral argentí establert a Barcelona. Format al costat de <strong>Ricardo Bartís</strong> al Sportivo Teatral de Buenos Aires, referència ineludible del teatre argentí contemporani. Els seus quinze anys de docència a Buenos Aires i Barcelona han construït un mètode de treball reconegut per la comunitat teatral.', index: 0 },
      { sel: '#sebastian .persona-bio p', html: 'Actualment forma part de l\'elenc protagonista d\'<em>El Fill</em>, de Jon Fosse, dirigida per <strong>Ferran Utzet</strong>, estrenada al <strong>Teatre Lliure</strong> de Barcelona. Va protagonitzar <em>Eufòria i Desassossec</em>, de Sergio Boris, amb temporada al Festival Temporada Alta 2024, la <strong>Sala Beckett</strong> i els <strong>Teatros del Canal</strong> de Madrid. Al cinema, va formar part de la pel·lícula <em>El profesor</em>, producció de Netflix.', index: 1 },
      { sel: '#sebastian .persona-bio p', html: 'El seu treball actoral ha estat descrit com «d\'un altre planeta» (elDiario.es). Dirigeix els tallers de Principiants, Amb experiència i Cos al text a Gràcia, Barcelona.', index: 2 },
      { sel: '#sebastian .cv-accordion summary', html: 'Llegir el CV complet' },

      /* Candelaria */
      { sel: '#candelaria .persona-role', html: 'Actriu · Directora · Docent' },
      { sel: '#candelaria .pullquote p',  html: 'El teatre com espai de construcció col·lectiva.' },
      { sel: '#candelaria .persona-bio p', html: 'Actriu, directora, gestora cultural i docent de teatre. Formada a Buenos Aires, on va desenvolupar una trajectòria intensa al teatre independent com creadora i pedagoga. Establerta a Barcelona des del 2020, on codirigeix els tallers amb Sebastián Mogordoy.', index: 0 },
      { sel: '#candelaria .persona-bio p', html: 'Va coordinar les activitats del teatre <strong>Silencio de Negras</strong> i va crear amb diversos grups diferents cicles de teatre independent: <em>Enredadera</em> a la llibreria La Libre, <em>Derrapé</em> a Sala de Màquines, <em>Circuito Lumínico</em> i <em>Lo que dura una canción</em>. Docent de teatre a Buenos Aires i Barcelona des de fa més d\'una dècada.', index: 1 },
      { sel: '#candelaria .persona-bio p', html: 'La seva mirada pedagògica posa el focus en l\'<strong>escolta grupal</strong>, l\'espai com a territori de creació, i el desenvolupament de l\'expressivitat individual dins del col·lectiu. Amb ella el treball té cos, humor i una presència particular que fa del grup una banda.', index: 2 },
      { sel: '#candelaria .cv-accordion summary', html: 'Llegir tot el CV complet' },

      /* Asistentes */
      { sel: '.asistentes-overline', html: 'Assistents d\'entrenament' },
      { sel: '.asistentes-h2', html: 'Acompanyen<br>el procés.' },
      { sel: '.asistente-card:first-child .asistente-role', html: 'Actriu · Ballarina · Docent' },
      { sel: '.asistente-card:last-child .asistente-role',  html: 'Actor · Docent' },
      { sel: '.asistente-summary', html: 'Veure CV <span class="asistente-arrow">▾</span>' },

      /* Comunidad / Espacio */
      { sel: '.comunidad-section .overline, .banda-header .overline', html: 'Des del 2010' },
      { sel: '.banda-title', html: 'La banda <br>dels <br><span class="acc">actors.</span>' },
      { sel: '.banda-subtitle', html: 'aquella banda mil·lenària' },
      { sel: '.banda-p', html: 'Vam começar l\'any 2010 amb un petit grup al Camarín de las Musas, a Buenos Aires. <strong>Avui continuem fent i pensant el teatre que ens agrada des de Barcelona.</strong>', index: 0 },
      { sel: '.banda-p', html: 'Més que una escola, construïm un nosaltres d\'actors, estudiants i persones que busquen una altra intensitat en la trobada amb l\'escena. Barcelona és una ciutat vibrant, plena de persones de diverses edats, costums i nacionalitats. Cultivem un espai de creació, trobada real, expressió i construcció social.', index: 1 },
      { findText: '.espacio-dato-label', from: 'Dónde',  to: 'On' },
      { findText: '.espacio-dato-label', from: 'Clases', to: 'Classes' },

      /* Galería */
      { sel: '.galeria-section .overline', html: 'L\'univers' },
      { sel: '.galeria-titulo', html: 'El nostre univers <br><span class="acc">en imatges.</span>' },
      { sel: '.galeria-sub', html: '15 anys de classes, entrenaments, funcions i processos.' },

      /* CTA final */
      { sel: '.cta-final-heading', html: 'Ser el <br>poema. <br><span class="acc">Imaginar amb el cos.</span>' },
      { sel: '.cta-final-sub', html: 'Un espai per actuar,<br>pensar, imaginar<br>i estar amb altres.' },
    ],

    /* ══════════════════════════════════════════════════════
       CONTACTO
    ══════════════════════════════════════════════════════ */
    '/contacto/': [
      { sel: '.contact-hero-title',      html: 'Escriu-nos.' },
      { sel: 'label[for="nombre"]',      html: 'Nom' },
      { sel: 'label[for="email"]',       html: 'Correu electrònic' },
      { sel: 'label[for="nivel"]',       html: 'Nivell d\'interès' },
      { sel: 'label[for="mensaje"]',     html: 'Missatge' },
      { sel: 'input[name="nombre"]',     attr: 'placeholder', val: 'El teu nom' },
      { sel: 'input[name="email"]',      attr: 'placeholder', val: 'correu@exemple.com' },
      { sel: 'textarea[name="mensaje"]', attr: 'placeholder', val: 'Explica\'ns el que vulguis...' },
      { sel: 'button[type="submit"]',    html: 'Enviar missatge →' },
      { sel: 'option[value="principiantes"]', html: 'Principiants' },
      { sel: 'option[value="intermedios"]',   html: 'Amb experiència' },
      { sel: 'option[value="avanzados"]',     html: 'Cos al text' },
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
