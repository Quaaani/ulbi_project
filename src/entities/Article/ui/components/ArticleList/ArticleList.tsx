import { HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'
import { Text, TextSize, TextType } from 'shared/ui'

import { Article, ArticleView } from '../../../model/types/articleSchema'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'

import cls from './ArticleList.module.scss'

export interface ArticleListProps {
  className?: string
  isLoading?: boolean
  view?: ArticleView
  articles: Article[]
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.TILE ? 9 : 3).fill(0).map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />)

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, isLoading, view = ArticleView.TILE, articles, target } = props
  const { t } = useTranslation('articlesPage')

  const renderArticle = (article: Article) => <ArticleListItem key={article.id} className={cls.card} view={view} article={article} target={target} />

  if (!isLoading && !articles.length) {
    return <Text title={t('articles-was-not-found')} size={TextSize.LARGE} type={TextType.ERROR} />
  }

  const mods: Mods = {}
  return (
    <div data-testid="articleList.test" className={classNames(cls.articleList, mods, [className, cls[view]])}>
      {articles.length ? articles.map(renderArticle) : null}
      {isLoading ? getSkeletons(view) : null}
    </div>
  )
})
