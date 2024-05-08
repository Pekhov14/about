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
            <div className="section-footer">
                <div className="container-footer">
                    <div className="footer-top-wrapper">
                        <div className="logomark-footer">
                            <Logo/>
                        </div>
                        <div className="footer-links-column-wrapper">
                            <div className="footer-links-column">
                                <div className="text-footer-links-overline">MAIN</div>
                                <div className="footer-links-wrapper">
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
                            <div className="footer-links-column">
                                <div className="text-footer-links-overline">CONTACT</div>
                                <div className="footer-links-wrapper">
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
                                            className="icon-external"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* TODO: Свой лого вставить за место версаль в иконку сайта */}
                    <div className="footer-bottom-wrapper">
                        <div className="footer-bottom-left">
                            <div className="text-footer-copyright">© {currentYear} Anthony Pekhov. All Rights
                                Reserved.
                            </div>
                            <div className="text-under-copyright">Made with love and Green Teas</div>
                        </div>
                        <div className="footer-bottom-right">
                            <div id="last-updated" className="text-last-updated">
                                {/* TODO: Last update*/}
                                {/*April 15, 2024, 12:35 AM EST*/}
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