import { ArticleDetails } from 'entities/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './ArticleDetailsPage.module.scss'

export interface ArticleDetailsProps {}

export const ArticleDetailsPage = (props: ArticleDetailsProps) => {
  const { t } = useTranslation('articleDetailsPage')

  const mods: Mods = {}
  return (
    <div className={classNames(cls.articleDetailsPage, mods)}>
      <ArticleDetails />
    </div>
  )
}

export default memo(ArticleDetailsPage)
