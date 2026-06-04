import { useEffect } from 'react'
import './App.css'

const projects = [
  {
    code: '01',
    title: 'WebCraft',
    type: 'Prezentare web',
    year: '2024 - Prezent',
    role: 'Design de interfață + implementare',
    summary:
      'Un showcase cu patru concepte de nișă: restaurant, corporate, fashion și servicii juridice.',
    impact:
      'Arată versatilitate vizuală, pagini responsive și interacțiuni simple în JavaScript.',
    stack: ['HTML5', 'CSS', 'JavaScript', 'Design adaptabil'],
    accent: '#a9647e',
    links: [
      {
        label: 'Site publicat',
        href: 'https://webcraft.cvperfect.online',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/lidiadobos03-byte/webcraft',
      },
    ],
  },
  {
    code: '02',
    title: 'CVPerfect',
    type: 'Concept de produs',
    year: '2026',
    role: 'Design de produs + arhitectură',
    summary:
      'Un concept pentru CV-uri, cu pagini de produs, fluxuri pentru PDF și pregătire pentru plăți.',
    impact:
      'Pune accent pe structură clară, componente reutilizabile și o direcție scalabilă.',
    stack: ['Next.js', 'Node.js', 'Express', 'Stripe'],
    accent: '#c3a0b2',
    links: [
      {
        label: 'Site publicat',
        href: 'https://cvperfect.online',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/lidiadobos03-byte/cvperfect',
      },
    ],
  },
  {
    code: '03',
    title: 'AEVUM',
    type: 'Concept pentru ceasuri de lux',
    year: '2026',
    role: 'Direcție de marcă + interfață',
    summary:
      'Un site pentru o casă de ceasuri, cu pagini de prezentare, catalog și formular de contact.',
    impact:
      'Combină atmosferă editorială, catalog filtrabil și trasee clare pentru cereri private.',
    stack: ['HTML5', 'CSS', 'JavaScript', 'Baze SEO'],
    accent: '#8f7a55',
    links: [
      {
        label: 'Site publicat',
        href: 'https://lidiadobos03-byte.github.io/digital-catalogue/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/lidiadobos03-byte/digital-catalogue',
      },
    ],
  },
  {
    code: '04',
    title: 'API pentru managementul sarcinilor',
    type: 'Proiect de server',
    year: '2026',
    role: 'Structură API + organizare tehnică',
    summary:
      'Un REST API în Spring Boot pentru managementul sarcinilor, cu validare, filtrare, Swagger și teste.',
    impact:
      'Completează portofoliul cu structură backend și logică tehnică dincolo de interfețe.',
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

const skillGroups = [
  {
    title: 'Design',
    items: ['Design web', 'Design de interfață', 'Prototipare', 'Sisteme de design'],
  },
  {
    title: 'Implementare',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Livrare',
    items: ['Accesibilitate', 'Structură responsive', 'Comunicare cu clienții', 'Colaborare la distanță'],
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
    label: 'Proiect recent',
    value: 'AEVUM',
    href: 'https://lidiadobos03-byte.github.io/digital-catalogue/',
    external: true,
  },
]

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

function App() {
  const currentYear = new Date().getFullYear()

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
            <span>Designer web / interfețe</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navigare principală">
          <a href="#projects">Proiecte</a>
          <a href="#about">Despre</a>
          <a href="#skills">Abilități</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="section hero-section compact-hero" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow">Portofoliu Lidia Dobos</p>
            <h1 className="hero-title">Design web, interfețe și proiecte digitale.</h1>
            <p className="hero-text">
              Creez website-uri și concepte de produs clare, responsive și ușor de
              prezentat unui client sau unei echipe.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Vezi proiectele
              </a>
              <a className="button button-secondary" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow">Proiecte selectate</p>
              <h2>WebCraft, CVPerfect, AEVUM și restul proiectelor.</h2>
            </div>
            <p className="section-note">
              O listă scurtă, cu linkuri directe către site-uri publicate sau cod.
            </p>
          </div>

          <div className="projects-grid secondary-projects-grid">
            {projects.map((project, index) => (
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

        <section className="section profile-section compact-profile" id="about">
          <aside className="profile-visual reveal">
            <div className="profile-visual-frame">
              <img
                className="profile-visual-image"
                src={publicAsset('lidia-editorial-walk.jpg')}
                alt="Portret editorial alb-negru cu Lidia Dobos mergând"
              />
              <div className="profile-visual-overlay">
                <span>Portofoliu</span>
                <strong>
                  <span>Lidia</span>
                  <span>Dobos</span>
                </strong>
                <p>Designer web / interfețe</p>
              </div>
            </div>
          </aside>

          <article className="profile-copy reveal delay-1">
            <p className="eyebrow">Despre</p>
            <h2>Lucrez pe proiecte web clare, moderne și ușor de prezentat.</h2>
            <p>
              Vin din design grafic și comunicare vizuală, iar în portofoliu combin
              designul de interfață cu implementarea în browser.
            </p>

            <div className="profile-facts">
              <article className="fact-card">
                <span>Bază</span>
                <strong>România / La distanță</strong>
              </article>
              <article className="fact-card">
                <span>Proiecte</span>
                <strong>Website-uri, portofolii, interfețe de produs</strong>
              </article>
            </div>
          </article>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow">Abilități</p>
              <h2>Ce folosesc în proiecte.</h2>
            </div>
            <p className="section-note">
              Design, implementare și livrare într-o formă simplă de parcurs.
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
            <h2>Contact pentru proiecte web sau interfețe de produs.</h2>
            <p>
              Pentru o colaborare în România sau la distanță, poți trimite un email,
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

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+40740334757">
                Sună-mă
              </a>
              <a className="button button-primary" href="mailto:lidiadobos03@gmail.com">
                Trimite email
              </a>
            </div>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <p>Lidia Dobos</p>
        <span>{currentYear} designer web, designer de interfețe</span>
      </footer>
    </div>
  )
}

export default App
