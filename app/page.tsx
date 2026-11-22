'use client'

import {FirstScreen} from "@/components/layout/FirstScreen";
import {About} from "@/components/layout/About";
import {UsedTools} from "@/components/layout/UsedTools";
import {Contacts} from "@/components/layout/Contacts";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <main>
            <FirstScreen/>
            <About/>
            <UsedTools/>
            <Contacts/>
            <Footer />
        </main>
    )
}
