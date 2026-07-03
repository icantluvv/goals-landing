import React from "react"
import { useSlider } from "@/context"
import clsx from "clsx"
import Image from "next/image"
import arrow from "@/public/arrow.svg"
export const SliderButtons = () => {
    const { prevSlide, nextSlide, currentSlide, PictureSlides, goToSlide } = useSlider()

    return (
        <div className="flex gap-4">
            <button
                className="h-16 w-16 rounded-full text-brandGreen bg-darkBlue/10 flex items-center justify-center hover:bg-darkBlue/15 active:bg-darkBlue/20"
                onClick={prevSlide}
            >
                <Image src={arrow} width={27} height={27} className={""} alt={"arrow"} />
            </button>

            <div className="w-76 h-16 rounded-full bg-darkBlue/10 flex justify-center items-center gap-10">
                {PictureSlides.map((item, idx) => (
                    <button
                        onClick={() => goToSlide(idx)}
                        key={item.id}
                        className={clsx(
                            "rounded-full h-4 hover:bg-brandGreen transition-all",
                            currentSlide === idx ? "w-10 bg-brandGreen" : "bg-white w-4"
                        )}
                    />
                ))}
            </div>

            <button
                className="h-16 w-16 rounded-full text-brandGreen bg-darkBlue/10 flex items-center justify-center hover:bg-darkBlue/15 active:bg-darkBlue/20"
                onClick={nextSlide}
            >
                <Image src={arrow} width={27} height={27} className={"rotate-180"} alt={"arrow"} />
            </button>
        </div>
    )
}
