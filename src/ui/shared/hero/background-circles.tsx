"use client"

import { motion } from "framer-motion"

export function BackgroundCircles() {
    return (
        <>
            <motion.div
                className="w-[700px] h-[700px] md:w-[1200px] md:h-[1200px]
        xl:w-[2000px] xl:h-[2000px] rounded-full absolute bg-[#4A69A3]/76 blur-[100px]"
                initial={{ x: 0, y: 0 }}
                animate={{ x: [-500, 0], y: [600, 0] }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="w-[500px] h-[500px] md:w-[1000px] md:h-[1000px]
        xl:w-[1560px] xl:h-[1560px] rounded-full absolute bg-[#627DB1]/46 blur-[100px] lg:left-[30vw] lg:top-[-100vh]"
                initial={{ x: 0, y: 0 }}
                animate={{ x: [800, 0], y: [600, 0] }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="w-[500px] h-[500px] md:w-[750px] md:h-[750px]
        xl:w-[1283px] xl:h-[1283px] rounded-full absolute bg-[#8EA8DB]/40 blur-[100px]"
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, 40, 40, 0, 0], y: [0, 0, 40, 40, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
        </>
    )
}
