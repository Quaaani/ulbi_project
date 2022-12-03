import { isUserAdmin, isUserManager, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames, Mods } from 'shared/lib/helpers'
import { useUserAuthData } from 'shared/lib/hooks'
import { useTranslation } from 'react-i18next'
import LoginIcon from 'shared/assets/icons/login.svg'
import { generatePath } from 'react-router-dom'
import { RoutePath } from 'shared/router'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Dropdown } from 'shared/ui/Dropdown'
import { Avatar } from 'shared/ui/Avatar'

import cls from './Login.module.scss'

interface LoginProps {
  className?: string
}

export const Login = memo((props: LoginProps) => {
  const { className } = props
  const { t } = useTranslation()
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const authData = useUserAuthData()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const dispatch = useDispatch()

  const profilePath = generatePath(RoutePath.profile, {
    profileId: authData?.id || '',
  })

  const onCloseModal = useCallback(() => {
    setModalIsVisible(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setModalIsVisible(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  useEffect(() => {
    if (authData) {
      setModalIsVisible(false)
    }
  }, [authData])

  const isAdminPanelAvailable = isAdmin || isManager

  const mods: Mods = {}

  if (!authData) {
    return (
      <>
        <Button
          data-testid="login.test"
          className={classNames(cls.logout, mods, [className])}
          icon={LoginIcon}
          iconStyle={cls.icon}
          theme={ButtonTheme.CLEAR}
          onClick={onOpenModal}
        />
        {!authData && <LoginModal isOpen={modalIsVisible} onClose={onCloseModal} />}
      </>
    )
  }

  return (
    <Dropdown
      data-testid="login.test"
      className={classNames(cls.login)}
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
