import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';
import { personal } from '../data/personal';
import ScrollReveal from '../components/ScrollReveal';
import SkillSection from '../components/SkillSection';

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>About — Shubhayan Bagchi</title>
      </Helmet>
      <ScrollReveal>
        <header className="section-block !border-0 !pb-16 !pt-0 sm:!pb-20">
          <p className="eyebrow">01 / about</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
            Building with curiosity, care, and a little terminal noise.
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
            Final-year CSE student, backend-focused developer, and curious
            builder based in Kolkata.
          </p>
        </header>
      </ScrollReveal>
      <div
        className="grid gap-12 border-t pt-12 lg:grid-cols-[1.2fr_0.8fr]"
        style={{ borderColor: 'rgb(var(--color-border))' }}
      >
        <ScrollReveal>
          <div className="text-muted space-y-6 text-lg leading-relaxed">
            <p>
              I build production-ready systems and full-stack applications with
              a focus on clear architecture, useful interfaces, and dependable
              behavior.
            </p>
            <p>
              My final-year project is a College ERP designed to solve the
              fragmented-system problems we experienced across four years of
              college.
            </p>
            <p>
              Outside code, I daily-drive Arch Linux with i3wm, develop in
              Neovim, solve DSA problems, and enjoy learning how systems work.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <div className="flex flex-col gap-4">
            <div className="card">
              <p className="eyebrow">education</p>
              <p className="font-medium">{personal.about.education.degree}</p>
              <p className="text-muted mt-1">
                {personal.about.education.institution}
              </p>
              <p className="text-faint mt-3 font-mono text-sm">
                {personal.about.education.period}
              </p>
            </div>
            <div className="card">
              <p className="eyebrow">seeking</p>
              <p className="text-muted">
                Software engineering internships and entry-level SDE roles in
                backend, full-stack, and systems engineering.
              </p>
              <a href="/contact" className="text-link mt-5">
                Let&apos;s talk <ArrowUpRight data-icon="inline-end" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={100}>
        <section className="section-block">
          <div className="section-intro">
            <div>
              <p className="eyebrow">02 / toolkit</p>
              <h2>Skills</h2>
            </div>
            <span className="text-muted max-w-xs text-sm">
              Tools I reach for when turning an idea into something useful.
            </span>
          </div>
          <SkillSection />
        </section>
      </ScrollReveal>
    </div>
  );
}
