import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi'

import cls from './ArticleRating.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'
import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface ArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props
  const { t } = useTranslation('articleDetailsPage')
  const userId = useSelector(getUserAuthData)?.id ?? ''
  const { data, isLoading } = useGetArticleRating({
    userId,
    articleId,
  })
  const [rateArticleMutation] = useRateArticle()

  const rating = data?.[0]

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId,
          articleId,
          rate: starsCount,
          feedback,
        })
      } catch (error) {
        console.warn('Feature: ArticleRating => handleRateArticle error: ', error)
      }
    },
    [articleId, rateArticleMutation, userId],
  )

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback)
    },
    [handleRateArticle],
  )

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount)
    },
    [handleRateArticle],
  )

  const mods: Mods = {}

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  return (
    <RatingCard
      hasFeedback
      className={classNames(cls.articleRating, mods, [className])}
      title={t('rate-this-article')}
      feedbackTitle={t('leave-a-feedback')}
      rate={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  )
})

export default ArticleRating
