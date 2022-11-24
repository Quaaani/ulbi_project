import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { Card } from '../..'
import { classNames, Mods } from '../../../lib/helpers'

import cls from './Tabs.module.scss'

export interface TabItem<T> {
  value: T
  content: ReactNode
}

export interface TabsProps<T extends string> {
  className?: string
  tabs: TabItem<T>[]
  value: T
  onTabClick: (tab: TabItem<T>) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick } = props
  const { t } = useTranslation('')

  const mods: Mods = {}
  return (
    <div
      data-testid="tabs.test"
      className={classNames(cls.tabs, mods, [className])}
    >
      {tabs.map((tab) => (
        <Card
          renderContent={() => {
            ;<div>{tab.content}</div>
          }}
        />
      ))}
    </div>
  )
}
