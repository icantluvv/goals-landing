import React from "react"
import { LicenseSection } from "@/scripts/generatePrivacy.ts"
import RulesContent from "@/app/(public)/privacy/components/rules-content.tsx"

type RulesContentProps = {
    licenseContent: LicenseSection[]
}

function RulesItem({ licenseContent }: RulesContentProps) {
    return (
        <>
            {licenseContent.map((section, id) => (
                <section key={id} className="flex flex-col gap-4">
                    <h2 className="text-h3/h3 font-bold">{section.title}</h2>
                    <RulesContent section={section} />
                </section>
            ))}
        </>
    )
}

export default RulesItem
