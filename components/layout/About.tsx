'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="relative overflow-hidden bg-[var(--site-bg)] px-4 py-20 text-[var(--site-text)] sm:px-6 lg:px-8">
            <div className="ap-grid pointer-events-none absolute inset-0 opacity-[0.12]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: '-100px'}}
                    transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
                    className="mb-10"
                >
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--site-muted)]">About</p>
                    <h2 className="max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                        Who is Anthony?
                    </h2>
                </motion.div>

                <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
                    <motion.div
                        initial={{opacity: 0, y: 22}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: '-100px'}}
                        transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
                        className="relative overflow-hidden rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-panel)] p-7 sm:p-9 lg:p-10 shadow-sm"
                    >
                        <p className="max-w-2xl text-lg leading-8 text-[var(--site-text)] sm:text-xl sm:leading-9">
                            I&apos;m a software developer focused mostly on backend work. I build practical products, integrations,
                            and systems that feel simple on the outside.
                        </p>

                        <div className="mt-8 space-y-4 text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                            <p>
                                I usually work with PHP, Symfony, and OpenCart, with some React when the interface needs it.
                                My day-to-day includes backend features, eCommerce flows, admin tools, integrations, and analytics data flows.
                            </p>
                            <p>
                                Sometimes I also work with other frameworks like Laravel or Yii, and languages like Go.
                                I like taking messy parts of a product and making them clearer, faster, and easier to maintain.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 22}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: '-100px'}}
                        transition={{duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
                        className="flex min-h-[360px] flex-col overflow-hidden rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-panel)] shadow-sm sm:min-h-[440px] lg:min-h-full"
                    >
                        <div className="flex items-center gap-2 border-b border-[var(--site-border)] bg-[var(--site-card)]/70 px-5 py-4">
                            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                            <span className="ml-3 text-xs font-medium tracking-[0.08em] text-[var(--site-muted)]">anthony.jpeg</span>
                        </div>

                        <div className="relative flex-1 min-h-[320px] p-4 sm:min-h-[400px] sm:p-6">
                            <Image
                                src="/assets/img/1.jpeg"
                                alt="Anthony Pekhov photo"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-contain object-center"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export {About}