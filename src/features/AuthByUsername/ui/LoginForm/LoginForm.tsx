import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { classNames } from 'shared/lib/helpers'
import { Button, Input, Text, TextSize } from 'shared/ui'

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'

import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch],
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch],
  )

  const onPressLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  const errorMessage = error ? t('wrong-login-data') : ''

  const mods: Record<string, boolean> = {}
  const formWrapperMods: Record<string, boolean> = {
    [cls.formDisabled]: isLoading
  }

  return (
    <div
      data-testid="loginform.test"
      className={classNames(cls.loginForm, mods, [className])}
    >
      <Text size={TextSize.HEADER}>{t('log-in-form')}</Text>
      <div className={classNames(cls.formWrapper, formWrapperMods)}>
        <Input
          autofocus
          placeholder={t('username')}
          errorMessage={errorMessage}
          value={username}
          onChange={onChangeUsername}
        />
        <Input
          placeholder={t('password')}
          errorMessage={errorMessage}
          value={password}
          className={cls.inputWrapperLast}
          onChange={onChangePassword}
        />
        <Button
          className={cls.btnWrapper}
          onClick={onPressLogin}
        >
          {t('log-in')}
        </Button>
      </div>
    </div>
  )
})
