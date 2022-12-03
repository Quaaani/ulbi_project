export { ArticleDetailsAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async'

export type { ArticleDetailsCommentsSchema } from './model/types/articleDetailsCommentsSchema'
export { articleDetailsCommentsReducer } from './model/slice/articleDetailsCommentsSlice'

export type { ArticleDetailsRecommendationsSchema } from './model/types/articleDetailsRecommendationsSchema'
export type { ArticleDetailsPageSchema } from './model/types/index'

export { articleDetailsPageReducer } from './model/slice/index'
