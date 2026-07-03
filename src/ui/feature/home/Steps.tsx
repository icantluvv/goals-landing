import Image from "next/image"
import { Typography } from "@/ui/core/Typography"
import AnalysisButton from "@/ui/shared/steps/AnalysisButton"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"

import trend from "@/public/trend.svg"
import like from "@/public/like.png"

import { steps } from "@/constants/mocks"
import Step from "@/ui/shared/steps/Step"

const Steps = () => {
    return (
        <PageWrapper scroll>
            <section
                id="steps"
                className="grid grid-cols-[1fr_2fr] gap-3 lg:gap-4 xl:gap-6 overflow-x-auto no-scrollbar px-4 lg:px-0"
            >
                <div
                    className="w-full select-none h-full bg-Purple rounded-[25px] lg:rounded-[35px] flex flex-col gap-y-[24px] p-[24px] lg:p-[48px]
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

                    <Typography color="white" variants="h3">
                        Всего несколько шагов до старта!
                    </Typography>
                </div>

                <div className="flex lg:grid w-full lg:grid-cols-2 select-none gap-3 lg:gap-4 xl:gap-6">
                    {steps.map((step) => (
                        <Step key={step.id} step={step} />
                    ))}

                    <div className="w-full shadow-sm min-w-[350px] lg:min-w-auto  bg-darkBlue rounded-[25px] lg:rounded-[35px] p-3 md:p-6 xl:p-12 flex gap-6 md:gap-8 xl:gap-12flex flex-col justify-between  relative overflow-hidden">
                        <Image
                            src={trend}
                            alt={"trend"}
                            className="absolute bottom-0 right-[48px]"
                        />

                        <Typography color="white" variants="h5">
                            Анализируйте <br /> результат
                        </Typography>

                        <AnalysisButton />
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}

export default Steps
