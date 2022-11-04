import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './ArticleDetails.module.scss'

export interface ArticleDetailsProps {
  className?: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className } = props
  const { t } = useTranslation('articleDetailsPage')

  const mods: Mods = {}
  return (
    <div
      data-testid="articleDetails.test"
      className={classNames(cls.articleDetails, mods, [className])}
    >
      {t('article-details-entities')}
    </div>
  )
})
