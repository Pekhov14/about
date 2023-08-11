'use client'

import {FirstScreen} from "@/components/layout/FirstScreen";
import {About} from "@/components/layout/About";
import {Experience} from "@/components/layout/Experience";
import {UsedTools} from "@/components/layout/UsedTools";
import {Education} from "@/components/layout/Education";
import {Contacts} from "@/components/layout/Contacts";

export default function Home() {
    return (
        <main>
            <FirstScreen/>
            <About/>
            <Experience/>
            <UsedTools/>
            <Education/>
            <Contacts/>
        </main>
    )
}
