"use client"

import { useAccordionStore } from "@/store/accordionStore"
import Image from "next/image"
import hide_show from "@/public/hide_show.svg"
import { Typography } from "@/ui/core/Typography"

const AccordionItem = ({
    id,
    question,
    answer
}: {
    id: number
    question: string
    answer: string
}) => {
    const { openAccordion, setOpenAccordion } = useAccordionStore()
    const isOpen = openAccordion === id

    const toggleAccordion = () => {
        setOpenAccordion(isOpen ? null : id)
    }

    return (
        <li
            onClick={toggleAccordion}
            className={`border border-darkBlue/10 rounded-[24px] w-full p-[24px] flex flex-col cursor-pointer  ${
                isOpen ? "gap-y-[24px]" : "gap-y-0"
            } transition-all duration-300 select-none`}
        >
            <button className="flex items-center justify-between cursor-pointer">
                <Typography color="black" className="text-start w-full" variants="button">
                    {question}
                </Typography>
                <Image
                    src={hide_show}
                    alt="hide_show"
                    className={`${
                        isOpen ? "rotate-45" : "rotate-0"
                    } transition-transform duration-200 w-[24px] h-[24px] md:w-[32x] md:h-[32px] cursor-pointer`}
                />
            </button>

            <div
                className={`${
                    isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
                } overflow-hidden transition-all`}
            >
                <Typography
                    color="black"
                    className="whitespace-pre-line lg:max-w-[95%]"
                    variants="p"
                >
                    {answer}
                </Typography>
            </div>
        </li>
    )
}

export default AccordionItem
