"use client"

import React from "react"
import { useApplicationModel } from "@/context/application-model-context"
import { Button } from "@/ui/core/Button"
import { Typography } from "@/ui/core/Typography"

export function CreateApplicationBlock() {
    const { setOpenApplicationModel } = useApplicationModel()

    const handleClick = () => {
        setOpenApplicationModel(true)
    }
    return (
        <section className={"w-full flex justify-center"}>
            <Button onClick={handleClick} size={"large"}>
                <Typography variants={"button"} color={"white"}>
                    Оставить заявку
                </Typography>
            </Button>
        </section>
    )
}
