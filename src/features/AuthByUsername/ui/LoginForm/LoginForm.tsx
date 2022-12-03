import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames, Mods } from 'shared/lib/helpers'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components'
import { useAppDispatch } from 'shared/lib/hooks'
import { Text, TextSize } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'

import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername } from '../../model/selectors/authByUsernameSelectors'

import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

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

  const onPressLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.()
    }
  }, [dispatch, username, password, onSuccess])

  const errorMessage = error ? t('wrong-login-data') : ''

  const mods: Mods = {}
  const formWrapperMods: Mods = {
    [cls.formDisabled]: !!isLoading,
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div data-testid="loginform.test" className={classNames(cls.loginForm, mods, [className])}>
        <Text title={t('log-in-form')} size={TextSize.HEADER} />
        <div className={classNames(cls.formWrapper, formWrapperMods)}>
          <Input autofocus placeholder={t('username')} errorMessage={errorMessage} value={username} onChange={onChangeUsername} />
          <Input
            placeholder={t('password')}
            errorMessage={errorMessage}
            value={password}
            className={cls.inputWrapperLast}
            onChange={onChangePassword}
          />
          <Button className={cls.btnWrapper} title={t('log-in')} onClick={onPressLogin} />
        </div>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
