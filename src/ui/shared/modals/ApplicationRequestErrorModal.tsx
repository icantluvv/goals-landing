"use client"

import React from "react"
import { Typography } from "@/ui/core/Typography"
import { useApplicationErrorModalStore } from "@/store/ApplicationErrorStore"
import { AnimatePresence, motion } from "framer-motion"

const ApplicationRequestErrorModal = () => {
    const { modals } = useApplicationErrorModalStore()

    if (modals.length === 0) return null

    return (
        <div className="fixed top-[5%] w-full z-[9999] flex flex-col gap-3 items-center pointer-events-none">
            <AnimatePresence>
                {modals.map((modal) =>
                    modal.isVisible ? (
                        <motion.div
                            key={modal.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-red-400 shadow-md border border-[#eaeaea]/30 rounded-full px-[2vw] h-[65px] flex items-center justify-center"
                        >
                            <Typography center color="white" variants="accent">
                                Ошибка запроса, повторите попытку позже
                            </Typography>
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>
        </div>
    )
}

export default ApplicationRequestErrorModal
