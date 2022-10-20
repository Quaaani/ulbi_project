import { CounterSchema } from '../types/counterSchema'

import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice Slice Test', () => {
  test('Default Empty State Test', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    })
  })
  test('Decrement Test', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    })
  })
  test('Increment Test', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    })
  })
})
