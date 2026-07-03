import { PageSchema } from "@/constants/mocks"
import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import Script from "next/script"
import Tariffs from "@/ui/feature/home/Tariffs"
import Steps from "@/ui/feature/home/Steps"
import Solution from "@/ui/feature/home/Solution"
import FAQ from "@/ui/feature/home/FAQ"
import FirstSection from "@/ui/feature/home/FirstSection"
import { Slider } from "@/ui/shared/slider"

export const metadata: Metadata = { ...getStaticMeta("/") }

export default function LandingPage() {
    const featureSlider = process.env.FEATURE_SLIDER === "true"
    return (
        <>
            <Script
                id="breadcrumb-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(PageSchema)
                }}
            />

            <div className="flex flex-col min-h-screen items-center relative gap-y-[40px] md:gap-y-[80px] xl:gap-y-[120px] z-0">
                <FirstSection />
                <Solution />
                <Steps />
                {featureSlider && <Slider />}
                <Tariffs />
                <FAQ />
            </div>
        </>
    )
}
