import {Experience} from "@/components/layout/Experience";
import {UsedTools} from "@/components/layout/UsedTools";
import {Education} from "@/components/layout/Education";
import {Contacts} from "@/components/layout/Contacts";
import {About} from "@/components/layout/About";


export default function Home() {
    return (
        <main>
            <About/>
            <Experience/>
            <UsedTools/>
            <Education/>
            <Contacts/>
        </main>
    )
}
