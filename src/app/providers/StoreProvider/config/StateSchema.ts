import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { NavigateOptions, To } from 'react-router-dom'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Необязательным делаем для асинхронных редюсеров
  // Которые подгружаются только в нужное время, а не всегда
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

// Тип для хранения ключе наших reducers
export type StateSchemaKey = keyof StateSchema

// Описание reducerManager функции
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

// Описание для store с доп функцией reducerManager
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
