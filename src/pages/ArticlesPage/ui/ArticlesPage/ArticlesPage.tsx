import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './ArticlesPage.module.scss'

export interface ArticlesProps {}

export const ArticlesPage = (props: ArticlesProps) => {
  const { t } = useTranslation('articlesPage')

  const mods: Mods = {}
  return <div className={classNames(cls.articlesPage, mods)}>{t('articles')}</div>
}

export default memo(ArticlesPage)
