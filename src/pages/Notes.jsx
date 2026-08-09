import { Helmet } from 'react-helmet-async';
import NoteCard from '../components/NoteCard';
import ScrollReveal from '../components/ScrollReveal';
import PageHeader from '../components/PageHeader';
import { notes } from '../content/notes/notes';

export default function Notes() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>Notes — Shubhayan Bagchi (devBuku)</title>
        <meta
          name="description"
          content="Notes by Shubhayan Bagchi (devBuku) — research notes, study material, and references published from an Obsidian vault."
        />
        <meta
          property="og:title"
          content="Notes — Shubhayan Bagchi (devBuku)"
        />
        <meta
          property="og:description"
          content="Reference notes on distributed systems, concurrency, and backend engineering."
        />
      </Helmet>

      <ScrollReveal>
        <PageHeader>Notes</PageHeader>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {notes.map((note, i) => (
          <ScrollReveal key={note.slug} delay={i * 80}>
            <NoteCard note={note} />
          </ScrollReveal>
        ))}
      </div>

      {notes.length === 0 && (
        <p
          className="py-12 text-center font-mono text-base"
          style={{ color: 'rgb(var(--color-text-faint))' }}
        >
          No notes yet. Coming soon.
        </p>
      )}
    </div>
  );
}
