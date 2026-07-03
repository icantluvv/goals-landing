import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"
import { Typography } from "@/ui/core/Typography"
import Script from "next/script"
import { PageSchema } from "@/constants/mocks"
import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import ArticlesArray from "@/ui/feature/blog/ArticlesArray"
import { listArticlesBlogApiArticlesGet } from "@/packages/api/codegen"

export const metadata: Metadata = { ...getStaticMeta("/blog") }

const BlogPage = async () => {
    const articles = await listArticlesBlogApiArticlesGet()

    console.log("articles", articles)

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
                <Typography className="mt-32" variants={"h1"}>
                    Статьи
                </Typography>
                <ArticlesArray articles={articles} />
            </PageWrapper>
        </>
    )
}

export default BlogPage
