import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { blogPosts } from '../content/blog/posts';
import ScrollReveal from '../components/ScrollReveal';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Helmet>
          <title>Post Not Found — devBuku</title>
        </Helmet>
        <p
          className="font-mono text-sm"
          style={{ color: 'rgb(var(--color-text-faint))' }}
        >
          Post not found.
        </p>
        <Link
          to="/blog"
          className="btn-outline mt-4 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>{post.title} — devBuku Blog</title>
        <meta
          name="description"
          content={
            post.excerpt ||
            `${post.title} — a blog post by Shubhayan Bagchi (devBuku).`
          }
        />
        <meta property="og:title" content={`${post.title} — devBuku Blog`} />
        <meta
          property="og:description"
          content={
            post.excerpt ||
            `${post.title} — a blog post by Shubhayan Bagchi (devBuku).`
          }
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://devbuku.vercel.app/blog/${post.slug}`}
        />
        <meta name="twitter:title" content={`${post.title} — devBuku Blog`} />
        <meta
          name="twitter:description"
          content={
            post.excerpt ||
            `${post.title} — a blog post by Shubhayan Bagchi (devBuku).`
          }
        />
      </Helmet>

      <ScrollReveal>
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
          style={{ color: 'rgb(var(--color-text-muted))' }}
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>

        <header className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            {post.date && (
              <time
                className="flex items-center gap-1 font-mono text-xs"
                style={{ color: 'rgb(var(--color-text-faint))' }}
                dateTime={post.date}
              >
                <Calendar size={10} />
                {post.date}
              </time>
            )}
            {post.readTime && (
              <span
                className="flex items-center gap-1 font-mono text-xs"
                style={{ color: 'rgb(var(--color-text-faint))' }}
              >
                <Clock size={10} />
                {post.readTime}
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded border px-2 py-0.5 font-mono text-xs"
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
            {post.content}
          </ReactMarkdown>
        </article>
      </ScrollReveal>
    </div>
  );
}
