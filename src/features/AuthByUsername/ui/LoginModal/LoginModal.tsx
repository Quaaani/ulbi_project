import { FC } from 'react'
import { classNames } from 'shared/lib/helpers'
import { Modal } from 'shared/ui'

import { LoginForm } from '../LoginForm/LoginForm'

import cls from './LoginModal.module.scss'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { children, className, isOpen, onClose } = props
  const mods: Record<string, boolean> = {}

  return (
    <Modal
      lazy
      data-testid="loginmodal.test"
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.loginmodal, mods, [className])}
    >
      <LoginForm />
    </Modal>
  )
}
