import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

import { UserRole } from '../types/userSchema'

export const getUserAuthData = (state: StateSchema) => state.user.authData

export const getUserInited = (state: StateSchema) => state.user._inited

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles || []

export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)))

export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)))
