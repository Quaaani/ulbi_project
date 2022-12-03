import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article } from 'entities/Article'

import { fetchRecommendations } from '../services'

import type { StateSchema } from 'app/providers/StoreProvider'
import type { ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticleDetailsRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
)

export const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder

      // fetchCommentsByArticleId
      .addCase(fetchRecommendations.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice
