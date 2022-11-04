// TODO: Delete disable
/* eslint-disable i18next/no-literal-string */
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './ArticleImageBlock.module.scss'

export interface ArticleImageBlockProps {
  className?: string
}

export const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
  const { className } = props
  const { t } = useTranslation('articleDetailsPage')

  const mods: Mods = {}
  return (
    <div
      data-testid="articleImageBlock.test"
      className={classNames(cls.articleImageBlock, mods, [className])}
    >
      ArticleImageBlock
    </div>
  )
})
