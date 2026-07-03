import Image from "next/image"
import Link from "next/link"

import copyright from "@/public/copyright.svg"
import header_logo from "@/public/header/header_logo.svg"

import { Typography } from "@/ui/core/Typography"
import { links, rightLinks, socialLinks } from "@/constants/mocks"
import LinksGroup from "./links-group"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"

const Footer = () => (
    <footer className="w-full relative z-10 block justify-center bg-white py-10 border-t border-PrimaryBlack/10">
        <PageWrapper>
            <Link href="/public" className="inline-flex">
                <Image src={header_logo} alt="footer_logo" className="w-auto h-[50px]" />
            </Link>

            <div className="md:flex gap-8 mt-4 md:mt-6 xl:mt-8">
                <LinksGroup title="Разделы и ссылки" items={links} />
                <LinksGroup title="Правила" items={rightLinks} className="mt-4 md:mt-0" />
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
                    <Typography variants="p">2025 Goals. Все права защищены</Typography>
                </div>

                <div className="flex items-center gap-3 mt-4">
                    {socialLinks.map(({ icon, alt, url }, i) => (
                        <a
                            rel={"noopener noreferrer nofollow"}
                            target={"_blank"}
                            href={url}
                            key={i}
                            className="inline-flex w-[18px] h-[18px] md:w-[22px] md:h-[22px] xl:w-[25px] xl:h-[25px] relative"
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

export default Footer
