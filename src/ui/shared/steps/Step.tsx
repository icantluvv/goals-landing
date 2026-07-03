import { Typography } from "@/ui/core/Typography"

import type { Step as StepType } from "@/constants/mocks"

import Image from "next/image"

const Step = ({ step }: { step: StepType }) => {
    return (
        <div className="w-full shadow-sm min-w-[350px] relative overflow-hidden lg:min-w-auto bg-darkBlue/5 lg:rounded-[35px] rounded-[25px] p-3 md:p-6 xl:p-12 flex flex-col gap-6 md:gap-8 xl:gap-12">
            <div className={"flex items-center justify-between "}>
                <div className="xl:w-[75px] xl:h-[75px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] rounded-full md:border-4 border-3 border-darkBlue flex justify-center items-center">
                    <Typography className="text-darkBlue z-[1000] block " variants="accent">
                        {step.id}
                    </Typography>
                </div>
            </div>

            {step.icon && (
                <div className={"w-60 h-60 bottom-0 -right-[100px] absolute min-w-10 "}>
                    <Image src={step.icon} fill alt={step.id.toString()} />
                </div>
            )}

            <div className="flex flex-col gap-y-[12px] z-[1000]  ">
                <Typography color="black" variants="h5">
                    {step.title}
                </Typography>

                <Typography color="black" variants="accent">
                    {step.description}
                </Typography>
            </div>
        </div>
    )
}

export default Step
