import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'

import { StateSchema } from './StateSchema'

// Отдельная функция для создания Store
// С помощью нее мы можем переиспользовать Store для Storybook или Jest
export const createReduxStore = (initialState?: StateSchema) =>
  configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },

    // Отключаем devTools для Production mode
    devTools: __IS_DEV__,

    // Инициализация Store для Storybook и Jest
    preloadedState: initialState,
  })
