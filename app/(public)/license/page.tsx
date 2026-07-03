import { extractAndParseLicense } from "@/scripts/generateLicense"
import { Typography } from "@/ui/core/Typography"
import Script from "next/script"
import superjson from "superjson"
import { PageSchema } from "@/constants/mocks"
import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import { PageWrapper } from "@/ui/shared/page-wrapper"
import RulesItem from "@/ui/feature/privacy/RulesItem"

export const metadata: Metadata = { ...getStaticMeta("/license") }

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
                    <Typography variants="p">
                        ВАЖНО! Перед началом любого использования указанных ниже Программ для ЭВМ
                        внимательно ознакомьтесь с условиями ее использования, содержащимися в
                        настоящем Соглашении. Установка, запуск или иное начало использования
                        Программы означает надлежащее заключение настоящего Соглашения и Ваше полное
                        согласие со всеми его условиями. Если Вы не согласны безоговорочно принять
                        условия настоящего Соглашения, Вы не имеете права использовать Программу.
                    </Typography>

                    <Typography variants="h1">ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ</Typography>

                    <Typography variants="p">
                        Данное Лицензионное соглашение применяется к Программе для ЭВМ: «Goals»
                    </Typography>

                    <RulesItem licenseContent={licenseContent} />
                </div>
            </PageWrapper>
        </>
    )
}
