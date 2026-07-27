import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const statusLabels = {
  production: 'Production',
  ongoing: 'In Development',
  experiments: 'Experiment',
  completed: 'Completed',
};

export default function ProjectRow({ project }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      onKeyDown={(e) =>
        (e.key === 'Enter' || e.key === ' ') &&
        navigate(`/projects/${project.id}`)
      }
      role="button"
      tabIndex={0}
      className="group -mx-2 cursor-pointer rounded-lg border border-transparent px-2 py-2.5 transition-all duration-200 ease-out hover:border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-bg-raised)/0.4)] hover:pl-3"
    >
      <div className="mb-0.5 flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <h3
            className="text-sm font-medium"
            style={{ color: 'rgb(var(--color-text))' }}
          >
            {project.title}
          </h3>
          <ArrowRight
            size={12}
            className="shrink-0 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
            style={{ color: 'rgb(var(--color-text-faint))' }}
          />
        </div>
        {project.category && (
          <span
            className="shrink-0 font-mono text-[10px] uppercase tracking-wider"
            style={{ color: 'rgb(var(--color-text-faint))' }}
          >
            {statusLabels[project.category] || project.category}
          </span>
        )}
      </div>
      <p
        className="mb-1 text-sm leading-relaxed"
        style={{ color: 'rgb(var(--color-text-muted))' }}
      >
        {project.tagline}
      </p>
      <p
        className="font-mono text-xs"
        style={{ color: 'rgb(var(--color-text-faint))' }}
      >
        {project.tech.slice(0, 4).join('  ·  ')}
      </p>
    </div>
  );
}
