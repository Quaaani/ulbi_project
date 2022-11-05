import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchArticleById } from '../services'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { Article } from '../types/articleSchema'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // fetchArticleById
      .addCase(fetchArticleById.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice

