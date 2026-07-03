"use client"

import { IMaskInput } from "react-imask"

type MaskedInputProps = {
    placeholder: string
    className?: string
    mask: string
    value?: string
    onChange?: (value: string) => void
}

const MaskedInput = ({ placeholder, className, mask, value = "", onChange }: MaskedInputProps) => {
    const inputClassNames = `w-full px-1.5 py-3 border-b placeholder:text-gray-500 placeholder:font-poppins border-PrimaryBlack/25 focus:outline-none ${className}`

    return (
        <IMaskInput
            mask={mask}
            value={value}
            onAccept={(val) => onChange?.(String(val))}
            className={inputClassNames}
            placeholder={placeholder}
        />
    )
}

export { MaskedInput }
