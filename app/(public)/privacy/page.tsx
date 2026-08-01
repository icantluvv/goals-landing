import { extractAndParsePrivacy } from "@/scripts/generatePrivacy"
import Script from "next/script"
import superjson from "superjson"
import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import Link from "next/link"
import RulesItem from "@/app/(public)/privacy/components/rules-item.tsx"
import { PageWrapper } from "@/components/shared/PageWrapper"

export const metadata: Metadata = { ...getStaticMeta("/privacy") }

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
    const licenseContent = await extractAndParsePrivacy()

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
                    <h1 className="text-h2/h2 font-bold">
                        Политика в&nbsp;отношении обработки персональных данных
                    </h1>

                    <h2 className="text-h3/h3 font-bold">Общие положения</h2>

                    <p className="text-body-sm/body-sm">
                        Настоящая политика обработки персональных данных составлена в соответствии с
                        требованиями Федерального закона от 27.07.2006. № 152-ФЗ «О персональных
                        данных» (далее — Закон о персональных данных) и определяет порядок обработки
                        персональных данных и меры по обеспечению безопасности персональных данных,
                        предпринимаемые «Актнау» (далее — Оператор). Оператор ставит своей важнейшей
                        целью и условием осуществления своей деятельности соблюдение прав и свобод
                        человека и гражданина при обработке его персональных данных, в том числе
                        защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
                        Настоящая политика Оператора в отношении обработки персональных данных
                        (далее — Политика) применяется ко всей информации, которую Оператор может
                        получить о посетителях веб-сайта{" "}
                        <Link className="text-brand-green" href="https://do-goals.ru">
                            https://do-goals.ru
                        </Link>
                    </p>

                    <RulesItem licenseContent={licenseContent} />
                </div>
            </PageWrapper>
        </>
    )
}
