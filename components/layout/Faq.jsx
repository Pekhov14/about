import Accordion from "@/components/UI/Accordion";

const Faq = () => {
    return (
        <section className="content content--centered">
            <div className="content__title content__stacked pb-1">
                <h4 className="content__title-main mb-5">Frequently Asked Questions</h4>
                <span className="content__title-min pt-10">To save you time on typical questions, I collected them for you and answered them.</span>
            </div>

            <div className="grid place-items-center w-full">
                <div className="p-5 mx-auto max-w-2xl rounded">
                    <Accordion/>
                </div>
            </div>
        </section>
    )
}

export {Faq}