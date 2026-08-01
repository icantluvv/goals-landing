"use client"

import { useMobileHeaderStore } from "@/store/mobileHeaderStore.ts"
import { useBodyLock } from "@/hooks/useBodyLockScroll.ts"
import { Button } from "@/components/ui/Button"
import { ConnectButton } from "@/components/shared/connect-button.tsx"
import Link from "next/link"
import { navLinks } from "@/constants/constants.ts"

export const MobileHeader = () => {
    const openHeader = useMobileHeaderStore((state) => state.openHeader)
    const setOpenHeader = useMobileHeaderStore((state) => state.setOpenHeader)

    useBodyLock(openHeader)

    return (
        <>
            <header
                className={`h-16 fixed left-0 top-0 w-full z-10000 px-[4vw] flex justify-end items-center lg:hidden`}
            >
                <div className="w-[54px]">
                    <Button
                        variant={"white"}
                        onClick={setOpenHeader}
                        type="button"
                        className="w-[54px] h-[54px] flex flex-col items-center justify-center gap-2 relative"
                    >
                        <div
                            className={`w-[22px] absolute h-[1.5px] transition-all bg-primary-black ${
                                openHeader ? "rotate-45" : "-mt-2.5"
                            }`}
                        />
                        <div
                            className={`w-[22px] absolute h-[1.5px] transition-all bg-primary-black ${
                                openHeader ? "-rotate-45" : "mt-2.5"
                            }`}
                        />
                    </Button>
                </div>
            </header>

            <div
                className={`fixed inset-0 bg-black/60 z-8000 transition-opacity duration-300 ${
                    openHeader ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={setOpenHeader}
            />

            <nav
                className={`w-[80vw] h-full bg-white fixed left-0 top-0 z-9000 flex flex-col items-start
        px-[4vw] gap-6 pt-[20vh] lg:hidden transition-transform ${
            openHeader ? "translate-x-0" : "-translate-x-full"
        }`}
            >
                {navLinks.map(({ id, label }) => (
                    <Link
                        onClick={setOpenHeader}
                        key={id}
                        href={id}
                        className="text-body-md text-primary-black font-medium"
                    >
                        {label}
                    </Link>
                ))}
                <ConnectButton
                    trigger={
                        <button onClick={setOpenHeader}>
                            <span className="text-body-md text-primary-black font-medium">
                                Подключить
                            </span>
                        </button>
                    }
                />
            </nav>
        </>
    )
}
