import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog"
import { ApplicationInputs } from "@/components/shared/Request"
import type { ReactElement } from "react"
import React from "react"

export function ConnectButton({ trigger }: { trigger: ReactElement }) {
    return (
        <Dialog>
            <DialogTrigger render={trigger} />
            <DialogContent className="lg:min-w-160">
                <form className="block md:max-w-full lg:max-w-[80vw] xl:max-w-[60vw]">
                    <div className="mb-8 md:mb-12">
                        <h4 className="text-primary-black text-h4/h4 font-bold">
                            Оставьте заявку!
                        </h4>

                        <p className="text-primary-black mt-4 max-w-100 lg:max-w-175 text-base lg:text-xl">
                            Чтобы оставить заявку, напишите нам или&nbsp;позвоните по&nbsp;номеру{" "}
                            <a
                                className={"text-brand-green hover:underline"}
                                href="tel:+79286293313"
                            >
                                +7 928 629-33-13
                            </a>{" "}
                            , и&nbsp;мы сами все заполним
                        </p>
                    </div>

                    <div>
                        <p className="text-primary-black text-body-md/body-md mb-4 font-semibold">
                            Контактные данные
                        </p>

                        <ApplicationInputs />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
