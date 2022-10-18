import { FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/helpers'
import { Button, Modal, ButtonTheme } from 'shared/ui'
import LoginIcon from 'shared/assets/icons/login.svg'
import UserIcon from 'shared/assets/icons/user.svg'
import { LoginModal } from 'features/AuthByUsername'

import cls from './Login.module.scss'

interface LoginProps {
  className?: string
}

export const Login: FC<LoginProps> = (props) => {
  const { children, className } = props
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const onCloseModal = useCallback(() => {
    setModalIsVisible(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setModalIsVisible(true)
  }, [])

  const mods: Record<string, boolean> = {}

  return (
    <>
      <Button
        data-testid="login.test"
        className={classNames(cls.login, mods, [className])}
        theme={ButtonTheme.CLEAR}
        onClick={onOpenModal}
      >
        <LoginIcon className={cls.icon} />
      </Button>
      <LoginModal isOpen={modalIsVisible} onClose={onCloseModal} />
    </>
  )
}
