'use client'

import {CopyToClipboard} from "@/components/helpers/CopyToClipboard";

const Contacts = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className="content content--centered footer">
            <div className="container mx-auto">
                <div className="content__text content__text--left text-light p-20">
                    <h2>My contacts for questions and suggestions</h2>
                </div>

                <div className="flex flex-wrap -mx-4 p-5">
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 lg:pb-3 md:pb-3">
                        <div className="bg-white text-black p-8 text-xl rounded-lg">
                            <div className="flex justify-between">
                                <div className="font-medium text-slate-900">
                                    <span>Email</span>
                                </div>
                                <CopyToClipboard value="pehovanton21@gmail.com"/>
                            </div>

                            <p>pehovanton21@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 lg:pb-3 md:pb-3">
                        <div className="bg-white text-black p-8 text-xl rounded-lg">
                            <div className="flex justify-between">
                                <div className="font-medium text-slate-900">
                                    <span>Telegram</span>
                                </div>
                                <CopyToClipboard value="@Anthony_1654"/>
                            </div>

                            <p>
                                <a href="https://t.me/anthony_1654"
                                   target="_blank"
                                   className="h6 mb-0 fw-light stretched-link"
                                >@Anthony_1654</a>
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                        <div className="bg-white text-black p-8 text-xl rounded-lg">
                            <div className="flex justify-between">
                                <div className="font-medium text-slate-900">
                                    <span>Linkedin</span>
                                </div>
                                <CopyToClipboard value="in/anton-pekhov"/>
                            </div>

                            <p>
                                <a href="https://www.linkedin.com/in/anton-pekhov"
                                   target="_blank"
                                   className="fast-icon"
                                >in/anton-pekhov</a>
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                        <div className="bg-white text-black p-8 text-xl rounded-lg">
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium">cv_anton_pekhov_backend_developer.pdf</span>
                                <span className="flex-shrink-0 text-gray-400">239kb</span>
                            </div>

                            <a href="/assets/cv/cv_anton_pekhov_backend_developer.pdf"
                               download
                               className="font-medium text-indigo-600 hover:text-indigo-500"
                            >Download <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <p className="credits">&copy; {currentYear} - Anthony Pekhov</p>
        </section>
    )
}

export {Contacts}