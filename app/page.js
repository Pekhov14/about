'use client'

import {FirstScreen} from "@/components/layout/FirstScreen";
import {About} from "@/components/layout/About";
import {UsedTools} from "@/components/layout/UsedTools";
import {Education} from "@/components/layout/Education";
import {Contacts} from "@/components/layout/Contacts";
import {Faq} from "@/components/layout/Faq";

export default function Home() {
    return (
        <main>
            <FirstScreen/>
            <About/>
            <UsedTools/>
            <Faq/>
            <Education/>
            <Contacts/>
        </main>
    )
}
