"use client"

import React, { useState } from "react"
import axios from "axios"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { applicationSchema, formatInn, formatPhone } from "@/utils/validate.ts"
import { Input } from "@/components/ui/Input"
import { cn } from "@/utils/cn.ts"
import { toast } from "@/components/ui/Toast/toast.tsx"

export const ApplicationInputs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        orgCode: "",
        phone: ""
    })

    const [errors, setErrors] = useState<Record<string, boolean>>({})
    const [loading, setLoading] = useState(false)

    const handleChange =
        (key: keyof typeof form, format?: (value: string) => string) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = format ? format(e.target.value) : e.target.value
            setForm({ ...form, [key]: value })
        }

    const getInputClass = (field: string) => (errors[field] ? "border-red-500" : "")

    const handleSubmit = async () => {
        const result = applicationSchema.safeParse({
            phone: form.phone,
            email: form.email,
            fullName: form.name,
            inn: form.orgCode
        })

        if (!result.success) {
            const formatted = result.error.format()
            setErrors({
                name: !!formatted.fullName?._errors?.length,
                email: !!formatted.email?._errors?.length,
                phone: !!formatted.phone?._errors?.length,
                orgCode: !!formatted.inn?._errors?.length
            })
            return
        }

        setErrors({})

        try {
            setLoading(true)
            const response = await axios.post("/api/contact", {
                name: form.name,
                email: form.email,
                orgCode: form.orgCode,
                phone: form.phone
            })

            if (response.status === 200) {
                window.location.reload()
            }
        } catch {
            toast.add({
                type: "error",
                title: "Не удалось отправить заявку",
                description: "Попробуйте ещё раз позже"
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex flex-col w-full gap-3">
                <Input
                    placeholder="Телефон"
                    type="text"
                    value={form.phone}
                    className={cn("min-h-12", getInputClass("phone"))}
                    onChange={handleChange("phone", formatPhone)}
                />
                <Input
                    placeholder="Почта"
                    type="email"
                    value={form.email}
                    className={cn("min-h-12", getInputClass("email"))}
                    onChange={handleChange("email")}
                />

                <Input
                    placeholder="Как к вам обращаться?"
                    type="text"
                    value={form.name}
                    className={cn("min-h-12", getInputClass("name"))}
                    onChange={handleChange("name")}
                />
                <Input
                    placeholder="ИНН Организации"
                    type="text"
                    value={form.orgCode}
                    className={cn("min-h-12", getInputClass("orgCode"))}
                    onChange={handleChange("orgCode", formatInn)}
                />
            </div>

            <div className={"flex flex-col mt-6 gap-4"}>
                <div className="block md:max-w-1/3">
                    <Button
                        variant={"dark"}
                        size="large"
                        onClick={!loading ? handleSubmit : undefined}
                        disabled={loading}
                        className={"w-full md:w-auto"}
                    >
                        <span className="text-white text-body-md/body-md font-semibold">
                            Отправить
                        </span>
                    </Button>
                </div>

                <p className="text-primary-black text-body-sm/body-sm max-w-100 lg:max-w-150">
                    Нажимая на&nbsp;кнопку, вы даете согласие на&nbsp;обработку{" "}
                    <Link href="/license" className="text-brand-green hover:border-b">
                        персональных данных
                    </Link>{" "}
                    и&nbsp;соглашаетесь с&nbsp;
                    <Link href={"/privacy"} className="text-brand-green hover:border-b">
                        политикой конфиденциальности.
                    </Link>
                </p>
            </div>
        </>
    )
}
