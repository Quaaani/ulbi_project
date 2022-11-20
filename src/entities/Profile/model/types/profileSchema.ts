import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { ProfileError } from '../services/fetchProfileData/fetchProfileData'

export enum ProfileFormFieldErrorCode {
  NO_USER_DATA = 'NO_USER_DATA',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  id?: string
  firstName?: string
  lastName?: string
  age?: string
  countryIso?: Country
  currencyIso?: Currency
  avatar?: string
  isAdmin?: boolean
}

export interface ProfileFormFieldErrors {
  age: string
}

export interface ProfileSchema {
  data?: Profile
  formData?: Profile
  isLoading: boolean
  readonly: boolean
  error?: ProfileError
  formFieldErrors?: ProfileFormFieldErrors
  formFieldErrorCodes?: ProfileFormFieldErrorCode[]
}
