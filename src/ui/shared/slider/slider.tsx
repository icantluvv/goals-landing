"use client"

import React from "react"
import { SliderProvider } from "@/context"
import { SliderButtons } from "@/ui/shared/slider/slider-buttons"
import { SliderContainer } from "@/ui/shared/slider/slider-container"
import { PictureSlides } from "@/constants/mocks"

export function Slider() {
    return (
        <SliderProvider PictureSlides={PictureSlides}>
            <div className="flex flex-col gap-10 items-center w-full ">
                <SliderContainer />
                <SliderButtons />
            </div>
        </SliderProvider>
    )
}
