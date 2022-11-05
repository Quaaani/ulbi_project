import { ArticleDetails } from 'entities/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames, Mods } from 'shared/lib/helpers'
import { Text, TextType, TextSize } from 'shared/ui'

import cls from './ArticleDetailsPage.module.scss'

export interface ArticleDetailsProps {}

export const ArticleDetailsPage = (props: ArticleDetailsProps) => {
  const { t } = useTranslation('articleDetailsPage')
  const { articleId } = useParams<{ articleId: string }>()

  const mods: Mods = {}
  return (
    <div className={classNames(cls.articleDetailsPage, mods)}>
      {articleId ? (
        <ArticleDetails articleId={articleId} />
      ) : (
        <Text
          title={t('article-was-not-found')}
          type={TextType.ERROR}
          size={TextSize.HEADER}
        />
      )}
    </div>
  )
}

export default memo(ArticleDetailsPage)
