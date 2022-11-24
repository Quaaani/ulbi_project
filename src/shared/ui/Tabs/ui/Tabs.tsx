import { ReactNode, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Card, CardTheme } from '../..'
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

  const onClickHandle = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab)
    },
    [onTabClick],
  )

  const mods: Mods = {}
  return (
    <div
      data-testid="tabs.test"
      className={classNames(cls.tabs, mods, [className])}
    >
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.card}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          renderContent={() => <div>{tab.content}</div>}
          onClick={onClickHandle(tab)}
        />
      ))}
    </div>
  )
}
