import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useArticleRecommendationsList } from '../api/articleRecommendationsApi'

import { ArticleList } from '@/entities/Article'
import { classNames, Mods } from '@/shared/lib/helpers'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'


export interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { t } = useTranslation('articleDetailsPage')
  const { data: articles, isLoading, error } = useArticleRecommendationsList(5)

  const mods: Mods = {}

  if (isLoading || error || !articles) {
    return null
  }

  return (
    <VStack className={classNames('', mods, [className])} gap="8">
      <Text title={t('recommendations')} size={TextSize.HEADER} />
      <ArticleList articles={articles} target="_blank" />
    </VStack>
  )
})
