import React from "react"
import { Header } from "@/ui/shared/header"
import { Footer } from "@/ui/shared/footer"
import { MobileHeader } from "@/ui/shared/mobile-header"

export const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="block relative">
            <Header />
            <MobileHeader />
            <main className="w-full min-h-[100svh] mb-20">{children}</main>
            <Footer />
        </div>
    )
}
