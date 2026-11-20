'use client'

import {type RefObject, useRef, useState} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {twMerge} from 'tailwind-merge'

const photos = [
    {
        src: '/assets/img/pekhov_anton_php_developer.jpeg',
        alt: 'Anthony Pekhov portrait',
        rotate: '5deg',
        top: '0%',
        left: '50%',
        className: 'w-44 md:w-56',
    },
    {
        src: '/assets/img/2.jpeg',
        alt: 'Anthony Pekhov photo',
        rotate: '12deg',
        top: '43%',
        left: '55%',
        className: 'w-32 md:w-48',
    },
    {
        src: '/assets/img/1.jpeg',
        alt: 'Anthony Pekhov photo',
        rotate: '-7deg',
        top: '18%',
        left: '58%',
        className: 'w-44 md:w-56',
    },
]

const About = () => {
    return (
        <section id="about" className="relative overflow-hidden bg-[var(--site-bg)] px-4 py-20 text-[var(--site-text)] sm:px-6 lg:px-8">
            <div className="ap-grid pointer-events-none absolute inset-0 opacity-[0.14]" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                    {/* Левый блок — в стиле "Заметки / Редактор кода" */}
                    <motion.div
                        initial={{opacity: 0, y: 22}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: '-100px'}}
                        transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
                        className="relative min-h-[520px] overflow-hidden rounded-[1.75rem] border border-[var(--site-border)] bg-[var(--site-panel)] shadow-xl shadow-black/5"
                    >
                        {/* Три точки как у MacOS */}
                        <div className="flex items-center gap-1.5 border-b border-[var(--site-border)] px-5 py-3 bg-[var(--site-bg)]/30">
                            <div className="flex gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                                <div className="h-3 w-3 rounded-full bg-green-500/70" />
                            </div>
                            <span className="mx-auto text-xs text-[var(--site-muted)]">📝 Notes / About.md</span>
                            <div className="w-8" />
                        </div>

                        {/* Контент как заметки */}
                        <div className="p-6 sm:p-8 lg:p-10">
                            <h2 className="max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                                Who is Anthony?
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--site-muted)]">
                                I`m a software developer focused mostly on backend work. I usually work with PHP, Symfony, OpenCart,
                                with some React when the interface needs it.

                                I build backend features, eCommerce flows, integrations, admin tools, data flows for analytics, fixes, and support for existing products.

                                But sometimes I work with other frameworks (Laravel, Yii) and languages like Go.

                                I like building useful things and making messy parts simpler.
                            </p>
                        </div>
                    </motion.div>

                    {/* Правый блок — в стиле "Просмотр папки / Галерея" */}
                    <PhotoBoard />
                </div>
            </div>
        </section>
    )
}

const PhotoBoard = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    return (
        <motion.div
            initial={{opacity: 0, y: 22}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="relative min-h-[520px] overflow-hidden rounded-[1.75rem] border border-[var(--site-border)] bg-[var(--site-panel)] shadow-xl shadow-black/5"
            ref={containerRef}
        >
            {/* Три точки как у MacOS */}
            <div className="flex items-center gap-1.5 border-b border-[var(--site-border)] px-5 py-3 bg-[var(--site-bg)]/30">
                <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <div className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="mx-auto text-xs text-[var(--site-muted)]">📁 Gallery / Photos</span>
                <div className="w-8" />
            </div>

            {/* Галерея с фото */}
            <div className="relative hidden min-h-[360px] lg:block p-4">
                {photos.map((photo) => (
                    <DragPhoto key={photo.src} containerRef={containerRef} {...photo} />
                ))}
            </div>

            <div className="grid gap-3 lg:hidden p-4">
                {photos.map((photo) => (
                    <Image
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        width={640}
                        height={480}
                        className="aspect-[4/3] w-full rounded-2xl border border-[var(--site-border)] object-cover"
                    />
                ))}
            </div>
        </motion.div>
    )
}

type DragPhotoProps = {
    containerRef: RefObject<HTMLDivElement>
    src: string
    alt: string
    top: string
    left: string
    rotate: string
    className: string
}

const DragPhoto = ({containerRef, src, alt, top, left, rotate, className}: DragPhotoProps) => {
    const [zIndex, setZIndex] = useState(1)

    const updateZIndex = () => {
        const elements = document.querySelectorAll('.about-drag-photo')
        let maxZIndex = 1

        elements.forEach((element) => {
            const value = parseInt(window.getComputedStyle(element).getPropertyValue('z-index'))

            if (!Number.isNaN(value) && value > maxZIndex) {
                maxZIndex = value
            }
        })

        setZIndex(maxZIndex + 1)
    }

    return (
        <motion.img
            onMouseDown={updateZIndex}
            style={{zIndex}}
            initial={{opacity: 0, top: '34%', left: '55%', rotate: '0deg', scale: 0.94}}
            whileInView={{opacity: 1, top, left, rotate, scale: 1}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
            className={twMerge(
                'about-drag-photo absolute -translate-x-1/2 rounded-2xl border border-[var(--site-border)] bg-[var(--site-bg)] p-2 shadow-2xl shadow-black/20',
                className
            )}
            src={src}
            alt={alt}
            drag
            dragConstraints={containerRef}
            dragElastic={0.35}
        />
    )
}

export {About}