import { Typography } from "@/ui/core/Typography"
import React from "react"

type TariffFeatureProps = {
    feature: string
}

export const TariffFeature = ({ feature }: TariffFeatureProps) => {
    return (
        <li className="flex items-center gap-[8px] mt-2 lg:mt-4">
            <span className="min-w-[6px] min-h-[6px] w-[6px] h-[6px] rounded-full bg-darkBlue"></span>
            <Typography className="text-darkBlue" variants="p">
                {feature}
            </Typography>
        </li>
    )
}
