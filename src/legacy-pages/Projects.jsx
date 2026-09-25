'use client';

import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../data/projects';
import ScrollReveal from '../components/ScrollReveal';

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
            <Link className="back-link" href="/">
              <ArrowLeft data-icon="inline-start" /> Home
            </Link>
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
      <div className="work-index">
        {grouped.map((group, groupIndex) => (
          <section className="work-group" key={group.label}>
            <ScrollReveal delay={groupIndex * 50}>
              <div className="work-group-heading">
                <span>{String(groupIndex + 1).padStart(2, '0')}</span>
                <h2>{group.label}</h2>
                <span>
                  {String(group.items.length).padStart(2, '0')} projects
                </span>
              </div>
            </ScrollReveal>
            <div className="work-project-list">
              {group.items.map((project, index) => (
                <ScrollReveal
                  key={project.id}
                  delay={groupIndex * 50 + index * 40}
                >
                  <Link
                    className="work-project-item"
                    href={`/projects/${project.id}`}
                  >
                    <span className="work-project-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="work-project-main">
                      <span className="work-project-title">
                        {project.title}
                      </span>
                      <span className="work-project-description">
                        {project.tagline}
                      </span>
                      <span className="work-project-tech">
                        {project.tech.slice(0, 5).join(' · ')}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="work-project-arrow"
                      size={18}
                      aria-hidden="true"
                    />
                  </Link>
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
          <p className="eyebrow">more from the portfolio</p>
          <h2>Back to the beginning.</h2>
          <Link href="/" className="btn btn-outline mt-8">
            Return home <ArrowUpRight data-icon="inline-end" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
