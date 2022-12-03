import { ReducersMapObject } from '@reduxjs/toolkit'
import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { createReduxStore } from '../config/store'

import type { StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props

  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject)

  return <Provider store={store}>{children}</Provider>
}
