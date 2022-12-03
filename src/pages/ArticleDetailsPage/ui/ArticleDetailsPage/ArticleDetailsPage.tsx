import { ArticleDetails } from 'entities/Article'
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { classNames, Mods } from 'shared/lib/helpers'
import { VStack } from 'shared/ui/Stack'
import { Text, TextSize, TextType } from 'shared/ui/Text'
import { Page } from 'widgets/Page'

import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsComments } from '../ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader'

import cls from './ArticleDetailsPage.module.scss'

export interface ArticleDetailsProps {}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

export const ArticleDetailsPage = (props: ArticleDetailsProps) => {
  const { t } = useTranslation('articleDetailsPage')
  const { articleId } = useParams<{ articleId: string }>()

  const mods: Mods = {}

  if (!articleId) {
    return <Text title={t('article-was-not-found')} type={TextType.ERROR} size={TextSize.HEADER} />
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <Page className={classNames(cls.articleDetailsPage, mods)}>
        <VStack max gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails articleId={articleId} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments articleId={articleId} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
