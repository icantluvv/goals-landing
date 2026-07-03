import { faqData } from "@/constants/mocks"
import { AskQuestion } from "@/ui/shared/faq"
import { AccordionItem } from "@/ui/shared/faq"
import { PageWrapper } from "@/ui/shared/page-wrapper"
import { CreateApplicationBlock } from "@/ui/shared/CreateApplicationBlock"

const FAQ = () => {
    return (
        <PageWrapper>
            <section
                id="faq"
                className="w-full flex flex-col items-center xl:items-start xl:flex-row md:gap-y-[40px] gap-[24px] scroll-mt-[200px]"
            >
                <ul className="flex flex-col flex-2 gap-y-[12px]">
                    {faqData.map(({ id, question, answer }) => (
                        <AccordionItem key={id} id={id} question={question} answer={answer} />
                    ))}
                </ul>
                <AskQuestion />
            </section>

            <section className={"mt-12"}>
                <CreateApplicationBlock />
            </section>
        </PageWrapper>
    )
}

export default FAQ
