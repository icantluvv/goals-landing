import type { Step as StepType } from "@/app/(public)/(home)/constant.ts"

import Image from "next/image"

export const Step = ({ step }: { step: StepType }) => {
    return (
        <div className="w-full shadow-sm min-w-87.5 relative overflow-hidden lg:min-w-auto bg-dark-blue/5 lg:rounded-8.5 rounded-[25px] p-6 xl:p-12 flex flex-col gap-6 md:gap-8 xl:gap-12">
            <div className={"flex items-center justify-between "}>
                <div className="xl:w-18 xl:h-18 md:w-12 md:h-12 w-8 h-8 rounded-full md:border-4 border-3 border-dark-blue flex justify-center items-center">
                    <p className="text-h5/h5 lg:text-h4/h4 z-1000 block">{step.id}</p>
                </div>
            </div>

            {step.icon && (
                <div className={"w-60 h-60 bottom-0 -right-25 absolute min-w-10"}>
                    <Image src={step.icon} fill alt={step.id.toString()} />
                </div>
            )}

            <div className="flex flex-col gap-y-3 z-1000">
                <h5 className="text-primary-black text-h5/h5 lg:text-h4/h4 font-medium!">
                    {step.title}
                </h5>

                <p className="text-primary-black text-body-sm/body-sm lg:text-body-md/body-md">
                    {step.description}
                </p>
            </div>
        </div>
    )
}
