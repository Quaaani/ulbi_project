import { AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'

import type { StateSchema } from '@/app/providers/StoreProvider'

// Тип, который представляет из себя функцию, принимающую аргумент и возвращает AsyncThunkAction
type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

// Указываем модуль, который хотим замокать
jest.mock('axios')

// Глубокое мокание
const mockedAxios = jest.mocked(axios, true)

// 1 generic - Тип, который возвращает Thunk
// 2 generic - Аргумент
// 3 generic - Тип, который возвращает Thunk в случае ошибки
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>

  getState: () => StateSchema

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  api: jest.MockedFunctionDeep<AxiosStatic>

  navigate: jest.MockedFn<any>

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)
    this.navigate = jest.fn()
    this.api = mockedAxios
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    })

    return result
  }
}
