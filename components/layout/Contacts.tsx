'use client'

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {FaTelegram, FaLinkedin, FaFilePdf, FaEnvelope} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {DownloadCv} from "@/components/sections/cv/DownloadCv";

const Contacts = () => {
    function BentoGridDemo() {
        return (
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        );
    }

    const items = [
        {
            title: <a href='https://t.me/anthony_1654'>Telegram</a>,
            description: "@Anthony_1654",
            header: '',
            icon: <FaTelegram />,
        },
        {
            title: <a href='https://www.linkedin.com/in/anton-pekhov/'>Linkedin</a>,
            description: "/in/anton-pekhov",
            header: '',
            icon: <FaLinkedin />,
        },
        {
            title: <a href='https://twitter.com/Pekhov_Anton'>X (twitter)</a>,
            description: "/Pekhov_Anton",
            header: '',
            icon: <FaSquareXTwitter />,
        },
        {
            title: "Resume",
            description:
                <>
                    <DownloadCv />
                </>,
            header: '',
            icon: <FaFilePdf/>,
        },
    ];

    return (
        <section className="p-5 text-xl pb-20" style={{ background: '#101010' }}>
            <div className="container mx-auto">
                <div className="text-light p-20">
                    <h2 className="text-white text-5xl text-center">Contacts</h2>
                </div>
            </div>

            <BentoGridDemo/>
        </section>
    )
}

export {Contacts}