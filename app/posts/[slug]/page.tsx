import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const posts: Record<string, Post> = {
  "test-post": {
    slug: "test-post",
    title: "Test post: how a blog post will look",
    date: "May 17, 2026",
    tags: ["demo", "blog"],
    intro:
      "This is a sample post page to preview the future blog layout. It shows the title, meta information, and readable content styled consistently with the rest of the site.",
    sections: [
      {
        heading: "What this page demonstrates",
        body: [
          "The goal of this test post is simple: to validate spacing, typography, and the overall reading experience in both light and dark themes.",
          "Later, posts can be powered by Markdown/MDX, loaded from files or a CMS, and enriched with metadata, code blocks, images, and multilingual content.",
        ],
      },
      {
        heading: "Example content block",
        body: [
          "A real article might cover backend topics like Symfony architecture, OpenCart integrations, performance tuning, or practical notes from day-to-day development.",
          "For now, this placeholder content helps confirm that long-form text remains comfortable to read on desktop and mobile.",
        ],
      },
    ],
  },
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-[var(--site-bg)] text-[var(--site-text)] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--site-muted)] hover:text-[var(--site-text)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to posts
          </Link>

          <header className="mt-8 mb-10 border-b border-[var(--site-border)] pb-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[var(--site-muted)]">
              <span>{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--site-border)]" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--site-border)] bg-[var(--site-panel)] px-2.5 py-1 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-[var(--site-muted)] sm:text-lg">
              {post.intro}
            </p>
          </header>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--site-text)] sm:text-3xl">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-8 text-[var(--site-muted)] sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}