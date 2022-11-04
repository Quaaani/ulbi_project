import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './ArticleDetails.module.scss'

export interface ArticleDetailsProps {}

export const ArticleDetails = (props: ArticleDetailsProps) => {
  const { t } = useTranslation('articleDetails')

  const mods: Mods = {}
  return (
    <div className={classNames(cls.articleDetails, mods)}>
      {t('article-details')}
    </div>
  )
}

export default memo(ArticleDetails)
