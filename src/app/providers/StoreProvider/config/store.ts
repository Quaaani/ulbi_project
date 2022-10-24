import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { NavigateOptions, To } from 'react-router-dom'
import { $api } from 'shared/api'

import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'

// Отдельная функция для создания Store
// С помощью нее мы можем переиспользовать Store для Storybook или Jest
export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  // Корневой reducer хранит только те reducers, которые являются обязательными
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    // Все редюсеры
    reducer: reducerManager.reduce,

    // Отключаем devTools для Production mode
    devTools: __IS_DEV__,

    // Инициализация Store для Storybook и Jest
    preloadedState: initialState,

    // Добавляем instance axios и navigate как extra аргументы
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  })

  // TODO: Create key reducerManager in store
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

// С помощью ReturnType мы берем typeof от функции,
// тем самым получая тип того, что эта функция должна вернуть (store)
// Чтобы получить тип для dispatch, нужно указать его нативно
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
