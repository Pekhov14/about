const Experience = () => {
    return (
        <>
            <div className="content__bg content__bg--bottom" style={{ backgroundImage: 'url(/assets/img/3.jpg)' }}>
                <svg className="separator separator--up" width="100%" height="100%" viewBox="0 0 100 10"
                     preserveAspectRatio="none">
                    <path className="separator__path path-anim" data-path-to="M 0 0 C 40 10 60 10 100 0 L 0 0 Z"
                          vectorEffect="non-scaling-stroke" d="M 0 0 C 40 0 60 0 100 0 L 0 0 Z"/>
                </svg>
                <svg className="separator separator--down" width="100%" height="100%" viewBox="0 0 100 10"
                     preserveAspectRatio="none">
                    <path className="separator__path path-anim" data-path-to="M 0 0 C 25 13 75 13 100 0 L 100 10 H 0 Z"
                          vectorEffect="non-scaling-stroke" d="M 0 0 C 40 0 60 0 100 0 L 100 10 H 0 Z"/>
                </svg>
                <div className="content__title text-light content__title--right">
                    <h2 className="content__title-main">Experience</h2>
                </div>
            </div>
            <section className="w-3/4 mx-auto">
                <ul className="space-y-6">
                    <li>
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-2"><i className="bi bi-circle-fill"></i></span>
                            <p className="text-gray-600">Corefy - Backend Developer</p>
                        </div>
                        <p className="text-gray-600">May 2023 - July 2023 3 months</p>
                        <p className="mb-4">Corefy is`s Payment orchestration platform.
                            I managed to make a connector.
                            Work with the <abbr title="Elasticsearch + Kibana + Logstash">ELK stack</abbr> to fix bugs that come
                            in sentry and small logic patches.</p>
                        <div className="flex items-center">
                            <p className="text-gray-600">#Symfony5, #Postgresql, #ELK, #Ngrok</p>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-2"><i className="bi bi-circle-fill"></i></span>
                            <p className="text-gray-600">Stellium (Local Web Studio) - Software developer</p>
                        </div>
                        <p className="text-gray-600">July 2020 - April 2023 ~2 years 10 months</p>
                        <p className="pb-5">Stellium work with e-commerce, opencart, custom CMS, and CRM systems in symfony</p>

                        <ul>
                            <li>
                                <div className="flex items-center">
                                    <span className="text-gray-600 mr-2"><i className="bi bi-arrow-return-right"></i></span>
                                    <p className="text-gray-600">June 2022 - Apr. 2023 ~ 11 months</p>
                                </div>
                                <div className="flex items-center pb-2">
                                    <p className="text-gray-600">#Symfony5, #Doctrine2, #React, #TypeScript</p>
                                </div>
                                <p className="mb-4">🔨 Was on the development team CRM system with technologies like Symfony 5 and
                                    React.
                                    Frontend (React, TypeScript, Ant Design)
                                    Backend (PHP, Postgresql, Rest API on Symfony 5 [DDD, Hexagonal architecture, CQRS])</p>

                                <p className="pt-5 pb-5"><i className="bi bi-file-earmark-spreadsheet"></i> For project with cars
                                    tracking. I helped created Excel reports in symfony 3.4</p>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <span className="text-gray-600 mr-2"><i className="bi bi-arrow-return-right"></i></span>
                                    <p className="text-gray-600">July 2020 - June 2022 2 years</p>
                                </div>
                                <div className="flex items-center pb-2">
                                    <p className="text-gray-600">#PHP #JavaScript #Opencart</p>
                                </div>
                                <p className="mb-4">👨‍💻 Work with ecommerce in CMS opencart.</p>
                                <p>Development of projects for e-commerce on the opencart system, support and development of
                                    existing ones.

                                    Acceleration and optimization of projects

                                    SQL query optimization
                                    Resource Compression and Optimization (webp/webpack/Grunt/...)
                                    Implementing caching (redis)
                                    Improving Google's score with various tasks from SEO specialists

                                    Writing scripts to run in cron

                                    Generation and formation of xml products for aggregators
                                    Generate html for parts of the site that increase loading time (FAQs, featured products,
                                    ...)
                                    Content translation (for multilingualism)</p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-2"><i className="bi bi-circle-fill"></i></span>
                            <p className="text-gray-600">StableFlow (Local Web Studio) - Web developer</p>
                        </div>
                        <p className="text-gray-600"><i className="bi bi-hospital"></i> Feb. 2020 - Apr. 2020</p>
                        <p className="mb-4">Worked with wordpress and custom application for orders</p>
                        <div className="flex items-center">
                            <p className="text-gray-600">#Wordpres, #PHP</p>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-2"><i className="bi bi-circle-fill"></i></span>
                            <p className="text-gray-600">Internship in Asper (Local Web Studio)</p>
                        </div>
                        <p className="text-gray-600"> May 2019 - June 2019</p>
                        <p className="mb-4">Worked on improving the google speed score of a wordpress site.

                            Building and optimizing resources Gulp, CDN Cloudflare, Cache
                        </p>
                        <div className="flex items-center">
                            <p className="text-gray-600">#Wordpres, #PHP, #HTML, #CSS, #SCSS, #JS</p>
                        </div>
                    </li>
                </ul>

                <div className="pt-10 pb-10">
                    <a href="https://www.linkedin.com/in/anton-pekhov/" target="_blank">Show in LinkedIn <span aria-hidden="true">→</span></a>
                </div>
            </section>
        </>
    )
}

export {Experience}