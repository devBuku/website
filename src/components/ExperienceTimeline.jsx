import { experience } from "../data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {experience.map((exp, i) => (
        <div key={i} className="relative pl-8 sm:pl-10">
          <div
            className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border"
            style={{
              borderColor: "rgb(var(--color-text-faint) / 0.5)",
              backgroundColor: "rgb(var(--color-bg))",
            }}
          />
          {i < experience.length - 1 && (
            <div
              className="absolute left-[4.5px] top-4 bottom-0 w-px"
              style={{ backgroundColor: "rgb(var(--color-border))" }}
            />
          )}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
              <h3 className="text-lg font-bold tracking-tight">{exp.role}</h3>
              <span
                className="font-mono text-xs"
                style={{ color: "rgb(var(--color-text-faint))" }}
              >
                {exp.period}
              </span>
            </div>
            <p
              className="text-sm font-medium mb-4"
              style={{ color: "rgb(var(--color-text-muted))" }}
            >
              {exp.company}
            </p>
            <p
              className="text-sm leading-relaxed mb-5 max-w-2xl"
              style={{ color: "rgb(var(--color-text-muted))" }}
            >
              {exp.description}
            </p>
            <ul className="space-y-1.5 mb-5">
              {exp.highlights.map((h, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-sm"
                  style={{ color: "rgb(var(--color-text-muted))" }}
                >
                  <span
                    className="shrink-0 mt-0.5 font-mono text-xs"
                    style={{ color: "rgb(var(--color-text-faint))" }}
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
                  className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono rounded border"
                  style={{
                    borderColor: "rgb(var(--color-border))",
                    color: "rgb(var(--color-text-faint))",
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
