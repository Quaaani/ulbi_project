import {
  ArticleSortField,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article'
import { ArticleSortSelector } from 'entities/Article/ui/components'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch, useDebounce } from 'shared/lib/hooks'
import { SortOrder } from 'shared/types'
import { Input } from 'shared/ui'

import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from '../../../model/selectors/articlesPageSelectors'
import { articlesPageActions } from '../../../model/slice/articlesPageSlice'

import cls from './ArticlesPageFilters.module.scss'

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

  const mods: Mods = {}
  return (
    <div
      data-testid="articlesPageFilters.test"
      className={classNames(cls.articlesPageFilters, mods, [className])}
    >
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector
          className={cls.toggleViewBtns}
          view={view}
          onToggleArticlesView={onToggleArticlesView}
        />
      </div>
      <Input
        className={cls.search}
        placeholder={t('search')}
        value={search}
        onChange={onChangeSearch}
      />
    </div>
  )
})
