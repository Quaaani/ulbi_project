import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article'
import { profileReducer } from 'entities/Profile'
import { addCommentFormReducer } from 'features/AddCommentForm'
import { loginReducer } from 'features/AuthByUsername'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage'
import { ReducersList } from 'shared/lib/components'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
}

export const StoreDecorator =
  (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
