import React from 'react'
import { RoutePath } from 'shared/router'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/info.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
  path: string
  text?: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?:  boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: MainIcon,
  },
  {
    path: RoutePath.profile,
    icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.about,
    icon: AboutIcon,
  },
]
