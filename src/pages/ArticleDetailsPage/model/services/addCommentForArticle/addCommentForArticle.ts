import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from 'entities/Article'
import { getUserAuthData } from 'entities/User'

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkAPI

  const userData = getUserAuthData(getState())
  const articleData = getArticleDetailsData(getState())

  if (!userData || !text || !articleData) {
    return rejectWithValue('addCommentForArticle Error: No Data')
  }

  try {
    const response = await extra.api.post<Comment>('/comments', {
      articleId: articleData.id,
      userId: userData.id,
      text,
    })

    if (!response.data) {
      throw new Error()
    }

    dispatch(fetchCommentsByArticleId(articleData.id))

    return response.data
  } catch (error) {
    return rejectWithValue('Error addCommentForArticle')
  }
})
