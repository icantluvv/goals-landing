import "@/globals.css"
import { montserrat } from "@/public/fonts/fonts"
import { Metadata } from "next"
import { cn } from "@/utils/cn.ts"
import { Header } from "@/components/shared/Header"
import { MobileHeader } from "@/components/shared/MobileHeader"
import React from "react"
import { Footer } from "@/components/shared/Footer"
import { Toaster } from "@/components/ui/Toast/toast.tsx"

export const metadata: Metadata = {
    icons: {
        icon: [
            { url: "/favicon.ico", type: "image/x-icon" },
            { url: "/favicon.svg", type: "image/svg+xml" }
        ]
    }
}
export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru" className={cn(montserrat.variable, "font-sans")}>
            <body>
                <div className="block relative">
                    <Header />
                    <MobileHeader />
                    <main className="w-full min-h-svh">{children}</main>
                    <Footer />
                </div>
                <Toaster />
            </body>
        </html>
    )
}
