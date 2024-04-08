// @ts-ignore
import Accordion from "@/components/ui/Accordion";

const Faq = () => {
    return (
        <section className="content content--centered">
            <div className="content__title content__stacked pb-1">
                <h4 className="content__title-main mb-5">Frequently Asked Questions</h4>
                <span className="content__title-min pt-10">To save you time on typical questions, I collected them for you and answered them.</span>
            </div>

            <div className="w-full lg:w-1/2 text-xl">
                <Accordion/>
            </div>
        </section>
    )
}

export {Faq}