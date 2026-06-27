/* ===========================
   CV - Eloi Calderon Salvans
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===========================
    // I18N
    // ===========================

    // Keys identical across all languages
    const SHARED = {
        skills: {
            frontendHtml:  'HTML5 & CSS3',
            frontendJs:    'JavaScript',
            frontendBlade: 'Blade Templates',
            backendPhp:    'PHP & Laravel',
            backendApi:    'APIs REST',
        },
        projects: {
            apiRest:   'API REST',
            done:      'Done / Hecho / Fet',
        },
        footer: {
            text: 'Designed & developed by <span class="highlight">Eloi Calderon Salvans</span>',
        },
    };

    const translations = {
        es: {
            nav: {
                about: 'Sobre mí', skills: 'Habilidades', education: 'Formación',
                projects: 'Proyectos', contact: 'Contacto', languageLabel: 'Idioma', cta: 'Hablemos',
            },
            hero: {
                available: 'Disponible para trabajar', greeting: 'Hola, soy',
                projects: 'Ver Proyectos', contact: 'Contactar', scroll: 'Desplázate',
            },
            about: {
                title: 'Sobre mí',
                intro: 'Soy un desarrollador con formación en <span class="highlight">DAW</span> (Desarrollo de Aplicaciones Web) y <span class="highlight">DAM</span> (Desarrollo de Aplicaciones Multiplataforma), apasionado por crear soluciones digitales modernas y funcionales.',
                description: 'Mi experiencia abarca desde el desarrollo web con frameworks como Laravel hasta aplicaciones móviles con Kotlin y Jetpack Compose. Me interesa especialmente el diseño de interfaces intuitivas y la arquitectura de software limpia.',
                nameLabel: 'Nombre', locationLabel: 'Ubicación',
                locationValue: 'Girona, Catalunya, España',
                trainingLabel: 'Formación',
                trainingValue: 'CFGM Sistemas Informáticos, CFGS DAW & DAM',
                photoPlaceholder: 'Tu foto aquí',
            },
            skills: {
                title: 'Habilidades', frontend: 'Frontend', backend: 'Backend',
                mobile: 'Móvil', tools: 'Herramientas',
            },
            education: {
                title: 'Formación',
                dawTitle: 'CFGS Desarrollo de Aplicaciones Web (DAW)',
                dawDesc: 'Desarrollo web Full Stack con PHP, Laravel, JavaScript, HTML5, CSS3, MySQL. Diseño de interfaces, patrones MVC, APIs REST y despliegue de aplicaciones.',
                damTitle: 'CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)',
                damDesc: 'Desarrollo de aplicaciones móviles con Kotlin y Jetpack Compose, bases de datos, programación orientada a objetos y desarrollo multiplataforma.',
            },
            projects: {
                title: 'Proyectos Destacados', featured: 'Proyecto Destacado',
                project1Desc: 'Proyecto final del Ciclo Formativo de Desarrollo de Aplicaciones Web, construido con el framework <strong>Laravel</strong>. Incluye sistema de templates con Blade, gestión de rutas, controladores y modelos siguiendo el patrón <strong>MVC</strong>. Base de datos MySQL con migraciones y seeders.',
                todo: 'Por hacer', uiDesign: 'Diseñar UI',
                inProgress: 'En progreso', authLogin: 'Inicio de sesión', database: 'Base de datos',
                project2Desc: 'Tablero <strong>Kanban</strong> interactivo desarrollado con Laravel y Blade. Permite gestionar tareas con funcionalidad <strong>drag & drop</strong>, organizar proyectos en columnas y hacer seguimiento del progreso del trabajo en equipo.',
                more: 'Ver más proyectos en GitHub',
            },
            contact: {
                title: 'Contacto', overline: '¿Siguiente paso?', heading: '¿Hablamos?',
                description: 'Estoy abierto a nuevas oportunidades profesionales. Si tienes un proyecto interesante o una oferta, no dudes en contactarme.',
                cta: 'Envíame un email',
            },
        },

        ca: {
            nav: {
                about: 'Sobre mi', skills: 'Habilitats', education: 'Formació',
                projects: 'Projectes', contact: 'Contacte', languageLabel: 'Idioma', cta: 'Parlem',
            },
            hero: {
                available: 'Disponible per treballar', greeting: 'Hola, soc',
                projects: 'Veure projectes', contact: 'Contactar', scroll: "Desplaça't",
            },
            about: {
                title: 'Sobre mi',
                intro: "Soc un desenvolupador amb formació en <span class=\"highlight\">DAW</span> (Desenvolupament d'Aplicacions Web) i <span class=\"highlight\">DAM</span> (Desenvolupament d'Aplicacions Multiplataforma), apassionat per crear solucions digitals modernes i funcionals.",
                description: "La meva experiència abasta des del desenvolupament web amb frameworks com Laravel fins a aplicacions mòbils amb Kotlin i Jetpack Compose. M'interessa especialment el disseny d'interfícies intuïtives i l'arquitectura de programari neta.",
                nameLabel: 'Nom', locationLabel: 'Ubicació',
                locationValue: 'Girona, Catalunya, Espanya',
                trainingLabel: 'Formació',
                trainingValue: 'CFGM Sistemes Informàtics, CFGS DAW i DAM',
                photoPlaceholder: 'La teva foto aquí',
            },
            skills: {
                title: 'Habilitats', frontend: 'Frontend', backend: 'Backend',
                mobile: 'Mòbil', tools: 'Eines',
            },
            education: {
                title: 'Formació',
                dawTitle: "CFGS Desenvolupament d'Aplicacions Web (DAW)",
                dawDesc: "Desenvolupament web Full Stack amb PHP, Laravel, JavaScript, HTML5, CSS3, MySQL. Disseny d'interfícies, patrons MVC, APIs REST i desplegament d'aplicacions.",
                damTitle: 'CFGS Desenvolupament d\'Aplicacions Multiplataforma (DAM)',
                damDesc: "Desenvolupament d'aplicacions mòbils amb Kotlin i Jetpack Compose, bases de dades, programació orientada a objectes i desenvolupament multiplataforma.",
            },
            projects: {
                title: 'Projectes destacats', featured: 'Projecte destacat',
                project1Desc: "Projecte final del Cicle Formatiu de Desenvolupament d'Aplicacions Web, construït amb el framework <strong>Laravel</strong>. Inclou sistema de plantilles amb Blade, gestió de rutes, controladors i models seguint el patró <strong>MVC</strong>. Base de dades MySQL amb migracions i seeders.",
                todo: 'Per fer', uiDesign: 'Dissenyar UI',
                inProgress: 'En progrés', authLogin: 'Inici de sessió', database: 'Base de dades',
                project2Desc: 'Tauler <strong>Kanban</strong> interactiu desenvolupat amb Laravel i Blade. Permet gestionar tasques amb funcionalitat <strong>drag & drop</strong>, organitzar projectes en columnes i fer seguiment del progrés del treball en equip.',
                more: 'Veure més projectes a GitHub',
            },
            contact: {
                title: 'Contacte', overline: 'Següent pas?', heading: 'Parlem?',
                description: "Estic obert a noves oportunitats professionals. Si tens un projecte interessant o una oferta, no dubtis a contactar-me.",
                cta: "Envia'm un email",
            },
        },

        en: {
            nav: {
                about: 'About', skills: 'Skills', education: 'Education',
                projects: 'Projects', contact: 'Contact', languageLabel: 'Language', cta: "Let's talk",
            },
            hero: {
                available: 'Available for work', greeting: "Hi, I'm",
                projects: 'View Projects', contact: 'Contact', scroll: 'Scroll Down',
            },
            about: {
                title: 'About me',
                intro: 'I\'m a developer with training in <span class="highlight">DAW</span> (Web Application Development) and <span class="highlight">DAM</span> (Multiplatform Application Development), passionate about creating modern and functional digital solutions.',
                description: "My experience ranges from web development with frameworks like Laravel to mobile applications with Kotlin and Jetpack Compose. I'm especially interested in intuitive interface design and clean software architecture.",
                nameLabel: 'Name', locationLabel: 'Location',
                locationValue: 'Girona, Catalonia, Spain',
                trainingLabel: 'Education',
                trainingValue: 'Vocational training in Computer Systems, DAW & DAM',
                photoPlaceholder: 'Your photo here',
            },
            skills: {
                title: 'Skills', frontend: 'Frontend', backend: 'Backend',
                mobile: 'Mobile', tools: 'Tools',
            },
            education: {
                title: 'Education',
                dawTitle: 'Vocational Training in Web Application Development (DAW)',
                dawDesc: 'Full Stack web development with PHP, Laravel, JavaScript, HTML5, CSS3, MySQL. Interface design, MVC patterns, REST APIs and application deployment.',
                damTitle: 'Vocational Training in Multiplatform Application Development (DAM)',
                damDesc: 'Mobile application development with Kotlin and Jetpack Compose, databases, object-oriented programming and multiplatform development.',
            },
            projects: {
                title: 'Featured Projects', featured: 'Featured Project',
                project1Desc: 'Final project of the Vocational Training in Web Application Development, built with the <strong>Laravel</strong> framework. It includes a Blade template system, route management, controllers and models following the <strong>MVC</strong> pattern. MySQL database with migrations and seeders.',
                todo: 'To Do', uiDesign: 'Design UI',
                inProgress: 'In Progress', authLogin: 'Login', database: 'Database',
                project2Desc: 'Interactive <strong>Kanban</strong> board developed with Laravel and Blade. It allows managing tasks with <strong>drag & drop</strong> functionality, organizing projects into columns and tracking team progress.',
                more: 'See more projects on GitHub',
            },
            contact: {
                title: 'Contact', overline: 'Next step?', heading: 'Shall we talk?',
                description: "I'm open to new professional opportunities. If you have an interesting project or an offer, feel free to get in touch.",
                cta: 'Send me an email',
            },
        },
    };

    // Merge SHARED keys into every language
    Object.values(translations).forEach(lang => {
        Object.entries(SHARED).forEach(([section, keys]) => {
            lang[section] = { ...keys, ...lang[section] };
        });
    });

    // Resolve a dot-notation key like "nav.about" against the nested object
    function t(key, lang) {
        return key.split('.').reduce((obj, k) => obj?.[k], translations[lang] ?? translations.es) ?? key;
    }

    const languageSelect = document.getElementById('languageSelect');

    function applyTranslations(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => {
            const key   = el.dataset.i18n ?? el.dataset.i18nHtml;
            const value = t(key, lang);
            if (el.dataset.i18nHtml) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        if (languageSelect) languageSelect.value = lang;
        localStorage.setItem('preferred-language', lang);
    }

    if (languageSelect) {
        languageSelect.addEventListener('change', e => applyTranslations(e.target.value));
    }

    applyTranslations(localStorage.getItem('preferred-language') ?? 'es');

    // ===========================
    // PRELOADER
    // ===========================
    const preloader        = document.getElementById('preloader');
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
    // SCROLL PROGRESS
    // ===========================
    const scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const scrolled = document.documentElement.scrollTop /
            (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }, { passive: true });

    // ===========================
    // NAVBAR & MOBILE MENU
    // ===========================
    const navbar     = document.getElementById('navbar');
    const navToggle  = document.getElementById('navToggle');
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
        line2.style.opacity   = isMenuOpen ? '0' : '';
        line3.style.transform = isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
    }

    navToggle.addEventListener('click', toggleMenu);
    document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', toggleMenu));

    // ===========================
    // SMOOTH SCROLL
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
    // TYPING EFFECT
    // ===========================
    const typedTextEl = document.getElementById('typedText');
    const phrases = [
        'Desarrollador Web Full Stack',
        'Desarrollador de Apps Móviles',
        'Apasionado por Laravel & Kotlin',
    ];
    let phraseIndex = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        const phrase = phrases[phraseIndex];
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

        setTimeout(typeEffect, delay);
    }

    setTimeout(typeEffect, 1500);

    // ===========================
    // PARALLAX HERO GLOW
    // ===========================
    const hero  = document.getElementById('hero');
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
    // SCROLL REVEAL
    // ===========================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -100px 0px', threshold: 0.1 });

    document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

    // ===========================
    // SKILL BARS
    // ===========================
    const skillsSection = document.getElementById('skills');

    if (skillsSection) {
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.querySelectorAll('.skill-fill').forEach(fill => {
                    fill.style.width = fill.dataset.width + '%';
                });
            });
        }, { threshold: 0.2 }).observe(skillsSection);
    }

});