"use client"

import { ChangeEvent, MouseEvent } from "react"
import { MaskedInput } from "./masked-input"
import clsx from "clsx"

type InputProps = {
    placeholder?: string
    className?: string
    type: string
    mask?: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onClick?: (e: MouseEvent<HTMLInputElement>) => void
    readOnly?: boolean
}

const Input = ({
    placeholder = "",
    readOnly = false,
    className,
    type,
    mask,
    value = "",
    onChange,
    onClick
}: InputProps) => {
    const inputClassNames = `w-full border-lightGray border p-3 border-b rounded-xs placeholder:text-gray-500 border placeholder:font-poppins border-PrimaryBlack/25 focus:outline-none md:max-w-[296px]`

    if (mask) {
        return (
            <MaskedInput
                mask={mask}
                value={value}
                onChange={(val) =>
                    onChange?.({ target: { value: val } } as ChangeEvent<HTMLInputElement>)
                }
                className={clsx(inputClassNames, className)}
                placeholder={placeholder ? placeholder : ""}
            />
        )
    }

    return (
        <input
            readOnly={readOnly}
            type={type}
            value={value}
            onChange={onChange}
            onClick={onClick}
            className={clsx(inputClassNames, className)}
            placeholder={placeholder}
        />
    )
}

export { Input }
