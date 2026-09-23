import { Helmet } from 'react-helmet-async';
import { projects } from '../data/projects';
import ScrollReveal from '../components/ScrollReveal';
import ProjectRow from '../components/ProjectRow';
import PageHeader from '../components/PageHeader';

const categoryOrder = ['production', 'completed', 'ongoing', 'experiments'];
const categoryLabels = {
  production: 'production',
  completed: 'completed',
  ongoing: 'in development',
  experiments: 'experiments',
};

export default function Projects() {
  const grouped = categoryOrder
    .map((cat) => ({
      label: categoryLabels[cat],
      items: projects.filter((p) => p.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'rgb(var(--color-bg))' }}
    >
      <Helmet>
        <title>Projects — Shubhayan Bagchi (devBuku)</title>
        <meta
          name="description"
          content="Projects by Shubhayan Bagchi (devBuku) — backend engineering, full-stack MERN apps, AI integrations, and production-ready web applications."
        />
        <meta
          property="og:title"
          content="Projects — Shubhayan Bagchi (devBuku)"
        />
        <meta
          property="og:description"
          content="A portfolio of backend and full-stack projects — MERN apps, AI integrations, and production-oriented web applications."
        />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <ScrollReveal>
          <div className="mb-16 space-y-4 sm:mb-20">
            <p
              className="eyebrow"
              style={{ color: 'rgb(var(--color-accent))' }}
            >
              portfolio
            </p>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ lineHeight: '1.1', letterSpacing: '-0.02em' }}
            >
              Projects
            </h1>
            <p
              className="max-w-2xl text-lg"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              Backend systems, full-stack applications, and production-ready web
              projects built with modern technologies.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-20 sm:space-y-24">
          {grouped.map((group, groupIndex) => (
            <section key={group.label}>
              <ScrollReveal delay={groupIndex * 50}>
                <div className="section-intro mb-8 sm:mb-12">
                  <h2
                    className="eyebrow"
                    style={{ color: 'rgb(var(--color-accent))' }}
                  >
                    {group.label}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="project-grid">
                {group.items.map((project, i) => (
                  <ScrollReveal
                    key={project.id}
                    delay={groupIndex * 50 + i * 40}
                  >
                    <ProjectRow project={project} />
                  </ScrollReveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
