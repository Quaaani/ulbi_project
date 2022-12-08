import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkConfig } from '@/app/providers/StoreProvider'

import { Article } from '@/entities/Article'


export const fetchRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articleDetailsPage/fetchRecommendations',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<Article[]>('/articles/', {
        params: {
          _expand: 'user',
          _limit: 5,
        },
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue('Error fetchRecommendations')
    }
  },
)
