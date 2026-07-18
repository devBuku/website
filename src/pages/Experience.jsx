import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import ExperienceTimeline from "../components/ExperienceTimeline";

export default function Experience() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <ScrollReveal>
        <section className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70 mb-6"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
          <SectionHeading>Experience</SectionHeading>
          <p
            className="text-sm leading-relaxed max-w-lg"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            A timeline of my professional experience — from leading a four-person team building a
            College ERP to mentoring juniors as Coding Club Group Leader.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <ExperienceTimeline />
      </ScrollReveal>
    </div>
  );
}
