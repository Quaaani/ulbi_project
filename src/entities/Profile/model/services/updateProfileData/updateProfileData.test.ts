import { ProfileFormFieldErrorCode } from '../../consts/consts'

import { updateProfileData } from './updateProfileData'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { TestAsyncThunk } from '@/shared/lib/helpers/tests/testAsyncThunk'



describe('updateProfileData Async Test', () => {
  const mockData = {
    id: '2a8337d8-8b44-48be-8518-abe45e18df9d',
    firstName: 'Igorbek',
    lastName: 'Maratov',
    age: '42',
    countryIso: Country.KG,
    currensyIso: Currency.KZT,
  }

  test('Success PUT Request Test', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: mockData,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: mockData }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(mockData)
  })
  test('Error PUT Request Test', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: mockData,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ProfileFormFieldErrorCode.SERVER_ERROR])
  })
  test('Error PUT Validate Test', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: { ...mockData, firstName: '', lastName: '' },
      },
    })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ProfileFormFieldErrorCode.INCORRECT_USER_DATA])
  })
})
