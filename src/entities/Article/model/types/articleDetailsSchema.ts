import { Article } from "./articleSchema"

export interface ArticleDetailsSchema {
  isLoading: boolean
  error?: string
  data?: Article
}
