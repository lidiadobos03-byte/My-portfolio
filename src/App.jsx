import { useEffect, useMemo, useState } from 'react'
import './App.css'

const projectLinks = {
  webcraft: [
    { label: 'Live', href: 'https://webcraft.cvperfect.online' },
    { label: 'GitHub', href: 'https://github.com/lidiadobos03-byte/webcraft' },
  ],
  cvperfect: [
    { label: 'Live', href: 'https://cvperfect.online' },
    { label: 'GitHub', href: 'https://github.com/lidiadobos03-byte/cvperfect' },
  ],
  aevum: [
    { label: 'Live', href: 'https://lidiadobos03-byte.github.io/digital-catalogue/' },
    { label: 'GitHub', href: 'https://github.com/lidiadobos03-byte/digital-catalogue' },
  ],
  itpex: [{ label: 'itpex.ro', href: 'https://itpex.ro' }],
}

const content = {
  ro: {
    meta: {
      role: 'Designer web / UI',
      navLabel: 'Navigare principala',
      availability: 'Disponibila pentru colaborari premium',
    },
    nav: {
      projects: 'Proiecte',
      skills: 'Abilitati',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Portofoliu bilingv - RO / EN',
      title: 'Experiente web cu aer editorial, construite pentru branduri care vor sa fie memorabile.',
      text:
        'Sunt Lidia Dobos si creez website-uri, concepte UI si prezentari digitale cu ritm vizual, claritate si atentie la detaliile care fac un brand sa para mai sigur pe el.',
      primary: 'Vezi selectia',
      secondary: 'Contact',
      signature: 'Design web, UI si implementare front-end',
      wordmark: 'PORTOFOLIU',
      stageTitle: 'Digital atelier',
      stageText: 'Portofoliu gandit ca o vitrina premium, nu ca o lista de proiecte.',
      statOne: '04 proiecte',
      statTwo: 'RO / EN',
      statThree: 'Remote',
    },
    intro: {
      eyebrow: 'Pentru Aplux si branduri premium',
      title: 'Design care vinde senzatia de calitate inainte de primul click.',
      text:
        'Pentru o companie precum Aplux, prima impresie trebuie sa transmita lux, incredere si confort. De aceea portofoliul pune accent pe compozitii mari, text scurt si rafinat, imagini puternice si detalii interactive fine.',
      points: ['E-commerce premium', 'Landing pages memorabile', 'Identitate vizuala in browser'],
    },
    projectsHeader: {
      eyebrow: 'Selectie de proiecte',
      title: 'Patru lucrari prezentate ca studii de brand.',
      note:
        'Am mutat accentul de pe lista clasica de tehnologii pe poveste, impact si directie vizuala.',
    },
    projects: [
      {
        code: '01',
        title: 'WebCraft',
        type: 'Showcase web',
        year: '2024 - Prezent',
        role: 'UI design + implementare',
        summary:
          'O colectie de concepte pentru nise diferite, gandita sa arate flexibilitate vizuala si control asupra layout-ului responsive.',
        impact:
          'Demonstreaza ca pot adapta stilul unui website la public, industrie si obiectiv, fara sa pierd claritatea.',
        stack: ['HTML5', 'CSS', 'JavaScript', 'Responsive UI'],
        accent: '#8e6f57',
        links: projectLinks.webcraft,
      },
      {
        code: '02',
        title: 'CVPerfect',
        type: 'Concept de produs',
        year: '2026',
        role: 'Product design + arhitectura',
        summary:
          'Un concept digital pentru generare de CV-uri, cu fluxuri clare pentru produs, continut si pregatire pentru monetizare.',
        impact:
          'Arata gandire de produs: structura, componente reutilizabile, trasee logice si scalabilitate.',
        stack: ['Next.js', 'Node.js', 'Express', 'Stripe'],
        accent: '#7d6477',
        links: projectLinks.cvperfect,
      },
      {
        code: '03',
        title: 'AEVUM',
        type: 'Luxury web concept',
        year: '2026',
        role: 'Directie de brand + interfata',
        summary:
          'Un site pentru ceasuri de lux, cu atmosfera editoriala, catalog filtrabil si trasee clare pentru cereri private.',
        impact:
          'Este proiectul care arata cel mai bine sensibilitatea pentru premium, ritm vizual si prezentare aspirationala.',
        stack: ['HTML5', 'CSS', 'JavaScript', 'SEO basics'],
        accent: '#1f4d3a',
        links: projectLinks.aevum,
      },
      {
        code: '04',
        title: 'ITPEX.ro',
        type: 'Prezenta digitala',
        year: '2026',
        role: 'Website + rafinare vizuala',
        summary:
          'Un proiect inclus ca punct nou in portofoliu, prezentat curat si premium pentru a echilibra partea creativa cu increderea tehnica.',
        impact:
          'Completeaza selectia cu o piesa mai directa, potrivita pentru colaborari B2B si prezentari profesionale.',
        stack: ['Website', 'UI polish', 'Structura clara', 'Brand presence'],
        accent: '#4f6f66',
        links: projectLinks.itpex,
      },
    ],
    skillsHeader: {
      eyebrow: 'Capabilitati',
      title: 'Ce pot livra intr-un proiect real.',
      note:
        'Designul arata bine doar daca poate fi construit, inteles si folosit usor.',
    },
    skills: [
      { title: 'Design', items: ['UI design', 'Web design', 'Directie vizuala', 'Prototipare'] },
      { title: 'Front-end', items: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
      { title: 'Livrare', items: ['Responsive', 'Accesibilitate', 'Comunicare clara', 'GitHub'] },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Hai sa transformam prima impresie intr-un avantaj.',
      text:
        'Pentru colaborari web, redesign-uri sau concepte UI premium, pot raspunde rapid pe email sau telefon.',
      quick: 'Contact rapid',
      phone: 'Telefon',
      github: 'GitHub',
      recent: 'Proiect recent',
      call: 'Suna-ma',
      email: 'Trimite email',
    },
    footer: 'designer web si designer de interfețe',
  },
  en: {
    meta: {
      role: 'Web / UI Designer',
      navLabel: 'Primary navigation',
      availability: 'Available for premium collaborations',
    },
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Bilingual portfolio - RO / EN',
      title: 'Editorial web experiences for brands that want to feel memorable.',
      text:
        'I am Lidia Dobos, a web and UI designer creating digital concepts with visual rhythm, clarity and the kind of detail that makes a brand feel more confident.',
      primary: 'View selection',
      secondary: 'Contact',
      signature: 'Web design, UI and front-end implementation',
      wordmark: 'PORTFOLIO',
      stageTitle: 'Digital atelier',
      stageText: 'A portfolio shaped like a premium showcase, not a project list.',
      statOne: '04 projects',
      statTwo: 'RO / EN',
      statThree: 'Remote',
    },
    intro: {
      eyebrow: 'For Aplux and premium brands',
      title: 'Design that sells quality before the first click.',
      text:
        'For a company like Aplux, the first impression should communicate luxury, trust and comfort. This portfolio leans into large compositions, refined copy, strong imagery and subtle interaction details.',
      points: ['Premium e-commerce', 'Memorable landing pages', 'Brand identity in browser'],
    },
    projectsHeader: {
      eyebrow: 'Selected work',
      title: 'Four projects presented as brand studies.',
      note:
        'The focus moves from a classic technology list to story, impact and visual direction.',
    },
    projects: [
      {
        code: '01',
        title: 'WebCraft',
        type: 'Web showcase',
        year: '2024 - Present',
        role: 'UI design + implementation',
        summary:
          'A collection of niche concepts built to show visual flexibility and control over responsive layouts.',
        impact:
          'Shows that I can adapt a website style to the audience, industry and goal without losing clarity.',
        stack: ['HTML5', 'CSS', 'JavaScript', 'Responsive UI'],
        accent: '#8e6f57',
        links: projectLinks.webcraft,
      },
      {
        code: '02',
        title: 'CVPerfect',
        type: 'Product concept',
        year: '2026',
        role: 'Product design + architecture',
        summary:
          'A digital concept for CV generation, with clear product flows, content structure and monetization readiness.',
        impact:
          'Shows product thinking: structure, reusable components, logical journeys and scalability.',
        stack: ['Next.js', 'Node.js', 'Express', 'Stripe'],
        accent: '#7d6477',
        links: projectLinks.cvperfect,
      },
      {
        code: '03',
        title: 'AEVUM',
        type: 'Luxury web concept',
        year: '2026',
        role: 'Brand direction + interface',
        summary:
          'A luxury watch website with editorial atmosphere, a filterable catalogue and clear paths for private requests.',
        impact:
          'The strongest proof of premium sensibility, visual rhythm and aspirational presentation.',
        stack: ['HTML5', 'CSS', 'JavaScript', 'SEO basics'],
        accent: '#1f4d3a',
        links: projectLinks.aevum,
      },
      {
        code: '04',
        title: 'ITPEX.ro',
        type: 'Digital presence',
        year: '2026',
        role: 'Website + visual refinement',
        summary:
          'A new portfolio entry presented with a clean premium tone, balancing creative direction with technical confidence.',
        impact:
          'Completes the selection with a more direct B2B piece suited for professional collaborations.',
        stack: ['Website', 'UI polish', 'Clear structure', 'Brand presence'],
        accent: '#4f6f66',
        links: projectLinks.itpex,
      },
    ],
    skillsHeader: {
      eyebrow: 'Capabilities',
      title: 'What I can deliver in a real project.',
      note:
        'Design works best when it can be built, understood and used with ease.',
    },
    skills: [
      { title: 'Design', items: ['UI design', 'Web design', 'Visual direction', 'Prototyping'] },
      { title: 'Front-end', items: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
      { title: 'Delivery', items: ['Responsive', 'Accessibility', 'Clear communication', 'GitHub'] },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Let us turn the first impression into an advantage.',
      text:
        'For web collaborations, redesigns or premium UI concepts, I can respond quickly by email or phone.',
      quick: 'Quick contact',
      phone: 'Phone',
      github: 'GitHub',
      recent: 'Recent project',
      call: 'Call me',
      email: 'Send email',
    },
    footer: 'web designer and interface designer',
  },
}

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

function App() {
  const [language, setLanguage] = useState('ro')
  const currentYear = new Date().getFullYear()
  const t = content[language]

  const contactLinks = useMemo(
    () => [
      {
        label: t.contact.phone,
        value: '+40 740 334 757',
        href: 'tel:+40740334757',
      },
      {
        label: t.contact.github,
        value: 'lidiadobos03-byte',
        href: 'https://github.com/lidiadobos03-byte',
        external: true,
      },
      {
        label: t.contact.recent,
        value: 'ITPEX.ro',
        href: 'https://itpex.ro',
        external: true,
      },
    ],
    [t],
  )

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal'))
    if (!nodes.length) {
      return undefined
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [language])

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Lidia Dobos">
          <span className="brand-mark">LD</span>
          <span className="brand-copy">
            <strong>Lidia Dobos</strong>
            <span>{t.meta.role}</span>
          </span>
        </a>

        <nav className="site-nav" aria-label={t.meta.navLabel}>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="language-switch" aria-label="Language switcher">
          {Object.keys(content).map((option) => (
            <button
              key={option}
              className={language === option ? 'is-active' : ''}
              type="button"
              aria-pressed={language === option}
              onClick={() => setLanguage(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-text">{t.hero.text}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.hero.primary}
              </a>
              <a className="button button-secondary" href="#contact">
                {t.hero.secondary}
              </a>
            </div>
          </div>

          <aside className="hero-visual reveal delay-1" aria-label={t.hero.signature}>
            <div className="hero-wordmark">{t.hero.wordmark}</div>
            <img
              className="hero-portrait"
              src={publicAsset('lidia-portrait-fashion-cutout.png')}
              alt="Lidia Dobos portrait cutout"
            />
            <div className="hero-frame">
              <p>{t.hero.stageTitle}</p>
              <strong>{t.hero.stageText}</strong>
            </div>
            <div className="hero-stats" aria-label={t.hero.signature}>
              <span>{t.hero.statOne}</span>
              <span>{t.hero.statTwo}</span>
              <span>{t.hero.statThree}</span>
            </div>
          </aside>
        </section>

        <section className="intro-strip reveal" id="direction">
          <div>
            <p className="eyebrow">{t.intro.eyebrow}</p>
            <h2>{t.intro.title}</h2>
          </div>
          <div className="intro-copy">
            <p>{t.intro.text}</p>
            <ul aria-label={t.intro.eyebrow}>
              {t.intro.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow">{t.projectsHeader.eyebrow}</p>
              <h2>{t.projectsHeader.title}</h2>
            </div>
            <p>{t.projectsHeader.note}</p>
          </div>

          <div className="projects-list">
            {t.projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-panel reveal delay-${Math.min(index + 1, 3)}`}
                style={{ '--project-accent': project.accent }}
              >
                <div className="project-number">
                  <span>{project.code}</span>
                </div>

                <div className="project-main">
                  <div className="project-topline">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>

                <div className="project-detail">
                  <p>{project.impact}</p>
                  <ul className="tag-list" aria-label={`${project.title} stack`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        className="project-link"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow">{t.skillsHeader.eyebrow}</p>
              <h2>{t.skillsHeader.title}</h2>
            </div>
            <p>{t.skillsHeader.note}</p>
          </div>

          <div className="skills-grid">
            {t.skills.map((group, index) => (
              <article key={group.title} className={`skill-card reveal delay-${index + 1}`}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="contact-copy reveal">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>

          <aside className="contact-card reveal delay-1">
            <p className="panel-label">{t.contact.quick}</p>
            <a className="contact-mail" href="mailto:lidiadobos03@gmail.com">
              lidiadobos03@gmail.com
            </a>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  className="contact-link"
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+40740334757">
                {t.contact.call}
              </a>
              <a className="button button-secondary" href="mailto:lidiadobos03@gmail.com">
                {t.contact.email}
              </a>
            </div>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <p>Lidia Dobos</p>
        <span>
          {currentYear} - {t.footer}
        </span>
      </footer>
    </div>
  )
}

export default App
