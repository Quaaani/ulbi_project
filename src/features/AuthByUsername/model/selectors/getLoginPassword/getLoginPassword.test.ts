import { getLoginPassword } from './getLoginPassword'

import type { StateSchema } from 'app/providers/StoreProvider'

describe('getLoginPassword Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
  test('State password Test', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('123')
  })
})
