import { Helmet } from "react-helmet-async";
import { projects } from "../data/projects";
import ScrollReveal from "../components/ScrollReveal";
import ProjectRow from "../components/ProjectRow";
import PageHeader from "../components/PageHeader";

const categoryOrder = ["production", "completed", "ongoing", "experiments"];
const categoryLabels = {
  production: "production",
  completed: "completed",
  ongoing: "in development",
  experiments: "experiments",
};

export default function Projects() {
  const grouped = categoryOrder
    .map((cat) => ({
      label: categoryLabels[cat],
      items: projects.filter((p) => p.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <Helmet>
        <title>Projects — Shubhayan Bagchi (devBuku)</title>
        <meta
          name="description"
          content="Projects by Shubhayan Bagchi (devBuku) — backend engineering, full-stack MERN apps, AI integrations, and production-ready web applications."
        />
        <meta property="og:title" content="Projects — Shubhayan Bagchi (devBuku)" />
        <meta
          property="og:description"
          content="A portfolio of backend and full-stack projects — MERN apps, AI integrations, and production-oriented web applications."
        />
      </Helmet>

      <ScrollReveal>
        <PageHeader>Projects</PageHeader>
      </ScrollReveal>

      <div className="space-y-16 sm:space-y-20">
        {grouped.map((group) => (
          <section key={group.label}>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-6"
              style={{ color: "rgb(var(--color-text-faint))" }}
            >
              * {group.label}
            </p>
            <div className="space-y-1">
              {group.items.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 40}>
                  <ProjectRow project={project} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
