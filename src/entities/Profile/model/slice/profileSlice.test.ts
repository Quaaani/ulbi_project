import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { profileFormFieldErrorMessages } from 'shared/const'

import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileFormFieldErrorCode } from '../consts/consts'

import { profileActions, profileReducer } from './profileSlice'

import type { ProfileSchema } from '../types/profileSchema'

describe('profileSlice Reducers Test', () => {
  const mockData = {
    id: '2a8337d8-8b44-48be-8518-abe45e18df9d',
    firstName: 'Igorbek',
    lastName: 'Maratov',
    age: '42',
    countryIso: Country.KG,
    currensyIso: Currency.KZT,
  }

  test('setReadonly Test', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true })
  })
  test('updateProfile Test', () => {
    const state: DeepPartial<ProfileSchema> = { formData: mockData }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          firstName: 'Anton',
          lastName: 'Belochkin',
        }),
      ),
    ).toEqual({
      formData: { ...mockData, firstName: 'Anton', lastName: 'Belochkin' },
    })
  })
  test('cancelEdit Test', () => {
    const state: DeepPartial<ProfileSchema> = { formFieldErrorCodes: [] }
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      formFieldErrorCodes: undefined,
      formData: undefined,
      readonly: true,
    })
  })
  test('setAgeError Test', () => {
    const state: DeepPartial<ProfileSchema> = { formFieldErrors: { age: '' } }
    expect(profileReducer(state as ProfileSchema, profileActions.setAgeError())).toEqual({
      formFieldErrors: { age: profileFormFieldErrorMessages.age },
    })
  })
  test('clearAgeError Test', () => {
    const state: DeepPartial<ProfileSchema> = {
      formFieldErrors: { age: profileFormFieldErrorMessages.age },
    }
    expect(profileReducer(state as ProfileSchema, profileActions.clearAgeError())).toEqual({ formFieldErrors: { age: '' } })
  })
})

describe('profileSlice Extra Reducers Test', () => {
  const mockData = {
    id: '2a8337d8-8b44-48be-8518-abe45e18df9d',
    firstName: 'Igorbek',
    lastName: 'Maratov',
    age: '42',
    countryIso: Country.KG,
    currensyIso: Currency.KZT,
  }

  const mockMiscData = {
    isLoading: false,
    formFieldErrorCodes: [ProfileFormFieldErrorCode.SERVER_ERROR],
  }

  test('updateProfileData Pending Test', () => {
    const state: DeepPartial<ProfileSchema> = mockMiscData
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({ isLoading: true, formFieldErrorCodes: undefined })
  })
  test('updateProfileData Fulfilled Test', () => {
    const state: DeepPartial<ProfileSchema> = mockMiscData
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(mockData, ''))).toEqual({
      isLoading: false,
      formFieldErrorCodes: undefined,
      readonly: true,
      formData: mockData,
      data: mockData,
    })
  })
})
