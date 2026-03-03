"use client"

import React from "react";
import {Footer} from "@/components/layout/Footer";

export default function Posts() {

    // TODO: Blog in markdown?
    // slug
    // Meta-tags
    // Multilingual
    // Switcher for theme

    const Skeleton = () => (
        <div
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    );

    return (
        <>
            <h1 className="text-center p-20 text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text">
                Coming soon
            </h1>
            <Footer />

            {/*<BentoGrid className="max-w-4xl mx-auto">*/}
            {/*    {items.map((item, i) => (*/}
            {/*        <Link href={ item.link ? item.link : `/posts/slug-` + i}*/}
            {/*              key={i}*/}
            {/*              target={ item.link ? '_blank' : '_self'}*/}
            {/*        >*/}
            {/*            <>*/}
            {/*                <BentoGridItem*/}
            {/*                    key={i}*/}
            {/*                    title={item.title}*/}
            {/*                    header={<Image src={item.header} alt={''} width={250} height={200} />}*/}
            {/*                    className="bg-gradient-to-br from-neutral-200 dark:from-neutral-900"*/}
            {/*                    description="#php #backend"*/}
            {/*                />*/}
            {/*            </>*/}
            {/*        </Link>*/}
            {/*    ))}*/}
            {/*</BentoGrid>*/}
        </>
    );
}
