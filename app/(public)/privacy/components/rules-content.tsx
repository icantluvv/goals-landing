import React from "react"
import { LicenseSection } from "@/scripts/generatePrivacy.ts"

type RulesItemsProps = {
    section: LicenseSection
}

function RulesContent({ section }: RulesItemsProps) {
    return (
        <div className="flex flex-col gap-3">
            {section.content.map((line, i) => {
                return (
                    <p key={i} className="text-body-sm/body-sm">
                        {line}
                    </p>
                )
            })}
        </div>
    )
}

export default RulesContent
