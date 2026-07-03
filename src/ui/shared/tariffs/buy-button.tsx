"use client"

import React from "react"
import { useApplicationModel } from "@/context"
import { Button } from "@/ui/core/Button"
import { Typography } from "@/ui/core/Typography"

export function BuyButton() {
    const { setOpenApplicationModel } = useApplicationModel()

    function handleOpenApplicationModel() {
        setOpenApplicationModel(true)
    }

    return (
        <div className="mt-4 xl:mt-8">
            <Button onClick={handleOpenApplicationModel} size="large">
                <Typography color="white" variants="button">
                    Подключить
                </Typography>
            </Button>
        </div>
    )
}
