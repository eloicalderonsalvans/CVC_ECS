/* ===========================
   CV - Eloi Calderon Salvans
   Interactive JavaScript
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        es: {
            'nav.about': 'Sobre mí',
            'nav.skills': 'Habilidades',
            'nav.education': 'Formación',
            'nav.projects': 'Proyectos',
            'nav.contact': 'Contacto',
            'nav.languageLabel': 'Idioma',
            'nav.cta': 'Hablemos',
            'hero.available': 'Disponible para trabajar',
            'hero.greeting': 'Hola, soy',
            'hero.projects': 'Ver Proyectos',
            'hero.contact': 'Contactar',
            'hero.scroll': 'Desplázate',
            'about.title': 'Sobre mí',
            'about.intro': 'Soy un desarrollador con formación en <span class="highlight">DAW</span> (Desarrollo de Aplicaciones Web) y <span class="highlight">DAM</span> (Desarrollo de Aplicaciones Multiplataforma), apasionado por crear soluciones digitales modernas y funcionales.',
            'about.description': 'Mi experiencia abarca desde el desarrollo web con frameworks como Laravel hasta aplicaciones móviles con Kotlin y Jetpack Compose. Me interesa especialmente el diseño de interfaces intuitivas y la arquitectura de software limpia.',
            'about.nameLabel': 'Nombre',
            'about.locationLabel': 'Ubicación',
            'about.locationValue': 'Girona, Catalunya, España',
            'about.trainingLabel': 'Formación',
            'about.trainingValue': 'CFGM Sistemas Informáticos, CFGS DAW & DAM',
            'about.photoPlaceholder': 'Tu foto aquí',
            'skills.title': 'Habilidades',
            'skills.frontend': 'Frontend',
            'skills.frontendHtml': 'HTML5 & CSS3',
            'skills.frontendJs': 'JavaScript',
            'skills.frontendBlade': 'Blade Templates',
            'skills.backend': 'Backend',
            'skills.backendPhp': 'PHP & Laravel',
            'skills.backendApi': 'APIs REST',
            'skills.mobile': 'Móvil',
            'skills.tools': 'Herramientas',
            'education.title': 'Formación',
            'education.dawTitle': 'CFGS Desarrollo de Aplicaciones Web (DAW)',
            'education.dawDesc': 'Desarrollo web Full Stack con PHP, Laravel, JavaScript, HTML5, CSS3, MySQL. Diseño de interfaces, patrones MVC, APIs REST y despliegue de aplicaciones.',
            'education.damTitle': 'CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)',
            'education.damDesc': 'Desarrollo de aplicaciones móviles con Kotlin y Jetpack Compose, bases de datos, programación orientada a objetos y desarrollo multiplataforma.',
            'projects.title': 'Proyectos Destacados',
            'projects.featured': 'Proyecto Destacado',
            'projects.project1Desc': 'Proyecto final del Ciclo Formativo de Desarrollo de Aplicaciones Web, construido con el framework <strong>Laravel</strong>. Incluye sistema de templates con Blade, gestión de rutas, controladores y modelos siguiendo el patrón <strong>MVC</strong>. Base de datos MySQL con migraciones y seeders.',
            'projects.todo': 'Por hacer',
            'projects.uiDesign': 'Diseñar UI',
            'projects.apiRest': 'API REST',
            'projects.inProgress': 'En progreso',
            'projects.authLogin': 'Inicio de sesión',
            'projects.done': 'Hecho',
            'projects.database': 'Base de datos',
            'projects.project2Desc': 'Tablero <strong>Kanban</strong> interactivo desarrollado con Laravel y Blade. Permite gestionar tareas con funcionalidad <strong>drag & drop</strong>, organizar proyectos en columnas y hacer seguimiento del progreso del trabajo en equipo.',
            'projects.more': 'Ver más proyectos en GitHub',
            'contact.title': 'Contacto',
            'contact.overline': '¿Siguiente paso?',
            'contact.heading': '¿Hablamos?',
            'contact.description': 'Estoy abierto a nuevas oportunidades profesionales. Si tienes un proyecto interesante o una oferta, no dudes en contactarme.',
            'contact.cta': 'Envíame un email',
            'footer.text': 'Diseñado & desarrollado por <span class="highlight">Eloi Calderon Salvans</span>'
        },
        ca: {
            'nav.about': 'Sobre mi',
            'nav.skills': 'Habilitats',
            'nav.education': 'Formació',
            'nav.projects': 'Projectes',
            'nav.contact': 'Contacte',
            'nav.languageLabel': 'Idioma',
            'nav.cta': 'Parlem',
            'hero.available': 'Disponible per treballar',
            'hero.greeting': 'Hola, soc',
            'hero.projects': 'Veure projectes',
            'hero.contact': 'Contactar',
            'hero.scroll': 'Desplaça’t',
            'about.title': 'Sobre mi',
            'about.intro': 'Soc un desenvolupador amb formació en <span class="highlight">DAW</span> (Desenvolupament d’Aplicacions Web) i <span class="highlight">DAM</span> (Desenvolupament d’Aplicacions Multiplataforma), apassionat per crear solucions digitals modernes i funcionals.',
            'about.description': 'La meva experiència abasta des del desenvolupament web amb frameworks com Laravel fins a aplicacions mòbils amb Kotlin i Jetpack Compose. M’interessa especialment el disseny d’interfícies intuïtives i l’arquitectura de programari neta.',
            'about.nameLabel': 'Nom',
            'about.locationLabel': 'Ubicació',
            'about.locationValue': 'Girona, Catalunya, Espanya',
            'about.trainingLabel': 'Formació',
            'about.trainingValue': 'CFGM Sistemes Informàtics, CFGS DAW i DAM',
            'about.photoPlaceholder': 'La teva foto aquí',
            'skills.title': 'Habilitats',
            'skills.frontend': 'Frontend',
            'skills.frontendHtml': 'HTML5 & CSS3',
            'skills.frontendJs': 'JavaScript',
            'skills.frontendBlade': 'Plantilles Blade',
            'skills.backend': 'Backend',
            'skills.backendPhp': 'PHP & Laravel',
            'skills.backendApi': 'APIs REST',
            'skills.mobile': 'Mòbil',
            'skills.tools': 'Eines',
            'education.title': 'Formació',
            'education.dawTitle': 'CFGS Desenvolupament d’Aplicacions Web (DAW)',
            'education.dawDesc': 'Desenvolupament web Full Stack amb PHP, Laravel, JavaScript, HTML5, CSS3, MySQL. Disseny d’interfícies, patrons MVC, APIs REST i desplegament d’aplicacions.',
            'education.damTitle': 'CFGS Desenvolupament d’Aplicacions Multiplataforma (DAM)',
            'education.damDesc': 'Desenvolupament d’aplicacions mòbils amb Kotlin i Jetpack Compose, bases de dades, programació orientada a objectes i desenvolupament multiplataforma.',
            'projects.title': 'Projectes destacats',
            'projects.featured': 'Projecte destacat',
            'projects.project1Desc': 'Projecte final del Cicle Formatiu de Desenvolupament d’Aplicacions Web, construït amb el framework <strong>Laravel</strong>. Inclou sistema de plantilles amb Blade, gestió de rutes, controladors i models seguint el patró <strong>MVC</strong>. Base de dades MySQL amb migracions i seeders.',
            'projects.todo': 'Per fer',
            'projects.uiDesign': 'Dissenyar UI',
            'projects.apiRest': 'API REST',
            'projects.inProgress': 'En progrés',
            'projects.authLogin': 'Inici de sessió',
            'projects.done': 'Fet',
            'projects.database': 'Base de dades',
            'projects.project2Desc': 'Tauler <strong>Kanban</strong> interactiu desenvolupat amb Laravel i Blade. Permet gestionar tasques amb funcionalitat <strong>drag & drop</strong>, organitzar projectes en columnes i fer seguiment del progrés del treball en equip.',
            'projects.more': 'Veure més projectes a GitHub',
            'contact.title': 'Contacte',
            'contact.overline': 'Següent pas?',
            'contact.heading': 'Parlem?',
            'contact.description': 'Estic obert a noves oportunitats professionals. Si tens un projecte interessant o una oferta, no dubtis a contactar-me.',
            'contact.cta': 'Envia’m un email',
            'footer.text': 'Dissenyat & desenvolupat per <span class="highlight">Eloi Calderon Salvans</span>'
        },
        en: {
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.education': 'Education',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'nav.languageLabel': 'Language',
            'nav.cta': 'Let’s talk',
            'hero.available': 'Available for work',
            'hero.greeting': 'Hi, I’m',
            'hero.projects': 'View Projects',
            'hero.contact': 'Contact',
            'hero.scroll': 'Scroll Down',
            'about.title': 'About me',
            'about.intro': 'I’m a developer with training in <span class="highlight">DAW</span> (Web Application Development) and <span class="highlight">DAM</span> (Multiplatform Application Development), passionate about creating modern and functional digital solutions.',
            'about.description': 'My experience ranges from web development with frameworks like Laravel to mobile applications with Kotlin and Jetpack Compose. I’m especially interested in intuitive interface design and clean software architecture.',
            'about.nameLabel': 'Name',
            'about.locationLabel': 'Location',
            'about.locationValue': 'Girona, Catalonia, Spain',
            'about.trainingLabel': 'Education',
            'about.trainingValue': 'Vocational training in Computer Systems, DAW & DAM',
            'about.photoPlaceholder': 'Your photo here',
            'skills.title': 'Skills',
            'skills.frontend': 'Frontend',
            'skills.frontendHtml': 'HTML5 & CSS3',
            'skills.frontendJs': 'JavaScript',
            'skills.frontendBlade': 'Blade Templates',
            'skills.backend': 'Backend',
            'skills.backendPhp': 'PHP & Laravel',
            'skills.backendApi': 'REST APIs',
            'skills.mobile': 'Mobile',
            'skills.tools': 'Tools',
            'education.title': 'Education',
            'education.dawTitle': 'Vocational Training in Web Application Development (DAW)',
            'education.dawDesc': 'Full Stack web development with PHP, Laravel, JavaScript, HTML5, CSS3, MySQL. Interface design, MVC patterns, REST APIs and application deployment.',
            'education.damTitle': 'Vocational Training in Multiplatform Application Development (DAM)',
            'education.damDesc': 'Mobile application development with Kotlin and Jetpack Compose, databases, object-oriented programming and multiplatform development.',
            'projects.title': 'Featured Projects',
            'projects.featured': 'Featured Project',
            'projects.project1Desc': 'Final project of the Vocational Training in Web Application Development, built with the <strong>Laravel</strong> framework. It includes a Blade template system, route management, controllers and models following the <strong>MVC</strong> pattern. MySQL database with migrations and seeders.',
            'projects.todo': 'To Do',
            'projects.uiDesign': 'Design UI',
            'projects.apiRest': 'REST API',
            'projects.inProgress': 'In Progress',
            'projects.authLogin': 'Login',
            'projects.done': 'Done',
            'projects.database': 'Database',
            'projects.project2Desc': 'Interactive <strong>Kanban</strong> board developed with Laravel and Blade. It allows managing tasks with <strong>drag & drop</strong> functionality, organizing projects into columns and tracking team progress.',
            'projects.more': 'See more projects on GitHub',
            'contact.title': 'Contact',
            'contact.overline': 'Next step?',
            'contact.heading': 'Shall we talk?',
            'contact.description': 'I’m open to new professional opportunities. If you have an interesting project or an offer, feel free to get in touch.',
            'contact.cta': 'Send me an email',
            'footer.text': 'Designed & developed by <span class="highlight">Eloi Calderon Salvans</span>'
        }
    };

    const languageSelect = document.getElementById('languageSelect');
    const savedLanguage = localStorage.getItem('preferred-language') || 'es';

    function applyTranslations(lang) {
        const dict = translations[lang] || translations.es;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            if (dict[key]) {
                element.textContent = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach((element) => {
            const key = element.getAttribute('data-i18n-html');
            if (dict[key]) {
                element.innerHTML = dict[key];
            }
        });

        if (languageSelect) {
            languageSelect.value = lang;
        }

        localStorage.setItem('preferred-language', lang);
    }

    if (languageSelect) {
        languageSelect.addEventListener('change', (event) => {
            applyTranslations(event.target.value);
        });
    }

    applyTranslations(savedLanguage);

    // ===========================
    // PRELOADER
    // ===========================
    const preloader = document.getElementById('preloader');
    const preloaderProgress = document.getElementById('preloaderProgress');

    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        preloaderProgress.style.width = progress + '%';

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                document.body.style.overflow = '';
            }, 500);
        }
    }, 200);

    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // ===========================
    // SCROLL PROGRESS
    // ===========================
    const scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    }, { passive: true });

    // ===========================
    // NAVBAR & MOBILE MENU
    // ===========================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    let isMenuOpen = false;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('active', isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';

        // Animate hamburger lines
        const lines = navToggle.querySelectorAll('.hamburger-line');
        if (isMenuOpen) {
            lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            lines[0].style.transform = '';
            lines[1].style.opacity = '';
            lines[2].style.transform = '';
        }
    }

    navToggle.addEventListener('click', toggleMenu);

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // ===========================
    // SMOOTH SCROLL
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // TYPING EFFECT
    // ===========================
    const typedTextEl = document.getElementById('typedText');
    const phrases = [
        'Desarrollador Web Full Stack',
        'Desarrollador de Apps Móviles',
        'Apasionado por Laravel & Kotlin'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typedTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end of phrase
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before new phrase
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start typing after preloader finishes
    setTimeout(typeEffect, 1500);

    // ===========================
    // PARALLAX HERO GLOW
    // ===========================
    const hero = document.getElementById('hero');
    const glow1 = document.querySelector('.hero-glow-1');
    const glow2 = document.querySelector('.hero-glow-2');

    if (hero && window.innerWidth > 768) {
        hero.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;

            glow1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
            glow2.style.transform = `translate(${x * -50}px, ${y * -50}px)`;
        });
    }

    // ===========================
    // SCROLL REVEAL ANIMATIONS
    // ===========================
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => {
        revealObserver.observe(el);
    });

    // ===========================
    // SKILL BARS ANIMATION
    // ===========================
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill-fill');
                fills.forEach(fill => {
                    const width = fill.getAttribute('data-width');
                    fill.style.width = width + '%';
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

});
