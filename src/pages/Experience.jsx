import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';
import ExperienceTimeline from '../components/ExperienceTimeline';
import PageHeader from '../components/PageHeader';

export default function Experience() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>Experience — Shubhayan Bagchi (devBuku)</title>
        <meta
          name="description"
          content="Shubhayan Bagchi's experience: backend developer on a College ERP system, SIH 2023 Finalist (Swarlipi AI dubbing), and Coding Club Group Leader at SVIST."
        />
        <meta
          property="og:title"
          content="Experience — Shubhayan Bagchi (devBuku)"
        />
        <meta
          property="og:description"
          content="Backend developer on a College ERP system, SIH 2023 Finalist, and Coding Club Group Leader."
        />
      </Helmet>

      <ScrollReveal>
        <PageHeader>Experience</PageHeader>
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <ExperienceTimeline />
      </ScrollReveal>
    </div>
  );
}
