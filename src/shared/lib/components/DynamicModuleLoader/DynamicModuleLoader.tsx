import { Reducer } from '@reduxjs/toolkit'
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList

  // Для ситуаций, когда удалять reducer при демонтировании компонента ненадо
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props

  // TODO: Change type for store
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      // В момент монтирования компонента, нам необходимо в главный store добавить reducer,
      // который будет ипользоваться в оборачиваемом компоненте
      store.reducerManager.add(name, reducer)

      // Отлавливаем момент инициализации очередного редюсера
      dispatch({ type: `@INIT ${name} reducer` })
    })

    // При демонтировании мы удаляем этот reducer
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          dispatch({ type: `@DESTROY ${name} reducer` })
          store.reducerManager.remove(name)
        })
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line
  return <>{children}</>
}
