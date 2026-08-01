import { PageWrapper } from "@/components/shared/PageWrapper"
import Image from "next/image"
import { solutionsData } from "@/app/(public)/(home)/constant.ts"

export function Solution() {
    return (
        <PageWrapper>
            <section id="points" className="w-full block scroll-mt-[150px]">
                <div>
                    <h2 className="text-primary-black text-h4/h4 lg:text-h2/h2 font-bold flex w-full justify-center items-center text-center">
                        Маркетинг, аналитика и&nbsp;лояльность <br /> в&nbsp;одном решении
                    </h2>

                    <p className="text-h6/h6 lg:text-h4/h4 flex w-full justify-center items-center text-center text-gray-600 mt-6">
                        Мост между вашим бизнесом и&nbsp;клиентами. <br /> Ваши гости – лояльные
                        инфлюенсеры.
                    </p>
                </div>

                <div className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-3 xl:gap-6 mt-10">
                    {solutionsData.map((item) => (
                        <div
                            key={item.title}
                            className="flex-1 p-3 lg:p-6 md:p-4 bg-white sm:max-w-[80vw] md:max-w-auto rounded-2xl border md:max-w-[500px] lg:min-h-[307px] xl:min-h-[206px] border-[#eaeaea] text-left flex flex-col items-center lg:items-start"
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-0.5 mb-3">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-8 h-8 md:w-12 md:h-12"
                                />
                                <h6 className="text-primary-black text-h6/h6 lg:text-h5/h5 font-bold text-center lg:text-start">
                                    {item.title}
                                </h6>
                            </div>

                            <p className="text-body-sm/body-sm lg:text-body-md/body-md text-center lg:text-start text-gray-600">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </PageWrapper>
    )
}
