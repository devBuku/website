import { Helmet } from 'react-helmet-async';
import { personal } from '../data/personal';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import SkillSection from '../components/SkillSection';
import PageHeader from '../components/PageHeader';

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>About — Shubhayan Bagchi (devBuku)</title>
        <meta
          name="description"
          content="About Shubhayan Bagchi (devBuku) — final-year CSE student from Kolkata, backend-focused developer, SIH 2023 Finalist, and Coding Club Group Leader at SVIST."
        />
        <meta
          property="og:title"
          content="About — Shubhayan Bagchi (devBuku)"
        />
        <meta
          property="og:description"
          content="Final-year CSE student from Kolkata. Backend-focused developer, SIH 2023 Finalist, Coding Club Group Leader."
        />
      </Helmet>

      <ScrollReveal>
        <PageHeader>About</PageHeader>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-3">
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              I&apos;m a final-year Computer Science &amp; Engineering student
              at Swami Vivekananda Institute of Science &amp; Technology
              (MAKAUT), Kolkata. I&apos;ve completed my 8th semester (result
              pending) and am actively preparing for software engineering
              internships and full-time roles.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              I focus on backend engineering, full-stack development, and
              building production-ready systems. My final-year project was a
              comprehensive College ERP — something my team built specifically
              to solve problems we lived through ourselves: fragmented systems,
              manual attendance and fee processes, and poor communication
              between departments. That project shaped how I think about backend
              design and API architecture more than anything else I&apos;ve
              worked on.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              I was a Smart India Hackathon 2023 Finalist and currently serve as
              Group Leader of my institute&apos;s Coding Club, where I mentor
              juniors and organize technical workshops. I daily-drive Arch Linux
              with i3wm, develop in Neovim, and enjoy optimizing my workflow as
              much as building software.
            </p>

            <div
              className="mt-6 border-t pt-6"
              style={{ borderColor: 'rgb(var(--color-border))' }}
            >
              <p
                className="mb-3 font-mono text-xs uppercase tracking-wider"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                education
              </p>
              <p className="text-sm font-medium">
                {personal.about.education.degree}
              </p>
              <p
                className="mt-0.5 text-sm"
                style={{ color: 'rgb(var(--color-text-muted))' }}
              >
                {personal.about.education.institution}
              </p>
              <p
                className="mt-0.5 font-mono text-xs"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                {personal.about.education.period}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {personal.about.education.coursework.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded border px-2 py-0.5 font-mono text-xs"
                    style={{
                      borderColor: 'rgb(var(--color-border))',
                      color: 'rgb(var(--color-text-muted))',
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="border-t pt-6"
              style={{ borderColor: 'rgb(var(--color-border))' }}
            >
              <p
                className="mb-3 font-mono text-xs uppercase tracking-wider"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                currently
              </p>
              <ul className="space-y-1.5">
                {[
                  'Solving LeetCode daily for DSA consistency',
                  'Revising Core CS — OS, DBMS, Networks, OOP',
                  'Building full-stack projects with React & Node.js',
                  'Learning Docker, AWS, and deployment workflows',
                  'Preparing for SDE internship interviews',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm"
                    style={{ color: 'rgb(var(--color-text-muted))' }}
                  >
                    <span
                      className="shrink-0 font-mono text-xs"
                      style={{ color: 'rgb(var(--color-text-faint))' }}
                    >
                      &rarr;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <div
              className="rounded-xl border p-5"
              style={{
                borderColor: 'rgb(var(--color-border))',
                backgroundColor: 'rgb(var(--color-bg-raised))',
              }}
            >
              <p
                className="mb-3 font-mono text-xs uppercase tracking-wider"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                dev setup
              </p>
              <div className="space-y-1.5">
                {Object.entries(personal.about.devSetup).map(([key, val]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span style={{ color: 'rgb(var(--color-text-faint))' }}>
                      {key}
                    </span>
                    <span style={{ color: 'rgb(var(--color-text-muted))' }}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-xl border p-5"
              style={{
                borderColor: 'rgb(var(--color-border))',
                backgroundColor: 'rgb(var(--color-bg-raised))',
              }}
            >
              <p
                className="mb-3 font-mono text-xs uppercase tracking-wider"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                seeking
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-text-muted))' }}
              >
                Software engineering internships and entry-level SDE roles. Open
                to backend, full-stack, and systems-related positions.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section className="mt-14">
          <SectionHeading>Skills</SectionHeading>
          <SkillSection />
        </section>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <section className="mt-14">
          <SectionHeading>Achievements</SectionHeading>
          <div className="space-y-5">
            {personal.achievements.map((ach, i) => (
              <div key={i}>
                <p className="text-sm font-medium">{ach.title}</p>
                <p
                  className="mt-0.5 text-sm"
                  style={{ color: 'rgb(var(--color-text-muted))' }}
                >
                  {ach.subtitle}
                </p>
                <p
                  className="mt-0.5 text-sm leading-relaxed"
                  style={{ color: 'rgb(var(--color-text-faint))' }}
                >
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
