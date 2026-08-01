"use client"

import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { rootURL } from "@/constants/urls.ts"
import clsx from "clsx"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[]
    }
}

type ShareBlockProps = {
    onChange?: () => void
}

export function ShareBlock({ onChange }: ShareBlockProps) {
    const pathname = usePathname()
    const shareUrl = `${rootURL}${pathname}`
    const [isCopied, setIsCopied] = useState(false)

    const pushGTM = ({ category = "share", action = "", label = "" }) => {
        if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
                event: "analyticsEvent",
                event_category: category,
                event_action: action,
                event_label: label,
                nonInteraction: true
            })
        }
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl)
            setIsCopied(true)
            pushGTM({ action: "copyText", label: shareUrl })
            onChange?.()

            setTimeout(() => {
                setIsCopied(false)
            }, 3000)
        } catch (error) {
            console.error("Failed to copy:", error)
        }
    }

    return (
        <>
            <h4 className="text-h4/h4 font-bold">Поделиться</h4>
            <div className="flex sm:flex-row flex-col sm:items-center gap-4 mt-4">
                <Input
                    type="text"
                    value={shareUrl}
                    readOnly
                    className={
                        "rounded-lg border! text-dark-blue/80 border-dark-blue bg-dark-blue/5 max-w-[269px] md:max-w-[500px]"
                    }
                    onClick={(e) => e.currentTarget.select()}
                />
                <Button
                    size="large"
                    className={clsx(isCopied ? "cursor-crosshair" : "cursor-pointer ")}
                    type="button"
                    onClick={copyToClipboard}
                    disabled={isCopied}
                >
                    {isCopied ? "Скопировано" : "Скопировать"}
                </Button>
            </div>
        </>
    )
}
