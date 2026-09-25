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

function ExternalLink({ href, children }) {
  return (
    <a className="document-link" href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.name,
    url: window.location.origin,
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
        <div className="document-cover" aria-hidden="true">
          <span className="cover-orb cover-orb-one" />
          <span className="cover-orb cover-orb-two" />
          <span className="cover-grid" />
        </div>
        <div className="document-profile">
          <img src="/me.png" alt="" />
        </div>
        <div className="document-kicker">Portfolio / 2026</div>
        <h1>{personal.name}</h1>
        <p className="document-role">{personal.role}</p>
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
        <nav className="document-toc" aria-label="On this page">
          <span>On this page</span>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
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

        <Section id="experience" number="02" title="Experience">
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
          <div className="document-list">
            {visibleProjects.map((project) => (
              <article
                className="document-entry project-entry"
                key={project.id}
              >
                <div className="entry-date">{project.category}</div>
                <div>
                  <div className="entry-title-row">
                    <h3>{project.title}</h3>
                    <ExternalLink href={`/projects/${project.id}`}>
                      Details
                    </ExternalLink>
                  </div>
                  <p>{project.description}</p>
                  <p className="entry-stack">{project.tech.join(' · ')}</p>
                  <div className="entry-links">
                    {project.github && project.github !== '#' && (
                      <ExternalLink href={project.github}>Source</ExternalLink>
                    )}
                    {project.githubBackend && (
                      <ExternalLink href={project.githubBackend}>
                        Backend source
                      </ExternalLink>
                    )}
                    {project.githubFrontend && (
                      <ExternalLink href={project.githubFrontend}>
                        Frontend source
                      </ExternalLink>
                    )}
                  </div>
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

        <Section id="contact" number="05" title="Contact">
          <p className="contact-intro">
            If you are building something useful, I would be glad to hear about
            it.
          </p>
          <div className="contact-links">
            <a className="document-link" href={`mailto:${personal.email}`}>
              {personal.email} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            {Object.values(personal.social).map((social) => (
              <ExternalLink key={social.label} href={social.url}>
                {social.label}
              </ExternalLink>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
