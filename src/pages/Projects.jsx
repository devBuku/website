import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";

const flagshipIds = [
  "quickbute",
  "vagdevi",
  "swarlipi",
  "uber-clone",
  "device-tracker",
];

const flagshipProjects = flagshipIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean);

const otherProjects = projects.filter(
  (p) => !flagshipIds.includes(p.id)
);

function BrowserMockup({ project, className }) {
  const seed = project.title
    .split("")
    .reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue1 = seed % 360;
  const hue2 = (hue1 + 45) % 360;

  return (
    <div
      className={`${className} rounded-xl overflow-hidden border`}
      style={{ borderColor: "rgb(var(--color-border))" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5 border-b"
        style={{
          backgroundColor: "rgb(var(--color-bg-overlay) / 0.6)",
          borderColor: "rgb(var(--color-border))",
        }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span
          className="ml-3 text-[10px] font-mono truncate max-w-[180px] opacity-40"
          style={{ color: "rgb(var(--color-text))" }}
        >
          {project.title.toLowerCase().replace(/\s+/g, "")}.vercel.app
        </span>
      </div>
      {/* Content area */}
      <div
        className="flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, hsl(${hue1}, 18%, 14%), hsl(${hue2}, 12%, 10%))`,
          minHeight: "inherit",
        }}
      >
        <span
          className="text-2xl sm:text-3xl font-bold tracking-tight opacity-20 select-none"
          style={{ color: "rgb(var(--color-text))" }}
        >
          {project.title
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 4)
            .toUpperCase()}
        </span>
      </div>
    </div>
  );
}

function ProjectScreenshot({ project }) {
  if (project.image) {
    return (
      <div
        className="rounded-xl overflow-hidden border"
        style={{
          borderColor: "rgb(var(--color-border))",
          boxShadow: "0 4px 24px rgb(0 0 0 / 0.2)",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    );
  }

  return <BrowserMockup project={project} className="w-full h-full" />;
}

function StatusBadge({ project }) {
  if (project.ongoing) {
    return (
      <span
        className="inline-flex items-center px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded border shrink-0"
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
        className="inline-flex items-center px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded border shrink-0"
        style={{
          borderColor: "rgb(var(--color-accent) / 0.3)",
          color: "rgb(var(--color-accent))",
        }}
      >
        {project.tag}
      </span>
    );
  }
  return null;
}

function TechPill({ tech }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 text-xs font-mono rounded-md border"
      style={{
        borderColor: "rgb(var(--color-border))",
        color: "rgb(var(--color-text-muted))",
        backgroundColor: "rgb(var(--color-bg-overlay) / 0.5)",
      }}
    >
      {tech}
    </span>
  );
}

function FlagShipSection({ project, imageOnRight }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 sm:mb-20 last:mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div className={`${imageOnRight ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative">
            <ProjectScreenshot project={project} />
          </div>
        </div>

        {/* Content */}
        <div className={`${imageOnRight ? "lg:order-1" : "lg:order-2"}`}>
          <div className="flex items-start gap-3 mb-3">
            <h2
              className="text-xl sm:text-2xl font-bold tracking-tight"
            >
              {project.title}
            </h2>
            <StatusBadge project={project} />
          </div>
          <p
            className="text-sm leading-relaxed mb-5"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            {project.description}
          </p>

          {/* Features */}
          <ul className="space-y-1.5 mb-5">
            {project.highlights.slice(0, 5).map((h, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm"
                style={{ color: "rgb(var(--color-text-muted))" }}
              >
                <Check
                  size={14}
                  className="shrink-0 mt-0.5"
                  style={{ color: "rgb(var(--color-accent))" }}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <TechPill key={t} tech={t} />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg"
              >
                <FaGithub size={15} />
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
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            <Link
              to={`/projects/${project.id}`}
              className="btn-ghost inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg"
            >
              Case Study <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function OtherProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="card flex flex-col sm:flex-row overflow-hidden group"
    >
      {/* Thumbnail */}
      <div className="w-full sm:w-[140px] h-28 sm:h-auto shrink-0 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: (() => {
                const seed = project.title
                  .split("")
                  .reduce((a, c) => a + c.charCodeAt(0), 0);
                return `linear-gradient(135deg, hsl(${seed % 360}, 18%, 14%), hsl(${(seed + 45) % 360}, 12%, 10%))`;
              })(),
            }}
          >
            <span
              className="text-lg font-bold tracking-tight opacity-20 select-none"
              style={{ color: "rgb(var(--color-text))" }}
            >
              {project.title
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 3)
                .toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-bold leading-tight group-hover:opacity-70 transition-opacity">
            {project.title}
          </h3>
          {project.ongoing && (
            <span
              className="shrink-0 inline-flex items-center px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded border"
              style={{
                borderColor: "rgb(var(--color-accent) / 0.3)",
                color: "rgb(var(--color-accent))",
              }}
            >
              Dev
            </span>
          )}
        </div>
        <p
          className="text-xs line-clamp-2 mb-2"
          style={{ color: "rgb(var(--color-text-muted))" }}
        >
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1 items-center">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono rounded border"
              style={{
                borderColor: "rgb(var(--color-border))",
                color: "rgb(var(--color-text-faint))",
              }}
            >
              {t}
            </span>
          ))}
          {project.github && project.github !== "#" && (
            <span
              className="inline-flex items-center gap-1 ml-auto text-[10px] font-mono opacity-40 group-hover:opacity-70 transition-opacity"
              style={{ color: "rgb(var(--color-text))" }}
            >
              <FaGithub size={11} />
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function Divider() {
  return (
    <div
      className="h-px w-full mb-16 sm:mb-20"
      style={{ backgroundColor: "rgb(var(--color-border))" }}
    />
  );
}

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      {/* Header */}
      <ScrollReveal>
        <section className="mb-16 sm:mb-20">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70 mb-6"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Projects
          </h1>
          <p
            className="text-sm leading-relaxed max-w-lg mt-3"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            A collection of projects showcasing backend engineering, full-stack
            development, AI, and production-ready applications.
          </p>
        </section>
      </ScrollReveal>

      {/* Flagship Projects */}
      {flagshipProjects.map((project, i) => (
        <div key={project.id}>
          <FlagShipSection
            project={project}
            imageOnRight={i % 2 === 0}
          />
          {i < flagshipProjects.length - 1 && <Divider />}
        </div>
      ))}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="mt-20">
          <Divider />
          <div className="mb-8 sm:mb-10">
            <SectionHeading>Other Projects</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 60}>
                <OtherProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
