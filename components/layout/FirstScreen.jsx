'use client';

import {gsap} from "gsap";
import preloader from "@/components/helpers/Preloader";
import Lenis from "@studio-freight/lenis";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {generateAccordionElements, renderAccordionElements, toggleAccordion} from "@/components/helpers/accordionUtils";
import {useEffect} from "react";


const FirstScreen = () => {

    if (process.browser) {
        gsap.registerPlugin(ScrollTrigger);

        useEffect(() => {
            // preload the images
            preloader()
        }, []);

// All path elements in the page
        const paths = [...document.querySelectorAll('path.path-anim')];

// Smooth scrolling initialization (using Lenis https://github.com/studio-freight/lenis)
        const lenis = new Lenis({
            lerp: 0.1, smooth: true,
        });
        const scrollFn = () => {
            lenis.raf();
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);

// Animate the d attribute (path initial ) to the value in data-path-to;
// start when the top of its SVG reaches the bottom of the viewport and
// end when the bottom of its SVG reaches the top of the viewport
        paths.forEach(el => {
            const svgEl = el.closest('svg');
            const pathTo = el.dataset.pathTo;

            gsap.timeline({
                scrollTrigger: {
                    trigger: svgEl, start: "top bottom", end: "bottom top", scrub: true
                }
            })
                .to(el, {
                    ease: 'none', attr: {d: pathTo}
                });
        });

        // const generatedElements = generateAccordionElements(faqData);

        // renderAccordionElements(generatedElements, 'faq');
        // toggleAccordion();
    }

    return (
        <>
            <div className="frame"></div>
            <section className="content content--centered">
                <div className="content__title">
                    <span className="content__title-pre content__title-pre--offset">Anthony</span>
                    <h1 className="content__title-main">Pekhov</h1>
                </div>
                <div className="content__scroll">Scroll, if you wish</div>
            </section>
        </>
    )
}

export {FirstScreen}