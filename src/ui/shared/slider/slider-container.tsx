import { useSlider } from "@/context/slider-context"
import Image from "next/image"
import { Typography } from "@/ui/core/Typography"

export function SliderContainer() {
    const { PictureSlides, currentSlide } = useSlider()

    return (
        <div className="relative h-140 w-9/10 max-w-[1400px] overflow-hidden ">
            {PictureSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute flex flex-col items-center lg:flex-row lg:items-start justify-between inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className={"w-full lg:max-w-3/5 flex flex-col gap-8 md:pr-0"}>
                        <Typography variants={"h4"}>
                            {slide.title}
                            <div className={"w-full h-1 bg-brandGreen -rotate-1"} />
                        </Typography>
                        <Typography variants={"h5"}>{slide.description}</Typography>
                    </div>

                    <div className={"bg-[#F5F5F7] w-full flex items-center justify-center"}>
                        <div className={"relative min-w-[300px] "}>
                            <Image
                                src={slide.image}
                                width={425}
                                height={858}
                                alt={slide.title}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
