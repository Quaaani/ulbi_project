// TODO: Delete disable
/* eslint-disable i18next/no-literal-string */
import { fetchArticleById } from 'entities/Article/model/services'
import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch } from 'shared/lib/hooks'
import { Text, TextType, TextSize, Skeleton } from 'shared/ui'

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../../model/selectors/articleDetailsSelectors'
import { articleDetailsReducer } from '../../../model/slice/articleDetailsSlice'

import cls from './ArticleDetails.module.scss'

export interface ArticleDetailsProps {
  className?: string
  articleId: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, articleId } = props
  const { t } = useTranslation('articleDetailsPage')
  const dispatch = useAppDispatch()

  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const articleDetailsData = useSelector(getArticleDetailsData)

  useEffect(() => {
    dispatch(fetchArticleById(articleId))
  }, [dispatch, articleId])

  let content

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={cls.avatarWrapper} width={200} height={200} borderRadius="50%" />
        <Skeleton className={cls.titleWrapper} width={300} height={32} />
        <Skeleton className={cls.skeletonWrapper} width={600} height={24} />
        <Skeleton className={cls.skeletonWrapper} width="100%" height={200} />
        <Skeleton className={cls.skeletonWrapper} width="100%" height={200} />
      </div>
    )
  } else if (error) {
    content = (
      <Text
        title={t('error-fetching-this-article')}
        type={TextType.ERROR}
        size={TextSize.HEADER}
      />
    )
  } else {
    content = <div>{t('article-details-entities')}</div>
  }

  const mods: Mods = {}
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div
        data-testid="articleDetails.test"
        className={classNames(cls.articleDetails, mods, [className])}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
