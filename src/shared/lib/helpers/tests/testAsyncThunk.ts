import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

// Тип, который представляет из себя функцию, принимающую аргумент и возвращает AsyncThunkAction
type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

// 1 generic - Тип, который возвращает Thunk
// 2 generic - Аргумент
// 3 generic - Тип, который возвращает Thunk в случае ошибки
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>

  getState: () => StateSchema

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)

    return result
  }
}
