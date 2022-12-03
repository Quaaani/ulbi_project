import { getLoginUsername } from './getLoginUsername'

import type { StateSchema } from 'app/providers/StoreProvider'

describe('getLoginUsername Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
  test('State username Test', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'qwerty',
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('qwerty')
  })
})
