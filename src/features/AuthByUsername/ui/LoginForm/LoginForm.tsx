import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/helpers'
import { Button, Input, Text, TextSize } from 'shared/ui'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'

import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from '../../model/selectors'

import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

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
    [cls.formDisabled]: !!isLoading,
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
          <Button className={cls.btnWrapper} onClick={onPressLogin}>
            {t('log-in')}
          </Button>
        </div>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
