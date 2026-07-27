import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const statusLabels = {
  production: "Production",
  ongoing: "In Development",
  experiments: "Experiment",
  completed: "Completed",
};

export default function ProjectRow({ project }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate(`/projects/${project.id}`)}
      role="button"
      tabIndex={0}
      className="group -mx-2 px-2 py-2.5 rounded-lg cursor-pointer border border-transparent transition-all duration-200 ease-out hover:bg-[rgb(var(--color-bg-raised)/0.4)] hover:border-[rgb(var(--color-border))] hover:pl-3"
    >
      <div className="flex items-start justify-between gap-2 mb-0.5">
        <div className="flex items-center gap-1.5">
          <h3
            className="text-sm font-medium"
            style={{ color: "rgb(var(--color-text))" }}
          >
            {project.title}
          </h3>
          <ArrowRight size={12} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out" style={{ color: "rgb(var(--color-text-faint))" }} />
        </div>
        {project.category && (
          <span
            className="shrink-0 text-[10px] font-mono uppercase tracking-wider"
            style={{ color: "rgb(var(--color-text-faint))" }}
          >
            {statusLabels[project.category] || project.category}
          </span>
        )}
      </div>
      <p
        className="text-sm leading-relaxed mb-1"
        style={{ color: "rgb(var(--color-text-muted))" }}
      >
        {project.tagline}
      </p>
      <p
        className="text-xs font-mono"
        style={{ color: "rgb(var(--color-text-faint))" }}
      >
        {project.tech.slice(0, 4).join("  ·  ")}
      </p>
    </div>
  );
}
