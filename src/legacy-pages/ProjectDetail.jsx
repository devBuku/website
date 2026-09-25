'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import ProjectPlaceholder from '../components/ProjectPlaceholder';

const labels = {
  production: 'Production',
  ongoing: 'In development',
  experiments: 'Experiment',
  completed: 'Completed',
};

function DetailSection({ number, title, children }) {
  return (
    <section className="detail-section">
      <div className="detail-section-label">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      <div className="detail-section-content">{children}</div>
    </section>
  );
}

function DetailList({ items }) {
  return (
    <ul className="detail-list">
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return (
      <main className="document-shell flex min-h-[70vh] items-center justify-center text-center">
        <Helmet>
          <title>Project not found — devBuku</title>
        </Helmet>
        <div>
          <p className="eyebrow">404 / project</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em]">
            Nothing here.
          </h1>
          <Link href="/work" className="btn btn-outline mt-8">
            <ArrowLeft data-icon="inline-start" /> Back to work
          </Link>
        </div>
      </main>
    );
  }

  const repositories = [
    project.githubBackend && project.id !== 'college-erp'
      ? ['Backend', project.githubBackend]
      : null,
    project.githubFrontend && project.id !== 'college-erp'
      ? ['Frontend', project.githubFrontend]
      : null,
    project.github && project.github !== '#' && project.id !== 'college-erp'
      ? ['Repository', project.github]
      : null,
  ].filter(Boolean);

  return (
    <main className="document-shell project-detail-page">
      <Helmet>
        <title>{project.title} — devBuku Projects</title>
        <meta
          name="description"
          content={`${project.tagline}. ${project.description.slice(0, 120)}`}
        />
      </Helmet>

      <div className="detail-topline">
        <Link href="/work" className="back-link">
          <ArrowLeft data-icon="inline-start" /> All work
        </Link>
        <span className="mono-label">Case study / {project.id}</span>
      </div>

      <header className="detail-hero">
        <div className="detail-hero-copy">
          <div className="detail-kicker">
            <span className="detail-number">01</span>
            <span className="detail-status">
              {labels[project.category] || project.category}
            </span>
          </div>
          <h1>{project.title}</h1>
          <p>{project.tagline}</p>
          <div className="detail-actions">
            {repositories.map(([label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaGithub data-icon="inline-start" /> {label}{' '}
                <ArrowUpRight data-icon="inline-end" />
              </a>
            ))}
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <ExternalLink data-icon="inline-start" /> Live demo
              </a>
            )}
          </div>
        </div>
        <div className="detail-meta-card">
          <span className="mono-label">At a glance</span>
          <div className="detail-meta-row">
            <span>Role</span>
            <strong>Full-stack developer</strong>
          </div>
          <div className="detail-meta-row">
            <span>Status</span>
            <strong>{labels[project.category] || project.category}</strong>
          </div>
          <div className="detail-meta-row">
            <span>Stack</span>
            <strong>{project.tech.slice(0, 3).join(' · ')}</strong>
          </div>
        </div>
      </header>

      <div className="detail-media">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} />
        ) : (
          <ProjectPlaceholder project={project} />
        )}
      </div>

      <div className="detail-layout">
        <div>
          <DetailSection number="02" title="Overview">
            <p className="detail-lede">{project.description}</p>
          </DetailSection>
          {project.problem && (
            <DetailSection number="03" title="The problem">
              <p>{project.problem}</p>
            </DetailSection>
          )}
          {project.architecture && (
            <DetailSection number="04" title="How it works">
              <p>{project.architecture}</p>
            </DetailSection>
          )}
          {project.highlights?.length > 0 && (
            <DetailSection number="05" title="What I shipped">
              <DetailList items={project.highlights} />
            </DetailSection>
          )}
          {project.results && (
            <DetailSection number="06" title="Outcome">
              <p className="detail-lede">{project.results}</p>
            </DetailSection>
          )}
          {project.lessonsLearned?.length > 0 && (
            <DetailSection number="07" title="What I learned">
              <DetailList items={project.lessonsLearned} />
            </DetailSection>
          )}
        </div>
        <aside className="detail-aside">
          <div className="detail-aside-card">
            <span className="mono-label">Built with</span>
            <div className="stack-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          {project.engineeringDecisions?.length > 0 && (
            <div className="detail-aside-card">
              <span className="mono-label">Selected decisions</span>
              <div className="decision-list">
                {project.engineeringDecisions.map((item) => (
                  <div key={item.decision}>
                    <strong>{item.decision}</strong>
                    <p>{item.rationale}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      <footer className="detail-footer">
        <Link href="/work" className="back-link">
          <ArrowLeft data-icon="inline-start" /> Back to all work
        </Link>
      </footer>
    </main>
  );
}
