import { PageWrapper } from "@/components/shared/PageWrapper"
import Image from "next/image"
import big_logo from "@/public/big_logo.svg"
import {
    Accordion,
    AccordionContent,
    AccordionItem as ShadcnAccordionItem,
    AccordionTrigger
} from "@/components/ui/Accordion"
import hide_show from "@/public/hide_show.svg"
import { faqData } from "@/app/(public)/(home)/constant.ts"
import { MessageModal } from "@/app/(public)/(home)/components/Faq/message-modal.tsx"

export function Faq() {
    return (
        <PageWrapper>
            <section
                id="faq"
                className="w-full flex flex-col items-center xl:items-start xl:flex-row md:gap-y-10 gap-6 scroll-mt-50"
            >
                <Accordion className="flex flex-col flex-2 w-full gap-y-3">
                    {faqData.map(({ id, question, answer }) => (
                        <ShadcnAccordionItem
                            key={id}
                            value={String(id)}
                            className="border border-dark-blue/10 rounded-[24px] w-full px-6 not-last:border-b-auto"
                        >
                            <AccordionTrigger className="group/faq-trigger py-6 hover:no-underline items-center **:data-[slot=accordion-trigger-icon]:hidden">
                                <span className="text-primary-black text-h6 lg:text-h5 font-semibold text-start w-full">
                                    {question}
                                </span>
                                <Image
                                    src={hide_show}
                                    alt="hide_show"
                                    className="group-aria-expanded/faq-trigger:rotate-45 rotate-0 transition-transform duration-200 size-6 md:size-8 shrink-0"
                                />
                            </AccordionTrigger>

                            <AccordionContent className="pb-6">
                                <p className="text-primary-black text-body-md/body-sm whitespace-pre-line lg:max-w-[95%]">
                                    {answer}
                                </p>
                            </AccordionContent>
                        </ShadcnAccordionItem>
                    ))}
                </Accordion>

                <div
                    className="flex-1 bg-gradient-custom rounded-[25px] lg:rounded-[35px] max-w-125 lg:min-h-80 xl:min-w-125 h-87.5 p-6 lg:p-12
         flex flex-col justify-between relative gap-6 shadow-md"
                >
                    <div className="flex  flex-col gap-y-3 w-3/5 select-none z-1000">
                        <h4 className="text-white text-h3/h3 font-bold">Напишите нам!</h4>

                        <p className="text-white text-body-md/body-md">
                            Вы можете задать свой вопрос нам лично! Отправьте письмо, а&nbsp;мы
                            постараемся ответить
                        </p>
                    </div>

                    <div className="w-full z-1000 flex">
                        <MessageModal />
                    </div>

                    <Image
                        src={big_logo}
                        alt="big_logo"
                        className="absolute w-27.5 h-27.5 lg:w-32.5 lg:h-32.5 right-6 lg:right-12 top-3 lg:top-9"
                    />
                </div>
            </section>
        </PageWrapper>
    )
}
