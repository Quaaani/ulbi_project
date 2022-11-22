import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { Page } from 'shared/ui'

import {
  getArticlesPageIsLoading, getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { fetchArticlesList, fetchNextArticlesPage } from '../../model/services'
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
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

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState())
    dispatch(
      fetchArticlesList({
        page: 1,
      }),
    )
  })

  const onToggleArticlesView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch],
  )

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const mods: Mods = {}
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <Page
        className={classNames(cls.articlesPage, mods)}
        onScrollEnd={onLoadNextPart}
      >
        <ArticleViewSelector
          className={cls.toggleViewBtns}
          view={view}
          onToggleArticlesView={onToggleArticlesView}
        />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
