import Image from "next/image"

import React from "react"
import { DefaultLink } from "@/components/ui/Link"

import roundLogo from "@/public/header/round-logo.svg"
import Link from "next/link"
import { ConnectButton } from "@/components/shared/connect-button.tsx"
import { navLinks } from "@/constants/constants.ts"

const navStyles = "opacity-70 hover:opacity-100 transition-opacity duration-300"

export const Header = () => {
    return (
        <header className="fixed hidden top-5 w-full lg:flex justify-center gap-6 min-h-20 items-center z-10">
            <nav className="flex items-center shadow-sm bg-white gap-6 w-full px-7.5 h-18.75 max-w-212.5 rounded-2xl">
                <DefaultLink href={"/"} type={"image"} className={"w-10 h-10"}>
                    <Image src={roundLogo} alt={"Header-logo"} />
                </DefaultLink>

                <div className="bg-black/15 h-8 w-px" />

                <div className="max-w-350 flex gap-10">
                    {navLinks.map((link) => (
                        <Link key={link.label} className={navStyles} href={link.id}>
                            {link.label}
                        </Link>
                    ))}

                    <ConnectButton
                        trigger={
                            <button>
                                <span
                                    className={
                                        "opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    }
                                >
                                    Подключить
                                </span>
                            </button>
                        }
                    />
                </div>
            </nav>
        </header>
    )
}
