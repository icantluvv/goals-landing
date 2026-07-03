import clsx from "clsx"
import React from "react"
import { DefaultLink } from "@/ui/core/Link"
import { Typography } from "@/ui/core/Typography"

type Links = {
    title: string
    href: string
}

type LinksGroupProps = {
    className?: string
    title: string
    items: Links[]
}

const LinksGroup = ({ title, items, className }: LinksGroupProps) => (
    <div className={clsx("flex flex-col gap-6", className)}>
        <Typography variants="div" className="font-semibold text-black text-base">
            {title}
        </Typography>

        <div className="flex flex-col gap-3">
            {items.map(({ title, href }) => (
                <DefaultLink type="text" key={title} href={href}>
                    {title}
                </DefaultLink>
            ))}
        </div>
    </div>
)

export default LinksGroup
