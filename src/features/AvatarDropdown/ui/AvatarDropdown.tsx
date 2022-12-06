import { isUserAdmin, isUserManager, userActions } from 'entities/User'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { generatePath } from 'react-router-dom'
import { classNames, Mods } from 'shared/lib/helpers'
import { useAppDispatch, useUserAuthData } from 'shared/lib/hooks'
import { RoutePath } from 'shared/router'
import { Avatar } from 'shared/ui/Avatar'
import { Dropdown } from 'shared/ui/Popups'

import cls from './AvatarDropdown.module.scss'

export interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useUserAuthData()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const isAdminPanelAvailable = isAdmin || isManager

  const profilePath = generatePath(RoutePath.profile, {
    profileId: authData?.id || '',
  })

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const mods: Mods = {}

  if (!authData) {
    return null
  }

  return (
    <Dropdown
      data-testid="login.test"
      className={classNames(cls.avatarDropdown, mods, [className])}
      direction="bottom-left"
      trigger={<Avatar alt={authData?.username || 'avatar'} src={authData?.avatar} />}
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('admin-panel'),
                href: RoutePath.admin_panel,
              },
            ]
          : []),
        {
          content: t('profile'),
          href: profilePath,
        },
        {
          content: t('exit'),
          onClick: onLogout,
        },
      ]}
    />
  )
})
