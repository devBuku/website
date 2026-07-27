import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import ProjectPlaceholder from '../components/ProjectPlaceholder';

function StatusBadge({ project }) {
  const labels = {
    production: 'Production',
    ongoing: 'In Development',
    experiments: 'Experiment',
    completed: 'Completed',
  };
  const label = labels[project.category];
  if (!label) return null;
  return (
    <span
      className="inline-flex items-center rounded border px-2.5 py-1 font-mono text-xs uppercase tracking-wider"
      style={{
        borderColor: 'rgb(var(--color-accent) / 0.3)',
        color: 'rgb(var(--color-accent))',
      }}
    >
      {label}
    </span>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Helmet>
          <title>Project Not Found — devBuku</title>
        </Helmet>
        <p
          className="font-mono text-sm"
          style={{ color: 'rgb(var(--color-text-faint))' }}
        >
          Project not found.
        </p>
        <Link
          to="/work"
          className="btn-outline mt-4 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>
      </div>
    );
  }

  const hasGithub =
    project.githubBackend ||
    project.githubFrontend ||
    (project.github && project.github !== '#');

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>{project.title} — devBuku Projects</title>
        <meta
          name="description"
          content={project.tagline + ' — ' + project.description.slice(0, 120)}
        />
        <meta
          property="og:title"
          content={`${project.title} — devBuku Projects`}
        />
        <meta
          property="og:description"
          content={project.tagline + '. ' + project.description.slice(0, 120)}
        />
        {project.image && (
          <meta
            property="og:image"
            content={`https://devbuku.vercel.app${project.image}`}
          />
        )}
        <meta
          property="og:url"
          content={`https://devbuku.vercel.app/projects/${project.id}`}
        />
        <meta
          name="twitter:title"
          content={`${project.title} — devBuku Projects`}
        />
        <meta name="twitter:description" content={project.tagline} />
      </Helmet>

      {/* Back */}
      <Link
        to="/work"
        className="mb-8 inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
        style={{ color: 'rgb(var(--color-text-muted))' }}
      >
        <ArrowLeft size={14} />
        Back to projects
      </Link>

      {/* Hero Image */}
      {project.image ? (
        <div
          className="mb-10 overflow-hidden rounded-xl border"
          style={{
            borderColor: 'rgb(var(--color-border))',
            boxShadow: '0 8px 40px rgb(0 0 0 / 0.25)',
          }}
        >
          <img
            src={project.image}
            alt={`${project.title} — ${project.tagline}`}
            className="h-auto w-full object-cover"
          />
        </div>
      ) : (
        <div className="mb-10">
          <ProjectPlaceholder project={project} />
        </div>
      )}

      {/* Title + Status */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {project.title}
          </h1>
          <p
            className="mt-2 text-base"
            style={{ color: 'rgb(var(--color-text-muted))' }}
          >
            {project.tagline}
          </p>
        </div>
        <StatusBadge project={project} />
      </div>

      {/* Action Buttons */}
      <div className="mb-10 flex flex-wrap items-center gap-3">
        {project.githubBackend && (
          <a
            href={project.githubBackend}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium"
          >
            <FaGithub size={16} />
            Backend Repository
          </a>
        )}
        {project.githubFrontend && (
          <a
            href={project.githubFrontend}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium"
          >
            <FaGithub size={16} />
            Frontend Repository
          </a>
        )}
        {project.github && project.github !== '#' && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium"
          >
            <FaGithub size={16} />
            View on GitHub
          </a>
        )}
        {project.live && project.live !== '#' && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        {/* Main Content */}
        <div className="space-y-10 lg:col-span-3">
          {/* Overview */}
          <section>
            <p
              className="mb-3 font-mono text-xs uppercase tracking-widest"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              overview
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {project.description}
            </p>
          </section>

          {/* Problem */}
          {project.problem && (
            <section>
              <p
                className="mb-3 font-mono text-xs uppercase tracking-widest"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                problem
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-text-muted))' }}
              >
                {project.problem}
              </p>
            </section>
          )}

          {/* Architecture */}
          {project.architecture && (
            <section>
              <p
                className="mb-3 font-mono text-xs uppercase tracking-widest"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                architecture
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-text-muted))' }}
              >
                {project.architecture}
              </p>
            </section>
          )}

          {/* Contributions */}
          {project.highlights && project.highlights.length > 0 && (
            <section>
              <p
                className="mb-3 font-mono text-xs uppercase tracking-widest"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                contributions
              </p>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm"
                    style={{ color: 'rgb(var(--color-text-muted))' }}
                  >
                    <span
                      className="mt-0.5 shrink-0 font-mono text-xs"
                      style={{ color: 'rgb(var(--color-text-faint))' }}
                    >
                      &rarr;
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Engineering Decisions */}
          {project.engineeringDecisions &&
            project.engineeringDecisions.length > 0 && (
              <section>
                <p
                  className="mb-3 font-mono text-xs uppercase tracking-widest"
                  style={{ color: 'rgb(var(--color-text-faint))' }}
                >
                  engineering decisions
                </p>
                <div className="space-y-4">
                  {project.engineeringDecisions.map((d, i) => (
                    <div key={i}>
                      <p className="mb-1 text-sm font-medium">{d.decision}</p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgb(var(--color-text-muted))' }}
                      >
                        {d.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <section>
              <p
                className="mb-3 font-mono text-xs uppercase tracking-widest"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                challenges
              </p>
              <ul className="space-y-2">
                {project.challenges.map((c, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm"
                    style={{ color: 'rgb(var(--color-text-muted))' }}
                  >
                    <span
                      className="mt-0.5 shrink-0 font-mono text-xs"
                      style={{ color: 'rgb(var(--color-text-faint))' }}
                    >
                      &rarr;
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Results */}
          {project.results && (
            <section>
              <p
                className="mb-3 font-mono text-xs uppercase tracking-widest"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                results
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-text-muted))' }}
              >
                {project.results}
              </p>
            </section>
          )}

          {/* Lessons Learned */}
          {project.lessonsLearned && project.lessonsLearned.length > 0 && (
            <section>
              <p
                className="mb-3 font-mono text-xs uppercase tracking-widest"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                lessons learned
              </p>
              <ul className="space-y-2">
                {project.lessonsLearned.map((l, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm"
                    style={{ color: 'rgb(var(--color-text-muted))' }}
                  >
                    <span
                      className="mt-0.5 shrink-0 font-mono text-xs"
                      style={{ color: 'rgb(var(--color-text-faint))' }}
                    >
                      &rarr;
                    </span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:col-span-2">
          {/* Tech Stack */}
          <div
            className="rounded-xl border p-5"
            style={{
              borderColor: 'rgb(var(--color-border))',
              backgroundColor: 'rgb(var(--color-bg-raised))',
            }}
          >
            <p
              className="mb-3 font-mono text-xs uppercase tracking-wider"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              tech stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs"
                  style={{
                    borderColor: 'rgb(var(--color-border))',
                    color: 'rgb(var(--color-text-muted))',
                    backgroundColor: 'rgb(var(--color-bg-overlay) / 0.5)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Status */}
          <div
            className="rounded-xl border p-5"
            style={{
              borderColor: 'rgb(var(--color-border))',
              backgroundColor: 'rgb(var(--color-bg-raised))',
            }}
          >
            <p
              className="mb-3 font-mono text-xs uppercase tracking-wider"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              status
            </p>
            <p
              className="text-sm capitalize"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {project.category}
            </p>
          </div>

          {/* Links */}
          <div
            className="rounded-xl border p-5"
            style={{
              borderColor: 'rgb(var(--color-border))',
              backgroundColor: 'rgb(var(--color-bg-raised))',
            }}
          >
            <p
              className="mb-3 font-mono text-xs uppercase tracking-wider"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              links
            </p>
            <div className="space-y-2">
              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ color: 'rgb(var(--color-text-muted))' }}
                >
                  <FaGithub size={14} />
                  Backend Repository
                </a>
              )}
              {project.githubFrontend && (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ color: 'rgb(var(--color-text-muted))' }}
                >
                  <FaGithub size={14} />
                  Frontend Repository
                </a>
              )}
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ color: 'rgb(var(--color-text-muted))' }}
                >
                  <FaGithub size={14} />
                  GitHub Repository
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ color: 'rgb(var(--color-text-muted))' }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {!hasGithub && (!project.live || project.live === '#') && (
                <p
                  className="text-xs"
                  style={{ color: 'rgb(var(--color-text-faint))' }}
                >
                  Repository not yet public.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
