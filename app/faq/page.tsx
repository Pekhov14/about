'use client'

import {Accordion, AccordionItem} from "@nextui-org/react";
import {Footer} from "@/components/layout/Footer";

export default function Home() {

    const accordionData = [
        {
            question: "What is your preferred process for scheduling an interview?",
            answer: "To ensure we both have a smooth and productive conversation, " +
                "I strongly prefer scheduling calls via a calendar 📅 invite. " +
                "This way, the meeting is automatically added to both of our calendars with a reminder. " +
                "When you send the invite, kindly include the meeting link in the description or email body. Thank you!"
        },
        {
            question: "What work formats are you considering? (Office, hybrid, remote)",
            answer: "I'm currently looking for remote positions only."
        },
        {
            question: "What is your policy on technical assignments?",
            answer: "I'm open to reasonable-sized coding tasks, though I have mixed feelings about them. Sometimes assignments can be too abstract with insufficient requirements, where the lack of clear specifications is justified as 'wanting to see creative thinking.' Additionally, candidates join an existing team with established coding standards that they naturally aren't familiar with yet. Ideally, assignments should either include clear expectations for the solution or this aspect shouldn't be a critical evaluation factor."
        },
        {
            question: "What areas of development interest you most right now?",
            answer: "I position myself as a Software Developer with a backend focus. My primary programming language is PHP, and I specialize in Symfony framework. However, identifying as a Software Developer rather than being framework-specific gives me flexibility to adapt to different project needs and technologies."
        },
        {
            question: "What team environment brings out your best work?",
            answer: "I thrive in collaborative teams where knowledge sharing is encouraged. I prefer environments with clear communication, constructive code reviews, and opportunities for professional growth. A supportive atmosphere where team members help each other succeed is ideal for me."
        },
        {
            question: "What do you value in a company beyond salary?",
            answer: "The technology stack and interesting challenges are important, but I also prioritize professional growth opportunities, work-life balance, and a positive team culture. Having motivated colleagues and meaningful projects significantly impacts my job satisfaction."
        },
        {
            question: "What is your stance on overtime work?",
            answer: "I understand that occasional overtime might be necessary during critical periods, but I believe in sustainable work pace as a long-term approach. I'm available for short-term urgent situations when truly needed."
        },
        {
            question: "Are there any technologies you prefer to avoid?",
            answer: "I focus on backend development and prefer to avoid extensive HTML/CSS work or web scraping projects."
        },
        {
            question: "What are your learning goals and career direction?",
            answer: "I'm currently focused on deepening my Symfony expertise while expanding into Go and Rust through personal projects. " +
                "This dual approach allows me to strengthen my core backend skills while gaining fresh perspectives from other languages. " +
                "I'm particularly interested in exploring PHP-Go integrations and remain open to working with different technologies that solve real business problems."
        },
        {
            question: "What would you consider your weaknesses?",
            answer: "I tend to overuse emojis in casual written communication 😄. I'm also continuously working on improving my English speaking fluency to better express complex technical concepts."
        },
        {
            question: "How do you continuously improve your skills?",
            answer: "I use multiple learning approaches: reading technical blogs and books, watching educational content on YouTube, taking courses on platforms like DataCamp and Coursera, and building personal projects. This combination helps me stay updated with industry trends and deepen my practical knowledge."
        },
        {
            question: "What is your English proficiency level?",
            answer: "I'm comfortable with written communication and technical documentation. While I can handle professional conversations, I'm actively working to improve my spoken fluency to express complex ideas more effortlessly. 💂"
        },
        {
            question: "What work behaviors do you find challenging?",
            answer: "I prefer to maintain professional boundaries and avoid discussions about politics or religion in workplace settings. I work best with colleagues who focus on constructive collaboration."
        },
        {
            question: "What is your development environment?",
            answer: "I currently work on macOS 💻 with an M1 processor and 16GB RAM, which provides excellent performance for my development needs."
        },
        {
            question: "How did you start your programming journey?",
            answer: "My programming journey began in school when a teacher asked me to create a website for a competition. Despite initial setbacks, building that first website with HTML and CSS sparked my interest in development. The following year, I won second place in a regional competition, which motivated me to continue learning. My teacher then recommended PHP and JavaScript, and through university, I explored various languages while primarily focusing on PHP."
        },
        {
            question: "What is your educational background? 🎓",
            answer: "I graduated from National Aerospace University - 'Kharkiv Aviation Institute' with a degree in Telecommunications and Radio Engineering (2017-2021)."
        }
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

            <Footer/>
        </main>
    )
}