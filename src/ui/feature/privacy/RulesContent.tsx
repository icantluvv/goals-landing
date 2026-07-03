import React from "react"
import { Typography } from "@/ui/core/Typography"
import { LicenseSection } from "@/scripts/generatePrivacy"

type RulesItemsProps = {
    section: LicenseSection
}

function RulesContent({ section }: RulesItemsProps) {
    return (
        <div className="flex flex-col gap-3">
            {section.content.map((line, i) => {
                if (/^\d+\./.test(line)) {
                    return (
                        <Typography key={i} variants="p">
                            {line}
                        </Typography>
                    )
                } else {
                    return (
                        <Typography key={i} variants="p">
                            {line}
                        </Typography>
                    )
                }
            })}
        </div>
    )
}

export default RulesContent
