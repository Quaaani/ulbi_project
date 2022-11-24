import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'
import { TabItem, Tabs } from 'shared/ui/Tabs/ui/Tabs'

import { ArticleType } from '../../../../model/types/articleSchema'

import cls from './ArticleTypeTabs.module.scss'

export interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChange: (tab: TabItem<ArticleType>) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChange } = props
  const { t } = useTranslation('articlesPage')

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('all'),
      },
      {
        value: ArticleType.IT,
        content: t('it'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('science'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('economics'),
      },
    ],
    [t],
  )

  const mods: Mods = {}
  return (
    <Tabs<ArticleType> tabs={typeTabs} value={value} onTabClick={onChange} />
  )
})
