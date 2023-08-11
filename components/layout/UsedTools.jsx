const UsedTools = () => {
    return (
        <section id="promotionFooter" className="bg-gray-100 py-8">
            <div className="container mx-auto">
                <div className="w-full">
                    <h4 className="text-xl font-bold mb-4"><i className="bi bi-tag"></i> Tags of used tools</h4>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="flex flex-col">
                            <ul className="list-none">
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/php.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>PHP</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/js.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>JS</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/sql.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>SQL</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/html.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>HTML</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/css.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>CSS/SCSS</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/twig.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>TWiG</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="flex flex-col">
                            <ul className="w-full list-none">
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/opencart.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>Opencart</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/symfony.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>Symfony</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/react.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>React</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="flex flex-col">
                            <ul className="list-none">
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/git.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>GIT</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/docker.png" alt="Icon" className="w-5 mr-2"/>
                                        Docker
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/nginx.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>Nginx / Apache2</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/composer.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>Composer / Npm / Yarn</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/webpack.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>Webpack</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="flex flex-col">
                            <ul className="list-none">
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/doctrine.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>Doctrine</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/mariadb.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>mysql/mariadb</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/postgresql.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>Postgresql</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/redis.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>Redis</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src="/assets/img/icons/mongodb.png" alt="Icon" className="w-5 mr-2"/>
                                        <span>Mongodb</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {UsedTools}