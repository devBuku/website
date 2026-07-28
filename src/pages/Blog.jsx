import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/BlogCard';
import ScrollReveal from '../components/ScrollReveal';
import PageHeader from '../components/PageHeader';
import { blogPosts } from '../content/blog/posts';

export default function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 80}>
            <BlogCard post={post} />
          </ScrollReveal>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <p
          className="py-12 text-center font-mono text-base"
          style={{ color: 'rgb(var(--color-text-faint))' }}
        >
          No posts yet. Coming soon.
        </p>
      )}
    </div>
  );
}
