import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { VStack } from 'shared/ui'
import { Page } from 'widgets'

import { fetchNextArticlesPage, initArticlesPage } from '../../model/services'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { ArticleInfiniteList } from '../ArticleInfiniteList'
import { ArticlesPageFilters } from '../ArticlesPageFilters'

import cls from './ArticlesPage.module.scss'

export interface ArticlesProps {}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

export const ArticlesPage = (props: ArticlesProps) => {
  const { t } = useTranslation('articlesPage')
  const dispatch = useAppDispatch()

  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const mods: Mods = {}
  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
      <Page className={classNames(cls.articlesPage, mods)} onScrollEnd={onLoadNextPart}>
        <VStack max gap='16'>
          <ArticlesPageFilters />
          <ArticleInfiniteList />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
