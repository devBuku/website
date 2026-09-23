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
        <div className="mb-16 space-y-4 sm:mb-20">
          <p className="eyebrow">background</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Experience
          </h1>
          <p className="text-muted max-w-2xl text-lg">
            A timeline of the teams, projects, and communities that shaped how I
            build software.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <ExperienceTimeline />
      </ScrollReveal>
    </div>
  );
}
