import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocumentDownload, HiOutlineArrowRight } from "react-icons/hi";
import { personal } from "../data/personal";
import { skillCategories } from "../data/skills";
import { projects } from "../data/projects";
import Tag from "../components/Tag";
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import NeofetchCard from "../components/NeofetchCard";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

const featuredProjects = projects.filter((p) =>
  ["quickbute", "vagdevi", "uber-clone"].includes(p.id)
);

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Hero */}
      <ScrollReveal>
        <section className="mb-20 sm:mb-28">
          <p className="terminal-prompt font-mono text-sm sm:text-base mb-3"
            style={{ color: "rgb(var(--color-accent))" }}>
            Hello, I&apos;m
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {personal.name}
          </h1>
          <p className="text-lg sm:text-xl mt-2 font-medium"
            style={{ color: "rgb(var(--color-text-muted))" }}>
            {personal.role}
          </p>
          <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "rgb(var(--color-text-muted))" }}>
            {personal.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a href={personal.social.github.url} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline text-xs">
              <FaGithub size={14} /> GitHub
            </a>
            <a href={personal.social.linkedin.url} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline text-xs">
              <FaLinkedinIn size={14} /> LinkedIn
            </a>
            <a href={`mailto:${personal.email}`}
              className="btn btn-outline text-xs">
              <HiOutlineMail size={14} /> Email
            </a>
            <a href={personal.resume} download
              className="btn btn-outline text-xs">
              <HiOutlineDocumentDownload size={14} /> Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <Link to="/work" className="btn btn-primary text-xs">
              View Projects <HiOutlineArrowRight size={14} />
            </Link>
            <Link to="/about" className="btn btn-outline text-xs">
              About Me
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal delay={100}>
        <section className="mb-20 sm:mb-28" id="skills">
          <SectionHeading>Skills</SectionHeading>
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

      {/* Featured Projects */}
      <ScrollReveal delay={150}>
        <section className="mb-20 sm:mb-28" id="projects">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/work" className="btn btn-outline text-xs">
              View All Projects <HiOutlineArrowRight size={14} />
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* About Snippet */}
      <ScrollReveal delay={200}>
        <section className="mb-20 sm:mb-28" id="about">
          <SectionHeading>About</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {personal.about.intro.slice(0, 2).map((p, i) => (
                <p key={i} className="text-sm leading-relaxed opacity-80">
                  {p}
                </p>
              ))}
              <Link to="/about"
                className="inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
                style={{ color: "rgb(var(--color-accent))" }}>
                Read more <HiOutlineArrowRight size={12} />
              </Link>
            </div>
            <NeofetchCard setup={personal.about.devSetup} />
          </div>
        </section>
      </ScrollReveal>

      {/* Achievements */}
      <ScrollReveal delay={250}>
        <section className="mb-20 sm:mb-28" id="achievements">
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

      {/* Contact */}
      <ScrollReveal delay={300}>
        <section className="mb-8" id="contact">
          <SectionHeading>Contact</SectionHeading>
          <div className="max-w-lg">
            <p className="text-sm leading-relaxed opacity-70 mb-6">
              Open to internships and entry-level SDE roles. If you have an opportunity or a project in mind, reach out.
            </p>
            <ContactForm />
            <div className="mt-6 flex items-center gap-4">
              <a href={`mailto:${personal.email}`}
                className="text-sm opacity-60 hover:opacity-100 transition-opacity font-mono text-xs">
                {personal.email}
              </a>
              <span className="opacity-20">&middot;</span>
              <span className="text-xs opacity-40 font-mono">{personal.location}</span>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
