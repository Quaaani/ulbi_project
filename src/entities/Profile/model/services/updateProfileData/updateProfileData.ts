import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'

import { getProfileFormData } from '../../selectors/ProfileSelectors'
import { Profile } from '../../types/profileSchema'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI

  const formData = getProfileFormData(getState())


  try {
    const response = await extra.api.put<Profile>('/profile', formData)

    return response.data
  } catch (error) {
    return rejectWithValue('updateProfileData Error')
  }
})
