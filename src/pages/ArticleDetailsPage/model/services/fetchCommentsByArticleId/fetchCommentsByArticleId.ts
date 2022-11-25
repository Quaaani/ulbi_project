import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    if (!articleId) {
      return rejectWithValue('Error fetchCommentsByArticleId: No articleId')
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments/', {
        params: {
          articleId,
          _expand: 'user',
        },
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue('Error fetchCommentsByArticleId')
    }
  },
)
