import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import BlogCard from "../components/BlogCard";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import { blogPosts } from "../content/blog/posts";

export default function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <ScrollReveal>
        <section className="mb-12">
          <Link to="/" className="inline-flex items-center gap-1.5 font-mono text-xs opacity-50 hover:opacity-100 transition-opacity mb-6">
            <HiOutlineArrowLeft size={14} />
            Back to home
          </Link>
          <SectionHeading>Blog</SectionHeading>
          <p className="text-sm leading-relaxed opacity-70 max-w-lg">
            Thoughts on projects I&apos;ve built, technical decisions, and lessons learned along the way.
          </p>
        </section>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 80}>
            <BlogCard post={post} />
          </ScrollReveal>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <p className="text-sm opacity-50 font-mono text-center py-12">
          No posts yet. Coming soon.
        </p>
      )}
    </div>
  );
}
