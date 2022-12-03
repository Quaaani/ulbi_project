export { UserRole } from './model/consts/consts'

export type { User, UserSchema } from './model/types/userSchema'

export { userActions, userReducer } from './model/slice/userSlice'

export { getUserAuthData, getUserInited, getUserRoles, isUserAdmin, isUserManager } from './model/selectors/userSelectors'
