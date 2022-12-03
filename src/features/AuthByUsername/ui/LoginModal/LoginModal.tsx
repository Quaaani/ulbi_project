import { FC, Suspense } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'
import { Modal } from 'shared/ui/Modal'
import { PageLoader } from 'widgets/PageLoader'

import { LoginFormAsync } from '../LoginForm/LoginForm.async'

import cls from './LoginModal.module.scss'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props
  const mods: Mods = {}

  return (
    <Modal lazy data-testid="loginmodal.test" isOpen={isOpen} onClose={onClose} className={classNames(cls.loginmodal, mods, [className])}>
      <Suspense fallback={<PageLoader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
