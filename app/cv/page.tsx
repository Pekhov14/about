"use client";

import Image from "next/image";
import {DownloadCv} from "@/components/sections/cv/DownloadCv";
import { CiCoffeeCup } from "react-icons/ci";
import {Footer} from "@/components/layout/Footer";

export default function Cv() {

    return (
        <>
            <main className="min-h-screen bg-[var(--site-bg)] px-4 py-16 text-[var(--site-text)] sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-10 flex flex-col items-center text-center">
                        <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                            Anthony Pekhov CV
                        </h1>
                        <div className="mt-6">
                            <DownloadCv />
                        </div>
                    </div>

                    <div
                        id="cv-container"
                        className="mx-auto grid max-w-4xl grid-cols-1 gap-8 rounded-2xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 shadow-sm sm:p-8 md:grid-cols-2"
                    >
                        <div className="col-span-1">
                            <div className="mb-8 text-center">
                                <div className="inline-block">
                                    <Image
                                        src="/assets/img/pekhov_anton.jpeg"
                                        alt="Pekhov Anton php developer"
                                        width={100}
                                        height={100}
                                        className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-[var(--site-border)] object-cover object-center"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-[var(--site-text)]">Anthony Pekhov</h2>
                                <p className="text-[var(--site-muted)]">Software developer</p>
                            </div>

                            <div>
                                <h3 className="mb-2 text-xl font-semibold text-[var(--site-text)]">Contacts</h3>
                                <p className="text-[var(--site-muted)]">
                                    <a href="https://t.me/Anthony_1654" className="text-[var(--site-text)] hover:text-[var(--site-accent)] transition-colors">Telegram:</a> @Anthony_1654
                                </p>
                                <p className="text-[var(--site-muted)]">
                                    <a href="https://anton-pekhov.vercel.app/" className="text-[var(--site-text)] hover:text-[var(--site-accent)] transition-colors">My site:</a> anton-pekhov.vercel.app
                                </p>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-2 text-xl font-semibold text-[var(--site-text)]">Languages</h3>
                                <ul className="list-inside list-disc space-y-1 text-[var(--site-muted)]">
                                    <li><span className="inline-flex items-center gap-1">English (starbucks <CiCoffeeCup className="text-lg" />)</span></li>
                                    <li>Ukrainian</li>
                                    <li>Russian</li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-2 text-xl font-semibold text-[var(--site-text)]">Toolbox</h3>
                                <ul className="list-inside list-disc space-y-1 text-sm text-[var(--site-muted)]">
                                    <li>PHP, JS, SQL, HTML, CSS</li>
                                    <li>MySQL, PostgreSql, Redis</li>
                                    <li>Composer, Npm, Vite</li>
                                    <li>Nginx, GIT, Docker</li>
                                    <li>Opencart, Symfony, Doctrine</li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-2 text-xl font-semibold text-[var(--site-text)]">Education</h3>
                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-[var(--site-text)]">National Aerospace University &quot;KHAI&quot;</h4>
                                    <p className="text-[var(--site-muted)]">Telecommunications and radio engineering.</p>
                                    <span className="text-sm text-[var(--site-muted)]">2017 - 2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div>
                                <h3 className="mb-4 text-xl font-semibold text-[var(--site-text)]">Work Experience</h3>

                                <div className="mb-5">
                                    <h4 className="text-lg font-medium text-[var(--site-text)]">👨‍💻 Freelance</h4>
                                    <p className="text-sm text-[var(--site-muted)]">Now</p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="text-lg font-medium text-[var(--site-text)]">👨‍💻 Small price</h4>
                                    <p className="text-[var(--site-muted)]">Full Stack Developer | <span className="text-sm">December 2024 - December 2025</span></p>
                                    <p className="mt-1 text-[var(--site-muted)]">Created a centralized dashboard to replace manual spreadsheets and provide real-time marketing insights.</p>
                                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[var(--site-muted)]">
                                        <li>Eliminated manual work with automated performance calculations</li>
                                        <li>Connected entire marketing stack (ads, e-commerce, CRM, finance)</li>
                                        <li>Provided executive-ready reports with automated expense tracking</li>
                                    </ul>
                                </div>

                                <div className="mb-5">
                                    <h4 className="text-lg font-medium text-[var(--site-text)]">👨‍💻 Corefy</h4>
                                    <p className="text-[var(--site-muted)]">Backend Developer | <span className="text-sm">May 2023 - July 2023</span></p>
                                    <p className="mt-1 text-[var(--site-muted)]">Contributed to a payment orchestration platform.</p>
                                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[var(--site-muted)]">
                                        <li>Integrated payment provider connectors</li>
                                        <li>Resolved bugs and implemented logic patches using ELK stack for log analysis</li>
                                        <li>Improved system stability by troubleshooting issues reported through Sentry</li>
                                    </ul>
                                </div>

                                <div className="mb-5">
                                    <h4 className="text-lg font-medium text-[var(--site-text)]">👨‍💻 Stellium <span className="text-xs text-[var(--site-muted)]">(Local Web Studio)</span></h4>
                                    <p className="text-[var(--site-muted)]">Full Stack Developer | <span className="text-sm">July 2020 - April 2023 (~2 years 10 months)</span></p>
                                    <p className="mt-1 text-[var(--site-muted)]">Full-cycle web development with focus on e-commerce and business systems.</p>
                                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[var(--site-muted)]">
                                        <li>E-commerce development on OpenCart: performance optimization, SEO, client features</li>
                                        <li>CRM system development with Symfony 5 and React/TypeScript</li>
                                        <li>Speed optimization (caching, asset compression, SQL tuning)</li>
                                        <li>REST API development and system integrations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}