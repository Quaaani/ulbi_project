import { memo } from 'react'
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

  return (
    <AppLink to={item.path} className={cls.linkWrapper}>
      <Icon className={cls.icon} />
    </AppLink>
  )
})

