
export interface User {
  id: string
  username: string
  avatar?: string
}

export interface UserSchema {
  authData?: User

  // Флаг для определения инициализации пользователя
  // префикс "_" означает, что флаг нельзя менять
  _inited?: boolean
}
