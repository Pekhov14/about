'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="relative overflow-hidden bg-[var(--site-bg)] px-4 py-20 text-[var(--site-text)] sm:px-6 lg:px-8">
            <div className="ap-grid pointer-events-none absolute inset-0 opacity-[0.14]" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                    <motion.div
                        initial={{opacity: 0, y: 22}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: '-100px'}}
                        transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
                        className="relative min-h-[420px] lg:min-h-[520px] overflow-hidden rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-panel)] p-6 sm:p-8 lg:p-10 shadow-sm"
                    >
                        <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[var(--site-accent)]/10 blur-3xl" />
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--site-muted)]">About</p>
                        <h2 className="max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                            Who is Anthony?
                        </h2>

                        <div className="mt-7 max-w-2xl space-y-4 text-base leading-7 text-[var(--site-muted)]">
                            <p>
                                I&apos;m a software developer focused mostly on backend work. I usually work with PHP, Symfony, and OpenCart,
                                with some React when the interface needs it.
                            </p>
                            <p>
                                I build backend features, eCommerce flows, integrations, admin tools, data flows for analytics, fixes, and support for existing products.
                            </p>
                            <p>
                                Sometimes I also work with other frameworks (Laravel, Yii) and languages like Go. I like building useful things and making messy parts simpler.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 22}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: '-100px'}}
                        transition={{duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
                        className="relative min-h-[420px] lg:min-h-[520px] overflow-hidden rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-card)] p-4 sm:p-6 shadow-sm"
                    >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--site-panel),transparent_45%)] opacity-70" />

                        <div className="relative z-10 h-[320px] sm:h-[380px] lg:h-[calc(100%-2.5rem)] min-h-[320px]">
                            <Image
                                src="/assets/img/1.jpeg"
                                alt="Anthony Pekhov photo"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="rounded-2xl object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export {About}