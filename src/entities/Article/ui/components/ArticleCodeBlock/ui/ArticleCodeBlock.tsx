// TODO: Delete disable
/* eslint-disable i18next/no-literal-string */
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './ArticleCodeBlock.module.scss'

export interface ArticleCodeBlockProps {
  className?: string
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
  const { className } = props
  const { t } = useTranslation('articleDetailsPage')

  const mods: Mods = {}
  return (
    <div 
      data-testid='articleCodeBlock.test'
      className={classNames(cls.articleCodeBlock, mods, [className])}
    >
      ArticleCodeBlock
    </div>
  )
})
