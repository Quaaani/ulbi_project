import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'

import { Profile } from '../../types/profileSchema'

export enum ProfileErrors {
  NOT_FOUND = 'notFound',
  FORBIDDEN = 'forbidden',
}

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ProfileErrors>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI

  try {
    const response = await extra.api.get<Profile>('/profile')

    return response.data
  } catch (error) {
    return rejectWithValue(ProfileErrors.NOT_FOUND)
  }
})
