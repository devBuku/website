import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import ScrollReveal from '../components/ScrollReveal';
import ProjectRow from '../components/ProjectRow';

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
    .filter((g) => g.items.length);
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>Projects — Shubhayan Bagchi (devBuku)</title>
        <meta
          name="description"
          content="Projects by Shubhayan Bagchi — backend engineering, full-stack applications, and production-ready web projects."
        />
      </Helmet>
      <ScrollReveal>
        <header className="projects-hero section-block !border-0 !pb-16 !pt-0 sm:!pb-20">
          <div className="projects-hero-top">
            <p className="eyebrow">01 / selected work</p>
            <span className="projects-count">
              {String(projects.length).padStart(2, '0')} projects
            </span>
          </div>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h1 className="projects-title max-w-4xl">
              Things I&apos;ve built, shipped, and learned from.
            </h1>
            <p className="text-muted max-w-xs text-lg leading-relaxed">
              A collection of systems, experiments, and interfaces built from
              real problems.
            </p>
          </div>
          <div className="projects-toolbelt" aria-label="Project categories">
            <span className="toolbelt-label">Browse by</span>
            {grouped.map((group) => (
              <span className="toolbelt-pill" key={group.label}>
                {group.label}{' '}
                <b>{String(group.items.length).padStart(2, '0')}</b>
              </span>
            ))}
          </div>
        </header>
      </ScrollReveal>
      <div className="space-y-20 sm:space-y-24">
        {grouped.map((group, groupIndex) => (
          <section key={group.label}>
            <ScrollReveal delay={groupIndex * 50}>
              <div className="mb-8 flex items-center gap-4">
                <p className="eyebrow !mb-0">{group.label}</p>
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: 'rgb(var(--color-border))' }}
                />
              </div>
            </ScrollReveal>
            <div className="project-grid">
              {group.items.map((project, i) => (
                <ScrollReveal key={project.id} delay={groupIndex * 50 + i * 40}>
                  <ProjectRow project={project} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        ))}
      </div>
      <ScrollReveal>
        <div
          className="closing-cta border-t"
          style={{ borderColor: 'rgb(var(--color-border))' }}
        >
          <p className="eyebrow">have a problem worth solving?</p>
          <h2>Let&apos;s make it real.</h2>
          <a href="/contact" className="btn btn-outline mt-8">
            Start a conversation <ArrowUpRight data-icon="inline-end" />
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
