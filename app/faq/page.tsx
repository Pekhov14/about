"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import {Footer} from "@/components/layout/Footer";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const accordionData = [
        {
            category: "Interview Process",
            icon: "📅",
            questions: [
                {
                    question: "What is your preferred process for scheduling an interview?",
                    answer:
                        "To ensure we both have a smooth and productive conversation, I strongly prefer scheduling calls via a calendar 📅 invite. This way, the meeting is automatically added to both of our calendars with a reminder. When you send the invite, kindly include the meeting link in the description or email body. Thank you!",
                },
            ],
        },
        {
            category: "Work Preferences",
            icon: "💼",
            questions: [
                {
                    question: "What work formats are you considering? (Office, hybrid, remote)",
                    answer: "I'm currently looking for remote positions only.",
                },
                {
                    question: "What is your stance on overtime work?",
                    answer:
                        "I understand that occasional overtime might be necessary during critical periods, but I believe in sustainable work pace as a long-term approach. I'm available for short-term urgent situations when truly needed.",
                },
                {
                    question: "What do you value in a company beyond salary?",
                    answer:
                        "The technology stack and interesting challenges are important, but I also prioritize professional growth opportunities, work-life balance, and a positive team culture. Having motivated colleagues and meaningful projects significantly impacts my job satisfaction.",
                },
            ],
        },
        {
            category: "Technical Skills",
            icon: "⚙️",
            questions: [
                {
                    question: "What is your policy on technical assignments?",
                    answer:
                        "I consider them a valid assessment tool when they are well-scoped. I expect a clear problem statement, defined requirements, and an understanding that evaluation will be based on my approach and solution quality, not on familiarity with company-specific practices.\n" +
                        "\n" +
                        "I do not complete overly broad, abstract tasks or work that constitutes free development for a commercial project.",
                },
                {
                    question: "What areas of development interest you most right now?",
                    answer:
                        "I position myself as a Software Developer with a backend focus. My primary programming language is PHP, and I specialize in Symfony framework. However, identifying as a Software Developer rather than being framework-specific gives me flexibility to adapt to different project needs and technologies.",
                },
                {
                    question: "Are there any technologies you prefer to avoid?",
                    answer:
                        "I focus on backend development and prefer to avoid extensive HTML/CSS work or web scraping projects.",
                },
                {
                    question: "What is your development environment?",
                    answer:
                        "I currently work on macOS 💻 with an M1 processor and 16GB RAM, which provides excellent performance for my development needs.",
                },
            ],
        },
        {
            category: "Growth & Learning",
            icon: "📚",
            questions: [
                {
                    question: "What are your learning goals and career direction?",
                    answer:
                        "I'm currently focused on deepening my Symfony expertise while expanding into Go and Rust through personal projects. This dual approach allows me to strengthen my core backend skills while gaining fresh perspectives from other languages. I'm particularly interested in exploring PHP-Go integrations and remain open to working with different technologies that solve real business problems.",
                },
                {
                    question: "How do you continuously improve your skills?",
                    answer:
                        "I use multiple learning approaches: reading technical blogs and books, watching educational content on YouTube, taking courses on platforms like DataCamp and Coursera, and building personal projects. This combination helps me stay updated with industry trends and deepen my practical knowledge.",
                },
            ],
        },
        {
            category: "Team & Culture",
            icon: "👥",
            questions: [
                {
                    question: "What team environment brings out your best work?",
                    answer:
                        "I thrive in collaborative teams where knowledge sharing is encouraged. I prefer environments with clear communication, constructive code reviews, and opportunities for professional growth. A supportive atmosphere where team members help each other succeed is ideal for me.",
                },
                {
                    question: "What work behaviors do you find challenging?",
                    answer:
                        "I prefer to maintain professional boundaries and avoid discussions about politics or religion in workplace settings. I work best with colleagues who focus on constructive collaboration.",
                },
            ],
        },
        {
            category: "Personal",
            icon: "🙋",
            questions: [
                {
                    question: "What would you consider your weaknesses?",
                    answer:
                        "I tend to overuse emojis in casual written communication 😄. I'm also continuously working on improving my English speaking fluency to better express complex technical concepts.",
                },
                {
                    question: "What is your English proficiency level?",
                    answer:
                        "I'm comfortable with written communication and technical documentation. While I can handle professional conversations, I'm actively working to improve my spoken fluency to express complex ideas more effortlessly. 💂",
                },
            ],
        },
        {
            category: "Background",
            icon: "🎓",
            questions: [
                {
                    question: "How did you start your programming journey?",
                    answer:
                        "My programming journey began in school when a teacher asked me to create a website for a competition. Despite initial setbacks, building that first website with HTML and CSS sparked my interest in development. The following year, I won second place in a regional competition, which motivated me to continue learning. My teacher then recommended PHP and JavaScript, and through university, I explored various languages while primarily focusing on PHP.",
                },
                {
                    question: "What is your educational background?",
                    answer:
                        "I graduated from National Aerospace University - 'Kharkiv Aviation Institute' with a degree in Telecommunications and Radio Engineering (2017-2021).",
                },
            ],
        },
    ]

    return (
        <main className="min-h-screen bg-[var(--site-bg)] text-[var(--site-text)]">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--site-muted)]">FAQ</p>
                    <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                        To save you time on typical questions, I collected them for you and answered them honestly and comprehensively.
                    </p>
                </motion.div>

                <div className="grid gap-6">
                    {accordionData.map((category, categoryIndex) => (
                        <motion.section
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: categoryIndex * 0.06 }}
                            className="rounded-2xl border border-[var(--site-border)] bg-[var(--site-panel)] p-5 sm:p-7 shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl sm:text-3xl">{category.icon}</span>
                                <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-[var(--site-text)]">{category.category}</h2>
                            </div>

                            <div className="space-y-3">
                                {category.questions.map((item, qIndex) => {
                                    const globalIndex = categoryIndex * 100 + qIndex
                                    const isOpen = openIndex === globalIndex

                                    return (
                                        <motion.div
                                            key={qIndex}
                                            layout
                                            className="border border-[var(--site-border)] rounded-xl overflow-hidden bg-[var(--site-card)]/50"
                                        >
                                            <button
                                                onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                                                className="w-full px-4 sm:px-5 py-4 flex items-center justify-between text-left hover:bg-[var(--site-card)] transition-colors duration-200"
                                            >
                                                <span className="font-semibold text-[var(--site-text)] pr-4 leading-relaxed text-sm sm:text-base">
                                                    {item.question}
                                                </span>
                                                <motion.div
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="flex-shrink-0 text-[var(--site-muted)]"
                                                >
                                                    <ChevronDown className="w-5 h-5" />
                                                </motion.div>
                                            </button>

                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                    >
                                                        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[var(--site-border)]">
                                                            <p className="text-[var(--site-muted)] leading-7 text-sm sm:text-base whitespace-pre-line">{item.answer}</p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.section>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <div className="rounded-2xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 sm:p-8 shadow-sm max-w-2xl mx-auto">
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--site-text)] mb-3">Still have questions?</h3>
                        <p className="text-[var(--site-muted)] leading-7 text-sm sm:text-base">
                            Feel free to reach out! I&apos;m always happy to discuss opportunities and answer any additional questions you might have.
                        </p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}