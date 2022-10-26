import { LoginSchema } from '../types/loginSchema'

import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice Slice Test', () => {
  test('set Username Test', () => {
    const state: DeepPartial<LoginSchema> = { username: 'qwerty' }
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('zxc')),
    ).toEqual({ username: 'zxc' })
  })
  test('set Password Test', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('321')),
    ).toEqual({ password: '321' })
  })
})
