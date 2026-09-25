'use client';

import { useRouter } from 'next/navigation';
import { ArrowUpRight, Code2, Library, MicVocal, Sparkles } from 'lucide-react';

const statusLabels = {
  production: 'Production',
  ongoing: 'In development',
  experiments: 'Experiment',
  completed: 'Completed',
};
const icons = { Library, Sparkles, MicVocal, Code2 };

export default function ProjectRow({ project }) {
  const router = useRouter();
  const Icon = icons[project.icon] || Code2;
  return (
    <article
      className="project-card"
      onClick={() => router.push(`/projects/${project.id}`)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ')
          router.push(`/projects/${project.id}`);
      }}
      role="button"
      tabIndex={0}
    >
      <div className="project-visual">
        <Icon size={28} strokeWidth={1.4} />
        <span>{statusLabels[project.category] || project.category}</span>
        <ArrowUpRight className="project-arrow" size={18} />
      </div>
      <div className="project-card-body">
        <div>
          <p className="project-index">
            {project.id === 'college-erp'
              ? '01'
              : project.id === 'vagdevi'
                ? '02'
                : '03'}
          </p>
          <h3>{project.title}</h3>
        </div>
        <p className="project-teaser">{project.tagline.split(' — ')[0]}</p>
        <div className="tech-pills">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
