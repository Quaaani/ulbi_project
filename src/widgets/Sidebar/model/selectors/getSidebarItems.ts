import { createSelector } from '@reduxjs/toolkit'
import { generatePath } from 'react-router-dom'

import { SidebarItemType } from '../types/sidebarSchema'

import { getUserAuthData } from '@/entities/User'
import { RoutePath } from '@/shared/router'
import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/info.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import FeatherIcon from '@/shared/assets/icons/feather.svg'


export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      icon: MainIcon,
    },
    {
      path: RoutePath.about,
      icon: AboutIcon,
    },
  ]

  if (userData) {
    const profilePath = generatePath(RoutePath.profile, {
      profileId: userData.id,
    })

    sidebarItemsList.push(
      {
        path: profilePath,
        icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        icon: ArticleIcon,
        authOnly: true,
      },
      {
        path: RoutePath.article_create,
        icon: FeatherIcon,
        authOnly: true,
      },
    )
  }

  return sidebarItemsList
})
