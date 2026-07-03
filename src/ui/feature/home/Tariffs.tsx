import { Typography } from "@/ui/core/Typography"
import Tariff from "@/ui/shared/tariffs/Tariff"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"

import { tariffs } from "@/constants/mocks"

const Tariffs = () => {
    return (
        <PageWrapper scroll>
            <section id="tariffs" className="scroll-mt-[150px]">
                <div>
                    <Typography color="black" center variants="h2">
                        Выберите тариф <br />
                        для своего бизнеса
                    </Typography>

                    <Typography
                        center
                        className="px-[10vw] mt-[24px] text-gray-600"
                        variants="accent"
                    >
                        Учитывайте количество открытых заведений, текущие задачи и этапы развития
                        вашего бизнеса. Выберите тариф, который соответствует вашим целям — от
                        базового тестирования инструментов до масштабной работы с аудиторией и
                        продвинутой аналитики.
                    </Typography>
                </div>

                <ul className="grid mt-[40px] md:mt-[60px] lg:mt-[80px] px-4 md:px-[30px] lg:px-0 overflow-x-auto grid-cols-[300px_300px_300px] no-scrollbar md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 align-center">
                    {tariffs.map((tariff) => {
                        return <Tariff key={tariff.id} tariff={tariff} />
                    })}
                </ul>
            </section>
        </PageWrapper>
    )
}

export default Tariffs
