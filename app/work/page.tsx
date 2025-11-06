"use client";

import {Footer} from "@/components/layout/Footer";

export default function Work() {
    const workData = [
        {
            company: 'Small price (one time project)',
            date: 'December 2024 - November 2025 (~11 months)',
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
            <section className="content p-2">
                <div className="content__title content__stacked">
                    <h1 className="content__title-main">Experience</h1>
                </div>

                <div className="content--center pb-20 max-w-2xl mx-auto">
                    <ul className="space-y-6">
                        {workData.map((work, workIndex) => (
                            <li key={workIndex}
                                className={`mb-4 ${workIndex !== workData.length - 1 ? 'pb-4 border-b' : ''}`}>
                                <h2 className="text-2xl font-bold mb-2">{work.company}</h2>
                                <div className="text-gray-600">
                                    {work.date}
                                </div>
                                <ul>
                                    {work.positions.map((position, positionIndex) => (
                                        <li key={positionIndex} className="mt-2">
                                            <div className="font-semibold">{position.title}</div>
                                            <div className="text-gray-600">{position.description}</div>
                                            <div className="mt-2">
                                                {position.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex}
                                                          className="inline-block font-semibold mr-2 bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                            {tech}
                                          </span>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Footer/>
        </>
);
}
