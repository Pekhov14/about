'use client'

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { FaTelegram, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

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
            title: "Cv in pdf = 239kb",
            description:
                <a href='https://anton-pekhov.vercel.app/assets/cv/cv_anton_pekhov_backend_developer.pdf'
                   download
                   className="font-medium text-indigo-600 hover:text-indigo-500"
                >Download →</a>,
            header: '',
            icon: <FaFilePdf />,
        },
        {
            title: "Email",
            description: "pehovanton21@gmail.com",
            header: '',
            icon: <IoMdMail />,
        },
    ];

    return (
        <section className="bg-black p-5 text-xl pb-20">
                <div className="container mx-auto">
                    <div className="text-light p-20">
                        <h2 className="text-white text-5xl text-center">My contacts</h2>
                    </div>
                </div>

            <BentoGridDemo />
        </section>
    )
}

export {Contacts}