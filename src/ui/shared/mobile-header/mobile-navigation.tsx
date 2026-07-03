import { useMobileHeaderStore } from "@/store/mobileHeaderStore"
import { useNavigationStateStore } from "@/store/navigationStore"
import Link from "next/link"

export const MobileNavigation = ({ navLinks }: MobileNavigationProps) => {
    const { openHeader, setOpenHeader } = useMobileHeaderStore()
    const { setChooseNavElement } = useNavigationStateStore()

    return (
        <nav
            className={`w-[80vw] h-full bg-white fixed left-0 top-0 z-[9000] flex flex-col items-start 
        px-[4vw] gap-6 pt-[20vh] lg:hidden transition-transform ${
            openHeader ? "translate-x-0" : "translate-x-[-100%]"
        }`}
        >
            {navLinks.map(({ id, label }) => (
                <Link
                    onClick={() => (setChooseNavElement(id), setOpenHeader())}
                    key={id}
                    href={id}
                    className="text-[1rem] text-PrimaryBlack font-medium"
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}

interface MobileNavigationProps {
    navLinks: { id: string; label: string }[]
}
