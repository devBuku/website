import { Helmet } from 'react-helmet-async';
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
        <div className="mb-16 space-y-4 sm:mb-20">
          <p className="eyebrow">a little more</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About
          </h1>
          <p className="text-muted max-w-2xl text-lg">
            Final-year CSE student, backend-focused developer, and curious
            builder based in Kolkata.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid gap-12 lg:grid-cols-5">
        <ScrollReveal className="lg:col-span-3">
          <div className="text-muted space-y-5 text-lg leading-relaxed">
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
            <div
              className="border-t pt-6"
              style={{ borderColor: 'rgb(var(--color-border))' }}
            >
              <p className="eyebrow">education</p>
              <p className="font-medium text-[rgb(var(--color-text))]">
                {personal.about.education.degree}
              </p>
              <p>{personal.about.education.institution}</p>
              <p className="text-faint font-mono text-sm">
                {personal.about.education.period}
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={80} className="lg:col-span-2">
          <div className="space-y-4">
            <div className="card">
              <p className="eyebrow">dev setup</p>
              {Object.entries(personal.about.devSetup).map(([key, val]) => (
                <div
                  key={key}
                  className="flex justify-between border-b py-2 last:border-0"
                  style={{ borderColor: 'rgb(var(--color-border-subtle))' }}
                >
                  <span className="text-faint">{key}</span>
                  <span className="text-muted">{val}</span>
                </div>
              ))}
            </div>
            <div className="card">
              <p className="eyebrow">seeking</p>
              <p className="text-muted">
                Software engineering internships and entry-level SDE roles in
                backend, full-stack, and systems engineering.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={100}>
        <section className="section-block">
          <div className="section-intro">
            <div>
              <p className="eyebrow">toolkit</p>
              <h2>Skills</h2>
            </div>
          </div>
          <SkillSection />
        </section>
      </ScrollReveal>
    </div>
  );
}
