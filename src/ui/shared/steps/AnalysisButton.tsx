import Link from "next/link"
import React from "react"
import { Button } from "@/ui/core/Button"
import { Typography } from "@/ui/core/Typography"

const AnalysisButton = () => {
    return (
        <Link href={"/#tariffs"} className="flex w-full md:max-w-[250px] z-10">
            <Button componentType={"accent"} size="large">
                <Typography color="black" variants="button">
                    Подключить
                </Typography>
            </Button>
        </Link>
    )
}

export default AnalysisButton
