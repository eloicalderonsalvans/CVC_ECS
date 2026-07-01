/* ===========================
   CV - Eloi Calderon Salvans
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===========================
    // I18N
    // ===========================
    // Gestiona los textos traducidos para español, catalán e inglés.

    // Texto reutilizable que aparece igual en todos los idiomas
    const SHARED = {
        skills: {
            frontendHtml: 'HTML5 & CSS3',
            frontendJs: 'JavaScript',
            frontendBlade: 'Blade Templates',
            backendPhp: 'PHP & Laravel',
            backendMysql: 'MySQL',
            backendApi: 'APIs REST',
            mobileKotlin: 'Kotlin',
            mobileCompose: 'Jetpack Compose',
            mobileAndroid: 'Android SDK',
            toolsGit: 'Git & GitHub',
            toolsUnity: 'Unity',
            toolsIde: 'VS Code / Android Studio',
        },
    };

    // Contenido traducido para cada idioma del portfolio
    const translations = {
        es: {
            meta: {
                title: 'Eloi Calderon Salvans | CV - Desarrollador Web & Móvil',
                description: 'Curriculum Vitae de Eloi Calderon Salvans - Desarrollador Web & Aplicaciones Móviles',
            },
            aria: {
                openMenu: 'Abrir menú',
                viewGithub: 'Ver en GitHub',
                openExternal: 'Abrir enlace externo',
            },
            nav: {
                about: 'Sobre mí', skills: 'Habilidades', education: 'Formación',
                projects: 'Proyectos', contact: 'Contacto', languageLabel: 'Idioma', cta: 'Hablemos',
            },
            hero: {
                available: 'Disponible para trabajar', greeting: 'Hola, soy',
                projects: 'Ver Proyectos', contact: 'Contactar', scroll: 'Desplázate',
                typed: [
                    'Desarrollador Web Full Stack',
                    'Desarrollador de Apps Móviles',
                    'Apasionado por Laravel & Kotlin',
                ],
            },
            about: {
                title: 'Sobre mí',
                intro: 'Soy un desarrollador con formación en <span class="highlight">DAW</span> (Desarrollo de Aplicaciones Web) y <span class="highlight">DAM</span> (Desarrollo de Aplicaciones Multiplataforma), apasionado por crear soluciones digitales modernas y funcionales.',
                description: 'Mi experiencia abarca desde el desarrollo web con frameworks como Laravel hasta aplicaciones móviles con Kotlin y Jetpack Compose. Disfruto especialmente el desarrollo web, pero también me gusta crear aplicaciones y experimentar con videojuegos usando Unity.',
                nameLabel: 'Nombre', locationLabel: 'Ubicación',
                locationValue: 'Girona, Catalunya, España',
                trainingLabel: 'Formación',
                trainingValue: 'CFGM Sistemas Microinformáticos y Redes, CFGS DAW & DAM',
                photoPlaceholder: 'Tu foto aqui',
            },
            skills: {
                title: 'Habilidades', frontend: 'Frontend', backend: 'Backend',
                mobile: 'Móvil', tools: 'Herramientas',
                frontendHtmlDesc: 'Lenguajes para estructurar contenido web y aplicar estilos visuales y responsivos en páginas.',
                frontendJsDesc: 'Lenguaje para añadir interactividad, animaciones y comportamiento dinámico en la web.',
                frontendBladeDesc: 'Motor de plantillas de Laravel para generar vistas HTML dinámicas y reutilizables.',
                backendPhpDesc: 'Lenguaje y framework para implementar la lógica de servidor, rutas y gestión de datos.',
                backendMysqlDesc: 'Sistema de bases de datos relacional para almacenar y consultar información de aplicaciones.',
                backendApiDesc: 'Modelo de servicios web para comunicar frontend y backend mediante solicitudes HTTP.',
                mobileKotlinDesc: 'Lenguaje moderno para desarrollar aplicaciones Android con sintaxis clara.',
                mobileComposeDesc: 'Biblioteca declarativa para construir interfaces de usuario en Android.',
                mobileAndroidDesc: 'Conjunto de herramientas y APIs para acceder a funcionalidades nativas en apps móviles.',
                toolsGitDesc: 'Sistema y plataforma para controlar versiones de código y colaborar en proyectos.',
                toolsUnityDesc: 'Motor para crear prototipos y experiencias interactivas en videojuegos y simulaciones.',
                toolsIdeDesc: 'Editores para escribir, depurar y probar código web y aplicaciones móviles.',
            },
            education: {
                title: 'Formación',
                place: 'Institut Rafael Campalans — Catalunya',
                cfgmTitle: 'CFGM Sistemas Microinformáticos y Redes',
                cfgmDesc: 'Formación en redes, hardware y soporte técnico para instalar y mantener equipos y servicios informáticos.',
                damTitle: 'CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)',
                damDesc: 'Desarrollo de aplicaciones móviles con Kotlin y Jetpack Compose, bases de datos, programación orientada a objetos y desarrollo multiplataforma.',
                dawTitle: 'CFGS Desarrollo de Aplicaciones Web (DAW)',
                dawDesc: 'Desarrollo web Full Stack con PHP, Laravel, JavaScript, HTML5, CSS3, MySQL. Diseño de interfaces, patrones MVC, APIs REST y despliegue de aplicaciones.',
            },
            projects: {
                title: 'Proyectos Destacados', featured: 'Proyecto Destacado',
                project1Title: 'Fitxaring',
                project1Desc: 'Fitxaring es un gestor de personal desarrollado con el framework <strong>Laravel</strong>. Incluye sistema de templates con Blade, gestión de rutas, controladores y modelos siguiendo el patrón <strong>MVC</strong>. Base de datos MySQL con migraciones y seeders.',
                project2Title: 'Kanban',
                apiRest: 'API REST',
                todo: 'Por hacer', uiDesign: 'Diseñar UI',
                inProgress: 'En progreso', authLogin: 'Inicio de sesión', done: 'Hecho', database: 'Base de datos',
                project2Desc: 'Tablero <strong>Kanban</strong> interactivo desarrollado con Laravel y Blade. Permite gestionar tareas con funcionalidad <strong>drag & drop</strong>, organizar proyectos en columnas y hacer seguimiento del progreso del trabajo en equipo.',
                more: 'Ver más proyectos en GitHub',
            },
            contact: {
                title: 'Contacto', overline: '¿Siguiente paso?', heading: '¿Hablamos?',
                description: 'Estoy abierto a nuevas oportunidades profesionales. Si tienes un proyecto interesante o una oferta, no dudes en contactarme.',
                cta: 'Envíame un email',
                downloadCv: 'Descargar CV',
                downloadCvAria: 'Descargar currículum en PDF',
            },
            footer: {
                text: 'Diseñado y desarrollado por Eloi Calderon Salvans',
            },
        },

        ca: {
            meta: {
                title: 'Eloi Calderon Salvans | CV - Desenvolupador Web & Mòbil',
                description: 'Currículum vitae d\'Eloi Calderon Salvans - Desenvolupador Web i Aplicacions Mòbils',
            },
            aria: {
                openMenu: 'Obrir menú',
                viewGithub: 'Veure a GitHub',
                openExternal: 'Obrir enllaç extern',
            },
            nav: {
                about: 'Sobre mi', skills: 'Habilitats', education: 'Formació',
                projects: 'Projectes', contact: 'Contacte', languageLabel: 'Idioma', cta: 'Parlem',
            },
            hero: {
                available: 'Disponible per treballar', greeting: 'Hola, soc',
                projects: 'Veure projectes', contact: 'Contactar', scroll: "Desplaça't",
                typed: [
                    'Desenvolupador Web Full Stack',
                    'Desenvolupador d\'Apps Mòbils',
                    'Apassionat per Laravel i Kotlin',
                ],
            },
            about: {
                title: 'Sobre mi',
                intro: "Soc un desenvolupador amb formació en <span class=\"highlight\">DAW</span> (Desenvolupament d'Aplicacions Web) i <span class=\"highlight\">DAM</span> (Desenvolupament d'Aplicacions Multiplataforma), apassionat per crear solucions digitals modernes i funcionals.",
                description: "La meva experiència abasta des del desenvolupament web amb frameworks com Laravel fins a aplicacions mòbils amb Kotlin i Jetpack Compose. Gaudeixo especialment del desenvolupament web, però també m'agrada crear aplicacions i explorar videojocs amb Unity.",
                nameLabel: 'Nom', locationLabel: 'Ubicació',
                locationValue: 'Girona, Catalunya, Espanya',
                trainingLabel: 'Formació',
                trainingValue: 'CFGM Sistemes Informàtics, CFGS DAW i DAM',
                photoPlaceholder: 'La teva foto aquí',
            },
            skills: {
                title: 'Habilitats', frontend: 'Frontend', backend: 'Backend',
                mobile: 'Mòbil', tools: 'Eines',
                frontendHtmlDesc: 'Llenguatges per estructurar contingut web i aplicar estils visuals i responsius a pàgines.',
                frontendJsDesc: 'Llenguatge per afegir interactivitat, animacions i comportament dinàmic a la web.',
                frontendBladeDesc: 'Motor de plantilles de Laravel per generar vistes HTML dinàmiques i reutilitzables.',
                backendPhpDesc: 'Llenguatge i framework per implementar la lògica de servidor, rutes i gestió de dades.',
                backendMysqlDesc: "Sistema de bases de dades relacional per emmagatzemar i consultar informació d'aplicacions.",
                backendApiDesc: 'Model de serveis web per comunicar frontend i backend mitjançant sol·licituds HTTP.',
                mobileKotlinDesc: 'Llenguatge modern per desenvolupar aplicacions Android amb sintaxi clara.',
                mobileComposeDesc: "Biblioteca declarativa per construir interfícies d'usuari a Android.",
                mobileAndroidDesc: "Conjunt d'eines i APIs per accedir a funcionalitats natives en apps mòbils.",
                toolsGitDesc: 'Sistema i plataforma per controlar versions de codi i col·laborar en projectes.',
                toolsUnityDesc: 'Motor per crear prototips i experiències interactives en videojocs i simulacions.',
                toolsIdeDesc: 'Editors per escriure, depurar i provar codi web i aplicacions mòbils.',
            },
            education: {
                title: 'Formació',
                place: 'Institut Rafael Campalans — Catalunya',
                cfgmTitle: 'CFGM Sistemes Microinformàtics i Xarxes',
                cfgmDesc: 'Formació en xarxes, hardware i suport tècnic per instal·lar i mantenir equips i serveis informàtics.',
                damTitle: 'CFGS Desenvolupament d\'Aplicacions Multiplataforma (DAM)',
                damDesc: "Desenvolupament d'aplicacions mòbils amb Kotlin i Jetpack Compose, bases de dades, programació orientada a objectes i desenvolupament multiplataforma.",
                dawTitle: "CFGS Desenvolupament d'Aplicacions Web (DAW)",
                dawDesc: "Desenvolupament web Full Stack amb PHP, Laravel, JavaScript, HTML5, CSS3, MySQL. Disseny d'interfícies, patrons MVC, APIs REST i desplegament d'aplicacions.",
            },
            projects: {
                title: 'Projectes destacats', featured: 'Projecte destacat',
                project1Title: 'Fitxaring',
                project1Desc: "Fitxaring és un gestor de personal desenvolupat amb el framework <strong>Laravel</strong>. Inclou sistema de plantilles amb Blade, gestió de rutes, controladors i models seguint el patró <strong>MVC</strong>. Base de dades MySQL amb migracions i seeders.",
                project2Title: 'Kanban',
                apiRest: 'API REST',
                todo: 'Per fer', uiDesign: 'Dissenyar UI',
                inProgress: 'En progrés', authLogin: 'Inici de sessió', done: 'Fet', database: 'Base de dades',
                project2Desc: 'Tauler <strong>Kanban</strong> interactiu desenvolupat amb Laravel i Blade. Permet gestionar tasques amb funcionalitat <strong>drag & drop</strong>, organitzar projectes en columnes i fer seguiment del progrés del treball en equip.',
                more: 'Veure més projectes a GitHub',
            },
            contact: {
                title: 'Contacte', overline: 'Següent pas?', heading: 'Parlem?',
                description: "Estic obert a noves oportunitats professionals. Si tens un projecte interessant o una oferta, no dubtis a contactar-me.",
                cta: "Envia'm un email",
                downloadCv: 'Descarregar CV',
                downloadCvAria: 'Descarregar currículum en PDF',
            },
            footer: {
                text: 'Dissenyat i desenvolupat per Eloi Calderon Salvans',
            },
        },

        en: {
            meta: {
                title: 'Eloi Calderon Salvans | CV - Web & Mobile Developer',
                description: 'Curriculum Vitae of Eloi Calderon Salvans - Web & Mobile Application Developer',
            },
            aria: {
                openMenu: 'Open menu',
                viewGithub: 'View on GitHub',
                openExternal: 'Open external link',
            },
            nav: {
                about: 'About', skills: 'Skills', education: 'Education',
                projects: 'Projects', contact: 'Contact', languageLabel: 'Language', cta: "Let's talk",
            },
            hero: {
                available: 'Available for work', greeting: "Hi, I'm",
                projects: 'View Projects', contact: 'Contact', scroll: 'Scroll Down',
                typed: [
                    'Full Stack Web Developer',
                    'Mobile App Developer',
                    'Passionate about Laravel & Kotlin',
                ],
            },
            about: {
                title: 'About me',
                intro: 'I\'m a developer with training in <span class="highlight">DAW</span> (Web Application Development) and <span class="highlight">DAM</span> (Multiplatform Application Development), passionate about creating modern and functional digital solutions.',
                description: "My experience ranges from web development with frameworks like Laravel to mobile applications with Kotlin and Jetpack Compose. I especially enjoy web development, but I also like building apps and exploring game development with Unity.",
                nameLabel: 'Name', locationLabel: 'Location',
                locationValue: 'Girona, Catalonia, Spain',
                trainingLabel: 'Education',
                trainingValue: 'Vocational training in Computer Systems and Networks, DAW & DAM',
                photoPlaceholder: 'Your photo here',
            },
            skills: {
                title: 'Skills', frontend: 'Frontend', backend: 'Backend',
                mobile: 'Mobile', tools: 'Tools',
                frontendHtmlDesc: 'Languages to structure web content and apply visual, responsive styling across pages.',
                frontendJsDesc: 'Language to add interactivity, animations and dynamic behavior to web interfaces.',
                frontendBladeDesc: 'Laravel template engine for generating dynamic, reusable HTML views.',
                backendPhpDesc: 'Language and framework to implement server logic, routing and data management.',
                backendMysqlDesc: 'Relational database system to store and query application information.',
                backendApiDesc: 'Web service pattern to connect frontend and backend via HTTP requests.',
                mobileKotlinDesc: 'Modern language for building Android applications with clear syntax.',
                mobileComposeDesc: 'Declarative library for constructing user interfaces on Android.',
                mobileAndroidDesc: 'Toolset and APIs to access native features in mobile applications.',
                toolsGitDesc: 'System and platform to manage code versions and collaborate on projects.',
                toolsUnityDesc: 'Engine for prototyping and interactive experiences in games and simulations.',
                toolsIdeDesc: 'Editors to write, debug and test web code and mobile applications.',
            },
            education: {
                title: 'Education',
                place: 'Institut Rafael Campalans — Catalonia',
                cfgmTitle: 'Vocational Training in Computer Systems and Networks',
                cfgmDesc: 'Training in networks, hardware and technical support to install and maintain computer equipment and services.',
                damTitle: 'Vocational Training in Multiplatform Application Development (DAM)',
                damDesc: 'Mobile application development with Kotlin and Jetpack Compose, databases, object-oriented programming and multiplatform development.',
                dawTitle: 'Vocational Training in Web Application Development (DAW)',
                dawDesc: 'Full Stack web development with PHP, Laravel, JavaScript, HTML5, CSS3, MySQL. Interface design, MVC patterns, REST APIs and application deployment.',
            },
            projects: {
                title: 'Featured Projects', featured: 'Featured Project',
                project1Title: 'Fitxaring',
                project1Desc: 'Fitxaring is a personnel management system developed with the <strong>Laravel</strong> framework. It includes a Blade template system, route management, controllers, and models following the <strong>MVC</strong> pattern. MySQL database with migrations and seeders.',
                project2Title: 'Kanban',
                apiRest: 'REST API',
                todo: 'To Do', uiDesign: 'Design UI',
                inProgress: 'In Progress', authLogin: 'Login', done: 'Done', database: 'Database',
                project2Desc: 'Interactive <strong>Kanban</strong> board developed with Laravel and Blade. It allows managing tasks with <strong>drag & drop</strong> functionality, organizing projects into columns and tracking team progress.',
                more: 'See more projects on GitHub',
            },
            contact: {
                title: 'Contact', overline: 'Next step?', heading: 'Shall we talk?',
                description: "I'm open to new professional opportunities. If you have an interesting project or an offer, feel free to get in touch.",
                cta: 'Send me an email',
                downloadCv: 'Download CV',
                downloadCvAria: 'Download curriculum in PDF',
            },
            footer: {
                text: 'Designed & developed by Eloi Calderon Salvans',
            },
        },
    };

    // Mezcla los textos compartidos en cada idioma para no repetirlos
    Object.values(translations).forEach(lang => {
        Object.entries(SHARED).forEach(([section, keys]) => {
            lang[section] = { ...keys, ...lang[section] };
        });
    });

    // Busca un texto usando una ruta tipo "nav.about" dentro del objeto de traducciones.
    // Sirve para recuperar el valor correcto según el idioma activo.
    function t(key, lang) {
        return key.split('.').reduce((obj, k) => obj?.[k], translations[lang] ?? translations.es) ?? key;
    }

    // Elementos del DOM que se van a actualizar dinámicamente
    const languageSelect = document.getElementById('languageSelect');
    const typedTextEl = document.getElementById('typedText');
    let currentLang = localStorage.getItem('preferred-language') ?? 'es';
    let typeTimeoutId = null;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingInitialized = false;

    // Devuelve las frases que se muestran en el hero según el idioma activo
    function getHeroPhrases(lang = currentLang) {
        return translations[lang]?.hero?.typed ?? translations.es.hero.typed;
    }

    // Cambia el idioma de la página y actualiza todos los textos traducibles.
    // También reinicia el efecto de escritura del hero y guarda la preferencia en localStorage.
    function applyTranslations(lang) {
        currentLang = String(lang ?? 'es').toLowerCase();
        if (!translations[currentLang]) currentLang = 'es';
        document.documentElement.lang = currentLang;
        document.title = t('meta.title', currentLang);

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.content = t('meta.description', currentLang);

        document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => {
            const key = el.dataset.i18n ?? el.dataset.i18nHtml;
            const value = t(key, currentLang);
            if (el.dataset.i18nHtml) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            el.setAttribute('aria-label', t(el.dataset.i18nAria, currentLang));
        });

        if (languageSelect) {
            languageSelect.value = currentLang;
            languageSelect.setAttribute('aria-label', t('nav.languageLabel', currentLang));
        }

        localStorage.setItem('preferred-language', currentLang);
        restartTypeEffect();
    }

    // Reinicia el efecto de escritura del texto del hero
    function restartTypeEffect() {
        if (!typedTextEl) return;
        if (typeTimeoutId) clearTimeout(typeTimeoutId);
        phraseIndex = 0;
        charIndex = 0;
        isDeleting = false;
        const phrases = getHeroPhrases(currentLang);
        typedTextEl.textContent = phrases[0] ?? '';
        const delay = typingInitialized ? 300 : 1500;
        typingInitialized = true;
        typeTimeoutId = setTimeout(typeEffect, delay);
    }

    // Simula el efecto de escribir y borrar texto letra a letra
    function typeEffect() {
        const phrases = getHeroPhrases(currentLang);
        const phrase = phrases[phraseIndex] ?? phrases[0] ?? '';
        typedTextEl.textContent = phrase.substring(0, charIndex + (isDeleting ? -1 : 1));
        charIndex += isDeleting ? -1 : 1;

        let delay = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === phrase.length) {
            isDeleting = true;
            delay = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 500;
        }

        typeTimeoutId = setTimeout(typeEffect, delay);
    }

    if (languageSelect) {
        languageSelect.addEventListener('change', e => applyTranslations(e.target.value));
    }

    applyTranslations(currentLang);

    // Actualiza el atributo aria-label del enlace de descarga del CV según el idioma activo
    const cvDownloadLink = document.getElementById('download-cv');
    if (cvDownloadLink) {
        cvDownloadLink.setAttribute('aria-label', t('contact.downloadCvAria', currentLang));
        const cvTextSpan = cvDownloadLink.querySelector('[data-i18n], [data-i18n-html]');
        if (cvTextSpan) {
            const spanKey = cvTextSpan.dataset.i18n ?? cvTextSpan.dataset.i18nHtml;
            const spanValue = t(spanKey || 'contact.downloadCv', currentLang);
            if (cvTextSpan.dataset.i18nHtml) cvTextSpan.innerHTML = spanValue; else cvTextSpan.textContent = spanValue;
        }
    }

    // ===========================
    // PRELOADER: muestra una pantalla de carga inicial
    // ===========================
    // Simula el progreso de carga y oculta el preloader cuando termina.
    const preloader = document.getElementById('preloader');
    const preloaderProgress = document.getElementById('preloaderProgress');

    document.body.style.overflow = 'hidden';

    let progress = 0;
    const interval = setInterval(() => {
        progress = Math.min(progress + Math.random() * 30, 100);
        preloaderProgress.style.width = progress + '%';

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                document.body.style.overflow = '';
            }, 500);
        }
    }, 200);

    // ===========================
    // BARRA DE PROGRESO AL HACER SCROLL
    // ===========================
    // Actualiza la barra superior según el porcentaje de scroll del usuario.
    const scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const scrolled = document.documentElement.scrollTop /
            (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }, { passive: true });

    // ===========================
    // NAVBAR Y MENÚ MÓVIL
    // ===========================
    // Controla el comportamiento de la barra superior y del menú hamburguesa en móvil.
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const [line1, line2, line3] = navToggle.querySelectorAll('.hamburger-line');
    let isMenuOpen = false;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('active', isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';

        line1.style.transform = isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
        line2.style.opacity = isMenuOpen ? '0' : '';
        line3.style.transform = isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
    }

    navToggle.addEventListener('click', toggleMenu);
    document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', toggleMenu));

    // ===========================
    // SCROLL SUAVE ENTRE SECCIONES
    // ===========================
    // Hace que los enlaces internos se desplacen suavemente a la sección correspondiente.
    document.querySelectorAll('a[href^="#"]:not([data-download-link])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - 80,
                behavior: 'smooth',
            });
        });
    });

    // ===========================
    // EFECTO DE TYPING (se activa al cambiar de idioma)
    // ===========================

    // ===========================
    // EFECTO PARALLAX DEL HERO
    // ===========================
    const hero = document.getElementById('hero');
    const glow1 = document.querySelector('.hero-glow-1');
    const glow2 = document.querySelector('.hero-glow-2');

    if (hero && window.innerWidth > 768) {
        hero.addEventListener('mousemove', ({ clientX, clientY }) => {
            const x = clientX / window.innerWidth - 0.5;
            const y = clientY / window.innerHeight - 0.5;
            glow1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
            glow2.style.transform = `translate(${x * -50}px, ${y * -50}px)`;
        });
    }

    // ===========================
    // ANIMACIONES AL ENTRAR EN PANTALLA
    // ===========================
    // Activa la clase de aparición cuando los elementos entran en la vista.
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -100px 0px', threshold: 0.1 });

    document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));
});