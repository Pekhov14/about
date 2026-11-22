'use client'

import {motion} from 'framer-motion'
import {Download, Github} from 'lucide-react'
import Image from 'next/image'

const FirstScreen = () => {
    const tags = ['PHP', 'Symfony', 'OpenCart', 'React', 'SQL']

    return (
        <section className="relative overflow-x-clip bg-[var(--site-bg)] px-4 pt-16 pb-24 text-[var(--site-text)] sm:px-6 sm:pb-28 lg:px-8 lg:pb-[1.6rem]">
            <div className="ap-noise pointer-events-none absolute inset-0 opacity-[0.1]" />

            <div className="relative mx-auto grid min-h-[calc(100svh-11rem)] max-w-7xl items-center gap-10 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
                <div className="text-center lg:text-left">
                    <motion.div
                        className="mb-7 flex flex-wrap justify-center gap-2 lg:justify-start"
                        initial={{opacity: 0, y: 16}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
                    >
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-[var(--site-border)] bg-[var(--site-panel)] px-3 py-1.5 text-xs font-bold text-[var(--site-muted)] shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.h1
                        className="max-w-5xl text-6xl font-bold leading-[0.9] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
                        initial={{opacity: 0, y: 22}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1]}}
                    >
                        Anthony Pekhov
                    </motion.h1>

                    <motion.div
                        className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
                        initial={{opacity: 0, y: 18}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1]}}
                    >
                        <a
                            href="/assets/cv/cv_anton_pekhov_backend_developer.pdf"
                            download
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--site-border)] px-5 py-3 text-sm font-bold text-[var(--site-text)] transition-colors hover:bg-[var(--site-panel)]"
                        >
                            <Download className="h-4 w-4" aria-hidden="true" />
                            Download CV
                        </a>
                        <a
                            href="https://github.com/Pekhov14"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--site-border)] px-5 py-3 text-sm font-bold text-[var(--site-text)] transition-colors hover:bg-[var(--site-panel)]"
                        >
                            <Github className="h-4 w-4" aria-hidden="true" />
                            GitHub
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="relative mx-auto hidden w-full max-w-[34rem] lg:block lg:max-w-none"
                    initial={{opacity: 0, scale: 0.97, y: 12}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-[42%] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--site-accent)_32%,transparent)_0%,color-mix(in_srgb,var(--site-accent)_14%,transparent)_38%,transparent_72%)] blur-3xl opacity-90"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-[18%] bottom-[8%] h-[18%] rounded-full bg-[color-mix(in_srgb,var(--site-accent)_20%,transparent)] blur-3xl opacity-70"
                    />

                    <div className="relative aspect-[4/5] w-full translate-y-2 sm:translate-y-4 lg:translate-y-6">
                        <Image
                            src="/assets/img/tony.webp"
                            alt="Illustration of Anthony Pekhov"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-contain object-bottom drop-shadow-[0_20px_50px_color-mix(in_srgb,var(--site-accent)_18%,transparent)]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export {FirstScreen}