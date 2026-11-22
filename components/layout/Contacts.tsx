'use client'

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {FaTelegram, FaLinkedin, FaFilePdf, FaEnvelope} from "react-icons/fa";
import {Download} from "lucide-react";
import React from "react";

const Contacts = () => {
    const items = [
        {
            title: <a href='https://t.me/anthony_1654' className="hover:text-[var(--site-accent)] transition-colors">Telegram</a>,
            description: "@Anthony_1654",
            header: '',
            icon: <FaTelegram className="h-5 w-5" />,
        },
        {
            title: <a href='https://www.linkedin.com/in/anton-pekhov/' className="hover:text-[var(--site-accent)] transition-colors">Linkedin</a>,
            description: "/in/anton-pekhov",
            header: '',
            icon: <FaLinkedin className="h-5 w-5" />,
        },
        {
            title: "Resume (PDF)",
            description: (
                <a
                    href="/assets/cv/cv_anton_pekhov_backend_developer.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--site-border)] px-4 py-2 text-sm font-bold text-[var(--site-text)] transition-colors hover:bg-[var(--site-panel)]"
                >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download CV
                </a>
            ),
            header: '',
            icon: <FaFilePdf className="h-5 w-5" />,
        },
        {
            title: <a href='mailto:pehovanton21@gmail.com' className="hover:text-[var(--site-accent)] transition-colors">Email</a>,
            description: "pehovanton21@gmail.com",
            header: '',
            icon: <FaEnvelope className="h-5 w-5" />,
        },
    ];

    return (
        <section id="contacts" className="relative overflow-hidden bg-[var(--site-bg)] px-4 py-20 text-[var(--site-text)] sm:px-6 lg:px-8">
            <div className="ap-noise pointer-events-none absolute inset-0 opacity-[0.08]" />
            <div className="relative mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                        Contacts
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                        Open to remote opportunities, collaborations, and interesting backend projects.
                    </p>
                </div>

                <BentoGrid className="max-w-4xl mx-auto md:grid-cols-2 md:auto-rows-[11rem]">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}

export {Contacts}