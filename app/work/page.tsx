"use client";

export default function Work() {
    const workData = [
        {
            company: 'Corefy',
            date: 'May 2023 - July 2023 (3 months)',
            positions: [
                {
                    title: 'Backend Developer',
                    description: 'Corefy is`s Payment orchestration platform. I managed to make a connector. Work with the ELK stack to fix bugs that come in sentry and small logic patches.',
                    technologies: ['Symfony5', 'Postgresql', 'ELK', 'Ngrok'],
                },
            ],
        },
        {
            company: 'Stellium (Local Web Studio)',
            date: 'July 2020 - April 2023 (~2 years 10 months)',
            positions: [
                {
                    title: 'Software developer',
                    date: 'June 2022 - Apr. 2023 (~ 10 months)',
                    description: '🔨 Was on the development team CRM system with technologies like Symfony 5 and React. Frontend (React, TypeScript, Ant Design) Backend (PHP, Postgresql, Rest API on Symfony 5 [DDD, Hexagonal architecture, CQRS])',
                    technologies: ['Symfony5', 'Doctrine2', 'React', 'TypeScript'],
                },
                {
                    title: 'Full Stack Developer',
                    date: 'July 2020 - June 2022 (2 years)',
                    description: '👨‍💻 Work with ecommerce in CMS opencart.\n' +
                        '\n' +
                        'Development of projects for e-commerce on the opencart system, support and development of existing ones. Acceleration and optimization of projects SQL query optimization Resource Compression and Optimization (webp/webpack/Grunt/...) Implementing caching (redis) Improving Google\'s score with various tasks from SEO specialists Writing scripts to run in cron Generation and formation of xml products for aggregators Generate html for parts of the site that increase loading time (FAQs, featured products, ...) Content translation (for multilingualism).',
                    technologies: ['PHP', 'JavaScript', 'Opencart'],
                },
            ],
        },
        {
            company: 'StableFlow (Local Web Studio)',
            date: 'Feb. 2020 - Apr. 2020 (Covid19)',
            positions: [
                {
                    title: 'Web developer',
                    description: 'Worked on both frontend and backend development.',
                    technologies: ['Wordpres', 'PHP'],
                },
            ],
        },
    ];

    return (
        <section className="content p-2">
            <div className="content__title content__stacked">
                <h1 className="content__title-main">My Work Experience</h1>
            </div>
            <div className="content--center pb-20 max-w-2xl mx-auto">
                <ul className="space-y-6">
                    {workData.map((work, workIndex) => (
                        <li key={workIndex} className={`mb-4 ${workIndex !== workData.length - 1 ? 'pb-4 border-b' : ''}`}>
                            <h2 className="text-2xl font-bold mb-2">{work.company}</h2>
                            <div className="text-gray-600">
                                {work.date}
                            </div>
                            <ul>
                                {work.positions.map((position, positionIndex) => (
                                    <li key={positionIndex} className="mt-2">
                                        <div className="font-semibold">{position.title}</div>

                                        <div className="text-gray-600">
                                            {position.date}
                                        </div>

                                        <div className="text-gray-600">{position.description}</div>
                                        <div className="mt-2">
                                            {position.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="inline-block font-semibold mr-2 bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
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
    );
}
