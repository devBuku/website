import { Helmet } from 'react-helmet-async';
import { personal } from '../data/personal';
import ScrollReveal from '../components/ScrollReveal';
import ExperienceTimeline from '../components/ExperienceTimeline';

export default function Experience() {
  return (
    <div className="document-page">
      <Helmet>
        <title>Experience — {personal.name}</title>
        <meta
          name="description"
          content="Experience and leadership by Shubhayan Bagchi."
        />
      </Helmet>
      <ScrollReveal>
        <header className="document-header">
          <p className="document-kicker">Experience / timeline</p>
          <h1 className="document-title">The work behind the work.</h1>
          <p className="document-lede">
            A timeline of the teams, projects, and communities that shaped how I
            build software.
          </p>
        </header>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <section className="document-section">
          <div className="document-section-heading">
            <div>
              <p className="document-kicker">Selected history</p>
              <h2>Where I&apos;ve been building.</h2>
            </div>
            <p className="document-muted">
              Projects, leadership, and lessons in public.
            </p>
          </div>
          <ExperienceTimeline />
        </section>
      </ScrollReveal>
    </div>
  );
}
