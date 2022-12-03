import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import type { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema'

// Функция принимает дефолтные reducers
export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers }

  // Создает корневой reducer
  let combinedReducer = combineReducers(reducers)

  // Массив, который хранит названия reducers, которые мы хотим удалить
  const keysToRemove: StateSchemaKey[] = []

  return {
    // Просто возвращает reducers
    getReducerMap: () => reducers,

    // Сам reducer
    reduce: (state: StateSchema, action: AnyAction) => {
      // Если в массиве для удаления есть какие-то ключи,
      // то эти ключи удаляем из state
      if (keysToRemove.length > 0) {
        state = { ...state }

        keysToRemove.forEach((key) => {
          delete state[key]
        })
      }

      // Возвращаем новый reducer без лишних reducers
      return combinedReducer(state, action)
    },

    // По ключу добавляет новый reducer
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    // Добавляет ключ в массив и удаляет его из reducers
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    },
  }
}
