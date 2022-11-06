import { memo } from 'react'
import { useUserAuthData } from 'shared/lib/hooks'
import { AppLink, Icon, IconColor } from 'shared/ui'

import { SidebarItemType } from '../../model/items'

import cls from './SidebarItem.module.scss'

export interface SidebarItemProps {
  item: SidebarItemType
  isCollapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, isCollapsed } = props
  const { icon } = item

  const isAuth = useUserAuthData()

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink to={item.path} className={cls.linkWrapper}>
      <Icon icon={icon} color={IconColor.INVERTED} />
    </AppLink>
  )
})
