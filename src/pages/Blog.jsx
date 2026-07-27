import { Helmet } from "react-helmet-async";
import BlogCard from "../components/BlogCard";
import ScrollReveal from "../components/ScrollReveal";
import PageHeader from "../components/PageHeader";
import { blogPosts } from "../content/blog/posts";

export default function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <Helmet>
        <title>Blog — Shubhayan Bagchi (devBuku)</title>
        <meta
          name="description"
          content="Blog by Shubhayan Bagchi (devBuku) — thoughts on building projects, backend engineering, deployment, and lessons learned as a CS student and developer."
        />
        <meta property="og:title" content="Blog — Shubhayan Bagchi (devBuku)" />
        <meta
          property="og:description"
          content="Thoughts on projects, backend engineering, deployment, and lessons from building software as a CS student."
        />
      </Helmet>

      <ScrollReveal>
        <PageHeader>Blog</PageHeader>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 80}>
            <BlogCard post={post} />
          </ScrollReveal>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <p
          className="text-sm font-mono text-center py-12"
          style={{ color: "rgb(var(--color-text-faint))" }}
        >
          No posts yet. Coming soon.
        </p>
      )}
    </div>
  );
}
