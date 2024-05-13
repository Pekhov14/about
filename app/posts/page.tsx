import React from "react";
import {BentoGrid, BentoGridItem} from "components/ui/posts-grid";
import Link from 'next/link'
import Image from "next/image";

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


    const items = [
        {
            title: "Suggestions for seeking assistance from a mentor",
            slug: "suggestions-for-seeking-assistance-from-a-mentor",
            header: '/assets/img/posts/how.jpeg',
            link: 'https://medium.com/@pehov21/how-to-ask-a-mentor-for-help-2fcca7dd09c4'
        },
    ];

    return (
        <div className="h-dvh">

            <section className="content content--centered">
                <div className="content__title">
                    <h1 className="content__title-page">Recent Posts</h1></div>
            </section>

            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <Link href={ item.link ? item.link : `/posts/slug-` + i}
                          key={i}
                          target={ item.link ? '_blank' : '_self'}
                    >
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            header={<Image src={item.header} alt={''} width={250} height={200} />}
                            className="bg-gradient-to-br from-neutral-200 dark:from-neutral-900"
                        />
                    </Link>
                ))}
            </BentoGrid>
        </div>
    );
}
