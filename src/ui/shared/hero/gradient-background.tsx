"use client"

import { motion } from "framer-motion"

export function GradientBackground() {
    return (
        <motion.div
            className="absolute inset-0 -z-10"
            style={{
                backgroundColor: "#c3ff99",
                backgroundImage: `
          radial-gradient(at 68% 85%, hsla(219, 64%, 71%, 1) 0px, transparent 50%),
          radial-gradient(at 1% 3%, hsla(216, 16%, 34%, 0.33) 0px, transparent 50%),
          radial-gradient(at 79% 23%, hsla(166, 69%, 67%, 1) 0px, transparent 50%),
          radial-gradient(at 3% 59%, hsla(108, 94%, 71%, 0.53) 0px, transparent 50%),
          radial-gradient(at 90% 88%, hsla(108, 69%, 69%, 1) 0px, transparent 50%),
          radial-gradient(at 26% 89%, hsla(181, 70%, 73%, 1) 0px, transparent 50%),
          radial-gradient(at 31% 39%, hsla(182, 65%, 63%, 1) 0px, transparent 50%)
        `,
                backgroundSize: "200% 200%",
                willChange: "background-position"
            }}
            animate={{ backgroundPosition: ["0% 0%", "50% 50%", "100% 0%"] }}
            transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
        />
    )
}
