import { StateSchema } from 'app/providers/StoreProvider'

import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginIsLoading(state as StateSchema)).toEqual('')
  })
  test('State isLoading Test', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })
})
