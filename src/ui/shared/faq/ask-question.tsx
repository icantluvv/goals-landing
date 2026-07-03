"use client"

import Image from "next/image"
import big_logo from "@/public/big_logo.svg"
import { useMessageModalStore } from "@/store/messageModalStore"
import { Button } from "@/ui/core/Button"
import { Typography } from "@/ui/core/Typography"

export const AskQuestion = () => {
    const { setMessageModalOpen } = useMessageModalStore()
    return (
        <div
            className="flex-1 bg-gradient-custom rounded-[25px] lg:rounded-[35px] max-w-[500px] lg:min-h-[320px] xl:min-w-[500px] h-[350px] p-[24px] lg:p-[48px]
         flex flex-col justify-between relative gap-[24px] shadow-md"
        >
            <div className="flex  flex-col gap-y-[12px] w-[60%] select-none z-[1000]">
                <Typography color="white" variants="h5">
                    Напишите нам!
                </Typography>

                <Typography color="white" variants="p">
                    Вы можете задать свой вопрос нам лично! Отправьте письмо, а мы постараемся
                    ответить
                </Typography>
            </div>

            <div className="w-full z-[1000] flex">
                <Button componentType={"white"} onClick={() => setMessageModalOpen()} size="large">
                    <Typography variants={"button"}>Задать вопрос в Goals</Typography>
                </Button>
            </div>

            <Image
                src={big_logo}
                alt="big_logo"
                className="absolute w-[110px] h-[110px] lg:w-[130px] lg:h-[130px] right-[24px] lg:right-[48px] top-[12px] lg:top-[36px]"
            />
        </div>
    )
}
