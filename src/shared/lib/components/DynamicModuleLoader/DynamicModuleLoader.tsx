import { Reducer } from '@reduxjs/toolkit'
import { ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

import type { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  children?: ReactNode
  reducers: ReducersList

  // Для ситуаций, когда удалять reducer при демонтировании компонента ненадо
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount } = props

  // TODO: Change type for store
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey]

      // Добавляем новый редюсер, если его нет
      if (!mounted) {
        // В момент монтирования компонента, нам необходимо в главный store добавить reducer,
        // который будет ипользоваться в оборачиваемом компоненте
        store.reducerManager.add(name as StateSchemaKey, reducer)

        // Отлавливаем момент инициализации очередного редюсера
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })

    // При демонтировании мы удаляем этот reducer
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey)

          // Отлавливаем момент удаления очередного редюсера
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line
  return <>{children}</>
}
