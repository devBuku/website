import { Link } from "react-router-dom";
import Tag from "./Tag";

export default function BlogCard({ post }) {
  return (
    <article className="card p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-2">
        <time className="font-mono text-xs opacity-40">{post.date}</time>
        <span className="font-mono text-xs opacity-40">&middot;</span>
        <span className="font-mono text-xs opacity-40">{post.readTime}</span>
      </div>

      <Link to={`/blog/${post.slug}`} className="block group">
        <h3 className="text-base font-semibold leading-snug transition-colors group-hover:opacity-70">
          {post.title}
        </h3>
      </Link>

      <p className="mt-2 text-sm leading-relaxed opacity-70 line-clamp-2">
        {post.excerpt}
      </p>

      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </article>
  );
}
