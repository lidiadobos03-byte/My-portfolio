import { useEffect, useState } from 'react'
import './App.css'

const quickStats = [
  {
    value: '4 proiecte',
    label: 'selectate pentru portofoliu',
  },
  {
    value: '13 repo-uri publice',
    label: 'experimente și build-uri vizibile',
  },
  {
    value: 'Web + produs',
    label: 'de la interfață la structură tehnică',
  },
]

const highlights = [
  {
    title: 'Pagini complete',
    text: 'Proiectele includ secțiuni reale, navigare, CTA-uri și pagini pregătite pentru prezentare.',
  },
  {
    title: 'Interfețe responsive',
    text: 'Layout-uri adaptate pentru desktop și mobil, cu atenție la ritm, spațiere și lizibilitate.',
  },
  {
    title: 'Structură tehnică',
    text: 'Portofoliul include și proiecte de produs sau backend, nu doar pagini vizuale.',
  },
]

const projects = [
  {
    code: '01',
    title: 'AEVUM',
    featured: true,
    type: 'Concept premium pentru ceasuri de lux',
    year: '2026',
    role: 'Direcție de brand + front-end',
    summary:
      'Un concept luxury multi-page care îmbină povestea brandului, navigarea structurată și încrederea colecționarilor.',
    impact:
      'Combină secțiuni editoriale, catalog filtrabil, fluxuri de vânzare / schimb și asset-uri statice pregătite pentru lansare.',
    stack: ['HTML5', 'CSS', 'JavaScript', 'Baze SEO'],
    accent: '#8f7a55',
    watermark: 'AE',
    featuredEyebrow: 'Cel mai nou proiect evidențiat',
    featuredHeadline: 'AEVUM este proiectul principal din portofoliu.',
    featuredSectionNote:
      'Un concept luxury editorial, cu pagini multiple, catalog filtrabil și trasee clare spre contact.',
    featuredLead:
      'Un concept pentru o casă de ceasuri, cu pagini de prezentare, catalog și flux de contact.',
    featuredDirections: [
      'Homepage editorial',
      'Colecție filtrabilă',
      'Flux pentru vânzare / schimb',
      'Zonă de club privat',
    ],
    featuredMetrics: [
      {
        label: 'Pagini',
        value: '7 pagini pregătite pentru lansare',
      },
      {
        label: 'Catalog',
        value: 'Navigare filtrabilă + solicitări',
      },
      {
        label: 'Direcție',
        value: 'Editorială, discretă, comercială',
      },
    ],
    featuredSpotlight: {
      label: 'Concept premium pentru ceasuri de lux',
      title: 'Atmosferă editorială susținută de un catalog structurat.',
      text:
        'O experiență pentru colecționari, cu text atent, vizualuri de produs și trasee clare spre contact privat.',
    },
    links: [
      {
        label: 'Site live',
        href: 'https://lidiadobos03-byte.github.io/digital-catalogue/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/lidiadobos03-byte/digital-catalogue',
      },
    ],
  },
  {
    code: '02',
    title: 'WebCraft',
    type: 'Showcase web',
    year: '2024 - Prezent',
    role: 'UI/UX + front-end',
    summary:
      'Un showcase multi-page cu patru concepte de nișă, layout-uri responsive și interacțiuni vanilla.',
    impact:
      'Arată versatilitate în direcții pentru restaurant, corporate, fashion și servicii juridice.',
    stack: ['HTML5', 'CSS', 'JavaScript', 'Design responsive'],
    accent: '#a9647e',
    links: [
      {
        label: 'Site live',
        href: 'https://webcraft.cvperfect.online',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/lidiadobos03-byte/webcraft',
      },
    ],
  },
  {
    code: '03',
    title: 'CVPerfect',
    type: 'Concept de produs',
    year: '2026',
    role: 'Product design + arhitectură',
    summary:
      'Un concept full-stack pentru CV-uri, cu Next.js, Express, pregătire pentru plăți și fluxuri orientate spre PDF.',
    impact:
      'Structurat pentru UI reutilizabil, utilitare backend și scalare viitoare.',
    stack: ['Next.js', 'Node.js', 'Express', 'Stripe'],
    accent: '#c3a0b2',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/lidiadobos03-byte/cvperfect',
      },
    ],
  },
  {
    code: '04',
    title: 'Task Manager API',
    type: 'Proiect backend de portofoliu',
    year: '2026',
    role: 'Design API + structură',
    summary:
      'Un REST API în Spring Boot pentru managementul task-urilor, cu validare, filtrare, Swagger și teste.',
    impact:
      'Arată structură backend dincolo de lucrul pe interfețe.',
    stack: ['Java 17', 'Spring Boot', 'JPA', 'Swagger'],
    accent: '#9da98d',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/lidiadobos03-byte/task-manager-api',
      },
    ],
  },
]

