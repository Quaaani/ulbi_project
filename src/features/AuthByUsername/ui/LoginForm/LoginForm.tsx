import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { classNames } from 'shared/lib/helpers'
import { Button, Input } from 'shared/ui'

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

  const mods: Record<string, boolean> = {}

  return (
    <div
      data-testid="loginform.test"
      className={classNames(cls.loginForm, mods, [className])}
    >
      <Input
        autofocus
        placeholder={t('username')}
        errorMessage={error}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        placeholder={t('password')}
        errorMessage={error}
        value={password}
        className={cls.inputWrapperLast}
        onChange={onChangePassword}
      />
      <Button disabled={isLoading} className={cls.btnWrapper} onClick={onPressLogin}>
        {t('log-in')}
      </Button>
    </div>
  )
})
