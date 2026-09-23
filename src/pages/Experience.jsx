import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';
import ExperienceTimeline from '../components/ExperienceTimeline';

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>Experience — Shubhayan Bagchi</title>
        <meta
          name="description"
          content="Experience and leadership by Shubhayan Bagchi."
        />
      </Helmet>
      <ScrollReveal>
        <header className="section-block !border-0 !pb-16 !pt-0 sm:!pb-20">
          <p className="eyebrow">01 / background</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
            The work behind the work.
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
            A timeline of the teams, projects, and communities that shaped how I
            build software.
          </p>
        </header>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <section
          className="border-t pt-10"
          style={{ borderColor: 'rgb(var(--color-border))' }}
        >
          <div className="mb-10 flex items-center gap-4">
            <p className="eyebrow !mb-0">02 / timeline</p>
            <div
              className="h-px flex-1"
              style={{ backgroundColor: 'rgb(var(--color-border))' }}
            />
          </div>
          <ExperienceTimeline />
        </section>
      </ScrollReveal>
    </div>
  );
}
