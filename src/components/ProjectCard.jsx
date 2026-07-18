import { FaGithub } from "react-icons/fa";
import { ExternalLink, Check } from "lucide-react";
import { motion } from "framer-motion";

function ProjectPlaceholder({ title, variant }) {
  const seed = title.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue1 = seed % 360;
  const hue2 = (hue1 + 40) % 360;

  return (
    <div
      className={`w-full ${variant === "showcase" ? "h-56 sm:h-72" : "h-40 sm:h-48"} flex items-center justify-center`}
      style={{
        background: `linear-gradient(135deg, hsl(${hue1}, 20%, 15%), hsl(${hue2}, 15%, 10%))`,
      }}
    >
      <span
        className="text-2xl sm:text-3xl font-bold tracking-tight opacity-20 select-none"
        style={{ color: "rgb(var(--color-text))" }}
      >
        {title.split(" ").map((w) => w[0]).join("").slice(0, 3).toUpperCase()}
      </span>
    </div>
  );
}

export default function ProjectCard({ project, variant = "default" }) {
  const isShowcase = variant === "showcase";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="card overflow-hidden"
    >
      {/* Image or Gradient Placeholder */}
      {project.image ? (
        <div className={`${isShowcase ? "h-56 sm:h-72" : "h-40 sm:h-48"} overflow-hidden`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <ProjectPlaceholder title={project.title} variant={variant} />
      )}

      <div className={isShowcase ? "p-8" : "p-6"}>
        {/* Title + Status */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className={`font-bold leading-tight ${isShowcase ? "text-2xl" : "text-lg"}`}>
            {project.title}
          </h3>
          {project.ongoing && (
            <span
              className="shrink-0 inline-flex items-center px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded border"
              style={{
                borderColor: "rgb(var(--color-accent) / 0.4)",
                color: "rgb(var(--color-accent))",
              }}
            >
              In Development
            </span>
          )}
          {project.tag && !project.ongoing && (
            <span
              className="shrink-0 inline-flex items-center px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded border"
              style={{
                borderColor: "rgb(var(--color-accent) / 0.4)",
                color: "rgb(var(--color-accent))",
              }}
            >
              {project.tag}
            </span>
          )}
        </div>

        {/* Tagline */}
        <p
          className="text-sm font-medium mb-3"
          style={{ color: "rgb(var(--color-text-muted))" }}
        >
          {project.tagline}
        </p>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "rgb(var(--color-text-muted))" }}
        >
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className={`space-y-1.5 mb-5 ${isShowcase ? "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5" : ""}`}>
            {project.highlights.slice(0, isShowcase ? 6 : 4).map((h, i) => (
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
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
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

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3">
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
            >
              <FaGithub size={15} />
              View on GitHub
            </a>
          )}
          {!project.ongoing && !project.live && (
            <span
              className="text-xs font-mono"
              style={{ color: "rgb(var(--color-text-faint))" }}
            >
              Case study coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
