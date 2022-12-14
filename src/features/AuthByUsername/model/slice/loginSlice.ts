import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { loginByUsername, LoginErrors } from '../services/loginByUsername/loginByUsername'

import type { LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // тип PayloadAction помогает определить что мы ожидаем внутри action, какой payload (data)
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },

  // Дополнительное поля для изменения state
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = LoginErrors.INCORRECT_DATA
      })
  },
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
