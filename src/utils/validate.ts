import { z } from "zod"

export const PHONE_DIGITS_REGEX = /\D/g
export const INN_DIGITS_REGEX = /\D/g

export const formatPhone = (raw: string): string => {
    let digits = raw.replace(PHONE_DIGITS_REGEX, "")

    if (digits[0] === "7" || digits[0] === "8") {
        digits = digits.slice(1)
    }
    digits = digits.slice(0, 10)

    let result = "+7"
    if (digits.length > 0) result += ` (${digits.slice(0, 3)}`
    if (digits.length >= 3) result += ")"
    if (digits.length > 3) result += ` ${digits.slice(3, 6)}`
    if (digits.length > 6) result += `-${digits.slice(6, 8)}`
    if (digits.length > 8) result += `-${digits.slice(8, 10)}`

    return result
}

export const formatInn = (raw: string): string => {
    return raw.replace(INN_DIGITS_REGEX, "").slice(0, 10)
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const validateEmail = (email: string): boolean => {
    return EMAIL_REGEX.test(email.trim())
}

export const validateNotEmpty = (value: string): boolean => {
    return value.trim().length > 0
}

export const applicationSchema = z.object({
    phone: z
        .string()
        .min(1, "Введите телефон")
        .refine(
            (val) =>
                /^(\+7\s?)?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/.test(val) ||
                /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/.test(val),
            { message: "Введите корректный номер телефона" }
        ),
    email: z.string().min(1, "Введите email").email("Введите корректный email"),

    fullName: z
        .string()
        .min(1, "Введите ФИО")
        .refine((val) => /^[А-Яа-яЁёA-Za-z\s-]+$/.test(val), {
            message: "ФИО должно содержать только буквы, пробелы и дефисы"
        })
        .refine((val) => val.trim().split(/\s+/).length >= 3, {
            message: "Введите имя, фамилию и отчество (минимум 3 слова)"
        }),

    inn: z
        .string()
        .length(10, "ИНН должен содержать ровно 10 цифр")
        .refine((val) => /^\d{10}$/.test(val), {
            message: "ИНН должен содержать только цифры"
        })
})

export type ApplicationSchema = z.infer<typeof applicationSchema>

export const messageSchema = z.object({
    email: z.string().min(1, "Введите email").email("Введите корректный email"),
    message: z.string().min(100, "Сообщение должно содержать не менее 100 символов")
})
