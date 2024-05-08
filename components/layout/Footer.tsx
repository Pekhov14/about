import React, {useState, useEffect} from "react";
import {Link} from "@nextui-org/react";
import {Logo} from "@/components/ui/Logo";
import moment from "moment";
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [lastUpdated, setLastUpdated] = useState('');

    useEffect(() => {
        fetch('/last-updated.json')
            .then(response => response.json())
            .then(data => {
                const formattedDate = moment(data.lastUpdated, "YYYY-MM-DD HH:mm:ss Z").format("MMMM DD, YYYY, hh:mm A z");
                setLastUpdated(formattedDate);
            });
    }, []);

    return (
        <section>
            <div className="section-footer border-t border-gray-100 border-opacity-10 justify-center pt-20 pb-20 flex">
                <div className="flex flex-col w-full sm:w-3/5 pl-2 pr-2 gap-y-16">
                    <div className="flex justify-between">
                        <div className="h-20 inline-block align-middle max-w-full">
                            <Logo/>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="grid grid-rows-1 gap-y-4">
                                <div className="text-footer-links-overline">MAIN</div>
                                <div className="grid grid-rows-1 gap-y-2">
                                    <Link href="work"
                                          aria-current="page"
                                          className="footer-link w-inline-block w--current"
                                    >
                                        <span className="text-footer-link">Work</span>
                                    </Link>
                                    <Link href="/"
                                          aria-current="page"
                                          className="footer-link w-inline-block w--current"
                                    >
                                        <span className="text-footer-link">About</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="grid grid-rows-1 gap-y-4">
                                <div className="text-footer-links-overline">CONTACT</div>
                                <div className="grid grid-rows-1 gap-y-2">
                                    {/* TODO: Change to Link*/}
                                    <a
                                        href="https://www.linkedin.com/in/anton-pekhov"
                                        target="_blank"
                                        className="footer-link w-inline-block"
                                    >
                                        <div className="text-footer-link">LinkedIn</div>
                                        <Image
                                            src="/assets/svg/arrow.svg"
                                            loading="lazy"
                                            alt=""
                                            className="icon-external"
                                            width={15}
                                            height={15}
                                        />
                                    </a>
                                    <a
                                        href="/cv"
                                        target="_blank"
                                        className="footer-link w-inline-block">
                                        <div className="text-footer-link">Resume</div>
                                        <Image
                                            src="/assets/svg/arrow.svg"
                                            loading="lazy"
                                            alt=""
                                            className="icon-external"
                                            width={15}
                                            height={15}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="footer-bottom-left">
                            <div className="text-footer-copyright">
                                © {currentYear} Anthony Pekhov
                            </div>
                            <div className="text-under-copyright">Made with love and Green Teas</div>
                        </div>
                        <div className="footer-bottom-right">
                            <div id="last-updated" className="text-last-updated">
                                {/* TODO: Last update fix bash script*/}
                                Last updated by Pekhov on {lastUpdated} EEST

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Footer}