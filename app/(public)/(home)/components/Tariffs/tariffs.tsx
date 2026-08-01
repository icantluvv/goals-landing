import { PageWrapper } from "@/components/shared/PageWrapper"

import { Tariff } from "@/app/(public)/(home)/components/Tariffs/tariff.tsx"
import { tariffs } from "@/app/(public)/(home)/constant.ts"

export function Tariffs() {
    return (
        <PageWrapper scroll>
            <section id="tariffs" className="scroll-mt-[150px]">
                <div>
                    <h2 className="text-primary-black text-h4/h4 lg:text-h2/h2 font-bold flex w-full justify-center items-center text-center">
                        Выберите тариф <br />
                        для своего бизнеса
                    </h2>

                    <p className="text-h6/h6 lg:text-h4/h4 flex w-full justify-center items-center text-center px-[10vw] mt-6 text-gray-600">
                        Учитывайте количество открытых заведений, текущие задачи и&nbsp;этапы
                        развития вашего бизнеса. Выберите тариф, который соответствует вашим целям —
                        от базового тестирования инструментов до масштабной работы с аудиторией
                        и&nbsp;продвинутой аналитики.
                    </p>
                </div>

                <ul className="grid mt-10 md:mt-15 lg:mt-20 px-4 md:px-7.5 lg:px-0 overflow-x-auto grid-cols-[300px_300px_300px] no-scrollbar md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 align-center">
                    {tariffs.map((tariff) => {
                        return <Tariff key={tariff.id} tariff={tariff} />
                    })}
                </ul>
            </section>
        </PageWrapper>
    )
}
