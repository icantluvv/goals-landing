import "@/globals.css"
import { inter, montserrat } from "@/public/fonts/fonts"
import { DefaultLayout } from "@/ui/shared/default-layout"
import { Metadata } from "next"
import { ApplicationModel } from "@/ui/shared/ApplicationModel"
import { ApplicationModelProvider } from "@/context/application-model-context"
import { MessageModal } from "@/ui/shared/modals"

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
        <html lang="ru" className={`${inter.variable} ${montserrat.variable} `}>
            <body>
                <ApplicationModelProvider>
                    <DefaultLayout>{children}</DefaultLayout>
                    <ApplicationModel />
                    <MessageModal />
                </ApplicationModelProvider>
            </body>
        </html>
    )
}
