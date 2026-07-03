"use client"

import React, { useState } from "react"
import axios from "axios"
import { useApplicationErrorModalStore } from "@/store/ApplicationErrorStore"
import { applicationSchema } from "@/schemas/applicationSchema"
import clsx from "clsx"
import Link from "next/link"
import { useApplicationModel } from "@/context/application-model-context"
import { Button } from "@/ui/core/Button"
import { Input } from "@/ui/core/Input"
import { Typography } from "@/ui/core/Typography"

export const ApplicationInputs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        orgCode: "",
        phone: ""
    })

    const [errors, setErrors] = useState<Record<string, boolean>>({})
    const [loading, setLoading] = useState(false)

    const { setOpenApplicationModel } = useApplicationModel()
    const { addModal } = useApplicationErrorModalStore()

    const handleChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [key]: e.target.value })
    }

    function handleCloseModal() {
        setOpenApplicationModel(false)
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
            addModal()
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex flex-col w-full gap-4 lg:gap-6">
                <Input
                    placeholder="Телефон"
                    type="text"
                    mask="+{7} (000) 000-00-00"
                    value={form.phone}
                    className={getInputClass("phone")}
                    onChange={handleChange("phone")}
                />
                <Input
                    placeholder="Почта"
                    type="email"
                    value={form.email}
                    className={getInputClass("email")}
                    onChange={handleChange("email")}
                />

                <Input
                    placeholder="Как к вам обращаться?"
                    type="text"
                    value={form.name}
                    className={getInputClass("name")}
                    onChange={handleChange("name")}
                />
                <Input
                    placeholder="ИНН Организации"
                    type="text"
                    mask="0000000000"
                    value={form.orgCode}
                    className={clsx(getInputClass("orgCode"))}
                    onChange={handleChange("orgCode")}
                />
            </div>

            <div className={"flex flex-col md:flex-row mt-8 md:mt-12 gap-4 md:gap-6"}>
                <div className="block md:max-w-1/3">
                    <Button
                        size="large"
                        onClick={!loading ? handleSubmit : undefined}
                        disabled={loading}
                    >
                        <Typography color="white" variants="button">
                            Отправить
                        </Typography>
                    </Button>
                </div>

                <Typography
                    className={"max-w-[400px] lg:max-w-[600px]"}
                    color={"black"}
                    variants="p"
                >
                    Нажимая на кнопку, вы даете согласие на обработку{" "}
                    <Link
                        onClick={handleCloseModal}
                        href="/license"
                        className="text-brandGreen hover:border-b"
                    >
                        персональных данных
                    </Link>{" "}
                    и соглашаетесь с{" "}
                    <Link
                        onClick={handleCloseModal}
                        href={"/privacy"}
                        className="text-brandGreen hover:border-b"
                    >
                        политикой конфиденциальности.
                    </Link>
                </Typography>
            </div>
        </>
    )
}
