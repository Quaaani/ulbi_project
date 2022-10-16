/* eslint-disable i18next/no-literal-string */
import { FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/helpers'
import { Button, Modal, ThemeButton } from 'shared/ui'
import LoginIcon from 'shared/assets/icons/login.svg'
import UserIcon from 'shared/assets/icons/user.svg'

import cls from './Login.module.scss'

interface LoginProps {
  className?: string
}

export const Login: FC<LoginProps> = (props) => {
  const { children, className } = props
  const [loginModalIsVisible, setLoginModalIsVisible] = useState(false)

  const onToggleModal = useCallback(() => {
    setLoginModalIsVisible(!loginModalIsVisible)
  }, [loginModalIsVisible])

  const mods: Record<string, boolean> = {}

  return (
    <>
      <Button
        data-testid="login.test"
        className={classNames(cls.login, mods, [className])}
        theme={ThemeButton.CLEAR}
        onClick={onToggleModal}
      >
        <LoginIcon className={cls.icon} />
      </Button>
      <Modal isOpen={loginModalIsVisible} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor
        sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem
        ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
        amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
        dolor sit amet.Lorem ipsum dolor sit amet.
      </Modal>
    </>
  )
}
