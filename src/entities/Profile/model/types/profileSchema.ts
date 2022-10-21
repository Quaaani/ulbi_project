import { Country, Currency } from 'shared/const'

export interface Profile {
  uid: string
  firstName: string
  lastName: string
  age: string
  countryIso: Country
  currencyIso: Currency
  avatar: string
  isAdmin: boolean
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  readonly: boolean
  error?: string
}
