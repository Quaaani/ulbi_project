import { FC, memo } from 'react'
import { RoutePath } from 'shared/router'
import { AppLink } from 'shared/ui'

import { SidebarItemType } from '../../model/items'

import cls from './SidebarItem.module.scss'

export interface SidebarItemProps {
  item: SidebarItemType
  isCollapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, isCollapsed } = props
  const { icon: Icon } = item

  const mods: Record<string, boolean> = {}

  return (
    <AppLink to={item.path} className={cls.linkWrapper}>
      <Icon className={cls.icon} />
    </AppLink>
  )
})
