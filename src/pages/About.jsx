import { Link } from "react-router-dom";
import { ArrowLeft, Download, Mail, MapPin } from "lucide-react";
import { personal } from "../data/personal";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import SkillSection from "../components/SkillSection";
import Card from "../components/Card";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <ScrollReveal>
        <section className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70 mb-6"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
          <SectionHeading>About</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--color-text-muted))" }}>
                I&apos;m a final-year Computer Science & Engineering student at Swami Vivekananda
                Institute of Science & Technology (MAKAUT), Kolkata. I&apos;ve completed my 8th
                semester (result pending) and am actively preparing for software engineering
                internships and full-time roles.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--color-text-muted))" }}>
                I focus on backend engineering, full-stack development, and building production-ready
                systems. My current preparation covers DSA, Core CS fundamentals (OS, DBMS, Computer
                Networks, OOP), and full-stack web development — while continuously learning modern
                technologies and best practices.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--color-text-muted))" }}>
                I was a Smart India Hackathon 2023 Finalist and currently serve as Group Leader of
                my institute&apos;s Coding Club, where I mentor juniors and organize technical
                workshops. I daily-drive Arch Linux with i3wm, develop in Neovim, and enjoy
                optimizing my workflow as much as building software.
              </p>

              <div
                className="mt-6 pt-6 border-t"
                style={{ borderColor: "rgb(var(--color-border))" }}
              >
                <h3
                  className="text-xs font-mono uppercase tracking-wider mb-3"
                  style={{ color: "rgb(var(--color-text-faint))" }}
                >
                  Education
                </h3>
                <p className="text-sm font-medium">{personal.about.education.degree}</p>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "rgb(var(--color-text-muted))" }}
                >
                  {personal.about.education.institution}
                </p>
                <p
                  className="font-mono text-xs mt-0.5"
                  style={{ color: "rgb(var(--color-text-faint))" }}
                >
                  {personal.about.education.period}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {personal.about.education.coursework.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center px-2 py-0.5 text-xs font-mono rounded border"
                      style={{
                        borderColor: "rgb(var(--color-border))",
                        color: "rgb(var(--color-text-muted))",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <Card className="p-4">
                <h3
                  className="text-xs font-mono uppercase tracking-wider mb-3"
                  style={{ color: "rgb(var(--color-text-faint))" }}
                >
                  Currently Seeking
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--color-text-muted))" }}>
                  Software engineering internships and entry-level SDE roles starting August 1.
                  Open to backend, full-stack, and systems-related positions.
                </p>
              </Card>

              <Card className="p-4">
                <h3
                  className="text-xs font-mono uppercase tracking-wider mb-3"
                  style={{ color: "rgb(var(--color-text-faint))" }}
                >
                  Quick Links
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    href={personal.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  >
                    <Download size={14} />
                    Download Resume
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="btn-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  >
                    <Mail size={14} />
                    Send Email
                  </a>
                </div>
              </Card>

              <Card className="p-4">
                <h3
                  className="text-xs font-mono uppercase tracking-wider mb-3"
                  style={{ color: "rgb(var(--color-text-faint))" }}
                >
                  Dev Setup
                </h3>
                <div className="space-y-1.5">
                  {Object.entries(personal.about.devSetup).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span style={{ color: "rgb(var(--color-text-faint))" }}>
                        {key}
                      </span>
                      <span style={{ color: "rgb(var(--color-text-muted))" }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section className="mb-16">
          <SectionHeading>Skills</SectionHeading>
          <SkillSection />
        </section>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <section>
          <SectionHeading>Achievements</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personal.achievements.map((ach, i) => (
              <div key={i} className="card p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-semibold"
                    style={{
                      backgroundColor: "rgb(var(--color-accent-muted) / 0.2)",
                      color: "rgb(var(--color-accent))",
                    }}
                  >
                    {ach.icon === "Trophy" ? "SIH" : "CLB"}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">{ach.title}</h3>
                    <p
                      className="font-mono text-[10px] uppercase tracking-wider mt-0.5"
                      style={{ color: "rgb(var(--color-text-faint))" }}
                    >
                      {ach.date}
                    </p>
                    <p
                      className="text-xs leading-relaxed mt-1.5"
                      style={{ color: "rgb(var(--color-text-muted))" }}
                    >
                      {ach.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
