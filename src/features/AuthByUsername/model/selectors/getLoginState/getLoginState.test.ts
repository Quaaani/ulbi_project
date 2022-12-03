import { LoginErrors } from '../../services/loginByUsername/loginByUsername'

import { getLoginState } from './getLoginState'

import type { StateSchema } from 'app/providers/StoreProvider'

describe('getLoginState Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginState(state as StateSchema)).toEqual(undefined)
  })
  test('Default Test', () => {
    const loginForm = {
      username: 'qwerty',
      password: '123',
      error: LoginErrors.INCORRECT_DATA,
      isLoading: true,
    }
    const state: DeepPartial<StateSchema> = {
      loginForm,
    }
    expect(getLoginState(state as StateSchema)).toEqual(loginForm)
  })
})
