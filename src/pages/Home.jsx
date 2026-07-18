import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  MapPin,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { personal } from "../data/personal";
import { projects } from "../data/projects";
import { blogPosts } from "../content/blog/posts";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import SkillSection from "../components/SkillSection";
import BlogCard from "../components/BlogCard";
import ExperienceTimeline from "../components/ExperienceTimeline";

const featuredProjects = projects.filter((p) =>
  ["vagdevi", "uber-clone"].includes(p.id)
);

const collegeERP = projects.find((p) => p.id === "quickbute");

const recentPosts = blogPosts.slice(0, 3);

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 items-start">
          {/* Left */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-sm font-medium mb-2"
              style={{ color: "rgb(var(--color-accent))" }}
            >
              Hi, I&apos;m
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              {personal.name}
            </h1>
            <p
              className="text-lg sm:text-xl mt-2 font-medium"
              style={{ color: "rgb(var(--color-text-muted))" }}
            >
              {personal.role}
            </p>
            <p
              className="mt-4 text-sm leading-relaxed max-w-md"
              style={{ color: "rgb(var(--color-text-muted))" }}
            >
              {personal.tagline}
            </p>
            <p
              className="mt-2 text-sm"
              style={{ color: "rgb(var(--color-text-faint))" }}
            >
              Currently preparing for SDE internships while building full-stack applications and solving DSA.
            </p>

            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm"
              style={{ color: "rgb(var(--color-text-faint))" }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                Final-year CSE Student
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Link
                to="/work"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg"
              >
                View Projects <ArrowRight size={14} />
              </Link>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg"
              >
                Resume
              </a>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <a
                href={personal.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity"
                aria-label={personal.social.github.label}
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personal.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity"
                aria-label={personal.social.linkedin.label}
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="relative lg:mt-8"
            >
              <div
                className="w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] rounded-full overflow-hidden border-2"
                style={{
                  borderColor: "rgb(var(--color-border))",
                  boxShadow: "0 0 0 1px rgb(var(--color-accent) / 0.15), 0 8px 32px rgb(0 0 0 / 0.25)",
                }}
              >
                <img
                  src="/me.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.section {...fadeUp} className="pb-16 sm:pb-20">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden border"
          style={{
            borderColor: "rgb(var(--color-border))",
            backgroundColor: "rgb(var(--color-border))",
          }}
        >
          {[
            { value: "10+", label: "Projects" },
            { value: "SIH 2023", label: "Finalist" },
            { value: "Team Lead", label: "Experience" },
            { value: "Open", label: "to Internships" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="py-5 text-center"
              style={{ backgroundColor: "rgb(var(--color-bg))" }}
            >
              <p className="text-sm font-bold">{stat.value}</p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgb(var(--color-text-muted))" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Currently Building */}
      <motion.section {...fadeUp} className="pb-16 sm:pb-20" id="building">
        <SectionHeading>Currently Building</SectionHeading>
        <div className="card p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Solving LeetCode daily — building DSA consistency",
              "Revising Core CS — OS, DBMS, Networks, OOP",
              "Building full-stack projects with React & Node.js",
              "Learning Docker, AWS, and deployment workflows",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 text-sm"
                style={{ color: "rgb(var(--color-text-muted))" }}
              >
                <span
                  className="shrink-0 mt-0.5"
                  style={{ color: "rgb(var(--color-accent))" }}
                >
                  &rarr;
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section {...fadeUp} className="pb-16 sm:pb-20" id="projects">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="lg:col-span-2">
            <SectionHeading>Featured Projects</SectionHeading>
          </div>
          <div className="lg:col-span-2">
            <ProjectCard project={collegeERP} variant="showcase" />
          </div>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: "rgb(var(--color-accent))" }}
        >
          View all projects <ArrowRight size={12} />
        </Link>
      </motion.section>

      {/* Experience */}
      <motion.section {...fadeUp} className="pb-16 sm:pb-20" id="experience">
        <SectionHeading>Experience</SectionHeading>
        <ExperienceTimeline />
        <div className="mt-6">
          <Link
            to="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "rgb(var(--color-accent))" }}
          >
            View full experience <ArrowRight size={12} />
          </Link>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section {...fadeUp} className="pb-16 sm:pb-20" id="skills">
        <SectionHeading>Skills</SectionHeading>
        <SkillSection />
      </motion.section>

      {/* Blog */}
      <motion.section {...fadeUp} className="pb-16 sm:pb-20" id="blog">
        <SectionHeading>Blog</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "rgb(var(--color-accent))" }}
          >
            Read all posts <ArrowRight size={12} />
          </Link>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section {...fadeUp} className="pb-16 sm:pb-20" id="achievements">
        <SectionHeading>Achievements</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {personal.achievements.map((ach, i) => (
            <div key={i} className="card p-6">
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
      </motion.section>

      {/* Contact */}
      <motion.section {...fadeUp} className="pb-20 sm:pb-24" id="contact">
        <div className="card p-8 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Let&apos;s Connect
          </h2>
          <p
            className="text-sm mb-6 max-w-md mx-auto"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            I&apos;m currently looking for SDE internships starting August 1.
            If you&apos;d like to discuss opportunities or projects, feel free to reach out.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg"
            >
              <Mail size={15} />
              Get In Touch
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg"
            >
              <ExternalLink size={14} />
              Resume
            </a>
          </div>
          <div
            className="flex items-center justify-center gap-4 text-sm"
            style={{ color: "rgb(var(--color-text-faint))" }}
          >
            <a
              href={personal.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              GitHub
            </a>
            <span className="opacity-30">&middot;</span>
            <a
              href={personal.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              LinkedIn
            </a>
            <span className="opacity-30">&middot;</span>
            <a
              href={`mailto:${personal.email}`}
              className="transition-opacity hover:opacity-70"
            >
              Email
            </a>
            <span className="opacity-30">&middot;</span>
            <span>{personal.location}</span>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
