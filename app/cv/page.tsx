import Image from "next/image";
import {DownloadCv} from "@/components/sections/cv/DownloadCv";

export default function Cv() {

    return (
        <div className="bg-gray-100 p-8">
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center mb-5 w-full md:w-6/12">
                    <DownloadCv />
                </div>
            </div>

            <div id="cv-container"
                 className="max-w-4xl mx-auto bg-white rounded-md shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1">
                    <div className="text-center mb-8">
                        <div style={{display: 'inline-block'}}>
                            <Image src="/assets/img/face.jpeg"
                                   alt="Pekhov Anton php developer"
                                   width={100}
                                   height={100}
                                   className="
                                   rounded-full w-24 h-24
                                   mx-auto mb-4
                                   object-cover object-center
                                   border-4 border-orange-100"
                            />
                        </div>
                        <h1 className="text-2xl font-bold">Anthony Pekhov</h1>
                        <p className="text-gray-500">PHP Software developer</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Contacts</h2>
                        <p><a href="mailto:pehovanton21@gmail.com">Send Email:</a> pehovanton21@gmail.com</p>
                        <p><a href="https://t.me/Anthony_1654">Telegram:</a> @Anthony_1654</p>
                        <p><a href="https://anton-pekhov.vercel.app/">My site:</a> anton-pekhov.vercel.app</p>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-2">Languages</h2>
                        <ul className="list-disc list-inside">
                            <li>English (correspond)</li>
                            <li>Ukrainian</li>
                            <li>Russian</li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-2">Used tools</h2>
                        <ul className="list-disc list-inside">
                            <li>PHP, JS, SQL, HTML, CSS</li>
                            <li>MySQL, PostgreSql, Redis, MongoDb</li>
                            <li>Composer, Npm, Yarn, Webpack</li>
                            <li>Nginx, GIT, Docker</li>
                            <li>Opencart, Symfony, Doctrine, Laravel, React</li>
                        </ul>
                    </div>

                    <div className="mb-4 mt-4">
                        <h2 className="text-xl font-semibold mb-2">Education</h2>
                        <div className="mb-4">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h3 className="text-lg font-medium">National Aerospace University "KHAI"</h3>
                            <p className="text-gray-500"></p>
                            <span>Telecommunications and radio engineering.</span>
                            <br/>
                            <span>2017 - 2021</span>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium">👨‍💻 Corefy</h3>
                            <p className="text-gray-500">Backend Developer | <span className="text-sm">May 2023 - July 2023</span>
                            </p>
                            <p>Corefy is`s Payment orchestration platform. I managed to make a connector. Work with
                                the ELK stack to fix bugs that come in sentry and small logic patches.</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium">👨‍💻 Stellium <span
                                className="text-xs text-gray-500">(Local Web Studio)</span></h3>
                            <p><span
                                className="text-sm text-gray-500">July 2020 - April 2023 (~2 years 10 months)</span>
                            </p>

                            <div className="mt-4">
                                <p className="text-gray-500">🔨 Software developer</p>
                                <p><span
                                    className="text-sm text-gray-500">June 2022 - Apr. 2023 (~ 10 months)</span></p>
                                <p>Was on the development team CRM system with technologies like Symfony 5 and
                                    React. Frontend (React, TypeScript, Ant Design) Backend (PHP, Postgresql, Rest
                                    API on Symfony 5 [DDD, Hexagonal architecture, CQRS])</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-500">🔨 Full Stack Developer</p>
                                <p><span className="text-sm text-gray-500">July 2020 - June 2022 (2 years)</span>
                                </p>
                                <p>I developed and maintained e-commerce websites on OpenCart, focusing on
                                    optimizing site loading speed and improving Google PageSpeed Insights ratings
                                    with consideration for SEO.</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium">👨‍💻 StableFlow <span
                                className="text-xs text-gray-500">(Local Web Studio)</span></h3>
                            <p className="text-gray-500">PHP developer | <span className="text-sm">Feb. 2020 - Apr. 2020 (Covid19)</span>
                            </p>
                            <p>Worked with wordpress and custom application for orders.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
