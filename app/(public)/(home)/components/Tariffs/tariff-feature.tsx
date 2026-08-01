import React from "react"

export function TariffFeature({ feature }: { feature: string }) {
    return (
        <li className="flex items-center gap-2 mt-2 lg:mt-4">
            <span className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-dark-blue"></span>
            <p className="text-body-sm/body-sm text-dark-blue">{feature}</p>
        </li>
    )
}
