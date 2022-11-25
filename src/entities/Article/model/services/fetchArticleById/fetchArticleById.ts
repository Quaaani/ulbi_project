import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'

import { Article } from '../../types/articleSchema'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue('fetchArticleById Error')
    }
  },
)
