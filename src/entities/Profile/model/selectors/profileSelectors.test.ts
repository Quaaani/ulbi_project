import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { ProfileError } from '../services'
import { ProfileFormFieldErrorCode } from '../types/profileSchema'

import {
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileData,
  getProfileFormData,
  getProfileFormFieldError,
  getProfileFormFieldErrorCodes,
} from './profileSelectors'

const mockData = {
  uid: '2a8337d8-8b44-48be-8518-abe45e18df9d',
  firstName: 'Igorbek',
  lastName: 'Maratov',
  age: '42',
  countryIso: Country.KG,
  currensyIso: Currency.KZT,
}

describe('getProfileError Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: ProfileError.FORBIDDEN,
      },
    }
    expect(getProfileError(state as StateSchema)).toEqual(
      ProfileError.FORBIDDEN,
    )
  })
  test('Error Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})

describe('getProfileIsLoading Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
  })
  test('Error Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
  })
})

describe('getProfileReadonly Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })
  test('Error Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})

describe('getProfileData Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: mockData,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(mockData)
  })
  test('Error Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})

describe('getProfileFormData Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        formData: mockData,
      },
    }
    expect(getProfileFormData(state as StateSchema)).toEqual(mockData)
  })
  test('Error Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileFormData(state as StateSchema)).toEqual(undefined)
  })
})

describe('getProfileFormFieldError Selector Test', () => {
  const mockError = {
    age: 'Incorrect Age',
  }

  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        formFieldErrors: mockError,
      },
    }
    expect(getProfileFormFieldError(state as StateSchema)).toEqual(mockError)
  })
  test('Error Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileFormFieldError(state as StateSchema)).toEqual(undefined)
  })
})

describe('getProfileFormFieldErrorCodes Selector Test', () => {
  test('Default Test', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        formFieldErrorCodes: [ProfileFormFieldErrorCode.NO_USER_DATA],
      },
    }
    expect(getProfileFormFieldErrorCodes(state as StateSchema)).toEqual([
      ProfileFormFieldErrorCode.NO_USER_DATA,
    ])
  })
  test('Error Test', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileFormFieldErrorCodes(state as StateSchema)).toEqual(
      undefined,
    )
  })
})
