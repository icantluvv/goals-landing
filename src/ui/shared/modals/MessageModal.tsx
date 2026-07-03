"use client"

import { useMessageModalStore } from "@/store/messageModalStore"
import { useState } from "react"
import { messageSchema } from "@/schemas/messageSchema"
import axios from "axios"
import { useApplicationErrorModalStore } from "@/store/ApplicationErrorStore"
import { useBodyLock } from "@/hooks/useBodyLockScroll"
import { Button } from "@/ui/core/Button"
import { Input } from "@/ui/core/Input"
import { Typography } from "@/ui/core/Typography"

const MessageModal = () => {
    const { openMessageModal, setMessageModalOpen } = useMessageModalStore()
    const { addModal } = useApplicationErrorModalStore()
    useBodyLock(openMessageModal)

    function handleCloseModal() {
        setMessageModalOpen()
    }

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

            console.log("Validation errors:", formatted)
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
            addModal()
        } finally {
            setLoading(false)
        }
    }

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email.trim())
    }

    const isFormValid = isValidEmail(form.email) && form.message.trim().length >= 100

    if (!openMessageModal) return null

    return (
        <div
            onClick={handleCloseModal}
            className="w-full fixed z-20 top-0 bottom-0 left-0 right-0 bg-PrimaryBlack/30 h-screen flex items-center justify-center"
        >
            <form
                onClick={(e) => e.stopPropagation()}
                className="bg-white fixed rounded-lg p-[24px] xl:p-[48px] w-[90vw] md:w-[70vw] xl:w-[50vw] flex flex-col gap-[24px]"
            >
                <Typography variants="h5" color="black">
                    Задайте Ваш вопрос
                </Typography>

                <Input
                    placeholder="Почта"
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                />

                <textarea
                    onChange={handleChange("message")}
                    value={form.message}
                    className={`resize-none  rounded-xs  border h-[200px] p-3 focus:outline-none ${
                        errors.message ? "border-red-500" : "border-lightGray"
                    }`}
                    placeholder="Ваш вопрос (не менее 100 символов)"
                ></textarea>

                <div className="flex w-full justify-end">
                    <Button
                        onClick={!loading ? sendMessage : undefined}
                        size="large"
                        disabled={loading || !isFormValid}
                    >
                        <Typography variants="button" color="white">
                            Отправить
                        </Typography>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default MessageModal
