import { User } from "entities/User"

export interface Comment {
  id: string
  articleId: string
  user: User
  text: string
}
