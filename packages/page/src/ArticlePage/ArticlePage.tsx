import type { Metadata } from 'next'
import type { FC } from 'react'
import { cache } from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { BlockRenderer } from '@local/payload/components/BlockRenderer'
import config from '@local/payload/payload-config'

import { ArticlePagePreview } from './ArticlePagePreview'

type ArticlePageProps = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{
    isLivePreview?: string
  }>
}

const getArticle = cache(async (slug: string, isLivePreview?: boolean) => {
  const payload = await getPayload({ config })
  const response = await payload.find({
    collection: 'articles',
    draft: isLivePreview === true,
    where: { slug: { equals: slug } },
  })

  return response.docs[0]
})

const getArticles = cache(async () => {
  const payload = await getPayload({ config })
  const response = await payload.find({ collection: 'articles' })

  return response.docs
})

export const generateMetadata = async ({
  params,
  searchParams,
}: ArticlePageProps): Promise<Metadata> => {
  const { slug } = await params
  const { isLivePreview } = await searchParams
  const article = await getArticle(slug, Boolean(isLivePreview))

  if (!article?.meta) {
    return {}
  }

  return article.meta
}

export const generateStaticParams = async (): Promise<
  Awaited<NonNullable<ArticlePageProps['params']>>[]
> => {
  const articles = await getArticles()

  return articles.reduce<Awaited<NonNullable<ArticlePageProps['params']>>[]>(
    (acc, { slug }) => {
      if (!slug) {
        return acc
      }

      return [...acc, { slug }]
    },
    [],
  )
}

export const ArticlePage: FC<ArticlePageProps> = async ({
  params,
  searchParams,
}) => {
  const { slug } = await params
  const { isLivePreview } = await searchParams
  const article = await getArticle(slug, Boolean(isLivePreview))

  if (!article) {
    return notFound()
  }

  return (
    <>
      <ArticlePagePreview />
      <article className="flex grow flex-col">
        <BlockRenderer blocks={article.blocks} />
      </article>
    </>
  )
}
