'use client'

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {

    const accordionData = [
        {
            question: "How did you get into programming and why did you first choose PHP?",
            answer: "In school, I lacked sufficient grades in computer science, " +
                "so the teacher asked me to complete an assignment for a competition from a provided list. " +
                "I opted to attempt creating a website. Within two weeks, I crafted my first website using HTML and CSS. " +
                "While the teacher deemed it unsatisfactory for the competition, " +
                "a grade was assigned. Intrigued, I began slowly advancing in this field. " +
                "The following year, I secured second place in the Kharkiv region in the same competition. " +
                "Subsequently, the teacher recommended I continue learning PHP and JS. Throughout university, " +
                "I experimented with other languages, yet PHP remained my primary focus.\n"
        },
        {
            question: "Self education",
            answer: "I`m continue progress in symfony, my personal site I write in next.js, now i`m learning golang",
        },
        {
            question: "What do you not want to work with?",
            answer: "I don't like doing a lot of HTML coding. Engage in web page parsing.\n" +
                "I don’t like it when tasks need to be done yesterday.\n",
        },
        {
            question: "In what direction would you like to develop?",
            answer: "At the moment, I'm interested in developing in the Symfony and React stack and aiming to reach the position of a senior developer. I don't have anything against using tools like Golang, Node.js, Python, and others, as I believe that languages and frameworks are tools for solving problems. In the future, I would like my position to be called a senior software developer, not tied to a specific language.",
        },
        {
            question: "What are your weaknesses?",
            answer: "I can be overly positive and use too many emojis in text messages 😄.",
        },
        {
            question: "How do you develop and improve your knowledge?",
            answer: "There are enough sources of quality information that I use 🤓🧑‍💻. I watch technical channels on YouTube, read articles on Medium, and read books. I also take courses and listen to podcasts on special sites like DataCamp, Coursera, and SymfonyCasts, among others.",
        },
        {
            question: "What is your level of English, can you speak fluently?",
            answer: "I can engage in written communication, but my current conversational skills don't allow me to express my thoughts freely. 💂",
        },
        {
            question: "What kind of people do you dislike working with?",
            answer: "I`m prefer not to discuss politics and religion in the workplace.",
        },
        {
            question: "What operating system are you using?",
            answer: "Now I'm working on macOS 💻 with a m1 processor",
        },
        {
            question: "Education 🎓",
            answer: "National Aerospace University - \"Kharkiv Aviation Institute\"\n" +
                "Telecommunications and Radio Engineering 2017 - 2021",
        },
    ];

    return (
        <main>
            <section className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4">F.A.Q</h1>
                <p className="text-lg text-center">To save you time ⏳ on typical questions, I collected them for you and
                    answered them.</p>

                <Accordion type="single" collapsible className="w-full md:w-1/2 p-5">
                    {accordionData.map(item => (
                        <AccordionItem key={item.question} value={item.question}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent className="text-base">{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <section className="flex flex-col items-center justify-center">
                <div className="card-body pt-10">
                    <h2 className="pb-5 font-bold text-center">Courses</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <ul className="list-none">
                            <li className="flex items-center space-x-2">
                                <FaCheckCircle/>
                                <a href="https://symfonycasts.com/certificates/B27F144BC131" target="_blank"
                                   className="text-base font-light">Doctrine, Symfony &amp; the Database</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaCheckCircle/>
                                <a href="https://symfonycasts.com/certificates/2F51C994C127" target="_blank"
                                   className="text-base font-light">Charming Development in Symfony5</a>
                            </li>
                        </ul>
                        <ul className="list-none">
                            <li className="flex items-center space-x-2">
                                <FaCheckCircle/>
                                <a href="https://www.datacamp.com/statement-of-accomplishment/course/7abaa3307319dfd44d6bdeb82985e18a2b642a5e"
                                   target="_blank" className="text-base font-light">Introduction to Relational Databases
                                    in
                                    SQL</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaCheckCircle/>
                                <a href="https://www.datacamp.com/statement-of-accomplishment/course/08789943e5fd483ff2417c31aaaff459e9324ebd"
                                   target="_blank" className="text-base font-light">Introduction to SQL</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaCheckCircle/>
                                <a href="https://www.datacamp.com/statement-of-accomplishment/course/34e445bcd770c810c7ad184068b852c5c3629412"
                                   target="_blank" className="text-base font-light">Joining Data in SQL</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}