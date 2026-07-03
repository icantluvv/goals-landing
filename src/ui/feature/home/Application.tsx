"use client"
import { Typography } from "@/ui/core/Typography"
import ApplicationRequestErrorModal from "@/ui/shared/modals/ApplicationRequestErrorModal"
import ApplicationInputs from "@/ui/shared/request/ApplicationInputs"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"

function Application() {
    return (
        <PageWrapper>
            <section className="xl:flex relative my-14">
                <form className="block md:max-w-full lg:max-w-[80vw] xl:max-w-[60vw]">
                    <div className="mb-8 md:mb-12">
                        <Typography color="black" variants="h2">
                            Оставьте заявку!
                        </Typography>

                        <Typography
                            color="black"
                            className="mt-4 text-pretty max-w-[400px] lg:max-w-[700px] text-base lg:text-xl"
                            variants="p"
                        >
                            Чтобы оставить заявку, напишите нам или позвоните по номеру{" "}
                            <a
                                className={"text-brandGreen hover:underline"}
                                href="tel:+79286293313"
                            >
                                +7 928 629-33-13
                            </a>{" "}
                            , и мы сами все заполним
                        </Typography>
                    </div>

                    <div>
                        <Typography
                            variants={"accent"}
                            className={"mb-4 font-semibold"}
                            color={"black"}
                        >
                            Контактные данные
                        </Typography>

                        <ApplicationInputs />
                    </div>
                </form>
            </section>

            <ApplicationRequestErrorModal />
        </PageWrapper>
    )
}

export default Application
