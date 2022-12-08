import { memo } from 'react'

import { SidebarItemType } from '../../model/types/sidebarSchema'

import cls from './SidebarItem.module.scss'

import { useUserAuthData } from '@/shared/lib/hooks'
import { AppLink } from '@/shared/ui/AppLink'
import { Icon, IconColor } from '@/shared/ui/Icon'



interface SidebarItemProps {
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
