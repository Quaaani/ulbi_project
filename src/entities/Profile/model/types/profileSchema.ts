import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { ProfileError } from '../services/fetchProfileData/fetchProfileData'

export interface Profile {
  uid?: string
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
  formFieldErrors?: ProfileFormFieldErrors
  isLoading: boolean
  readonly: boolean
  error?: ProfileError
}
