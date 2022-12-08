import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'


import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { ArticleInfiniteList } from '../ArticleInfiniteList'
import { ArticlesPageFilters } from '../ArticlesPageFilters'

import cls from './ArticlesPage.module.scss'

import type { ReducersList } from '@/shared/lib/components'

import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { classNames, Mods } from '@/shared/lib/helpers'
import { DynamicModuleLoader } from '@/shared/lib/components'

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
        <VStack max gap="16">
          <ArticlesPageFilters />
          <ArticleInfiniteList />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
