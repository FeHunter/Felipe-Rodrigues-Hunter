import { useState } from 'react'
import { usePortfolioViewModel } from '../view_models/usePortfolioViewModel'
import { CertificatePdfViewer } from './components/CertificatePdfViewer'
import './portfolio.css'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function ProjectCard({ project, copy, language }) {
  const status = project.status === 'live' ? copy.projects.live : copy.projects.inProgress
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.number} / 03</span>
        <span className={`status-pill status-${project.status}`}><span className="status-dot" />{status}</span>
      </div>
      <div className="project-card-content">
        <p className="project-kind">{project.kind.toUpperCase()}</p>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary[language]}</p>
        <div className="tag-list">
          {project.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
        </div>
        <div className="project-details">
          <p className="detail-label">{copy.projects.details}</p>
          <ul>{project.highlights[language].map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </div>
      </div>
      <div className="project-card-footer">
        <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
          {project.repository ? copy.projects.viewCode : copy.projects.viewProject} <span aria-hidden="true">↗</span>
        </a>
        {project.id === 'la-lune' && (
          <a className="quiet-link" href="https://github.com/FeHunter" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}

function TerminalCard({ copy }) {
  return (
    <div className="terminal-card" aria-label="Code-inspired illustration">
      <div className="terminal-bar">
        <div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div>
        <span>{copy.hero.terminalTitle}</span>
        <span className="terminal-lock">⌘</span>
      </div>
      <div className="terminal-code">
        <p><span className="code-muted">01</span> <span className="code-purple">{copy.hero.terminalLine1}</span></p>
        <p><span className="code-muted">02</span> <span className="code-green">{copy.hero.terminalLine2}</span></p>
        <p><span className="code-muted">03</span> <span className="code-green">{copy.hero.terminalLine3}</span></p>
        <p><span className="code-muted">04</span> <span className="code-green">{copy.hero.terminalLine4}</span></p>
        <p><span className="code-muted">05</span> <span className="code-purple">{copy.hero.terminalLine5}</span></p>
        <div className="terminal-divider" />
        <p className="code-comment">{copy.hero.terminalComment}</p>
        <p className="terminal-prompt"><span>➜</span> <span className="prompt-cursor" /></p>
      </div>
      <div className="terminal-foot"><span>BUILD / REVIEW / IMPROVE</span><span>UTF-8</span></div>
    </div>
  )
}

function CertificateCard({ certificate, copy, language, onOpenCertificate }) {
  const category = copy.certificateCategories[certificate.category] || certificate.category
  return (
    <article className="certificate-card">
      <div className="certificate-icon" aria-hidden="true">↗</div>
      <div className="certificate-meta"><span>{category}</span>{certificate.date && <span>{certificate.date}</span>}</div>
      <h3>{certificate.title}</h3>
      <p className="certificate-institution">{certificate.institution}</p>
      {certificate.description && <p>{certificate.description[language] || certificate.description}</p>}
      {certificate.skills?.length > 0 && <div className="tag-list">{certificate.skills.map((skill) => <span className="tech-tag" key={skill}>{skill}</span>)}</div>}
      <div className="certificate-links">
        {certificate.credentialUrl && <a className="text-link" href={certificate.credentialUrl} target="_blank" rel="noreferrer">{language === 'pt' ? 'Ver credencial' : 'Verify credential'} ↗</a>}
        {certificate.fileUrl && <button className="quiet-link certificate-open-button" type="button" onClick={() => onOpenCertificate(certificate)}>{language === 'pt' ? 'Abrir certificado' : 'Open certificate'} ↗</button>}
      </div>
    </article>
  )
}

export function PortfolioView() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const {
    language, theme, copy, projects, certificates, certificateCategories,
    certificateFilter, setCertificateFilter, toggleLanguage, toggleTheme,
  } = usePortfolioViewModel()

  return (
    <main className="portfolio-shell" data-theme={theme}>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Felipe Rodrigues - Hunter home"><span className="brand-symbol">H<span>.</span></span><span>Felipe Rodrigues<span className="brand-muted"> - Hunter</span></span></a>
        <nav className="main-nav" aria-label={language === 'pt' ? 'Navegação principal' : 'Main navigation'}>
          <a href="#projects">{copy.nav.projects}</a>
          <a href="#approach">{copy.nav.approach}</a>
          <a href="#certificates">{copy.nav.certificates}</a>
          <a href="#about">{copy.nav.about}</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} type="button" aria-label={theme === 'light' ? copy.theme.switchToDark : copy.theme.switchToLight} title={theme === 'light' ? copy.theme.switchToDark : copy.theme.switchToLight}>
            <span aria-hidden="true">{theme === 'light' ? '☾' : '☼'}</span>
            <span className="theme-toggle-label">{theme === 'light' ? copy.theme.dark : copy.theme.light}</span>
          </button>
          <button className="language-toggle" onClick={toggleLanguage} type="button" aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para português'}><span className="language-globe">◎</span>{copy.languageLabel}</button>
          <a className="header-contact" href="#contact">{copy.nav.contact}<span aria-hidden="true"> ↗</span></a>
        </div>
      </header>

      <section className="hero-section page-width" id="top">
        <div className="hero-copy">
          <div className="hero-availability"><span className="status-dot" />{copy.hero.available}</div>
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" />{copy.hero.eyebrow}</p>
          <h1>{copy.hero.titleStart}<br /><span>{copy.hero.titleAccent}</span></h1>
          <p className="hero-description">{copy.hero.description}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">{copy.hero.primaryCta}<span aria-hidden="true"> ↓</span></a>
            <a className="button-secondary" href="#contact">{copy.hero.secondaryCta}<span aria-hidden="true"> ↗</span></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/FeHunter" target="_blank" rel="noreferrer">GitHub ↗</a>
            <span />
            <a href="https://www.linkedin.com/in/felipe-rodrigues-silver/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <span />
            <a href="https://felipehunter.itch.io" target="_blank" rel="noreferrer">itch.io ↗</a>
          </div>
        </div>
        <TerminalCard copy={copy} />
        <div className="hero-bottom-note"><span className="scroll-mark">↓</span><span>{language === 'pt' ? 'DESLIZE PARA EXPLORAR' : 'SCROLL TO EXPLORE'}</span><span className="hero-bottom-line" /></div>
      </section>

      <section className="metrics-strip" aria-label={language === 'pt' ? 'Resumo dos projetos' : 'Project overview'}>
        <div className="metrics-inner page-width">
          {copy.metrics.map((metric, index) => <div className="metric" key={metric.label}><span className="metric-value">{metric.value}</span><span className="metric-label">{metric.label}</span>{index < 2 && <span className="metric-divider" />}</div>)}
        </div>
      </section>

      <section className="content-section page-width" id="projects">
        <SectionHeading eyebrow={copy.projects.eyebrow} title={copy.projects.title} description={copy.projects.description} />
        <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} copy={copy} language={language} />)}</div>
      </section>

      <section className="approach-section" id="approach">
        <div className="page-width approach-inner">
          <SectionHeading eyebrow={copy.approach.eyebrow} title={copy.approach.title} description={copy.approach.description} />
          <div className="pillars-grid">{copy.approach.pillars.map((pillar) => <article className="pillar-card" key={pillar.number}><span className="pillar-number">{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.description}</p><span className="pillar-arrow" aria-hidden="true">↗</span></article>)}</div>
          <div className="stack-panel"><div><p className="eyebrow">{copy.approach.stackTitle}</p><p className="stack-panel-description">{copy.approach.stackDescription}</p></div><div className="stack-panel-tags">{copy.approach.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div></div>
        </div>
      </section>

      <section className="content-section page-width certificates-section" id="certificates">
        <SectionHeading eyebrow={copy.certificates.eyebrow} title={copy.certificates.title} description={copy.certificates.description} />
        <div className="certificate-filters" role="group" aria-label={language === 'pt' ? 'Filtrar certificados' : 'Filter certificates'}>
          {certificateCategories.map((category) => <button type="button" key={category} className={certificateFilter === category ? 'filter-button active' : 'filter-button'} aria-pressed={certificateFilter === category} onClick={() => setCertificateFilter(category)}>{copy.certificates.filters[category]}</button>)}
        </div>
        {certificates.length > 0 ? <div className="certificates-grid">{certificates.map((certificate) => <CertificateCard key={certificate.id} certificate={certificate} copy={copy} language={language} onOpenCertificate={setSelectedCertificate} />)}</div> : (
          <div className="certificates-empty">
            <div className="empty-icon" aria-hidden="true">✳</div>
            <div><h3>{copy.certificates.emptyTitle}</h3><p>{copy.certificates.emptyDescription}</p><p className="empty-note">{copy.certificates.fields}</p></div>
            <span className="empty-code">certificates[]</span>
          </div>
        )}
      </section>

      {selectedCertificate && (
        <CertificatePdfViewer
          key={selectedCertificate.id}
          certificate={selectedCertificate}
          language={language}
          onClose={() => setSelectedCertificate(null)}
        />
      )}

      <section className="about-section" id="about">
        <div className="page-width about-grid">
          <div className="about-intro"><p className="eyebrow">{copy.about.eyebrow}</p><h2>{copy.about.title}</h2><p>{copy.about.description}</p></div>
          <div className="about-facts">
            <article className="about-fact"><span className="fact-index">01</span><div><h3>{copy.about.education}</h3><p>{copy.about.educationValue}</p></div></article>
            <article className="about-fact"><span className="fact-index">02</span><div><h3>{copy.about.language}</h3><p>{copy.about.languageValue}</p></div></article>
            <article className="about-fact"><span className="fact-index">03</span><div><h3>{copy.about.experience}</h3><p>{copy.about.experienceValue}</p></div></article>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="page-width footer-inner">
          <p className="eyebrow">{copy.contact.eyebrow}</p>
          <h2>{copy.contact.title}</h2>
          <p className="footer-description">{copy.contact.description}</p>
          <div className="footer-actions">
            <a className="button-primary" href="mailto:felipehunter001@gmail.com">{copy.contact.email}<span aria-hidden="true"> ↗</span></a>
            <a className="button-secondary" href="https://www.linkedin.com/in/felipe-rodrigues-silver/" target="_blank" rel="noreferrer">{copy.contact.linkedin}<span aria-hidden="true"> ↗</span></a>
            <a className="button-secondary" href="https://github.com/FeHunter" target="_blank" rel="noreferrer">{copy.contact.github}<span aria-hidden="true"> ↗</span></a>
            <a className="button-secondary" href="https://felipehunter.itch.io" target="_blank" rel="noreferrer">{copy.contact.itch}<span aria-hidden="true"> ↗</span></a>
          </div>
          <div className="footer-bottom"><a className="brand-mark" href="#top"><span className="brand-symbol">H<span>.</span></span><span>Felipe Rodrigues<span className="brand-muted"> - Hunter</span></span></a><span>{copy.contact.footer}</span><a className="back-top" href="#top">{copy.contact.backTop}</a></div>
        </div>
      </footer>
    </main>
  )
}
