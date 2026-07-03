"use client"

import React from "react"
import { useApplicationModel } from "@/context/application-model-context"
import Application from "@/ui/feature/home/Application"
import { useBodyLock } from "@/hooks/useBodyLockScroll"

export function ApplicationModel() {
    const { openApplicationModel, setOpenApplicationModel } = useApplicationModel()

    useBodyLock(openApplicationModel)

    function handleBackCloseModal() {
        setOpenApplicationModel(false)
    }

    return (
        <>
            {openApplicationModel ? (
                <div
                    onClick={handleBackCloseModal}
                    className={
                        "size-full bg-black/40 flex items-center justify-center fixed z-[10000] top-0 left-0 right-0 bottom-0 px-4 md:px-5"
                    }
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={
                            "w-full z-10 md:max-w-[600px] lg:max-w-[850px]  xl:max-w-[1050px] rounded-lg max-h-6/8 bg-white overflow-y-auto"
                        }
                    >
                        <Application />
                    </div>
                </div>
            ) : null}
        </>
    )
}
