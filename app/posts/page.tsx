import Link from "next/link";
import {Footer} from "@/components/layout/Footer";
import {ArrowRight} from "lucide-react";

const posts = [
    {
        slug: "test-post",
        title: "Test post: how a blog post will look",
        description: "A short demo post to preview the layout, typography, and reading experience.",
        date: "May 17, 2026",
        tags: ["demo", "blog"],
    },
];

export default function Posts() {
    return (
        <>
            <main className="min-h-screen bg-[var(--site-bg)] text-[var(--site-text)] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--site-muted)]">Blog</p>
                        <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                            Posts
                        </h1>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                            Notes on backend development, tools, and things I learn along the way.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/posts/${post.slug}`}
                                className="group rounded-2xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 sm:p-7 transition-colors hover:bg-[var(--site-card)]"
                            >
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[var(--site-muted)]">
                                    <span>{post.date}</span>
                                    <span className="h-1 w-1 rounded-full bg-[var(--site-border)]" />
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="rounded-full border border-[var(--site-border)] bg-[var(--site-bg)] px-2.5 py-1 font-medium">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[var(--site-text)] sm:text-3xl">
                                    {post.title}
                                </h2>
                                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                                    {post.description}
                                </p>
                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--site-text)]">
                                    Read post
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
