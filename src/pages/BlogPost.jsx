import { useParams, Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { blogPosts } from "../content/blog/posts";
import Tag from "../components/Tag";
import ScrollReveal from "../components/ScrollReveal";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-mono text-sm opacity-50">Post not found.</p>
        <Link to="/blog" className="btn btn-outline text-xs mt-4 inline-flex items-center gap-1.5">
          <HiOutlineArrowLeft size={14} />
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <ScrollReveal>
        <Link to="/blog" className="inline-flex items-center gap-1.5 font-mono text-xs opacity-50 hover:opacity-100 transition-opacity mb-8">
          <HiOutlineArrowLeft size={14} />
          Back to blog
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <time className="font-mono text-xs opacity-40">{post.date}</time>
            <span className="font-mono text-xs opacity-40">&middot;</span>
            <span className="font-mono text-xs opacity-40">{post.readTime}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
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
