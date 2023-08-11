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
                                    {/*<img src="assets/img/icons/php.png" alt="Icon" className="w-5 mr-2">*/}
                                        PHP
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/js.png" alt="Icon" className="w-5 mr-2">*/}
                                        JS
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/sql.png" alt="Icon" className="w-5 mr-2">*/}
                                        SQL
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/html.png" alt="Icon" className="w-5 mr-2">*/}
                                        HTML
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/css.png" alt="Icon" className="w-5 mr-2">*/}
                                        CSS/SCSS
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/twig.png" alt="Icon" className="w-5 mr-2">*/}
                                        TWiG
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="flex flex-col">
                            <ul className="w-full list-none">
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/opencart.png" alt="Icon" className="w-5 mr-2">*/}
                                        Opencart
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/symfony.png" alt="Icon" className="w-5 mr-2">*/}
                                        Symfony
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/react.png" alt="Icon" className="w-5 mr-2">*/}
                                        React
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="flex flex-col">
                            <ul className="list-none">
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/git.png" alt="Icon" className="w-5 mr-2">*/}
                                        GIT
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/docker.png" alt="Icon" className="w-5 mr-2">*/}
                                        Docker
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/nginx.png" alt="Icon" className="w-5 mr-2">*/}
                                        Nginx / Apache2
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/composer.png" alt="Icon" className="w-5 mr-2">*/}
                                        Composer / Npm / Yarn
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/webpack.png" alt="Icon" className="w-5 mr-2">*/}
                                        Webpack
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="flex flex-col">
                            <ul className="list-none">
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/doctrine.png" alt="Icon" className="w-5 mr-2">*/}
                                        Doctrine
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/mariadb.png" alt="Icon" className="w-5 mr-2">*/}
                                        mysql/mariadb
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/postgresql.png" alt="Icon" className="w-5 mr-2">*/}
                                        Postgresql
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/redis.png" alt="Icon" className="w-5 mr-2">*/}
                                        Redis
                                </li>
                                <li className="flex items-center mb-2">
                                    {/*<img src="assets/img/icons/mongodb.png" alt="Icon" className="w-5 mr-2">*/}
                                        Mongodb
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