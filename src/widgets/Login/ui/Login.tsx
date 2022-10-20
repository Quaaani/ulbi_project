import { FC, useCallback, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/helpers'
import { Button, Modal, ButtonTheme } from 'shared/ui'
import LoginIcon from 'shared/assets/icons/login.svg'
import UserIcon from 'shared/assets/icons/user.svg'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

import cls from './Login.module.scss'

interface LoginProps {
  className?: string
}

export const Login: FC<LoginProps> = (props) => {
  const { children, className } = props
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const authData = useSelector(getUserAuthData)
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

  const Icon = authData ? UserIcon : LoginIcon

  const mods: Record<string, boolean> = {}

  return (
    <>
      <Button
        data-testid="login.test"
        className={classNames(cls.login, mods, [className])}
        theme={ButtonTheme.CLEAR}
        onClick={onPressBtn}
      >
        <Icon className={cls.icon} />
      </Button>
      {!authData && (
        <LoginModal isOpen={modalIsVisible} onClose={onCloseModal} />
      )}
    </>
  )
}
