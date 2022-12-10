import { Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api'

interface GetArticleRatingArgs {
  userId: string
  articleId: string
}

interface RateArticleArgs extends GetArticleRatingArgs {
  rate: number
  feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArgs>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArgs>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg
      }),
    }),
  }),
})

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
