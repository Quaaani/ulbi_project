import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import { Article, ArticleView } from '../../../../model/types/articleSchema'
import { ArticleListItem } from '../../ArticleListItem'

import cls from './ArticleList.module.scss'

export interface ArticleListProps {
  className?: string
  isLoading?: boolean
  view?: ArticleView
  articles: Article[]
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, isLoading, view = ArticleView.TILE, articles } = props
  const { t } = useTranslation('articlePage')

  const renderArticle = (article: Article) => (
    <ArticleListItem view={view} article={article} />
  )

  const mods: Mods = {}
  return (
    <div
      data-testid="articleList.test"
      className={classNames(cls.articleList, mods, [className])}
    >
      {articles.length ? articles.map(renderArticle) : null}
    </div>
  )
})
