import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/BlogCard';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts } from '../content/blog/posts';

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>Blog — Shubhayan Bagchi</title>
        <meta
          name="description"
          content="Notes and learnings about software engineering, projects, and the web."
        />
      </Helmet>
      <ScrollReveal>
        <header className="section-block !border-0 !pb-16 !pt-0 sm:!pb-20">
          <p className="eyebrow">01 / notes &amp; learnings</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
            Thinking out loud about building software.
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
            Writing about projects, backend engineering, deployment, and the
            lessons hiding inside the work.
          </p>
        </header>
      </ScrollReveal>
      {blogPosts.length ? (
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 70}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <ScrollReveal>
          <div className="card flex min-h-64 flex-col justify-center">
            <p className="eyebrow">coming soon</p>
            <p className="mt-2 text-2xl font-medium tracking-tight">
              No posts yet.
            </p>
            <p className="text-muted mt-2 max-w-md">
              I&apos;m collecting the first set of notes. Check back soon for
              writing on systems, shipping, and the messy middle.
            </p>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
