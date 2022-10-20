import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

import { LoginErrors } from '../../services/loginByUsername/loginByUsername'

import { getLoginError } from './getLoginError'

describe('getLoginError Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual('')
  })
  test('State with error Test', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: LoginErrors.INCORRECT_DATA,
      },
    }
    expect(getLoginError(state as StateSchema)).toEqual('incorrectData')
  })
})
