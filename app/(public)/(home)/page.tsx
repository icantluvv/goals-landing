import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import Script from "next/script"
import { FirstSection } from "@/app/(public)/(home)/components/Hero"
import { Steps } from "@/app/(public)/(home)/components/Steps"
import { Tariffs } from "@/app/(public)/(home)/components/Tariffs"
import { Faq } from "@/app/(public)/(home)/components/Faq"
import { Solution } from "@/app/(public)/(home)/components/Solution"

export const metadata: Metadata = { ...getStaticMeta("/") }

const PageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ООО «Актнау»",
    url: "https://do-goals.online/",
    image: "https://sun9-57.userapi.com/s/v1/ig2/mVybOW8l9Cpx_7-0EAExCjJL4PUKNpJL6Bj6digI5wBMa1ljaGvYtB8FdM-HiGONY5CfMdHw25pWaTKD6IV6535W.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,600x600&from=bu&cs=600x0",
    telephone: "+7 928 629-33-13",
    address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Ленина, д. 211, кв. 21, ком. 1",
        addressLocality: "г. Батайск",
        addressRegion: "Ростовская область",
        postalCode: "346882",
        addressCountry: "RU"
    },
    founder: {
        "@type": "Person",
        name: "Калюжный Сергей Александрович"
    }
}

export default function LandingPage() {
    return (
        <>
            <Script
                id="breadcrumb-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(PageSchema)
                }}
            />

            <div className="flex flex-col min-h-screen items-center overflow-hidden relative gap-y-10 md:gap-y-20 mb-20 lg:gap-y-30 z-0">
                <FirstSection />
                <Solution />
                <Steps />
                <Tariffs />
                <Faq />
            </div>
        </>
    )
}
