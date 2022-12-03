import { UserRole } from '../consts/consts'

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
}

export interface UserSchema {
  authData?: User

  // Флаг для определения инициализации пользователя
  // префикс "_" означает, что флаг нельзя менять
  _inited?: boolean
}
