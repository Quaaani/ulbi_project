import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Необязательным делаем для асинхронных редюсеров
  // Которые подгружаются только в нужное время, а не всегда
  loginForm?: LoginSchema
}
