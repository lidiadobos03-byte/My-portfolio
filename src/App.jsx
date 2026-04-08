import { useEffect, useState } from 'react'
import './App.css'

const quickStats = [
  {
    value: '5+ years',
    label: 'in digital design, UI/UX, and visual communication',
  },
  {
    value: '11 public repos',
    label: 'visible GitHub work across interfaces, showcases, and backend practice',
  },
  {
    value: 'Remote-ready',
    label: 'clear communication and organized delivery for distributed collaboration',
  },
]

const highlights = [
  {
    title: 'Visual design with UX clarity',
    text: 'I care about how a product feels at first glance, but also about how easily someone can move through it and trust it.',
  },
  {
    title: 'Design-to-build mindset',
    text: 'I enjoy work that moves from concept and wireframe into responsive front-end implementation, not just presentation visuals.',
  },
  {
    title: 'Strong client collaboration',
    text: 'My background combines design execution, client support, and remote teamwork, which helps me keep projects practical and well paced.',
  },
]

const projects = [
  {
    code: '01',
    title: 'WebCraft',
    featured: true,
    type: 'Premium web showcase',
    year: '2024 - Present',
    role: 'UI/UX + front-end',
    summary:
      'Designed and built a premium static portfolio for WebCraft with four distinct concepts for restaurant, corporate, fashion e-commerce, and legal niches.',
    impact:
      'The project combines responsive landing pages, vanilla JavaScript interactions, async forms, and basic SEO structure across a polished multi-page showcase.',
    stack: ['HTML5', 'CSS', 'JavaScript', 'Responsive design'],
    accent: '#a9647e',
    links: [
      {
        label: 'Live site',
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
    type: 'Product concept',
    year: '2026',
    role: 'Product design + architecture',
    summary:
      'A full-stack CV platform concept structured with a Next.js frontend and a Node/Express backend prepared for payments, PDF workflows, and deployment.',
    impact:
      'The repository outlines reusable components, app routes, backend utilities, Stripe integration points, and a scalable product direction for a digital CV service.',
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
    code: '03',
    title: 'Task Manager API',
    type: 'Backend portfolio project',
    year: '2026',
    role: 'API design + structure',
    summary:
      'A REST API built with Java 17 and Spring Boot for task management, including layered architecture, validation, filtering, Swagger, H2, and tests.',
    impact:
      'It shows my portfolio is expanding beyond interface work into structured backend projects with documentation, clear API design, and real development discipline.',
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

const webcraftDirections = [
  'Restaurant hospitality',
  'Corporate consulting',
  'Fashion e-commerce',
  'Legal premium',
]

const webcraftMetrics = [
  {
    label: 'Creative range',
    value: '4 distinct visual directions',
  },
  {
    label: 'Build style',
    value: 'Responsive static implementation',
  },
  {
    label: 'Focus',
    value: 'Polish, clarity, and conversion',
  },
]

const careerHighlights = [
  {
    step: '2021',
    title: 'Magic Advertising',
    text: 'Worked as Graphic Designer and Client Support, creating responsive visuals for web campaigns, digital materials, and interface-related assets while collaborating with development teams.',
  },
  {
    step: '2018',
    title: 'Aqua Dental Clinic',
    text: 'Worked as an Operational Coordinator in London, strengthening communication, organization, and client-facing collaboration in an international environment.',
  },
  {
    step: 'Now',
    title: 'Design with implementation in mind',
    text: 'My current focus is web design, UI/UX, and front-end work that is accessible, conversion-aware, and ready to move from concept into production.',
  },
]

const skillGroups = [
  {
    title: 'Design and UX',
    items: ['UI/UX Design', 'Web Design', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    title: 'Front-end tools',
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'React'],
  },
  {
    title: 'Product and delivery',
    items: ['Accessibility', 'UX Research', 'CRO mindset', 'Client communication', 'Remote collaboration'],
  },
]

const contactLinks = [
  {
    label: 'Phone',
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
    label: 'Selected live project',
    value: 'webcraft.cvperfect.online',
    href: 'https://webcraft.cvperfect.online',
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
            <span>Web Designer / UI/UX Designer</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="section hero-section" id="top">
          <div className="hero-panel reveal">
            <div className="panel-orbit panel-orbit-one" aria-hidden="true" />
            <div className="panel-orbit panel-orbit-two" aria-hidden="true" />

            <p className="panel-label">Romania / Open to remote work</p>
            <h2>
              Quiet luxury, visual clarity, and digital presence shaped with
              intent.
            </h2>
            <p className="panel-copy">
              I work where interface design, content rhythm, and front-end execution
              meet, with close attention to accessibility, elegance, and trust.
            </p>

            <div className="hero-visual-stage">
              <div className="hero-visual-mist" aria-hidden="true" />
              <article className="hero-editorial-card">
                <span>Signature presence</span>
                <strong>Poised, polished, and human at first glance.</strong>
                <p>
                  Websites, portfolios, and interface work shaped to feel elevated,
                  warm, and immediately credible.
                </p>
              </article>

              <div className="hero-ribbon">
                <span>Selected focus</span>
                <strong>
                  Editorial websites, premium portfolios, and thoughtful interface systems
                </strong>
              </div>

              {heroPortraitError ? (
                <div
                  className="hero-portrait-fallback"
                  role="img"
                  aria-label="Portrait placeholder for Lidia Dobos"
                >
                  <span>LD</span>
                </div>
              ) : (
                <img
                  className="hero-portrait-close-image"
                  src={publicAsset('lidia-portrait-fashion-cutout.png')}
                  alt="Editorial portrait of Lidia Dobos"
                  onError={() => setHeroPortraitError(true)}
                />
              )}
            </div>

            <ul className="stack-list" aria-label="Primary stack">
              <li>Figma</li>
              <li>UI/UX Design</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>React</li>
              <li>Accessibility</li>
            </ul>

            <div className="mini-note">
              <span>Selected focus</span>
              <strong>premium interfaces, responsive systems, thoughtful delivery</strong>
            </div>
          </div>

          <div className="hero-copy reveal delay-1">
            <p className="eyebrow">Editorial Web Designer / UI-UX Designer</p>
            <h1 className="hero-title">A more editorial kind of digital presence.</h1>
            <p className="hero-text">
              I shape websites, interfaces, and personal brands with a fashion-editorial
              eye, balancing polish, atmosphere, and clarity so the final result feels
              refined the moment it appears on screen.
            </p>
            <p className="hero-note">
              The project closest to my heart is <strong>WebCraft</strong>, a
              premium showcase built to present multiple visual directions with
              clarity, polish, and strong creative identity.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                See WebCraft
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/lidiadobos03-byte"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>

            <ul className="stat-grid" aria-label="Core strengths">
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
              <p className="eyebrow">What I bring to a project</p>
              <h2>Design that is polished, usable, and ready to move forward.</h2>
            </div>
            <p className="section-note">
              My work sits between visual craft and practical delivery. I want a
              project to feel strong in presentation, but also clear enough to
              build, scale, and hand off well.
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
                <p className="eyebrow">Flagship project</p>
                <h2>WebCraft is the clearest expression of my visual voice.</h2>
              </div>
              <p className="section-note">
                It holds the strongest mix of editorial presence, niche-specific
                direction, responsive execution, and premium presentation in my
                portfolio.
              </p>
            </div>

            <div className="flagship-layout">
              <article className="flagship-story reveal delay-1">
                <p className="flagship-label">
                  {featuredProject.type} / {featuredProject.year}
                </p>
                <h3>{featuredProject.title}</h3>
                <p className="flagship-lead">
                  The project I feel most personally connected to, built to show how
                  one visual language can stretch across multiple industries without
                  losing elegance or consistency.
                </p>
                <p className="flagship-copy">{featuredProject.summary}</p>
                <p className="flagship-copy">{featuredProject.impact}</p>

                <ul className="flagship-directions" aria-label="WebCraft directions">
                  {webcraftDirections.map((direction) => (
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
                    <span>Editorial web showcase</span>
                    <strong>Four directions. One premium standard.</strong>
                    <p>
                      A polished multi-page presentation built to feel intentional,
                      immersive, and commercially aware.
                    </p>
                  </article>

                  <div className="flagship-window-grid">
                    {webcraftMetrics.map((metric) => (
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
              <p className="eyebrow">More selected work</p>
              <h2>Additional projects that extend the portfolio beyond the flagship.</h2>
            </div>
            <p className="section-note">
              These pieces show how my work expands from visual and product direction
              into structured backend practice and scalable digital concepts.
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

                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
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
                alt="Black and white editorial portrait of Lidia Dobos walking"
              />
              <div className="profile-visual-overlay">
                <span>Editorial frame</span>
                <strong>
                  <span>Lidia</span>
                  <span>Dobos</span>
                </strong>
                <p>Editorial Web Designer / UI-UX Designer</p>
              </div>
            </div>

            <div className="profile-visual-caption">
              <p className="eyebrow">Editorial portrait</p>
              <h3>Lidia Dobos</h3>
              <p>
                A more personal frame that brings presence, confidence, and a strong
                visual identity into the portfolio.
              </p>
            </div>
          </aside>

          <article className="profile-copy reveal delay-1">
            <p className="eyebrow">About me</p>
            <p className="profile-intro">
              Creative direction, interface clarity, and premium digital presentation.
            </p>
            <h2>A creative designer with a practical, product-focused mindset.</h2>
            <p>
              I come from a design background shaped by graphic work, client
              communication, and UI/UX thinking. What matters most to me is
              creating interfaces that feel polished, readable, and confident
              without becoming heavy or confusing.
            </p>
            <p>
              I like projects where the visual side and the functional side meet
              in a clean way. That means thoughtful hierarchy, responsive
              layouts, accessible choices, and enough structure for the work to
              move smoothly from concept into implementation.
            </p>

            <div className="profile-quote">
              <span>Design approach</span>
              <strong>
                I want the work to feel elegant at first glance and trustworthy
                the moment someone starts using it.
              </strong>
            </div>

            <div className="profile-facts">
              <article className="fact-card">
                <span>Base</span>
                <strong>Romania / Remote</strong>
              </article>
              <article className="fact-card">
                <span>Languages</span>
                <strong>Romanian, English</strong>
              </article>
              <article className="fact-card">
                <span>Strength</span>
                <strong>UI clarity + premium presentation</strong>
              </article>
              <article className="fact-card">
                <span>Best fit</span>
                <strong>Websites, portfolios, product interfaces</strong>
              </article>
            </div>

            <div className="profile-signoff">
              <span>Current direction</span>
              <strong>
                Premium portfolios, refined landing pages, and digital products
                that balance beauty with structure.
              </strong>
            </div>
          </article>
        </section>

        <section className="section story-section">
          <article className="story-card reveal">
            <p className="eyebrow">Experience path</p>
            <h2>From visual communication to digital products and interface work.</h2>
            <p>
              I enjoy turning dense ideas into pages and interfaces that feel
              elegant, accessible, and easy to trust. My background is rooted in
              graphic design and UI/UX, but I am most energized when the work
              also connects to real product structure and implementation.
            </p>
            <p>
              I work best on projects where design should do more than look
              good. It should guide attention, support action, and stay coherent
              from concept to execution.
            </p>
          </article>

          <div className="workflow-list">
            {careerHighlights.map((item, index) => (
              <article
                key={item.step}
                className={`workflow-card reveal delay-${Math.min(index + 1, 3)}`}
              >
                <span className="workflow-step">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow">Skills</p>
              <h2>Design, front-end craft, and product-minded delivery.</h2>
            </div>
            <p className="section-note">
              The portfolio reflects the tools and strengths already visible in my
              CV and public repositories, while staying easy to extend as new work
              is added.
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
            <h2>Open to remote collaboration, product design work, and polished web builds.</h2>
            <p>
              If you need someone who can think visually, communicate clearly,
              and help shape a digital product into something structured and
              credible, I would love to hear about it.
            </p>
          </div>

          <aside className="contact-card reveal delay-1">
            <p className="panel-label">Quick contact</p>
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

            <p className="contact-meta">Romania / Remote</p>
            <p className="contact-meta">Available for international collaboration and personal projects</p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+40740334757">
                Call me
              </a>
              <a className="button button-primary" href="mailto:lidiadobos03@gmail.com">
                Send an email
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/lidiadobos03-byte"
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile
              </a>
            </div>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <p>Lidia Dobos</p>
        <span>{currentYear} web designer, UI/UX designer, and product-focused portfolio</span>
      </footer>
    </div>
  )
}

export default App
