import { solutionsData } from "@/constants/mocks"
import { Typography } from "@/ui/core/Typography"
import { Feature } from "@/ui/shared/solution"
import { PageWrapper } from "@/ui/shared/page-wrapper"

const Solution = () => (
    <PageWrapper>
        <section id="points" className="w-full block scroll-mt-[150px]">
            <div>
                <Typography color="black" center variants={"h2"}>
                    Маркетинг, аналитика и лояльность <br /> в одном решении
                </Typography>

                <Typography className="text-gray-600 mt-[24px]" center variants={"accent"}>
                    Мост между вашим бизнесом и клиентами. <br /> Ваши гости – лояльные инфлюенсеры.
                </Typography>
            </div>

            <div className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-[12px] xl:gap-[24px] mt-[40px]">
                {solutionsData.map((item, index) => (
                    <Feature key={index} icon={item.icon} title={item.title} text={item.text} />
                ))}
            </div>
        </section>
    </PageWrapper>
)

export default Solution
