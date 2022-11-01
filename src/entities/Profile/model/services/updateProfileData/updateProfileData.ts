import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'

import { getProfileFormData } from '../../selectors/ProfileSelectors'
import { Profile, ProfileFormFieldErrorCode } from '../../types/profileSchema'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ProfileFormFieldErrorCode[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI

  const formData = getProfileFormData(getState())

  const formDataErrors = validateProfileData(formData)

  if (formDataErrors.length) {
    return rejectWithValue(formDataErrors)
  }

  try {
    const response = await extra.api.put<Profile>('/profile', formData)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (error) {
    return rejectWithValue([ProfileFormFieldErrorCode.SERVER_ERROR])
  }
})
