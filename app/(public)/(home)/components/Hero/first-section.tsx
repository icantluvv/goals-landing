import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { GradientBackground } from "@/app/(public)/(home)/components/Hero/gradient-background.tsx"
import { BackgroundCircles } from "@/app/(public)/(home)/components/Hero/background-circles.tsx"
import goals from "@/public/first/GOALS.png"

export function FirstSection() {
    return (
        <section className="w-full h-[80svh] px-4 lg:h-svh flex flex-col relative overflow-hidden items-center lg:pt-25 scroll-mt-25">
            <GradientBackground />
            <BackgroundCircles />

            <div className="flex flex-col md:items-center flex-1 justify-center gap-4 md:gap-6 z-10">
                <div className="w-full flex flex-col md:items-center gap-y-4 md:gap-y-6">
                    <h1 className="text-white text-h2/h2 lg:text-h1/h1 font-bold flex w-full justify-center lg:text-center">
                        Cистема лояльности
                    </h1>

                    <div className={"md:w-[60vw]"}>
                        <p className="text-white text-h6/h6 lg:text-h4/h4 w-full justify-center items-center sm:text-center flex">
                            Ваши клиенты уже рассказывают о&nbsp;заведениях — пора управлять этим
                            и&nbsp;извлекать выгоду!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <Link href="/#tariffs">
                        <Button
                            variant={"dark"}
                            className={"w-full md:w-auto"}
                            size="large"
                            type="button"
                        >
                            <span className="text-white text-body-md/body-md font-semibold">
                                Подключить
                            </span>
                        </Button>
                    </Link>

                    <Link href="/#points">
                        <Button className={"w-full md:w-auto"} variant={"white"} size="large">
                            <span className="text-body-md/body-md font-semibold text-dark-blue">
                                Как это работает?
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="w-screen max-w-none z-10">
                <Image src={goals} alt={"goals"} />
            </div>
        </section>
    )
}
