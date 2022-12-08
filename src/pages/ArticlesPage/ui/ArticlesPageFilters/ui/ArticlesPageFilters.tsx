import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'


import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../../model/selectors/articlesPageSelectors'
import { articlesPageActions } from '../../../model/slice/articlesPageSlice'
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList'

import cls from './ArticlesPageFilters.module.scss'

import type { TabItem } from '@/shared/ui/Tabs'

import { Input } from '@/shared/ui/Input'
import { SortOrder } from '@/shared/types'
import { useAppDispatch, useDebounce } from '@/shared/lib/hooks'
import { classNames, Mods } from '@/shared/lib/helpers'
import { ArticleSortSelector, ArticleTypeTabs } from '@/entities/Article/ui/components'
import { ArticleSortField, ArticleType, ArticleView, ArticleViewSelector } from '@/entities/Article'

export interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation('articlesPage')
  const dispatch = useAppDispatch()

  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onToggleArticlesView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch],
  )

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search))
      dispatch(articlesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )

  const onChangeType = useCallback(
    (tab: TabItem<ArticleType>) => {
      dispatch(articlesPageActions.setType(tab.value))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const mods: Mods = {}
  return (
    <div data-testid="articlesPageFilters.test" className={classNames(cls.articlesPageFilters, mods, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector sort={sort} order={order} onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} />
        <ArticleViewSelector className={cls.toggleViewBtns} view={view} onToggleArticlesView={onToggleArticlesView} />
      </div>
      <Input className={cls.search} placeholder={t('search')} value={search} onChange={onChangeSearch} />
      <ArticleTypeTabs value={type} onChange={onChangeType} />
    </div>
  )
})
