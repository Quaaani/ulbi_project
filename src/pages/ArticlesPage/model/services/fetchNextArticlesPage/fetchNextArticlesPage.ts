import { createAsyncThunk } from '@reduxjs/toolkit'

import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNumber } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

import type { ThunkConfig } from '@/app/providers/StoreProvider'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>('articlesPage/fetchNextArticlesPage', async (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI
  const hasMore = getArticlesPageHasMore(getState())
  const page = getArticlesPageNumber(getState())
  const isLoading = getArticlesPageIsLoading(getState())

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1))
    dispatch(fetchArticlesList({}))
  }
})
