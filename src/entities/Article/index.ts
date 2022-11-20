export * from './ui/ArticleDetails'

export type { Article } from './model/types/articleSchema'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'
export { getArticleDetailsData } from './model/selectors/articleDetailsSelectors'
export { articleDetailsReducer } from './model/slice/articleDetailsSlice'
