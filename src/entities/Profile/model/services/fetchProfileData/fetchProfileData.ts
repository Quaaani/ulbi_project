import { createAsyncThunk } from '@reduxjs/toolkit'

import { Profile } from '../../types/profileSchema'

import type { ThunkConfig } from '@/app/providers/StoreProvider'

export enum ProfileError {
  FORBIDDEN = 'You don`t have permission to access',
}

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<ProfileError>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue(ProfileError.FORBIDDEN)
    }
  },
)
