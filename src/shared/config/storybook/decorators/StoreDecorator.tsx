import { Story } from '@storybook/react'

import type { ReducersList } from '@/shared/lib/components'
import type { StateSchema } from '@/app/providers/StoreProvider'

import { articleDetailsReducer } from '@/entities/Article'
import { profileReducer } from '@/entities/Profile'
import { addCommentFormReducer } from '@/features/AddCommentForm'
import { loginReducer } from '@/features/AuthByUsername'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage'
import { StoreProvider } from '@/app/providers/StoreProvider'


const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator = (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
  (
    <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  )
