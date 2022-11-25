import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { LoginSchema } from 'features/AuthByUsername'
import { ScrollRestorationSchema } from 'features/ScrollRestoration'
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  scrollRestoration: ScrollRestorationSchema

  // Необязательным делаем для асинхронных редюсеров
  // Которые подгружаются только в нужное время, а не всегда
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

// Тип для хранения ключе наших reducers
export type StateSchemaKey = keyof StateSchema

// Описание reducerManager функции
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void

  // true - вмонтирован, false - демонтирован
  // mountedReducers: OptionalRecord<StateSchemaKey, boolean>
}

// Описание для store с доп функцией reducerManager
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
