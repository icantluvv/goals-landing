"use client"

import React, { useState } from "react"

import axios from "axios"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog/dialog.tsx"
import { messageSchema, validateEmail, validateNotEmpty } from "@/utils/validate.ts"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/TextArea"
import { toast } from "@/components/ui/Toast/toast.tsx"

export const MessageModal = () => {
    const [form, setForm] = useState({
        email: "",
        message: ""
    })

    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string, boolean>>({})

    const handleChange =
        (key: keyof typeof form) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm({ ...form, [key]: e.target.value })
        }

    const sendMessage = async () => {
        const result = messageSchema.safeParse(form)

        if (!result.success) {
            const formatted = result.error.format()

            setErrors({
                email: !!formatted.email?._errors?.length,
                message: !!formatted.message?._errors?.length
            })

            return
        }

        setErrors({})

        try {
            setLoading(true)
            const response = await axios.post("/api/send-message", {
                email: form.email,
                message: form.message
            })

            if (response.status === 200) {
                window.location.reload()
            }
        } catch {
            toast.add({
                type: "error",
                title: "Не удалось отправить сообщение",
                description: "Попробуйте ещё раз позже"
            })
        } finally {
            setLoading(false)
        }
    }

    const isFormValid =
        validateEmail(form.email) &&
        validateNotEmpty(form.message) &&
        form.message.trim().length >= 100

    return (
        <Dialog>
            <DialogTrigger
                render={
                    <Button variant={"white"} size="large">
                        <span className="text-body-md/body-md font-semibold">
                            Задать вопрос в Goals
                        </span>
                    </Button>
                }
            />
            <DialogContent className="lg:min-w-160">
                <form onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4">
                    <h5 className="text-primary-black text-h5/h5 font-bold">Задайте Ваш вопрос</h5>

                    <Input
                        placeholder="Почта"
                        type="email"
                        className={"min-h-12"}
                        value={form.email}
                        onChange={handleChange("email")}
                    />

                    <Textarea
                        onChange={handleChange("message")}
                        value={form.message}
                        className={`resize-none h-50 p-3 ${
                            errors.message ? "border-red-500" : "border-light-gray"
                        }`}
                        placeholder="Ваш вопрос (не менее 100 символов)"
                    />

                    <div className="flex w-full justify-end">
                        <Button
                            onClick={!loading ? sendMessage : undefined}
                            size="large"
                            variant={"dark"}
                            className={"w-full md:w-auto"}
                            disabled={loading || !isFormValid}
                        >
                            <span className="text-white text-body-md/body-md font-semibold">
                                Отправить
                            </span>
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
