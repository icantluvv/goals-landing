import { extractAndParsePrivacy } from "@/scripts/generatePrivacy"
import Script from "next/script"
import superjson from "superjson"
import { PageSchema } from "@/constants/mocks"
import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import { Typography } from "@/ui/core/Typography"
import Link from "next/link"
import RulesItem from "@/ui/feature/privacy/RulesItem"
import { PageWrapper } from "@/ui/shared/page-wrapper"

export const metadata: Metadata = { ...getStaticMeta("/privacy") }

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
                    <Typography variants="h1">
                        Политика в отношении обработки персональных данных
                    </Typography>

                    <Typography variants="h2">Общие положения</Typography>

                    <Typography variants="p">
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
                        <Link className="text-brandGreen" href="https://do-goals.ru">
                            https://do-goals.ru
                        </Link>
                    </Typography>

                    <RulesItem licenseContent={licenseContent} />
                </div>
            </PageWrapper>
        </>
    )
}