const careerHighlights = [
  {
    step: '2021',
    title: 'Magic Advertising',
    text: 'Design grafic, vizualuri de campanie, suport pentru clienți și colaborare cu echipe de dezvoltare.',
  },
  {
    step: '2018',
    title: 'Aqua Dental Clinic',
    text: 'Operațiuni și coordonare cu clienții în Londra, cu accent pe comunicare și ritm de lucru.',
  },
  {
    step: 'Acum',
    title: 'Direcția actuală',
    text: 'Web design, UI/UX și front-end pentru proiecte clare, responsive și ușor de prezentat.',
  },
]

const skillGroups = [
  {
    title: 'Direcție de design',
    items: ['UI/UX Design', 'Web Design', 'Wireframing', 'Prototipare', 'Design Systems'],
  },
  {
    title: 'Implementare',
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'React'],
  },
  {
    title: 'Livrare',
    items: ['Accesibilitate', 'UX Research', 'Mindset CRO', 'Comunicare cu clienții', 'Colaborare remote'],
  },
]

const contactLinks = [
  {
    label: 'Telefon',
    value: '+40 740 334 757',
    href: 'tel:+40740334757',
  },
  {
    label: 'GitHub',
    value: 'lidiadobos03-byte',
    href: 'https://github.com/lidiadobos03-byte',
    external: true,
  },
  {
    label: 'Cel mai nou proiect live',
    value: 'lidiadobos03-byte.github.io/digital-catalogue',
    href: 'https://lidiadobos03-byte.github.io/digital-catalogue/',
    external: true,
  },
]

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

