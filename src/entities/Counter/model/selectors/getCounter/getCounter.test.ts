import { getCounter } from './getCounter'

import type { StateSchema } from 'app/providers/StoreProvider'

describe('getCounter Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
