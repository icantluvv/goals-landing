import Image from "next/image"
import { Typography } from "@/ui/core/Typography"

type FeatureProps = {
    icon: string
    title: string
    text: string
}

export const Feature = ({ icon, title, text }: FeatureProps) => {
    return (
        <div className="flex-1 p-3 lg:p-6 md:p-4 bg-white sm:max-w-[80vw] md:max-w-auto rounded-2xl border md:max-w-[500px] lg:min-h-[307px] xl:min-h-[206px] border-[#eaeaea] text-left flex flex-col items-center lg:items-start">
            <div className="flex flex-col lg:flex-row items-center gap-[2px] mb-3">
                <Image
                    src={icon}
                    alt={title}
                    className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
                />
                <Typography color="black" className="text-center lg:text-start" variants="h6">
                    {title}
                </Typography>
            </div>

            <Typography className="text-center lg:text-start text-gray-600" variants="p">
                {text}
            </Typography>
        </div>
    )
}
