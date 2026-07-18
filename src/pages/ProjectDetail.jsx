import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Check, Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

function StatusBadge({ project }) {
  if (project.ongoing) {
    return (
      <span
        className="inline-flex items-center px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded border"
        style={{
          borderColor: "rgb(var(--color-accent) / 0.3)",
          color: "rgb(var(--color-accent))",
        }}
      >
        In Development
      </span>
    );
  }
  if (project.tag) {
    return (
      <span
        className="inline-flex items-center px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded border"
        style={{
          borderColor: "rgb(var(--color-accent) / 0.3)",
          color: "rgb(var(--color-accent))",
        }}
      >
        {project.tag}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded border"
      style={{
        borderColor: "rgb(var(--color-accent) / 0.3)",
        color: "rgb(var(--color-accent))",
      }}
    >
      Completed
    </span>
  );
}

function ProjectPlaceholder({ title }) {
  const seed = title.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue1 = seed % 360;
  const hue2 = (hue1 + 40) % 360;

  return (
    <div
      className="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center rounded-xl"
      style={{
        background: `linear-gradient(135deg, hsl(${hue1}, 18%, 14%), hsl(${hue2}, 12%, 10%))`,
      }}
    >
      <span
        className="text-3xl sm:text-4xl font-bold tracking-tight opacity-20 select-none"
        style={{ color: "rgb(var(--color-text))" }}
      >
        {title.split(" ").map((w) => w[0]).join("").slice(0, 3).toUpperCase()}
      </span>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm font-mono" style={{ color: "rgb(var(--color-text-faint))" }}>
          Project not found.
        </p>
        <Link
          to="/work"
          className="btn-outline inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg mt-4"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      {/* Back */}
      <Link
        to="/work"
        className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70 mb-8"
        style={{ color: "rgb(var(--color-text-muted))" }}
      >
        <ArrowLeft size={14} />
        Back to projects
      </Link>

      {/* Hero Image */}
      <div
        className="rounded-xl overflow-hidden border mb-10"
        style={{
          borderColor: "rgb(var(--color-border))",
          boxShadow: "0 8px 40px rgb(0 0 0 / 0.25)",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        ) : (
          <ProjectPlaceholder title={project.title} />
        )}
      </div>

      {/* Title + Status */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            {project.title}
          </h1>
          <p
            className="text-base mt-2"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            {project.tagline}
          </p>
        </div>
        <StatusBadge project={project} />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg"
          >
            <FaGithub size={16} />
            View on GitHub
          </a>
        )}
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Description */}
          <section>
            <h2 className="text-lg font-bold mb-3">Overview</h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgb(var(--color-text-muted))" }}
            >
              {project.description}
            </p>
          </section>

          {/* Features */}
          {project.highlights && project.highlights.length > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-3">Key Features</h2>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm"
                    style={{ color: "rgb(var(--color-text-muted))" }}
                  >
                    <Check
                      size={15}
                      className="shrink-0 mt-0.5"
                      style={{ color: "rgb(var(--color-accent))" }}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tech Stack */}
          <div
            className="rounded-xl border p-5"
            style={{
              borderColor: "rgb(var(--color-border))",
              backgroundColor: "rgb(var(--color-bg-raised))",
            }}
          >
            <h3
              className="text-xs font-mono uppercase tracking-wider mb-3"
              style={{ color: "rgb(var(--color-text-faint))" }}
            >
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-mono rounded-md border"
                  style={{
                    borderColor: "rgb(var(--color-border))",
                    color: "rgb(var(--color-text-muted))",
                    backgroundColor: "rgb(var(--color-bg-overlay) / 0.5)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Category */}
          <div
            className="rounded-xl border p-5"
            style={{
              borderColor: "rgb(var(--color-border))",
              backgroundColor: "rgb(var(--color-bg-raised))",
            }}
          >
            <h3
              className="text-xs font-mono uppercase tracking-wider mb-3"
              style={{ color: "rgb(var(--color-text-faint))" }}
            >
              Category
            </h3>
            <p className="text-sm capitalize" style={{ color: "rgb(var(--color-text-muted))" }}>
              {project.category}
            </p>
          </div>

          {/* Links */}
          <div
            className="rounded-xl border p-5"
            style={{
              borderColor: "rgb(var(--color-border))",
              backgroundColor: "rgb(var(--color-bg-raised))",
            }}
          >
            <h3
              className="text-xs font-mono uppercase tracking-wider mb-3"
              style={{ color: "rgb(var(--color-text-faint))" }}
            >
              Links
            </h3>
            <div className="space-y-2">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ color: "rgb(var(--color-text-muted))" }}
                >
                  <FaGithub size={14} />
                  GitHub Repository
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ color: "rgb(var(--color-text-muted))" }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
