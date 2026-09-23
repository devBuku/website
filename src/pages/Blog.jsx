import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/BlogCard';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts } from '../content/blog/posts';

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>Blog — Shubhayan Bagchi</title>
      </Helmet>
      <ScrollReveal>
        <div className="mb-16 space-y-4 sm:mb-20">
          <p className="eyebrow">notes & learnings</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Blog
          </h1>
          <p className="text-muted max-w-2xl text-lg">
            Writing about projects, backend engineering, deployment, and the
            lessons hiding inside the work.
          </p>
        </div>
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
          <div className="card py-20 text-center">
            <p className="eyebrow">coming soon</p>
            <p className="text-muted text-lg">
              No posts yet. I&apos;m collecting the first set of notes.
            </p>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
