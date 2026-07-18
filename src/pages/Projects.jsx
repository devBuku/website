import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

const tabs = [
  { key: "all", label: "All" },
  { key: "production", label: "Production" },
  { key: "ongoing", label: "In Development" },
  { key: "experiments", label: "Experiments" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <ScrollReveal>
        <section className="mb-12">
          <Link to="/" className="inline-flex items-center gap-1.5 font-mono text-xs opacity-50 hover:opacity-100 transition-opacity mb-6">
            <HiOutlineArrowLeft size={14} />
            Back to home
          </Link>
          <SectionHeading>Projects</SectionHeading>
          <p className="text-sm leading-relaxed opacity-70 max-w-lg">
            A selection of things I&apos;ve built — from production-grade platforms to experimental side projects.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-all duration-200 ${
                activeTab === tab.key
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
              style={{
                borderColor: activeTab === tab.key
                  ? "rgb(var(--color-accent))"
                  : "rgb(var(--color-border))",
                color: activeTab === tab.key
                  ? "rgb(var(--color-accent))"
                  : "inherit",
                backgroundColor: activeTab === tab.key
                  ? "rgb(var(--color-accent-muted) / 0.1)"
                  : "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 50}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm opacity-50 font-mono text-center py-12">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
