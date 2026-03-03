'use client';

import {BackgroundLines} from "@/components/ui/background-lines";

const FirstScreen = () => {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Anthony <br /> Pekhov
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                I`m a software developer with a focus on backend development, mostly using php with Symfony or Opencart.
            </p>
        </BackgroundLines>
    )
}

export {FirstScreen}