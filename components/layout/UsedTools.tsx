'use client'

import Image from "next/image";

const UsedTools = () => {
    return (
        <section id="promotionFooter" className="bg-gray-100 py-8 px-8">
            <div className="container mx-auto">
                <div className="text-light p-20">
                    <h3 className="text-5xl text-center">Toolbox</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4">
                    <div>
                        <ul className="list-none">
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/php.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>PHP</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/js.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>JS</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/sql.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>SQL</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/html.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>HTML</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/css.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>CSS</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/twig.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>TWiG</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className=" list-none">
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/opencart.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>Opencart</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/symfony.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>Symfony</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/doctrine.png"
                                       alt="Icon"
                                       className="w-5 mr-2"

                                       width={50}
                                       height={50}/>
                                <span>Doctrine</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/react.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>React</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/laravel.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>Laravel (a little bit)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-none">
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/git.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>GIT</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/docker.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                Docker
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/nginx.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>Nginx</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/composer.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>Composer / Npm / Yarn</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/webpack.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>Webpack</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-none">
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/mariadb.png"
                                       alt="Icon"
                                       className="w-5 mr-2"

                                       width={50}
                                       height={50}/>
                                <span>Mysql/Mariadb</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/postgresql.png"
                                       alt="Icon"
                                       className="w-5 mr-2"

                                       width={50}
                                       height={50}/>
                                <span>Postgresql</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/redis.png"
                                       alt="Icon"
                                       className="w-5 mr-2"
                                       width={50}
                                       height={50}
                                />
                                <span>Redis</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src="/assets/img/icons/mongodb.png"
                                       alt="Icon"
                                       className="w-5 mr-2"

                                       width={50}
                                       height={50}/>
                                <span>Mongodb</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {UsedTools}