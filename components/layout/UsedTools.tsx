'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'

const groups = [
    {
        title: 'Languages',
        note: 'The basics I use most often.',
        tools: [
            {name: 'PHP', icon: '/assets/img/icons/php.png'},
            {name: 'JavaScript', icon: '/assets/img/icons/js.png'},
            {name: 'SQL', icon: '/assets/img/icons/sql.png'},
            {name: 'HTML / CSS', icon: '/assets/img/icons/html.png'},
            {name: 'Twig', icon: '/assets/img/icons/twig.png'},
        ],
    },
    {
        title: 'Frameworks',
        note: 'Project structure, commerce, and UI work.',
        tools: [
            {name: 'Symfony', icon: '/assets/img/icons/symfony.png'},
            {name: 'OpenCart', icon: '/assets/img/icons/opencart.png'},
            {name: 'Doctrine', icon: '/assets/img/icons/doctrine.png'},
            {name: 'React', icon: '/assets/img/icons/react.png'},
        ],
    },
    {
        title: 'Infrastructure',
        note: 'Local setup, deployment, and server pieces.',
        tools: [
            {name: 'Git', icon: '/assets/img/icons/git.png'},
            {name: 'Docker', icon: '/assets/img/icons/docker.png'},
            {name: 'Nginx', icon: '/assets/img/icons/nginx.png'},
            {name: 'Composer / NPM', icon: '/assets/img/icons/composer.png'},
            {name: 'CI/CD (Deployer / github actions)', icon: '/assets/img/icons/composer.png'},
            {name: 'AWS (Lambda / S3)', icon: '/assets/img/icons/composer.png'},
        ],
    },
    {
        title: 'Data',
        note: 'Storage, queries, cache, and practical data fixes.',
        tools: [
            {name: 'MySQL / MariaDB', icon: '/assets/img/icons/mariadb.png'},
            {name: 'PostgreSQL', icon: '/assets/img/icons/postgresql.png'},
            {name: 'Redis (cache / queue / lock)', icon: '/assets/img/icons/redis.png'},
            {name: 'ElasticSearch', icon: '/assets/img/icons/redis.png'},
        ],
    },
]

const UsedTools = () => {
    return (
        <section id="toolbox" className="relative overflow-hidden bg-[var(--site-bg)] px-4 py-20 text-[var(--site-text)] sm:px-6 lg:px-8">
            <div className="ap-noise pointer-events-none absolute inset-0 opacity-[0.1]" />

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div>
                        {/*<p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--site-muted)]">Toolbox</p>*/}
                        <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                            Tools I use
                        </h2>
                    </div>
                    <p className="max-w-2xl text-sm leading-7 text-[var(--site-muted)] sm:text-base lg:justify-self-end">
                        Nothing exotic here
                    </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                    {groups.map((group, groupIndex) => (
                        <motion.article
                            key={group.title}
                            className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-card)] p-5"
                            initial={{opacity: 0, scale: 0.96}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true, margin: '-80px'}}
                            transition={{duration: 0.55, delay: groupIndex * 0.08, ease: [0.22, 1, 0.36, 1]}}
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold tracking-[-0.04em]">{group.title}</h3>
                                <p className="mt-2 min-h-12 text-sm leading-6 text-[var(--site-muted)]">{group.note}</p>
                            </div>

                            <div className="space-y-2">
                                {group.tools.map((tool) => (
                                    <div
                                        key={tool.name}
                                        className="group flex items-center justify-between rounded-2xl border border-[var(--site-border)] bg-[var(--site-panel)] px-3 py-3 transition-colors hover:border-[var(--site-accent)]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--site-bg)]">
                                                <Image
                                                    src={tool.icon}
                                                    alt=""
                                                    width={28}
                                                    height={28}
                                                    className="h-5 w-5 object-contain"
                                                />
                                            </span>
                                            <span className="text-sm font-medium text-[var(--site-muted)] group-hover:text-[var(--site-text)]">
                                                {tool.name}
                                            </span>
                                        </div>
                                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--site-accent)] opacity-45" />
                                    </div>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export {UsedTools}
