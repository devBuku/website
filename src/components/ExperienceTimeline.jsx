import { experience } from '../data/experience';

export default function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {experience.map((exp, i) => (
        <div key={i} className="relative pl-8 sm:pl-10">
          <div
            className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border"
            style={{
              borderColor: 'rgb(var(--color-text-faint) / 0.5)',
              backgroundColor: 'rgb(var(--color-bg))',
            }}
          />
          {i < experience.length - 1 && (
            <div
              className="absolute bottom-0 left-[4.5px] top-4 w-px"
              style={{ backgroundColor: 'rgb(var(--color-border))' }}
            />
          )}
          <div>
            <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
              <span
                className="font-mono text-[13px]"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                {exp.period}
              </span>
            </div>
            <p
              className="mb-4 text-base font-medium"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {exp.company}
            </p>
            <p
              className="mb-5 max-w-2xl text-base leading-relaxed"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {exp.description}
            </p>
            <ul className="mb-5 space-y-1.5">
              {exp.highlights.map((h, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-base"
                  style={{ color: 'rgb(var(--color-text-muted))' }}
                >
                  <span
                    className="mt-0.5 shrink-0 font-mono text-[13px]"
                    style={{ color: 'rgb(var(--color-text-faint))' }}
                  >
                    &rarr;
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded border px-2 py-0.5 font-mono text-[13px]"
                  style={{
                    borderColor: 'rgb(var(--color-border))',
                    color: 'rgb(var(--color-text-faint))',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
