'use client'

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import Link from 'next/link'
import {DownloadCv} from "components/sections/cv/DownloadCv";
import Autoplay from "embla-carousel-autoplay"

import {Card, CardContent} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import {FlipWords} from "@/components/ui/flip-words";

export function FlipWordsDescription() {
    const words = ["PHP", "Backend", "Symfony", "eCommerce"];

    return (
        <div className="h-[10rem] flex justify-center items-center px-4">
            <div
                className="
      text-5xl font-sans text-neutral-600 dark:text-neutral-400
      text-center mx-auto
      max-w-[95%]                         // страховка от переполнения
      max-[550px]:text-4xl
      max-[550px]:leading-[1.1]           // чуть плотнее строки
    "
            >
                <FlipWords words={words} /> <br />
                <span className="pl-2">Software Developer</span>
            </div>
        </div>
    );
}

const About = () => {
    const fastContacts = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/anton-pekhov",
            targetBlank: true,
            icon: ''
        },
        {
            name: "Telegram",
            url: "https://t.me/anthony_1654",
            targetBlank: true,
            icon: ''
        },
        {
            name: "Email",
            url: "pehovanton21@gmail.com",
            targetBlank: false,
            icon: ''
        },
        {
            name: "GitHub",
            url: "https://github.com/Pekhov14",
            targetBlank: true,
            icon: ''
        },
    ];

    const plugin = React.useRef(
        Autoplay({delay: 2000, stopOnInteraction: true})
    )

    const CarouselImages = [
        {
            src: "/assets/img/pekhov_anton_php_developer.jpeg"
        },
        {
            src: "/assets/img/1.jpeg"
        },
        {
            src: "/assets/img/2.jpeg"
        },
    ];

    return (
        <section className="content">
            <div className="content__sides">
                <div className="content__text z-50">
                    <h2>{FlipWordsDescription()}</h2>
                    <span
                        className="
                        text-center mx-auto font-sans text-neutral-400 dark:text-neutral-300
                        pt-4 pb-4
                        xs:pt-3 xs:pb-3
                        max-[550px]:pt-6
                        max-[550px]:pb-6
                      "
                                        >
                      Experienced in opencart & symfony
                    </span>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {fastContacts.map((contact, i) => (
                            <li
                                key={i}
                                className="
                                row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black  border justify-between flex flex-col space-y-4

                                font-light bg-gray-50 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-700/50
                 px-4 py-2.5 border-gray-200/60 dark:border-gray-700/50"
                            >
                                {contact.targetBlank ?
                                    <Link
                                        href={contact.url}
                                        className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 block"
                                        target="_blank"
                                    >
                                        {contact.name}
                                    </Link>
                                    : contact.name + ': ' + contact.url
                                }
                            </li>
                        ))}
                    </ul>

                    <div className="text-center-1">
                        <DownloadCv/>
                    </div>
                </div>

                <DragCards/>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                    className="w-full max-w-xs mx-auto block lg:hidden"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {CarouselImages.map((image, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-2">
                                        <Image
                                            src={image.src}
                                            width="300"
                                            height="300"
                                            alt='Anton'
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>

            </div>
        </section>
    )
}

const DragCards = () => {
    const containerRef = useRef(null);

    return (
        <div className="absolute inset-0 z-10 hidden lg:block" ref={containerRef}>
            <DragCard
                containerRef={containerRef}
                src="/assets/img/pekhov_anton_php_developer.jpeg"
                alt="Example image"
                rotate="6deg"
                top="0%"
                left="55%"
                className="w-36 md:w-56"
            />
            <DragCard
                containerRef={containerRef}
                src=" /assets/img/2.jpeg"
                alt="Example image"
                rotate="12deg"
                top="45%"
                left="60%"
                className="w-24 md:w-48"
            />
            <DragCard
                containerRef={containerRef}
                src="/assets/img/1.jpeg"
                alt="Example image"
                rotate="-6deg"
                top="20%"
                left="75%"
                className="w-52 md:w-80"
            />
        </div>
    );
};

const DragCard = ({containerRef, src, alt, top, left, rotate, className}) => {
    const [zIndex, setZIndex] = useState(0);

    const updateZIndex = () => {
        const els = document.querySelectorAll(".drag-elements");

        let maxZIndex = -Infinity;

        els.forEach((el) => {
            let zIndex = parseInt(
                window.getComputedStyle(el).getPropertyValue("z-index")
            );

            if (!isNaN(zIndex) && zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        });

        setZIndex(maxZIndex + 1);
    };

    return (
        <motion.img
            onMouseDown={updateZIndex}
            style={{
                top,
                left,
                rotate,
                zIndex,
            }}
            className={twMerge(
                "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
                className
            )}
            src={src}
            alt={alt}
            drag
            dragConstraints={containerRef}
            // Uncomment below and remove dragElastic to remove movement after release
            //   dragMomentum={false}
            dragElastic={0.65}
        />
    );
};

export {About}