'use client'

import {motion} from 'framer-motion'
import {ArrowRight, Download, Github} from 'lucide-react'
import Image from 'next/image'

const FirstScreen = () => {
    const tags = ['PHP', 'Symfony', 'OpenCart', 'React', 'SQL']

    return (
        <section className="relative overflow-hidden bg-[var(--site-bg)] px-4 py-16 text-[var(--site-text)] sm:px-6 lg:px-8">
            <div className="ap-noise pointer-events-none absolute inset-0 opacity-[0.1]" />

            <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                    <motion.div
                        className="mb-7 flex flex-wrap gap-2"
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

                    {/*<motion.p*/}
                    {/*    className="mt-7 max-w-2xl text-base leading-7 text-[var(--site-muted)] sm:text-lg"*/}
                    {/*    initial={{opacity: 0, y: 18}}*/}
                    {/*    animate={{opacity: 1, y: 0}}*/}
                    {/*    transition={{duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1]}}*/}
                    {/*>*/}
                    {/*    I build backend features, eCommerce flows, integrations, and admin tools. Most of my work is*/}
                    {/*    PHP, Symfony and OpenCart, with some React when the interface needs it.*/}
                    {/*</motion.p>*/}

                    <motion.div
                        className="mt-9 flex flex-wrap gap-3"
                        initial={{opacity: 0, y: 18}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1]}}
                    >
                        <a
                            href="/work"
                            className="group inline-flex items-center gap-2 rounded-full bg-[var(--site-text)] py-1.5 pl-5 pr-1.5 text-sm font-bold text-[var(--site-bg)] transition-[gap] duration-300 hover:gap-3 sm:text-base"
                        >
                            View work
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--site-bg)] text-[var(--site-text)]">
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </span>
                        </a>
                        <a
                            href="/assets/cv/cv_anton_pekhov_backend_developer.pdf"
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--site-border)] px-5 py-3 text-sm font-bold text-[var(--site-text)] transition-colors hover:bg-[var(--site-panel)]"
                        >
                            <Download className="h-4 w-4" aria-hidden="true" />
                            CV
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

                {/*<motion.div*/}
                {/*    className="relative flex min-h-[440px] items-center justify-center rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-panel)] p-8 shadow-2xl shadow-black/10 "*/}
                {/*    initial={{opacity: 0, scale: 0.97}}*/}
                {/*    animate={{opacity: 1, scale: 1}}*/}
                {/*    transition={{duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}*/}
                {/*>*/}
                {/*    <div className="flex items-center justify-center">*/}
                {/*        <Image*/}
                {/*            src="/assets/img/face.jpeg"*/}
                {/*            alt="Anthony Pekhov"*/}
                {/*            width={400}*/}
                {/*            height={400}*/}
                {/*            className="rounded-full"*/}
                {/*            priority*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</motion.div>*/}


                <motion.div
                    className="relative flex min-h-[440px] flex-col rounded-[1.5rem] border border-[var(--site-border)] bg-[var(--site-panel)] shadow-2xl shadow-black/10 overflow-hidden"
                    initial={{opacity: 0, scale: 0.97}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
                >
                    {/* Панель с тремя точками как у MacOS */}
                    <div className="flex items-center gap-2 border-b border-[var(--site-border)] px-5 py-3 bg-[var(--site-bg)]/50">
                        <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                            <div className="h-3 w-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                        </div>

                        {/* Адресная строка (опционально) */}
                        <div className="mx-auto flex flex-1 max-w-[200px] rounded-md bg-[var(--site-panel)] px-3 py-1">
                            <span className="mx-auto text-xs text-[var(--site-muted)]">🖼 anthony_pekhov.webp</span>
                        </div>

                        {/* Иконка для красоты */}
                        <div className="w-8" />
                    </div>

                    {/* Контент — картинка */}
                    <div className="flex flex-1 items-center justify-center p-6">
                        <Image
                            // src="/assets/img/face.jpeg"
                            src="/assets/img/1.jpeg"
                            alt="Anthony Pekhov"
                            width={380}
                            height={380}
                            // className="rounded-full border-2 border-[var(--site-border)] shadow-xl"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export {FirstScreen}