import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'


import { fetchCommentsByArticleId } from '../services'

import type { StateSchema } from '@/app/providers/StoreProvider'
import type { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'

import { Comment } from '@/entities/Comment'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
})

export const getArticleDetailsComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
)

export const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder

      // fetchCommentsByArticleId
      .addCase(fetchCommentsByArticleId.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
