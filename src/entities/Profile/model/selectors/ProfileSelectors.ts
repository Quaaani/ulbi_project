import type { StateSchema } from 'app/providers/StoreProvider'

export const getProfileError = (state: StateSchema) => state.profile?.error

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly

export const getProfileData = (state: StateSchema) => state.profile?.data

export const getProfileFormData = (state: StateSchema) => state.profile?.formData

export const getProfileFormFieldError = (state: StateSchema) => state.profile?.formFieldErrors

export const getProfileFormFieldErrorCodes = (state: StateSchema) => state.profile?.formFieldErrorCodes
