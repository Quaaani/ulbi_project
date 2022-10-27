import { Country, Currency } from 'shared/const'

import { ProfileError } from '../services/fetchProfileData/fetchProfileData'

export interface Profile {
  uid?: string
  firstName?: string
  lastName?: string
  age?: number
  countryIso?: Country
  currencyIso?: Currency
  avatar?: string
  isAdmin?: boolean
}

export interface ProfileSchema {
  data?: Profile
  formData?: Profile
  isLoading: boolean
  readonly: boolean
  error?: ProfileError
}
