import React from "react"
import Link from "next/link"
import clsx from "clsx"
import { Typography } from "@/ui/core/Typography"

type DefaultLinkProps = {
    href: string
    children: React.ReactNode
    className?: string
    type?: "image" | "text" | "block"
    textColor?: "black" | "white"
}

const defaultLinkStyles = "inline-flex"

const variantClasses = {
    type: {
        image: "active:opacity-70 transition-opacity",
        text: "border-b border-transparent hover:border-brandGreen transition-all duration-300 underline-offset-4",
        block: "block w-full hover:opacity-90 transition-opacity"
    },
    "text-color": {
        black: "text-black",
        white: "text-white"
    }
} as const

function DefaultLink({
    href,
    children,
    className,
    type = "text",
    textColor = "black"
}: DefaultLinkProps) {
    const composed = clsx(
        defaultLinkStyles,
        variantClasses.type[type],
        variantClasses["text-color"][textColor],
        className
    )

    return (
        <div className="inline-block">
            <Link className={composed} href={href}>
                {type === "text" ? (
                    <Typography variants="p">{children}</Typography>
                ) : (
                    <Typography variants="div">{children}</Typography>
                )}
            </Link>
        </div>
    )
}

export { DefaultLink }