function App() {
  const currentYear = new Date().getFullYear()
  const [heroPortraitError, setHeroPortraitError] = useState(false)
  const featuredProject = projects.find((project) => project.featured)
  const supportingProjects = projects.filter((project) => !project.featured)

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
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">LD</span>
          <span className="brand-copy">
            <strong>Lidia Dobos</strong>
            <span>Designer Web / UI-UX</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navigare principală">
          <a href="#projects">Proiecte</a>
          <a href="#about">Despre</a>
          <a href="#skills">Skill-uri</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="section hero-section" id="top">
          <div className="hero-panel reveal">
            <div className="panel-orbit panel-orbit-one" aria-hidden="true" />
            <div className="panel-orbit panel-orbit-two" aria-hidden="true" />

            <p className="panel-label">Portofoliu web / România</p>
            <h2>Proiecte web vizuale, responsive și ușor de parcurs.</h2>
            <p className="panel-copy">
              O selecție de proiecte de interfață, showcase, produs și backend,
              prezentate clar pentru colaborări în România sau remote.
            </p>

            <div className="hero-visual-stage">
              <div className="hero-visual-mist" aria-hidden="true" />
              <article className="hero-editorial-card">
                <span>Proiect principal</span>
                <strong>AEVUM, concept luxury cu pagini multiple și catalog filtrabil.</strong>
                <p>
                  Include homepage editorial, colecție, formular de interes și
                  structură pregătită pentru prezentare.
                </p>
              </article>

              <div className="hero-ribbon">
                <span>În portofoliu</span>
                <strong>AEVUM, WebCraft, CVPerfect și Task Manager API</strong>
              </div>

              {heroPortraitError ? (
                <div
                  className="hero-portrait-fallback"
                  role="img"
                  aria-label="Placeholder portret pentru Lidia Dobos"
                >
                  <span>LD</span>
                </div>
              ) : (
                <img
                  className="hero-portrait-close-image"
                  src={publicAsset('lidia-portrait-fashion-cutout.png')}
                  alt="Portret editorial cu Lidia Dobos"
                  onError={() => setHeroPortraitError(true)}
                />
              )}
            </div>

            <ul className="stack-list" aria-label="Stack principal">
              <li>Figma</li>
              <li>UI/UX Design</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>React</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className="hero-copy reveal delay-1">
            <p className="eyebrow">Web Design / UI-UX / Front-end</p>
            <h1 className="hero-title">Portofoliu de proiecte web și produs.</h1>
            <p className="hero-text">
              Proiecte construite pentru prezentare clară: website-uri, concepte de
              produs, interfețe responsive și un exemplu backend.
            </p>
            <p className="hero-note">
              Cel mai nou proiect: <strong>AEVUM</strong>, un concept luxury pentru
              ceasuri, cu structură multi-page și catalog filtrabil.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Vezi proiectele selectate
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/lidiadobos03-byte"
                target="_blank"
                rel="noreferrer"
              >
                Vezi GitHub
              </a>
            </div>

            <ul className="stat-grid" aria-label="Puncte forte principale">
              {quickStats.map((stat, index) => (
                <li key={stat.value} className={`stat-card reveal delay-${Math.min(index + 1, 3)}`}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section highlights-section">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow">Ce arată portofoliul</p>
              <h2>Proiecte complete, cu design, conținut și structură.</h2>
            </div>
            <p className="section-note">
              Accentul cade pe lucrări vizibile: pagini, fluxuri, componente,
              tehnologii și linkuri către site-uri live sau repository-uri.
            </p>
          </div>

          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className={`highlight-card reveal delay-${index + 1}`}
              >
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </article>
            ))}
          </div>
        </section>

        {featuredProject ? (
          <section className="section flagship-section" id="projects">
            <div className="flagship-header reveal">
              <div>
                <p className="eyebrow">
                  {featuredProject.featuredEyebrow ?? 'Proiect evidențiat'}
                </p>
                <h2>
                  {featuredProject.featuredHeadline ??
                    `${featuredProject.title} este proiectul principal din portofoliu.`}
                </h2>
              </div>
              <p className="section-note">
                {featuredProject.featuredSectionNote ??
                  'Include identitate vizuală, structură clară și execuție front-end.'}
              </p>
            </div>

            <div className="flagship-layout">
              <article className="flagship-story reveal delay-1">
                <span className="flagship-watermark" aria-hidden="true">
                  {featuredProject.watermark ?? featuredProject.code}
                </span>
                <p className="flagship-label">
                  {featuredProject.type} / {featuredProject.year}
                </p>
                <h3>{featuredProject.title}</h3>
                <p className="flagship-lead">
                  {featuredProject.featuredLead ??
                    'Un proiect care combină direcție vizuală, structură de produs și implementare front-end.'}
                </p>
                <p className="flagship-copy">{featuredProject.summary}</p>
                <p className="flagship-copy">{featuredProject.impact}</p>

                <ul className="flagship-directions" aria-label={`Repere ${featuredProject.title}`}>
                  {(featuredProject.featuredDirections ?? []).map((direction) => (
                    <li key={direction}>{direction}</li>
                  ))}
                </ul>

                <div className="flagship-actions">
                  {featuredProject.links.map((link) => (
                    <a
                      key={link.href}
                      className="button button-primary"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>

              <aside className="flagship-panel reveal delay-2">
                <div className="flagship-stage">
                  <article className="flagship-window flagship-window-main">
                    <span>{featuredProject.featuredSpotlight?.label ?? 'Build evidențiat'}</span>
                    <strong>
                      {featuredProject.featuredSpotlight?.title ??
                        'Prezență digitală cu structură clară.'}
                    </strong>
                    <p>{featuredProject.featuredSpotlight?.text ?? featuredProject.summary}</p>
                  </article>

                  <div className="flagship-window-grid">
                    {(featuredProject.featuredMetrics ?? []).map((metric) => (
                      <article key={metric.label} className="flagship-window">
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </article>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        ) : null}

        <section className="section projects-section">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow">Alte proiecte selectate</p>
              <h2>Alte direcții: showcase, produs și backend.</h2>
            </div>
            <p className="section-note">
              Fiecare card include pe scurt tipul proiectului, rolul, tehnologiile
              și linkul relevant.
            </p>
          </div>

          <div className="projects-grid secondary-projects-grid">
            {supportingProjects.map((project, index) => (
              <article
                key={project.title}
                className={`project-card reveal delay-${Math.min(index + 1, 3)}`}
              >
                <div
                  className="project-preview"
                  style={{ '--project-accent': project.accent }}
                >
                  <span>{project.code}</span>
                  <p>{project.role}</p>
                </div>

                <div className="project-body">
                  <div className="project-topline">
                    <span className="project-type">{project.type}</span>
                    <span className="project-year">{project.year}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p className="project-impact">{project.impact}</p>

                  <ul className="tag-list" aria-label={`Tehnologii ${project.title}`}>
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

        <section className="section profile-section" id="about">
          <aside className="profile-visual reveal">
            <div className="profile-visual-frame">
              <img
                className="profile-visual-image"
                src={publicAsset('lidia-editorial-walk.jpg')}
                alt="Portret editorial alb-negru cu Lidia Dobos mergând"
              />
              <div className="profile-visual-overlay">
                <span>Cadru editorial</span>
                <strong>
                  <span>Lidia</span>
                  <span>Dobos</span>
                </strong>
                <p>Designer Web Editorial / UI-UX</p>
              </div>
            </div>

            <div className="profile-visual-caption">
              <p className="eyebrow">Pe scurt</p>
              <h3>Lidia Dobos</h3>
              <p>
                Web design, UI/UX și front-end, cu focus pe proiecte clare și prezentabile.
              </p>
            </div>
          </aside>

          <article className="profile-copy reveal delay-1">
            <p className="eyebrow">Pe scurt</p>
            <p className="profile-intro">Web design, UI/UX, front-end.</p>
            <h2>Experiență practică în design vizual și proiecte digitale.</h2>
            <p>
              Portofoliul pornește din design grafic și comunicare vizuală, apoi
              merge spre UI/UX, front-end și structură de produs.
            </p>
            <p>
              Mai jos sunt listate experiența relevantă și direcțiile tehnice care
              susțin proiectele prezentate.
            </p>

            <div className="profile-quote">
              <span>Focus</span>
              <strong>
                Proiecte web clare, responsive și ușor de explicat unui client sau unei echipe.
              </strong>
            </div>

            <div className="profile-facts">
              <article className="fact-card">
                <span>Bază</span>
                <strong>România / Remote</strong>
              </article>
              <article className="fact-card">
                <span>Limbi</span>
                <strong>Română, Engleză</strong>
              </article>
              <article className="fact-card">
                <span>Focus</span>
                <strong>UI clar + layout responsive</strong>
              </article>
              <article className="fact-card">
                <span>Proiecte</span>
                <strong>Website-uri, portofolii, interfețe de produs</strong>
              </article>
            </div>

            <div className="profile-journey">
              <p className="panel-label">Traseu profesional</p>
              <div className="journey-list">
                {careerHighlights.map((item) => (
                  <article key={item.step} className="journey-card">
                    <span className="journey-step">{item.step}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="profile-signoff">
              <span>Direcție</span>
              <strong>
                Portofolii, landing page-uri și produse digitale cu structură clară.
              </strong>
            </div>
          </article>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow">Skill-uri</p>
              <h2>Skill-uri folosite în proiectele din portofoliu.</h2>
            </div>
            <p className="section-note">
              Lista rămâne practică: design, implementare și câteva aspecte de livrare.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className={`skill-card reveal delay-${Math.min(index + 1, 3)}`}
              >
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

        <section className="section contact-section" id="contact">
          <div className="contact-copy reveal">
            <p className="eyebrow">Contact</p>
            <h2>Contact pentru proiecte web, portofolii sau interfețe de produs.</h2>
            <p>
              Pentru o colaborare în România sau remote, poți trimite un email,
              suna direct sau verifica proiectele de pe GitHub.
            </p>
          </div>

          <aside className="contact-card reveal delay-1">
            <p className="panel-label">Contact rapid</p>
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

            <p className="contact-meta">România / Remote</p>
            <p className="contact-meta">Disponibilă pentru colaborări în România, remote și proiecte personale</p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+40740334757">
                Sună-mă
              </a>
              <a className="button button-primary" href="mailto:lidiadobos03@gmail.com">
                Trimite email
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/lidiadobos03-byte"
                target="_blank"
                rel="noreferrer"
              >
                Profil GitHub
              </a>
            </div>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <p>Lidia Dobos</p>
        <span>{currentYear} web designer, UI/UX designer, portofoliu orientat spre produs</span>
      </footer>
    </div>
  )
}

export default App
