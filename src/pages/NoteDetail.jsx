import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { notes } from '../content/notes/notes';
import ScrollReveal from '../components/ScrollReveal';

export default function NoteDetail() {
  const { slug } = useParams();
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Helmet>
          <title>Note Not Found — devBuku</title>
        </Helmet>
        <p
          className="font-mono text-base"
          style={{ color: 'rgb(var(--color-text-faint))' }}
        >
          Note not found.
        </p>
        <Link
          to="/notes"
          className="btn-outline mt-4 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-base font-medium transition-all duration-200"
        >
          <ArrowLeft size={14} />
          Back to notes
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>{note.title} — devBuku Notes</title>
        <meta
          name="description"
          content={
            note.excerpt ||
            `${note.title} — a note by Shubhayan Bagchi (devBuku).`
          }
        />
        <meta property="og:title" content={`${note.title} — devBuku Notes`} />
        <meta
          property="og:description"
          content={
            note.excerpt ||
            `${note.title} — a note by Shubhayan Bagchi (devBuku).`
          }
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://devbuku.vercel.app/notes/${note.slug}`}
        />
        <meta name="twitter:title" content={`${note.title} — devBuku Notes`} />
        <meta
          name="twitter:description"
          content={
            note.excerpt ||
            `${note.title} — a note by Shubhayan Bagchi (devBuku).`
          }
        />
      </Helmet>

      <ScrollReveal>
        <Link
          to="/notes"
          className="mb-8 inline-flex items-center gap-1.5 text-base transition-opacity hover:opacity-70"
          style={{ color: 'rgb(var(--color-text-muted))' }}
        >
          <ArrowLeft size={14} />
          Back to notes
        </Link>

        <header className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            {note.date && (
              <time
                className="flex items-center gap-1 font-mono text-[13px]"
                style={{ color: 'rgb(var(--color-text-faint))' }}
                dateTime={note.date}
              >
                <Calendar size={10} />
                {note.date}
              </time>
            )}
            {note.readTime && (
              <span
                className="flex items-center gap-1 font-mono text-[13px]"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                <Clock size={10} />
                {note.readTime}
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {note.title}
          </h1>
          {note.tags && note.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded border px-2 py-0.5 font-mono text-[13px]"
                  style={{
                    borderColor: 'rgb(var(--color-border))',
                    color: 'rgb(var(--color-text-muted))',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <article className="prose-custom">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {note.content}
          </ReactMarkdown>
        </article>
      </ScrollReveal>
    </div>
  );
}
