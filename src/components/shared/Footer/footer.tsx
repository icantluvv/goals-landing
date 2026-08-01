import Image from "next/image"
import Link from "next/link"

import copyright from "@/public/copyright.svg"
import header_logo from "@/public/header/header_logo.svg"
import { PageWrapper } from "@/components/shared/PageWrapper"
import { links, rightLinks, socialLinks } from "@/constants/constants.ts"
import clsx from "clsx"
import { DefaultLink } from "@/components/ui/Link"
import React from "react"

export function Footer() {
    return (
        <footer className="w-full relative z-10 block justify-center bg-white py-10 border-t border-primary-black/10">
            <PageWrapper>
                <Link href="/public" className="inline-flex">
                    <Image src={header_logo} alt="footer_logo" className="w-auto h-[50px]" />
                </Link>

                <div className="md:flex gap-8 mt-4 md:mt-6 xl:mt-8">
                    <div className={clsx("flex flex-col  md:flex gap-6")}>
                        <p className="font-semibold text-black text-base">Разделы и ссылки</p>

                        <div className="flex flex-col gap-3">
                            {links.map(({ title, href }) => (
                                <DefaultLink type="text" key={title} href={href}>
                                    {title}
                                </DefaultLink>
                            ))}
                        </div>
                    </div>

                    <div className={clsx("flex flex-col md:flex gap-6 mt-8 md:mt-0")}>
                        <p className="font-semibold text-black text-base">Правила</p>

                        <div className="flex flex-col gap-3 ">
                            {rightLinks.map(({ title, href }) => (
                                <DefaultLink type="text" key={title} href={href}>
                                    {title}
                                </DefaultLink>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 xl:mt-16">
                    <div className="flex items-center gap-1">
                        <Image
                            src={copyright}
                            alt="copyright"
                            className="opacity-50"
                            width={15}
                            height={15}
                        />
                        <p className="text-body-sm/body-sm">2025 Goals. Все права защищены</p>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                        {socialLinks.map(({ icon, alt, url }, i) => (
                            <a
                                rel={"noopener noreferrer nofollow"}
                                target={"_blank"}
                                href={url}
                                key={i}
                                className="inline-flex w-4.5 h-4.5 md:w-5.5 md:h-5.5 xl:w-6 xl:h-6 relative"
                            >
                                <Image
                                    src={icon}
                                    alt={alt}
                                    fill
                                    className="opacity-50 hover:opacity-100 transition-opacity"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </PageWrapper>
        </footer>
    )
}
