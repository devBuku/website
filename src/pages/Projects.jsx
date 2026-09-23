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
        <header className="section-block !border-0 !pb-16 !pt-0 sm:!pb-20">
          <p className="eyebrow">01 / selected work</p>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
              Things I&apos;ve built, shipped, and learned from.
            </h1>
            <p className="text-muted max-w-xs text-lg leading-relaxed">
              A collection of systems, experiments, and interfaces built from
              real problems.
            </p>
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
