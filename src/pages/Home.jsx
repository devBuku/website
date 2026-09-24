import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Check, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import ProjectRow from '../components/ProjectRow';

const featuredProjects = ['college-erp', 'vagdevi', 'swarlipi']
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean);

const stats = [
  { value: '2026', label: 'Graduating' },
  { value: 'SIH 23', label: 'National finalist' },
  { value: '3+', label: 'Production builds' },
  { value: 'Kolkata', label: 'Based in India' },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Shubhayan Bagchi — Backend-focused full-stack developer</title>
        <meta
          name="description"
          content="Portfolio of Shubhayan Bagchi, a backend-focused full-stack developer from Kolkata building reliable APIs, products, and production-ready systems."
        />
        <meta
          property="og:title"
          content="Shubhayan Bagchi — Backend-focused full-stack developer"
        />
        <meta
          property="og:description"
          content="Backend-focused full-stack developer building reliable systems and production-ready products."
        />
        <meta property="og:image" content="/me.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="hero-grid py-16 sm:py-24 lg:py-32">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-muted mb-6 flex items-center gap-2 text-sm">
            <span className="status-dot" />
            Open to SDE internships &amp; entry-level roles
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Building the parts of the internet you{' '}
            <span className="text-accent">don&apos;t see.</span>
          </h1>
          <p className="text-muted mt-7 max-w-xl text-lg leading-relaxed sm:text-xl">
            I&apos;m Shubhayan, a final-year CS student and backend-focused
            full-stack developer. I design APIs, model data, and turn complex
            workflows into dependable products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/work" className="btn btn-primary">
              Explore projects <ArrowUpRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Let&apos;s talk
            </Link>
          </div>
          <div className="text-faint mt-8 flex items-center gap-2 text-sm">
            <MapPin size={15} /> Kolkata, India{' '}
            <span className="text-border">/</span> B.Tech CSE, 2026
          </div>
        </motion.div>
        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="portrait-frame">
            <img src="/me.png" alt="Shubhayan Bagchi" />
          </div>
          <div className="portrait-caption">
            <Sparkles size={14} /> Systems, APIs, and thoughtful interfaces
          </div>
        </motion.div>
      </section>

      <section className="stats-strip" aria-label="Highlights">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section-block" id="projects">
        <div className="section-intro">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>
              Things I&apos;ve built
              <br />
              <span className="text-muted">and learned from.</span>
            </h2>
          </div>
          <Link className="text-link" to="/work">
            View all work <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section-block" id="experience">
        <div className="section-intro">
          <div>
            <p className="eyebrow">02 / Experience</p>
            <h2>
              Where I&apos;ve
              <br />
              <span className="text-muted">put it to work.</span>
            </h2>
          </div>
          <Link className="text-link" to="/experience">
            Full experience <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="timeline">
          {experience.slice(0, 3).map((entry, index) => (
            <article className="timeline-item" key={entry.company}>
              <div className="timeline-marker">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span>{entry.period}</span>
                  <span>{entry.company}</span>
                </div>
                <h3>{entry.role}</h3>
                <ul>
                  {entry.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight}>
                      <Check size={14} />
                      {highlight.split(' — ')[0]}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <p className="eyebrow">03 / Next chapter</p>
        <h2>
          Have a problem worth
          <br />
          <span className="text-accent">building around?</span>
        </h2>
        <p className="text-muted">
          I&apos;m looking for a team where I can build useful systems and keep
          getting better at the craft.
        </p>
        <Link to="/contact" className="btn btn-primary">
          Get in touch <ArrowUpRight size={16} />
        </Link>
      </section>
    </div>
  );
}
