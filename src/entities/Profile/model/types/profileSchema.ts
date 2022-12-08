import { ProfileFormFieldErrorCode } from '../consts/consts'
import { ProfileError } from '../services/fetchProfileData/fetchProfileData'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'


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
