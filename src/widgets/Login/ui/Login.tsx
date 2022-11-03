import { userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ExitIcon from 'shared/assets/icons/exit.svg'
import LoginIcon from 'shared/assets/icons/login.svg'
import { classNames, Mods } from 'shared/lib/helpers'
import { Button, ButtonTheme } from 'shared/ui'
import { useUserAuthData } from 'shared/lib/hooks'

import cls from './Login.module.scss'

interface LoginProps {
  className?: string
}

export const Login = memo((props: LoginProps) => {
  const { className } = props
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const authData = useUserAuthData()
  const dispatch = useDispatch()

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

  const onPressBtn = authData ? onLogout : onOpenModal

  const Icon = authData ? ExitIcon : LoginIcon

  const mods: Mods = {}

  return (
    <>
      <Button
        data-testid="login.test"
        className={classNames(cls.login, mods, [className])}
        icon={Icon}
        iconStyle={cls.icon}
        theme={ButtonTheme.CLEAR}
        onClick={onPressBtn}
      />
      {!authData && (
        <LoginModal isOpen={modalIsVisible} onClose={onCloseModal} />
      )}
    </>
  )
})
