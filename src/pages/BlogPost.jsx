import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { blogPosts } from "../content/blog/posts";
import ScrollReveal from "../components/ScrollReveal";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm font-mono" style={{ color: "rgb(var(--color-text-faint))" }}>
          Post not found.
        </p>
        <Link
          to="/blog"
          className="btn-outline inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 mt-4"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <ScrollReveal>
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70 mb-8"
          style={{ color: "rgb(var(--color-text-muted))" }}
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            {post.date && (
              <time
                className="flex items-center gap-1 font-mono text-xs"
                style={{ color: "rgb(var(--color-text-faint))" }}
              >
                <Calendar size={10} />
                {post.date}
              </time>
            )}
            {post.readTime && (
              <span
                className="flex items-center gap-1 font-mono text-xs"
                style={{ color: "rgb(var(--color-text-faint))" }}
              >
                <Clock size={10} />
                {post.readTime}
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 text-xs font-mono rounded border"
                  style={{
                    borderColor: "rgb(var(--color-border))",
                    color: "rgb(var(--color-text-muted))",
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
