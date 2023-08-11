import {Experience} from "@/components/Sections/Experience";
import {UsedTools} from "@/components/Sections/UsedTools";
import {Education} from "@/components/Sections/Education";
import {Contacts} from "@/components/Sections/Contacts";


export default function Home() {
    return (
        <main>
            <Experience/>
            <UsedTools/>
            <Education/>
            <Contacts/>
        </main>
    )
}
