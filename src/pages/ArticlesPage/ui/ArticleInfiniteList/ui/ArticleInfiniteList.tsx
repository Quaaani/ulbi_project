import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../../model/selectors/articlesPageSelectors'
import { getArticles } from '../../../model/slice/articlesPageSlice'

import { classNames, Mods } from '@/shared/lib/helpers'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Text, TextType } from '@/shared/ui/Text'
import { ArticleList } from '@/entities/Article'

export interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props
  const { t } = useTranslation('articlesPage')
  const dispatch = useAppDispatch()

  const articles = useSelector(getArticles.selectAll)
  const view = useSelector(getArticlesPageView)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)

  const mods: Mods = {}

  if (error) {
    return <Text type={TextType.ERROR} title={t('failed-to-fetch-articles')} />
  }

  return <ArticleList className={classNames('', mods, [className])} isLoading={isLoading} view={view} articles={articles} />
})
