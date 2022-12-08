import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import { createReducerManager } from './reducerManager'

import type { StateSchema, ThunkExtraArg } from './StateSchema'

import { counterReducer } from '@/entities/Counter'
import { userReducer } from '@/entities/User'
import { scrollRestorationReducer } from '@/features/ScrollRestoration'
import { $api, rtkApi } from '@/shared/api'



// Отдельная функция для создания Store
// С помощью нее мы можем переиспользовать Store для Storybook или Jest
export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
  // Корневой reducer хранит только те reducers, которые являются обязательными
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollRestoration: scrollRestorationReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArgument: ThunkExtraArg = {
    api: $api,
  }

  const store = configureStore({
    // Все редюсеры
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,

    // Отключаем devTools для Production mode
    devTools: __IS_DEV__,

    // Инициализация Store для Storybook и Jest
    preloadedState: initialState,

    // Добавляем instance axios как extra аргументы
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware({
        thunk: {
          extraArgument,
        },
      }).concat(rtkApi.middleware),
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
