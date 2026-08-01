import React from "react"
import type { ArticleSummarySchema } from "@/packages/api/codegen"
import ArticleCard from "@/app/(public)/blog/components/article-card.tsx"

export type ArticlesArrayProps = {
    articles: ArticleSummarySchema[]
}

function ArticlesArray({ articles }: ArticlesArrayProps) {
    return (
        <div className="flex flex-wrap gap-4 sm:gap-6 xl:gap-8 my-8">
            {articles.map((item) => {
                return <ArticleCard article={item} key={item.slug} />
            })}
        </div>
    )
}

export default ArticlesArray
