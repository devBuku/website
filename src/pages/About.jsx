import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { personal } from "../data/personal";
import { skillCategories } from "../data/skills";
import Tag from "../components/Tag";
import Card from "../components/Card";
import NeofetchCard from "../components/NeofetchCard";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <ScrollReveal>
        <section className="mb-16">
          <Link to="/" className="inline-flex items-center gap-1.5 font-mono text-xs opacity-50 hover:opacity-100 transition-opacity mb-6">
            <HiOutlineArrowLeft size={14} />
            Back to home
          </Link>
          <SectionHeading>About</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-4">
              {personal.about.intro.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed opacity-80">
                  {p}
                </p>
              ))}

              <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgb(var(--color-border))" }}>
                <h3 className="font-mono text-xs uppercase tracking-wider opacity-50 mb-3">
                  Education
                </h3>
                <p className="text-sm font-medium">{personal.about.education.degree}</p>
                <p className="text-sm opacity-60 mt-0.5">{personal.about.education.institution}</p>
                <p className="font-mono text-xs opacity-40 mt-0.5">{personal.about.education.period}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {personal.about.education.coursework.map((c) => (
                    <Tag key={c}>{c}</Tag>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <NeofetchCard setup={personal.about.devSetup} />

              <Card className="p-4">
                <h3 className="font-mono text-xs uppercase tracking-wider opacity-50 mb-3">
                  Currently Seeking
                </h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Backend or full-stack engineering opportunities — internships and entry-level SDE roles.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-mono text-xs uppercase tracking-wider opacity-50 mb-3">
                  Quick Links
                </h3>
                <div className="flex flex-wrap gap-2">
                  <a href={personal.resume} download className="btn btn-primary text-xs px-3 py-1.5">
                    Download Resume
                  </a>
                  <a href={`mailto:${personal.email}`} className="btn btn-outline text-xs px-3 py-1.5">
                    Send Email
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section className="mb-16">
          <SectionHeading>Full Stack</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((cat) => (
              <Card key={cat.name} className="p-4">
                <h3 className="font-mono text-xs uppercase tracking-wider mb-2.5 opacity-50">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <section>
          <SectionHeading>Achievements</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personal.achievements.map((ach, i) => (
              <Card key={i} className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 font-mono text-xs"
                    style={{ backgroundColor: "rgb(var(--color-accent-muted) / 0.2)", color: "rgb(var(--color-accent))" }}>
                    {ach.icon === "Trophy" ? "SIH" : "CLB"}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">{ach.title}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-wider opacity-40 mt-0.5">
                      {ach.date}
                    </p>
                    <p className="text-xs leading-relaxed opacity-70 mt-1.5">
                      {ach.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
