import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'

// Отдельная функция для создания Store
// С помощью нее мы можем переиспользовать Store для Storybook или Jest
export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  // Корневой reducer хранит только те reducers, которые являются обязательными
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    // Все редюсеры
    reducer: reducerManager.reduce,

    // Отключаем devTools для Production mode
    devTools: __IS_DEV__,

    // Инициализация Store для Storybook и Jest
    preloadedState: initialState,
  })

  // TODO: Create key reducerManager in store
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
