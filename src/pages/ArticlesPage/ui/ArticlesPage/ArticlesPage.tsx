import { ArticleList } from 'entities/Article'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { Page } from 'widgets'

import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors'
import { fetchNextArticlesPage, initArticlesPage } from '../../model/services'
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlesPageSlice'
import { ArticlesPageFilters } from '../ArticlesPageFilters'

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

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const mods: Mods = {}
  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
      <Page
        className={classNames(cls.articlesPage, mods)}
        onScrollEnd={onLoadNextPart}
      >
        <ArticlesPageFilters />
        <ArticleList
          className={cls.list}
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
