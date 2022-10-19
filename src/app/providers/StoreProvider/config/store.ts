import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'

import { StateSchema } from './StateSchema'

// Отдельная функция для создания Store
// С помощью нее мы можем переиспользовать Store для Storybook или Jest
export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  }

  return configureStore<StateSchema>({
    // Все редюсеры
    reducer: rootReducers,

    // Отключаем devTools для Production mode
    devTools: __IS_DEV__,

    // Инициализация Store для Storybook и Jest
    preloadedState: initialState,
  })
}
