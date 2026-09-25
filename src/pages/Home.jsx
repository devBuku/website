import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { personal } from '../data/personal';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { skillCategories } from '../data/skills';

const visibleProjects = projects
  .filter((project) => project.id !== 'college-erp')
  .slice(0, 5);

function Section({ id, number, title, children }) {
  return (
    <section className="document-section" id={id}>
      <div className="document-section-heading">
        <span className="document-number">{number}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.name,
    url: typeof window === 'undefined' ? '' : window.location.origin,
    jobTitle: personal.role,
    email: `mailto:${personal.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressCountry: 'IN',
    },
    sameAs: Object.values(personal.social).map((social) => social.url),
  };

  return (
    <div className="document-shell">
      <Helmet>
        <title>
          {personal.name} — {personal.role}
        </title>
        <meta
          name="description"
          content="The portfolio and resume of Shubhayan Bagchi, a backend-focused full-stack developer building reliable APIs and production-ready systems."
        />
        <meta
          property="og:title"
          content={`${personal.name} — ${personal.role}`}
        />
        <meta
          property="og:description"
          content="Backend-focused full-stack developer building reliable systems and production-ready products."
        />
        <meta property="og:image" content="/me.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="document-header">
        <div className="document-cover" aria-hidden="true" />
        <div className="document-identity">
          <div className="document-profile">
            <img src="/me.png" alt={`${personal.name} profile`} />
          </div>
          <div className="document-identity-copy">
            <div className="document-kicker">Portfolio / 2026</div>
            <h1>{personal.name}</h1>
            <p className="document-role">{personal.role}</p>
          </div>
        </div>
        <nav className="document-contact-row" aria-label="Contact information">
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
          <span aria-hidden="true">/</span>
          <a href={personal.social.github.url} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span aria-hidden="true">/</span>
          <a
            href={personal.social.linkedin.url}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">/</span>
          <a href={personal.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
        <p className="document-intro">
          I build backend systems and full-stack products that make complicated
          workflows easier to use and harder to break.
        </p>
        <div className="document-meta">
          <span>
            <MapPin size={14} aria-hidden="true" /> {personal.location}
          </span>
          <span className="document-status">
            <span className="status-dot" /> Open to software engineering roles
          </span>
        </div>
        <details className="document-jump" open>
          <summary>Jump to</summary>
          <nav aria-label="On this page">
            <a href="#skills">Skills</a>
            <a href="#recent">Recent</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </nav>
        </details>
        <div className="document-intro-block">
          {personal.about?.intro?.slice(0, 2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      <main>
        <Section id="skills" number="01" title="Skills">
          <div className="skill-list">
            {skillCategories
              .filter((category) =>
                [
                  'Languages',
                  'Frontend',
                  'Backend',
                  'Databases',
                  'Tools',
                ].includes(category.name)
              )
              .map((category) => (
                <div className="skill-row" key={category.name}>
                  <h3>{category.name}</h3>
                  <p>{category.skills.join(' · ')}</p>
                </div>
              ))}
          </div>
        </Section>

        <Section id="recent" number="02" title="Recent">
          <ul className="recent-list">
            <li>Building full-stack tools for real operational workflows.</li>
            <li>Open to software engineering roles and collaborations.</li>
            <li>
              <a href="#projects">Review the latest project work</a>.
            </li>
          </ul>
        </Section>

        <Section id="experience" number="03" title="Experience">
          <div className="document-list">
            {experience.map((entry) => (
              <article
                className="document-entry"
                key={`${entry.company}-${entry.role}`}
              >
                <div className="entry-date">{entry.period}</div>
                <div>
                  <h3>{entry.role}</h3>
                  <p className="entry-company">{entry.company}</p>
                  <ul>
                    {entry.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" number="03" title="Projects">
          <div className="home-project-previews">
            {visibleProjects.map((project, index) => (
              <article className="home-project-preview" key={project.id}>
                <a
                  className="home-project-media"
                  href={`/projects/${project.id}`}
                  aria-label={`View ${project.title} case study`}
                >
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} preview`} />
                  ) : (
                    <div
                      className="home-project-placeholder"
                      aria-hidden="true"
                    >
                      <span>
                        Project / {String(index + 1).padStart(2, '0')}
                      </span>
                      <strong>{project.title}</strong>
                    </div>
                  )}
                </a>
                <div className="home-project-info">
                  <div className="home-project-meta">
                    <span>{project.category}</span>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{project.title}</h3>
                  {project.tagline && <p>{project.tagline}</p>}
                  {Array.isArray(project.tech) && project.tech.length > 0 && (
                    <p className="entry-stack">
                      {project.tech.slice(0, 5).join(' · ')}
                    </p>
                  )}
                  <a className="document-link" href={`/projects/${project.id}`}>
                    Read case study{' '}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" number="04" title="Education">
          <p className="education-line">
            <strong>{personal.about.education.degree}</strong> ·{' '}
            {personal.about.education.institution} ·{' '}
            {personal.about.education.period}
          </p>
        </Section>
      </main>
    </div>
  );
}
