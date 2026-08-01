import { PageWrapper } from "@/components/shared/PageWrapper"
import Script from "next/script"
import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import { listArticlesBlogApiArticlesGet } from "@/packages/api/codegen"
import { PageError } from "@/components/shared/PageError"
import ArticlesArray from "@/app/(public)/blog/components/articles-array.tsx"

export const metadata: Metadata = { ...getStaticMeta("/blog") }

const PageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ООО «Актнау»",
    url: "https://do-goals.online/",
    image: "https://sun9-57.userapi.com/s/v1/ig2/mVybOW8l9Cpx_7-0EAExCjJL4PUKNpJL6Bj6digI5wBMa1ljaGvYtB8FdM-HiGONY5CfMdHw25pWaTKD6IV6535W.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,600x600&from=bu&cs=600x0",
    telephone: "+7 928 629-33-13",
    address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Ленина, д. 211, кв. 21, ком. 1",
        addressLocality: "г. Батайск",
        addressRegion: "Ростовская область",
        postalCode: "346882",
        addressCountry: "RU"
    },
    founder: {
        "@type": "Person",
        name: "Калюжный Сергей Александрович"
    }
}

const BlogPage = async () => {
    const articles = await listArticlesBlogApiArticlesGet().catch(() => null)

    return (
        <>
            <Script
                id="breadcrumb-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(PageSchema)
                }}
            />
            <PageWrapper>
                <h1 className="text-h1/h1 font-bold mt-20 lg:mt-32">Статьи</h1>
                {articles === null || articles === undefined ? (
                    <PageError />
                ) : (
                    <ArticlesArray articles={articles} />
                )}
            </PageWrapper>
        </>
    )
}

export default BlogPage
