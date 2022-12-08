import { memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Login.module.scss'

import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import LoginIcon from '@/shared/assets/icons/login.svg'
import { classNames, Mods } from '@/shared/lib/helpers'
import { useUserAuthData } from '@/shared/lib/hooks'
import { Button, ButtonTheme } from '@/shared/ui/Button'


interface LoginProps {
  className?: string
}

export const Login = memo((props: LoginProps) => {
  const { className } = props
  const { t } = useTranslation()
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const authData = useUserAuthData()

  const onCloseModal = useCallback(() => {
    setModalIsVisible(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setModalIsVisible(true)
  }, [])

  useEffect(() => {
    if (authData) {
      setModalIsVisible(false)
    }
  }, [authData])

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

  return <AvatarDropdown />
})
