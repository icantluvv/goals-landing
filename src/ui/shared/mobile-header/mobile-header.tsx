"use client"

import { useMobileHeaderStore } from "@/store/mobileHeaderStore"
import { useBodyLock } from "@/hooks/useBodyLockScroll"
import { Button } from "@/ui/core/Button"
import { MobileNavigation } from "@/ui/shared/mobile-header/mobile-navigation"

const navLinks = [
    { id: "/", label: "Главная" },
    { id: "/#points", label: "Цель" },
    { id: "/#tariffs", label: "Тарифы" },
    { id: "/#faq", label: "FAQ" },
    { id: "/#application", label: "Подключить" },
    { id: "/blog", label: "Блог" }
]

export const MobileHeader = () => {
    const openHeader = useMobileHeaderStore((state) => state.openHeader)
    const setOpenHeader = useMobileHeaderStore((state) => state.setOpenHeader)

    useBodyLock(openHeader)

    function handleOpenHeader() {
        setOpenHeader()
    }

    return (
        <>
            <header
                className={`h-[64px] fixed left-0 top-0 w-full z-[10000] px-[4vw] flex justify-end items-center lg:hidden`}
            >
                <div className="w-[54px]">
                    <Button
                        onClick={handleOpenHeader}
                        type="button"
                        className="w-[54px] h-[54px] flex flex-col items-center justify-center gap-[8px] relative"
                    >
                        <div
                            className={`w-[22px] absolute h-[1.5px] transition-all bg-PrimaryBlack ${
                                openHeader ? "rotate-45" : "mt-[-10px]"
                            }`}
                        />
                        <div
                            className={`w-[22px] absolute h-[1.5px] transition-all bg-PrimaryBlack ${
                                openHeader ? "rotate-[-45deg]" : "mt-[10px]"
                            }`}
                        />
                    </Button>
                </div>
            </header>

            <div
                className={`fixed inset-0 bg-black/60 z-[8000] transition-opacity duration-300 ${
                    openHeader ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={handleOpenHeader}
            />

            <MobileNavigation navLinks={navLinks} />
        </>
    )
}
