import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/helpers'

import { loginByUsername, LoginErrors } from './loginByUsername'

// Указываем модуль, который хотим замокать
jest.mock('axios')

// Глубокое мокание
const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername Async Test', () => {
  test('Default Test', async () => {
    const data = { username: '123', id: '1' }

    // Позволяет замокать возвращаемое значение
    mockedAxios.post.mockReturnValue(Promise.resolve({ data }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({
      username: 'qwerty',
      password: '123',
    })

    // Проверка был ли вызван dispatch со следующим аргументом
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(data))

    // Проверка на количество вызовов dispatch
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)

    // Проверка был ли выполнен запрос POST
    expect(mockedAxios.post).toHaveBeenCalled()

    // Проверка был ли завершен запрос
    expect(result.meta.requestStatus).toBe('fulfilled')

    // Проверка на ответ с сервера
    expect(result.payload).toEqual(data)
  })
  test('Error Request Test', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({
      username: 'qwerty',
      password: '123',
    })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual(LoginErrors.INCORRECT_DATA)
  })
})
