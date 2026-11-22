"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { Footer } from "@/components/layout/Footer"

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>("0-0")

    const accordionData = [
        {
            category: "Interview Process",
            questions: [
                {
                    question: "What is your preferred process for scheduling an interview?",
                    answer:
                        "A calendar invite works best for me, it helps both of us keep track of the meeting and avoid confusion. If possible, please include the meeting link in the invite description or email body. Thank you!",
                },
            ],
        },
        {
            category: "Work Preferences",
            questions: [
                {
                    question: "What work format works best for you right now?",
                    answer: "Given my current circumstances, I'm considering remote positions only. I hope this will change in the future.",
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
                {
                    question: "What is your time zone and working hours overlap?",
                    answer:
                        "My time zone is UTC+2. I'm flexible with working hours and can adjust my schedule for reasonable overlap with the team when needed.",
                },
                {
                    question: "What are your salary/rate expectations?",
                    answer:
                        "It depends on the role, project, and responsibilities. I'm happy to discuss expectations after learning more details.",
                },
            ],
        },
        {
            category: "Technical Skills",
            questions: [
                {
                    question: "What is your policy on technical assignments?",
                    answer:
                        "I'm fine with technical assignments when they are well-scoped and meaningful. A good task has a clear problem statement, defined requirements, a reasonable time limit, and doesn't look like unpaid work for a real product.\n" +
                        "\n" +
                        "I prefer assignments where the evaluation focuses on my approach and solution quality, not on familiarity with company-specific internals. I avoid overly broad or abstract tasks that effectively amount to free development.",
                },
                {
                    question: "What areas of development interest you most right now?",
                    answer:
                        "I'm most interested in backend development: building APIs, integrations, data flows, and reliable product features. I enjoy working with familiar tools, but I'm also comfortable adapting to different stacks when the project needs it.",
                },
                {
                    question: "Are there any technologies you prefer to avoid?",
                    answer:
                        "I focus on backend development and prefer to avoid extensive HTML/CSS work or web scraping projects.",
                },
                {
                    question: "What is your development environment?",
                    answer:
                        "I currently work on macOS with an M1 processor and 16GB RAM, which provides excellent performance for my development needs.",
                },
            ],
        },
        {
            category: "Growth & Learning",
            questions: [
                {
                    question: "What are your learning goals and career direction?",
                    answer:
                        "I'm focused on deepening my backend expertise while exploring Go and Rust through personal projects. This helps me strengthen my core skills and get fresh perspectives from other languages. I'm especially interested in practical integrations and solving real business problems with the right tools.",
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
            questions: [
                {
                    question: "What would you consider your weaknesses?",
                    answer:
                        "I can sometimes spend too much time polishing a solution when a simpler version would already solve the problem. I'm working on balancing quality with pragmatism by defining scope earlier and validating the approach before going too deep.",
                },
                {
                    question: "What is your English proficiency level?",
                    answer:
                        "I'm comfortable reading documentation, writing in chat, and handling simple work calls like dailies (what I did, what I'm doing, what I'll do next). I can also work with technical documentation in English. Spoken fluency is still something I'm actively improving, especially for more complex discussions.",
                },
            ],
        },
        {
            category: "Background",
            questions: [
                {
                    question: "How did you start your programming journey?",
                    answer:
                        "It started in school when a teacher asked me to create a website for a competition. The first attempt wasn't easy, but building that site with HTML and CSS got me genuinely interested in development.\n\nThe next year I won second place in a regional competition, which gave me a strong push to keep learning. My teacher suggested PHP and JavaScript, and later at university I explored different languages while mostly focusing on PHP.",
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
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="mb-14 max-w-3xl"
                >
                    <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                        Questions, answered plainly.
                    </h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                        A few things people usually ask before an interview or collaboration.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {accordionData.map((category, categoryIndex) => (
                        <motion.section
                            key={category.category}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: categoryIndex * 0.04 }}
                            className="grid gap-4 border-t border-[var(--site-border)] pt-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10"
                        >
                            <div>
                                <p className="text-sm font-semibold tracking-[-0.01em] text-[var(--site-text)]">{category.category}</p>
                                <p className="mt-1 text-sm text-[var(--site-muted)]">
                                    {category.questions.length} {category.questions.length === 1 ? "question" : "questions"}
                                </p>
                            </div>

                            <div className="divide-y divide-[var(--site-border)] border-y border-[var(--site-border)]">
                                {category.questions.map((item, qIndex) => {
                                    const id = `${categoryIndex}-${qIndex}`
                                    const isOpen = openIndex === id

                                    return (
                                        <div key={id}>
                                            <button
                                                type="button"
                                                onClick={() => setOpenIndex(isOpen ? null : id)}
                                                className="flex w-full items-start justify-between gap-6 py-5 text-left"
                                                aria-expanded={isOpen}
                                            >
                                                <span className="text-base font-medium leading-7 text-[var(--site-text)] sm:text-lg">
                                                    {item.question}
                                                </span>
                                                <span
                                                    className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--site-border)] text-[var(--site-muted)] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                                                >
                                                    <Plus className="h-4 w-4" aria-hidden="true" />
                                                </span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.22 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="max-w-3xl pb-6 text-sm leading-7 text-[var(--site-muted)] sm:text-base whitespace-pre-line">
                                                            {item.answer}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.section>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-14 border-t border-[var(--site-border)] pt-8"
                >
                    <p className="text-base font-medium text-[var(--site-text)]">Still have a question?</p>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                        Send me a message — I&apos;m happy to clarify anything about my experience, process, or availability.
                    </p>
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}