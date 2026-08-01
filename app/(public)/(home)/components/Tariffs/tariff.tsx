import { TariffFeature } from "./tariff-feature.tsx"
import Image from "next/image"
import { ConnectButton } from "@/components/shared/connect-button.tsx"
import { Button } from "@/components/ui/Button"
import React from "react"

interface Tariff {
    id: number
    icon: string
    price: string
    title: string
    description: string
    subtext: string
    features: string[]
}

export function Tariff({ tariff }: { tariff: Tariff }) {
    return (
        <li
            key={tariff.id}
            className="relative min-h-50 md:min-h-87.5 xl:min-h-112.5 flex flex-col bg-dark-blue/5 p-4 lg:p-6 xl:p-8 rounded-[24px]"
        >
            <div className={"flex w-full justify-between"}>
                <h5 className="text-h6/h6 lg:text-h4/h4 font-semibold!">{tariff.title}</h5>
                <Image
                    className="w-6 h-6 md:w-10 md:h-10 "
                    src={tariff.icon}
                    alt={tariff.price}
                    width={64}
                    height={64}
                />
            </div>

            <h4 className="text-body-md/body-md lg:text-h5/h5 font-bold mt-1">{tariff.price}</h4>
            <p className="text-purple lg:text-body-mb/body-md text-body-sm/body-sm mt-2">
                {tariff.subtext}
            </p>
            <p className="max-h-16 lg:max-h-28 mt-3 lg:mt-6 overflow-y-auto no-scrollbar lg:text-body-md/body-md text-body-sm/body-sm">
                {tariff.description}
            </p>
            <div className="w-full h-px bg-dark-blue/20 mt-2 lg:my-4" />
            <ul className="block  flex-1 border-dark-blue/20 lg:mt-4">
                {tariff.features.map((feature, index) => (
                    <TariffFeature feature={feature} key={index} />
                ))}
            </ul>

            <ConnectButton
                trigger={
                    <Button variant={"dark"} size="large" className="mt-4 xl:mt-8">
                        <span className="text-white text-body-md/body-md font-semibold">
                            Подключить
                        </span>
                    </Button>
                }
            ></ConnectButton>
        </li>
    )
}
