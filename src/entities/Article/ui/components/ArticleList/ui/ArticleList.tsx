import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import { Article, ArticleView } from '../../../../model/types/articleSchema'
import { ArticleListItem } from '../../ArticleListItem'
import { ArticleListItemSkeleton } from '../../ArticleListItem/ui/ArticleListItemSkeleton'

import cls from './ArticleList.module.scss'

export interface ArticleListProps {
  className?: string
  isLoading?: boolean
  view?: ArticleView
  articles: Article[]
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.TILE ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ))

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, isLoading, view = ArticleView.TILE, articles } = props
  const { t } = useTranslation('articlesPage')

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      className={cls.card}
      view={view}
      article={article}
    />
  )

  const mods: Mods = {}

  if (isLoading) {
    return (
      <div
        data-testid="articleList.test"
        className={classNames(cls.articleList, mods, [className, cls[view]])}
      >
        {getSkeletons(view)}
      </div>
    )
  }

  return (
    <div
      data-testid="articleList.test"
      className={classNames(cls.articleList, mods, [className, cls[view]])}
    >
      {articles.length ? articles.map(renderArticle) : null}
    </div>
  )
})
