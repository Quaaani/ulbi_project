import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './Articles.module.scss'

export interface ArticlesProps {}

export const Articles = (props: ArticlesProps) => {
  const { t } = useTranslation('articles')

  const mods: Mods = {}
  return (
    <div 
      className={classNames(cls.articles, mods)}
    >
      Articles
    </div>
  )
}

export default memo(Articles)
