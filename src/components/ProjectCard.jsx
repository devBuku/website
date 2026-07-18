import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Tag from "./Tag";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`card p-5 sm:p-6 flex flex-col ${project.ongoing ? "opacity-80" : ""}`}>
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-tight truncate">
            {project.title}
          </h3>
          {project.ongoing && (
            <span className="inline-block mt-1 font-mono text-[10px] uppercase tracking-wider opacity-50">
              In Progress
            </span>
          )}
          {project.tag && (
            <span className="inline-block mt-1 font-mono text-[10px] uppercase tracking-wider"
              style={{ color: "rgb(var(--color-accent))" }}>
              {project.tag}
            </span>
          )}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 mt-1 opacity-40 hover:opacity-100 transition-opacity"
          aria-label={expanded ? "Show less" : "Show more"}
        >
          {expanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </button>
      </div>

      <p className="text-sm leading-relaxed opacity-80 line-clamp-2">
        {project.tagline}
      </p>

      {expanded && (
        <div className="mt-3 space-y-3 animate-fade-in">
          <p className="text-sm leading-relaxed opacity-70">
            {project.description}
          </p>
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-sm opacity-70 flex gap-2">
                  <span className="opacity-50 shrink-0 font-mono">&rarr;</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="mt-auto pt-4">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline text-xs px-3 py-1.5">
              <FaGithub size={14} />
              View on GitHub
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary text-xs px-3 py-1.5">
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
