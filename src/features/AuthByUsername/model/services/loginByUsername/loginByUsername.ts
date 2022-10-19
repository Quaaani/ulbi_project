import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from 'fsd.entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const'

interface LoginByUsernameProps {
  username: string
  password: string
}

export enum LoginErrors {
  INCORRECT_DATA = 'incorrectData',
  INCORRECT_TYPE = 'incorrectType',
}

// createAsyncThunk принимает 2 generic:
// 1 - то, что мы возвращаем
// 2 - аргумент
export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  // rejectValue - типизация для ошибки, которая попадает в rejectWithValue
  { rejectValue: string }
>(
  'login/loginByUsername',
  async (requestData: LoginByUsernameProps, thunkAPI) => {
    const { username, password } = requestData
    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
        username,
        password,
      })

      if (!response.data) {
        throw new Error('Empty response data: loginByUsername')
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      // у thunkAPI есть много методов, rejectWithValue - для обработки ошибок
      return thunkAPI.rejectWithValue(LoginErrors.INCORRECT_DATA)
    }
  },
)
