'use client'

import { FaCheckCircle } from "react-icons/fa";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {Footer} from "@/components/layout/Footer";
import {OpenSource} from './open-source';

export default function Home() {

    const accordionData = [
        {
            question: "How did you get into programming and why did you first choose PHP?",
            answer: "In school, I didn’t excel in computer science, so my teacher asked me to complete an assignment from a provided list for a competition. I decided to create a website. Within two weeks, I built my first site using HTML and CSS. Although the teacher considered it unsatisfactory for the competition, I received a grade. This experience piqued my interest, and I gradually delved deeper into programming. The following year, I placed second in the Kharkiv region in the same competition. My teacher then suggested that I continue learning PHP and JavaScript. Throughout university, I explored various programming languages, but PHP remained my primary focus."
        },
        {
            question: "Self education",
            answer: "I`m continuing to advance as a backend developer, sharpening my skills in Symfony. I’m building my personal site using Next.js and exploring Go (Golang) as a new challenge.",
        },
        {
            question: "What do you not want to work with?",
            answer: "I don’t like working with large volumes of HTML coding or doing web scraping.",
        },
        {
            question: "In what direction would you like to develop?",
            answer: "At the moment, I am focused on Symfony development. I am interested in exploring the combination of PHP and Golang. Generally, I am open to working with other languages and frameworks as well.",
        },
        {
            question: "What are your weaknesses?",
            answer: "I can use too many emojis in text messages 😄.",
        },
        {
            question: "How do you develop and improve your knowledge?",
            answer: "There are enough sources of quality information that I use 🤓🧑‍💻. I watch technical channels on YouTube, read articles on Medium, and read books. I also take courses and listen to podcasts on special sites like DataCamp, Coursera, and SymfonyCasts, among others.",
        },
        {
            question: "What is your level of English, can you speak fluently?",
            answer: "I am comfortable with written communication, but my current conversational skills don’t allow me to express my thoughts as freely as I’d like. 💂",
        },
        {
            question: "What kind of people do you dislike working with?",
            answer: "I prefer not to discuss politics and religion in the workplace.",
        },
        {
            question: "What operating system are you using?",
            answer: "Now I'm working on macOS 💻 with a m1 processor and 16GB RAM",
        },
        {
            question: "Education 🎓",
            answer: "National Aerospace University - \"Kharkiv Aviation Institute\"\n" +
                "Telecommunications and Radio Engineering 2017 - 2021",
        },
    ];

    return (
        <main>
            <section className="flex flex-col items-center justify-center pb-10">
                <h1 className="text-4xl font-bold mb-4">F.A.Q</h1>
                <p className="text-lg text-center p-5">To save you time ⏳ on typical questions, I collected them for you and
                    answered them.</p>

                <Accordion variant="splitted" className="w-full md:w-1/2 p-5">
                    {accordionData.map((item, index) => (
                        <AccordionItem key={index} aria-label={item.question} title={item.question}>
                            {item.answer}
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <OpenSource/>

            <Footer/>
        </main>
    )
}