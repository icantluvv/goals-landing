import React from "react"
import Link from "next/link"
import type { ArticleSummarySchema } from "@/packages/api/codegen"
import Image from "next/image"

type ArticleCardProps = {
    article: ArticleSummarySchema
}

function ArticleCard({ article }: ArticleCardProps) {
    console.log("article", article)

    return (
        <Link
            className="group w-full md:w-[calc(50%-24px)] xl:w-[calc(33%-32px)] md:max-w-[460px]"
            href={`/blog/${article.slug}`}
        >
            <div className="relative bg-primary-black/5 rounded-lg min-h-[168px] sm:min-h-[200px] xl:min-h-60 group-hover:shadow-md transition-shadow duration-300">
                {article.image_path && (
                    <Image
                        quality={100}
                        src={
                            process.env.NEXT_PUBLIC_BASE_API_HOST! +
                            process.env.NEXT_PUBLIC_BASE_IMAGE_URL! +
                            article.image_path
                        }
                        alt="image-article"
                        fill
                        className={"rounded-lg"}
                    />
                )}
            </div>

            <div className="mt-3 md:mt-4 group-hover:text-green-active transition-colors duration-300">
                <h6 className="text-h6/h6 font-bold line-clamp-2">{article.title}</h6>
            </div>

            <div className="mt-2">
                <p className="text-body-sm/body-sm line-clamp-3">{article.summary}</p>
            </div>
        </Link>
    )
}

export default ArticleCard
