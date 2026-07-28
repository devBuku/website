import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { blogPosts } from '../content/blog/posts';
import SectionHeading from '../components/SectionHeading';
import BlogCard from '../components/BlogCard';
import ProjectRow from '../components/ProjectRow';

const teaserIds = ['college-erp', 'vagdevi', 'swarlipi'];
const teaserProjects = teaserIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean);

const recentPosts = blogPosts.slice(0, 3);

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.4 },
};

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Shubhayan Bagchi (devBuku) — Backend-Focused Developer</title>
        <meta
          name="description"
          content="Shubhayan Bagchi (devBuku) — backend-focused full-stack developer from Kolkata. REST APIs, databases, auth — I design them, model them, and implement them."
        />
        <meta
          property="og:title"
          content="Shubhayan Bagchi (devBuku) — Backend-Focused Developer"
        />
        <meta
          property="og:description"
          content="Backend-focused full-stack developer. I build the parts of the internet you don't see — and make sure they don't fall over."
        />
        <meta property="og:url" content="https://devbuku.vercel.app" />
      </Helmet>

      {/* Hero */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-10">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              {personal.name}
            </h1>
            <p
              className="mt-2 text-lg sm:text-xl"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {personal.role}
            </p>
            <p
              className="mt-5 max-w-md text-base leading-relaxed"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              I build reliable backend systems, REST APIs, authentication, and
              production-ready web applications.
            </p>
            <p
              className="mt-3 text-base leading-relaxed"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              Currently preparing for Software Engineering internships while
              building projects and documenting what I learn.
            </p>
            <p
              className="mt-4 text-base"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              Kolkata, India &bull; Final-year CSE Student
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center lg:col-span-2 lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="h-[160px] w-[160px] overflow-hidden rounded-full border sm:h-[180px] sm:w-[180px]"
              style={{ borderColor: 'rgb(var(--color-border))' }}
            >
              <img
                src="/me.jpg"
                alt="Shubhayan Bagchi — backend-focused developer and CSE student from Kolkata"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects — clickable blocks */}
      <motion.section {...fadeUp} className="pb-14" id="projects">
        <p
          className="mb-5 font-mono text-[13px] uppercase tracking-widest"
          style={{ color: 'rgb(var(--color-text-faint))' }}
        >
          * featured projects
        </p>
        <div className="space-y-2">
          {teaserProjects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-5">
          <Link
            to="/work"
            className="inline-flex items-center gap-1 font-mono text-[13px] transition-opacity hover:opacity-70"
            style={{ color: 'rgb(var(--color-text-faint))' }}
          >
            all projects &rarr;
          </Link>
        </div>
      </motion.section>

      {/* Experience — minimal list */}
      <motion.section {...fadeUp} className="pb-10" id="experience">
        <p
          className="mb-5 font-mono text-[13px] uppercase tracking-widest"
          style={{ color: 'rgb(var(--color-text-faint))' }}
        >
          * experience
        </p>
        <div className="space-y-4">
          {experience.map((entry, i) => (
            <div key={i}>
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-base font-medium">{entry.role}</p>
                <span
                  className="shrink-0 font-mono text-[13px]"
                  style={{ color: 'rgb(var(--color-text-faint))' }}
                >
                  {entry.period}
                </span>
              </div>
              <p
                className="mt-0.5 text-base"
                style={{ color: 'rgb(var(--color-text-muted))' }}
              >
                {entry.company}
              </p>
              <p
                className="mt-0.5 text-base leading-relaxed"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                {entry.teaser ?? entry.description?.split('.')[0] ?? ''}.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Link
            to="/experience"
            className="inline-flex items-center gap-1 font-mono text-[13px] transition-opacity hover:opacity-70"
            style={{ color: 'rgb(var(--color-text-faint))' }}
          >
            All Experience &rarr;
          </Link>
        </div>
      </motion.section>

      {/* Blog */}
      {recentPosts.length > 0 && (
        <motion.section {...fadeUp} className="pb-16 sm:pb-20" id="blog">
          <SectionHeading>Blog</SectionHeading>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-base font-medium transition-opacity hover:opacity-70"
              style={{ color: 'rgb(var(--color-accent))' }}
            >
              Read all posts <ArrowRight size={12} />
            </Link>
          </div>
        </motion.section>
      )}

      {/* Achievements */}
      <motion.section {...fadeUp} className="pb-20 sm:pb-24" id="achievements">
        <p
          className="mb-5 font-mono text-[13px] uppercase tracking-widest"
          style={{ color: 'rgb(var(--color-text-faint))' }}
        >
          * achievements
        </p>
        <div className="space-y-5">
          {personal.achievements.map((ach, i) => (
            <div key={i}>
              <p className="text-base font-medium">{ach.title}</p>
              <p
                className="mt-0.5 text-base"
                style={{ color: 'rgb(var(--color-text-muted))' }}
              >
                {ach.subtitle}
              </p>
              <p
                className="mt-0.5 text-base leading-relaxed"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
