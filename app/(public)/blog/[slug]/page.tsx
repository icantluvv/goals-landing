import { PageWrapper } from "@/ui/shared/page-wrapper"
import React from "react"
import Image from "next/image"
import { getArticleBlogApiArticlesSlugGet } from "@/packages/api/codegen"

import parse from "html-react-parser"
import { sanitizeHtmlContent } from "@/utils/sanitizeHtmlContent"
import ShareBlock from "@/ui/feature/ShareBlock"

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params
    const article = await getArticleBlogApiArticlesSlugGet(slug)
    const sanitizedContent = sanitizeHtmlContent(article.content_html)

    return (
        <PageWrapper>
            <div className="my-16 lg:my-32">
                <div className="w-full lg:max-w-[60vw] xl:w-full xl:max-w-[1000px]">
                    <div className="w-full max-w-[800px] h-52 sm:h-72 md:h-80 xl:h-96 relative rounded-xl">
                        {article.image_path && (
                            <Image
                                fill
                                src={
                                    process.env.NEXT_PUBLIC_BASE_API_HOST! +
                                    process.env.NEXT_PUBLIC_BASE_IMAGE_URL! +
                                    article.image_path
                                }
                                alt=""
                                quality={100}
                                className="object-cover rounded-xl"
                            />
                        )}
                    </div>

                    <div className="mt-8 prose max-w-none">{parse(sanitizedContent)}</div>

                    <div className={"mt-14"}>
                        <ShareBlock />
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}
