"use client";

import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function Work() {
    const workData = [
        {
            company: 'Small price (project)',
            date: 'December 2024 - December 2025 (1 year + support)',
            positions: [
                {
                    title: 'Full Stack Developer (Symfony + React)',
                    description: 'Automating Marketing Analytics: From Spreadsheet Chaos to an Intelligent Data Hub\n' +
                        'I successfully migrated a business from cumbersome and error-prone Google Sheets to a centralized web application with a robust database, transforming their marketing analytics from a manual chore into a strategic advantage.\n' +
                        '\n' +
                        'Here’s what was delivered:\n' +
                        '\n' +
                        'A Single Source of Truth: Engineered seamless integrations with all key platforms:\n' +
                        '\n' +
                        'Advertising: Facebook Ads, Google Ads, TikTok.\n' +
                        '\n' +
                        'Websites & E-commerce: Tilda (via webhook and file import) and WP/WooCommerce for order data.\n' +
                        '\n' +
                        'CRM: Voiptime for call tracking and order attribution.\n' +
                        '\n' +
                        'Finance: Finmap for automatic cost reporting.\n' +
                        '\n' +
                        'Instant Calculations & Insights: The application automatically processes data using custom formulas to calculate advertising effectiveness, saving countless hours of manual work and providing real-time insights.\n' +
                        '\n' +
                        'Automated Reporting & Export: The system aggregates all data into unified, easy-to-read reports. Users can quickly view performance and download any data set to Excel for further analysis with a single click.\n' +
                        '\n' +
                        'Smart Permissions & Notifications:\n' +
                        '\n' +
                        'A flexible user role system ensures each team member sees only the data relevant to them.\n' +
                        '\n' +
                        'Convenient in-app and Telegram notifications keep the team informed about system status and critical events in real-time.',
                    technologies: ['PHP 8.4', 'Symfony 7.2', 'API-Platform 4', 'React 18', 'React-admin 5', 'Redis 7 (cache & queue)', 'MariaDb 10', 'Docker', 'CI/CD'],
                },
            ],
        },
        {
            company: 'Corefy',
            date: 'May 2023 - July 2023 (3 months)',
            positions: [
                {
                    title: 'Backend Developer',
                    description: 'Contributed to a payment orchestration platform. ' +
                        'Integrated payment provider connectors. ' +
                        'Resolved bugs and implemented logic patches using ELK stack for log analysis. ' +
                        'Improved system stability by troubleshooting issues reported through Sentry.',
                    technologies: ['Symfony5', 'Postgresql', 'ELK', 'Sentry'],
                },
            ],
        },
        {
            "company": "Stellium (Local Web Studio)",
            "date": "July 2020 - April 2023 (~2 years 10 months)",
            "positions": [
                {
                    "title": "Full Stack Developer",
                    "description": "Full-cycle web development with focus on e-commerce and business systems. Developed CRM system using Symfony 5 and React/TypeScript. E-commerce development on OpenCart with performance optimization, SEO implementation, and client features.",
                    "technologies": ["PHP", "JavaScript", "Symfony5", "React", "TypeScript", "Opencart", "PostgreSQL", "Redis", "MySQL"]
                }
            ]
        }
    ];

    return (
        <>
            <main className="min-h-screen bg-[var(--site-bg)] text-[var(--site-text)] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                            Work experience
                        </h1>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                            Companies and web studios I have worked with
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {workData.map((work, workIndex) => (
                            <motion.article
                                key={workIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: workIndex * 0.08 }}
                                className="rounded-2xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 sm:p-8 shadow-sm"
                            >
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                    <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--site-text)]">{work.company}</h2>
                                    <div className="text-sm text-[var(--site-muted)] sm:text-right sm:whitespace-nowrap">{work.date}</div>
                                </div>

                                <div className="mt-5 space-y-6">
                                    {work.positions.map((position, positionIndex) => (
                                        <div key={positionIndex}>
                                            <div className="text-lg font-semibold text-[var(--site-text)]">{position.title}</div>
                                            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                                                {position.description}
                                            </p>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {position.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="inline-flex items-center rounded-full border border-[var(--site-border)] bg-[var(--site-card)] px-3 py-1 text-xs font-medium text-[var(--site-text)] sm:text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}