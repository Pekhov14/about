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
            name: "Medium",
            url: "https://medium.com/@pehov21",
            targetBlank: true,
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
                    <h2>PHP Software Developer</h2>
                    <span className="pt-5 pb-5">Experienced in opencart & symfony</span>

                    <ul className="list-inline">
                        {fastContacts.map((contact, i) => (
                            <li className="list-inline-item font-light" key={i}>
                                <Link href={contact.url}
                                      className="hover:underline "
                                      target={contact.targetBlank === true ? "_blank" : "_self"}
                                >
                                    {contact.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="text-center-1">
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <div className="flex w-0 flex-1 items-center">
                                <DownloadCv/>
                            </div>
                        </div>
                    </div>
                </div>

                <DragCards/>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                    className="w-full max-w-xs block lg:hidden"
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