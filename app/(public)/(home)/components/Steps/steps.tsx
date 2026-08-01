import Image from "next/image"
import { PageWrapper } from "@/components/shared/PageWrapper"

import trend from "@/public/trend.svg"
import like from "@/public/like.png"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import React from "react"
import { Step } from "@/app/(public)/(home)/components/Steps/step.tsx"
import { steps } from "@/app/(public)/(home)/constant.ts"

export function Steps() {
    return (
        <PageWrapper scroll>
            <section
                id="steps"
                className="grid grid-cols-[1fr_2fr] gap-3 lg:gap-4 xl:gap-6 overflow-x-auto no-scrollbar px-4 lg:px-0"
            >
                <div
                    className="w-full select-none h-full bg-purple rounded-[25px] lg:rounded-[35px] flex flex-col gap-y-6 p-6 lg:p-12
        min-w-[300px] lg:min-w-auto shadow-sm"
                >
                    <div className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-[50%] border-3 md:border-4 border-white flex justify-center items-center">
                        <Image
                            src={like}
                            alt={"like"}
                            objectFit="cover"
                            className="scale-75 lg:scale-100"
                        />
                    </div>

                    <h3 className="text-white text-h4/h4 lg:text-h2/h2 font-bold">
                        Всего несколько шагов до&nbsp;старта!
                    </h3>
                </div>

                <div className="flex lg:grid w-full lg:grid-cols-2 select-none gap-3 lg:gap-4 xl:gap-6">
                    {steps.map((step) => (
                        <Step key={step.id} step={step} />
                    ))}

                    <div className="w-full shadow-sm min-w-[350px] lg:min-w-auto  bg-dark-blue rounded-[25px] lg:rounded-[35px] p-6 xl:p-12  gap-6 md:gap-8 xl:gap-12 flex flex-col justify-between  relative overflow-hidden">
                        <Image src={trend} alt={"trend"} className="absolute bottom-0 right-12" />

                        <h5 className="text-white text-h5/h5 lg:text-h4/h4 font-bold">
                            Анализируйте <br /> результат
                        </h5>

                        <Link href={"/#Tariffs"} className="flex w-full md:max-w-[250px] z-10">
                            <Button variant={"accent"} size="large">
                                <span className="text-primary-black text-body-md/body-md font-semibold">
                                    Подключить
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}
