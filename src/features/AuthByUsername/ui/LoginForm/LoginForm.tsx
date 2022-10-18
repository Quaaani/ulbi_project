import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/helpers'
import { Button, Input } from 'shared/ui'

import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { children, className } = props
  const { t } = useTranslation()
  const mods: Record<string, boolean> = {}

  return (
    <div
      data-testid="loginform.test"
      className={classNames(cls.loginForm, mods, [className])}
    >
      <Input autofocus placeholder={t('username')} />
      <Input placeholder={t('password')} className={cls.inputWrapperLast} />
      <Button className={cls.btnWrapper}>{t('sign-in')}</Button>
    </div>
  )
}
