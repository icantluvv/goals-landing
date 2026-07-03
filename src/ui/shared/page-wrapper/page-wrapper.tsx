import React from "react"

type PageWrapperProps = {
    children: React.ReactNode
    scroll?: boolean
}

export function PageWrapper({ children, scroll }: PageWrapperProps) {
    return (
        <div
            className={`w-full flex justify-center ${scroll ? "p-0 lg:px-8 xl:px-16" : "px-4 md:px-8 xl:px-16"}`}
        >
            <div className="max-w-[1400px] w-full">{children}</div>
        </div>
    )
}
