import { fetchProfileData, ProfileError } from './fetchProfileData'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { TestAsyncThunk } from '@/shared/lib/helpers/tests/testAsyncThunk'


describe('fetchProfileData Async Test', () => {
  const mockData = {
    id: '2a8337d8-8b44-48be-8518-abe45e18df9d',
    firstName: 'Igorbek',
    lastName: 'Maratov',
    age: '42',
    countryIso: Country.KG,
    currensyIso: Currency.KZT,
  }

  test('Success GET Request Test', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: mockData }))
    const result = await thunk.callThunk('2a8337d8-8b44-48be-8518-abe45e18df9d')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(mockData)
  })
  test('Error GET Request Test', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('2a8337d8-8b44-48be-8518-abe45e18df9d')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual(ProfileError.FORBIDDEN)
  })
})
