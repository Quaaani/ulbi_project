import { createSlice, PayloadAction } from '@reduxjs/toolkit'


import { fetchProfileData, ProfileError } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

import type { Profile, ProfileSchema } from '../types/profileSchema'

import { profileFormFieldErrorMessages } from '@/shared/const'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  error: undefined,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      }
      state.formFieldErrorCodes = undefined
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.formData = state.data
      state.formFieldErrorCodes = undefined
    },
    setAgeError: (state) => {
      state.formFieldErrors = {
        ...state.formFieldErrors,
        age: profileFormFieldErrorMessages.age,
      }
    },
    clearAgeError: (state) => {
      state.formFieldErrors = {
        ...state.formFieldErrors,
        age: '',
      }
    },
  },
  // Дополнительное поля для изменения state
  extraReducers: (builder) => {
    builder
      // fetchProfileData
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.formData = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = ProfileError.FORBIDDEN
      })

      // updateProfileData
      .addCase(updateProfileData.pending, (state, action) => {
        state.formFieldErrorCodes = undefined
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.formData = action.payload
        state.readonly = true
        state.formFieldErrorCodes = undefined
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.formFieldErrorCodes = action.payload
      })
  },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
