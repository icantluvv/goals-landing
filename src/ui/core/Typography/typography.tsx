import React from "react"
import clsx from "clsx"

const variantsTypography = {
    family: {
        default: "font-inter",
        inter: "font-inter",
        poppins: "font-poppins"
    },

    color: {
        white: "text-white",
        black: "text-PrimaryBlack"
    },

    center: "flex w-full justify-center items-center text-center",

    variant: {
        h1: "text-[40px] md:text-[64px] lg:text-[80px] leading-[120%] font-bold font-inter",
        h2: "text-[28px] lg:text-[56px] leading-[120%] font-bold font-inter",
        h3: "text-[24px] lg:text-[52px] leading-[140%] font-bold font-inter",
        h4: "text-[20px] lg:text-5xl leading-[123%] font-bold font-inter",
        h5: "text-[18px] lg:text-[32px] leading-[123%] font-bold font-inter",
        h6: "text-[16px] lg:text-xl leading-[123%] font-bold font-inter",
        accent: "text-[16px] md:text-[18px] lg:text-2xl font-poppins",
        p: "text-xs lg:text-base font-poppins",
        button: "text-base lg:text-xl font-poppins font-semibold",
        custom: "font-poppins",
        div: ""
    }
} as const

type TypographyVariants = keyof typeof variantsTypography.variant

type TypographyProps = {
    children: React.ReactNode
    className?: string
    color?: keyof typeof variantsTypography.color
    center?: boolean
    variants: TypographyVariants
    as?: keyof React.JSX.IntrinsicElements
}

const baseTypographyStyles = "text-pretty"

function Typography({ children, className, variants, color, center }: TypographyProps) {
    const Tag: keyof React.JSX.IntrinsicElements = (() => {
        if (variants === "accent" || variants === "custom" || variants === "button") {
            return "p"
        }
        if (variants.startsWith("h") && !isNaN(Number(variants[1]))) {
            return variants as keyof React.JSX.IntrinsicElements
        }
        return "p"
    })()

    return (
        <Tag
            className={clsx(
                baseTypographyStyles,
                variantsTypography.family.default,
                variantsTypography.variant[variants],
                color && variantsTypography.color[color],
                center && variantsTypography.center,
                className
            )}
        >
            {children}
        </Tag>
    )
}

export { Typography }
