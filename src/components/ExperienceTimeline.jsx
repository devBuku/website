import { experience } from "../data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-10">
      {experience.map((exp, i) => (
        <div key={i} className="relative pl-8 sm:pl-10">
          <div
            className="absolute left-0 top-1 w-3 h-3 rounded-full border-2"
            style={{
              borderColor: "rgb(var(--color-accent))",
              backgroundColor: "rgb(var(--color-bg))",
            }}
          />
          {i < experience.length - 1 && (
            <div
              className="absolute left-[5px] top-4 bottom-0 w-px"
              style={{ backgroundColor: "rgb(var(--color-border))" }}
            />
          )}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
              <h3 className="text-lg font-bold">{exp.role}</h3>
              <span
                className="font-mono text-xs"
                style={{ color: "rgb(var(--color-text-faint))" }}
              >
                {exp.period}
              </span>
            </div>
            <p
              className="text-sm font-semibold mb-3"
              style={{ color: "rgb(var(--color-accent))" }}
            >
              {exp.company}
            </p>
            <p
              className="text-sm leading-relaxed mb-4 max-w-2xl"
              style={{ color: "rgb(var(--color-text-muted))" }}
            >
              {exp.description}
            </p>
            <ul className="space-y-1.5 mb-4">
              {exp.highlights.map((h, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-sm"
                  style={{ color: "rgb(var(--color-text-muted))" }}
                >
                  <span
                    className="shrink-0 mt-0.5"
                    style={{ color: "rgb(var(--color-accent))" }}
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
        </div>
      ))}
    </div>
  );
}
