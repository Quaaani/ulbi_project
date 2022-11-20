import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { ProfileFormFieldErrorCode } from '../../types/profileSchema'

import { validateProfileData } from './validateProfileData'

describe('validateProfileData Test', () => {
  const mockData = {
    id: '2a8337d8-8b44-48be-8518-abe45e18df9d',
    firstName: 'Igorbek',
    lastName: 'Maratov',
    age: '42',
    countryIso: Country.KG,
    currensyIso: Currency.KZT,
  }

  test('Successful Validation Test', async () => {
    const result = validateProfileData(mockData)

    expect(result).toEqual([])
  })
  test('Without firstName and lastName Test', async () => {
    const result = validateProfileData({
      ...mockData,
      firstName: '',
      lastName: '',
    })

    expect(result).toEqual([ProfileFormFieldErrorCode.INCORRECT_USER_DATA])
  })
  test('Without age Test', async () => {
    const result = validateProfileData({ ...mockData, age: undefined })

    expect(result).toEqual([ProfileFormFieldErrorCode.INCORRECT_USER_AGE])
  })
  test('Without all Test', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ProfileFormFieldErrorCode.INCORRECT_USER_DATA,
      ProfileFormFieldErrorCode.INCORRECT_USER_AGE,
    ])
  })
  test('No Data Test', async () => {
    const result = validateProfileData()

    expect(result).toEqual([ProfileFormFieldErrorCode.NO_USER_DATA])
  })
})
