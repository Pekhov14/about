import Image from "next/image";
import {DownloadCv} from "@/components/sections/cv/DownloadCv";
import { CiCoffeeCup } from "react-icons/ci";

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
                            <Image src="/assets/img/pekhov_anton.jpeg"
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
                        <p className="text-gray-500">Software developer</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-2">Contacts</h3>
                        <p><a href="https://t.me/Anthony_1654">Telegram:</a> @Anthony_1654</p>
                        <p><a href="https://anton-pekhov.vercel.app/">My site:</a> anton-pekhov.vercel.app</p>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-medium mb-2">Languages</h3>
                        <ul className="list-disc list-inside">
                            <li><div style={{display: "inline-flex"}}>English (starbucks <CiCoffeeCup style={{fontSize: "larger"}} />)</div></li>
                            <li>Ukrainian</li>
                            <li>Russian</li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-medium mb-2">Toolbox</h3>
                        <ul className="list-disc list-inside text-sm">
                            <li>PHP, JS, SQL, HTML, CSS</li>
                            <li>MySQL, PostgreSql, Redis</li>
                            <li>Composer, Npm, Vite</li>
                            <li>Nginx, GIT, Docker</li>
                            <li>Opencart, Symfony, Doctrine</li>
                        </ul>
                    </div>

                    <div className="mb-4 mt-4">
                        <h3 className="text-xl font-medium mb-2">Education</h3>
                        <div className="mb-4">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h3 className="text-lg font-medium">National Aerospace University "KHAI"</h3>
                            <p className="text-gray-500">National Aerospace University &#34;KHAI&#34;
                            Telecommunications and radio engineering.</p>
                            <span className="text-sm text-gray-500">2017 - 2021</span>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium">👨‍💻 Freelance</h3>
                            <p className="text-gray-500"> <span className="text-sm">Now</span>
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium">👨‍💻 Small price</h3>
                            <p className="text-gray-500">Full Stack Developer | <span className="text-sm">December 2024 - December 2025</span></p>
                            <p>Created a centralized dashboard to replace manual spreadsheets and provide real-time marketing insights.</p>
                            <div>
                                <li className="text-gray-500 text-sm">Eliminated manual work with automated performance calculations</li>
                                <li className="text-gray-500 text-sm">Connected entire marketing stack (ads, e-commerce, CRM, finance)</li>
                                <li className="text-gray-500 text-sm">Provided executive-ready reports with automated expense tracking</li>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium">👨‍💻 Corefy</h3>
                            <p className="text-gray-500">Backend Developer | <span className="text-sm">May 2023 - July 2023</span></p>
                            <p>Contributed to a payment orchestration platform.</p>
                            <div>
                                <li className="text-gray-500 text-sm">Integrated payment provider connectors</li>
                                <li className="text-gray-500 text-sm">Resolved bugs and implemented logic patches using ELK stack for log analysis</li>
                                <li className="text-gray-500 text-sm">Improved system stability by troubleshooting issues reported through Sentry</li>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium">👨‍💻 Stellium <span className="text-xs text-gray-500">(Local Web Studio)</span></h3>
                            <p className="text-gray-500">Full Stack Developer | <span className="text-sm">July 2020 - April 2023 (~2 years 10 months)</span></p>

                            <p>Full-cycle web development with focus on e-commerce and business systems.</p>

                            <div className="mt-2">
                                <li className="text-gray-500 text-sm">E-commerce development on OpenCart: performance optimization, SEO, client features</li>
                                <li className="text-gray-500 text-sm">CRM system development with Symfony 5 and React/TypeScript</li>
                                <li className="text-gray-500 text-sm">Speed optimization (caching, asset compression, SQL tuning)</li>
                                <li className="text-gray-500 text-sm">REST API development and system integrations</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
