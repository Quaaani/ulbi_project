import { ArticleList } from 'entities/Article'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'

import {
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlesPageSlice'

import cls from './ArticlesPage.module.scss'

export interface ArticlesProps {}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

export const ArticlesPage = (props: ArticlesProps) => {
  const { t } = useTranslation('articlesPage')
  const dispatch = useAppDispatch()

  const articles = useSelector(getArticles.selectAll)
  const view = useSelector(getArticlesPageView)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
  })

  const mods: Mods = {}
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(cls.articlesPage, mods)}>
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
