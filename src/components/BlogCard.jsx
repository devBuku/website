import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

function BlogPlaceholder({ title }) {
  const seed = title.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue1 = seed % 360;
  const hue2 = (hue1 + 60) % 360;

  return (
    <div
      className="flex h-32 w-full items-center justify-center rounded-t-xl"
      style={{
        background: `linear-gradient(135deg, hsl(${hue1}, 20%, 14%), hsl(${hue2}, 15%, 10%))`,
      }}
    >
      <span
        className="select-none text-lg font-bold tracking-tight opacity-15"
        style={{ color: 'rgb(var(--color-text))' }}
      >
        {title
          .split(' ')
          .map((w) => w[0])
          .join('')
          .slice(0, 4)
          .toUpperCase()}
      </span>
    </div>
  );
}

export default function BlogCard({ post }) {
  return (
    <article className="card flex flex-col overflow-hidden">
      <BlogPlaceholder title={post.title} />
      <div className="flex flex-1 flex-col p-5">
        {/* Meta - fixed height row */}
        <div
          className="flex items-center gap-3"
          style={{ minHeight: '1.25rem' }}
        >
          {post.date && (
            <span
              className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              <Calendar size={10} />
              {post.date}
            </span>
          )}
          {post.readTime && (
            <span
              className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              <Clock size={10} />
              {post.readTime}
            </span>
          )}
        </div>

        {/* Title - fixed 2-line container */}
        <Link
          to={`/blog/${post.slug}`}
          className="group my-2 block"
          style={{ minHeight: '2.5rem' }}
        >
          <h3 className="line-clamp-2 text-sm font-bold leading-snug transition-colors group-hover:opacity-70">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt - fixed 2-line container */}
        <div className="flex-1" style={{ minHeight: '2.5rem' }}>
          <p
            className="line-clamp-2 text-xs leading-relaxed"
            style={{ color: 'rgb(var(--color-text-muted))' }}
          >
            {post.excerpt}
          </p>
        </div>

        {/* Read link - always at bottom */}
        <Link
          to={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-medium transition-opacity hover:opacity-70"
          style={{ color: 'rgb(var(--color-accent))' }}
        >
          Read <ArrowRight size={11} />
        </Link>
      </div>
    </article>
  );
}
