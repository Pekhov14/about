"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import {Footer} from "@/components/layout/Footer";

export default function Home() {
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
                        "I'm open to reasonable-sized coding tasks, though I have mixed feelings about them. Sometimes assignments can be too abstract with insufficient requirements, where the lack of clear specifications is justified as 'wanting to see creative thinking.' Additionally, candidates join an existing team with established coding standards that they naturally aren't familiar with yet. Ideally, assignments should either include clear expectations for the solution or this aspect shouldn't be a critical evaluation factor.",
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
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-stone-50 to-gray-100">
            <div className="container mx-auto px-4 py-16 md:py-24">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">Frequently Asked Questions</h1>
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed font-light">
                        To save you time ⏳ on typical questions, I collected them for you and answered them honestly and
                        comprehensively.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid gap-6 md:gap-8 max-w-5xl mx-auto">
                    {accordionData.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                        >
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-black/5">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-3xl">{category.icon}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-black">{category.category}</h2>
                                </div>

                                <div className="space-y-4">
                                    {category.questions.map((item, qIndex) => {
                                        const globalIndex = categoryIndex * 100 + qIndex
                                        const isOpen = openIndex === globalIndex

                                        return (
                                            <motion.div
                                                key={qIndex}
                                                layout
                                                className="border border-black/10 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
                                            >
                                                <button
                                                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-black/5 transition-colors duration-200 group"
                                                >
                          <span className="font-semibold text-black pr-4 leading-relaxed group-hover:text-black/70 transition-colors">
                            {item.question}
                          </span>
                                                    <motion.div
                                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="flex-shrink-0"
                                                    >
                                                        <ChevronDown className="w-5 h-5 text-black/50" />
                                                    </motion.div>
                                                </button>

                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <div className="px-6 pb-5 pt-2">
                                                                <div className="w-12 h-1 bg-black/20 rounded-full mb-4"></div>
                                                                <p className="text-black/70 leading-relaxed font-light">{item.answer}</p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Call-to-Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-16 max-w-2xl mx-auto"
                >
                    <div className="bg-white/50 border border-black/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Still have questions?</h3>
                        <p className="text-black/60 mb-6 leading-relaxed font-light">
                            Feel free to reach out! I&apos;m always happy to discuss opportunities and answer any additional questions you
                            might have.
                        </p>
                        <div className="text-4xl">💬</div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}