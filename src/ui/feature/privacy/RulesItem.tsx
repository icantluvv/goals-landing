import React from "react"
import { Typography } from "@/ui/core/Typography"
import { LicenseSection } from "@/scripts/generatePrivacy"
import RulesContent from "@/ui/feature/privacy/RulesContent"

type RulesContentProps = {
    licenseContent: LicenseSection[]
}

function RulesItem({ licenseContent }: RulesContentProps) {
    return (
        <>
            {licenseContent.map((section, id) => (
                <section key={id} className="flex flex-col gap-4">
                    <Typography variants="h2">{section.title}</Typography>
                    <RulesContent section={section} />
                </section>
            ))}
        </>
    )
}

export default RulesItem
