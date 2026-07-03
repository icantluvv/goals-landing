"use client"

import React from "react"
import { useApplicationModel } from "@/context/application-model-context"

export const TryButton = () => {
    const { setOpenApplicationModel } = useApplicationModel()

    function handleOpenApplicationModal() {
        setOpenApplicationModel(true)
    }

    return (
        <button onClick={handleOpenApplicationModal}>
            <p className={"opacity-70 hover:opacity-100 transition-opacity duration-300"}>
                Подключить
            </p>
        </button>
    )
}
