import { ArticleList } from 'entities/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'
import { Text, TextSize, VStack } from 'shared/ui'

import { useArticleRecommendationsList } from '../api/articleRecommendationsApi'

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
