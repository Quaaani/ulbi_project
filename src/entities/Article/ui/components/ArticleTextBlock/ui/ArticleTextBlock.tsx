// TODO: Delete disable
/* eslint-disable i18next/no-literal-string */
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './ArticleTextBlock.module.scss'

export interface ArticleTextBlockProps {
  className?: string
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
  const { className } = props
  const { t } = useTranslation('articleDetailsPage')

  const mods: Mods = {}
  return (
    <div 
      data-testid='articleTextBlock.test'
      className={classNames(cls.articleTextBlock, mods, [className])}
    >
      ArticleTextBlock
    </div>
  )
})
