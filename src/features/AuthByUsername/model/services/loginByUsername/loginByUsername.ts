import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const'

interface LoginByUsernameProps {
  username: string
  password: string
}

export enum LoginErrors {
  INCORRECT_DATA = 'incorrectData',
  INCORRECT_TYPE = 'incorrectType',
}

// 1й вызов Dispatch
// createAsyncThunk принимает 2 generic:
// 1 - то, что мы возвращаем
// 2 - аргумент
export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<LoginErrors>
>(
  'login/loginByUsername',
  async (requestData: LoginByUsernameProps, thunkAPI) => {
    const { username, password } = requestData
    const { extra, dispatch, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password,
      })

      if (!response.data) {
        throw new Error('Empty response data: loginByUsername')
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

      // 2й вызов Dispatch
      dispatch(userActions.setAuthData(response.data))

      extra.navigate?.('/profile')

      // 3й вызов Dispatch
      return response.data
    } catch (error) {
      // у thunkAPI есть много методов, rejectWithValue - для обработки ошибок
      return rejectWithValue(LoginErrors.INCORRECT_DATA)
    }
  },
)
