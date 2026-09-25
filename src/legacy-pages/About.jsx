import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';
import { personal } from '../data/personal';
import ScrollReveal from '../components/ScrollReveal';
import SkillSection from '../components/SkillSection';

export default function About() {
  return (
    <div className="document-page">
      <Helmet>
        <title>About — {personal.name}</title>
      </Helmet>
      <ScrollReveal>
        <header className="document-header">
          <p className="document-kicker">About / profile</p>
          <h1 className="document-title">
            Building with curiosity, care, and a little terminal noise.
          </h1>
          <p className="document-lede">
            Final-year CSE student, backend-focused developer, and curious
            builder based in Kolkata.
          </p>
        </header>
      </ScrollReveal>
      <div className="document-grid">
        <ScrollReveal>
          <article className="document-card document-copy">
            <div className="document-tabs">
              <span className="tab-active">Hello</span>
              <span>Approach</span>
              <span>Outside code</span>
            </div>
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
          </article>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <aside className="document-stack">
            <div className="document-card">
              <p className="document-label">Education</p>
              <p className="document-value">
                {personal.about.education.degree}
              </p>
              <p className="document-muted">
                {personal.about.education.institution}
              </p>
              <p className="document-meta">{personal.about.education.period}</p>
            </div>
            <div className="document-card">
              <p className="document-label">Currently seeking</p>
              <p className="document-muted">
                Software engineering internships and entry-level SDE roles in
                backend, full-stack, and systems engineering.
              </p>
              <a href="/contact" className="text-link mt-5">
                Let&apos;s talk <ArrowUpRight data-icon="inline-end" />
              </a>
            </div>
          </aside>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={100}>
        <section className="document-section">
          <div className="document-section-heading">
            <div>
              <p className="document-kicker">Toolkit / 02</p>
              <h2>Skills I reach for.</h2>
            </div>
            <p className="document-muted">
              Tools for turning an idea into something useful.
            </p>
          </div>
          <SkillSection />
        </section>
      </ScrollReveal>
    </div>
  );
}
