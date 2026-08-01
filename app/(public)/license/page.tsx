import { extractAndParseLicense } from "@/scripts/generateLicense"
import Script from "next/script"
import superjson from "superjson"
import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import { PageWrapper } from "@/components/shared/PageWrapper"
import RulesItem from "@/app/(public)/privacy/components/rules-item.tsx"

export const metadata: Metadata = { ...getStaticMeta("/license") }

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

export default async function LicensePage() {
    const licenseContent = await extractAndParseLicense()

    return (
        <>
            <Script
                id="breadcrumb-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(superjson.serialize(PageSchema).json)
                }}
            />
            <PageWrapper>
                <div className="flex flex-col gap-10 my-32">
                    <p className="text-body-sm/body-sm">
                        ВАЖНО! Перед началом любого использования указанных ниже Программ для ЭВМ
                        внимательно ознакомьтесь с условиями ее использования, содержащимися в
                        настоящем Соглашении. Установка, запуск или иное начало использования
                        Программы означает надлежащее заключение настоящего Соглашения и Ваше полное
                        согласие со всеми его условиями. Если Вы не согласны безоговорочно принять
                        условия настоящего Соглашения, Вы не имеете права использовать Программу.
                    </p>

                    <h1 className="text-h2/h2 font-bold">ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ</h1>

                    <p className="text-body-sm/body-sm">
                        Данное Лицензионное соглашение применяется к Программе для ЭВМ: «Goals»
                    </p>

                    <RulesItem licenseContent={licenseContent} />
                </div>
            </PageWrapper>
        </>
    )
}
