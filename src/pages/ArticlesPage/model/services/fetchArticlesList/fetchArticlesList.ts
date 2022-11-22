import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user'
      }
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (error) {
    return rejectWithValue('Error fetchArticlesList')
  }
})

