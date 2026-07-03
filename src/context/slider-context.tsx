"use client"

import React, { createContext, ReactNode, useContext, useState } from "react"
import { PictureSlidesType } from "@/constants/mocks"

interface SliderContextType {
    currentSlide: number
    totalSlides: number
    PictureSlides: PictureSlidesType[]
    goToSlide: (index: number) => void
    nextSlide: () => void
    prevSlide: () => void
}

const SliderContext = createContext<SliderContextType | undefined>(undefined)

interface SliderProviderProps {
    children: ReactNode
    PictureSlides: PictureSlidesType[]
}

export const SliderProvider = ({ children, PictureSlides }: SliderProviderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = PictureSlides.length

    const goToSlide = (index: number) => {
        if (index >= 0 && index < totalSlides) {
            setCurrentSlide(index)
        }
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

    return (
        <SliderContext.Provider
            value={{ currentSlide, PictureSlides, totalSlides, goToSlide, nextSlide, prevSlide }}
        >
            {children}
        </SliderContext.Provider>
    )
}

export const useSlider = (): SliderContextType => {
    const context = useContext(SliderContext)
    if (!context) {
        throw new Error("useSlider must be used within a SliderProvider")
    }
    return context
}
