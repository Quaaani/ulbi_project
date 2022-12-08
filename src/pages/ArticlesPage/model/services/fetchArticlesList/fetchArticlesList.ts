import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors'

import type { ThunkConfig } from '@/app/providers/StoreProvider'

import { Article, ArticleType } from '@/entities/Article'
import { addQueryParams } from '@/shared/lib/url'



interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const page = getArticlesPageNumber(getState())
    const limit = getArticlesPageLimit(getState())
    const sort = getArticlesPageSort(getState())
    const order = getArticlesPageOrder(getState())
    const search = getArticlesPageSearch(getState())
    const type = getArticlesPageType(getState())

    try {
      addQueryParams({
        sort,
        order,
        search,
        type,
      })

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue('Error fetchArticlesList')
    }
  },
)
