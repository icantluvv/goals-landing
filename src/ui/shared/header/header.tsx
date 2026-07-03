import Image from "next/image"

import roundLogo from "@/public/header/round-logo.svg"
import LinkHeader from "@/ui/shared/link-header/LinkHeader"
import { DefaultLink } from "@/ui/core/Link"
import React from "react"
import TryButton from "@/ui/shared/header/TryButton"

const Header = () => {
    return (
        <header className="fixed hidden top-5 w-full lg:flex justify-center gap-[24px] min-h-[80px] items-center z-10">
            <div className="flex items-center shadow-sm bg-white gap-6 w-full px-[30px] h-[75px] max-w-[850px] rounded-[20px]">
                <DefaultLink href={"/"} type={"image"} className={"w-10 h-10"}>
                    <Image src={roundLogo} alt={"header-logo"} />
                </DefaultLink>

                <div className="bg-black/15 h-8 w-[1px]" />

                <div className="max-w-[1400px] flex gap-[40px]">
                    <LinkHeader title="Главная" href={"/"} />
                    <LinkHeader title="Цель" href={"/#points"} />
                    <LinkHeader title="Тарифы" href={"/#tariffs"} />
                    <LinkHeader title="FAQ" href={"/#faq"} />
                    <TryButton />
                    <LinkHeader title="Блог" href={"/blog"} />
                </div>
            </div>
        </header>
    )
}

export default Header
